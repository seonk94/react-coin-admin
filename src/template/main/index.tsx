import React, { useState } from 'react';
import SymbolTable from '../../components/SymbolTable';
import { ICoinData } from '../../types';
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

	const updateCoin = (data: ICoinData) => {
		setCoinList(coinList.map((coin) => (coin.symbol === data.symbol ? data : coin)));
	};

	const removeCoin = (data: ICoinData) => {
		setCoinList(coinList.filter((coin) => coin.symbol !== data.symbol));
	};

	return (
		<MainTemplateContainer>
			<SymbolTable updateCoin={updateCoin} removeCoin={removeCoin} coinList={coinList} />
		</MainTemplateContainer>
	);
}

export default MainTemplate;
