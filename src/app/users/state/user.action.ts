// import { Action } from "@ngrx/store";
import { Users  } from "../users.model";

export enum UserActionType {
  LOAD_USERS ="[Users] Load Users",
  LOAD_USERS_SUCCESS = "[Users] Load Users Success",
  LOAD_USERS_FAIL = "[Users] Load Users Fail"
}

export class LoadUsers implements Action {
  readonly type = UserActionType.LOAD_USERS
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionType.LOAD_USERS_SUCCESS

  constructor(public payload: Users[] ){}

}

export class LoadUsersFail implements Action {
  readonly type = UserActionType.LOAD_USERS_FAIL

  constructor(public payload: String){}
}

export type Action = LoadUsers | LoadUsersSuccess | LoadUsersFail

