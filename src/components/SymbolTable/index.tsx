import React from 'react';
import { Table, TableContainer } from './css';

function SymbolTable() {
	return (
		<TableContainer>
			<Table>
				<thead>
					<tr>
						<th>th1</th>
						<th>th2</th>
						<th>th3</th>
						<th>th4</th>
						<th>th5</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>th1</td>
						<td>th2</td>
						<td>th3</td>
						<td>th4</td>
						<td>th5</td>
					</tr>
				</tbody>
			</Table>
		</TableContainer>
	);
}

export default SymbolTable;
