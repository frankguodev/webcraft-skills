# Claude Code Usage

Recommended npx install:

```bash
npx ai-ui-constitution install --agent claude
```

This installs the skill to `~/.claude/skills/ai-ui-constitution` and command prompts to `~/.claude/commands`.

Skill-only install through the generic skills CLI is also possible after publication, but it does not install this repo's slash command prompts:

```bash
npx skills add frankguodev/ai-ui-constitution --skill ai-ui-constitution -g -a claude-code
```

Then use explicit CLI-style requests:

```text
/ui-audit current website
/ui-polish homepage
Use ai-ui-constitution to review this UI.
```
