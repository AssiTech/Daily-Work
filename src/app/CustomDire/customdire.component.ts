import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
    selector:'[custom-dir]'
})

export class CustomDire {

    constructor(public el:ElementRef){
      el.nativeElement.style.color="Red";
      el.nativeElement.style.backgroundcolor="green";
    }
    showColor(){
        this.el.nativeElement.style.color="Blue";
    }
    @HostListener('mouseenter') onMouseEnter(){
    this.showColor();
    }
}