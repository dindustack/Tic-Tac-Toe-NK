import React, { useState, useEffect } from 'react'
import GameTile from './GameTile'
import Strike from './Strike'
import data from './data'
// Function to get class for each tile based on its index
function getClass(index) {
	const classes = [
		'right-border bottom-border',
		'right-border bottom-border',
		'bottom-border',
		'right-border bottom-border',
		'right-border bottom-border',
		'bottom-border',
		'right-border',
		'right-border',
		'',
	]
	return classes[index]
}

export default function GameBoard({handlePlayerOnClick }) {

	const [tile, setTile] = useState([])
	
	useEffect(() => {
		
		console.log(data)
		setTile(data)
	}, [])
	return (
		<>
			<div className='board'>
				{tile.map((item, index) => (
					<GameTile
						tile={item.player} // Pass the player value
						key={item.position || index} // Ensure key is unique
						onClick={() => handlePlayerOnClick(index)}
						className={getClass(index)} // Use getClass to determine className
					/>
				))}
			</div>
		</>
	)
}




git remote set-url origin https://github.com/Nilkh/Tic-Tac-Toe-NK.git
