"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/startWith');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/share');
require('rxjs/add/operator/scan');
var ToggleComponent = (function () {
    function ToggleComponent() {
        this.items = [];
        this.unrelated = false;
        this.toggleUpdated = new core_1.EventEmitter();
        this.subscriptions = [];
    }
    ToggleComponent.prototype.ngOnChanges = function (simpleChanges) {
        // ngOnChanges is triggered according to strict equality
        if (JSON.stringify(simpleChanges.items.currentValue) ===
            JSON.stringify(simpleChanges.items.previousValue)) {
            return;
        }
        this.cleanItems = this.items.map(function (item, i) {
            return Object.assign({}, item, {
                value: item.value != null ? item.value : item.text
            });
        });
    };
    ToggleComponent.prototype.ngOnInit = function () {
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
    };
    ToggleComponent.prototype.onClick = function (item) {
        if (!item.disabled) {
            this.storeSource.next({
                type: 'UPDATE_TOGGLE',
                related: !this.unrelated,
                key: this.key,
                value: item.value
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ToggleComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ToggleComponent.prototype, "unrelated", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Subject_1.Subject)
    ], ToggleComponent.prototype, "storeSource", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Observable_1.Observable)
    ], ToggleComponent.prototype, "storeStream", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleComponent.prototype, "key", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ToggleComponent.prototype, "toggleUpdated", void 0);
    ToggleComponent = __decorate([
        core_1.Component({
            selector: 'supre-toggle',
            template: require('./toggle.component.html'),
            styles: [require('./toggle.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], ToggleComponent);
    return ToggleComponent;
}());
exports.ToggleComponent = ToggleComponent;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-toggle/src/toggle.component.js.map