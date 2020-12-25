import { combineReducers } from 'redux';
import api, { ApiState } from './api';

export interface RootState {
	api: ApiState;
}

const rootReducer = combineReducers({
  api
});

export default rootReducer;
