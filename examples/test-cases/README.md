# UI Skill Test Cases

These examples are intentionally imperfect. Use them to test whether `ui-audit`, `ui-review`, `ui-polish`, and `ui-fix` can identify and repair realistic AI-generated UI problems without redesigning the page.

## Test Cases

- `rough-landing/`: noisy AI landing page with too many badges, weak hierarchy, inconsistent radius, missing states, and mobile risk.
- `broken-mobile/`: layout with deliberate horizontal overflow and fixed-width cards.
- `missing-states/`: form and actions with weak focus, disabled, loading, empty, and error states.
- `click-affordance/`: clickable divs, chips, card actions, and icon buttons with missing cursor, hover, or focus-visible affordance.
- `hero-layout-balance/`: first-viewport layout balance issues with hollow hero visuals, search overlap, broken section spacing, and oversized mockup regions.
- `existing-style-plus-design-ref/`: existing light product style plus a reference image placeholder, for testing whether build/polish preserves the existing style unless told otherwise.
- `theme-preserving-fix/`: style-rich product page with layout, state, responsive, and control issues that must be fixed without changing the theme.
- `self-audit-rough-ui/`: deliberately rough upload workflow used for end-to-end self-testing audit, fix, and screenshot comparison.

## How To Test

Run audit-style prompts against each case:

```text
使用 audit-ui 对 examples/test-cases/rough-landing/index.html 做 Standard Audit。
```

```text
使用 fix-ui 修复 examples/test-cases/broken-mobile 的 Critical 和 Major，不处理 Minor。
```

Compare the output with each case's `expected-findings.md`.

Each test case must include `before.html`, `index.html`, `expected-findings.md`, and `test.json`. Use `before.html` as the intentionally broken or baseline input, `index.html` as the repaired or target state, `expected-findings.md` as the regression checklist, and `test.json` as machine-readable metadata that links the case to audit mode, checklist modules, expected severities, and recommended viewports.

Screenshots can be generated with `npm run capture:examples`. The script reads each case's `recommendedViewports` from `test.json` and writes before/after PNGs to `examples/reports/assets/` for report evidence and human review.
