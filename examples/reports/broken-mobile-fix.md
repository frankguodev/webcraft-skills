# broken-mobile Fix Dry Run

## Context

- Scope: `examples/test-cases/broken-mobile/index.html`
- Source: `broken-mobile-audit.md`
- Fix level: Critical and Major only
- Verification level: Static fix plan, not browser verified

## Fix Plan

1. Remove the global desktop `min-width` that forces horizontal scrolling.
   Finding: Page shell forces desktop width on all screens.
   Scope: `.shell`

2. Make hero and CTA layout responsive.
   Finding: CTA group does not wrap or stack.
   Scope: `.hero`, `.actions`, `.actions a`

3. Replace fixed feature board with responsive grid.
   Finding: Feature board uses a fixed grid.
   Scope: `.board`, `.card`

4. Prevent fixed bottom bar from covering content.
   Finding: Fixed bottom bar can cover content.
   Scope: `.sticky`, body/page bottom spacing

## Expected Changes

- `.shell` should use `max-width` and responsive padding instead of `min-width`.
- `.hero` should collapse to a single column on narrow screens.
- `.actions` should wrap or stack on mobile.
- `.board` should use `repeat(auto-fit, minmax(...))` or a one-column mobile layout.
- The page should reserve bottom space for `.sticky`, or make `.sticky` non-fixed on small screens.

## Should Not Change

- Do not redesign the page.
- Do not introduce a new color system.
- Do not change the product message.
- Do not add animations, extra cards, badges, or visual effects.

## Recheck

- 375px: no horizontal scroll, CTA usable, board fits.
- 768px: layout not cramped.
- 1280px: desktop layout remains reasonable.

