import { getNextLetter, weightedLetters, scoreWord } from '.';

test("Expect the response to be a string", () => {
  expect(typeof getNextLetter()).toEqual('string');
});

test("The total of the letters should be 1", () => {
  const sum = weightedLetters.reduce((sum, { weight }) => sum += weight, 0)
  expect(sum).toEqual(1);
})

test("Should create a string of length 9", () => {
  let accumulatorString = '';
  let i = 0;
  while (i < 9) {
    let currentLetter = getNextLetter();
    accumulatorString += currentLetter;
    i++;
  }

  expect(accumulatorString.length).toEqual(9);
})

test('ScoreWord returns 0 if the string is empty', () => {
  expect(scoreWord('')).toEqual(0);
});

test('ScoreWord properly counts up the letter ', () => {
  expect(scoreWord('panoply')).toEqual(14);
});

