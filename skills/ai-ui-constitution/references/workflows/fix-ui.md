# UI Fix Workflow

Use this workflow to implement UI fixes from review findings, audit findings, user-reported issues, screenshots, or code observation. The goal is to make confirmed issues usable, clear, and consistent without turning a fix into a redesign.

By default, fix only issues with evidence, impact, and a clear repair direction. Put unsupported issues into `Open Questions`; do not pretend they are confirmed.

## 1. Confirm Fix Boundary

Before editing code, confirm or infer:

- Source: audit, review, user-specified issue, or current observation.
- Scope: single page, component, whole site, viewport, or state category.
- Severity: Critical only, or Critical / Major / Minor.
- Whether visual tokens may change: color, radius, shadow, spacing, type hierarchy.
- Whether existing style, copy, layout structure, and tech stack must be preserved.
- Whether the user needs a fix plan before execution.

If the user says "fix it directly" or equivalent, proceed. If the scope may become broad, provide a short fix plan first.

## 2. Preserve Existing Visual System

Before fixing, identify and respect the current visual system:

- Color: brand, background, text, state, and accent colors.
- Typography: type scale, weight, line-height, heading/body rhythm.
- Spacing: container width, section spacing, component padding, grid gap.
- Radius, border, shadow: shared rules for buttons, cards, inputs, dialogs, menus.
- Component style: buttons, forms, navigation, cards, tables, dialogs, toasts.
- Page tone: marketing, tool, content, admin, personal brand, etc.

Unless the user explicitly asks for redesign or a preset, fix within the existing visual system. Do not change the page into a different style to repair one issue.

## 3. Choose Strategy By Source

### From Audit

- Fix in Critical / Major / Minor and Fix Order priority.
- Every change should map to a finding.
- Do not opportunistically fix unsupported low-value issues.

### From Review

- Prioritize reviewer-identified risks.
- If review feedback is directional, convert it into executable findings before fixing.
- Do not expand an ordinary review into a full redesign.

### From User-Specified Issue

- Fix only the named issue and direct dependencies.
- Do not expand scope unless the issue cannot be fixed otherwise.
- If you find an extra Critical issue, mention it, but do not broadly rewrite without user intent.

### From Screenshot

- Fix only visible layout, visual hierarchy, copy, and obvious state issues.
- Do not assert or fix behavior that cannot be confirmed from the screenshot.
- Hover, focus, loading, dialog close behavior, and similar interactions need runtime verification.

### From Code Observation

- Label code-based inferences.
- If the page can run, verify before fixing when practical.
- If it cannot run, keep fixes conservative and report unverified risk.

## 4. Fix Plan Format

For larger scopes or multiple files, provide a short plan:

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
```

The plan must map to findings. Do not include "also improve the whole UI" as hidden scope.

## 5. Fix Priority

Fix in this order:

1. `Critical`: unusable, unreadable, unclickable, unclosable, horizontal scrolling, broken core flow.
2. `Major`: failed responsive degradation, unclear hierarchy, missing component states, inconsistent visual tokens.
3. Content Stress: long copy, mixed-language content, real data counts, media ratios.
4. AI Template Smell: remove template noise and add real information structure.
5. `Minor`: alignment, spacing, motion, copy, and visual polish.

Do not fix Minor first. If Critical issues remain, do not spend time on local refinement.

## 6. Fix Strategies

### Layout / Responsive

- Find the root cause first: fixed width, container padding, grid/flex breakpoint, overflow, absolute/fixed positioning.
- Prefer responsive constraints: `max-width`, `min-width: 0`, `flex-wrap`, reasonable breakpoints, single-column degradation, `aspect-ratio`.
- Do not hide content to mask layout problems unless the content is truly secondary on mobile.
- Recheck the affected viewports after fixing.

### Typography

- Fix readability first: size, line-height, paragraph width, contrast, wrapping.
- Break Chinese headings by meaning, not by decorative block shape.
- Long English, emails, filenames, numbers, and IDs need wrapping or truncation strategies.
- Do not make headings huge to simulate premium quality.

### Color

- Ensure contrast and state recognition first.
- Limit accent usage; avoid spreading the primary color everywhere.
- Preserve existing brand colors unless the user asks for a new visual direction.
- Do not repaint the whole page into a single style palette.

### Border / Radius / Shadow

- Prefer token convergence over per-component tweaks.
- Extract the smallest useful scale, such as button/input, card, modal.
- Use shadows only for real elevation such as popovers, modals, and dropdowns.
- Avoid heavy outlines, glow effects, and excessive glassmorphism.

### Components And States

- Add usability states first: focus-visible, disabled, loading, error.
- Then add experience states: hover, active, empty, success.
- State feedback must not cause layout shift.
- Icon buttons need visible text, tooltip, or `aria-label`.
- When fixing inconsistent inputs, selects, dropdowns, multiselects, or menus, first check whether the project already has matching custom components. Reuse or extend them instead of continuing to hand-style native controls.
- If the project has no matching custom control and native controls visibly break the visual system, create the smallest reusable control or shared style so core filtering, editing, and bulk actions use one interaction and visual pattern.

### Accessibility

- Fix keyboard path, focus-visible, accessible names, and label associations first.
- Icon buttons, close buttons, and menu buttons need clear `aria-label` or visible text.
- Do not rely on color as the only state indicator.
- Form errors must be associated with their inputs.
- Dialogs must handle focus entry, focus return, Escape, and close button paths.

### Forms / Modals / Navigation

- Form fixes should close the loop: label, help, error, disabled, loading, success.
- Select-like controls should cover trigger, menu/popup, option, selected, disabled, empty, error, focus-visible, keyboard path, and long options.
- Dialogs should first guarantee close, scroll, focus, and destructive confirmation.
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

## 10. Post-Fix Recheck

After each fix, recheck the affected dimension:

- Overflow: relevant viewports, especially 375px, 768px, 1280px.
- Buttons/forms: hover, active, focus-visible, disabled, loading, error.
- Select/dropdown/multiselect/menu: open, close, selected, clear, keyboard path, long options, empty state, mobile.
- Dialogs: open, close, overlay, scroll, focus, mobile.
- Navigation: desktop, mobile, current state, keyboard path.
- Tokens: whether same-type components remain consistent and no new conflict appears.
- Copy/headings: long copy and mixed Chinese/English content.

If the page cannot run, state which rechecks are code-based only.

## 11. Verification

### Engineering Verification

Prefer existing project commands:

- lint
- typecheck
- test
- build

Do not add new tools only for validation. Report anything not verified.

### Visual Verification

- Recheck relevant viewports, at least the widths where issues occurred.
- Compare the fixed area before and after, ensuring no new overlap, overflow, or layout shift.
- When fixing visual tokens, check same-type components remain consistent.

### Interaction Verification

- Recheck hover, active, focus-visible, disabled, loading, error.
- When fixing dialogs, menus, forms, or navigation, recheck open, close, keyboard path, and mobile.
- When replacing native controls or creating custom controls, recheck same-type pages for remaining native-control mixing and verify the new control follows existing tokens.
- Without a browser, explain unverified interaction risk based on code.

## 12. Output Format

```markdown
## Fix Summary

- Fixed:
- Preserved:
- Not handled:

## Fixed Findings

- Finding:
  Change:
  Recheck:

## Changed Files

- `path/to/file`

## Verification

- Ran:
- Not verified:

## Remaining Questions

- Questions needing user confirmation.
```

Be specific. Do not say only "optimized UI". State which finding was fixed, how, and whether it was rechecked.

## 13. Prohibited

- Do not turn fix into redesign unless explicitly requested.
- Do not rewrite a page because of taste.
- Do not force a preset when the user did not choose one.
- Do not perform unrelated refactors.
- Do not change tech stack or introduce dependencies unless necessary and approved.
- Do not delete user content, business logic, or real data.
- Do not fabricate lint/build/browser verification.
- Do not fix one issue by introducing new responsive, state, or accessibility problems.
- Do not introduce global visual changes to repair a local issue.
