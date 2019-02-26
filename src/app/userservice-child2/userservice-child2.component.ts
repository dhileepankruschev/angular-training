import { Component, OnInit } from '@angular/core';
import { FetchServService } from '../fetch-serv.service';

@Component({
  selector: 'app-userservice-child2',
  templateUrl: './userservice-child2.component.html',
  styleUrls: ['./userservice-child2.component.css']
})
export class UserserviceChild2Component implements OnInit {

  constructor(private fetch: FetchServService) {

  }

  ngOnInit() {
  }

  changeVal(data: HTMLInputElement) {

    this.fetch.dummy_data = data.value;

  }

}
