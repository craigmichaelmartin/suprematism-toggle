import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  OnInit,
  Optional,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { SupreToggleGroupDirective } from './toggle-group.directive';

@Component({
  selector: 'button[supre-toggle-button], button[supre-toggle-icon-button]', // tslint:disable-line
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupreToggleButtonComponent implements OnInit {
  private val: any;
  private toggleGroup: SupreToggleGroupDirective;
  private isChecked: boolean;
  private isDisabled: boolean;
  private isWarning: boolean;

  @HostBinding('class')
  @Input('class')
  class = '';

  /**
   * Class used when this button contains icons
   * @returns {boolean}
   */
  @HostBinding('class.-toggle-action')
  get toggleActionClass() {
    return this.toggleGroup && this.toggleGroup.MultiMode;
  }

  /**
   * Class used when this button contains text
   * @returns {boolean}
   */
  @HostBinding('class.-toggle')
  get toggleClass() {
    return this.toggleGroup && !this.toggleGroup.MultiMode;
  }

  /**
   * Whether the button is disabled.
   * @returns {boolean}
   */
  @HostBinding('class.is-disabled')
  @HostBinding('disabled')
  @Input()
  get disabled(): boolean {
    return this.isDisabled;
  }
  set disabled(value: boolean) {
    this.isDisabled = value != null && `${value}` !== 'false';
  }

  /**
   * Whether the button is in a warning state.
   * @returns {boolean}
   */
  @HostBinding('class.is-warning')
  @Input()
  get warning(): boolean {
    return this.isWarning;
  }
  set warning(value: boolean) {
    this.isWarning = value != null && `${value}` !== 'false';
  }

  constructor(
    @Optional()
    @Inject(forwardRef(() => SupreToggleGroupDirective))
    toggleGroup: SupreToggleGroupDirective,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.toggleGroup = toggleGroup;
  }

  /**
   * The value of the button.  Used to track which button is 'checked'.
   * @returns {any}
   */
  @Input()
  get value(): any {
    return this.val;
  }
  set value(newValue: any) {
    if (this.val !== newValue) {
      if (
        this.toggleGroup &&
        this.checked &&
        this.toggleGroup.value !== newValue
      ) {
        this.toggleGroup.value = newValue;
      }
      this.val = newValue;
    }
  }

  /**
   * Whether the button is in the checked state.
   * @returns {boolean}
   */
  @HostBinding('class.is-active')
  @Input()
  get checked(): boolean {
    return this.isChecked;
  }
  set checked(newState: boolean) {
    this.isChecked = newState;
    if (newState) {
      this.toggleGroup.selected = this;
    }
  }

  ngOnInit() {
    this.renderer.listen(this.elementRef.nativeElement, 'click', event => {
      this.onClick(event);
    });

    if (
      this.toggleGroup &&
      this.toggleGroup.value &&
      this.val === this.toggleGroup.value
    ) {
      this.isChecked = true;
    }
  }

  /**
   * Click handler.
   * @param {Event} event
   */
  onClick(event: Event) {
    this.toggle();
  }

  public toggle(): void {
    // Only uncheck if we're in multi-mode.
    if (!this.toggleGroup.MultiMode && this.isChecked) {
      return;
    }

    this.checked = !this.checked;
  }
}
