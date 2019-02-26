import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;

  //ActivateRoute represents the route url paramater values
  constructor(private str: ActivatedRoute) {
    //params:represents an Observable
    //parameters: represents actual array of url params
    this.str.params.subscribe((parameters) => {
      this.searchStr = parameters["srch"]; // this 'srch' name should match with the config object created in app.module.ts
    })
  }

  ngOnInit() {
  }

}
