import {
  coordinatesAreSequential,
  getLettersFromSelection,
  inCoordinates,
  sortCoordinates,
  getXAxisAt,
  getYAxisAt,
} from './gameBoardUtilities';
import {
  ERROR_NON_SEQUENTIAL,
  ERROR_NULL_SELECTED,
  ERROR_DIFFERENT_LENGTHS,
} from './gameStateConstants';
import { crawlAxisReturnIndices } from './constructSelectionFromGameBoard';

/**
 * 
 * @param {*} initialCoordinates 
 * @param {*} gameBoard 
 * 
 * WIP - should take a seed coordinate and return the relatd coordinate set. 
 */
const getCoordinateSetToCombine = (initialCoordinates, gameBoard) => {
  const xCoord = initialCoordinates[0];
  const yCoord = initialCoordinates[1];

  const xSet = crawlAxisReturnIndices(getXAxisAt(gameBoard, yCoord), yCoord)
    .map( (xIndex) => [xIndex, yCoord]);
  const ySet = crawlAxisReturnIndices(getYAxisAt(gameBoard, xCoord), xCoord)
    .map( (yIndex) => [xCoord, yIndex]);

  return xSet.concat(ySet).filter( (set, ind, arr) => arr.indexOf(set) === ind );
}

const combineGameBoardPieces = (coordinates, gameBoard) => {

  if (coordinates.length < 2) return gameBoard;

  const [xAxis, yAxis] = mapToRowAndCol(coordinates);
  if (!coordinatesAreSequential(xAxis) || !coordinatesAreSequential(yAxis)) return ERROR_NON_SEQUENTIAL;

  // const [xAxis, yAxis] = mapToRowAndCol(coordinates);
  // if (xAxis.size !== 1 && yAxis.size !== 1) return ERROR_NOT_SINGLE_ROW_COLUMN;
  // if (!coordinatesAreSequential(xAxis) || !coordinatesAreSequential(yAxis)) return ERROR_NON_SEQUENTIAL;

  /**
   * Sorted coordinates are important because even though the
   * combined word is being set on the last passed coordinate,
   * they are set in the order on the board
   */
  const sortedCoordinates = sortCoordinates(coordinates);
  const letters = getLettersFromSelection(sortedCoordinates, gameBoard);
  console.log(letters);

  if (letters.length !== coordinates.length) return ERROR_NULL_SELECTED;
  if (!lettersHaveSameLength(letters)) return ERROR_DIFFERENT_LENGTHS;
  const initialCoordinates = coordinates.slice(-1)[0];

  console.log(initialCoordinates)

  return gameBoard.map((gameRow, yAxis) => {
    return gameRow.map((value, xAxis) => {
      if (yAxis === initialCoordinates[1] && xAxis === initialCoordinates[0]) return letters.join("");
      if (inCoordinates(coordinates, [xAxis, yAxis])) return null;

      return value;
    });
  })
};

const lettersHaveSameLength = (letters) => {
  const letterSet = letters.reduce((newLetterSet, letter) => {
    return newLetterSet.add(letter.length);
  }, new Set());

  return letterSet.size === 1 || (letterSet.size > 1 && letterSet.has(1) === false);
}

const mapToRowAndCol = (coordinates) => coordinates.reduce((accumulators, coordinate) => {
  accumulators[0].add(coordinate[0]);
  accumulators[1].add(coordinate[1]);
  return accumulators;
}, [new Set(), new Set()])


export {
  combineGameBoardPieces,
  mapToRowAndCol,
  sortCoordinates,
  getCoordinateSetToCombine,
};
