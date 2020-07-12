import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as UserActions from '../state/user.action';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  userslist: []

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    // this.store.dispatch({type: 'LOAD_USER'})
    // this.store.subscribe(
    //   (data:any) => {
    //     this.userslist = data.users.users;
    //     console.log(data.users.users);
    //   }
    // )

    this.store.dispatch(new UserActions.LoadUsers())
    this.store.subscribe(
      (data:any) => {
        this.userslist = data.users.users;
        console.log(data);
      }
    )
  }

}
