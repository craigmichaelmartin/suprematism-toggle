import { Component, EventEmitter, Input, AfterViewInit, OnDestroy, OnInit, Output } from '@angular/core';
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
export class ToggleComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() items: Array<Item> = [];
  @Input() unrelated: boolean = false;
  @Output() toggleUpdated = new EventEmitter();
  cleanItems: Array<Item>;
  startWith: string;
  subscriptions: Array<ISubscription> = [];
  storeSource: Subject<any> = new Subject();
  store$: Observable<any>;

  ngOnInit() {
    this.cleanItems = this.items.map(item =>
      Object.assign({}, item, {
        value: item.value != null ? item.value : item.text
      })
    );
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
            Object.assign({}, last, { [current]: !last[current] })
        : (last = {}, current) =>
            Object.assign({}, falseState, { [current]: true }))
      .distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y));
  }

  ngAfterViewInit() {
    this.subscriptions.push(...[
      this.store$.subscribe(items => {
        const active = Object.keys(items).filter(key => items[key]);
        this.toggleUpdated.emit(this.unrelated ? active : active[0]);
      })
    ]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
