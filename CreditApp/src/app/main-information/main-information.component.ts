import { Component, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';
import { FormBuilder, FormGroup} from '@angular/forms';


export interface Purchase{
	type: string
}


export interface Income{
	type: string
}
export interface CreditCards{
  type: string
}


@Component({
  selector: 'main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css']
})


export class MainInformationComponent extends AppComponent implements OnInit  {

 rateControl = null;
 rateControlSecond = null;
 
purchases:Purchase[] = [
    {type: 'Business'},
    {type: 'Driving'},
    {type: 'Shopping'},
    {type: 'Travel'}
  ];
incomes:Income[] = [
    {type: 'below $40,000'},
    {type: 'between $40,000 - $60,000'},
    {type: 'between $60,000 - $80,000'},
    {type: 'between $80,000 - $100,000'},
    {type: 'over $150,000'}
  ];
  CreditCards:CreditCards[] = [
   {type: 'Chase'},
    {type: 'Discover'},
    {type: 'Mastercard'},
    {type: 'Visa'}
  ];

  ageval = ""
	purchaseval1 = "";
  purchaseval2 = "";
  purchase3 = "";
  incomeval = "";
  creditval = "";
  purchasenumval = "";
  constructor() { 
  	super();
  	this.rateControl = new FormControl("", [Validators.max(120), Validators.min(0)]);
    this.rateControlSecond = new FormControl("", [Validators.max(1000), Validators.min(0)]);
  }


  ngOnInit() {
  }


  onChange(){
  	console.log("Hello...");
  	super.setViewable(); 
  }
  changePurchase(value) {

 	this.ageval = value;
 	console.log("EXPORT VAL: " + this.purchaseval);
 }
 changePurchase1(value) {

   this.purchaseval1 = value;
   console.log("EXPORT VAL: " + this.purchaseval);
 }
 changePurchase2(value) {

   this.purchaseval2 = value;
   console.log("EXPORT VAL: " + this.purchaseval);
 }
 changePurchase3(value) {

   this.purchaseval3 = value;
   console.log("EXPORT VAL: " + this.purchaseval);
 }
 changePurchase4(value) {

   this.creditval = value;
   console.log("EXPORT VAL: " + this.purchaseval);
 }
 changePurchase5(value) {

   this.creditnumval = value;
   console.log("EXPORT VAL: " + this.purchaseval);
 }
 changePurchase6(value) {

    this.purchasenumval = value;
   console.log("EXPORT VAL: " + this.purchaseval);
 }
 changeIncome(value) {

   this.incomeval = value;
   console.log("EXPORT VAL: " + this.incomeval);
 }
   onChange(){
    this.changeworthy = !this.changeworthy;
  }
open(){
  
}
  // maxLengthCheck(object) {
  //   if (object.value.length > object.maxLength)
  //     object.value = object.value.slice(0, object.maxLength)
  // }
    
  // isNumeric (evt) {
  //   var theEvent = evt || window.event;
  //   var key = theEvent.keyCode || theEvent.which;
  //   key = String.fromCharCode (key);
  //   var regex = /[0-9]|\./;
  //   if ( !regex.test(key) ) {
  //     theEvent.returnValue = false;
  //     if(theEvent.preventDefault) theEvent.preventDefault();
  //   }
  // }


}
