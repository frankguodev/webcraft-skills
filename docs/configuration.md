# Configuration

Projects can extend AI UI Constitution without editing the installed skill.

## Project Config

Create:

```text
.ai-ui-constitution/
├── EXTEND.md
├── config.json
└── presets/
    └── brand.md
```

## User Config

Create:

```text
~/.ai-ui-constitution/
├── EXTEND.md
└── presets/
```

## Priority

When both user-level and project-level configuration exist, apply them in this order:

1. Built-in skill rules.
2. User-level `~/.ai-ui-constitution/EXTEND.md`.
3. Project-level `.ai-ui-constitution/EXTEND.md`.
4. Explicit user instructions in the current task.

Later layers override earlier layers.

## `EXTEND.md`

Use `EXTEND.md` for human-written design preferences:

```markdown
# UI Extensions

- Use 8px card radius and 6px button radius.
- Prefer neutral backgrounds over saturated brand surfaces.
- Do not use decorative gradient blobs.
- Default audit viewports: 375, 768, 1280, 1440.
- Always check modal focus and mobile overflow.
```

## `config.json`

Use `config.json` for structured defaults:

```json
{
  "defaultPreset": "cinematic-minimal",
  "defaultViewports": [375, 768, 1280, 1440],
  "auditStrictness": "normal",
  "visualTokens": {
    "radius": {
      "card": "8px",
      "button": "6px",
      "input": "6px",
      "modal": "10px"
    },
    "avoid": [
      "decorative gradient blobs",
      "excessive bento grids",
      "neon glow"
    ]
  }
}
```

