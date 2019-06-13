const coordinatesAreSequential = (coordinateSet) => {
  const coordSetArray = [...coordinateSet];
  const { min, max } = coordSetArray.reduce((minMax, coord) => {
    return {
      min: Math.min(minMax.min, coord),
      max: Math.max(minMax.max, coord),
    }
  }, { min: coordSetArray[0], max: coordSetArray[0] });

  const distance = max - min;
  return ((distance + 1) / coordinateSet.size) === 1;
}

const getLettersFromSelection = (coordinates, gameBoard) => {
  return coordinates.map((coord) => {
    const yAxis = coord[1];
    const xAxis = coord[0];

    const yRow = gameBoard[yAxis];
    if (!yRow) return null;

    const xRow = yRow[xAxis];
    if (!xRow) return null;

    return xRow;
  })
    .filter((letter) => letter !== null)
}

const inCoordinates = (coordinates, point) => {
  return coordinates.find((coord) => coord[0] === point[0] && coord[1] === point[1])
}

const sortCoordinates = (coordinates) => {
  const copiedCoordinates = [...coordinates];

  const baseLength = copiedCoordinates.reduce( (maxLength, coordinate) => {
    return Math.max(maxLength, (coordinate[0] + 1));
  }, 0);

  return copiedCoordinates.sort( (a, b) => {  
    const aValue = a[0] + (a[1] * baseLength);
    const bValue = b[0] + (b[1] * baseLength)

    return aValue - bValue;
  });
}

const getXAxisAt = (gameBoard, yAxis) => {
  if (!gameBoard[yAxis]) return [];

  return gameBoard[yAxis];
}

const getYAxisAt = (gameBoard, xAxis) => {
  const hasXAxis = gameBoard.filter( (gameRow) => {
    return gameRow.length >= xAxis + 1;
  });

  if (hasXAxis.length !== gameBoard.length) return [];

  return gameBoard.map( (gameRow) => gameRow[xAxis]);
}

export {
  coordinatesAreSequential,
  getLettersFromSelection,
  inCoordinates,
  sortCoordinates,
  getXAxisAt,
  getYAxisAt
};
