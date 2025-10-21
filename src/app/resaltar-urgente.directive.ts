import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appResaltarUrgente]',
})
export class ResaltarUrgenteDirective implements OnInit {
  @Input() appResaltarUrgente: string | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.appResaltarUrgente === 'ALTA') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        '2px solid darkred'
      );
    }
  }
}
