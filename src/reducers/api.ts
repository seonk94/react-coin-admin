import { ApiActionType, FETCH_APIS } from '../actions/api';
import { IApi } from '../types';

export interface ApiState {
	apis: IApi[];
}

const initialState: ApiState = {
	apis: [
		{
			apiKey: 'apiKey1',
			secret: 'secret1',
			market: 'bybit',
			userId: 'seonk94@gmail.com',
		},
		{
			apiKey: 'apiKey2',
			secret: 'secret2',
			market: 'bybit',
			userId: 'seonk94@naver.com',
			indicator: 'RSI',
			period: '4h',
		},
	],
};

const apiReducer = (state: ApiState = initialState, action: ApiActionType): ApiState => {
	switch (action.type) {
		case FETCH_APIS:
			return {
				...state,
				apis: action.payload.map((api) => ({ ...api })),
			};
		default:
			return state;
	}
};

export default apiReducer;
