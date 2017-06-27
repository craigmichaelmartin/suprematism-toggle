import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { DataDirective } from './data.directive';
import { NgModule } from '@angular/core';

export * from './toggle.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DataDirective,
        ToggleComponent
    ],
    exports: [
        DataDirective,
        ToggleComponent,
    ],
    entryComponents: [
        ToggleComponent
    ]
})
export class ToggleModule {

}
