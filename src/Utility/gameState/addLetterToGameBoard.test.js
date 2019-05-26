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
    [1, 2],
    [3, 4]
  ];
  const newGameBoard = addLetterToGameBoard('l', [0, 0], oldGameBoard);

  expect(newGameBoard).toHaveLength(oldGameBoard.length);
  expect(newGameBoard[0]).toHaveLength(oldGameBoard[0].length);

})

test("Fails if the letter length less than 1", () => {
  const newGameBoard = addLetterToGameBoard('', [0, 0], [[null]]);

  expect(newGameBoard).toBeNull();
});

test("Fails if lengt is greater than 1", () => {
  const newGameBoard = addLetterToGameBoard('123412', [0, 0], [[null]]);
  expect(newGameBoard).toBeNull();
})

test("Returns the proper gameBoard", () => { })

test("Fails if the game board already has the letter on that spot", () => { })

test("No other index changes", () => { })

test("Returns with only one field changed", () => { })
