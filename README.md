# AI UI Constitution

English | [中文](./README_zh_CN.md)

UI skill, rules, command, and prompt pack for Codex, Claude Code, Cursor, v0, Windsurf, Lovable, and other AI coding tools.

AI coding tools can generate code quickly, but their UI often feels too crowded, flashy, inconsistent, or obviously AI-generated.

---

# What Is This?

AI UI Constitution is a UI quality system for AI agents.

It is not a UI framework, design system, component library, or product builder.

The goal is simple:

- build more realistic, restrained web UI
- review rough AI-generated pages
- audit layout, typography, color, borders, radius, modals, responsive behavior, and interaction states
- refine the core reusable skill first, then gradually expand Codex, Claude, Cursor, and plain prompt adapters
- help AI act more like a senior UI/UX and frontend reviewer

The current focus is polishing `skills/ai-ui-constitution`. CLI commands and project configuration examples support that work. Plugin metadata and multi-platform adapters can be added later as distribution layers.

---

# Quick Start

## Current Recommended Install

For now, use the repository scripts to install the local skill while iterating quickly.

When this repo is published to a skills CLI or marketplace, use:

```bash
npx skills add frankguodev/ai-ui-constitution
```

## Codex

```powershell
.\scripts\install-codex.ps1
```

Then use it in a project:

```text
/ui-audit current website
/ui-review homepage
/ui-polish reduce AI template feel
/ui-build cinematic-minimal personal homepage
```

Full parameter-style usage:

```text
/ui-audit --scope whole-site --strict --viewports 375,768,1280
/ui-review --page homepage --focus layout,typography,radius,states
/ui-polish --scope homepage --preset cinematic-minimal --preserve-content
/ui-fix --severity critical,major --yes
/ui-build --preset cinematic-minimal --target landing-page --stack next-tailwind
```

If slash commands are not wired in the current client, use explicit natural invocation:

```text
Use ai-ui-constitution to audit the current website.
```

## Sync Runtime

After polishing `core/`, run:

```bash
npm run sync:runtime
npm run validate
```

This copies presets, workflows, and checklists from `core/` into `skills/ai-ui-constitution/references/`.

## Cursor

For now, manually adapt rules from `core/presets/` and `docs/commands.md` into Cursor Project Rules. A dedicated Cursor adapter can be added after the core skill stabilizes.

## Plain Prompt

Use the presets in `core/presets/`.

## Project Extensions

Create `.ai-ui-constitution/EXTEND.md` and `.ai-ui-constitution/config.json` in the target project to override default audit standards, brand constraints, radius scale, viewports, and visual rules. Templates live in [examples/project-config](./examples/project-config/). See [docs/configuration.md](./docs/configuration.md).

---

# Capabilities

- `/ui-build`: build a page or site
- `/ui-review`: review a page, component, or screenshot
- `/ui-audit`: run a strict UI quality audit
- `/ui-polish`: refine existing UI without changing product meaning
- `/ui-fix`: implement fixes from review or audit results
- `/ui-preset`: list and apply visual presets

---

# Presets

## [cinematic-minimal](./core/presets/cinematic-minimal.md)

Calm cinematic interfaces with:

- restrained motion
- warm dark tones
- spacious layouts
- quiet product feeling

Example:

- [cinematic-minimal personal brand homepage](./examples/cinematic-minimal/index.html)

More presets will be added when they are ready.

---

# Project Structure

```bash
ai-ui-constitution/

├── core/          # platform-neutral presets, checklists, workflows
├── skills/        # installable skills
├── commands/      # explicit CLI command entrypoints
├── scripts/       # install and validation helpers
├── docs/          # architecture and usage docs
├── examples/      # sample page, audit report, project config template
├── README.md
├── README_zh_CN.md
└── LICENSE
```

See [docs/architecture.md](./docs/architecture.md), [docs/commands.md](./docs/commands.md), and [docs/configuration.md](./docs/configuration.md).

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
