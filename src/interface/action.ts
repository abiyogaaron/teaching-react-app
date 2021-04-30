import { IGETUsersResponse } from './index';

export enum EUsersPageAction {
  USER_SET_LOADING = 'USER_SET_LOADING',
  USER_SET_DATA = 'USER_SET_DATA',
  USER_RESET_STATE = 'USER_RESET_STATE',
}

export interface IUsersPageSetLoadingAction {
  isLoading: boolean;
}

export interface IUsersPageSetDataAction {
  data: IGETUsersResponse[];
}

export type TUsersPagePayload = 
  | IUsersPageSetLoadingAction
  | IUsersPageSetDataAction

export interface IuserPageAction {
  type: EUsersPageAction;
  payload: TUsersPagePayload;
}

export type TAllAction = 
  | IuserPageAction