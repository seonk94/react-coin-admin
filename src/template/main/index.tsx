import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Stat from '../../components/Stat';
import SymbolTable from '../../components/SymbolTable';
import { ICoin } from '../../types';
import { MainTemplateContainer } from './css';

function MainTemplate() {
	const [coinList, setCoinList] = useState([
		{
			symbol: 'BTC',
			name: 'Bitcoin',
			img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
			running: false,
		},
		{
			symbol: 'ETH',
			name: 'Ethereum',
			img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
			running: false,
		},
	]);

	const updateCoin = (data: ICoin) => {
		setCoinList(coinList.map((coin) => (coin.symbol === data.symbol ? data : coin)));
	};

	const removeCoin = (data: ICoin) => {
		setCoinList(coinList.filter((coin) => coin.symbol !== data.symbol));
	};

	return (
		<MainTemplateContainer>
			<Grid container>
				<Grid.Row>
					<Grid.Column width={1} mobile={16} computer={4}>
						<Stat title="USDT" data="12,657" />
					</Grid.Column>
					<Grid.Column width={2} mobile={16} computer={8}>
						Chart
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={3} mobile={16}>
						<SymbolTable updateCoin={updateCoin} removeCoin={removeCoin} coinList={coinList} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</MainTemplateContainer>
	);
}

export default MainTemplate;
