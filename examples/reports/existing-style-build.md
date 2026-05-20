# existing-style-plus-design-ref Build Dry Run

## Context

- Scope: `examples/test-cases/existing-style-plus-design-ref/`
- Build mode: Page Build
- Existing style: light, quiet product style with muted green brand color and 10px radius
- Reference usage: structure reference only

## Expected Build Behavior

- Preserve the existing light visual system from `index.html`.
- Use `reference-layout.txt` for layout intent: large left title, right stacked feature cards, primary CTA plus secondary link.
- Do not adopt the reference's dark editorial visual style unless the user explicitly requests it.

## Build Notes

- Keep `--bg`, `--text`, `--muted`, `--line`, `--brand`, `--surface`, and `--radius` as the local visual system.
- Add new section or adjust hero structure using existing `.button`, `.card`, `.stack`, and grid language.
- Avoid dark backgrounds, dramatic contrast, image overlays, glow, or cinematic styling.

## Verification Targets

- 375px: cards stack cleanly and CTA/link remain tappable.
- 768px: hero grid does not create awkward narrow columns.
- 1280px: content width stays aligned with the existing page shell.

