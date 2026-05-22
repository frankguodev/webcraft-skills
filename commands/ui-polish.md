# /ui-polish

Polish existing UI while preserving product meaning and codebase style.

## Usage

```text
/ui-polish [scope]
```

Examples:

```text
/ui-polish homepage
/ui-polish reduce AI template feel
```

## Agent Instructions

Use the `webcraft-ui` skill in Polish mode. First apply the skill's Locale Contract: choose exactly one locale from the user's request and target UI context, then read only that locale's polish workflow and directly needed references. Do not read both English and Chinese references unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency. Improve spacing, typography, color hierarchy, radius, border, component states, responsive behavior, and copy restraint. Avoid unrelated redesign.

