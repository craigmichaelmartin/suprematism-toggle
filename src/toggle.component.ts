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
  @Input() storeStream: Observable<any>; // not used
  @Input() key: string;
  @Output() toggleUpdated = new EventEmitter();
  cleanItems: Array<Item>;
  startWith: string;
  subscriptions: Array<ISubscription> = [];
  store$: Observable<any>;

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
    const defaultItem = this.cleanItems.find(item => item.default);
    this.startWith = defaultItem && defaultItem.value;

    const falseState = this.cleanItems.reduce(
      (obj, item) => Object.assign({}, obj, {[item.value]: false}),
      {}
    );
    const startWithObj = this.cleanItems.reduce(
      (obj, item) => Object.assign({}, obj, {[item.value]: !!item.default}),
      {}
    );
    this.store$ = this.storeSource
      .startWith(startWithObj)
      .scan(this.unrelated
        ? (last = {}, current) =>
            Object.assign({}, last, { [current[this.key]]: !last[current[this.key]] })
        : (last = {}, current) =>
            Object.assign({}, falseState, { [current[this.key]]: true }))
      .distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y));
  }

  onClick(item) {
    if (!item.disabled) {
      this.storeSource.next({[this.key]: item.value});
    }
  }

  // ngAfterViewInit() {
  //   this.subscriptions.push(...[
  //     this.store$.subscribe(items => {
  //       const active = Object.keys(items).filter(key => items[key]);
  //       // this.toggleUpdated.emit(this.unrelated ? active : active[0]);
  //       this.storeSource.next({[this.key]: this.unrelated ? active : active[0]);
  //     })
  //   ]);
  // }

  // ngOnDestroy() {
  //   this.subscriptions.forEach(sub => sub.unsubscribe());
  // }

}
