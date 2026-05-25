# /ui-review

Review a PR, diff, component, screenshot, page area, or specified UI change with Webcraft Skills.

## Usage

```text
/ui-review [scope]
```

Examples:

```text
/ui-review current diff
/ui-review settings page filter area
```

## Agent Instructions

Use the `webcraft-ui` skill in Review mode. First apply the skill's Locale Contract: choose exactly one locale from the user's request and target UI context, then read only that locale's review workflow and UI audit checklist. Do not read both English and Chinese references unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency. Keep review scoped to the PR, diff, component, screenshot, page area, or specified change. If the request is a whole-page, whole-site, or pre-launch quality check, suggest Audit instead. Lead with Critical, Major, Minor findings. Each finding must include location, problem, impact, and fix.

