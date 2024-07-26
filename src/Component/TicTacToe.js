import React, { useState, useEffect } from 'react'
import GameBoard from './GameBoard'
import data from './data'


export default function TicTacToe() {
	const [tile, setTile] = useState([])
	 const [currentPlayer, setCurrentPlayer] = useState(tile)
	useEffect(() => {
		console.log(data)
		setTile(data)
	}, [])

	function handlePlayerOnClick(index) {
		if(tile[index] !== null){
			return;
		}

		const newTiles = [...tile]
		newTiles[index] = currentPlayer
		setTile(newTiles)
		if (currentPlayer === data) {
			setCurrentPlayer(setTile)
		} else {
			setCurrentPlayer(setTile)
		}
	}
    return (
        <>
		
            <h1>Tic Tac Toe</h1>
            <GameBoard tile={tile} handlePlayerOnClick={handlePlayerOnClick} />
        </>
    );
}
		

	
