import { Component, OnInit } from '@angular/core';
import { FetchServService } from '../fetch-serv.service';

@Component({
  selector: 'app-userservice-child1',
  templateUrl: './userservice-child1.component.html',
  styleUrls: ['./userservice-child1.component.css']
})

//Lifecycle (of component) hook/stage : OnInit
//ngOnInit occurs immediately after object initiation (after constructor)
export class UserserviceChild1Component implements OnInit {

  data: string;

  //DI automatically injected the services to all constructors
  constructor(public fetch: FetchServService) {
    //to initiate the class members
  }

  ngOnInit() {
    //to implement certain logics
    //service utilisation should be implemented here
    //this.data = this.fetch.getSomeData();
  }

}
