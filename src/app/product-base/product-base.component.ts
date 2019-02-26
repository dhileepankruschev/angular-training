import { Component, OnInit } from '@angular/core';
import { Product } from '../product.modal';

/*class Product{

}*/

@Component({
  selector: 'app-product-base',
  templateUrl: './product-base.component.html',
  styleUrls: ['./product-base.component.css']
})
export class ProductBaseComponent {

  products: Array<Product>;

  constructor() {

    //TODO: fetch all products from server (http services to be used)

    this.products = [
      new Product("Product 1", 30, "Category 1"),
      new Product("Product 2", 50, "Category 2")
    ]
  }

  //Receive HTML DOM Objects since we pass the HTML component ids in form-input.component.html
  //TODO:https servcie to save the product to the server
  saveVal(_name: HTMLInputElement, _cost: HTMLInputElement, _category: HTMLInputElement) {

    this.products.push(new Product(_name.value, parseInt(_cost.value), _category.value));

    _name.value = "";
    _cost.value = "";
    _category.value = "";

  }

  addNewProd(product: Product) {
    console.log(product)
    this.products.push(product);
  }



}
