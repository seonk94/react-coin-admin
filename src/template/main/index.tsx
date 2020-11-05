import React from 'react';
import SymbolTable from '../../components/SymbolTable';
import { ICoinData } from '../../types';
import { MainTemplateContainer } from './css';

function MainTemplate() {
	const dumpCoinListData: ICoinData[] = [
		{
			symbol: 'BTC',
			name: 'Bitcoin',
			img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
		},
		{
			symbol: 'ETH',
			name: 'Ethereum',
			img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
		},
	];
	return (
		<MainTemplateContainer>
			<SymbolTable listData={dumpCoinListData} />
		</MainTemplateContainer>
	);
}

export default MainTemplate;
