import {IUsersPageState } from '../../interface/state';
import {
  IUsersPageSetDataAction,
  IUsersPageSetLoadingAction,
  EUsersPageAction,
  IuserPageAction,
} from '../../interface/action';

const INITIAL_STATE: IUsersPageState = {
  isLoading: false,
  data: [],
}

const usersPageReducer = (state = INITIAL_STATE, action: IuserPageAction): IUsersPageState => {
  switch (action.type) {
    case EUsersPageAction.USER_SET_LOADING: {
      const { isLoading } = action.payload as IUsersPageSetLoadingAction;
      return { ...state, isLoading };
    }
    case EUsersPageAction.USER_SET_DATA: {
      const { data } = action.payload as IUsersPageSetDataAction;
      return { ...state, data };
    }
    case EUsersPageAction.USER_RESET_STATE: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
}

export default usersPageReducer;