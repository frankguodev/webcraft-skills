# Components And States High-Risk Module

Use this module to strengthen component-state checks in `ui-audit.md`, especially cursor, hover, focus-visible, and custom clickable regions that AI-generated UI often misses.

## When To Use

- The page includes buttons, search buttons, links, chips, tags, card actions, icon buttons, menus, filters, form controls, or custom clickable divs.
- The user says it is unclear what can be clicked, hover does nothing, or buttons/cards feel static.
- A fix makes the page look cleaner but still feels like a static mockup during interaction.

## Required Checks

- Click affordance: every real clickable element should show `cursor: pointer` or an equivalent platform affordance on mouse hover.
- Hover/active: feedback should be clear but must not change layout dimensions through scale, position shifts, or border-thickness jumps.
- Focus-visible: keyboard access through the core path must show focus, and focus styling must not be removed by outline resets or clipped by overflow.
- Disabled/loading: async and unavailable states should prevent repeat actions and explain current state.
- Semantic fit: visual behavior and DOM semantics for button, anchor, input, select, menu, checkbox, radio, and card actions should match where practical.
- Custom regions: clickable divs, cards, icon buttons, tags, and drag regions need cursor, accessible name, keyboard path, and touch-target checks.

## Severity Hints

- `Critical`: missing states on a core action cause duplicate submission, misoperation, unclickable behavior, no recovery path, or invisible focus blocks the core path.
- `Major`: key components lack hover, active, disabled, loading, selected, or click affordance, so users can operate but confidence drops sharply.
- `Minor`: states exist but feedback strength, motion timing, copy, or visual tokens are inconsistent.

## Browser Verification

- Sweep the mouse over first-viewport and core-flow buttons, links, cards, chips, search buttons, and icon buttons.
- Use `Tab` through the core path and verify focus-visible, order, overlay entry/exit, and return-to-trigger behavior.
- Confirm loading, disabled, error, empty, and success states from code at minimum; test them in browser when runnable.

## Common Signals

- A button works when clicked, but the cursor remains the default arrow on hover.
- A whole card is clickable, but only a small text region has hover feedback.
- Hover adds border width or scale and causes nearby text, cards, or layout to jump.
- Focus-visible is removed by global CSS or clipped by parent `overflow: hidden`.
- Icon buttons show only an icon without an aria-label, tooltip, or understandable text.

## Fix Boundaries

- Do not change the theme just to add states; states should use the existing color, border, shadow, and radius system.
- Cursor, hover, and focus-visible are usability fixes, not optional polish.
- If the project already has a component-library state system, use its APIs or tokens before writing isolated one-off styles.
