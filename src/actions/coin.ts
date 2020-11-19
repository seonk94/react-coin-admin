import { ICoin } from '../types';

export const FETCH_COIN_LIST = 'FETCH_COIN_LIST';
export interface FetchCoinAction {
	type: typeof FETCH_COIN_LIST;
	payload: ICoin[];
}

export type CoinActionTypes = FetchCoinAction;
