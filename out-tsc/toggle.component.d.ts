import { EventEmitter, AfterViewInit, OnChanges, OnDestroy, OnInit } from '@angular/core';
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
export declare class ToggleComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    items: Array<Item>;
    unrelated: boolean;
    toggleUpdated: EventEmitter<{}>;
    cleanItems: Array<Item>;
    startWith: string;
    subscriptions: Array<ISubscription>;
    storeSource: Subject<any>;
    store$: Observable<any>;
    ngOnChanges(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
