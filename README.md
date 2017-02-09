# Suprematism Toggle

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
- [`supre-toggle`](#supre-toggle)

#### <a id="supre-toggle"></a> `supre-toggle`

##### Directives
- `items: Array<Item>` - The list of item objects for the toggleable button group component. (Default []).
- `disabledItemValues: Array<string> | true` - An array of item values whose toggle should be disabled; true applies to all. (Default []).
- `activeItemValues: Array<string> | true` - An array of item values whose toggle should be active; true applies to all. (Default []).
- `warningItemValues: Array<string>` - An array of item values whose toggle should be depicted with warning. (Default []).

##### Events
- `toggleUpdated: Item` - The item which is the selected item.

#### Interfaces Used
- `Item` - An object with properties:
  - `value?: string` - The value of the item. If not present, the text. This property must be resolved.
  - `text?: string` - The text of the item.
  - `icon?: string` - The class(es) for a text icon.
  - `class?: string` - A string of static class(es) to apply to the toggle button (eg, -toggle-action, background, open-bottom, etc).

#### States
- `Toggle-item.is-active` - Item is selected
- `Toggle-item.is-disabled` - Item is not selectable
- `Toggle-item.is-warning` - Item is presented with a warning ui
- `Toggle-item.is-icon` - Item is solely an icon - which then uses different styling

#### Static Styling
- See the toggle classes in the styleguide that can be passed in the item array as static classes.


## Example
```html
<supre-toggle
  (toggleUpdated)="updateActiveItems($event)"
  [disabledItemValues]="disabledItemValues"
  [activeItemValues]="activeItemValues"
  [items]="[
    {icon: 'u-supre-icon u-supre-icon--refresh-clear', value: 'clear', class: '-toggle-action'},
    {icon: 'u-supre-icon u-supre-icon--filter', value: 'filter', class: '-toggle-action'},
    {icon: 'u-supre-icon u-supre-icon--arrow-down-filled', value: 'dataGrid', class: '-toggle-action background open-bottom'}
  ]"
></supre-toggle>
```
