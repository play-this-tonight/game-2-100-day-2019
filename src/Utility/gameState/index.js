// import { addLetterToGameBoard } from './addLetterToGameBoard';
// Parts of the Game State


const generateNewGameBoard = (height, width) => {
  const arrayValues = Array(width).fill(null);
  return Array(height).fill(arrayValues);
}

export {
  generateNewGameBoard,
}



/**
 * Functions to define
 *
 * 0. Adding a new letter to a gameBoard.
 * 1. Combining two pieces of game board together
 * 2. determining whether or not the clue is a word.
 * 3.
 */
