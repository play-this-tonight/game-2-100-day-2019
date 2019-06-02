import React from 'react';
import { getLettersFromSelection } from '../Utility/gameState/gameBoardUtilities';
import { gameColumn, gameRow, piece, selected, lastHighlighted } from './GameState.module.css';
import cx from 'classnames';
import { attachGameConsumer } from './GameState';

const getSelectedClasses = (selectedSet, coord) => {
  const selectedArray = [...selectedSet];

  if (!selectedArray.length) return {};

  return {
    [selected]: selectedSet.has(coord),
    [lastHighlighted]: selectedArray.slice(-1)[0] === coord
  }
}

const GameBoard = ({ selectedIndices, selectPiece, addLetter, gameBoard }) => {
  return (
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
                    const letters = getLettersFromSelection([[xAxis, yAxis]], gameBoard);

                    if (letters.length !== 0) {
                      return selectPiece(xAxis, yAxis);
                    }

                    return addLetter([xAxis, yAxis], gameBoard);
                  }}
                  className={cx(gameColumn, piece, getSelectedClasses(selectedIndices, `${xAxis}, ${yAxis}`))}
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
  )
}

export default attachGameConsumer(GameBoard);
