import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent {

  @Input() products_list: Array<Product>; //@Input() says that this member takes data from another component

  constructor() { }



}
