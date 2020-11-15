import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
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
				<Table.Footer fullWidth>
					<Table.Row>
						<Table.HeaderCell colSpan="5">
							<Button secondary icon labelPosition="left" floated="right">
								<Icon name="add circle" />
								Add Symbol
							</Button>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
		</TableContainer>
	);
}

export default SymbolTable;
