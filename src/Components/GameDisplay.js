import React from 'react';
import { gameDisplayStyle } from './GameState.module.css';
import GameBoard from './GameBoard';
import { GameProvider } from './GameState';
import CombineLetters from './GameButtons/CombineLetters';
import DeleteLetters from './GameButtons/DeleteLetters';
import SelectLetters from './SelectLetters';

const GameDisplay = () => {

  return (
    <GameProvider>
      <div className={gameDisplayStyle}>
        <GameBoard />
        <aside>
          <SelectLetters />
          <CombineLetters />
          <DeleteLetters />
        </aside>
      </div >
    </GameProvider>
  );
}

export default GameDisplay;
