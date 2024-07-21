import GameBoard from "./GameBoard"
export default function GameTile({className , tile }) {
    return <div className={`tile ${className}`}
    onClick={() => GameBoard(tile)}
    >X</div>
}
