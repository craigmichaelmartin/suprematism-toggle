import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'supre-root',
  template: require('./app.component.html')
})
export class AppComponent {

  dynamicDisabled = false;

  log(event) {
    console.log(event);
  }

  updateDynamicDisabled() {
    this.dynamicDisabled = !this.dynamicDisabled;
  }

}
