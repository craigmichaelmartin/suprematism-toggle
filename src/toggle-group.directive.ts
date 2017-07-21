import {
  AfterViewInit, ChangeDetectorRef,
  ContentChildren, Directive, EventEmitter, forwardRef, HostBinding, Input, Output,
  QueryList
} from '@angular/core';
import { SupreToggleButtonComponent } from './toggle-button.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const SupreToggleGroupProvider: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SupreToggleGroupDirective),
  multi: true
};

@Directive({
  selector: 'supre-toggle-group', // tslint:disable-line
  providers: [SupreToggleGroupProvider],
  exportAs: 'supreToggleGroup'
})
export class SupreToggleGroupDirective implements AfterViewInit {
  private val: any;
  private selectedButton: SupreToggleButtonComponent;
  private isMultiMode: boolean;
  private isInitialized: boolean;

  @HostBinding('class') @Input('class') class = '';
  @HostBinding('class.supre-toggle-group') get toggleGroupClass() {
    return true;
  }

  /**
   * Multi selection toggle group.  Buttons act like checkboxes when this attribute is present
   * @returns {string}
   */
  @Input('multi-mode') get multiModeAttribute(): string {
    return null;
  }
  set multiModeAttribute(newValue: string) {
    this.isMultiMode = newValue === '';
  }

  /**
   * Whether the toggle group is in multi-selection mode.
   * @returns {boolean}
   * @constructor
   */
  get MultiMode() {
    return this.isMultiMode;
  }

  /**
   * Child buttons in toggle group
   */
  @ContentChildren(forwardRef(() => SupreToggleButtonComponent)) buttons: QueryList<SupreToggleButtonComponent>;

  /**
   * Event emitter that fires when value is updated.
   * @type {EventEmitter<SupreToggleButtonComponent>}
   */
  @Output() toggleUpdated = new EventEmitter<SupreToggleButtonComponent>();

  /**
   * Value of the toggle group.
   * @returns {any}
   */
  @Input()
  get value(): any {
    return this.val;
  }
  set value(newValue: any) {
    if (this.isMultiMode) {
      this.val = newValue;

      // Don't emit change event for initial value
      if (this.isInitialized) {
        this.toggleUpdated.next(this.selectedButton);
      }
    } else {
      if (this.val !== newValue) {
        this.val = newValue;

        // Don't emit change event for initial value
        if (this.isInitialized) {
          this.toggleUpdated.next(this.selectedButton);
        }
      }
    }
  }

  /**
   * Whether an item in the toggle group is selected.
   * @returns {SupreToggleButtonComponent}
   */
  @Input()
  get selected() {
    return this.selectedButton;
  }
  set selected(selected: SupreToggleButtonComponent) {
    this.selectedButton = selected;
    this.value = selected ? selected.value : null;

    if (!this.isMultiMode && this.selectedButton && this.selectedButton.checked) {
      this.buttons.forEach((button: SupreToggleButtonComponent) => {
        if (button !== this.selectedButton) {
          button.checked = false;
        }
      });
    }
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.isInitialized = true;

    // Force change detection here so we can avoid ExpressionChangedAfterItHasBeenCheckedError
    this.changeDetectorRef.detectChanges();
  }
}
