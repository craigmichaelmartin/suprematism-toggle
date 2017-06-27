import { Directive, Input, OnChanges, ElementRef } from '@angular/core';
/*
  Dynamically sets data attributes for an element from an object
*/
@Directive({
  selector: '[supreData]'
})
export class DataDirective implements OnChanges {

  @Input() supreData: any;

  constructor(private el: ElementRef) { }


  ngOnChanges(changes) {
    const dataChanges = changes.supreData;
    if (dataChanges) {
      const prev = dataChanges.previousValue;
      if (prev) {
        for (const propName in prev) {
          if (prev.hasOwnProperty(propName)) {
            this.el.nativeElement.removeAttribute(`data-${propName}`);
          }
        }
      }
      const current = dataChanges.currentValue;
      if (current) {
        for (const propName in current) {
          if (current.hasOwnProperty(propName)) {
            this.el.nativeElement.setAttribute(`data-${propName}`, current[propName]);
          }
        }
      }
    }
  }

}
