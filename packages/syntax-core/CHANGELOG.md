# @cambly/syntax-core

## 8.1.0

### Minor Changes

- a659747: Box: add Overflow, OverflowX and OverFlowY to Box Props

## 8.0.0

### Major Changes

- 4ecbf7c: WHAT the breaking change is
  Card's "size" prop is being deprecated.

  WHY the change was made
  Card cannot be used if you want to render it with a width larger than 744px (size="lg"). We should just have the width stretch to its parent's container.

  HOW a consumer should update their code
  Those using a Card with size="sm" should wrap it with a Box of maxWidth={352}, those using a card with size="lg" should wrap it with a Box of maxWidth{744}.

## 7.13.0

### Minor Changes

- f6c17f0: Add green/success color to Text and Heading

## 7.12.0

### Minor Changes

- 93997f3: Layer: fix document is not defined issue

## 7.11.1

### Patch Changes

- ae9a80d: Fix: TapArea - handle keyboard interaction when focused

## 7.11.0

### Minor Changes

- 92dd95d: TapArea: add component

## 7.10.0

### Minor Changes

- 9da74f1: LinkButton: Add box-sizing: border-box to fix centering issue

## 7.9.0

### Minor Changes

- 987cb16: Chip/add-cursor-pointer-on-hover

## 7.8.0

### Minor Changes

- b1f668b: Typography: Patch: Add interactive weight to props + update stories

## 7.7.1

### Patch Changes

- 8e27ed6: Added more types for the value in radiobutton

## 7.7.0

### Minor Changes

- 3851706: Create Chip Component

## 7.6.1

### Patch Changes

- 09b4cf2: SelectList: avoid long text overlapping caret

## 7.6.0

### Minor Changes

- 8027375: Popover + Elevation: Create Popover component + add elevation to tokens

### Patch Changes

- Updated dependencies [8027375]
  - @cambly/syntax-design-tokens@0.9.0

## 7.5.0

### Minor Changes

- 955bd06: typography: add interactive font-weight

## 7.4.0

### Minor Changes

- f77f891: LinkButton: allow 'ref' to be set

## 7.3.0

### Minor Changes

- fe4dc68: Allow `data-testid` to be set on `Typography` and `Heading`

## 7.2.0

### Minor Changes

- 1484f5c: Docs: fix generated docs for forwardRef components

## 7.1.0

### Minor Changes

- 9ad4866: Add 1px white border to Avatar

## 7.0.0

### Major Changes

- f8fbccc: IconButton: make accessibilityLabel required

## 6.10.0

### Minor Changes

- ee3bd3e: Make className on icons optional

## 6.9.0

### Minor Changes

- 97be68e: Modal: Update docs per feedback

## 6.8.0

### Minor Changes

- 436b46c: Feat: Badge: can render `icon` prop

## 6.7.1

### Patch Changes

- 146fa33: IconButton secondary + destructive-secondary borders + match colors to Figma

## 6.7.0

### Minor Changes

- 40b1cf9: LinkButton: Update description for rel tag

## 6.6.0

### Minor Changes

- f605998: Add rel tags for linkbutton
  Add more specific styling to override camblystrap.

## 6.5.0

### Minor Changes

- bc17eae: LinkButton: Add component
  Buttons: Update Buttons with Typography instead of custom css.

## 6.4.0

### Minor Changes

- b1ac6a4: Badge: add "gray200" as possible color

## 6.3.0

### Minor Changes

- 8be2304: Button/RadioButton/Checkbox/SelectList/IconButton: update disabled opacity

## 6.2.0

### Minor Changes

- 2357772: Button / IconButton: make onClick optional

## 6.1.1

### Patch Changes

- 29203a7: Change root monorepo package.json to force usage of pnpm at specific ^version

## 6.1.0

### Minor Changes

- 2969ba6: TextField: add component

## 6.0.3

### Patch Changes

- 39bab26: link to changesets documentation in readme

## 6.0.2

### Patch Changes

- ad32c4b: Add individual links to components

## 6.0.1

### Patch Changes

- f1f5b2f: Fix tests

## 6.0.0

### Major Changes

- 7352b8d: SelectList: make label required

## 5.10.0

### Minor Changes

- 3cfc786: SelectList: pass through onClick

## 5.9.0

### Minor Changes

- f13655f: Modal: Add modal to syntax.

## 5.8.0

### Minor Changes

- 60892ef: Checkbox/RadioButton: update disabled states

## 5.7.0

### Minor Changes

- 4533f54: SelectList: stopPropagation onClick

## 5.6.1

### Patch Changes

- a237fd5: fix radio button behavior when z-index is customized such as in a modal

## 5.6.0

### Minor Changes

- a9b3b53: SelectList: Handle conditional div so div is centered

## 5.5.0

### Minor Changes

- 5954c94: SelectList: Remove label as required prop

## 5.4.0

### Minor Changes

- dc1f10c: Add Sizes to cards + tests/stories

## 5.3.1

### Patch Changes

- 062b0f9: added prop 'type' to Button and added wrapped TooltipContent w/ Typography with size 100 and color white

## 5.3.0

### Minor Changes

- 18374d5: SelectList: render helper text when error text is an empty string

## 5.2.0

### Minor Changes

- fd315b0: Add id for radio button

## 5.1.0

### Minor Changes

- c1bcc1b: Add data-testid

## 5.0.0

### Major Changes

- d388f47: Box: remove flexShrink property and introduce flex property instead

## 4.9.0

### Minor Changes

- 58b2255: badge: add component

## 4.8.2

### Patch Changes

- 2e37bbc: radiobutton position scrolling bug and don't use gender as example

## 4.8.1

### Patch Changes

- 28689b5: Internal: enable a few more TypeScript ESLint rules

## 4.8.0

### Minor Changes

- bf8fc7e: Card: update to use Box + fix border radius

## 4.7.0

### Minor Changes

- db98e57: Box: allow refs to be forwarded

## 4.6.0

### Minor Changes

- e6c3e09: Update all dependencies to the latest versio

### Patch Changes

- Updated dependencies [e6c3e09]
  - @cambly/syntax-design-tokens@0.8.0

## 4.5.0

### Minor Changes

- 6ca7254: Add lineClamp to Typography

## 4.4.0

### Minor Changes

- ec4a39c: Box: pass through 'role' prop

## 4.3.0

### Minor Changes

- 24af6f8: Add gray60 color

### Patch Changes

- Updated dependencies [24af6f8]
  - @cambly/syntax-design-tokens@0.7.0

## 4.2.0

### Minor Changes

- f90bf67: consolidate focus styling, added it to checkbox, select

## 4.1.0

### Minor Changes

- 80d6501: box: Add flexShrink

## 4.0.0

### Major Changes

- 37be70c: [BREAKING CHANGE] IconButton / Button / ButtonGroup: Remove React context dependency

## 3.3.0

### Minor Changes

- ff956e7: Divider: allow 'key' as a prop

## 3.2.0

### Minor Changes

- c02dc1a: Update label color in error state and default to placeholder

## 3.1.0

### Minor Changes

- 279e56e: Box: convert rounding 'circle' and 'pill' to 'full'

  Codemod: `npx @cambly/syntax-codemods -c box-rounding-to-full -p .`

## 3.0.1

### Patch Changes

- 8689a7d: Add description to package.json files
- Updated dependencies [8689a7d]
  - @cambly/syntax-design-tokens@0.6.1

## 3.0.0

### Major Changes

- da9c2a5: useFocusVisible, add in new required params (value, name) for radioButton

## 2.10.0

### Minor Changes

- 446958f: update turbo

## 2.9.0

### Minor Changes

- eef42f5: Update border stylings for secondary + destructive-secondary

## 2.8.0

### Minor Changes

- 4b350f8: Box: Convert color to backgroundColor. Codemod: `npx . -c box-color-to-backgroundcolor -p ~/code/path`

## 2.7.0

### Minor Changes

- f1e92cc: update styling for radio button

## 2.6.0

### Minor Changes

- 05cd207: Box: add rounding=circle

## 2.5.0

### Minor Changes

- 87e4338: Internal: inline design system tokens to avoid unexpected token 'exports' error

## 2.4.0

### Minor Changes

- 9d63eb3: Box: add postion sticky

## 2.3.0

### Minor Changes

- a317552: Add select list dropdown component

## 2.2.0

### Minor Changes

- b51af4b: Fix box mediaquery props

## 2.1.0

### Minor Changes

- df7b9c9: Export Box

## 2.0.0

### Major Changes

- 7d14872: Rename LabeledCheckbox => Checkbox

## 1.19.0

### Minor Changes

- a7863fc: Introduce Box component

## 1.18.0

### Minor Changes

- 969e0cc: add radio button

## 1.17.0

### Minor Changes

- ca63ba6: Update figma file and fix checkbox style overwriting

## 1.16.1

### Patch Changes

- d1cf2f8: Update Button.module.css

## 1.16.0

### Minor Changes

- 17b074d: Adding labeled checkbox component

## 1.15.1

### Patch Changes

- Updated dependencies [423400b]
  - @cambly/syntax-design-tokens@0.6.0

## 1.15.0

### Minor Changes

- 3eaf92a: Colors: add remaining colors

### Patch Changes

- Updated dependencies [3eaf92a]
  - @cambly/syntax-design-tokens@0.5.0

## 1.14.0

### Minor Changes

- 3309cdb: Properly export Heading and Typography

## 1.13.0

### Minor Changes

- 6c1dd9b: Add Typography and Heading components

## 1.12.0

### Minor Changes

- 5086d6d: Add IconButton component

## 1.11.0

### Minor Changes

- 284ba0a: Internal: use array constants to show value on hover

## 1.10.0

### Minor Changes

- ce63a02: ButtonGroup: make props optional + add test for disabled button

## 1.9.0

### Minor Changes

- b341715: Button: fix disabled prop

## 1.8.0

### Minor Changes

- 62944f6: Properly export Button and ButtonGroup

## 1.7.1

### Patch Changes

- 0ee6d33: Auto approve camblybot pull requests

## 1.7.0

### Minor Changes

- 13ae97a: Add Button and ButtonGroup

### Patch Changes

- Updated dependencies [13ae97a]
  - @cambly/syntax-design-tokens@0.4.0

## 1.6.1

### Patch Changes

- Updated dependencies [b017a45]
  - @cambly/syntax-design-tokens@0.3.0

## 1.6.0

### Minor Changes

- 589bad4: Add MiniActionCard component

## 1.5.0

### Minor Changes

- e2ccb78: Do not include CSS import in JS

## 1.4.0

### Minor Changes

- cc58bf7: Fix exported files for @cambly/syntax-design-tokens

### Patch Changes

- Updated dependencies [cc58bf7]
  - @cambly/syntax-design-tokens@0.2.0

## 1.3.0

### Minor Changes

- 5c32953: Add design tokens to Syntax

### Patch Changes

- Updated dependencies [5c32953]
  - @cambly/syntax-design-tokens@0.1.0

## 1.2.0

### Minor Changes

- 3236cd2: Add Card component

## 1.1.1

### Patch Changes

- c14637d: Update divider color to gray10

## 1.1.0

### Minor Changes

- 8bfcca9: Avatar: Add component

## 1.0.5

### Patch Changes

- 36d3d67: Internal: setup testing infrastructure & ESLint

## 1.0.4

### Patch Changes

- 81cd1b2: Fix release pipeline

## 1.0.3

### Patch Changes

- d16a113: Fix release pipeline

## 1.0.2

### Patch Changes

- 8e0a7d5: Add correct files when publishing packages
- 044234a: Fix release pipeline

## 1.0.1

### Patch Changes

- 630346e: Fix ESLint version change

## 1.0.0

### Major Changes

- 6f54d5f: Initial public release
