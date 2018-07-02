///<reference path="../../node_modules/@angular/material/table/typings/table-module.d.ts"/>
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatTableModule, MatButtonModule, MatCheckboxModule, MatTreeModule, MatTooltipModule,
  MatToolbarModule, MatTabsModule, MatSortModule, MatSnackBarModule, MatSlideToggleModule, MatSliderModule,
  MatSidenavModule, MatSelectModule, MatRippleModule, MatRadioModule, MatProgressSpinnerModule, MatProgressBarModule,
  MatPaginatorModule, MatNativeDateModule, MatMenuModule, MatListModule, MatInputModule, MatIconModule,
  MatGridListModule, MatExpansionModule, MatDividerModule, MatDialogModule, MatDatepickerModule, MatStepperModule,
  MatChipsModule, MatCardModule, MatButtonToggleModule, MatBottomSheetModule, MatBadgeModule, MatAutocompleteModule
} from "@angular/material";
import { appRouting }     from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { MessagesComponent }    from './components/messages/messages.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { TemplatetableComponent } from './components/templatetable/templatetable.component'

import {UserService} from "./services/user.service";
import {TemplateService} from "./services/template.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NewtemplateComponent } from './components/newtemplate/newtemplate.component';
import { DeleteConfirmDialogComponent } from './shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { TemplateDetailsComponent } from './components/template-details/template-details.component';
import {TemplateMetadataProvider} from "./providers/template-metadata-provider";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting,
    MatTableModule, MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    UsertableComponent,
    TemplatetableComponent,
    NewtemplateComponent,
    DeleteConfirmDialogComponent,
    TemplateDetailsComponent
  ],
  entryComponents: [DeleteConfirmDialogComponent],
  providers: [UserService, TemplateService, TemplateMetadataProvider],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
