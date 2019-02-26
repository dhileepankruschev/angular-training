import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from '../product.modal';

@Component({
  selector: 'app-use-http-comp',
  templateUrl: './use-http-comp.component.html',
  styleUrls: ['./use-http-comp.component.css']
})
export class UseHttpCompComponent implements OnInit {

  data: Object;
  products:Product[];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  //return list of users
  //Observable<Object[]> : Array of objects encapsulated in Observable
  //not an immediate responsive task : incremental response (say if there are 1000 records and we fetch data one by one)
  //Observable: Observes / Waits / Creates thread to receive (Async)
  //Whenever we receive information we can actually get data from it by using a special operator(function) : subscribe
  //YOu need to subscribe to the Observable to get the data
  //Observable is part of 'rxjs' library (Reactive JS library)
  getData() {
    //something is not the actual data, but Observable
    //let something = this.http.get("http://jsonplaceholder.typicode.com/users");

    //subscribe asks function as an argument. response will be received inside this function
    //.subscribe(<function>);
    /*this.http.get("http://jsonplaceholder.typicode.com/users")
      .subscribe((data: Response) => {
        //do what is needed
        this.data = data.json();
      });*/

      this.http.get("http://localhost:3000/products")
      .subscribe((data: Response) => {
        //do what is needed
        this.products = data.json();
      });
  }

}
