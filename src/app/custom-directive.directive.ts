import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]' //~ngModel
})
export class CustomDirectiveDirective {

  //All directives are injected with an object of class ElementRef
  //Refer / Access the component which is using the directive

  //1.Directive is capable of receiving the event information of HTML components
  //2.Can take input of values from HTMl tags
  constructor(element: ElementRef) {
    console.log(element);

    element.nativeElement.style.backgroundColor = "red";
  }

}
