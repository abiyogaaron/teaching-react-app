import { IGETUsersResponse } from './index';

export interface IUsersPageState {
  isLoading: boolean;
  data: IGETUsersResponse[];
}

export interface IAppState {
  usersPage: IUsersPageState;
}