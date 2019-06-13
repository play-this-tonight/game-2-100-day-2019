import { crawlAxisReturnLetters, splitIntoContiguousSets } from "./constructSelectionFromGameBoard";

test("Expect crawl axis to return all words", () => {
  const axis = ["l", "y"];
  const center = 0;

  expect(crawlAxisReturnLetters(axis, center)).toEqual(axis);
});

test("Also expects a subset to function appropriately", () => {
  const axis = ["l", "y", null, "z", null, "a", "b", "c", null, "f"];

  expect(crawlAxisReturnLetters(axis, 6)).toEqual(["a", "b", "c"]);
})

test("Split into contiguous sets work for an entire array set as well", () => {
  const axis = ["l", "y"];
  const center = 0;

  expect(splitIntoContiguousSets(axis, center)).toEqual([[0, 1]]);


});

test("split into contiguous sets splits a big array into 4 smaller arrays", () => {
  const axis = ["l", "y", null, "z", null, "a", "b", "c", null, "f"];

  expect(splitIntoContiguousSets(axis)).toEqual([[0, 1], [3], [5,6, 7], [9]]);
})