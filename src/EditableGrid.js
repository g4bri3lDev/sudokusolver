import React from 'react'
import './grid.css'
export default function EditableGrid({ grid, setGrid }) {
	return (
		<table>
			<tbody>
				{grid.map((value, key) => (
					<tr key={key}>
						{value.map((val, k) => (
							<td key={k}>
								<input
									value={val}
									onChange={(event) => {
										let newGrid = [...grid]
										newGrid[key][k] = event.target.value
										setGrid(newGrid)
									}}
								/>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
