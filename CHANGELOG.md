# Changelog

English | [中文](./CHANGELOG_zh_CN.md)

---

## v0.1.1 - 2026-05-21

Public release preparation for `webcraft-skills`.

### Changed

- Renamed the project and package from the UI-specific name to `webcraft-skills`, leaving room for a broader website skill pack.
- Renamed the installable UI skill to `webcraft-ui` while keeping `webcraft-skills` as the npm package and repository name.
- Updated the public README and usage docs to present only the currently verified stable workflows: audit and fix.
- Removed maintainer-only implementation details from public-facing documentation.
- Aligned installer help, package metadata, and skill paths with the new package name.
- Corrected Codex installation and usage guidance: Codex installs the skill under both `~/.agents/skills` and `~/.codex/skills` for compatibility, and uses `/skills`, `$webcraft-ui`, or explicit natural-language invocation instead of package-defined custom slash commands.

### Audit

- Tightened the audit checklist around native form controls, custom component reuse, responsive breakpoints, admin workflows, and content stress.
- Clarified that native inputs, selects, dropdowns, multiselects, and menus should be flagged when they clash with the product style or bypass existing custom controls.

### Fix

- Added clearer repair guidance for replacing or wrapping mismatched native controls with project-appropriate custom components.
- Strengthened post-fix verification for forms, dialogs, menus, navigation, responsive layouts, and interaction states.

### Release

- Verified the skill package with validation and npm dry-run packaging.

## v0.1.0 - 2026-05-20

Skill-focused foundation release.

### Stable

- Installs both the skill package and slash command prompts.
- Stable workflows:
  - Audit: run a strict UI quality audit.
  - Fix: fix confirmed audit findings.
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
- Clearly marks audit and fix as stable.
- Marks `/ui-review`, `/ui-polish`, `/ui-build`, and `/ui-preset` as experimental and not yet fully tested.
- Removed maintainer-only sync/runtime details from public README.

## v0.0.1 - 2026-05-16

Initial public version of the project.
