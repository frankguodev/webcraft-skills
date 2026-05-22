---
name: webcraft-ui
description: UI quality, generation, review, audit, and polish skill for Codex. Use when building, redesigning, reviewing, auditing, or fixing web pages, websites, landing pages, dashboards, portfolios, frontend prototypes, visual systems, component states, responsive layouts, typography, colors, borders, radius, modals, and AI-generated UI that feels rough, generic, inconsistent, or template-like.
---

# Webcraft UI

Use this skill as a senior UI/UX reviewer and frontend implementation guide. Treat UI quality as a system: information architecture, layout, typography, color, spacing, border/radius/shadow, interaction states, responsive behavior, accessibility, and visual restraint.

## Locale Contract

Choose exactly one runtime locale before reading reference files:

- Use `zh` when the user's current request is primarily Chinese, when the target UI/copy is Chinese, or when the task depends on Chinese typography, Chinese line-breaking, Chinese UX wording, or mixed Chinese/English content.
- Use `en` for English requests and for requests where the user does not indicate a Chinese context.
- Do not choose locale from the repository's available files, package metadata, or file names. Choose from the user's request and the target UI/content context.
- After choosing `zh`, read only `.zh.md` workflow/checklist/module/preset references. Do not also read the English pair.
- After choosing `en`, read only non-`.zh.md` workflow/checklist/module/preset references. Do not also read the Chinese pair.
- Read both locales only when the user explicitly asks for translation, bilingual comparison, localization, or consistency checking between locales.
- Reply in the user's language by default. Keep stable command names, file paths, mode names, and severity labels as written in the references when useful.

## Operating Modes

Reference files are paired by locale. For the selected locale, read only the matching workflow/checklist/preset files:

- **Build**: create a new page or site. Read `references/workflows/build-ui.md` or `references/workflows/build-ui.zh.md`.
- **Review**: inspect existing UI and report issues. Read `references/workflows/review-ui.md` or `references/workflows/review-ui.zh.md`, plus `references/checklists/ui-audit.md` or `references/checklists/ui-audit.zh.md`.
- **Audit**: deeply inspect a page or site across visual, responsive, interaction, and AI-template-smell dimensions. Read `references/workflows/audit-ui.md` or `references/workflows/audit-ui.zh.md`, plus `references/checklists/ui-audit.md` or `references/checklists/ui-audit.zh.md`.
- **Polish**: improve existing UI without changing product meaning. Read `references/workflows/polish-ui.md` or `references/workflows/polish-ui.zh.md`.
- **Fix**: implement fixes from review or audit findings. Read `references/workflows/fix-ui.md` or `references/workflows/fix-ui.zh.md`.

## Presets

- Use the preset file that matches the selected locale: `references/presets/cinematic-minimal.md` for English or `references/presets/cinematic-minimal.zh.md` for Chinese.
- Do not force a preset when the product context suggests another style. Prefer usability and product fit over aesthetic purity.

## Required Behavior

1. Respect the existing codebase, framework, component system, and user-provided content.
2. Before major UI work, check whether project-level `.webcraft-skills/EXTEND.md` or `.webcraft-skills/config.json` exists. If present, apply it after the built-in rules.
3. Prefer concrete implementation or concrete findings over abstract design commentary.
4. For UI review/audit, lead with issues ordered by severity.
5. For UI build/fix/polish, verify responsive behavior and interactive states when possible.
6. Check for AI-generated roughness: generic bento grids, excessive badges, gradient blobs, inconsistent radii, missing states, weak typography, cramped spacing, and fake marketing copy.
7. Avoid inventing product facts, testimonials, metrics, logos, or case studies.

## Output Standards

- Review/audit output: severity, location, problem, impact, fix.
- Build/polish/fix output: changed files, design decisions, verification result.
- Keep language direct and actionable.
