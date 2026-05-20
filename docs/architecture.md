# Architecture

AI UI Constitution is designed as a UI quality skill first, with cross-agent adapters added as distribution layers.

## Current Focus

The first production goal is to make `skills/ai-ui-constitution` excellent:

- precise UI audit criteria
- actionable review output
- reliable build, polish, and fix workflows
- strong references and examples
- easy local installation while the skill is being iterated

Plugin metadata, marketplace files, and adapters are intentionally deferred. Add them back when the core skill is stable enough to distribute.

## Layers

- `core/`: platform-neutral source material: presets, checklists, workflows, and examples.
- `skills/`: installable skill packages. `skills/ai-ui-constitution` is the canonical production skill.
- `commands/`: explicit CLI command prompts for users who prefer stable invocation over automatic triggering.
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

Edit `core/` for platform-neutral rules and `skills/ai-ui-constitution` for the canonical skill runtime. Keep adapter generation out of the main workflow until the skill stabilizes.

Use files without a language suffix, such as `ui-audit.md`, as the runtime defaults for `SKILL.md` and agent execution. Keep `.zh.md` files as first-class source material for Chinese users, Chinese typography and line-breaking concerns, and more precise Chinese aesthetic language.

## Configuration

Installed skills should check for project-level configuration before major UI work:

- `.ai-ui-constitution/EXTEND.md`
- `.ai-ui-constitution/config.json`

These files let a project override the default preset, visual tokens, audit viewports, and local anti-patterns without forking the skill.

Templates live in `examples/project-config/`.
