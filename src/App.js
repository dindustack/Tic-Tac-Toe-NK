import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState} from 'react'
import "./App.css"
import GameBoard from './Component/GameBoard'

function App() {

const [currentPlayer, setCurrentPlayer] = useState([])


	function handlePlayerOnClick(tile) {
		console.log(tile);

        // Switch to the next player
        setCurrentPlayer((tile) => (tile + 1) % 2) // Assuming 2 players}

	}
	

	return (
		<>
			<h1>Tic Tac Toe</h1>
			<GameBoard
				currentPlayer={currentPlayer}
				handlePlayerOnClick={handlePlayerOnClick}
			/>
		</>
	)
}

export default App
