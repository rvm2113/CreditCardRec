import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as _ from 'lodash';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

export interface Transaction{
  category: string,
  description: string
}
export interface Card{
  type: string,
  reward: string,
  risk:string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `

  <div id="wrapper">
  	<main-information> </main-information>
  	<credit-card-type> </credit-card-type>
  </div>



  `
})


export class AppComponent {
  public title;
  public isViewable:boolean = false;
 constructor(){
  this.title = 'CreditApp';
   this.isViewable = false;
 }

transactions:Transaction[] = [
   {category: 'Shopping', description: 'Amazon purchase'},
    {category: 'Driving', description: 'BP Gas station'},
    {category: 'Travel', description: 'United Airlines'},
    {category: 'Shopping', description: 'Nike purchase'}
  ];
cards:Card[] = [
   {type: 'Bank of America Mastercard', reward: 'Driving',risk:'Idk'},
    {type: 'Capital One VentureOne', reward: 'Travel', risk:'Idk'},
    {type: 'Discover it', reward: 'Shopping',risk:'Idk'},
    {type: 'Chase Ink Business Preferred', reward: 'Business',risk:'Idk'},
  ];
 setViewable(){
 	this.isViewable = !this.isViewable;
 	console.log(this.isViewable);
 }
 
}
