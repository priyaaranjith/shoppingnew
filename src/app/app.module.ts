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
import { ViewComponent } from './view/view.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  },
  {
    path : "view",
    component : ViewComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    UserregComponent,
    UserloginComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
