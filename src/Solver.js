function getNextEmpty(grid) {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '') return [i, j]
		}
	}
	return null
}

function checkIfValid(grid, pos, val) {
	//horizontal
	for (let i = 0; i < grid[pos[0]].length; i++) {
		if (grid[pos[0]][i] === val && i !== pos[1]) return false
	}
	//vertical
	for (let i = 0; i < grid[pos[1]].length; i++) {
		if (grid[i][pos[1]] === val && i !== pos[0]) return false
	}
	//square
	const squareX = Math.trunc(pos[1] / 3)
	const squareY = Math.trunc(pos[0] / 3)
	// console.log(squareX,squareY)
	for (let i = squareY * 3; i < squareY * 3 + 3; i++) {
		for (let j = squareX * 3; j < squareX * 3 + 3; j++) {
			// console.log(i,j)
			if (grid[i][j] === val && i !== pos[0] && j !== pos[1]) return false
		}
	}
	return true
}
export default function solve(grid) {
	let newGrid = grid
	if (getNextEmpty(newGrid) === null) {
		return newGrid
	}
	const pos = getNextEmpty(newGrid)
	for (let i = 1; i < 10; i++) {
		
		if (checkIfValid(newGrid, pos, i)) {
			// console.log(pos,i)
			newGrid[pos[0]][pos[1]] = i
			solve(newGrid)
		}
	}
	if (getNextEmpty(newGrid) !== null) {
		newGrid[pos[0]][pos[1]] = ''
	}
	return newGrid
}
