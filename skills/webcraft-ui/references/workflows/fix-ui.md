# UI Fix Workflow

Use this workflow to implement UI fixes from review findings, audit findings, user-reported issues, screenshots, or code observation. The goal is to make confirmed issues usable, clear, and consistent without turning a fix into a redesign.

By default, prioritize issues with evidence, impact, and a clear repair direction. It is allowed to also fix direct dependencies, new errors introduced by the current change, and adjacent issues that block the original fix; put unsupported or product-decision issues into `Open Questions` and do not pretend they are confirmed.

## Locale Rule

The skill's Locale Contract has already selected one runtime locale before this workflow is read. Stay in this locale. Do not open the paired `.zh.md` or English workflow/checklist/module files unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency.

## 1. Baseline Gate

Before editing code, confirm the fix boundary and verification baseline. If full confirmation is not possible, establish the smallest baseline from available information; do not make broad edits with no understanding of entry points, verification path, or change boundary:

- Source: audit, review, user-specified issue, or current observation.
- Audit mode: Quick / Standard / Deep Audit, or a user-specified single issue.
- Scope: single page, component, whole site, viewport, or state category.
- Severity: Critical only, or Critical / Major / Minor.
- Whether visual tokens may change: color, radius, shadow, spacing, type hierarchy.
- Whether shared components, base controls, layout rules, breakpoints, or scroll containers may change.
- Whether the fix involves media ratios, tables/rich content/code blocks, scroll layers, native controls, motion, or high-contrast risk.
- Whether existing style, copy, layout structure, and tech stack must be preserved.
- Whether the user needs a fix plan before execution.
- Existing verification commands: dev, lint, typecheck, test, build.
- Whether affected pages or components can open, and where their entry points are.
- Runtime path: existing dev server, preview command, localhost URL, or reusable running page.

If the user says "fix it directly" or equivalent, proceed. If the scope may become broad, provide a short fix plan first.

### Gate Order

The first goal of `fix-ui` is to keep the page runnable; visual improvement comes after that. Execute through these gates:

1. Baseline Gate: identify verification commands, affected entries, existing visual system, and change boundary.
2. Scope Gate: decide findings, direct dependencies, allowed adjacent issues, and out-of-scope items.
3. Implementation Gate: make small changes without unrelated refactors or opportunistic redesign.
4. Verification Gate: run existing checks; if the page can run and the environment allows it, actually open the affected page and confirm there is no page-level runtime error.
5. Recovery Gate: if this change introduced build failure, runtime error, broken page load, or key route crash, repair that new issue first.
6. Recheck Gate: recheck the original finding and scan for obvious UI regressions.
7. Output Gate: report gate results, verified items, new errors, and unverified risk.

If verification fails and cannot be repaired in the current context, stop expanding the change, keep the smallest necessary edits, and report the failing command, symptom, attempted repair, and remaining blocker.

## 2. Preserve Existing Visual System

Before fixing, identify and respect the parts of the current visual system relevant to this change:

- Color: brand, background, text, state, and accent colors.
- Typography: type scale, weight, line-height, heading/body rhythm.
- Spacing: container width, section spacing, component padding, grid gap.
- Radius, border, shadow: shared rules for buttons, cards, inputs, dialogs, menus.
- Component style: buttons, forms, navigation, cards, tables, dialogs, toasts.
- Layout and scroll: container width, grid/flex collapse, sticky/fixed layers, scroll regions, anchors, and table horizontal scrolling.
- Media and rich content: images, video, iframes, charts, code blocks, rich text, and tables across ratios, cropping, placeholders, and small-screen behavior.
- Control system: whether inputs, selects, dropdowns, multiselects, uploads, switches, checkboxes, and radios already have shared components or shared styles.
- Interaction layers: dropdowns, popovers, modals, toasts, drawers, and loading overlays.
- Page tone: marketing, tool, content, admin, personal brand, etc.

Unless the user explicitly asks for a redesign, theme change, brand reset, or preset, fix within the existing visual system. Do not change the page into a different style to repair one issue.

Theme direction is preserved by default, including light/dark mode, brand color character, radius/shadow language, illustration or background language, density, product tone, component shape, and overall visual direction.

Preserving a theme does not mean freezing defects. If a visual trait causes a confirmed usability, readability, responsive, state, interaction, or accessibility issue, it must be fixed. The repair should happen inside the existing theme by correcting, reducing, constraining, adding missing states, or adjusting local tokens instead of replacing the theme.

If a theme element itself causes a confirmed issue, such as a noisy background harming readability, a gradient reducing contrast, glassmorphism weakening hierarchy, or motion causing dizziness or layout shift, reduce its intensity, add overlays, adjust local tokens, add focus/state treatment, or constrain animation. Preserve the theme intent and explain in the output:

- Which original style traits were preserved.
- Which visual traits were adjusted.
- Why those adjustments were required fixes rather than taste-based replacement.
- Whether the original theme direction is still preserved.

If a fix would fundamentally change light/dark mode, primary color direction, visual density, component shape, illustration/background language, or overall style direction, put it under `Open Questions` and ask the user to confirm.

## 3. Choose Strategy By Source

### From Audit

- Fix in Critical / Major / Minor and Fix Order priority.
- Every change should map to a finding, direct dependency, verification-failure repair, or new error introduced by the current change.
- If the source is Quick / Standard Audit, keep scope restrained: prioritize Top Findings, Fix Order, direct dependencies, and new blocking issues exposed during verification.
- If the source is Deep Audit, systemic issues may be addressed, but still prioritize core-task and cross-page consistency issues first.
- Do not opportunistically fix low-value issues with no evidence, no impact, and no blocking relationship to the current repair.

### From Review

- Prioritize reviewer-identified risks.
- If review feedback is directional, convert it into executable findings before fixing.
- Do not expand an ordinary review into a full redesign.

### From User-Specified Issue

- Prioritize the named issue and direct dependencies.
- Do not expand into unrelated scope. If an adjacent issue blocks the original repair, makes the page fail to open, or was introduced by the current change, fix it and explain why.
- If you find an extra Critical issue, mention it, but do not broadly rewrite without user intent.

### From Screenshot

- Prioritize visible layout, visual hierarchy, copy, and obvious state issues.
- Do not assert or fix behavior that cannot be confirmed from the screenshot.
- Hover, focus, loading, dialog close behavior, and similar interactions need runtime verification.

### From Code Observation

- Label code-based inferences.
- If the page can run, verify before fixing when practical.
- If it cannot run, keep fixes conservative; if code clearly shows a build-breaking or page-breaking issue, repair it and report unverified risk.

## 4. Scope Gate / Fix Plan

For larger scopes, multiple files, or when the user needs a plan first, provide a short plan. The plan must make scope explicit; do not hide adjacent work under "also polish":

```markdown
## Fix Plan

1. Fix mobile hero CTA overflow.
   Finding: Mobile hero CTA overflows.
   Scope: `src/app/page.tsx`

2. Add button focus-visible / disabled / loading states.
   Finding: Primary actions lack complete states.
   Scope: `src/components/Button.tsx`

3. Align card/button/input radius system.
   Finding: Radius system is inconsistent.
   Scope: shared component styles

4. Repair runtime error introduced by the current fix.
   Reason: Verification failure introduced by current fix.
   Scope: affected route/component only
```

The plan must map to findings, direct dependencies, verification-failure repair, or new errors introduced by the current change. Do not include "also improve the whole UI" as hidden scope.

## 5. Fix Priority

Fix in this order:

1. `Critical`: unusable, unreadable, unclickable, unclosable, horizontal scrolling, broken core flow.
2. Responsive and layout stability: breakpoints, grid/flex collapse, sticky/fixed, z-index, scroll containers, table/code/rich-content overflow.
3. Components, forms, and control system: states, focus-visible, disabled, loading, error, select-like controls, native-control mixing.
4. Data and rich content: tables, charts, code blocks, rich text, long lists, numeric alignment, media ratio and cropping.
5. Visual system: spacing, typography, color, radius, border, shadow, background, filter, outline.
6. Interaction layers and motion: dropdowns, popovers, modals, toasts, drawers, scroll behavior, reduced motion.
7. Content Stress: long copy, mixed-language content, real data counts, varied media ratios, multi-column/print/page-break cases.
8. Accessibility: keyboard paths, accessible names, label/error associations, forced colors / high contrast.
9. AI Template Smell: remove template noise and add real information structure.
10. `Minor`: alignment, spacing, motion, copy, and visual polish.

Do not fix Minor first. If Critical issues remain, do not spend time on local refinement.

## 6. Implementation Gate / Fix Strategies

Use the strategies below while keeping changes small: one change group should address one finding, direct dependency, adjacent blocker, or new error introduced by the current change. Do not mix unrelated visual issues into a single change.

### Layout / Responsive

- Find the root cause first: fixed width, container padding, grid/flex breakpoint, overflow, absolute/fixed positioning.
- Prefer responsive constraints: `max-width`, `min-width: 0`, `min-height`, `flex-wrap`, reasonable breakpoints, single-column degradation, stable scroll containers.
- When fixing first-viewport relationships, do not only check overflow. Address real rendered issues such as hero column proportion, search area spacing before the next section, hollow visual containers, oversized mockup/illustration/chart placeholders, or components that appear to press into the following section.
- For fixed-format elements, use `aspect-ratio`, `object-fit`, min/max size, and loading placeholders to prevent stretching, bad cropping, and layout shift.
- Put tables, code blocks, rich text, charts, and long lists into explicit scroll/collapse/reflow containers instead of forcing whole-page horizontal scrolling.
- When fixing sticky/fixed/z-index issues, define layer order so navigation, menus, toasts, dialogs, overlays, and loading overlays do not cover each other incorrectly.
- When fixing anchors, scroll snap, or scrollbar shifts, check `scroll-margin`, `scroll-padding`, `scrollbar-gutter`, scroll snap, and sticky header height.
- Do not use `overflow: hidden` to mask layout problems unless the content is truly secondary on mobile and an alternate path remains.
- Recheck the affected viewports after fixing.

### Typography

- Fix readability first: size, line-height, paragraph width, contrast, wrapping.
- Break Chinese headings by meaning, not by decorative block shape.
- Long English, emails, filenames, numbers, and IDs need wrapping or truncation strategies.
- Data-dense UI needs numeric width, alignment, decimals, prices, dates, and table-column scanning rules; use tabular numeric or stable column widths when useful.
- Long content may need `overflow-wrap`, `word-break`, `hyphens`, `line-clamp`, reasonable max-width, or a tooltip/details path.
- Do not make headings huge to simulate premium quality.

### Color

- Ensure contrast and state recognition first.
- Limit accent usage; avoid spreading the primary color everywhere.
- Preserve existing brand colors unless the user asks for a new visual direction.
- When fixing background images, gradients, filters, masks, blend modes, or backdrop filters, prioritize text readability, performance, and product realism.
- When backgrounds, gradients, glassmorphism, or strong decorative treatments are part of the current theme, reduce interference, improve contrast, add constraints, or adjust local tokens first; do not remove the whole theme expression by default.
- Do not repaint the whole page into a single style palette.

### Border / Radius / Shadow

- Prefer token convergence over per-component tweaks.
- Extract the smallest useful scale, such as button/input, card, modal.
- Focus rings / outlines must fit the border system and must not be hidden for visual cleanliness.
- Use shadows only for real elevation such as popovers, modals, and dropdowns.
- Avoid heavy outlines, glow effects, and excessive glassmorphism.

### Components And States

- Add usability states first: focus-visible, disabled, loading, error.
- Then add experience states: hover, active, empty, success.
- Real clickable elements should expose clear click affordance: buttons, links, search buttons, chips, card actions, icon buttons, and custom clickable regions should provide cursor, hover, active, focus-visible, or platform-equivalent feedback, without causing layout shift.
- State feedback must not cause layout shift.
- Icon buttons need visible text, tooltip, or `aria-label`.
- Icons, SVGs, avatars, and media controls should share size, stroke, color inheritance, and alignment; SVGs should adapt correctly to text color or state.
- Cursor, pointer-events, touch-action, and selection behavior should match control semantics.
- When fixing inconsistent inputs, selects, dropdowns, multiselects, or menus, first check whether the project already has matching custom components. Reuse or extend them instead of continuing to hand-style native controls.
- If the project has no matching custom control and native controls visibly break the visual system, create the smallest reusable control or shared style so core filtering, editing, and bulk actions use one interaction and visual pattern.
- Native-control fixes should include appearance, accent-color, caret-color, color-scheme, field-sizing, resize, file input, and similar browser-control capabilities when relevant.

### Data / Rich Content / Media

- For tables, fix usability first: column widths, `table-layout`, horizontal scroll container, sticky header, long-cell wrapping, empty state, and bulk actions.
- Code blocks, rich text, long lists, and charts need small-screen strategies: scroll, collapse, grouping, single-column layout, or summary/detail access.
- Images, video, iframes, product screenshots, and charts need stable ratios, focal crop, loading placeholders, and max-size constraints.
- Do not crop away essential information to fit one screenshot ratio; adjust container ratio, object-fit, or content layout instead.
- Multi-column content, print/page-break cases, and long content combinations should avoid awkward splits in cards, table rows, and code blocks.

### Accessibility

- Fix keyboard path, focus-visible, accessible names, and label associations first.
- Icon buttons, close buttons, and menu buttons need clear `aria-label` or visible text.
- Do not rely on color as the only state indicator.
- Form errors must be associated with their inputs.
- Dialogs must handle focus entry, focus return, Escape, and close button paths.
- Text, borders, focus, icons, and state feedback should remain distinguishable in forced colors / high contrast.

### Forms / Modals / Navigation

- Form fixes should close the loop: label, help, error, disabled, loading, success.
- Select-like controls should cover trigger, menu/popup, option, selected, disabled, empty, error, focus-visible, keyboard path, and long options.
- Dialogs should first guarantee close, scroll, focus, and destructive confirmation.
- Overlay fixes should define layering: trigger, menu/popup, overlay, modal, toast, and loading overlay z-index plus close paths.
- Navigation should first guarantee usable desktop and mobile paths, then visual polish.

## 7. Local Vs Systemic Fix

- If a problem appears once, prefer a local fix.
- If the same problem appears in 3+ components or pages, consider a shared component, design token, or utility.
- If related issues have different root causes, do not force abstraction.
- Abstraction must reduce duplication or risk; do not abstract for architecture theater.
- Before changing shared components, check that other usage scenarios will not break.

## 8. Scope Control

- Follow the existing framework, components, styling system, and naming habits.
- Prefer local components and styles; avoid unrelated architecture refactors.
- Do not change UI library, routes, or business logic.
- Do not change theme, light/dark mode, brand character, component shape, or overall visual direction unless explicitly requested.
- Do not remove necessary content for visual consistency.
- If multiple pages share the same issue, prefer shared components or tokens.
- If only one page has the issue, do not over-abstract.

## 9. User Decisions

Put these under `Open Questions`; do not decide silently:

- Product positioning, target user, or core value is unclear.
- Real data, cases, customers, pricing, or metrics need confirmation.
- Brand color, typeface, or visual direction requires tradeoff.
- Removing business content may harm information completeness.
- The fix requires a new dependency, UI library change, or design-system refactor.
- The fix would change core information architecture, data model, real business flow, or remove important content.

## 10. Recheck Gate

After each fix, recheck the affected dimension:

- Overflow: relevant viewports, especially 375px, 768px, 1280px.
- First-viewport layout, search area, hero, mockup, or section spacing: when the page can run, recheck in a browser at least one desktop viewport and one mobile viewport, ensuring there is no overlap, misalignment, hollow placeholder, or new layout shift; when it cannot run, state that the check is code-inferred only.
- Media ratio: aspect ratio, object fit, focal crop, loading placeholder, and varied image/video ratios.
- Tables/rich text/code/long lists: small-screen scrolling, collapse, long content, sticky header, and horizontal scroll container.
- Scroll and layering: sticky header, anchor jumps, scroll snap, scrollbar gutter, overlay conflicts, and close paths.
- Buttons/forms: hover, active, focus-visible, disabled, loading, error.
- Clickable elements: recheck pointer / hover feedback, visible keyboard focus, and whether hit targets match the visual region.
- Select/dropdown/multiselect/menu: open, close, selected, clear, keyboard path, long options, empty state, mobile.
- Dialogs: open, close, overlay, scroll, focus, mobile.
- Navigation: desktop, mobile, current state, keyboard path.
- Tokens: whether same-type components remain consistent and no new conflict appears.
- Copy/headings: long copy and mixed Chinese/English content.
- Accessibility: keyboard path, accessible names, label/error associations, forced colors / high contrast, and reduced motion.

If the page cannot run, state which rechecks are code-based only.

## 11. Verification And Recovery Gate

Verification is not optional polish. Whenever fix changes code, first confirm the project still runs. If a new error comes from the current change, repair that error before continuing UI rechecks. A passing build does not prove the page is usable; when the page can run and the environment allows it, open the affected page or route and confirm there is no page-level runtime error, blank screen, error boundary, key asset failure, or obvious console error.

### Engineering Verification

Prefer existing project commands:

- lint
- typecheck
- test
- build
- dev / preview (when needed for page-open verification)

Do not add new tools only for validation. Report anything not verified.

If any verification command fails:

- First decide whether the failure was introduced by the current change.
- If it was introduced by the current change, continue fixing until the command passes or the blocker is explicit.
- If it is pre-existing, state that and explain whether the current change introduced any new error.
- Do not claim the fix is complete while build fails, the page cannot open, or a key route crashes.

### Page-Open Verification

When the page can run and the environment allows it, start or reuse the dev server and open the affected page, route, or component preview:

- Confirm at minimum that the page has no blank screen, error boundary, hydration/runtime error, key asset 404, or failed initialization of critical interaction.
- For Next/Astro/Vite and similar apps, a passing build should still be followed by actual route-open checks, especially for changed pages.
- Even for style-only fixes, do a light page-open check when the page entry is clear; if browser or server startup is unavailable, state why and list remaining risk.
- If page opening fails and the failure comes from the current change, enter Recovery Gate and repair the page-level error before continuing UI rechecks.

### Visual Verification

- Recheck relevant viewports, at least the widths where issues occurred.
- Compare the fixed area before and after, ensuring no new overlap, overflow, or layout shift.
- For layout findings, prefer screenshot or browser notes showing first-viewport relationships, search-to-next-section spacing, visual-container occupancy, and core-content alignment.
- When fixing visual tokens, check same-type components remain consistent.
- When fixing media, tables, scrolling, or overlays, prefer screenshots or concrete viewport notes to prove the problem did not move elsewhere.
- When fixing visual issues inside a theme, verify the defect is fixed and the original theme direction was not replaced.

### Interaction Verification

- Recheck hover, active, focus-visible, disabled, loading, error.
- Run a pointer / hover smoke test for primary buttons, search buttons, links, chips/tags, card actions, icon buttons, and custom clickable containers.
- When fixing dialogs, menus, forms, or navigation, recheck open, close, keyboard path, and mobile when the page can run; when it cannot run, state which interactions are code-inferred only.
- When replacing native controls or creating custom controls, recheck same-type pages for remaining native-control mixing and verify the new control follows existing tokens.
- When fixing scrolling, motion, or transform, recheck scroll path, hit targets, reduced motion, and layout stability.
- Without a browser, explain unverified layout, pointer, hover, and interaction risk based on code.

## 12. Output Gate

```markdown
## Fix Summary

- Fixed:
- Preserved:
- Theme direction preserved:
- Still runnable:
- Not handled:

## Gate Results

- Baseline:
- Scope:
- Verification:
- Recovery:
- Recheck:

## Fixed Findings

- Finding:
  Change:
  Recheck:

## Changed Files

- `path/to/file`

## Verification

- Ran:
- Result:
- Page-open check:
- Not verified:
- New errors:

## Remaining Questions

- Questions needing user confirmation.
```

Be specific. Do not say only "optimized UI". State which finding was fixed, how, and whether it was rechecked.

## 13. Prohibited

- Do not turn fix into redesign unless explicitly requested.
- Do not change theme, light/dark mode, brand direction, component shape, or page tone unless explicitly requested.
- Do not rewrite a page because of taste.
- Do not force a preset when the user did not choose one.
- Do not perform unrelated refactors.
- Do not change tech stack or introduce dependencies unless necessary and approved.
- Do not delete user content, business logic, or real data.
- Do not fabricate lint/build/browser verification.
- Do not finish when the current change caused build failure, an unopenable page, or a key route crash.
- Do not fix one issue by introducing new responsive, state, or accessibility problems.
- Do not introduce global visual changes to repair a local issue.
- Do not fake-fix overflow, tables, media, or long copy by hiding, clipping, or deleting necessary content.
