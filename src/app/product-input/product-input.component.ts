import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css']
})
export class ProductInputComponent {

  //Creating own user defined event : that would emit an object of product
  //Whenever Emitter is used, it should be used with @Output()
  @Output() submit_info: EventEmitter<Product>;

  constructor() {
    this.submit_info = new EventEmitter();
  }

  //Receive HTML DOM Objects since we pass the HTML component ids in form-input.component.html
  //TODO:https servcie to save the product to the server
  saveVal(_name: HTMLInputElement, _cost: HTMLInputElement, _category: HTMLInputElement) {

    let prod = new Product(_name.value, parseInt(_cost.value), _category.value);

    //this.products.push(prod);

    //emits the product to the base component
    this.submit_info.emit(prod);

    _name.value = "";
    _cost.value = "";
    _category.value = "";

  }



}
