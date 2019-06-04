import {
  checkWordExistsInEnglishLanguage,
  tryScoringCoordinates,
} from './validateLetter';
import { ERROR_NULL_SELECTED } from './gameStateConstants';

test('CheckWordExists returns null if location does not exist on the game board', () => {
  const gameBoard = [['word']];
  const coordinate = [1, 1];

  expect(tryScoringCoordinates(coordinate, gameBoard)).toEqual(ERROR_NULL_SELECTED);
});

test('CheckWordExists returns null if the location is null', () => {
  const gameBoard = [[null]];
  const coordinate = [0, 0];

  expect(tryScoringCoordinates(coordinate, gameBoard)).toEqual(ERROR_NULL_SELECTED);
});

test("Does not modify game state if the endpoint fails", () => {

});

test("Sets the word to locked if the word does not exist", () => {

});

test("Clears the word and scores points if the word does exist", () => {
  const gameBoard = [['word']];
  const coordinate = [0, 0];

  expect(tryScoringCoordinates(coordinate, gameBoard)).toEqual(expect.objectContaining({ gameBoard: [[null]], addedScore: 8 }));

});
