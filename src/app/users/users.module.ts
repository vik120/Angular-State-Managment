import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddusersComponent } from './addusers/addusers.component';
import { EditusersComponent } from './editusers/editusers.component';
import { ListusersComponent } from './listusers/listusers.component';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { userReducer } from './state/user.reducers';

const userRoutes: Routes = [
	{
		path: '',
		component: ListusersComponent
	},
	{
		path: 'add',
		component: AddusersComponent
	},
	{
		path: 'edit/:id',
		component: EditusersComponent
	}
]


@NgModule({
  declarations: [AddusersComponent, EditusersComponent, ListusersComponent],
  imports: [
    CommonModule,
	  ReactiveFormsModule,
	  RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', userReducer)
  ]
})
export class UsersModule { }
