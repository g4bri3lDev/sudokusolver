import React, { useState } from 'react'
import grids from './grids'
import Grid from './Grid'
import EditableGrid from './EditableGrid'
export default function GridSelect({ setGrid, setSelect }) {
	const [customGrid, setCustomGrid] = useState(
		[...Array(9)].map((e) => Array(9).fill(''))
	)
	return (
		<div>
			{grids.map((grid, key) => (
				<>
					<Grid grid={grid} key={key} />
					<button
						key={'button' + key}
						onClick={() => {
							setSelect(false)
							setGrid([...grids[key]])
						}}
					>
						Select Grid
					</button>
				</>
			))}
			<EditableGrid grid={customGrid} setGrid={setCustomGrid}></EditableGrid>
			<button
				onClick={() => {
					grids.push(customGrid)
					setCustomGrid([...Array(9)].map((e) => Array(9).fill('')))
				}}
			>
				Add Custom Grid
			</button>
		</div>
	)
}
