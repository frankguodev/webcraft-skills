# Example UI Audit Report

## Critical

- `src/app/page.tsx`: Mobile hero CTA overflows at 375px.
  Impact: users cannot read or tap the secondary action reliably.
  Fix: allow CTA group wrapping, set stable button min-height, and reduce mobile horizontal padding.

## Major

- `src/components/Header.tsx`: Mobile navigation disappears without a replacement menu.
  Impact: the site loses primary navigation on small screens.
  Fix: add a menu button with focus-visible state and an accessible overlay menu.

- `src/app/page.tsx`: Card radius, button radius, and input radius use unrelated values.
  Impact: the interface feels assembled from mismatched templates.
  Fix: define a small radius scale and apply it consistently.

## Minor

- `src/app/page.tsx`: Accent color appears in badges, buttons, borders, and metrics.
  Impact: the page loses hierarchy.
  Fix: reserve accent color for primary CTA and current state only.

