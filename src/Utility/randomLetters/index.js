const weightedLetters = [
  { letter: 'e', weight: 0.11067961165048544, score: 1 },
  { letter: 'a', weight: 0.08349514563106795, score: 1 },
  { letter: 'r', weight: 0.07572815533980583, score: 1 },
  { letter: 'i', weight: 0.07378640776699029, score: 1 },
  { letter: 'o', weight: 0.07184466019417475, score: 1 },
  { letter: 't', weight: 0.06796116504854369, score: 1 },
  { letter: 'n', weight: 0.06601941747572816, score: 1 },
  { letter: 's', weight: 0.05631067961165048, score: 1 },
  { letter: 'l', weight: 0.05436893203883495, score: 1 },
  { letter: 'c', weight: 0.04466019417475728, score: 3 },
  { letter: 'u', weight: 0.036893203883495145, score: 1 },
  { letter: 'd', weight: 0.03300970873786408, score: 2 },
  { letter: 'p', weight: 0.031067961165048542, score: 3 },
  { letter: 'm', weight: 0.02912621359223301, score: 3 },
  { letter: 'h', weight: 0.027184466019417475, score: 4 },
  { letter: 'g', weight: 0.02524271844660194, score: 2 },
  { letter: 'b', weight: 0.021359223300970873, score: 3 },
  { letter: 'f', weight: 0.019417475728155338, score: 4 },
  { letter: 'y', weight: 0.017475728155339806, score: 4 },
  { letter: 'w', weight: 0.013592233009708738, score: 4 },
  { letter: 'k', weight: 0.011650485436893204, score: 5 },
  { letter: 'v', weight: 0.009708737864077669, score: 4 },
  { letter: 'x', weight: 0.007766990291262136, score: 8 },
  { letter: 'z', weight: 0.005825242718446602, score: 10 },
  { letter: 'j', weight: 0.003883495145631068, score: 8 },
  { letter: 'q', weight: 0.001941747572815534, score: 10 },
];

function weightedRand2(spec) {
  var sum = 0, r = Math.random();
  for (let i = 0; i < spec.length; i++) {
    sum += spec[i].weight;
    if (r <= sum) return spec[i].letter;
  }
}

const getNextLetter = () => {
  return weightedRand2(weightedLetters);
};

export {
  getNextLetter,
  weightedLetters,
};

