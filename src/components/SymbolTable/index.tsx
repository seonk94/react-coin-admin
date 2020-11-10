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
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell colSpan="3">Coin</Table.HeaderCell>
						<Table.HeaderCell colSpan="2">Controls</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
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
