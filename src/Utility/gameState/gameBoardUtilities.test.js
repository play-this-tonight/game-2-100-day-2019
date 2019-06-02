import { coordinatesAreSequential, getLettersFromSelection } from './gameBoardUtilities';

test("Fails if there are 0 coordinates", () => {
  const coords = new Set();

  const result = coordinatesAreSequential(coords);

  expect(result).toEqual(false);
})

test("Fails if coordinates aren't sequential", () => {
  const coords = new Set([12, 13, 15]);

  const result = coordinatesAreSequential(coords);

  expect(result).toEqual(false);
})

test("Succeeds with 1 coordinate", () => {
  const coords = new Set([-1]);

  const result = coordinatesAreSequential(coords);

  expect(result).toEqual(true);
})

test("Letters from selection return null if Y Axis does not exist", () => {
  const gameBoard = [["l"]];
  const coordinates = [[0, 1]];

  expect(getLettersFromSelection(coordinates, gameBoard)).toEqual([]);
})
test("Letters from selection return null if X Axis does not exist", () => {
  const gameBoard = [["l"]];
  const coordinates = [[1, 0]];

  expect(getLettersFromSelection(coordinates, gameBoard)).toEqual([]);
})
test("Returns letter if both exist", () => {
  const gameBoard = [["l"]];
  const coordinates = [[0, 0]];

  expect(getLettersFromSelection(coordinates, gameBoard)).toEqual(["l"]);
})
