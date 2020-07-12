import { LoadUsersSuccess } from './user.action';
import { Users } from './../users.model';
import * as userActions from './user.action';
import { UserService } from './../../services/user.service';

import { Action } from '@ngrx/store';
import { Injectable  } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class UserEffect {
  constructor(
    private action$ : Actions,
    private userservice: UserService
  ){}

  @Effect()
  loadUsers$: Observable<Action> = this.action$.pipe(
    ofType<userActions.LoadUsers>(
      userActions.UserActionType.LOAD_USERS
    ),
    mergeMap((actions: userActions.LoadUsers) =>
      this.userservice.getUser().pipe(
        map(
          (users: Users[]) => {
            new userActions.LoadUsersSuccess(users)
          }
        ),
        catchError(err => of(new userActions.LoadUsersFail(err)))
      )
    )
  )
}
