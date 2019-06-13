
const splitIntoContiguousSets = (axisArray) => {
  let i = 0;
  let currentContiguousLetters = [];
  let containerArray = [];
  while(i <= axisArray.length) {
    if (axisArray[i] === null || axisArray[i] === undefined) {

      if (currentContiguousLetters.length) {
        containerArray.push(currentContiguousLetters);
      }

      i++;
      currentContiguousLetters = [];
      continue;
    }

    currentContiguousLetters.push(i);
    length++;
    i++;
  }

  return containerArray;
}

const findContainerHayStack = (stacksOfHay, needle) => stacksOfHay.find( (filterArr) => filterArr.indexOf(needle) !== -1 );

const crawlAxisReturnLetters = (axisArray, fulcrum) => {
  const containerArray = splitIntoContiguousSets(axisArray);

  const foundArray = findContainerHayStack(containerArray, fulcrum);

  return axisArray.slice(foundArray[0], foundArray[0] + foundArray.length);
}

const crawlAxisReturnIndices = (axisArray, fulcrum) => {
  const containerArray = splitIntoContiguousSets(axisArray);

  return findContainerHayStack(containerArray, fulcrum) || [];
}

export {
  crawlAxisReturnLetters,
  splitIntoContiguousSets,
  crawlAxisReturnIndices,
};