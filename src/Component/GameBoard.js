import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useTicTacToe } from "../hooks/useTicTacToe";

export function GameBoard() {
  const {
    tile,
    handlePlayerOnClick,
    calculateWinner,
    resetGame,
    getCurrentPlayer,
  } = useTicTacToe();

  const playerStatus = getCurrentPlayer();

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="title">
        <p className="status">{playerStatus}</p>
        <button className="btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {tile.map((item, index) => {
          return (
            <button
              className="tile right-border left-border"
              key={index}
              onClick={() => handlePlayerOnClick(index)}
              disabled={item !== null}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}
