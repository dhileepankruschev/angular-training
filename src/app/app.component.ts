import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root', //used in index.html
  templateUrl: './app.component.html', // View part of the component
  styleUrls: ['./app.component.css'] // Style part of the component - All CSS
})
export class AppComponent {
  title = 'first-app';

  color: string;

  //router object should be received in the constructor for routing to work
  constructor(private routes: Router) {

  }

  //Navigate to a component programatically
  goToSearch(srch: HTMLInputElement) {

    let str = srch.value;
    //this.routes.navigate(['search']);
    this.routes.navigate(['search/' + str]);//to transfer data along with the navigation
  }
}
