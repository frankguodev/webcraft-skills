# Changelog

English| [中文](./CHANGELOG_zh_CN.md)

---

## v0.1.0 - 2026-05-20

First skill-focused release for external users.

### Stable

- Added npm/npx installer: `npx ai-ui-constitution install --agent codex|claude|all`.
- Installs both the `ai-ui-constitution` skill and slash command prompts.
- Stable commands:
  - `/ui-audit`: run a strict UI quality audit.
  - `/ui-fix`: fix confirmed audit findings.
- Added bilingual runtime references for audit and fix workflows.
- Added locale routing so Chinese users read `.zh.md` references and English users read English references.

### Audit

- Expanded the UI audit rubric with clearer Critical / Major / Minor severity definitions.
- Added stronger checks for admin/dashboard workflows, responsive breakpoints, interaction states, content stress, accessibility, and visual consistency.
- Added explicit detection for native controls that do not match the product style or fail to use existing custom controls.
- Added audit workflow guidance for evidence, viewport coverage, code/static inspection, screenshots, and whole-site sampling.

### Fix

- Expanded the fix workflow with scoped repair rules, fix priority, verification steps, and output format.
- Added repair guidance for replacing or wrapping native inputs, selects, dropdowns, multiselects, menus, and other base controls.
- Added post-fix recheck rules for responsive behavior, component states, dialogs, menus, forms, navigation, and content stress.

### Docs

- Reworked README for public users.
- Clearly marks `/ui-audit` and `/ui-fix` as stable.
- Marks `/ui-review`, `/ui-polish`, `/ui-build`, and `/ui-preset` as experimental and not yet fully tested.
- Removed maintainer-only sync/runtime details from public README.

## v0.0.1 - 2026-05-16

Initial public version of AI UI Constitution.
