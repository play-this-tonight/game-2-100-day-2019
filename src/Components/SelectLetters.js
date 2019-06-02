import React, { Fragment } from 'react';
import cx from 'classnames';
import { nextPiece, piece } from './GameState.module.css';
import { attachGameConsumer } from './GameState';


const SelectLetters = ({ currentLetter, selectedLetters }) => {
  return (
    <Fragment>
      <p>Next Piece</p>
      <div className={cx(nextPiece, piece)}>
        <p>
          {currentLetter}
        </p>
      </div>
      <p>Selected Letters </p>
      <p>{selectedLetters}</p>
    </Fragment>
  )
}

export default attachGameConsumer(SelectLetters);
