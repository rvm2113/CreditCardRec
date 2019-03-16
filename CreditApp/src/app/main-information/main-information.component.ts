import { Component, OnInit } from '@angular/core';



export interface Purchase{
	type: string
}

@Component({
  selector: 'main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css']
})


export class MainInformationComponent implements OnInit {

purchases:Purchase[] = [
   {type: 'Shopping'},
    {type: 'Travel'},
    {type: 'Business'}
  ];


	purchaseval = "";
  constructor() { }

  ngOnInit() {
  }

  changePurchase(value) {

 	this.purchaseval = value;
 	console.log("EXPORT VAL: " + this.purchaseval);
 }


}
