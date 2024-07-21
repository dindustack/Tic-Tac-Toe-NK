export function getCategories() {
	const url = 'https://tic-tac-toe-ai.p.rapidapi.com/move'
	const data = {
		player: 'X',
		'0-0': 'X',
		'0-1': 'X',
		'0-2': 'O',
		'1-0': 'O',
		'1-1': 'O',
		'1-2': 'X',
		'2-0': 'X',
		'2-1': 'O',
	}

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-rapidapi-key': '1a93ba78e5mshe2bfd7f5d4d8010p1092f7jsn74935257d44d',
			'x-rapidapi-host': 'tic-tac-toe-ai.p.rapidapi.com',
		},
		body: JSON.stringify(data),
	}

	return fetch(url, options)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			return response.json()
		})
		.catch((error) => {
			console.error('Error fetching data:', error)
			throw error
		})
}
