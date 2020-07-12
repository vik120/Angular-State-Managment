import { UserActions, UserActionTypes } from './user.actions';
import { Users } from './../users/users.model';
import { Action, createReducer, on } from '@ngrx/store';

export const userFeatureKey = 'usersState';

export interface State {
  users: Users[],
  error: String
}

export const initialState: State = {
  users: [],
  error: ''
};


// export const reducer = createReducer(
//   initialState,

// );

export function reducer(state = initialState, action: UserActions): State {
  switch(action.type){

    case UserActionTypes.LoadUsers:
      return {
        ...state
      }
    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        users: action.payload.data,
        error: ''
      }
    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        users: [],
        error: action.payload.error
      }

    default:
      return state
  }
}

