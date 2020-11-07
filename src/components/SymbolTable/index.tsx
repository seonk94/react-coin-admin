import React from 'react';
import { ICoinData } from '../../types';
import { Table, TableContainer, Tr } from './css';
import TableRow from './TableRow';

interface Props {
	coinList: ICoinData[];
	removeCoin: (coin: ICoinData) => void;
	updateCoin: (coin: ICoinData) => void;
}

function SymbolTable({ coinList, removeCoin, updateCoin }: Props) {
	return (
		<TableContainer>
			<Table>
				<thead>
					<tr>
						<Tr>Logo</Tr>
						<Tr>Name</Tr>
						<Tr>Symbol</Tr>
						<Tr>Status</Tr>
						<Tr>Controls</Tr>
					</tr>
				</thead>
				<tbody>
					{coinList.map((data) => (
						<TableRow data={data} removeCoin={removeCoin} updateCoin={updateCoin} key={data.symbol} />
					))}
				</tbody>
			</Table>
		</TableContainer>
	);
}

export default SymbolTable;
