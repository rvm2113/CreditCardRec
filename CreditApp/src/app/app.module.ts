import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInformationComponent } from './main-information/main-information.component';
import { CreditCardTypeComponent } from './credit-card-type/credit-card-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCheckboxModule, MatSelectModule} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { SplashComponentComponent } from './splash-component/splash-component.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { RecComponent } from './rec/rec.component';



const appRoutes: Routes = [
 
  { path: 'survey',      component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainInformationComponent,
    CreditCardTypeComponent,
    SplashComponentComponent,
    SplashScreenComponent,
    RecComponent,
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
     RouterModule.forRoot([
      {path:'survey', component:AppComponent},
       {path: 'splash', component: SplashScreenComponent},
      {path: 'rec', component: RecComponent},
      { path: '**', redirectTo: 'splash'}

    ])

  ],
  exports: [
     MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCheckboxModule, MatSelectModule,
     FormsModule,
    ReactiveFormsModule,

	],
  providers: [],
  bootstrap: [AppComponent, CreditCardTypeComponent]
})
export class AppModule { }
