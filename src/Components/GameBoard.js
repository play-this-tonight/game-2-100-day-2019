import React, { useState } from 'react';
import cx from 'classnames';
import { gameColumn, gameRow, gameDisplay, nextPiece, piece } from './GameBoard.module.css';
import { getNextLetter } from '../Utility/randomLetters/index';
import { generateNewGameBoard } from '../Utility/gameState/index';
import { addLetterToGameBoard } from '../Utility/gameState/addLetterToGameBoard';

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(generateNewGameBoard(4, 4))
  const [currentLetter, setCurrentLetter] = useState(getNextLetter());

  return (
    <div className={gameDisplay}>
      <div>
        {
          gameBoard.map((row, yAxis) => (
            <div
              className={gameRow}
              key={`row ${yAxis}`}
            >
              {
                row.map((letter, xAxis) => (
                  <div
                    onClick={() => {
                      const newGameState = addLetterToGameBoard(currentLetter, [xAxis, yAxis], gameBoard);

                      if (newGameState === null) return alert('Invalid placement');

                      setGameBoard(newGameState);
                      setCurrentLetter(getNextLetter());
                      return;
                    }}
                    className={cx(gameColumn, piece)}
                    key={`column ${xAxis}`}
                  >
                    <p>
                      {letter}
                    </p>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
      <aside>
        <p>Next Piece</p>
        <div className={cx(nextPiece, piece)}>
          <p>
            {currentLetter}
          </p>
        </div>
      </aside>
    </div>
  )
};

export default GameBoard;
