# Webcraft Skills

English | [中文](./README_zh_CN.md)

UI audit and fix skill for Codex and Claude Code, for inspecting and repairing rough AI-generated web UI.

AI coding tools can generate code quickly, but their UI often feels too crowded, flashy, inconsistent, or obviously AI-generated.

---

# What Is This?

Webcraft Skills is a UI quality system for AI agents.

It is not a UI framework, design system, component library, or product builder.

The current verified scope is focused: **audit existing UI and fix confirmed audit findings**.

The broader goal is:

- audit layout, typography, color, borders, radius, modals, responsive behavior, and interaction states
- fix rough AI-generated UI based on concrete findings
- eventually build and polish more realistic, restrained web UI
- refine the core reusable skill first, then gradually expand Codex, Claude, Cursor, and plain prompt adapters
- help AI act more like a senior UI/UX and frontend reviewer

The currently tested workflows are audit and fix. Claude Code slash command prompts are included; in Codex, use `/skills`, `$webcraft-skills`, or explicit natural-language invocation.

---

# Quick Start

## Current Recommended Install

Install the skill with npx:

```bash
npx webcraft-skills install --agent codex
```

For Claude Code:

```bash
npx webcraft-skills install --agent claude
```

To install for both:

```bash
npx webcraft-skills install --agent all
```

This installs:

```text
~/.agents/skills/webcraft-skills
~/.codex/skills/webcraft-skills
```

The first path follows the current Codex skills documentation. The second path is written for compatibility with existing Codex and VS Code clients.

For Claude Code, it installs:

```text
~/.claude/skills/webcraft-skills
~/.claude/commands/*.md
```

Then use it in Codex:

```text
Use webcraft-skills to audit the current website.
Use webcraft-skills to fix Critical and Major issues from the last audit.
```

You can also run `/skills` or type `$` in Codex to mention the installed `webcraft-skills` skill.

In Claude Code, use the installed slash command prompts:

```text
/ui-audit --scope whole-site --strict --viewports 375,768,1280
/ui-fix --severity critical,major --yes
```

## Cursor

Cursor support is not part of the stable install path yet. For now, use the audit and fix guidance manually if you know how to configure Cursor Project Rules.

## Plain Prompt

Plain prompt usage is not part of the stable release yet.

## Project Extensions

Create `.webcraft-skills/EXTEND.md` and `.webcraft-skills/config.json` in the target project to override default audit standards, brand constraints, radius scale, viewports, and visual rules.

---

# Capabilities

Stable:

- audit UI quality
- fix confirmed audit findings

Experimental / not yet fully tested:

- review a page, component, or screenshot
- refine existing UI without changing product meaning
- build a page or site
- list and apply visual presets

---

# Presets

The package currently includes one bundled preset: `cinematic-minimal`.

Calm cinematic interfaces with:

- restrained motion
- warm dark tones
- spacious layouts
- quiet product feeling

More presets will be added when they are ready.

---

# Philosophy

Good UI is usually restrained.

This project focuses on helping AI generate interfaces that feel:

- cleaner
- calmer
- more intentional
- more realistic
- less artificial

---

# License

MIT
