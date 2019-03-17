// import { Component, OnInit } from '@angular/core';

// import {AppComponent} from '../app.component';

// import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

// export interface CreditCards{
// 	type: string
// }


// @Component({
//   selector: 'credit-card-type',
//   templateUrl: './credit-card-type.component.html',
//   styleUrls: ['./credit-card-type.component.css']
// })

// export class CreditCardTypeComponent extends AppComponent implements OnInit {
//   public changeworthy: boolean = false;
//   rateControl = null;
//   rateControlSecond = null;

// purchaseval = "";
	
//   CreditCards:CreditCards[] = [
//    {type: 'Chase'},
//     {type: 'Discover'},
//     {type: 'Mastercard'},
//     {type: 'Visa'}
//   ];
//   constructor() { 
//   	super();
//   	this.rateControl = new FormControl("", [Validators.max(8), Validators.min(0)]);
//   	this.rateControlSecond = new FormControl("", [Validators.max(1000), Validators.min(0)]);
//   }

//   ngOnInit() {
//   }

  

//   changePurchase(value){
//   	this.creditval = value;
//   }	
//   changePurchase2(value){
//   	this.creditnumval = value;
//   }	
//   changePurchase3(value){
//   	this.purchasenumval = value;
//   }	


//    onChange(){
//   	this.changeworthy = !this.changeworthy;
//   }

// }
