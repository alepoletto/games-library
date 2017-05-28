import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';
import { RentComponent } from './rent/rent.component';
import { RentedListComponent } from './rent/rented-list/rented-list.component';
import { UsersComponent } from './manage/users/users.component';
import { UserEditComponent } from './manage/users/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RentComponent,
    RentedListComponent,
    UsersComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
