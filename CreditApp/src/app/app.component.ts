import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as _ from 'lodash';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  	<main-information> </main-information>
  	<credit-card-type> </credit-card-type>



  `
})
export class AppComponent {
  public title;
  public isViewable:boolean = false;
 constructor(){
  this.title = 'CreditApp';
   this.isViewable = false;
 }

 setViewable(){
 	this.isViewable = !this.isViewable;
 	console.log(this.isViewable);
 }
 
}
