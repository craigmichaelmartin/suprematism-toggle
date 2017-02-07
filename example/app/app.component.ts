import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'supre-root',
  template: require('./app.component.html')
})
export class AppComponent {

  disabledItemValues = [];
  activeItemValues = [];

  updateActiveItems(item) {
    if (this.activeItemValues.indexOf(item.value) === -1) {
      this.activeItemValues.push(item.value);
    } else {
      this.activeItemValues = this.activeItemValues.filter(x => x !== item.value);
    }
  }

  updateDynamicDisabled() {
    if (this.disabledItemValues.length) {
      this.disabledItemValues = [];
    } else {
      this.disabledItemValues = ['clear', 'filter', 'dataGrid'];
    }
  }

}
