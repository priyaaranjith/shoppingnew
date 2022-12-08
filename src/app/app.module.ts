import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { UserregComponent } from './userreg/userreg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddComponent } from './add/add.component';

const myRoute : Routes = [
  {
    path : "",
    component : AdminloginComponent
  },
  {
    path : "userreg",
    component : UserregComponent
  },
  {
    path : "userlogin",
    component : UserloginComponent
  },
  {
    path : "add",
    component : AddComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    UserregComponent,
    UserloginComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
