import { EventEmitter, OnInit } from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/scan';
export interface Item {
    value?: any;
    text?: string;
    icon?: string;
}
export declare class ToggleComponent implements OnInit {
    items: Array<Item>;
    parentWrapperClass?: string;
    disabledItemValues: Array<any> | true;
    activeItemValues: Array<any> | true;
    warningItemValues: Array<any>;
    toggleUpdated: EventEmitter<{}>;
    mappedItems: Array<Item>;
    ngOnInit(): void;
    onClick(item: any): void;
}
