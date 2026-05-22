# Test Reports

This folder stores manual or agent-generated reports from running the UI workflows against `examples/test-cases`.

Use `npm run validate:examples` to confirm the test-case folders referenced by these reports still have the required regression files.

Use `npm run capture:examples` to generate before/after screenshots from `examples/test-cases/*/test.json`. Screenshots are written to `examples/reports/assets/` for reports and manual review only; they are not automatically inserted into the root README.

The capture script uses Playwright when it is installed locally:

```bash
npm install -D playwright
npx playwright install chromium
npm run capture:examples
```

Useful scoped runs:

```bash
npm run capture:examples -- --case theme-preserving-fix
npm run capture:examples -- --viewport 375px,1280px
npm run capture:examples -- --dry-run
```

Recommended files:

- `rough-landing-audit.md`
- `broken-mobile-audit.md`
- `missing-states-review.md`
- `click-affordance-audit.md`
- `hero-layout-balance-audit.md`
- `existing-style-build.md`

Current dry-run reports:

- [rough-landing-audit.md](./rough-landing-audit.md)
- [broken-mobile-audit.md](./broken-mobile-audit.md)
- [missing-states-review.md](./missing-states-review.md)
- [existing-style-build.md](./existing-style-build.md)
- [broken-mobile-fix.md](./broken-mobile-fix.md)
- [missing-states-fix.md](./missing-states-fix.md)
- [rough-landing-polish.md](./rough-landing-polish.md)
- [workflow-test-matrix.md](./workflow-test-matrix.md)
- [self-audit-rough-ui-report.md](./self-audit-rough-ui-report.md)
