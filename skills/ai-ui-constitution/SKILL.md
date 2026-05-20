---
name: ai-ui-constitution
description: UI quality, generation, review, audit, and polish skill for Codex. Use when building, redesigning, reviewing, auditing, or fixing web pages, websites, landing pages, dashboards, portfolios, frontend prototypes, visual systems, component states, responsive layouts, typography, colors, borders, radius, modals, and AI-generated UI that feels rough, generic, inconsistent, or template-like.
---

# AI UI Constitution

Use this skill as a senior UI/UX reviewer and frontend implementation guide. Treat UI quality as a system: information architecture, layout, typography, color, spacing, border/radius/shadow, interaction states, responsive behavior, accessibility, and visual restraint.

## Operating Modes

- **Build**: create a new page or site. Read `references/workflows/build-ui.md`.
- **Review**: inspect existing UI and report issues. Read `references/workflows/review-ui.md` and `references/checklists/ui-audit.md`.
- **Audit**: deeply inspect a page or site across visual, responsive, interaction, and AI-template-smell dimensions. Read `references/workflows/audit-ui.md` and `references/checklists/ui-audit.md`.
- **Polish**: improve existing UI without changing product meaning. Read `references/workflows/polish-ui.md`.
- **Fix**: implement fixes from review or audit findings. Read `references/workflows/fix-ui.md`.

Chinese reference files are kept alongside the English runtime files. Read the `.zh.md` files when the user is working in Chinese or when the task needs Chinese-specific wording, line-breaking, or aesthetic nuance.

## Presets

- Use `references/presets/cinematic-minimal.md` by default, or `references/presets/cinematic-minimal.zh.md` when the user is working in Chinese.
- Do not force a preset when the product context suggests another style. Prefer usability and product fit over aesthetic purity.

## Required Behavior

1. Respect the existing codebase, framework, component system, and user-provided content.
2. Before major UI work, check whether project-level `.ai-ui-constitution/EXTEND.md` or `.ai-ui-constitution/config.json` exists. If present, apply it after the built-in rules.
3. Prefer concrete implementation or concrete findings over abstract design commentary.
4. For UI review/audit, lead with issues ordered by severity.
5. For UI build/fix/polish, verify responsive behavior and interactive states when possible.
6. Check for AI-generated roughness: generic bento grids, excessive badges, gradient blobs, inconsistent radii, missing states, weak typography, cramped spacing, and fake marketing copy.
7. Avoid inventing product facts, testimonials, metrics, logos, or case studies.

## Output Standards

- Review/audit output: severity, location, problem, impact, fix.
- Build/polish/fix output: changed files, design decisions, verification result.
- Keep language direct and actionable.
