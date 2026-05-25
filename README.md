# Webcraft Skills

English | [中文](./README_zh_CN.md)

UI audit and fix skill pack for Codex and Claude Code, focused on inspecting and repairing rough AI-generated web UI.

AI coding tools can generate code quickly, but their UI often feels too crowded, flashy, inconsistent, or obviously AI-generated.

---

# What Is This?

Webcraft Skills is a UI quality system for AI agents.

It is not a UI framework, design system, component library, or product builder.

The current verified scope is focused: **audit existing UI and fix confirmed audit findings**. The installable skill is `webcraft-ui`; the npm package is `webcraft-skills`.

The broader goal is:

- audit layout, typography, color, borders, radius, modals, responsive behavior, and interaction states
- fix rough AI-generated UI based on concrete findings
- eventually build and polish more realistic, restrained web UI
- refine the core reusable skill first, then gradually expand Codex, Claude, Cursor, and plain prompt adapters
- help AI act more like a senior UI/UX and frontend reviewer

The currently tested workflows are audit and fix. Claude Code command prompt files are included, with `/ui-audit` and `/ui-fix` as the recommended stable commands. In Codex, use `/skills`, `$webcraft-ui`, or explicit natural-language invocation.

---

# Stable Scope

Use this package when you want an AI agent to:

- audit an existing page, component, feature flow, screenshot, localhost app, or group of pages
- find UI problems with evidence, severity, affected viewport, and fix direction
- fix confirmed audit/review findings without casually redesigning the product
- preserve the existing visual system, business logic, content, and technical stack
- verify repaired pages with build checks and browser/page-open checks when possible

It is not yet a stable general-purpose website builder. Build, polish, review, preset, Cursor, and plain-prompt adapters are still experimental or documentation-level capabilities.

---

# Self-Test Example

This repository includes a small audit / fix self-test. The rough page intentionally includes horizontal overflow, overlay conflicts, broken media ratio, mismatched native controls, table overflow, and AI-template noise. The fixed version keeps the original purple/cyan gradient and glass-card style while tightening layout, controls, tables, states, and readability.

| Before audit | After fix |
| --- | --- |
| ![Before audit: rough upload review page](./examples/reports/assets/self-audit-before.png) | ![After fix: theme-preserving upload review page](./examples/reports/assets/self-audit-after.png) |

See the full report in [`examples/reports/self-audit-rough-ui-report.md`](./examples/reports/self-audit-rough-ui-report.md), and the test page in [`examples/test-cases/self-audit-rough-ui/`](./examples/test-cases/self-audit-rough-ui/).

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

For Codex, this installs:

```text
~/.agents/skills/webcraft-ui
~/.codex/skills/webcraft-ui
```

The installer writes both Codex-compatible paths to support different current clients.

For Claude Code, it installs:

```text
~/.claude/skills/webcraft-ui
~/.claude/commands/*.md
```

## Usage

In Codex, invoke `webcraft-ui` with natural language. Include the audit depth, target scope, and areas of concern when possible:

```text
Use webcraft-ui to run a Standard Audit on the current website.
Use webcraft-ui to run a Quick Audit on the homepage and only report obvious issues.
Use webcraft-ui to run a Focused Audit on the admin pages before launch, but keep it practical.
Use webcraft-ui to run a Standard Audit on the upload flow, focusing on forms, states, and mobile.
Use webcraft-ui to run a Deep Audit on all admin pages before launch.
```

You can also run `/skills` or type `$` in Codex to mention the installed `webcraft-ui` skill.

In Claude Code, use the installed slash command prompts. Text after the command is a prompt convention for the agent, not a separate CLI parser:

```text
/ui-audit Standard Audit for the whole site
/ui-audit Quick Audit for the homepage, only report obvious issues
/ui-audit Focused Audit for admin pages before launch, keep it practical
/ui-audit Standard Audit for the upload flow, focusing on forms, states, and mobile
/ui-audit Deep Audit for all admin pages before launch
```

### Audit: Find Issues

`Audit` finds issues, provides evidence, and recommends a fix order. It does not edit code by default. Use it when you want to understand UI risk before changing the implementation.

Audit depth:

- `Quick Audit`: fast pass for "take a quick look" requests. Reports only Critical and obvious Major issues, up to 8 findings.
- `Standard Audit`: default practical mode. Reports Critical, Major, and a small number of high-value Minor issues, usually 8 to 16 findings.
- `Focused Audit`: deeper practical audit for serious review without the full cost of Deep Audit. No score by default, up to 32 findings, and expands viewports only when risk signals justify it.
- `Deep Audit`: full pass for launch readiness or strict review. Uses the full audit system, scoring model, content stress tests, broader viewport coverage, and deeper checks.

These audit depths use structured budgets for finding counts, severity scope, scoring expectations, viewport coverage, and output detail, so agents are less likely to make light audits too heavy or deep audits too shallow.

Default viewport checks start from 375px mobile and 1280px desktop. Standard may add 768px when useful. Focused adds tablet, wide desktop, or small-mobile viewports by risk. Deep expands to a broader matrix including small mobile, tablet, large desktop, and wide desktop when the project can be run or inspected that way.

Browser evidence:

- When audit opens a browser, it records viewport, page region, interaction state, scroll position, and visible symptoms.
- If screenshots are saved, audit reports the screenshot directory and key files. Deep Audit defaults to `examples/reports/assets/audit/<audit-run>/`.
- If audit starts a temporary dev / preview / static server, it records URL / port and shuts the temporary service down afterward unless you ask to keep it running.
- If audit cannot run the page, it marks layout, hover, focus, overlay, and responsive conclusions as static inference instead of verified browser results.

Common audit targets:

- Current page: quickly check the page you are editing for obvious layout, hierarchy, responsive, or state issues.
- Specific page: homepage, pricing page, login page, settings page, article page, checkout page.
- Specific feature: upload flow, search and filters, bulk actions, signup/login, edit forms, confirmation dialogs.
- Specific module: all admin pages, user center, content management, order flow, analytics dashboard.
- Specific viewport or device: mobile only, 375px, tablet breakpoints, desktop breakpoints.
- Pre-launch check: run a `Deep Audit` for stricter coverage and a fix priority order.

### Fix: Repair Issues

`Fix` edits code based on confirmed audit/review findings or a user-specified issue. Its goal is to make confirmed problems usable, clear, and consistent, not to casually redesign the whole page.

In Codex:

```text
Use webcraft-ui to fix Critical and Major issues from the last audit.
Use webcraft-ui to fix only the homepage mobile horizontal overflow.
Use webcraft-ui to fix form states, error messages, and loading states in the upload flow.
Use webcraft-ui to fix native select controls in admin pages so they match the existing component system.
Use webcraft-ui to propose a fix plan first, without editing code yet.
```

In Claude Code:

```text
/ui-fix Critical and Major issues from the last audit
/ui-fix only fix homepage mobile horizontal overflow
/ui-fix fix form states, error messages, and loading states in the upload flow
/ui-fix fix native select controls in admin pages so they match the existing component system
/ui-fix propose a fix plan first, without editing code yet
```

Common fix scopes:

- By severity: fix only `Critical`, or fix `Critical` and `Major`.
- By page: fix only the homepage, login page, settings page, checkout page, etc.
- By feature: fix upload, search and filters, bulk actions, edit forms, confirmation dialogs.
- By issue type: fix responsive overflow, component states, form errors, modal close behavior, inconsistent visual tokens.
- By plan: ask for a `fix plan` first, then confirm before editing code.

`Fix` preserves the existing visual system, copy, business logic, and technical stack by default. Unless you explicitly request a redesign or specify a preset, it should not turn the page into a different visual direction.

Fix verification:

- Fix aligns verification with the target the user would actually open: command, URL / port, route, auth state, data state, and operation path when available.
- Build passing is not treated as proof that the page is usable. When the page can run, fix opens the affected page or route and checks for blank screens, runtime errors, error boundaries, missing key assets, broken initialization, and obvious console errors.
- If fix starts a temporary dev / preview / static server, it records the command and URL / port, then shuts the temporary service down after verification.
- If screenshots are generated during fix, they are saved under `examples/reports/assets/fix/<fix-run>/` when possible, with `before` / `after` naming when both phases are captured.
- When fixing findings from `Focused Audit`, fix prioritizes Top Findings, systemic Major issues, and risk viewports without expanding into a Deep-level rewrite.

## Cursor

Cursor support is not part of the stable install path yet. For now, use the audit and fix guidance manually if you know how to configure Cursor Project Rules.

## Plain Prompt

Plain prompt usage is not part of the stable release yet.

## Project Extensions

Create `.webcraft-skills/EXTEND.md` and `.webcraft-skills/config.json` in the target project to override default audit standards, brand constraints, radius scale, viewports, and visual rules.

For user-level defaults and priority rules, see [`docs/configuration.md`](./docs/configuration.md).

---

# Capabilities

Stable:

- audit UI quality with Quick, Standard, Focused, or Deep Audit modes
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
