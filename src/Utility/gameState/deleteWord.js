import {
  ERROR_DELETE_NOT_SINGLE_LETTER,
  ERROR_NON_SEQUENTIAL,
  ERROR_NULL_SELECTED,
  ERROR_DELETE_NOT_EQUIVALENT,
} from './gameStateConstants';
import {
  coordinatesAreSequential,
  getLettersFromSelection,
  inCoordinates,
} from './gameBoardUtilities';


const removeFromGameBoard = (coordinates, gameBoard) => {
  if (coordinates.length === 0) return null;
  const xAxis = new Set(coordinates.map(coordinate => coordinate[0]));
  const yAxis = new Set(coordinates.map(coordinate => coordinate[1]));
  if (!coordinatesAreSequential(xAxis) || !coordinatesAreSequential(yAxis)) return ERROR_NON_SEQUENTIAL;

  const selectedPieces = getLettersFromSelection(coordinates, gameBoard);
  if (selectedPieces.length !== coordinates.length) return ERROR_NULL_SELECTED;

  const invalidatedLengths = getValidatedLengths(selectedPieces);
  if (invalidatedLengths) return invalidatedLengths;

  return gameBoard.map((gameRow, yAxis) => {
    return gameRow.map((val, xAxis) => {
      if (inCoordinates(coordinates, [xAxis, yAxis])) return null;

      return val;
    })
  });
}

const getValidatedLengths = (letters) => {
  const validatedLengthSet = new Set(letters);

  if (validatedLengthSet.size > 1) {
    return ERROR_DELETE_NOT_EQUIVALENT;
  }

  if ([...validatedLengthSet][0].length === 1) {
    return ERROR_DELETE_NOT_SINGLE_LETTER;
  }



  return null;
}


export {
  removeFromGameBoard,
};
