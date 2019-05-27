import { addLetterToGameBoard } from './addLetterToGameBoard';


test("REturns null if x-axis does not exist on the game board", () => {
  const newGameBoard = addLetterToGameBoard('l', [0, 2], [[null, null]]);

  expect(newGameBoard).toEqual(null);
});

test("REturns null if y-axis does not exist on the game board", () => {
  const newGameBoard = addLetterToGameBoard('l', [2, 0], [[null, null]]);

  expect(newGameBoard).toEqual(null);
});

test("Expects this to return a game object of the same height and length", () => {
  const oldGameBoard = [
    [null, null],
    [null, null]
  ];
  const newGameBoard = addLetterToGameBoard('l', [0, 0], oldGameBoard);

  expect(newGameBoard).toHaveLength(oldGameBoard.length);
  expect(newGameBoard[0]).toHaveLength(oldGameBoard[0].length);

})

test("Fails if the letter length less than 1", () => {
  const newGameBoard = addLetterToGameBoard('', [0, 0], [[null]]);

  expect(newGameBoard).toBeNull();
});

test("Fails if length is greater than 1", () => {
  const newGameBoard = addLetterToGameBoard('123412', [0, 0], [[null]]);
  expect(newGameBoard).toBeNull();
})

test("Fails if the game board already has the letter on that spot", () => {
  const newGameBoard = addLetterToGameBoard('l', [1, 1], [[null, null], [null, 'l']]);

  expect(newGameBoard).toBeNull();
})

test("Returns with the correct field changed", () => {
  const oldGameBoard = [
    [null, null],
    [null, null],
  ];
  const newIndex = [0, 1];
  const newLetter = "l";

  const newGameBoard = addLetterToGameBoard(newLetter, newIndex, oldGameBoard);

  expect(newGameBoard[newIndex[1]][newIndex[0]]).toEqual(newLetter);
});

test("Returns with only one field changed", () => {
  const oldGameBoard = [
    ["b", "d"],
    ["c", null],
  ];
  const newIndex = [1, 1];
  const newLetter = "a";

  const newGameBoard = addLetterToGameBoard(newLetter, newIndex, oldGameBoard);

  expect(newGameBoard[0]).toEqual(oldGameBoard[0]);
  expect(newGameBoard[1][0]).toEqual(oldGameBoard[1][0]);
})
