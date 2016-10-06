import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { NgModule } from '@angular/core';

export * from './toggle.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ToggleComponent,
    ],
    exports: [
        ToggleComponent,
    ],
    entryComponents: [
        ToggleComponent,
    ]
})
export class ToggleModule {

}
