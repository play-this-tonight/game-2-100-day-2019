import { get } from 'axios';
import { scoreWord } from '../LettersAndWords';
import { getLettersFromSelection } from './gameBoardUtilities';
import GameBoard from '../../Components/GameBoard';
import { ERROR_NULL_SELECTED } from './gameStateConstants';

const checkWordExistsInEnglishLanguage = (word) => {

}

const tryScoringCoordinates = (coordinate, gameBoard) => {

  // console.log([coordinate]);
  // console.log(gameBoard);
  const otherthing = [coordinate];
  const [word] = getLettersFromSelection(otherthing, gameBoard);

  if (!word) return ERROR_NULL_SELECTED;

  const addedScore = scoreWord(word);

  const newGameBoard = gameBoard.map((gameRow, yAxis) => {
    return gameRow.map((val, xAxis) => {
      if (xAxis === coordinate[0] && yAxis === coordinate[1]) return null;
      return val;
    })
  });

  return {
    gameBoard: newGameBoard,
    lockedCoordinate: null,
    addedScore,
  }
}

export {
  checkWordExistsInEnglishLanguage,
  tryScoringCoordinates
}
