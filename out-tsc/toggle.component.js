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
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/startWith');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/share');
var ToggleComponent = (function () {
    function ToggleComponent() {
        this.items = [];
        this.canReturnToEmpty = false;
        this.toggleUpdated = new core_1.EventEmitter();
        this.subscriptions = [];
        this.activeSource = new Subject_1.Subject();
    }
    ToggleComponent.prototype.ngOnInit = function () {
        this.cleanItems = this.items.map(function (item) {
            return Object.assign({}, item, {
                value: item.value != null ? item.value : item.text
            });
        });
        var defaultItem = this.cleanItems.find(function (item) { return item.default; });
        this.startWith = defaultItem && defaultItem.value;
    };
    ToggleComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.active$ = this.activeSource
            .share()
            .startWith(this.startWith)
            .filter(function (value) { return !!_this.cleanItems.find(function (item) { return item.value === value; }); })
            .distinctUntilChanged();
        (_a = this.subscriptions).push.apply(_a, [
            this.active$.subscribe(function (item) {
                return _this.toggleUpdated.emit(item);
            })
        ]);
        var _a;
    };
    ToggleComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ToggleComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ToggleComponent.prototype, "canReturnToEmpty", void 0);
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