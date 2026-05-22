# /ui-preset

List, select, or apply Webcraft Skills presets.

## Usage

```text
/ui-preset list
/ui-preset cinematic-minimal
```

## Agent Instructions

Use the `webcraft-ui` skill. First apply the skill's Locale Contract: choose exactly one locale from the user's request and target UI context, then read only that locale's preset references. Do not read both English and Chinese references unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency. Explain when the preset fits, when it does not, and what constraints it applies.

