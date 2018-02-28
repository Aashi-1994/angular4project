import { Directive, ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[Redcolor]'
})
export class RedcolorDirective {

  constructor(element:ElementRef) {
  	element.nativeElement.style.color = "red";
  	element.nativeElement.style.fontSize = "50px";
   }

   @HostListener('click') doSometng(){
   	alert("it clicks");

   }
   @HostListener('mouseenter') doSomtngs(){
   	console.log("this is mouseenter");
   }
    @HostListener('mouseleave') doSomtngss(){
   	console.log("this is mouseleave");
   }
    @HostListener('mousemove') doSomtngsss(){
   	console.log("this is mousemove");
   }
}
