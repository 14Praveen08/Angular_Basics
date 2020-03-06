import { Directive,ElementRef, SystemJsNgModuleLoader } from '@angular/core';

@Directive({
  selector: '[appC],appCD'
})
export class CustomDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor="red";
    el.nativeElement.addEventListener("click",this.click);
  }
  click(){
    alert("Hi, you've clicked the custom directive");  
  }

}
