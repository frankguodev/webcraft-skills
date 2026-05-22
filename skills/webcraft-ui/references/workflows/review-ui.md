# UI Review Workflow

Use this workflow to review UI risk in a PR, diff, local change, single component, screenshot, or specified page area. `review-ui` is a lightweight to medium-depth UI review, not a full audit and not a synonym for `Quick Audit`.

The goal of Review is to answer: "Does this change or local surface contain UI risks worth fixing?" Findings should be short, precise, located, and actionable. Do not turn review into aesthetic commentary or a full audit by default.

## Locale Rule

The skill's Locale Contract has already selected one runtime locale before this workflow is read. Stay in this locale. Do not open the paired `.zh.md` or English workflow/checklist/module files unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency.

## 1. Review Vs Audit Boundary

- `review-ui`: PR / diff / single file / single component / screenshot / local page area / specified change.
- `Quick Audit`: "quickly check this page or site for obvious UI problems."
- `Standard Audit`: main UI risk review for a page, feature, or module.
- `Deep Audit`: full site, pre-launch, strict review, multi-viewport, and systemic issues.

The difference is not only depth; it is the target:

- Review focuses on whether this change or local surface has problems.
- Audit focuses on the UI quality of a page, feature, module, or site.

Use `review-ui` when the user says "review this PR / diff / component / screenshot / area."

Use `Quick Audit` when the user asks to quickly check a homepage, current page, or site for obvious issues. Do not use Review as a smaller Audit.

Review does not score, does not run a full viewport matrix, does not run a full Content Stress Test, and does not output a full Fix Order by default. Report only issues within the current scope that have evidence, impact, and repair value.

If review reveals systemic issues such as site-wide token drift, multiple broken responsive pages, or a missing component state system, suggest upgrading to `audit-ui` without expanding scope silently.

## 2. Confirm Scope

Confirm or infer:

- Scope: PR / diff / single file / single component / screenshot / local page area / specified page.
- Review target: this change, current component, visible screenshot, specified area, or named issue.
- Change type: new UI, component refactor, style adjustment, interaction state, responsive fix, copy change.
- Page type: landing page, dashboard, app screen, form, docs, portfolio, etc.
- Existing visual system: current color, type, spacing, radius, border, component style, and page tone.
- Verification level: code review, screenshot review, browser verification, or mixed review.

If the scope looks like a page or site health check, decide whether it should be `audit-ui` instead. Do not compress an Audit request into Review for convenience.

## 3. Review Modes

### Quick Review

- For quick PR / diff / component / screenshot risk checks.
- Up to 5 findings.
- Report only Critical and obvious Major issues.
- Do not report low-value Minor issues.

### Standard Review

- Default mode.
- Usually 5 to 10 findings.
- Focus on usability, responsive risk, component states, visual consistency, and regression risk inside the current scope.
- Do not output a score.

### PR Review

- Use when the user provides a PR, diff, changed files, or change description.
- Review only issues introduced by the change and adjacent UI that the change can affect.
- Do not surface all old issues unless this change amplifies them.
- Historical issues should be reported only when the change introduces a regression, makes an old issue worse, or the old issue blocks the core experience of this change.
- Do not review unrelated site-wide style issues.

## 4. Input Branches

### PR / Diff

- Inspect changed files and affected surface first.
- Prioritize regression risk: broken layout, lost states, responsive breakpoint changes, style leakage, adjacent component API impact.
- Report only issues related to the change.

### Single Component

- Check size, states, long content, disabled/error/loading, accessible name, and composition variants.
- Consider real usage context, but do not review a component as if it were a whole page.

### Screenshot

- Review only visible visual, layout, hierarchy, copy, and obvious state issues.
- Do not assert hover, focus, loading, dialog close behavior, or keyboard paths that cannot be verified from the screenshot.
- Put interaction questions under `Open Questions`.

### Specified Page Or Page Area

- Review only the named area, feature, or change impact.
- You may check first-screen hierarchy, core action, responsive risk, navigation, CTA, content stress, and obvious visual-system issues.
- Do not run a site-wide consistency review by default.
- If the user actually wants a quick whole-page health check, suggest `Quick Audit`.

### Static Code Review

- Infer risk from structure, CSS, component states, and breakpoints.
- Mark unrun issues as "code-based inference" or "needs browser verification."

## 5. Review Focus

Check in this order:

1. Change-related regression: layout, states, responsive behavior, accessibility, or component contract broken by this change.
2. Usability: core content readable, core action clickable, key path completable.
3. Responsive risk: obvious mobile, tablet, and desktop risk inside the current scope.
4. Component states: hover, active, focus-visible, disabled, loading, error, empty, success.
5. Visual consistency: color, spacing, type hierarchy, radius, border, shadow within the existing system.
6. Content stress: long copy, mixed language, list count changes, varied media ratios, long options, long errors.
7. Obvious AI-template smell: excessive badges, bento grids, gradient blobs, vague slogans, suspicious fake data.

Do not produce issues just to cover every category. Review is valuable because it is accurate, not exhaustive.

## 6. Severity

- `Critical`: core content unreadable, core action unusable, major viewport broken, key flow interrupted, or this change introduces an obvious regression.
- `Major`: significantly hurts usability, responsive stability, consistency, credibility, scanning efficiency, or component reuse safety.
- `Minor`: does not block primary use but lowers polish or local completeness.

Do not output many Minor issues in Review. Unless the user asks for polish, Minor findings should be few and high-signal.

## 7. Finding Quality

A good review finding is short, precise, located, and fixable.

Each finding must:

- Name the location: file, component, page area, screenshot region, or PR diff.
- Give evidence: viewport, state, code structure, changed line, or visible behavior.
- Explain impact: user impact, product quality, regression risk, or component reuse risk.
- Give a repair direction: at least where to fix.

Do not write:

```text
This is not premium enough.
```

Write:

```text
At 375px, the primary button label wraps to two lines and increases the CTA group height, causing a visible jump. Stack the CTA group on small screens or constrain button wrapping.
```

## 8. Output Format

```markdown
## Context

- Scope:
- Review mode:
- Review target:
- Change type:
- Page type:
- Verification level:

## Findings

### Critical

#### 1. Finding title
Location:
Evidence:
Impact:
Fix:

### Major

...

### Minor

...

## Open Questions

- Questions that require user confirmation or runtime verification.

## Suggested Next Step

- What to fix first, whether to enter `fix-ui`, and whether to upgrade to `audit-ui`.
```

Rules:

- Do not output empty severity sections.
- Every finding must have location, evidence, impact, and repair direction.
- For screenshots or unrun pages, do not present inference as fact.
- If no issues are found, say "No Critical / Major UI issues found" and mention residual unverified risk.

If no issues are found, use:

```markdown
## Findings

No Critical / Major UI issues found.

## Residual Risk

- Browser was not run; mobile interaction states were not verified.
```

## 9. After Review

- If findings are clear, scoped, and repairable, suggest `fix-ui`.
- If issues are systemic, affect multiple pages/components/viewports, or require scoring, suggest `audit-ui`.
- If issues depend on product information, brand decisions, or real data, put them under `Open Questions`.
- If no Critical/Major issues are found, report residual risk only; do not force a fix recommendation.

## 10. When To Upgrade To Audit

Suggest `audit-ui` when:

- The user wants a quick check of a whole page, whole site, or pre-launch quality.
- Multiple pages share the same systemic issue.
- Multiple viewports, states, and content stress need strict checking.
- The user needs score, Top Findings, Fix Order, and a complete report.
- The current review scope cannot explain the root cause and a full UI quality pass is needed.

## 11. Prohibited

- Do not turn review into redesign.
- Do not handle a Quick Audit request as Review.
- Do not reject the existing product style because of personal taste.
- Do not force a preset when the user did not choose one.
- Do not output issues without evidence, location, or repair direction.
- Do not expand PR / diff scope unless there is a clear regression risk.
- Do not list low-value Minor issues to appear thorough.
