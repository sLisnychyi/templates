import { NgModule }             from '@angular/core';
import {ModuleWithProviders} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import {NewtemplateComponent} from "./components/newtemplate/newtemplate.component";
import {TemplatetableComponent} from "./components/templatetable/templatetable.component";

const routes: Routes = [
  { path: '', component: TemplatetableComponent },
  { path: 'template', component: NewtemplateComponent },
  { path: 'template/:name', component: NewtemplateComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

export const appRouting : ModuleWithProviders = RouterModule.forRoot(routes);
