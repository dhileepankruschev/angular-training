import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-check',
  templateUrl: './pipe-check.component.html',
  styleUrls: ['./pipe-check.component.css']
})
export class PipeCheckComponent implements OnInit {

  str_data = "Pipe Check Data";
  names = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];
  date_data = new Date();

  constructor() { }

  ngOnInit() {
  }

}
