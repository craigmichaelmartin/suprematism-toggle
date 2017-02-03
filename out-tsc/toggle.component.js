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
require('rxjs/add/operator/startWith');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/share');
require('rxjs/add/operator/scan');
var ToggleComponent = (function () {
    function ToggleComponent() {
        this.items = [];
        this.disabledItemValues = [];
        this.activeItemValues = [];
        this.warningItemValues = [];
        this.toggleUpdated = new core_1.EventEmitter();
    }
    ToggleComponent.prototype.ngOnInit = function () {
        this.mappedItems = this.items.map(function (item, i) {
            return Object.assign({}, item, {
                value: item.value != null ? item.value : item.text
            });
        });
    };
    ToggleComponent.prototype.onClick = function (item) {
        if (!item.disabled) {
            this.toggleUpdated.next(item);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ToggleComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ToggleComponent.prototype, "disabledItemValues", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ToggleComponent.prototype, "activeItemValues", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ToggleComponent.prototype, "warningItemValues", void 0);
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