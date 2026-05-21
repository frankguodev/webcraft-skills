# Visual System High-Risk Module

Use this module to strengthen visual-system checks in `ui-audit.md`, especially spacing, typography, color, radius, border, shadow, and decorative language that do not behave like one product.

## When To Use

- The page feels stitched from multiple templates, or the user says it looks unpolished, inconsistent, or AI-generated.
- One screen contains multiple radius systems, border weights, shadows, button styles, card densities, icon strokes, or accent-color roles.
- Fix/polish work needs to preserve the theme while improving maturity and consistency.

## Required Checks

- Hierarchy system: H1, H2, body, caption, and button type should use a small stable scale of size, weight, line-height, and spacing.
- Color roles: primary, accent, state, link, and data-highlight colors need clear responsibilities; avoid one-hue domination or saturated overuse.
- Container language: card, panel, modal, popover, table, and form controls should share a radius, border, and shadow scale.
- Spatial rhythm: container width, section spacing, card padding, grid gaps, and button gaps should be proportional.
- Decorative restraint: gradients, glass effects, glow, background images, textures, masks, filters, and blend modes should support information, not hide weak content.
- Icons and media: icon stroke, size, color inheritance, illustration/mockup/screenshot ratios should fit the component system.
- Theme preservation: fixes should refine the existing direction, not switch to another aesthetic without permission.

## Browser Verification

- Capture or inspect the first viewport and one dense content area to confirm repeated components feel like one product.
- Check desktop and mobile for type scale, spacing, card density, and button hierarchy.
- Verify hover, focus, and active states use the same color and border system.

## Common Signals

- Primary buttons use pill radius, cards use large radius, inputs use small radius, and dialogs use another radius.
- Every highlighted element uses the same saturated color, so users cannot identify the primary action.
- Each section uses a different background, card, icon, or decoration pattern and feels like a collage.
- Shadows, glass effects, or glow are heavy enough to make the interface feel cheap or tiring.
- A fix reduces defects but changes the theme so before and after feel like different products.

## Fix Boundaries

- Do not change the theme because it is supposedly more premium; tie changes to clarity, consistency, usability, or product realism.
- Normalize tokens and component relationships before local polish.
- Preserve business content and product tone; do not use decoration as a substitute for real information structure.
