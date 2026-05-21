# Architecture

Webcraft Skills is designed as a UI quality skill first, with cross-agent adapters added as distribution layers.

## Current Focus

The first production goal is to make `skills/webcraft-skills` excellent:

- precise UI audit criteria
- actionable review output
- reliable build, polish, and fix workflows
- strong references and examples
- easy local installation while the skill is being iterated

Plugin metadata, marketplace files, and adapters are intentionally deferred. Add them back when the core skill is stable enough to distribute.

## Layers

- `core/`: platform-neutral source material: presets, checklists, workflows, and examples.
- `skills/`: installable skill packages. `skills/webcraft-skills` is the canonical production skill.
- `commands/`: Claude Code command prompt files for users who prefer stable invocation over automatic triggering.
- `scripts/`: installation and validation helpers.
- `examples/project-config/`: template project-level extension configuration.

## Product Model

The project is not only a style preset library. It is a UI quality system for agent-generated web products:

- Build new UI.
- Review existing UI.
- Audit whole pages or sites.
- Polish rough AI-generated interfaces.
- Fix issues in code.
- Manage style presets.

## Source Of Truth

Edit `core/` as the source of truth for platform-neutral references. Run `npm run sync:runtime` to copy those references into `skills/webcraft-skills/references/`, which is the canonical installable skill runtime. Edit `skills/webcraft-skills/SKILL.md` directly because it is runtime-specific and is not generated from `core/`.

Do not put maintainer-only paths, sync instructions, or repository architecture notes inside runtime reference files. Runtime files should speak only to the agent executing the skill.

Reference files are maintained as locale pairs:

- Files without a language suffix, such as `ui-audit.md`, are the English/default references.
- `.zh.md` files are first-class Chinese references for Chinese users, Chinese typography and line-breaking concerns, mixed Chinese/English content, and more precise Chinese aesthetic language.
- Runtime skill execution must choose one locale first, then read only the matching workflow/checklist/preset files.
- Do not read both English and Chinese references unless the task is translation, bilingual comparison, localization, or consistency checking between locales.

English and Chinese files do not need to be literal translations, but they should preserve the same capability surface: the same workflows, checklist coverage, preset intent, and operational boundaries.

## Configuration

Installed skills should check for project-level configuration before major UI work:

- `.webcraft-skills/EXTEND.md`
- `.webcraft-skills/config.json`

These files let a project override the default preset, visual tokens, audit viewports, and local anti-patterns without forking the skill.

Templates live in `examples/project-config/`.
