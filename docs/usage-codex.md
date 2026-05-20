# Codex Usage

## Install

Recommended npx install:

```bash
npx ai-ui-constitution install --agent codex
```

Skill-only install through the generic skills CLI is also possible after publication, but it does not install this repo's slash command prompts:

```bash
npx skills add frankguodev/ai-ui-constitution --skill ai-ui-constitution -g -a codex
```

This installs:

```text
~/.codex/skills/ai-ui-constitution
~/.codex/commands/ui-audit.md
~/.codex/commands/ui-fix.md
~/.codex/commands/ui-review.md
~/.codex/commands/ui-polish.md
~/.codex/commands/ui-build.md
~/.codex/commands/ui-preset.md
```

## Use In CLI

Open Codex in a project and invoke the workflow explicitly:

```text
/ui-audit current website
/ui-review homepage
/ui-polish reduce AI template feel
/ui-build cinematic-minimal personal homepage
```

Parameter-style usage:

```text
/ui-audit --scope whole-site --strict --viewports 375,768,1280
/ui-review --page homepage --focus layout,typography,radius,states
/ui-polish --scope homepage --preset cinematic-minimal --preserve-content
/ui-fix --severity critical,major --yes
```

If a client does not load slash commands from `~/.codex/commands`, use natural explicit invocation:

```text
Use ai-ui-constitution to audit the current website.
```

Automatic triggering is useful, but explicit invocation is the recommended professional workflow when many skills are installed.
