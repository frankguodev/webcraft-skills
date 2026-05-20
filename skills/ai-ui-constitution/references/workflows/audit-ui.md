# UI Audit Workflow

Use this workflow to inspect the UI quality of a page, component, screenshot, local app, or whole site. `audit-ui` defines the execution process; the `ui-audit` rubric defines the judging criteria.

The goal is to find issues, collect evidence, and recommend fix order. Do not redesign or edit code during audit unless the user explicitly asks to audit and fix.

## Responsibility Boundary

- This workflow defines how to run the audit: choose depth, collect context, verify viewports, capture evidence, structure findings, and decide whether to hand off to fixing.
- For what counts as an issue, severity definitions, page-type differences, and dimension-specific criteria, read `references/checklists/ui-audit.md`.
- Do not mechanically dump every rubric category into the report. Report only issues with evidence, impact, and a worthwhile fix.
- Do not read both English and Chinese references unless the task is translation, bilingual comparison, localization, or consistency checking.

## 1. Choose Audit Mode

Choose depth from the user's request:

- `Quick Audit`: for "quick look" or "any big issues". Report only Critical and obvious Major issues.
- `Standard Audit`: default. Report Critical, Major, and a small number of valuable Minor findings.
- `Deep Audit`: for "thorough audit", "strict audit", "pre-launch", or "find details". Use the full rubric, scoring model, content stress testing, and extra viewports.

Use `Standard Audit` when the user does not specify.

## 2. Collect Context

Before judging, confirm or infer:

- Scope: single page, component, screenshot, whole site, code directory, or localhost.
- Page type: landing page, dashboard, app screen, portfolio, docs, form, checkout, admin, etc.
- Core task: read, sign up, buy, search, filter, manage, create, contact, download, book, etc.
- Audience: general users, developers, enterprise buyers, creators, internal operators, managers, etc.
- Tech constraints: component library, Tailwind, shadcn, custom CSS, design tokens, routes, breakpoints.
- Verification level: browser-tested, static code review, screenshot review, or mixed.

If information is missing, infer from structure and content, but label it as inferred.

## 3. Identify Existing Visual System

First identify the product's current visual system:

- Color: brand, background, text, status, and accent usage.
- Typography: type scale, weight, line-height, heading/body rhythm.
- Spacing: containers, section spacing, component padding, grid gaps.
- Radius, border, shadow: shared rules across buttons, cards, inputs, dialogs, menus.
- Component style: buttons, forms, navigation, cards, tables, dialogs, toasts.
- Product tone: marketing, tool, content, admin, personal brand, etc.

Unless the user asks for a new direction, judge recommendations within the existing visual system. Do not impose a preset as the default taste standard.

## 4. Read Audit Rubric

At runtime, read `references/checklists/ui-audit.md`. Apply:

- Audit boundaries
- Deduplication and priority
- Device matrix
- Evidence standards
- Page-type differences
- Scoring model
- Layout / Typography / Color / Border Radius Shadow / Components / Navigation / Forms / Modals / Responsive / Motion / Accessibility / Content Stress / AI Template Smell

## 5. Choose Inspection Method

### Code Project

- Inspect project structure, page entry points, global styles, components, and routes first.
- Judge risks from component implementation, style rules, breakpoints, and state logic.
- If the app can run, verify key viewports and interactions in the browser.

### Localhost / Runnable Page

- Prefer browser inspection for real layout, scrolling, click, focus, dialogs, dropdowns, inputs, and responsive behavior.
- Record actual viewport and page region.
- Do not make final claims from source alone when the page is runnable.

### Screenshot

- Audit only visible visual, layout, hierarchy, copy, and obvious states.
- Do not assert hover, focus, keyboard paths, dialog closing, dropdown styling, loading states, or other behavior not visible in the screenshot.
- Put interaction questions under `Open Questions`.

### Single Component

- Focus on size, states, long content, variants, accessible names, and relationship to surrounding components.
- Do not audit a single component using whole-page landing-page standards.

### Whole Site

- Sample core paths; do not enumerate every page.
- Cover at least homepage, primary conversion page, core product/function page, and state-heavy pages such as forms, auth, or settings.
- Report systemic issues and Top Findings instead of piling up page-by-page minor problems.

## 6. Inspect Project Structure

For code audits, locate:

- Page entries: `app/`, `pages/`, `src/routes/`, `src/pages/`, `index.html`, etc.
- Global styles: `globals.css`, `app.css`, `tailwind.config.*`, design tokens.
- Components: button, card, input, modal, nav, table, list, toast.
- Routes and page types: home, pricing, dashboard, settings, docs, auth, checkout.
- UI system: shadcn, Radix, MUI, custom components, Tailwind utilities.

Do not give broad visual advice before understanding the project structure.

## 7. Run Viewport Checks

If the project can run, prefer browser verification. Check at least:

- 375px mobile
- 768px tablet
- 1280px desktop

For Deep Audit, add:

- 360px
- 390px or 430px
- 834px
- 1440px
- 1920px

If the page cannot run, infer from CSS, layout code, breakpoints, and component structure. State which viewports and interactions were not verified.

## 8. Capture Evidence

Capture evidence according to inspection method:

- Browser evidence: viewport width, page region, interaction state, scroll position, visible symptom.
- Code evidence: file path, component name, CSS class, breakpoint, state branch, style token.
- Screenshot evidence: visible region, element relationship, clipping, overlap, hierarchy.
- Inferred evidence: risks based on code or screenshot must be labeled as untested or needs verification.

Evidence should support judgment; do not list irrelevant implementation details.

## 9. Audit Order

Check in this order:

1. Critical usability: overflow, overlap, unclickable controls, unreadable content, broken nav/dialog/form.
2. Responsive: mobile, tablet, large desktop, fixed/sticky elements, images, tables.
3. Information hierarchy: first-screen priority, page type, core task clarity.
4. Components and states: hover, active, focus-visible, disabled, loading, empty, error, success.
5. Visual system: spacing, typography, color, radius, border, shadow.
6. Content stress: long text, mixed languages, varied counts, varied image ratios.
7. AI template smell: vague slogans, excessive badges, bento grids, gradient glows, fake data.
8. Minor polish: alignment, rhythm, motion, copy details.

## 10. Control Finding Count

- `Quick Audit`: up to 5 findings, only Critical and obvious Major.
- `Standard Audit`: usually 8 to 12 findings, prioritized as Top Findings.
- `Deep Audit`: may include more, but start with Top Findings before category detail.
- If Critical/Major findings already explain the main risk, do not keep digging for low-value Minor items.
- Do not pad the report to look complete.

## 11. Report Format

Use this structure:

```markdown
## Context

- Scope:
- Audit mode:
- Page type:
- Core task:
- Viewports checked:
- Verification level:
- Constraints:

## Top Findings

- The 3 to 5 highest-risk issues, sorted by impact.

## Critical

### 1. Finding title
Location:
Evidence:
Impact:
Fix:

## Major

...

## Minor

...

## Open Questions

- Questions that need user confirmation or runtime verification.

## Pass Notes

- 1 to 3 high-value notes about areas with no obvious issue.

## Fix Order

1.
2.
3.

## Score

- Usability:
- Clarity:
- Consistency:
- Responsiveness:
- Interaction States:
- Visual Maturity:
- AI Template Smell:
- Overall:
```

Rules:

- `Quick Audit` may omit Score and Minor.
- `Standard Audit` may omit Score unless requested.
- `Deep Audit` should usually include Score.
- Every finding needs concrete evidence.
- Critical and Major findings must be locatable and fixable.
- Omit categories with no findings.
- `Open Questions` is only for questions, not advice.
- `Pass Notes` should be short and high-value.

## 12. Deduplicate And Group

- Report one root cause once.
- Keep blocking usability issues as separate Critical findings.
- Group systemic visual issues, such as mixed radius/border/shadow systems, into one Major finding.
- Do not force coverage of every rubric category.
- If a question needs product judgment, put it under `Open Questions`.

## 13. Handoff To Fix

If the user asks to continue fixing, enter the `fix-ui` workflow.

Before fixing, confirm or infer:

- Whether the user asked for direct code changes.
- Whether only Critical/Major issues should be fixed.
- Whether visual tokens may be adjusted.
- Whether existing visual style and content must be preserved.

Fix order:

1. Critical: unusable, unreadable, unclickable, unclosable issues.
2. Major: responsive behavior, hierarchy, component states, visual tokens.
3. Content Stress: long copy, real data, varied counts and media ratios.
4. AI Template Smell: remove template noise and add real information structure.
5. Minor: alignment, motion, copy, visual polish.

Do not make broad code changes during audit unless the user explicitly asks to audit and fix.

## 14. Stop Conditions

- If you find a blocking Critical issue, stop digging for Minor polish and report risk plus fix order.
- In Standard Audit, stop when Top Findings cover the meaningful risks.
- In Deep Audit, prioritize systemic issues over scattered details.
- If evidence is insufficient, stop inferring and mark it as `Open Questions` or needs verification.

## 15. Prohibited

- Do not fabricate browser verification.
- Do not report issues without location, evidence, and fix direction.
- Do not package personal taste as a defect.
- Do not recommend unrelated technical refactors.
- Do not turn every page into the same style.
- Do not force a preset when the user did not choose one.
- Do not remove necessary business information for the sake of visual consistency.
- Do not state unverified issues as fact.
