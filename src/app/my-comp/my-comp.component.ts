import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent {

  name:string;
  age:number;
  email:string;

  constructor() { 
    this.name="DK";
    this.age=30;
    this.email="DK@dk.COm";
  }



}
