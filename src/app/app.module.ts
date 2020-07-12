import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersModule } from './users/users.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
	  UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  UsersModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
