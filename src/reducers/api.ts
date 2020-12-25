import { ApiActionType, FETCH_APIS, UPDATE_API } from '../actions/api';
import { IApi } from '../types';

export interface ApiState {
	apis: IApi[];
}

const initialState: ApiState = {
  apis : [
    {
      apiKey : 'apiKey1',
      secret : 'secret1',
      market : 'bybit',
      userId : 'seonk94@gmail.com'
    },
    {
      apiKey : 'apiKey2',
      secret : 'secret2',
      market : 'bybit',
      userId : 'seonk94@naver.com',
      indicator : 'RSI',
      period : '4h'
    }
  ]
};

const apiReducer = (state: ApiState = initialState, action: ApiActionType): ApiState => {
  switch (action.type) {
  case FETCH_APIS:
    return {
      ...state,
      apis : action.payload.map((api) => ({ ...api }))
    };
  case UPDATE_API: {
    const index = state.apis.findIndex((api) => api.apiKey === action.payload.apiKey);
    const newApis = [...state.apis];
    newApis[index] = {
      ...newApis[index],
      ...action.payload
    };
    return {
      ...state,
      apis : newApis
    };
  }
  default:
    return state;
  }
};

export default apiReducer;
