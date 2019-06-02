import React from 'react';
import { attachGameConsumer } from '../GameState';

const CombineLetters = ({ combineLetters }) => {

  return (
    <button
      onClick={combineLetters}
    >
      Combine Letters
    </button>
  )
}

export default attachGameConsumer(CombineLetters);
