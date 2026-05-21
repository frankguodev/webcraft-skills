# UI Polish Workflow

Use this workflow to make existing UI more refined, realistic, and less AI-generated while preserving product meaning, information structure, technical stack, and visual direction.

Polish is restrained refinement, not redesign. Unless the user explicitly asks for redesign or a preset, do not turn the page into another style.

## 1. Diagnose Before Polishing

Before editing, identify the main source of roughness:

- Spacing: cramped/empty rhythm, uncontrolled width, unstable padding.
- Typography: disordered scale, tight line-height, awkward heading wraps.
- Color: weak hierarchy, overused accents, insufficient contrast.
- Border/radius/shadow: radius, border, and shadow do not form a system.
- States: hover, focus-visible, disabled, loading, error missing or rough.
- Responsive: mobile crowding, overflow, small buttons, unstable media ratio.
- Copy/template smell: vague copy, too many badges, decoration over information.

Find the main roughness source first. Do not tweak everywhere without diagnosis.

## 2. Polish Vs Redesign Boundary

`polish-ui` fits:

- The page is basically usable but rough.
- Spacing, typography, color hierarchy, radius, border, shadow, or states are inconsistent.
- The page has AI-template smell but does not need a rebuild.
- The user says "make it more polished", "less AI-looking", "refine details", or "make it feel better without big changes".

`polish-ui` does not fit:

- Product positioning, information architecture, or core copy needs to be rebuilt.
- The whole visual direction is wrong and needs a new style.
- Site-wide component systems are severely broken and need audit/fix.
- The user explicitly asks for a new design.

If redesign is needed, explain why instead of rewriting silently.

## 3. Identify Existing Visual System

Before polishing, identify:

- Color: brand, background, text, accent, status colors.
- Typography: type scale, weight, line-height, heading/body rhythm.
- Spacing: page container, section spacing, component padding, grid gap.
- Radius, border, shadow: shared rules for buttons, cards, inputs, dialogs, menus.
- Component style: buttons, forms, navigation, cards, tables, toasts, dialogs.
- Page tone: marketing, tool, content, admin, personal brand, etc.

All polish should happen inside the existing visual system. Do not default to `cinematic-minimal` or any other preset.

## 4. Preserve Content

Preserve by default:

- Product meaning and business logic.
- Page information structure and main content order.
- User-provided real copy, data, pricing, cases, brand information.
- Existing tech stack, component library, routes, and state logic.
- Existing brand direction and page tone.

You may lightly adjust:

- Vague, repeated, or visibly templated copy.
- Excessive badges, labels, stats, repeated CTAs.
- Decoration that does not support information.

If removing or rewriting content may change product meaning, put it under `Open Questions`.

## 5. Minimal Change Principle

- If tokens can fix it, do not hand-tune every component.
- If local styles can fix it, do not refactor components.
- If removing decoration solves it, do not add new decoration.
- If spacing and hierarchy fix it, do not change the palette.
- If states fix it, do not rebuild the interaction model.
- If existing copy works, do not rewrite product meaning.

Good polish usually comes from convergence, not addition.

## 6. Remove And Converge First

Prioritize:

- Remove meaningless badges, labels, decorative icons, repeated CTAs.
- Reduce excessive cards, borders, shadows, gradients, floating panels.
- Converge color, radius, type scale, and spacing.
- Unify component states instead of adding new visual effects.

Do not make the page richer by default. AI pages usually have too much, not too little.

## 7. Polish Modes

### Light Polish

For small detail passes:

- Adjust spacing, alignment, local radius, border, hover/focus states.
- Do not change information structure.
- Do not change color palette.
- Do not change large components.

### Standard Polish

Default mode:

- Unify local visual tokens.
- Improve typography, section rhythm, component states, responsive details.
- Remove obvious template noise.
- Lightly adjust copy without changing product meaning.

### Deep Polish

For pages that are broadly rough but do not need redesign:

- Systematically converge spacing, type hierarchy, color hierarchy, radius, border, shadow.
- Unify shared component states.
- Recheck content pressure and mobile.
- If information architecture must be rebuilt, stop and suggest redesign or audit.

## 8. Polish Priority

Handle in this order:

1. Usability details: overflow, overlap, unclickable elements, focus-visible, disabled, loading, error.
2. Responsive details: mobile wrapping, button height, image ratio, sticky overlap, dialog scroll.
3. Information hierarchy: first-screen priority, heading/body rhythm, CTA hierarchy.
4. Visual tokens: spacing, font scale, color, radius, border, shadow.
5. AI Template Smell: excessive badges, bento grids, gradient blobs, vague slogans, decorative icons.
6. Microinteraction and polish: hover, active, transition, detail alignment.

Do not start with motion or decoration. Refinement usually comes from clearer hierarchy and a steadier system.

## 9. Polish Strategies

### Spacing

- Normalize page container width, section spacing, and component padding first.
- Keep rhythm stable; avoid cramped/empty jumps.
- Reduce spacing on mobile without making content touch edges.

### Typography

- Reduce the number of levels and control type/weight jumps.
- Improve line-height, paragraph width, and heading wraps.
- Break Chinese headings by meaning, not decorative blocks.
- Do not use huge headings to fake quality.

### Color

- Preserve brand color and limit accent usage.
- Ensure text contrast and state recognition first.
- Use background, border, and text opacity for hierarchy instead of saturated blocks.

### Border / Radius / Shadow

- Converge a small token scale instead of tuning components one by one.
- Buttons, cards, inputs, and dialogs should have related radii.
- Borders should structure, not decorate.
- Reserve shadows for real elevation; do not make the whole page float.

### Components And States

- Add hover, active, focus-visible, disabled, loading, empty, error, success where relevant.
- State feedback must not change layout size.
- Icon buttons need understandable text or `aria-label`.
- Forms, dialogs, and navigation must stay usable before they become polished.

### AI Template Smell

- Remove meaningless badges, labels, decorative icons, repeated CTAs.
- Reduce cards that exist only to fill space.
- Replace vague slogans with real content and clear structure.
- Do not turn the page into another preset style.

## 10. When To Move To Another Workflow

- Core flow unusable, overflow, overlap, missing states: move to `fix-ui`.
- Systemic issues across pages or component systems: move to `audit-ui`.
- PR or local change risk: move to `review-ui`.
- Product positioning, information architecture, or page content needs rebuilding: suggest redesign; do not continue polish.
- User asks for a new page from scratch: move to `build-ui`.

Polish should not own every task. It only improves completion within the current direction.

## 11. Scope Control

- Prefer local fixes and token convergence; avoid unrelated refactors.
- Extract shared styles/components only when repeated issues appear.
- Do not change UI library, routes, or business logic.
- Do not remove necessary information for visual unity.
- Do not add dependencies unless the user agrees and they are necessary.

## 12. Post-Polish Recheck

After polishing, check:

- 375px, 768px, 1280px key viewports.
- Long headings, long button copy, mixed Chinese/English.
- Hover, active, focus-visible, disabled, loading, error.
- Dialogs, menus, forms, and navigation still work.
- Visual tokens are more unified and no new inconsistency was introduced.
- Original page style and product meaning are preserved.

If the page cannot run, state what is code-inferred only.

## 13. Output Format

```markdown
## Polish Summary

- Preserved:
- Adjusted:
- Removed:

## Before / After

- Before:
- After:

## Changed Files

- `path/to/file`

## Verification

- Checked:
- Not verified:

## Remaining Questions

- Questions requiring user confirmation.
```

Do not say only "optimized UI". Explain which visual details were converged, what template noise was removed, and whether the original style was preserved.

## 14. Prohibited

- Do not turn polish into redesign.
- Do not force a preset when the user did not choose one.
- Do not default to dark, cinematic, minimal, or SaaS style.
- Do not add gradients, blobs, cards, or motion to create "premium" feel.
- Do not delete real business information.
- Do not rewrite product positioning or core copy unless requested.
- Do not add dependencies or change component library.
- Do not fabricate browser verification.
