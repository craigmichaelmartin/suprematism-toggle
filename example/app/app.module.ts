import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToggleModule } from '../../src/index';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToggleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
