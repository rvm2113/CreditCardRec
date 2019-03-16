import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';


@Component({
  selector: 'credit-card-type',
  templateUrl: './credit-card-type.component.html',
  styleUrls: ['./credit-card-type.component.css']
})
export class CreditCardTypeComponent implements OnInit {
  CreditCards:CreditCards[] = [
   {type: 'Chase'},
    {type: 'Discovery'},
    {type: 'Mastercard'},
    {type: 'Visa'}
  ];
  constructor() { 
  	this.rateControl = new FormControl("", [Validators.max(100), Validators.min(0)])
  }

  ngOnInit() {
  }


}
