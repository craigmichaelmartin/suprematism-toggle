import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/scan';

export interface Item {
  value?: string;
  text?: string;
  icon?: string;
  default?: boolean;
  disabled?: boolean;
  warning?: boolean;
}
@Component({
  selector: 'supre-toggle',
  template: require('./toggle.component.html'),
  styles: [require('./toggle.component.css')]
})
export class ToggleComponent implements OnInit, OnChanges {

  @Input() items: Array<Item> = [];
  @Input() unrelated: boolean = false;
  @Input() storeSource: Subject<any>;
  @Input() storeStream: Observable<any>;
  @Input() key: string;
  @Output() toggleUpdated = new EventEmitter();
  cleanItems: Array<Item>;
  startWith: string;
  subscriptions: Array<ISubscription> = [];
  falseState: any;

  ngOnChanges(simpleChanges) {
    // ngOnChanges is triggered according to strict equality
    if (JSON.stringify(simpleChanges.items.currentValue) ===
          JSON.stringify(simpleChanges.items.previousValue)) {
      return;
    }
    this.cleanItems = this.items.map((item, i) =>
      Object.assign({}, item, {
        value: item.value != null ? item.value : item.text
      })
    );
  }

  ngOnInit() {
    // const defaultItem = this.cleanItems.find(item => item.default);
    // this.startWith = defaultItem && defaultItem.value;

    // this.falseState = this.cleanItems.reduce(
    //   (obj, item) => Object.assign({}, obj, {[item.value]: false}),
    //   {}
    // );
    // const startWithObj = this.cleanItems.reduce(
    //   (obj, item) => Object.assign({}, obj, {[item.value]: !!item.default}),
    //   {}
    // );
    // const startValue = Object.keys(startWithObj).filter(key => startWithObj[key]);
    // this.storeSource.next({
    //   type: 'SET_TOGGLE',
    //   key: this.key,
    //   value: this.unrelated ? startValue : startValue[0]
    // });
  }

  onClick(item) {
    if (!item.disabled) {
      this.storeSource.next({
        type: 'UPDATE_TOGGLE',
        related: !this.unrelated,
        key: this.key,
        value: item.value
      });
    }
  }

}
