import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  @HostListener('mouseenter') mouseEntro() {
    this.el.nativeElement.style.backgroundColor = "#C8FE2E";
  }
    
  @HostListener('mouseleave') mouseSalio() {
    this.el.nativeElement.style.backgroundColor = null;
  }
  
  constructor(private el:ElementRef) { }
  
}
