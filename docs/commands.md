# Command Prompts

Webcraft Skills is designed for explicit prompt-style use. Automatic skill triggering is useful, but explicit invocation is the recommended workflow when many skills are installed.

For Codex, use `/skills`, `$webcraft-ui`, or natural-language invocation such as `Use webcraft-ui to audit the current website.` Codex does not currently load this package's `commands/*.md` files as custom slash commands.

For Claude Code, this package installs command prompt files. Current stable Claude Code command prompts are `/ui-audit` and `/ui-fix`. Text after the command is a prompt convention for the agent, not a separate CLI parser. Other command prompts are included for iteration and are not yet fully tested.

## `/ui-audit`

Strictly inspect a page, app, screenshot, or whole site.

```text
/ui-audit Standard Audit for the whole site
/ui-audit Quick Audit for the homepage, only report obvious issues
/ui-audit Deep Audit for all admin pages before launch
```

Prompt details to include:

- Scope: current page, homepage, whole site, component, screenshot, feature, or module.
- Depth: `Quick Audit`, `Standard Audit`, or `Deep Audit`.
- Focus areas: layout, typography, color, radius, border, shadow, states, modal, responsive, accessibility, or AI-template smell.
- Viewports or devices when important, such as mobile only, 375px, tablet, or desktop.

## `/ui-review`

Status: experimental / not yet fully tested.

Review UI without automatically changing code.

```text
/ui-review --page homepage --focus layout,typography,responsive
```

Output findings by `Critical`, `Major`, and `Minor`, with location, problem, impact, and fix.

## `/ui-polish`

Status: experimental / not yet fully tested.

Refine an existing UI while preserving product meaning.

```text
/ui-polish --scope homepage --preset cinematic-minimal --preserve-content
```

Options:

- `--preset`: visual preset name.
- `--preserve-content`: do not rewrite product claims, data, or positioning.
- `--reduce-ai-template-feel`: remove generic AI UI patterns.

## `/ui-fix`

Implement fixes from an audit or review.

```text
/ui-fix --severity critical,major --yes
```

Options:

- `--severity`: `critical`, `major`, `minor`, or a comma-separated list.
- `--yes`: apply clear deterministic fixes without asking for each one.
- `--scope`: limit fixes to a page, component, or file.

## `/ui-build`

Status: experimental / not yet fully tested.

Build a new page or site.

```text
/ui-build --preset cinematic-minimal --target landing-page --stack next-tailwind
```

Options:

- `--preset`: visual preset name.
- `--target`: page or site type.
- `--stack`: implementation stack, such as `html-css-js`, `next-tailwind`, `astro`, `vue`, or `svelte`.
- `--content`: use provided content instead of inventing copy.

## `/ui-preset`

Status: experimental / not yet fully tested.

Inspect or apply presets.

```text
/ui-preset list
/ui-preset cinematic-minimal --explain
```

