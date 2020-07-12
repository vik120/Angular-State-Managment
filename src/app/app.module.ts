import { EffectsModule } from '@ngrx/effects';
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
import { HttpClientModule } from "@angular/common/http";
import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';
import { UserEffects } from './store/user.effects';


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
    HttpClientModule,

  //  StoreModule.forRoot({}),
  //  StoreDevtoolsModule.instrument(),
  //  EffectsModule.forRoot([UserEffects]),

    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
