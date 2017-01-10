import { Component, EventEmitter, Input, AfterViewInit, OnDestroy, OnInit, Output } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';

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
  @Input() canReturnToEmpty: boolean = false;
  @Output() toggleUpdated = new EventEmitter();
  cleanItems: Array<Item>;
  startWith: string;
  subscriptions: Array<ISubscription> = [];
  activeSource: Subject<Item> = new Subject<Item>();
  active$: Observable<string>;

  ngOnInit() {
    this.cleanItems = this.items.map(item =>
      Object.assign({}, item, {
        value: item.value != null ? item.value : item.text
      })
    );
    const defaultItem = this.cleanItems.find(item => item.default);
    this.startWith = defaultItem && defaultItem.value;
  }

  ngAfterViewInit() {
    this.active$ = this.activeSource
      .share()
      .startWith(this.startWith)
      .filter((value) => !!this.cleanItems.find((item) => item.value === value))
      .distinctUntilChanged();

    this.subscriptions.push(...[
      this.active$.subscribe(item =>
        this.toggleUpdated.emit(item)
      )
    ]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
