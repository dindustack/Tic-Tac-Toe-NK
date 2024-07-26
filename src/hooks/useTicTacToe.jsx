import { useState } from 'react';

const startGame = () => Array(9).fill(null);

export const useTicTacToe = () => {
  const [tile, setTile] = useState(startGame());

    const [isPlayerXNext, setIsPlayerXNext] = useState(true);

    const WINNING_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const calculateWinner = (currentTile) => {
      for(let i = 0; i < WINNING_PATTERNS.length; i++) {
        const [a, b, c] = WINNING_PATTERNS[i];
        if (
          currentTile[a] && 
          currentTile[a] === currentTile[b] && 
          currentTile[a] === currentTile[c]) 
          {
          return currentTile[a];
        }
      }
      return null;
    };

    const handlePlayerOnClick = (index) => {
      const winner = calculateWinner(tile);
      if (winner || tile[index]) return;

      const newTile = [...tile];
      newTile[index] = isPlayerXNext ? "X" : "O";
      setTile(newTile);
      setIsPlayerXNext(!isPlayerXNext);
    };

    const getCurrentPlayer = () => {
      const winner = calculateWinner(tile);
      if(winner) return `Player ${winner} wins!`;
      if(!tile.includes(null)) return `It's a draw!`;
      return `Player ${isPlayerXNext ? "X" : "O"} turn`
    };

    const resetGame = () => {
      setTile(startGame());
      setIsPlayerXNext(true)
    };

  return {tile, handlePlayerOnClick, resetGame, calculateWinner, getCurrentPlayer}
}



