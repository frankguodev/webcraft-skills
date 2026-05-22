# UI Audit Rubric

Use this rubric to inspect AI-generated web pages, landing pages, application screens, or whole sites. The goal is not to express taste preferences; it is to identify issues that make the UI feel rough, unusable, untrustworthy, inconsistent, or unlike a mature product.

This file is the main index and judgment framework. Detailed inspection paths live in `modules/*.md`; choose modules by page signals instead of running every module on every audit.

## Contents

- General Principles
- Severity
- Scoring Model
- Module Index
- Output Format
- Deduplication Priority

## General Principles

1. Confirm the target first: page, component, screenshot, whole site, or code. The rubric is a judgment library, not a task list to fully execute every time; depth is controlled by `Quick / Standard / Deep Audit`.
2. Check whether the core task can be completed first, then whether information is clear, then visual system, responsiveness, states, and polish.
3. Do not reject an existing product direction based on personal taste. Report only issues that affect usability, clarity, consistency, realism, trust, or maintainability.
4. Do not audit every page into the same "premium" style. Dashboards should support repeated operation, landing pages should support understanding and conversion, docs should support reading, and portfolios should support work and identity.
5. Fix suggestions preserve the existing theme, brand character, content structure, and visual direction by default. Recommend a new direction only when the user asks for redesign or the current direction itself blocks understanding or use.
6. Prefer browser verification when available. If not verified in a browser, say so and explain which risks are inferred from code or structure.
7. Evidence should start from visible user outcomes, then use components, CSS, design tokens, DOM structure, breakpoints, screenshots, or interaction checks.
8. Lead with findings, then fix order. Avoid long summaries before issues, and do not invent findings just to cover categories.

### Context To Identify First

- Page type: landing page, dashboard, app screen, portfolio, docs, form, checkout, admin, marketing site, etc.
- Core task: read, sign up, buy, search, filter, manage, create, contact, download, book, etc.
- Audience: general users, developers, enterprise buyers, creators, internal operators, managers, etc.
- Content density: low-density brand expression, medium-density product explanation, high-density data operation.
- Technical constraints: component library, utility CSS, CSS Modules, custom CSS, design tokens, breakpoints, framework, and rendering model.
- Design tone: tool, content, product, brand, editorial, or admin.

### Do Not Report

- Pure subjective preference without impact on usability, clarity, consistency, or realism.
- Issues without location, evidence, reproduction, or defensible inference.
- "Could be better" comments without a concrete fix direction.
- Low-value `Minor` findings added only to increase count.
- Brand, marketing, or copy-strategy expansion unrelated to the user's goal.
- Questions that require product decisions, unless clearly marked as `Open Question`.
- Every visual difference as inconsistency; some differences are intentional hierarchy.

## Severity

### Critical

Directly makes the page unusable, core information unreadable, core actions impossible, or common devices visibly broken.

Typical cases:

- Horizontal scrolling at common mobile widths such as 375px, or clipped main content, tables, code blocks, or product images.
- Primary CTA, navigation, forms, or dialogs cannot be clicked, closed, read, or reached by keyboard.
- First viewport hierarchy is so unclear that users cannot identify the page topic or next action.
- Text contrast is too low for core content to be readable.
- Dialogs, overlays, sticky, or fixed elements block primary content with no recovery path.
- Key icon buttons lack accessible names, or invisible focus prevents keyboard completion of the core path.
- Form submit, validation, loading, or error recovery is missing, so users cannot complete or confirm the core task.
- Real content, long copy, different image ratios, or data volume changes make core information or actions disappear, overflow, or become unclickable.

### Major

Does not fully block use, but significantly reduces professionalism, trust, scan efficiency, operation confidence, or responsive stability.

Typical cases:

- Components lack key states such as hover, active, focus-visible, disabled, loading, empty, error, or success.
- Clickable elements lack clear affordance such as pointer, hover, focus-visible, or selected feedback.
- Spacing, type hierarchy, radius, border, color, shadow, or control systems are visibly inconsistent.
- Mobile, tablet, or intermediate breakpoints work but feel cramped, misaligned, awkwardly wrapped, or hard to tap.
- Information hierarchy, CTA priority, navigation location, current state, or page narrative is unclear.
- Forms, filters, search, tables, bulk actions, or dangerous actions lack complete states.
- Core inputs, selects, dropdowns, or multiselects use clashing native styles, or existing custom controls are bypassed.
- Too many cards, bento grids, badges, stats, or decorative icons make the page feel like a template collage.
- The UI only fits ideal short copy or fixed data volume; real content visibly breaks the rhythm.

### Minor

Does not materially affect use, but lowers refinement, rhythm, or completeness.

Typical cases:

- Local alignment, spacing, border opacity, or shadow intensity is slightly unstable.
- Copy is somewhat vague, or labels, icons, and decoration are slightly excessive.
- Motion exists but is not restrained, or transition timing is inconsistent.
- Hover, focus, loading, or empty states exist but are not consistent in strength, rhythm, or copy.
- Some headings, buttons, labels, or helper text wrap awkwardly but remain readable and operable.
- A few viewports have imperfect section spacing, image crop, or card height without affecting the core flow.
- Similar components differ slightly in size, padding, icon stroke, or copy tone.
- Non-core inputs, selects, dropdowns, or multiselects still use clashing native styles; if this appears in core filtering, editing, or bulk operation flows, escalate to `Major`.

## Scoring Model

Use this for Deep Audit or when the user asks for scores. Each item is 0 to 5:

- `Usability`: whether the core task can be completed smoothly.
- `Clarity`: whether hierarchy, topic, and next action are clear.
- `Consistency`: whether spacing, typography, color, radius, borders, and components feel unified.
- `Responsiveness`: whether mobile, tablet, and desktop are stable.
- `Interaction States`: whether hover, active, focus-visible, disabled, loading, empty, error, and success are complete.
- `Control System Fit`: whether inputs, selects, dropdowns, multiselects, menus, and bulk actions follow the project's component system.
- `Visual Maturity`: whether it feels like a mature product rather than a rough demo.
- `AI Template Smell`: higher score means less AI-template smell.

Do not compute `Overall` as a simple average. `Critical` issues should heavily reduce the total; if the core flow is unusable, the total should not exceed 2.5.

## Module Index

`modules/` contains focused inspection paths. This file defines the judgment framework, module meaning, and reporting ownership; the `audit-ui` workflow decides which modules to read for the current mode and page signals.

### `modules/layout.md`

Use for first-viewport relationships, hero/search/chip/next-section relationships, region boundaries, visual containers, alignment systems, layering, and layout content stress.

Use first when:

- Auditing landing pages, product pages, homepages, search pages, or admin homepages.
- The first viewport feels odd, hollow, overlapped, misaligned, drifting, or like a resource failed to load.
- You need to judge whether the layout relationships work, not just polish details.

### `modules/responsive.md`

Use for 375px / 768px / 1280px key viewports, horizontal scrolling, fixed widths, degradation strategy, media ratios, tables/code/rich content, and sticky/fixed overlap.

Use first when:

- The page has complex grids, tables, card lists, filters, dialogs, mockups, long headings, or sticky regions.
- The user asks for mobile/tablet/desktop checking.
- Code contains fixed width, min-width, nowrap, overflow, absolute/fixed/sticky, or similar risk signals.

### `modules/components-states.md`

Use for cursor, hover, active, focus-visible, disabled, loading, empty, error, success, selected, pressed, click affordance, and custom clickable regions.

Use first when:

- The page has buttons, links, chips, card actions, icon buttons, tabs, accordions, menus, or clickable divs.
- Users may not know what is clickable or whether an operation has feedback.
- You need to verify component states are complete and do not shift layout.

### `modules/forms-controls.md`

Use for forms, search, filters, selection controls, dropdowns, multiselects, bulk actions, error recovery, mixed native controls, and mobile form usability.

Use first when:

- Auditing login, signup, upload, edit, checkout, settings, admin filters, or bulk operations.
- The project has custom controls but a page mixes in browser-default controls.
- You need to judge whether the form can be completed, errors understood, and recovery completed.

### `modules/visual-system.md`

Use for typography, color, spacing, radius, border, shadow, decorative language, icon/media consistency, and theme preservation.

Use first when:

- The page feels like several templates stitched together, or the user says it is not refined, inconsistent, or AI-like.
- The same screen shows multiple radius systems, borders, shadows, button styles, icon strokes, or accent colors.
- Fix/polish must preserve the current theme while improving maturity and consistency.

### `modules/accessibility.md`

Use for keyboard paths, focus-visible, accessible names, semantic structure, target size, state expression, high contrast, and reduced-motion risk.

Use first when:

- The page has forms, dialogs, menus, custom controls, icon buttons, dangerous actions, or complex states.
- The user asks for a11y, keyboard, screen reader, or WCAG risk checks.
- Mouse interaction works but keyboard path or state expression is uncertain.

### `modules/ai-template-smell.md`

Use for first-viewport product clarity, fabricated content, template collage, excessive decoration, vague copy, information credibility, and pages that look complete but do not help decisions.

Use first when:

- The page has many badges, stats, bento grids, gradient glows, abstract mockups, or generic icons.
- Copy leans on phrases like "next generation", "redefine", or "unlock potential".
- The page has atmosphere but users cannot understand what the product is, who it is for, or what to do next.

### Common Cross-Object Ownership

- Navigation: layout placement and responsive collapse belong to `Layout / Responsive`; current state, hover, and menu feedback belong to `Components And States`; keyboard path and aria belong to `Accessibility`.
- Dialogs, drawers, popovers, and toasts: overlap, scroll, and layering belong to `Layout / Responsive`; open/close/loading/empty/error states belong to `Components And States`; focus management and Escape behavior belong to `Accessibility`.
- Motion: state-feedback motion belongs to `Components And States`; decorative motion and visual rhythm belong to `Visual System`; reduced-motion or vestibular risk belongs to `Accessibility`.

## Output Format

Default output should be concise and evidence-led. List findings first, then fix order.

### Recommended Structure

```markdown
Context
- Scope:
- Audit mode:
- Page type:
- Core task:
- Viewports checked:
- Constraints:

Top Findings
- ...

Critical
### 1. Finding title
Location:
Evidence:
Impact:
Fix:

Major
### 1. Finding title
Location:
Evidence:
Impact:
Fix:

Minor
### 1. Finding title
Location:
Evidence:
Impact:
Fix:

Open Questions
- ...

Fix Order
1. ...
2. ...
3. ...
```

### Evidence Standard

Do not write:

```text
Mobile layout is bad.
```

Write:

```text
At 375px, the hero CTA group remains horizontal and the secondary button likely overflows the container, leaving the tap target partially inaccessible.
```

Do not write:

```text
The colors are not premium.
```

Write:

```text
Badges, primary buttons, data highlights, and links all use the same saturated purple in the same viewport, so users cannot identify the true primary action.
```

### Viewport Record

- Quick Audit: follow `references/modes/audit-modes.json`; scan only high-risk/current viewport.
- Standard Audit: default to checking or inferring `375px` and `1280px`, adding `768px` when useful.
- Deep Audit: expand according to the mode file across small mobile, large mobile, tablet, large desktop, and wide desktop.

If the page cannot run, still infer risk from CSS, layout code, and breakpoints, and clearly list unverified viewports.

## Deduplication Priority

1. Report one root cause once, under the module or category that best explains it.
2. If an issue affects both Layout and Responsive, prioritize `Responsive`.
3. If an issue affects both Components and Accessibility, prioritize `Accessibility`; if the main risk is missing state rather than keyboard/semantic behavior, use `Components And States`.
4. For submit, validation, error recovery, filters, selection controls, and bulk actions, prioritize `Forms Controls`; if the core risk is accessible name, keyboard path, or semantics, prioritize `Accessibility`.
5. For navigation, dialogs, drawers, popovers, and toasts, assign by primary impact: overlap/layering to `Layout` or `Responsive`, state feedback to `Components And States`, and focus/keyboard to `Accessibility`.
6. If token confusion creates many symptoms, such as radius, border, and shadow inconsistency, report one systemic `Major` instead of many `Minor` findings.
7. Do not merge `Critical` issues into broad systemic findings; blocking issues must stand alone.
8. Do not create findings just to cover every module. Skip modules with no meaningful issues.
9. Fix order is always: usable first, then clear, then consistent, then refined.
10. Do not start by rewriting the visual style. Unless the user asks for redesign, preserve the theme and fix blockers, confusion, and inconsistency.
