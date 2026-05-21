# Codex Usage

## Install

Recommended npx install:

```bash
npx webcraft-skills install --agent codex
```

This installs:

```text
~/.agents/skills/webcraft-skills
~/.codex/skills/webcraft-skills
```

The first path follows the current Codex skills documentation. The second path is written for compatibility with existing Codex and VS Code clients.

## Use In CLI

Open Codex in a project and invoke the skill explicitly:

```text
Use webcraft-skills to audit the current website.
Use webcraft-skills to fix Critical and Major issues from the last audit.
```

You can also run `/skills` or type `$` to mention the installed `webcraft-skills` skill.

Detailed usage:

```text
Use webcraft-skills to run a strict audit for the whole site at 375, 768, and 1280 px.
Use webcraft-skills to fix only Critical and Major issues from the last audit.
```

Automatic triggering is useful, but explicit invocation is the recommended professional workflow when many skills are installed.
