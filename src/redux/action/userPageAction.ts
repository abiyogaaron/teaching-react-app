import { ThunkAction } from 'redux-thunk';
import { IAppState } from '../../interface/state';
import {
  TAllAction,
  EUsersPageAction,
  IuserPageAction,
} from '../../interface/action';
import { IGETUsersResponse } from '../../interface';
import APIService from '../../service';

const setLoading = (isLoading: boolean): IuserPageAction => ({
  type: EUsersPageAction.USER_SET_LOADING,
  payload: { isLoading },
});

export const resetStateData = () => ({
  type: EUsersPageAction.USER_RESET_STATE,
});

export const setUsersData = (data: IGETUsersResponse[]): IuserPageAction => ({
  type: EUsersPageAction.USER_SET_DATA,
  payload: { data },
});

export const getUsers = (): ThunkAction<void, IAppState, {}, TAllAction> => 
  async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const users: any = await APIService.request('GET', 'users');
    console.log(users)
    dispatch(setUsersData(users))
  } catch (err) {
    alert(err)
  }finally {
    dispatch(setLoading(false));
  }
}