# Forms And Controls High-Risk Module

Use this module to strengthen form, filter, search, selection, and bulk-action checks in `ui-audit.md`. Focus on issues where the UI is visible but users cannot confidently operate or recover.

## When To Use

- The page includes login, signup, upload, edit, checkout, search/filter, admin bulk actions, dangerous actions, or settings forms.
- The project has custom controls, but a page still mixes in raw native `select`, checkbox, radio, file input, or unwrapped inputs.
- The user says the form feels inconsistent, error recovery is unclear, or submission feedback is missing.

## Required Checks

- Labels and context: inputs, selectors, file uploads, switches, and bulk actions need understandable labels or equivalent context, not placeholder-only meaning.
- State loop: idle, focus, disabled, loading, error, success, and empty states should cover the core path.
- Error recovery: error copy should explain the problem and recovery, and be visually/semantically associated with the field.
- Control system: input, select, combobox, dropdown, multi-select, checkbox, radio, switch, textarea, and file upload should share one visual and interaction system.
- Native control fit: appearance, accent-color, caret-color, color-scheme, resize, and field-sizing should fit the product style.
- Mobile operation: keyboard, errors, submit buttons, bottom bars, and dialog forms should not cover each other.
- Data density: filters, bulk actions, long options, multi-select chips, long errors, and empty states should handle real content.

## Control Consistency Checks

- First locate existing base controls, then check whether pages mix in native `select`, checkbox, radio, file input, date input, or unwrapped inputs.
- If an equivalent custom control exists but is bypassed, evaluate it as `Major` or `Minor` by core-flow impact; do not bury it in notes.
- If no custom control exists but native controls visibly clash with the current site style, still report it; the fix direction is to establish shared base controls or wrap native controls, not to beautify one page in isolation.
- Do not ban native controls absolutely; report them only when they harm visual-system fit, state closure, touch usability, or confidence in a core flow.

## Severity Hints

- `Critical`: users cannot submit, understand errors, recover, confirm dangerous/bulk actions, or use core controls on common viewports.
- `Major`: core filtering, editing, selection, upload, or bulk flows work but have incomplete states, clashing native controls, or bypass existing custom controls.
- `Minor`: non-core controls are visually slightly off, helper copy is unclear, or state feedback is inconsistent without blocking task completion.

## Browser Verification

- Use the keyboard through the core form path and verify focus order, focus-visible, submit, error, and recovery.
- At mobile width, check whether inputs, keyboard area, errors, and submit actions overlap.
- If runnable, trigger at least one loading/disabled or error state; otherwise confirm state branches from code.

## Common Signals

- Placeholder disappears and the user can no longer tell what the field means.
- Submit can be clicked repeatedly with no loading or disabled state.
- Error feedback is only a red border with no copy or no field association.
- An admin filter area mixes browser-default selects beside custom buttons and looks like two products.
- Too many selected chips break the toolbar, or long options stretch the popover.

## Fix Boundaries

- Fix completion, recovery, and state loops before visual polish.
- If the project already has a component library or custom base controls, reuse them before writing one-off styles.
- Do not remove necessary labels, help text, error copy, or confirmation details for visual cleanliness.
