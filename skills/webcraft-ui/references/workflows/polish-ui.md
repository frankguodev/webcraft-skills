# UI Polish Workflow

Use this workflow to make existing UI more refined, realistic, and less AI-generated while preserving product meaning, information structure, technical stack, and visual direction.

Polish is restrained refinement, not redesign. By default, do not change style direction, apply a preset, or rewrite product expression.

## Locale Rule

The skill's Locale Contract has already selected one runtime locale before this workflow is read. Stay in this locale. Do not open the paired `.zh.md` or English workflow/checklist/module files unless the user explicitly asks for translation, bilingual comparison, localization, or locale consistency.

## 1. Diagnose First

Before editing, identify the main source of roughness:

- Spacing: cramped/empty rhythm, uncontrolled width, unstable padding.
- Typography: disordered scale, tight line-height, awkward heading wraps.
- Color: weak hierarchy, overused accents, insufficient contrast.
- Radius / border / shadow: no consistent system.
- States: cursor / pointer, hover, focus-visible, disabled, loading, or error missing or rough.
- Responsive: mobile crowding, overflow, small buttons, unstable media ratio.
- Template smell: vague copy, too many badges, decoration over information.

Find the main problem first. Do not tweak everywhere without diagnosis.

## 2. Boundary

`polish-ui` fits:

- The page is basically usable but rough, unstable, or not realistic enough.
- Spacing, typography, color, radius, border, shadow, states, or template noise need convergence.
- The user says "make it more polished", "less AI-looking", "refine details", or "make it better without big changes".
- Audit has confirmed that the main issues are not blocking use, and remaining work is mostly Minor polish, visual-system convergence, state completion, or AI-template smell.

`polish-ui` does not fit:

- Core flow is unusable, severe overflow/overlap exists, controls are unclickable, dialogs cannot close, or forms cannot submit.
- Product positioning, information architecture, core copy, or visual direction needs to be rebuilt.
- Cross-page component systems are severely broken and need systemic audit / fix.
- The user explicitly asks for a new design.

Blocking issues go to `fix-ui`; systemic issues go to `audit-ui`; direction rebuilds should be explained as redesign work.

## 3. Audit / Fix Handoff

- Source is audit findings: handle only visual maturity, template noise, state details, non-blocking responsive issues, and high-value Minor items; Critical and blocking Major findings go to `fix-ui` first.
- Source is `Focused Audit`: prioritize Top Findings related to visual system, AI-template smell, control consistency, and risk viewports. Do not expand into Deep Polish.
- Source is `Deep Audit`: follow polish items after usability fixes in Fix Order; do not rerun a full audit.
- Findings from review / audit are only diagnostic clues for polish; before acting, confirm they still fit the current polish scope and will not change information structure or repeat content already present on the page.
- User only says "make it more polished" and risk is unclear: do a light diagnosis first; suggest audit when systemic risk appears.

## 4. Preserve And Converge

Preserve by default:

- Product meaning, business logic, information structure, and main content order.
- User-provided real copy, data, pricing, cases, and brand information.
- Existing tech stack, component library, routes, and state logic.
- Existing brand direction, page tone, and visual system.

Converge first:

- Use existing tokens; do not create a second color, radius, shadow, or spacing system for polish.
- Prefer local fixes over component refactors; remove noise instead of adding decoration.
- Polish does not add page-level information modules, data overviews, leaderboards, maps, recommendation areas, or content collections by default; when those are needed, stop and state that the work is beyond polish.
- Converge color, type scale, radius, border, shadow, and spacing.
- Unify component states instead of adding new visual effects.

Lightly adjust vague, repeated, or visibly templated copy only when product meaning stays intact. Put risky content changes under `Open Questions`.

## 5. Polish Modes

### Light Polish

- Scope is usually one page region, one component, or a few same-type components.
- Adjust spacing, alignment, local radius, border, hover/focus states.
- Do not change information structure, color palette, or large components.

### Standard Polish

- Default mode, usually for one page, one main flow, or a tightly related component group.
- Converge local visual tokens, improve typography, section rhythm, component states, and responsive details.
- Remove obvious template noise and lightly adjust copy without changing product meaning.

### Deep Polish

- For a broadly rough page that does not need redesign.
- Allows page-level convergence of spacing, type hierarchy, color hierarchy, radius, border, shadow, and shared states.
- Do not refactor the site-wide component system; cross-page systemic issues should be audited first.

Stop Deep Polish and provide a plan or handoff when:

- Information architecture, product positioning, core copy, or the main conversion path needs to change.
- Cross-page component systems, token systems, or route structure need refactoring.
- Scope grows beyond the current page or flow boundary.
- A new dependency, UI library replacement, or tech-stack change is needed.

## 6. Polish Priority

1. Usability boundary: blocking issues go to `fix-ui`; polish handles only non-blocking states and details.
2. Responsive details: mobile wrapping, button height, media ratio, sticky overlap, dialog scroll.
3. Information hierarchy: first-screen priority, heading/body rhythm, CTA hierarchy.
4. Visual tokens: spacing, font scale, color, radius, border, shadow.
5. AI Template Smell: excessive badges, bento grids, gradient glows, vague slogans, decorative icons.
6. Microinteraction: cursor / pointer, hover, active, focus-visible, transition, icon/text alignment, and hit targets.

Do not start with motion or decoration. Refinement usually comes from clearer hierarchy and a steadier system.

## 7. Strategies

- Spacing: normalize page container, section spacing, and component padding first; reduce mobile spacing without edge crowding.
- Typography: reduce levels, control type/weight jumps, improve line-height, paragraph width, and heading wraps.
- Color: preserve brand color, limit accent usage, and make contrast/state recognition work first.
- Radius / Border / Shadow: converge a small token scale; borders structure, shadows show real elevation.
- Components / States: add cursor / pointer, hover, active, focus-visible, disabled, loading, empty, error, and success for truly clickable elements; state feedback should not change element size, adjacent layout, or scroll position.
- Icons / Click targets: align icon size, stroke width, text baseline, and icon/text spacing; icon buttons and adjacent actions need clear click / touch targets, not only small visual icons.
- AI Template Smell: first delete, weaken, or converge meaningless badges, decorative icons, repeated CTAs, and filler cards; add only small supporting content when it does not repeat information already present on the page and serves the current task.

If token drift has spread across pages, stop page-level polish and suggest audit or design-system cleanup first.

## 8. Reference Audit Modules

Polish does not need to read the full audit checklist. Reference only what is needed:

- `visual-system`: tokens, icons, media, and visual-system convergence.
- `components-states`: state completion.
- `ai-template-smell`: template noise.
- `responsive`: light viewport polish, wrapping, button height, media ratio, and non-blocking overflow.
- `forms-controls`: inputs, selects, dropdowns, multiselects, menus, and form states that affect consistency but do not block the flow.

If module judgment shows the issue affects core task completion, accessibility, or data operations, stop polish and move to `fix-ui` or `audit-ui`.

## 9. Recheck

After polishing, check:

- 375px, 768px, 1280px key viewports.
- Long headings, long button copy, mixed Chinese/English, long labels, badges, chips, and error text.
- Cursor / pointer, hover, active, focus-visible, disabled, loading, and error states for truly clickable elements.
- Icon/text alignment, consistent icon stroke and size, and sufficient icon-button hit targets.
- Dialogs, menus, forms, and navigation still work.
- Visual tokens are more unified and no new inconsistency was introduced.
- Original page style and product meaning are preserved.
- Information duplication: confirm existing lists, stats, categories, tags, or CTAs were not copied into a new decorative or summary area.

When the page can run and the environment allows it, open the target page for a light recheck:

- Align with the user's actual entry: start command, URL / port, route, auth state, and main state.
- If this polish run starts a temporary dev / preview / static server, record command, URL / port, and process information; shut it down after recheck and check whether the target port is still occupied. If reusing a user-started service, record it but do not shut it down.
- On Windows, npm, Next.js, Vite, Storybook, and similar multi-process launch paths, do not rely only on the parent PID returned at startup; if remaining port ownership cannot be confirmed as this polish run's service, do not shut it down and state that in `Temporary service`.
- If screenshots are generated, prefer saving them under `examples/reports/assets/polish/` with one subdirectory per run; keep `before` / `after` screenshots in the same directory, and include page/region, viewport, and phase in filenames, such as `home-375-before.png` and `home-375-after.png`.
- Temporary comparison files, visual drafts, one-off screenshots, verification scripts, or temporary data should be deleted before output by default; retain them only when the user asks or when they are evidence artifacts, then place them under `examples/reports/assets/polish/<polish-run>/` and state them in `Screenshots` or `Temporary service`.
- If browser opening, service startup, or screenshot saving is unavailable, state why and list remaining risk.

## 10. Output Format

```markdown
## Polish Summary
- Source:
- Boundary:
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
- Screenshots:
- Temporary service:

## Remaining Questions
- ...
```

State exactly which visual details were converged, what template noise was removed, and whether the original style was preserved.

Before output, confirm temporary files created during polish were deleted. Retained files must be user-requested, evidence artifacts, or real project changes, and their paths must be listed in the output.

## 11. Prohibited

- Do not turn polish into redesign or force a preset when the user did not choose one.
- Do not default to dark, cinematic, minimal, or SaaS style.
- Do not add gradients, blobs, cards, or motion to create "premium" feel.
- Do not delete real business information, rewrite positioning, or rewrite core copy unless requested.
- Do not add dependencies, change component library, rewrite routes, or change business logic.
- Do not hide overflow, clip content, make text unreadable, or delete necessary information to create fake polish.
- Do not fabricate browser verification.
- Do not leave a dev / preview / static server started only for verification running in the background and occupying a port, unless the user explicitly asked to keep it running.
- Do not shut down a service that existed before polish or cannot be confirmed as owned by this polish run.
