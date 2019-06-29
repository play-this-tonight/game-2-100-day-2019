import { getCoordinateSetToCombine, combineGameBoardPieces } from "./combineGameBoardPieces";

const addLetterToGameBoard = (letter, coordinate, gameState) => {
  if (letter.length !== 1) return null;

  // Error conditions to handle
  const yAxis = coordinate[1];
  const xAxis = coordinate[0];

  const gameYAxis = gameState[yAxis];
  if (gameYAxis === undefined) return null;

  const gameXAxis = gameYAxis[xAxis];
  if (gameXAxis === undefined) return null;

  if (gameXAxis !== null) return null;

  return gameState.map((row, currentYAxis) => {
    return row.map((col, currentXAxis) => {
      if (currentXAxis === xAxis && currentYAxis === yAxis) return letter;
      return col;
    })
  });
}

// const addLetterAndCombineLetters = (letter, coordinate, gameState) => {
//   if (letter.length !== 1) return null;

//   // Error conditions to handle
//   const yAxis = coordinate[1];
//   const xAxis = coordinate[0];

//   const gameYAxis = gameState[yAxis];
//   if (gameYAxis === undefined) return null;

//   const gameXAxis = gameYAxis[xAxis];
//   if (gameXAxis === undefined) return null;

//   if (gameXAxis !== null) return null;

//   const newGameState = gameState.map((row, currentYAxis) => {
//     return row.map((col, currentXAxis) => {
//       if (currentXAxis === xAxis && currentYAxis === yAxis) return letter;
//       return col;
//     })
//   });

//   // Ugh this is fubar 

//   const coordinatesToCombine = getCoordinateSetToCombine(coordinate, newGameState);

//   return combineGameBoardPieces(coordinatesToCombine, newGameState);
// }


export {
  addLetterToGameBoard,
}

/**
 * Misc thoughts and learnings from TDD:
 * 
 * 1. Saying that TDD is "the way", is probably unhelpful.  
 * It's as prone to brittle architecture and other challenging decisions as regular code. 
 * 2. On top of that, when it's brittle, it creates a tangle of decisions that's really hard to get out from. 
 * 
 * 
 * Describe what I see in front of me:
 * 
 * 1. Using TDD early on added extra time to my development cycles as I defined what the outcome of low level functions would/should be. 
 * 2. I often found myself splitting functions up into smaller files for more easy testing.
 * 3. Early on this was incredibly helpful, as it led to areas of functionality that were descriptive.
 * 4. However, compouding with the slowness, it started feeling pretty kludgey to actually change functionality as I went. 
 * 5. I suspect this meant I was thinking about the software architecture incorrectly however, but it was harder going. 
 * 
 * This leads me to believe that TDD does not encourage best practices.  I did not find myself making a better 
 * decision simply because I had a bunch of tests running.  However, what it did do was make changing each incremental bit of code incredibly challenging.
 * 
 * In fact I would go so far as to say that given the test structure, it would have been faster to rewrite the larger level 
 * composed functions and ultimately delete them, instead of trying to change parts of existing tests that work. 
 * 
 * I probably should have spent more time thinking about the individual components and the literal file structure.  Trying to parse 
 * through all of the different areas as is was surprisingly difficult.  
 * 
 * I think I'm read yto be done with this repo and move on. 
 */
