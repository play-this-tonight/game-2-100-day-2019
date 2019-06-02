import React, { useState, createContext } from 'react';
import { getNextLetter } from '../Utility/randomLetters/index';
import { generateNewGameBoard } from '../Utility/gameState/index';
import { addLetterToGameBoard } from '../Utility/gameState/addLetterToGameBoard';
import { removeFromGameBoard } from '../Utility/gameState/deleteWord';
import { combineGameBoardPieces, sortCoordinates } from '../Utility/gameState/combineGameBoardPieces';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState(generateNewGameBoard(4, 4))
  const [currentLetter, setCurrentLetter] = useState(getNextLetter());
  const [selectedIndices, setSelectedIndex] = useState(new Set());

  const takeActionOnGameState = (selectedCoordinates, gameBoard, action) => () => {
    const newGameState = action(selectedCoordinates, gameBoard);

    if (typeof newGameState === 'string') return alert(newGameState);

    setSelectedIndex(new Set());
    setGameBoard(newGameState);
  }

  const selectPieceOnBoard = (xAxis, yAxis) => {
    if (selectedIndices.has(`${xAxis}, ${yAxis}`)) {
      selectedIndices.delete(`${xAxis}, ${yAxis}`);
    } else {
      selectedIndices.add(`${xAxis}, ${yAxis}`);
    }
    setSelectedIndex(new Set([...selectedIndices]));
    return;
  }

  const addLetter = (coordinates) => {
    const newGameState = addLetterToGameBoard(currentLetter, coordinates, gameBoard);

    if (!newGameState) return alert('Something went wrong');

    setSelectedIndex(new Set());
    setGameBoard(newGameState);
    setCurrentLetter(getNextLetter());
    return;
  }

  const selectedCoordinates = [...selectedIndices].map(index => index
    .split(", ")
    .map(stringInt => Number(stringInt)))

  const sortedCoordinates = sortCoordinates(selectedCoordinates);

  const selectedLetters = sortedCoordinates
    .map(arrayIndex => gameBoard[arrayIndex[1]][arrayIndex[0]])
    .join(" ");

  return (
    <GameContext.Provider value={{
      gameBoard,
      selectPiece: selectPieceOnBoard,
      addLetter,
      selectedIndices,
      currentLetter,
      selectedLetters,
      combineLetters: takeActionOnGameState(selectedCoordinates, gameBoard, combineGameBoardPieces),
      deleteLeters: takeActionOnGameState(selectedCoordinates, gameBoard, removeFromGameBoard)
    }}>
      {children}
    </GameContext.Provider>
  )
};

const attachGameConsumer = (AttachedComponent) => () => (
  <GameContext.Consumer>
    {(context) => <AttachedComponent {...context} />}
  </GameContext.Consumer>
);

export {
  GameProvider,
  attachGameConsumer,
};
