import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-chk',
  //templateUrl: './temp-chk.component.html',
  template: `<div>
              <span>
                {{name}}
              </span>
            </div>`,
  styleUrls: ['./temp-chk.component.css']
})
export class TempChkComponent implements OnInit {

  name:string;

  constructor() { 
    this.name="Deekay";
  }

  ngOnInit() {
  }

}
