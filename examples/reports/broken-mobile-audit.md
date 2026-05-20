# broken-mobile Audit Dry Run

## Context

- Scope: `examples/test-cases/broken-mobile/index.html`
- Audit mode: Standard Audit
- Page type: Product page section
- Verification level: Static code review, not browser verified

## Top Findings

- The page is almost guaranteed to horizontally scroll on mobile because the main shell has `min-width: 1180px`.
- CTA group and feature board rely on fixed widths and do not provide a mobile layout.
- Fixed bottom bar can hide content on short screens.

## Critical

### 1. Page shell forces desktop width on all screens
Location: `.shell`
Evidence: `.shell { min-width: 1180px; }` remains active at mobile widths.
Impact: Mobile users must horizontally scroll to read or act on the page.
Fix: Replace fixed min-width with responsive `max-width` and padding; let inner layouts collapse.

### 2. CTA group does not wrap or stack
Location: `.actions`
Evidence: `.actions { width: 620px; display: flex; }` and button text uses `white-space: nowrap`.
Impact: Primary actions can exceed the viewport and become hard to tap.
Fix: Set `.actions { width: 100%; flex-wrap: wrap; }` or stack actions on mobile.

## Major

### 1. Feature board uses a fixed grid
Location: `.board`
Evidence: `.board { width: 680px; grid-template-columns: repeat(3, 220px); }`.
Impact: The board cannot adapt to tablet or mobile widths.
Fix: Use responsive grid tracks such as `repeat(auto-fit, minmax(...))` and mobile single-column fallback.

### 2. Fixed bottom bar can cover content
Location: `.sticky`
Evidence: `.sticky` is fixed to the bottom without body padding compensation.
Impact: Content near the bottom can be obscured.
Fix: Add bottom padding or make the bar non-fixed on small screens.

