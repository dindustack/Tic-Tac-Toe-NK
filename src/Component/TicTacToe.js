import React, { useState, useEffect } from 'react'
import GameBoard from './GameBoard'
import { getCategories } from './api'
export default function TicTacToe() {
	const [tile, setTile] = useState({})
    console.log(tile)
	useEffect(() => {
		getCategories()
			.then((data) => {
				setTile(data)
			})
			.catch((error) => {
				console.error('Error fetching data:', error)
			})
	}, [])
	return (
		<div>
			<h1>Tic Tac Toe</h1>
			<GameBoard  tile={tile}/>
		</div>
	)
}
