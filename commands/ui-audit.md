# /ui-audit

Run a strict visual, responsive, interaction, and AI-template-smell audit.

## Usage

```text
/ui-audit [scope]
```

Examples:

```text
/ui-audit whole site
/ui-audit current localhost app
```

## Agent Instructions

Use the `webcraft-ui` skill in Audit mode. First apply the skill's Locale Contract: choose exactly one locale from the user's request and target UI context, then read only that locale's audit workflow, UI audit checklist, and relevant modules. Do not read both English and Chinese references unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency. Inspect layout, typography, color, borders, radius, shadow, components, forms, modals, responsive behavior, motion, accessibility, content stress, and AI template smell. Prefer browser verification when available.

