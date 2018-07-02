import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {MatTableModule, MatButtonModule, MatCheckboxModule} from "@angular/material";
import { AppRoutingModule }     from './app-routing.module';
import {DataTablesModule} from "angular-datatables";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';
import { UsertableComponent } from './usertable/usertable.component';

import {UserService} from "./services/user.service"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule, MatButtonModule, MatCheckboxModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    UsertableComponent
  ],
  providers: [UserService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
