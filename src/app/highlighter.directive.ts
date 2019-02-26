import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  //@Input('hclr') hcolor: string;
  @Input('appHighlighter') hcolor: string;

  //element: ElementRef;

  //to create private data member : argument of constructor can be made directly a private data member of the class
  // Just need to provide keyword 'private'
  constructor(private element: ElementRef) {
    //this.element = element;
  }

  @HostListener('mouseenter') mouseEnterActivity() {
    //this.highlight('red');
    //Providing default value
    this.highlight(this.hcolor || "yellow");
  }

  @HostListener('mouseleave') mouseLeaveActivity() {
    this.highlight(null);
  }

  highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
