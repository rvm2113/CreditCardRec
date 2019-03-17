import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainInformationComponent } from './main-information/main-information.component';
// import { CreditCardTypeComponent } from './credit-card-type/credit-card-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCheckboxModule, MatSelectModule} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { RecComponent } from './rec/rec.component';

import { AppRoutingModule }     from './app-routing.module';
import { SurveyComponent } from './survey/survey.component';



@NgModule({
  declarations: [
    AppComponent,
    MainInformationComponent,
    // CreditCardTypeComponent,
    SplashScreenComponent,
    RecComponent,
    SurveyComponent
  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
     MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCheckboxModule, MatSelectModule,
    

  ],
  exports: [
     MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCheckboxModule, MatSelectModule,
     FormsModule,
    ReactiveFormsModule,

	],
  providers: [],
  bootstrap: [AppComponent, MainInformationComponent]
})
export class AppModule { }
