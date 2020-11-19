import { CoinActionTypes, FETCH_COIN_LIST } from '../actions/coin';
import { ICoin } from '../types';

export interface CoinState {
	coins: ICoin[];
}

const initialState: CoinState = {
	coins: [
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
	],
};

const coinReducer = (state: CoinState = initialState, action: CoinActionTypes): CoinState => {
	switch (action.type) {
		case FETCH_COIN_LIST:
			return {
				...state,
				coins: action.payload.map((coin) => ({ ...coin })),
			};
		default:
			return state;
	}
};

export default coinReducer;
