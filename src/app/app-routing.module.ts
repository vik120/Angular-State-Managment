import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: 'users',
		component: UsersComponent,
		loadChildren: './users/users.module#UsersModule'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
