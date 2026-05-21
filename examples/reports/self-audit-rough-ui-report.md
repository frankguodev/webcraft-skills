# Self Audit Rough UI Report

Test target:

- Before: `examples/test-cases/self-audit-rough-ui/before.html`
- After fix: `examples/test-cases/self-audit-rough-ui/index.html`

Screenshot method:

- Edge headless
- Viewport: 1280 x 900

## Before Screenshot

![Before audit screenshot](./assets/self-audit-before.png)

## Audit Context

- Scope: single test page
- Audit mode: Standard Audit, with selected Deep Audit checks for responsive overflow, media ratio, controls, table behavior, and overlay layering
- Page type: app screen / admin-style upload workflow
- Core task: upload a file batch, choose a team, review recent uploads, approve a batch
- Verification level: static code review plus rendered screenshot inspection

## Top Findings

### 1. Mobile and viewport stability is broken by fixed page width

Location: `before.html` `body`, `.page`, `.hero`, `.workspace`, `.fake-table`

Evidence: The page sets `body { min-width: 1180px; }` and `.page { width: 1180px; }`. The 1280px screenshot shows a horizontal scrollbar and content pushing past the viewport.

Impact: Smaller screens cannot complete core upload/review tasks without horizontal scrolling. This is a Critical responsive risk.

Fix: Replace fixed page width with responsive `width: min(100% - gutter, max-width)`, use `minmax(0, 1fr)` grid tracks, and put wide tables inside an overflow container.

### 2. Floating dialog competes with content and can cover the table

Location: `before.html` `.floating-modal`

Evidence: The dialog is `position: fixed` in the lower-right corner with `z-index: 2`, while the sticky nav uses `z-index: 3`. It visually covers dashboard content in the screenshot.

Impact: Users can lose access to table rows or actions, especially on smaller screens. Layering is unclear and task flow feels unstable.

Fix: Keep the dialog in normal page flow for this fixture, or implement a real modal with clear focus management, close behavior, and overlay layering.

### 3. Visual system is noisy and inconsistent

Location: hero, badges, buttons, cards, nav, modal

Evidence: The page combines oversized gradient badges, heavy borders, pill buttons, square secondary buttons, large shadows, and high-saturation backgrounds.

Impact: The interface feels like a generated marketing template rather than a reliable upload workflow. CTA hierarchy and product meaning are harder to scan.

Fix: keep the purple/cyan gradient and glass-card theme, but reduce only the parts that harm scanning, restore component consistency, and align buttons/cards/forms to one theme-aware system.

### 4. Media ratio and table behavior are fragile

Location: `.mockup img`, `.fake-table`

Evidence: The mockup image is forced to `780px x 270px` with `object-fit: fill`, distorting the SVG preview. The table is fixed at `960px` and uses `white-space: nowrap`.

Impact: Product visuals can stretch or crop badly, and real table content creates overflow instead of a controlled scroll region.

Fix: Use a stable media aspect ratio with `object-fit: cover`; wrap the table in an `overflow-x: auto` container and use a sensible minimum table width.

### 5. Native controls and states are not integrated

Location: upload controls panel

Evidence: Native `select` and `file` inputs use browser defaults while buttons use custom styling. Focus outlines are removed globally.

Impact: The form feels disconnected from the product UI, and keyboard users lose visible focus.

Fix: Style native controls to match the system, restore `focus-visible`, and add clear loading/error/success affordances.

## Fix Summary

The fixed version preserves the same product concept and visual direction: a vivid purple/cyan upload review workspace with glassy rounded panels and pill CTAs. It changes layout mechanics, component states, overflow handling, and noisy local details without replacing the theme.

Theme/style direction changed: **No**.

Changed:

- Removed fixed `body` and page widths.
- Rebuilt layout with responsive max-width containers and `minmax(0, 1fr)` grid tracks.
- Kept the gradient/glass theme while lowering only the background and shadow intensity that hurt readability.
- Added consistent radius, border, surface, and button treatment inside the existing theme.
- Added visible `focus-visible` styles.
- Styled native `select` and `file` controls.
- Stabilized mockup media with `aspect-ratio` and `object-fit`.
- Wrapped the table in a horizontal scroll container with stable table minimum width.
- Moved the dialog into document flow for the fixture so it no longer covers content.
- Added responsive breakpoints for tablet and mobile.

Preserved:

- Purple/cyan gradient background direction.
- Glassmorphism-style cards, rounded navigation, pill buttons, and high-energy upload-workspace tone.
- The existing upload/review product content and information structure.

## After Screenshot

![After fix screenshot](./assets/self-audit-after.png)

## Recheck

- Horizontal viewport overflow is removed at the captured desktop viewport.
- Visual hierarchy is clearer while preserving the original gradient/glass theme.
- The table is contained by a scroll wrapper instead of forcing the whole page wider.
- Native controls now share border, radius, surface, and focus treatment with the rest of the UI.
- The dialog no longer floats over table content in this fixture.
- Remaining risk: the report screenshot is desktop-sized only; a full production audit should also capture 375px, 768px, and 1440px screenshots.

## Result

The current audit workflow successfully caught the intended issue categories without needing to list every rubric item:

- Critical responsive overflow
- Overlay/layering risk
- Visual-system inconsistency
- Media aspect-ratio risk
- Table overflow risk
- Native-control mismatch
- Missing focus/state affordances

This confirms the audit and fix rules are broad enough to catch realistic rough UI problems, while the updated fix boundary prevents a repair from becoming an unrequested theme change.
