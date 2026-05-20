# AI UI Constitution

English | [中文](./README_zh_CN.md)

UI audit and fix skill for Codex and Claude Code, with slash commands for inspecting and repairing rough AI-generated web UI.

AI coding tools can generate code quickly, but their UI often feels too crowded, flashy, inconsistent, or obviously AI-generated.

---

# What Is This?

AI UI Constitution is a UI quality system for AI agents.

It is not a UI framework, design system, component library, or product builder.

The current verified scope is focused: **audit existing UI and fix confirmed audit findings**.

The broader goal is:

- audit layout, typography, color, borders, radius, modals, responsive behavior, and interaction states
- fix rough AI-generated UI based on concrete findings
- eventually build and polish more realistic, restrained web UI
- refine the core reusable skill first, then gradually expand Codex, Claude, Cursor, and plain prompt adapters
- help AI act more like a senior UI/UX and frontend reviewer

The currently tested commands are `/ui-audit` and `/ui-fix`. Other command prompts are present for iteration, but are not yet part of the stable public surface.

---

# Quick Start

## Current Recommended Install

Install the skill and slash commands with npx:

```bash
npx ai-ui-constitution install --agent codex
```

For Claude Code:

```bash
npx ai-ui-constitution install --agent claude
```

To install for both:

```bash
npx ai-ui-constitution install --agent all
```

This installs:

```text
~/.codex/skills/ai-ui-constitution
~/.codex/commands/*.md
```

or:

```text
~/.claude/skills/ai-ui-constitution
~/.claude/commands/*.md
```

Then use it in a project:

```text
/ui-audit current website
/ui-fix Critical and Major issues from the last audit
```

Full parameter-style usage:

```text
/ui-audit --scope whole-site --strict --viewports 375,768,1280
/ui-fix --severity critical,major --yes
```

If a client does not load commands from `~/.codex/commands`, use explicit natural invocation:

```text
Use ai-ui-constitution to audit the current website.
```

## Cursor

Cursor support is not part of the stable install path yet. For now, use the audit and fix guidance manually if you know how to configure Cursor Project Rules.

## Plain Prompt

Plain prompt usage is not part of the stable release yet.

## Project Extensions

Create `.ai-ui-constitution/EXTEND.md` and `.ai-ui-constitution/config.json` in the target project to override default audit standards, brand constraints, radius scale, viewports, and visual rules.

---

# Capabilities

Stable:

- `/ui-audit`: run a strict UI quality audit
- `/ui-fix`: implement fixes from audit results

Experimental / not yet fully tested:

- `/ui-review`: review a page, component, or screenshot
- `/ui-polish`: refine existing UI without changing product meaning
- `/ui-build`: build a page or site
- `/ui-preset`: list and apply visual presets

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
