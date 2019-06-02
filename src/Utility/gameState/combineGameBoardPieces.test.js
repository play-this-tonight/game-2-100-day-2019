import {
  combineGameBoardPieces,
  mapToRowAndCol,
  sortCoordinates,
} from './combineGameBoardPieces';

import {
  ERROR_NOT_SINGLE_ROW_COLUMN,
  ERROR_NON_SEQUENTIAL,
  ERROR_NULL_SELECTED,
  ERROR_DIFFERENT_LENGTHS,
} from './gameStateConstants';

test("Returns two Sets of X and Y Values", () => {
  const coords = [[1, 1], [1, 2], [1, 3]];
  const [xValues, yValues] = mapToRowAndCol(coords);

  expect(xValues).toEqual(new Set([1]));
  expect(yValues).toEqual(new Set([1, 2, 3]));
})
test("Fails if they are not all the same X or Y axis", () => {
  const coords = [[2, 1], [1, 2], [1, 3]];

  const result = combineGameBoardPieces(coords, []);

  expect(result).toEqual(ERROR_NOT_SINGLE_ROW_COLUMN);
})

test("Rearranged coordinates should be properly arranged", () => {
  const coord = [[1, 1], [0, 0], [2, 2]];
  const newCoord = [[0, 0], [1, 1], [2, 2]];

  expect(sortCoordinates(coord)).toEqual(newCoord);
})

test("Fails one of the selected elements is null", () => {
  const gameBoard = [
    ["a", "b", null],
    ["d", "e", "f"]
  ];

  const coordinates = [[2, 0]];

  expect(combineGameBoardPieces(coordinates, gameBoard)).toEqual(ERROR_NULL_SELECTED);
});

test("Fails to select if one of the selected elements does not exist", () => {
  const gameBoard = [
    ["a", "b", null],
    ["d", "e", "f"]
  ];

  const coordinates = [[3, 0]];

  expect(combineGameBoardPieces(coordinates, gameBoard)).toEqual(ERROR_NULL_SELECTED);
})

test("Fails if coordinates are empty", () => {
  expect(combineGameBoardPieces([], [[null]])).toBeNull();
})

test("Sets to the last selected coordinate", () => {
  const gameBoard = [
    ["a", "b", null],
    ["d", "e", "f"]
  ];
  const newGameBoard = [
    ["ad", "b", null],
    [null, "e", "f"]
  ]

  const coordinates = [[0, 1], [0, 0]];

  expect(combineGameBoardPieces(coordinates, gameBoard)).toEqual(newGameBoard);
})

test("Fails if the coordinates are not sequential", () => {
  const coordinates = [[0, 0], [0, 1], [0, 3]];
  const gameBoard = [["z"], ["b"], ["c"], ["d"]];

  expect(combineGameBoardPieces(coordinates, gameBoard)).toEqual(ERROR_NON_SEQUENTIAL);
})

test("Fails if the selected pieces have 1 and other lengths", () => {
  const coordinates = [[0, 0], [1, 0]];

  const gameBoard = [["z", "ab"]];

  expect(combineGameBoardPieces(coordinates, gameBoard)).toEqual(ERROR_DIFFERENT_LENGTHS);
})

test("Succeeds if the pieces are the same length", () => {
  const coordinates = [[0, 0], [1, 0]];

  const gameBoard = [["zy", "ab"]];
  const newGameBoard = [[null, "zyab"]];

  expect(combineGameBoardPieces(coordinates, gameBoard)).toEqual(newGameBoard);
})

test("Succeeds if the pieces are of different lengths but more than 1", () => {
  const coordinates = [[0, 0], [1, 0]];

  const gameBoard = [["zyx", "ab"]];
  const newGameBoard = [[null, "zyxab"]];

  expect(combineGameBoardPieces(coordinates, gameBoard)).toEqual(newGameBoard);
})
