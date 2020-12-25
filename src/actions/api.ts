import { IApi } from '../types';

export const FETCH_APIS = 'FETCH_APIS' as const;
export const UPDATE_API = 'UPDATE_API' as const;

export const fetchApis = (apis: IApi[]) => ({ type : FETCH_APIS, payload : apis });
export const updateApi = (api: IApi) => ({ type : UPDATE_API, payload : api });

export type ApiActionType = ReturnType<typeof fetchApis> | ReturnType<typeof updateApi>;
