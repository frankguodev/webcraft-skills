# Codex Usage

## Install

Recommended npx install:

```bash
npx webcraft-skills install --agent codex
```

This installs:

```text
~/.codex/skills/webcraft-skills
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
/ui-fix Critical and Major issues from the last audit
```

Parameter-style usage:

```text
/ui-audit --scope whole-site --strict --viewports 375,768,1280
/ui-fix --severity critical,major --yes
```

If a client does not load slash commands from `~/.codex/commands`, use natural explicit invocation:

```text
Use webcraft-skills to audit the current website.
```

Automatic triggering is useful, but explicit invocation is the recommended professional workflow when many skills are installed.
