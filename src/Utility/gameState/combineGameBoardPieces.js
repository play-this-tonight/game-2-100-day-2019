import {
  coordinatesAreSequential,
  getLettersFromSelection,
  inCoordinates,
  sortCoordinates,
} from './gameBoardUtilities';
import {
  ERROR_NOT_SINGLE_ROW_COLUMN,
  ERROR_NON_SEQUENTIAL,
  ERROR_NULL_SELECTED,
  ERROR_DIFFERENT_LENGTHS,
} from './gameStateConstants';

const combineGameBoardPieces = (coordinates, gameBoard) => {
  if (!coordinates.length) return null;
  const [xAxis, yAxis] = mapToRowAndCol(coordinates);
  if (xAxis.size !== 1 && yAxis.size !== 1) return ERROR_NOT_SINGLE_ROW_COLUMN;
  if (!coordinatesAreSequential(xAxis) || !coordinatesAreSequential(yAxis)) return ERROR_NON_SEQUENTIAL;

  /**
   * Sorted coordinates are important because even though the
   * combined word is being set on the last passed coordinate,
   * they are set in the order on the board
   */
  const sortedCoordinates = sortCoordinates(coordinates);
  const letters = getLettersFromSelection(sortedCoordinates, gameBoard);

  if (letters.length !== coordinates.length) return ERROR_NULL_SELECTED;
  if (!lettersHaveSameLength(letters)) return ERROR_DIFFERENT_LENGTHS;

  const lastCoordinate = coordinates.slice(-1)[0];

  return gameBoard.map((gameRow, yAxis) => {
    return gameRow.map((value, xAxis) => {
      if (yAxis === lastCoordinate[1] && xAxis === lastCoordinate[0]) return letters.join("");
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
};
