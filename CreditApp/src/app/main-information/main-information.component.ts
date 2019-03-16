import { Component, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';


export interface Purchase{
	type: string
}

@Component({
  selector: 'main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css']
})


export class MainInformationComponent extends AppComponent implements OnInit  {

 rateControl = null;
  
purchases:Purchase[] = [
   {type: 'Shopping'},
    {type: 'Travel'},
    {type: 'Business'}
  ];


	purchaseval = "";
  constructor() { 
  	super();
  	this.rateControl = new FormControl("", [Validators.max(120), Validators.min(0)]);
  }

  ngOnInit() {
  }


  onChange(){
  	console.log("Hello...");
  	super.setViewable(); 
  }
  changePurchase(value) {

 	this.purchaseval = value;
 	console.log("EXPORT VAL: " + this.purchaseval);
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
