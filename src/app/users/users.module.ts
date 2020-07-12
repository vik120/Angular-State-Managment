import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddusersComponent } from './addusers/addusers.component';
import { EditusersComponent } from './editusers/editusers.component';
import { ListusersComponent } from './listusers/listusers.component';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'

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
		path: 'edit',
		component: EditusersComponent
	}
]


@NgModule({
  declarations: [AddusersComponent, EditusersComponent, ListusersComponent],
  imports: [
    CommonModule,
	  ReactiveFormsModule,
	  RouterModule.forChild(userRoutes),
	  
  ]
})
export class UsersModule { }
