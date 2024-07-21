import GameTile from "./GameTile";
import Strike from "./Strike";

export default function GameBoard({ tile }) {
	return (
		<>
		
		<div className='board'>
			       {/* {tile.map((item, index) => (
                <GameTile
                    key={index}
                    product={item}
                    className={getClass(index)}
                />
            ))} */}

			<GameTile className='right-border bottom-border' />
			<GameTile className='right-border bottom-border' />
			<GameTile className='bottom-border' />
			<GameTile className='right-border bottom-border' />
			<GameTile className='right-border bottom-border' />
			<GameTile className=' bottom-border' />
			<GameTile className='right-border ' />
			<GameTile className='right-border ' />
			<GameTile />
			<Strike />
		</div>
		</>
		
	)


	// Function to get class for each tile based on its index
// function getClass(index) {
//     const classes = [
//         'right-border bottom-border', 'right-border bottom-border', 'bottom-border',
//         'right-border bottom-border', 'right-border bottom-border', 'bottom-border',
//         'right-border', 'right-border', ''
//     ];
//     return classes[index];
// }
}
