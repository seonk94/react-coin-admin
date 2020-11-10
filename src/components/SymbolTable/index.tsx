import React from 'react';
import { Table } from 'semantic-ui-react';
import { ICoinData } from '../../types';
import { TableContainer } from './css';
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
				<Table.Body>
					{coinList.map((data) => (
						<TableRow data={data} removeCoin={removeCoin} updateCoin={updateCoin} />
					))}
				</Table.Body>
			</Table>
		</TableContainer>
	);
}

export default SymbolTable;
