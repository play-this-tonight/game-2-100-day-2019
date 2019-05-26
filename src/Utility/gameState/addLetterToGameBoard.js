const addLetterToGameBoard = (letter, index, gameState) => {

  if (letter.length != 1) return null;

  // Error conditions to handle
  const yAxis = index[1];
  const xAxis = index[0];

  const gameYAxis = gameState[yAxis];
  const gameXAxis = gameState[xAxis];

  if (!gameYAxis) return null;
  if (!gameXAxis) return null;

  return gameState;
}

export {
  addLetterToGameBoard,
}
