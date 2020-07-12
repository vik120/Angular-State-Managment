import { createAction, props } from '@ngrx/store';

export enum UserActionType {
  LOAD_USERS ="[Users] Load Users",
  LOAD_USERS_SUCCESS = "[Users] Load Users Success",
  LOAD_USERS_FAIL = "[Users] Load Users Fail"
}


export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
