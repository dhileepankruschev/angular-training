import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  uname: string;

  constructor() {
    this.uname = "Deekay";
  }

  ngOnInit() {
  }

}
