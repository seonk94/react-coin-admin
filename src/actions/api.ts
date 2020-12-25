import { IApi } from '../types';

export const FETCH_APIS = 'FETCH_APIS';
export interface FetchApisAction {
	type: typeof FETCH_APIS;
	payload: IApi[];
}

export type ApiActionType = FetchApisAction;
