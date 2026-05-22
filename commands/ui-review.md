# /ui-review

Review a page, component, screenshot, or site with Webcraft Skills.

## Usage

```text
/ui-review [scope]
```

Examples:

```text
/ui-review current page
/ui-review homepage and pricing page
```

## Agent Instructions

Use the `webcraft-ui` skill in Review mode. First apply the skill's Locale Contract: choose exactly one locale from the user's request and target UI context, then read only that locale's review workflow and UI audit checklist. Do not read both English and Chinese references unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency. Lead with Critical, Major, Minor findings. Each finding must include location, problem, impact, and fix.

