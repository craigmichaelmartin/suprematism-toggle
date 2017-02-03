import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/scan';

export interface Item {
  value?: string;
  text?: string;
  icon?: string;
}
@Component({
  selector: 'supre-toggle',
  template: require('./toggle.component.html'),
  styles: [require('./toggle.component.css')]
})
export class ToggleComponent implements OnInit {

  @Input() items: Array<Item> = [];
  @Input() disabledItemValues: Array<string> | true = [];
  @Input() activeItemValues: Array<string> | true = [];
  @Input() warningItemValues: Array<string> = [];
  @Output() toggleUpdated = new EventEmitter();
  mappedItems: Array<Item>;

  ngOnInit() {
    this.mappedItems = this.items.map((item, i) =>
      Object.assign({}, item, {
        value: item.value != null ? item.value : item.text
      })
    );
  }

  onClick(item) {
    if (!item.disabled) {
      this.toggleUpdated.next(item);
    }
  }

}
