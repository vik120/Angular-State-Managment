import { Action } from '@ngrx/store';
import { Users } from './../users.model';
import * as UserActions from './user.action';
import * as fromRoot from '../../state/app-state';
// const intialState = {
//   users: [
//     {
//       id: 1,
//       name: "Leanne Graham",
//       username: "Bret",
//       email: "Sincere@april.biz",
//       address: "Kulas Light Apt. 556 Gwenborough",
//       phone: "1-770-736-8031 x56442",
//       website: "hildegard.org",
//       company: "Healthcare Practitioners and Technical Occupations"
//     }
//   ]
// }

// export function userReducer(state = intialState, action){
//   switch(action.type) {
//     case "LOAD_USER": {
//       return {
//         ... state,
//         loading: true,
//         loaded: false
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// }

export interface UserState {
  users: Users[],
  loading: Boolean,
  loaded: Boolean,
  error: String
}

export interface AppState extends fromRoot.AppState{
  users: UserState;
}

export const initalState: UserState = {
  users: [],
  loading: true,
  loaded: false,
  error: ''
}

export function userReducer(
  state = initalState,
  action: UserActions.Action
): UserState{
  switch (action.type){
    case UserActions.UserActionType.LOAD_USERS: {
      return {
        ...state,
        loading: true
      }
    }
    case UserActions.UserActionType.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        users: action.payload
      }
    }
    case UserActions.UserActionType.LOAD_USERS_FAIL: {
      return {
        ...state,
        users: [],
        loading: false,
        loaded: false,
        error: action.payload
      }
    }

    default: {
      return state
    }
  }
}
