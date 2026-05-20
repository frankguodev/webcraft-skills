# rough-landing Audit Dry Run

## Context

- Scope: `examples/test-cases/rough-landing/index.html`
- Audit mode: Standard Audit
- Page type: Landing page
- Verification level: Static code review, not browser verified

## Top Findings

- Mobile layout likely overflows because `nav`, `.actions`, and `.mockup` keep fixed widths at small breakpoints.
- The page has strong AI-template smell: many badges, invented metrics, generic claims, and decorative glow.
- Radius, borders, and cards are inconsistent across buttons, metrics, mockup, and content cards.

## Critical

### 1. Mobile layout uses fixed widths that can create horizontal scrolling
Location: `nav`, `.actions`, `.mockup`, mobile media query
Evidence: Mobile CSS keeps `nav { min-width: 720px; }`, `.actions { width: 520px; }`, and `.mockup { width: 620px; }`.
Impact: At 375px, primary navigation, CTA group, and mockup can exceed the viewport.
Fix: Remove fixed mobile widths, allow CTA wrapping or stacking, and set mockup `width: 100%; max-width: ...`.

## Major

### 1. AI-template decoration is louder than product clarity
Location: hero badges, metrics, background
Evidence: Hero includes four badges, four large metrics, strong glow backgrounds, and generic copy such as "Unlock Limitless AI Productivity".
Impact: The page feels AI-generated and does not clearly explain the product.
Fix: Reduce badges and metrics, replace vague claims with specific product explanation, and lower background intensity.

### 2. Radius system is inconsistent
Location: buttons, mockup, metrics, cards
Evidence: Buttons use `999px` and `18px`; mockup uses `34px`; metrics use `10px`; cards use mixed corner values.
Impact: Components feel assembled from unrelated templates.
Fix: Define a small radius scale and apply it consistently.

## Open Questions

- Are the metrics real? If not, replace them with non-claim product details.

