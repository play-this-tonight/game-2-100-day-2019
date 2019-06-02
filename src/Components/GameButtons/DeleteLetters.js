import React from 'react';
import { attachGameConsumer } from '../GameState';

const DeleteLetters = ({ deleteLetters }) => {
  return (
    <button
      onClick={deleteLetters}
    >
      Delete Letters
  </button>
  )
}

export default attachGameConsumer(DeleteLetters);
