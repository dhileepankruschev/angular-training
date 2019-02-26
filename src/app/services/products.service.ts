import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from '../product.modal';
//import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: "http://localhost:3000/products"; //from json-server : we will get this url after starting the json-server with the static json
  constructor(private http: Http) { }

  //Commented because .map is throwing error
  /*fetchAllProducts(): Observable<Product[]> {
    //not getting identified as Product
    //return this.http.get(this.url);

    //need to convert to json
    //TODO:.map is throwing error. need to resolve

    return this.http.get(this.url).pipe(map((obj: Response) => {
      obj.json();
    }));

}*/
}
