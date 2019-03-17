import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  receiveTransactionHistory(){
  	 var datax;
    const headers = new HttpHeaders()
         
          .set('Content-Type', 'application/json');


    // console.log("DATA: " + data);
    // console.log("HEADERS: " + headers);
    //make a cross origin POST request for user timeline info.
    // return this.http.post('http://127.0.0.1:/query_user', JSON.stringify({"screenname": screenname, "data": ""}), {
    //   headers: headers
    // });
  }
  

}
