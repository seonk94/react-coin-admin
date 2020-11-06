import React from 'react';
import { faRunning, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICoinData } from '../../../types';
import { Td, TdImage } from '../css';

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
		<tr>
			<TdImage>
				<img src={data.img} alt={data.symbol} />
			</TdImage>
			<Td>{data.name}</Td>
			<Td>{data.symbol}</Td>
			<Td>
				<button type="button" onClick={handleRunning}>
					<FontAwesomeIcon icon={data.running ? faRunning : faStopCircle} />
				</button>
			</Td>
			<Td>
				<button type="button" onClick={handleRemoveCoin}>
					remove
				</button>
			</Td>
		</tr>
	);
}
export default TableRow;
