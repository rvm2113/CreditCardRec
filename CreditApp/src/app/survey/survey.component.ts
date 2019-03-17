import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardTypeComponent } from '../credit-card-type/credit-card-type.component';
import { MainInformationComponent } from '../main-information/main-information.component';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['../app.component.css'],
  template: `
  <div id="wrapper">
    <main-information> </main-information>
    <credit-card-type> </credit-card-type>
  </div>`
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
