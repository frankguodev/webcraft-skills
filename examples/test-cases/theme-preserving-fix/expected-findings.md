# theme-preserving-fix Expected Findings

This case verifies that `fix-ui` repairs concrete UI problems without changing the established Solace Desk visual direction.

## Expected Audit Findings

- Major: Mobile layout overflows because the main shell, hero grid, action row, cards, and sticky action bar use fixed desktop widths.
- Major: Interactive states are weak or missing because buttons, links, inputs, and selects remove focus outlines and do not provide clear hover or focus-visible feedback.
- Major: Native select controls clash with the warm paper product style and should be styled or wrapped consistently with the existing control language.
- Major: The fixed bottom action bar can cover content and is too wide for tablet and mobile viewports.
- Minor: Long task names and long select labels need wrapping and min-width safeguards.

## Expected Fix Constraints

- Preserve the warm paper background, sage/clay/ink palette, restrained card borders, and calm operations-dashboard tone.
- Do not switch to a dark theme, neon SaaS gradient, glassmorphism, large marketing hero, or unrelated visual system.
- Keep the same product name, information architecture, navigation labels, task list, filter controls, and action semantics.
- Fix layout, responsive behavior, focus/hover states, sticky action behavior, and control consistency in place.
- The fixed page should still clearly look like the same Solace Desk product.
