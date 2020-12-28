import { ApiActionType, FETCH_APIS, UPDATE_API } from '../actions/api';
import { IApi } from '../types';

export interface ApiState {
	apis: IApi[];
}

const initialState: ApiState = {
  apis : []
};

const apiReducer = (state: ApiState = initialState, action: ApiActionType): ApiState => {
  switch (action.type) {
  case FETCH_APIS:
    return {
      ...state,
      apis : action.payload.map((api) => ({ ...api }))
    };
  case UPDATE_API: {
    const index = state.apis.findIndex((api) => api.api_key === action.payload.api_key);
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
