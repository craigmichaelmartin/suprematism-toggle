# Suprematism Toggle

An Angular 2 component for toggleable button groups


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
A component for toggleable button groups

##### Directives
- `items: Array<Item>` - The list of item objects for the toggleable button group component.
- `unrelated: boolean` - Whether or not the toggleable buttons in the group should work unrelated (ie, can be active or inactive regardless of other buttons in the group - all or none of the buttons may be active/inactive) or work in conjunction (ie, selecting one deselects the others - after initial interaction there is always exactly one button active). Defaults to false.

##### Events
- `toggleUpdated: string | array` - A string which is the selected item; if unrelated, an array of all the selected items.

#### Interfaces Used
- `Item` - An object with properties:
  - `value?: string` - The value of the item. If not present, the text. This property must be resolved.
  - `text?: string` - The text of the item.
  - `icon?: string` - The class(es) for a text icon.
  - `default?: boolean` - Whether or not the item is selected at the start.
  - `disabled?: boolean` - Whether or not the item is disabled.
  - `warning?: boolean` - Whether or not the item should be presented with a warning ui.

#### States
- `Toggle-item.is-active` - Item is selected
- `Toggle-item.is-disabled` - Item is not selectable
- `Toggle-item.is-warning` - Item is presented with a warning ui


## Example
```html
<supre-toggle
  (toggleUpdated)="log($event)"
  [items]="[
    {text: 'foo', disabled: true},
    {text: 'bar', default: true},
    {text: 'baz', value: 'bazzzzz'},
    {icon: 'ion-nuclear', value: 'qux', warning: true}
  ]"
></supre-toggle>
```
