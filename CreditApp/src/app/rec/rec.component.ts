import { Component, OnInit } from '@angular/core';
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
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.css']
})
export class RecComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
