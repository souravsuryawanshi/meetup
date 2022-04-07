import { ElementRef, Renderer2, Directive } from '@angular/core';

@Directive({
  selector: 'input:not([type=submit])[ng2focus], textarea[ng2focus]',
})
export class Ng2Focus {
  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit() {
    this.renderer.selectRootElement(this.ele.nativeElement).focus();
  }
}
