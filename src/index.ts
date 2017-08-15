import { CommonModule } from '@angular/common';
import { DataDirective } from './data.directive';
import { NgModule } from '@angular/core';
import { SupreToggleGroupDirective } from './toggle-group.directive';
import { SupreToggleButtonComponent } from './toggle-button.component';

export * from './toggle-group.directive';
export * from './toggle-button.component';
export * from './data.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DataDirective,
    SupreToggleGroupDirective,
    SupreToggleButtonComponent
  ],
  exports: [
    DataDirective,
    SupreToggleGroupDirective,
    SupreToggleButtonComponent
  ]
})
export class ToggleModule {}
