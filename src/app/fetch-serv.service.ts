import { Injectable } from '@angular/core';

//@Injectable means service can be injected automatically to the constructors of components and other services
@Injectable({
  //providedIn: 'root' => implies that the Dependency injection framework is going to automatically initiate an object of this service at the beginning
  providedIn: 'root'
})
export class FetchServService {

  dummy_data: string;

  constructor() {
    this.dummy_data = "Dummy Data";
  }

  getSomeData() {
    return this.dummy_data;
  }
}
