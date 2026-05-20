# Codex Usage

## Install

Current recommended local install:

```powershell
.\scripts\install-codex.ps1
```

Future marketplace / skills CLI install, after publication:

```bash
npx skills add frankguodev/ai-ui-constitution
```

This installs:

```text
~/.codex/skills/ai-ui-constitution
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

If slash commands are not wired in the current client, use natural explicit invocation:

```text
Use ai-ui-constitution to audit the current website.
```

Automatic triggering is useful, but explicit invocation is the recommended professional workflow when many skills are installed.
