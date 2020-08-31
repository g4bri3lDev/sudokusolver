import React, { useState } from 'react'
import Grid from './Grid'
import solve from './Solver'
import GridSelect from './GridSelect'

export default function App() {
	const [select, setSelect] = useState(false)
	const [grid, setGrid] = useState([...Array(9)].map((e) => Array(9).fill(' ')))

	return (
		<div className="App">
			{select ? (
				<GridSelect setSelect={setSelect} setGrid={setGrid} />
			) : (
				<div>
					<Grid grid={grid} setGrid={setGrid} />
					<button onClick={() => setSelect(true)}>Select Grid</button>
					<button onClick={() => setGrid(solve([...grid]))}>Solve</button>
					<button
						onClick={() =>
							setGrid([...Array(9)].map((e) => Array(9).fill(' ')))
						}
					>
						Clear
					</button>
				</div>
			)}
		</div>
	)
}
