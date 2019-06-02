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
  return [...coordinates].sort((a, b) => {
    const sumA = a.reduce((sum, val) => val + sum, 0);
    const sumB = b.reduce((sum, val) => val + sum, 0);

    return sumA - sumB;
  });
}

export {
  coordinatesAreSequential,
  getLettersFromSelection,
  inCoordinates,
  sortCoordinates,
};
