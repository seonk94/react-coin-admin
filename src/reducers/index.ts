import { combineReducers } from 'redux';
import coin, { CoinState } from './coin';

export interface RootState {
	coin: CoinState;
}

const rootReducer = combineReducers({
	coin,
});

export default rootReducer;
