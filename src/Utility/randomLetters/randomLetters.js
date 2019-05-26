const weightedLetters = [
  { letter: 'e', weight: 0.11067961165048544 },
  { letter: 'a', weight: 0.08349514563106795 },
  { letter: 'r', weight: 0.07572815533980583 },
  { letter: 'i', weight: 0.07378640776699029 },
  { letter: 'o', weight: 0.07184466019417475 },
  { letter: 't', weight: 0.06796116504854369 },
  { letter: 'n', weight: 0.06601941747572816 },
  { letter: 's', weight: 0.05631067961165048 },
  { letter: 'l', weight: 0.05436893203883495 },
  { letter: 'c', weight: 0.04466019417475728 },
  { letter: 'u', weight: 0.036893203883495145 },
  { letter: 'd', weight: 0.03300970873786408 },
  { letter: 'p', weight: 0.031067961165048542 },
  { letter: 'm', weight: 0.02912621359223301 },
  { letter: 'h', weight: 0.027184466019417475 },
  { letter: 'g', weight: 0.02524271844660194 },
  { letter: 'b', weight: 0.021359223300970873 },
  { letter: 'f', weight: 0.019417475728155338 },
  { letter: 'y', weight: 0.017475728155339806 },
  { letter: 'w', weight: 0.013592233009708738 },
  { letter: 'k', weight: 0.011650485436893204 },
  { letter: 'v', weight: 0.009708737864077669 },
  { letter: 'x', weight: 0.007766990291262136 },
  { letter: 'z', weight: 0.005825242718446602 },
  { letter: 'j', weight: 0.003883495145631068 },
  { letter: 'q', weight: 0.001941747572815534 },
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

