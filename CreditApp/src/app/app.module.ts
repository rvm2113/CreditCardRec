import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInformationComponent } from './main-information/main-information.component';
import { CreditCardTypeComponent } from './credit-card-type/credit-card-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCheckboxModule, MatSelectModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    MainInformationComponent,
    CreditCardTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCheckboxModule, MatSelectModule

  ],
  exports: [
     MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCheckboxModule, MatSelectModule
	],
  providers: [],
  bootstrap: [AppComponent, CreditCardTypeComponent]
})
export class AppModule { }
