# /ui-build

Build a production-quality web page or site with Webcraft Skills.

## Usage

```text
/ui-build [preset] [target]
```

Examples:

```text
/ui-build cinematic-minimal personal homepage
/ui-build saas-clean product landing page
```

## Agent Instructions

Use the `webcraft-ui` skill in Build mode. First apply the skill's Locale Contract: choose exactly one locale from the user's request and target UI context, then read only that locale's build workflow and selected preset when provided. Do not read both English and Chinese references unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency. If no preset is provided, choose based on product context. Generate or modify real project files when possible, then check responsive behavior and interactive states.

