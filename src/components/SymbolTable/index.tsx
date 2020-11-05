import React from 'react';
import { ICoinData } from '../../types';
import { Table, TableContainer, Td, TdImage, Tr } from './css';

interface Props {
	listData: ICoinData[];
}

function SymbolTable({ listData }: Props) {
	return (
		<TableContainer>
			<Table>
				<thead>
					<tr>
						<Tr>Logo</Tr>
						<Tr>Name</Tr>
						<Tr>Symbol</Tr>
						<Tr>th4</Tr>
						<Tr>th5</Tr>
					</tr>
				</thead>
				<tbody>
					{listData.map((data) => (
						<tr>
							<TdImage>
								<img src={data.img} alt={data.symbol} />
							</TdImage>
							<Td>{data.name}</Td>
							<Td>{data.symbol}</Td>
							<Td>th4</Td>
							<Td>th5</Td>
						</tr>
					))}
				</tbody>
			</Table>
		</TableContainer>
	);
}

export default SymbolTable;
