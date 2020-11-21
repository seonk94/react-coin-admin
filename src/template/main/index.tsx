import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import Stat from '../../components/Stat';
import SymbolTable from '../../components/SymbolTable';
import { ICoin } from '../../types';
import { MainTemplateContainer } from './css';
import { RootState } from '../../reducers';
import { FETCH_COIN_LIST } from '../../actions/coin';

function MainTemplate() {
	const coins = useSelector((state: RootState) => state.coin.coins);
	const dispatch = useDispatch();

	const updateCoin = (data: ICoin) => {
		dispatch({
			type: FETCH_COIN_LIST,
			payload: coins.map((coin) => (coin.symbol === data.symbol ? data : coin)),
		});
	};

	const removeCoin = (data: ICoin) => {
		dispatch({
			type: FETCH_COIN_LIST,
			payload: coins.filter((coin) => coin.symbol !== data.symbol),
		});
	};

	return (
		<MainTemplateContainer>
			<Grid container>
				<Grid.Row>
					<Grid.Column mobile={16} computer={4}>
						<Stat title="USDT" data="12,657" />
					</Grid.Column>
					<Grid.Column mobile={16} computer={8}>
						Chart
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column mobile={16}>
						<SymbolTable updateCoin={updateCoin} removeCoin={removeCoin} coinList={coins} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</MainTemplateContainer>
	);
}

export default MainTemplate;
