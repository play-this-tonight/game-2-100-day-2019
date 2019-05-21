import React from 'react';
import { gameColumn, gameRow, gameDisplay, nextPiece } from './GameBoard.module.css';

const gameRows = [0, 1, 2, 3];
const gameColumns = [0, 1, 2, 3];

const GameBoard = () => (
  <div className={gameDisplay}>
    <div>
    {
      gameRows.map( (row) => (
        <div 
          className={gameRow}
          key={`row ${row}`}
        >
          {
            gameColumns.map( (column) => (
              <div
                onClick={ () => { console.log(`Clicked square ${row}, ${column}`) }}
                className={gameColumn}
                key={`column ${column}`}
              />
            ))
          }
        </div>
      ))
    }
  </div>
  <aside>
    <p>Next Piece</p>
    <div className={nextPiece} />
  </aside>
  </div>
);

export default GameBoard;
