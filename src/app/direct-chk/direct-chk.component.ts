import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-chk',
  templateUrl: './direct-chk.component.html',
  styleUrls: ['./direct-chk.component.css']
})
export class DirectChkComponent {

  a: number;
  b: number;
  valid: boolean;
  names: string[];

  constructor() {
    this.a = 10;
    this.b = 5;
    this.valid = true;
    this.names = ["First", "Second", "Third"];
  }



}
