import { removeFromGameBoard } from './deleteWord';
import {
  ERROR_DELETE_NOT_SINGLE_LETTER,
  ERROR_NON_SEQUENTIAL,
  ERROR_NULL_SELECTED,
  ERROR_DELETE_NOT_EQUIVALENT,
} from './gameStateConstants';


/**
 * So I'm noticing a do this thing where when I find a somewhat similar abstraction
 * I immediately try to combine the two abstractions into the same function
 * Instead of writing them out and seeing what happens.
 */

test("Fails if the words selected is a single letter", () => {
  const gameBoard = [["i", "i"]];
  const selectedCoordinates = [[0, 0], [1, 0]];

  expect(removeFromGameBoard(selectedCoordinates, gameBoard)).toEqual(ERROR_DELETE_NOT_SINGLE_LETTER);
})

test("Fails if the words selected do not have equal length", () => {
  const gameBoard = [["izz", "iz"]];
  const selectedCoordinates = [[0, 0], [1, 0]];

  expect(removeFromGameBoard(selectedCoordinates, gameBoard)).toEqual(ERROR_DELETE_NOT_EQUIVALENT);
})

test("Fails if words selected are non-sequential", () => {
  const coordinates = [[0, 0], [0, 1], [0, 3]];
  const gameBoard = [["z"], ["b"], ["c"], ["d"]];

  expect(removeFromGameBoard(coordinates, gameBoard)).toEqual(ERROR_NON_SEQUENTIAL);
})

test("Fails if one of the selected elements is null", () => {
  const gameBoard = [
    ["a", "b", null],
    ["d", "e", "f"]
  ];

  const coordinates = [[2, 0]];

  expect(removeFromGameBoard(coordinates, gameBoard)).toEqual(ERROR_NULL_SELECTED);
});

test("Fails to select if one of the selected elements does not exist", () => {
  const gameBoard = [
    ["a", "b", null],
    ["d", "e", "f"]
  ];

  const coordinates = [[3, 0]];

  expect(removeFromGameBoard(coordinates, gameBoard)).toEqual(ERROR_NULL_SELECTED);
})

test("Fails if coordinates are empty", () => {
  expect(removeFromGameBoard([], [[null]])).toBeNull();
})

test("Fails if the words are not equal", () => {
  const gameBoard = [["iz", "id"]];
  const selectedCoordinates = [[0, 0], [1, 0]];

  expect(removeFromGameBoard(selectedCoordinates, gameBoard)).toEqual(ERROR_DELETE_NOT_EQUIVALENT);
})

test("Succeeds if the words are equal", () => {
  const gameBoard = [["iz", "iz"]];
  const selectedCoordinates = [[0, 0], [1, 0]];

  expect(removeFromGameBoard(selectedCoordinates, gameBoard)).toEqual([[null, null]]);

})

