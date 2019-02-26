import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-template',
  templateUrl: './input-template.component.html',
  styleUrls: ['./input-template.component.css']
})
export class InputTemplateComponent {

  name: string;
  cost: number;
  category: string;

  constructor() { }


  //form is dynamically created object. thatsy datatype is any
  saveAll(form: any) {

    this.name = form.pname;
    this.cost = form.pcost;
    this.category = form.pcat;

  }

}
