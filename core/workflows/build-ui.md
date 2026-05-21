# UI Build Workflow

Use this workflow to create a page, site, component, or new UI inside an existing project. `build-ui` should produce real, usable, maintainable UI that fits the project context, not a fragile concept image.

Build inherits the quality standards from audit, review, polish, and fix: understand the goal and constraints first, create structure second, then self-check and repair obvious issues.

## 1. Confirm Build Scenario

Before building, identify the scenario:

- New static project page, such as a complete `index.html`.
- New page in an existing project, such as Next.js / Astro / Vue / Svelte / React.
- New section in an existing page.
- Single component or component group.
- Prototype page for quickly showing an idea.
- High-fidelity page close to production quality.

Different scenarios have different completion bars. Do not turn a prototype into a large product build, and do not ship a production page that only works with ideal content.

## 2. Build Modes

Choose build depth from the user's goal.

### Prototype Build

- For quickly testing an idea.
- Placeholder content is allowed, but must be labeled.
- Full business states are not required, but obvious responsive breakage is not acceptable.
- Do not add backend, auth, database, or complex state management.

### Page Build

- Default mode.
- Build one realistic usable page.
- Consider responsive behavior, core states, long content, and basic accessibility.
- Good for landing pages, personal pages, product pages, and feature pages.

### Production Build

- For pages close to launch quality.
- Cover key states, error/empty states, mobile, content pressure, and verification.
- Prefer existing components and tokens.
- Do not invent real business facts.

### Component Build

- For a single component or component group.
- Cover variants, states, long content, accessible names, and composition.
- Do not overdesign a component with whole-page standards.

## 3. Questions And Reasonable Filling

Do not mechanically ask for every missing detail, and do not fabricate facts.

Ask first when:

- Page subject, product name, or audience is completely unclear.
- The user wants high fidelity or production quality but core content is missing.
- Existing style, preset choice, or external asset permission will affect implementation direction.
- The request depends on real prices, customers, metrics, cases, compliance, or business promises.

Reasonable filling is allowed for:

- Section order, secondary button copy, empty-state copy, FAQ placeholders.
- Example lists, placeholder image descriptions, non-critical helper copy.
- Mock content in prototype mode.

Reasonable filling must be restrained, concrete, credible, and must not fabricate real facts.

## 4. Pre-Build Checklist

Before editing, confirm:

- Build mode: Prototype / Page / Production / Component.
- Page type.
- Target audience.
- Primary CTA.
- Whether content is real or placeholder.
- Whether this is inside an existing project.
- Existing components, tokens, or visual system.
- Provided design, screenshot, Figma export, or reference page.
- Preset choice.
- Technical constraints, such as no external resources or no new dependencies.

Do not generate a large page when these core points are completely unclear.

## 5. Collect Required Context

Identify:

- Page type: landing page, dashboard, docs, portfolio, form, checkout, settings, admin, etc.
- Subject: product, person, brand, project, or feature.
- Audience: general users, developers, enterprise buyers, creators, internal operators, etc.
- Core task: sign up, buy, read, search, manage, create, contact, download, etc.
- Main content: hero, features, cases, pricing, FAQ, form, list, data, work samples.
- Tech stack: HTML/CSS/JS, React, Next.js, Astro, Vue, Svelte, Tailwind, component library.
- Constraints: no external resources, mobile-first, existing components, brand colors, etc.

If information is missing, fill conservatively, but do not invent real customers, prices, metrics, cases, teams, companies, or product facts.

## 6. Identify Existing Project And Visual System

When building inside an existing project, inspect:

- Page entry points, route structure, and directory conventions.
- Global styles, Tailwind config, design tokens.
- Existing components: Button, Card, Input, Modal, Nav, Table, Toast.
- Current visual system: colors, type, spacing, radius, border, shadow, component states.
- Page tone: marketing, tool, content, admin, personal brand, etc.

Default to the existing system. Do not introduce another style, component library, or preset into an existing project.

## 7. Design Or Reference Image Input

When the user provides a screenshot, design image, Figma export, reference page screenshot, or visual reference, first determine its purpose:

- Structure reference: layout, information order, component relationship.
- Style reference: color, type feel, radius, border, shadow, mood.
- Full design: both structure and style should be followed closely.

### New Project

When no visual system exists, default to the reference image's structure and style.

- Preserve information structure, layout proportion, hierarchy, and component relationships.
- Preserve color, type feel, radius, border, shadow, and overall mood.
- Add necessary responsive, accessibility, and real-content adaptation.
- Do not switch to another style or preset.

### Existing Project

If the user does not explicitly request a style change:

- Use the design image for structure.
- Use its information order and component relationships.
- Keep colors, type, radius, buttons, cards, and forms aligned with the existing site.

If the user says "use this style" or "match this design visually":

- You may implement the current scope in the design style.
- Do not casually change the whole site.
- Explain conflicts if the design style clashes with the existing system.
- If global unification is needed, suggest a later design-system or token migration.

### When Unclear

If the user does not state the reference purpose and the project already has a clear visual system, ask:

```text
Is this image a layout reference, or should the new page also use the visual style from the image?
```

If the user does not want to pause, use the conservative path: structure from the reference, style from the existing project.

## 8. Preset Usage

- Use a preset only when the user explicitly chooses it.
- When no preset is specified, choose a suitable direction from page type and project context.
- If an existing project has a clear visual system, a preset is only reference material and must not override that system.
- Do not default to `cinematic-minimal`.
- Do not force dark, cinematic, minimal, or SaaS styling to create "premium" feel.

Presets are style constraints, not product-fact sources. Do not invent copy, cases, or business data from a preset.

## 9. Page-Type Structure Templates

Choose an information structure from the page type. Templates are starting points, not rigid layouts.

### Landing Page / Marketing Site

- Hero: what it is, who it is for, what it does, next action.
- Problem: current user pain.
- Solution: how the product solves it.
- Features: a few concrete capabilities.
- Proof: real cases, work, metrics, or credible explanation.
- CTA: primary and secondary action.
- FAQ: key objections.

### SaaS / Product Page

- Hero: specific product claim.
- Use Cases: target users and scenarios.
- Feature Detail: key features and workflow.
- Screenshot / Mockup: aid understanding, not decoration.
- Pricing / Trial: only if provided or clearly needed.
- FAQ / Security / Support: based on context.

### Dashboard / Admin

- Overview: core metrics or state.
- Controls: search, filter, sort, time range.
- Main Content: table, list, chart, or task flow.
- Detail / Action: detail panel, bulk action, state feedback.
- Empty / Loading / Error: data states.

### Portfolio / Personal Site

- Hero: person, positioning, point of view.
- Selected Work: curated work, not quantity.
- Process / Thinking: method and judgment.
- About: credible background.
- Contact: clear but not oversold.

### Form / Checkout / Onboarding

- Step Context: current step and remaining path.
- Input Group: clear label, help, error.
- Review / Confirmation: information and risk confirmation.
- Submit State: loading, success, error, disabled.

### Docs / Content Site

- Title / Summary: page subject.
- TOC: contents or anchors.
- Content Sections: clear heading hierarchy.
- Code / Table: scrollable or wrappable on mobile.
- Next Step: next article, related docs, or action.

## 10. Plan Information Structure First

Before visual styling, establish:

- First viewport: what it is, who it is for, what to do next.
- Body content: each section expresses one core idea.
- Action path: primary CTA, secondary CTA, contact/buy/sign-up/continue-reading path.
- Trust information: real cases, work, feature explanation, FAQ, data explanation.
- States and boundaries: loading, empty, error, success, disabled, long content, missing images.

Do not start from background, gradients, cards, or motion. Good pages have structure first and styling second.

## 11. Implementation Strategy

### New Static Page

- Generate a complete runnable file.
- Keep CSS organized; avoid repeated magic numbers.
- Do not depend on unavailable remote assets.
- Mobile, tablet, and desktop should be usable.

### Existing Project Page

- Follow existing directories, components, and styling methods.
- Prefer existing components and tokens.
- Do not introduce new dependencies unless requested or already established.
- Do not break routes or business logic.

### Component

- Support common variants: default, hover, active, focus-visible, disabled, loading.
- Support long content and varied counts.
- Provide accessible names and keyboard paths.
- Do not rely on accidental parent dimensions.

## 12. Avoid Overbuilding

Implement only the requested UI scope.

Do not add by default:

- Login, permissions, user system.
- Database, CMS, backend API.
- Complex state management.
- Payment flow.
- Localization system.
- Theme switching.
- Animation system.
- Large filter/sort/bulk-action systems.
- Mock APIs or complex data layers.

If these are necessary for the experience, add light UI placeholders or explain, but do not expand into a full product.

## 13. Required UI States

Cover relevant states:

- Buttons: primary, secondary, disabled, loading, hover, active, focus-visible.
- Forms: label, placeholder, help, error, disabled, loading, success.
- Lists/data: loading, empty, error, success, pagination or count changes.
- Dialog/menu: open, close, overlay, focus, mobile scroll.
- Navigation: current state, mobile entry, keyboard reachable.

Do not force state examples for unrelated features, but every user action needs a state loop.

## 14. Responsive Requirements

Consider at least:

- 375px mobile
- 768px tablet
- 1280px desktop

Avoid:

- Horizontal scrolling.
- Text touching screen edges.
- Buttons too small or overflowing.
- Images, mockups, tables, or code blocks overflowing.
- Sticky/fixed elements covering content.
- Desktop layouts merely shrinking on mobile.

Use `max-width`, `min-width: 0`, `aspect-ratio`, wrapping, and sensible breakpoints instead of relying on content to stretch containers.

## 15. Content Stress Test

Build for realistic content changes:

- Longer titles.
- Longer button copy.
- Mixed Chinese/English.
- Different image ratios.
- Uneven card content lengths.
- Lists of 0, 1, 3, 10, or 20 items.
- Longer form error messages.
- Very long names, emails, project names, filenames.

Do not build layouts that only fit ideal short copy.

## 16. Self-Check And Fix

After building, self-check in order:

1. Critical issues: unreadable, unclickable, overflow, overlap, broken nav/form/dialog.
2. Fit with existing visual system or selected preset.
3. Spacing, typography, color, radius, border, shadow consistency.
4. Component states.
5. Mobile usability.
6. Long content and real content pressure.
7. AI template smell: excessive badges, bento grids, gradient blobs, vague slogans, fake data.

Fix obvious issues directly. Do not leave fixable defects for the user.

## 17. When To Move To Another Workflow

- User asks to inspect an existing page: use `review-ui` or `audit-ui`.
- Generated result has systemic quality issues: use `audit-ui`.
- Generated result only needs local refinement: use `polish-ui`.
- Generated result has concrete repairable defects: use `fix-ui`.

Build should not own all quality work. It creates a usable first version and performs necessary self-checks.

## 18. Output Format

```markdown
## Build Summary

- Built:
- Build mode:
- Structure used:
- Design/reference used:
- Existing style or preset followed:

## Changed Files

- `path/to/file`

## States Covered

- hover / active / focus-visible / disabled / loading / empty / error / success

## Responsive Checks

- 375px:
- 768px:
- 1280px:

## Verification

- Ran:
- Not verified:
```

Do not output only abstract design advice. Implement when possible and report verification.

## 19. Prohibited

- Do not force a preset when the user did not choose one.
- Do not treat a reference image's visual style as default inside an existing project unless requested.
- Do not introduce another visual system into an existing project.
- Do not invent real customers, prices, metrics, cases, or team information.
- Do not generate pages that only fit ideal short copy.
- Do not make static pretty screenshots while ignoring states and responsive behavior.
- Do not add meaningless cards, badges, icons, gradients, or motion just to fill the page.
- Do not expand a simple page into backend, auth, database, and complex state management.
- Do not add dependencies or change stack unless requested.
- Do not fabricate lint/build/browser verification.
