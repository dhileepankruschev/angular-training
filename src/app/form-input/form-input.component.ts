import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {

  name: string;
  cost: number;
  category: string;

  constructor() {
    this.name = "";
    this.cost = 0;
    this.category = "";
  }

  //Receive HTML DOM Objects since we pass the HTML component ids in form-input.component.html
  saveVal(_name: HTMLInputElement, _cost: HTMLInputElement, _category: HTMLInputElement) {
    this.name = _name.value;
    this.cost = parseInt(_cost.value); //by default its string
    this.category = _category.value;

    _name.value = "";
    _cost.value = "";
    _category.value = "";

  }



}
