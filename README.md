# Suprematism Toggle

[![Greenkeeper badge](https://badges.greenkeeper.io/CINBCUniversal/suprematism-toggle.svg)](https://greenkeeper.io/)

[![Build Status][travis-badge]][travis-badge-url]

An Angular presentational component using uni-directional data flow for toggleable button groups.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-toggle
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-toggle/)
- Run the example locally with `npm run example`


## Components
- [`supre-toggle-group`](#supre-toggle)
- [`supre-toggle-button`](#supre-toggle-button)

#### <a id="supre-toggle"></a> `supre-toggle-group`

##### Inputs/Attributes
- `value: any`<br>The current value of the toggle group. (Default '').
- `multi-mode: boolean`<br>An optional attribute for multi-selection mode. When present, indicates the buttons will behave like checkboxes.

##### Events
- `toggleUpdated: Button`<br>The button which is the selected button.

##### Static Styling
- See the toggle classes in the styleguide that can be passed in the item array as static classes.

#### <a id="supre-toggle-button"></a> `supre-toggle-button`

##### States
- `button.is-active`<br>Item is selected
- `button.is-disabled`<br>Item is not selectable
- `button.is-warning`<br>Item is presented with a warning ui

##### Inputs/Attributes
- `selected: string`<br>Whether the button is selected. (Default false)
- `value: any`<br>The current value of the button. (Default '').
- `disabled: any`<br>Whether the button is disabled. (Default false).
- `supreData: any`<br>Additional data that can be added to the button. (Default {}).

## Example
```html
<supre-toggle-group multi-mode (toggleUpdated)="onMultiModeToggleUpdate($event)">
    <button supre-toggle-icon-button value="clear" [supreData]="{'qa-id' : 'clear'}" [disabled]="disabled">
      <span class="u-supre-icon u-supre-icon--refresh-clear"></span>
    </button>
    <button supre-toggle-icon-button value="filter" [supreData]="{'qa-id' : 'filter'}" [disabled]="disabled">
      <span class="u-supre-icon u-supre-icon--filter"></span>
    </button>
    <button supre-toggle-icon-button value="dataGrid" class="background open-bottom" [supreData]="{'qa-id' : 'open'}" [disabled]="disabled">
      <span class="u-supre-icon u-supre-icon--arrow-down-filled"></span>
    </button>
</supre-toggle-group>
```

[travis-badge]: https://travis-ci.org/CINBCUniversal/suprematism-toggle.svg?branch=master
[travis-badge-url]: https://travis-ci.org/CINBCUniversal/suprematism-toggle
