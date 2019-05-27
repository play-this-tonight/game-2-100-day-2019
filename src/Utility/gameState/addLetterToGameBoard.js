const addLetterToGameBoard = (letter, index, gameState) => {
  if (letter.length != 1) return null;

  // Error conditions to handle
  const yAxis = index[1];
  const xAxis = index[0];

  const gameYAxis = gameState[yAxis];
  if (gameYAxis === undefined) return null;

  const gameXAxis = gameYAxis[xAxis];
  if (gameXAxis === undefined) return null;

  if (gameXAxis !== null) return null;

  let newGameState = [...gameState];
  newGameState[yAxis][xAxis] = letter;

  return newGameState;
}

export {
  addLetterToGameBoard,
}
