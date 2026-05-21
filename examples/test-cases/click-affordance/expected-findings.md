# Expected Findings

## Critical

- Icon button and custom clickable controls have no visible `focus-visible` path, making keyboard operation hard to track.

## Major

- Clickable `div.quick-link` behaves like an action but does not show pointer affordance or native button semantics.
- Filter chips are clickable but have no hover feedback, so users cannot tell whether they are interactive.
- Card actions look like buttons but use the wrong cursor, creating a mismatch between visual affordance and interaction behavior.
- Hover and focus states should be added without changing layout dimensions or replacing the existing visual theme.
