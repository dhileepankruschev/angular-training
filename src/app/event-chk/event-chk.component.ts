import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-chk',
  templateUrl: './event-chk.component.html',
  styleUrls: ['./event-chk.component.css']
})
export class EventChkComponent {

  data: string;


  constructor() {
    this.data = "Initial value..";
  }

  changeVal(): void {
    this.data = "New Value..."
  }


}
