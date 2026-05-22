# /ui-fix

Fix UI issues found by review or audit.

## Usage

```text
/ui-fix [issue or scope]
```

Examples:

```text
/ui-fix Critical and Major issues from the last audit
/ui-fix mobile overflow and modal states
```

## Agent Instructions

Use the `webcraft-ui` skill in Fix mode. First apply the skill's Locale Contract: choose exactly one locale from the user's request and target UI context, then read only that locale's fix workflow and any directly needed references in the same locale. Do not read both English and Chinese references unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency. Keep edits scoped to confirmed findings. Fix Critical issues first, then Major, then Minor. Follow the fix safety loop: keep the page runnable, run existing checks when available, repair any new build/runtime/page-load error introduced by the fix before finishing, and clearly report anything not verified.

