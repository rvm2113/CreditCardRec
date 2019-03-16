import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInformationComponent } from './main-information/main-information.component';
import { CreditCardTypeComponent } from './credit-card-type/credit-card-type.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInformationComponent,
    CreditCardTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
