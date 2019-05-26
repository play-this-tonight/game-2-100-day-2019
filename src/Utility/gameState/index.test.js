import { generateNewGameBoard } from './index';

test('Creates an array of arrays', () => {
  const newGameBoard = generateNewGameBoard(1, 1);

  expect(newGameBoard[0][0]).toEqual(null);
})

test('Handles edge cases 0x0', () => {
  const newGameBoard = generateNewGameBoard(0, 0);

  expect(newGameBoard).toEqual([]);
});

test('Can handle non-square values', () => {
  const newGameBoard = generateNewGameBoard(2, 5);

  expect(newGameBoard[0].length).toEqual(5);
  expect(newGameBoard[1].length).toEqual(5);
});

test('Expects the height to be formed correctly', () => {
  const newGameBoard = generateNewGameBoard(5671, 1);

  expect(newGameBoard.length).toEqual(5671);
});
