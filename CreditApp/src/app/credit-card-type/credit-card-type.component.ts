import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'credit-card-type',
  templateUrl: './credit-card-type.component.html',
  styleUrls: ['./credit-card-type.component.css']
})
export class CreditCardTypeComponent extends AppComponent implements OnInit {
  public changeworthy: boolean = false;

  constructor() { 
     super();

  }

  ngOnInit() {
  }


   onChange(){
  	this.changeworthy = !this.changeworthy;
  }
}
