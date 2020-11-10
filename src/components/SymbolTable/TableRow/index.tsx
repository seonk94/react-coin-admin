import React from 'react';
import { Table, Image, Button, Icon } from 'semantic-ui-react';
import { ICoinData } from '../../../types';

interface Props {
	data: ICoinData;
	removeCoin: (coin: ICoinData) => void;
	updateCoin: (coin: ICoinData) => void;
}
function TableRow({ data, removeCoin, updateCoin }: Props) {
	const handleRemoveCoin = () => {
		removeCoin(data);
	};
	const handleRunning = () => {
		updateCoin({
			...data,
			running: !data.running,
		});
	};

	return (
		<Table.Row positive={data.running}>
			<Table.Cell>
				<Image src={data.img} avatar />
			</Table.Cell>
			<Table.Cell>{data.name}</Table.Cell>
			<Table.Cell>{data.symbol}</Table.Cell>
			<Table.Cell>
				<Button primary size="mini" icon onClick={handleRunning}>
					<Icon name={data.running ? 'stop' : 'play'} />
				</Button>
			</Table.Cell>
			<Table.Cell>
				<Button primary size="mini" icon onClick={handleRemoveCoin}>
					<Icon name="delete" />
				</Button>
			</Table.Cell>
		</Table.Row>
	);
}
export default TableRow;
