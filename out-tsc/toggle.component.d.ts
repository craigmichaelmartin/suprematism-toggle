import { EventEmitter, OnChanges, OnInit } from '@angular/core';
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
export declare class ToggleComponent implements OnInit, OnChanges {
    items: Array<Item>;
    unrelated: boolean;
    storeSource: Subject<any>;
    storeStream: Observable<any>;
    key: string;
    toggleUpdated: EventEmitter<{}>;
    cleanItems: Array<Item>;
    startWith: string;
    subscriptions: Array<ISubscription>;
    falseState: any;
    ngOnChanges(simpleChanges: any): void;
    ngOnInit(): void;
    onClick(item: any): void;
}
