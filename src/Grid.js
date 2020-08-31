import React from 'react'
import './grid.css'
export default function Grid({ grid,children}) {
	return (
		<table>
			<tbody>
				{grid.map((value, key) => (
					<tr key={key}>
						{value.map((val, k) => (
							<td key={k}>
								{val}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
