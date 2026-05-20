# UI Audit Rubric

Use this rubric to inspect AI-generated web pages, landing pages, application screens, or whole sites. The goal is not to express taste preferences; it is to find issues that make the UI feel rough, unusable, untrustworthy, inconsistent, or unlike a mature product.

Report issues by `Critical`, `Major`, and `Minor`. Each issue should include location, evidence, impact, and fix direction.

## Contents

- Usage
- Page Context
- Audit Boundaries
- Deduplication And Priority
- Do Not Report
- Device Matrix
- Evidence Standard
- Good Finding Examples
- Severity
- Scoring Model
- Page-Type Differences
- Layout
- Typography
- Color
- Border, Radius, Shadow
- Components And States
- Navigation
- Forms
- Modals And Overlays
- Responsive
- Motion
- Accessibility
- Content Stress Test
- AI Template Smell
- Fix Priority Reference

## Usage

1. Confirm whether the target is a page, component, screenshot, whole site, or codebase.
2. Check usability and structure before visual consistency; check polish last.
3. Do not reject an existing product direction based on personal taste.
4. If no browser is available, audit statically from code and state which viewports/interactions were not verified.
5. Lead with issues, then fix order. Avoid long summaries before findings.

## Page Context

Before judging UI quality, understand the page context. Infer when necessary, but label the inference.

Identify:

- Page type: landing page, dashboard, app screen, portfolio, docs, form, checkout, admin, marketing site, etc.
- Core task: read, sign up, buy, search, filter, manage, create, contact, download, book, etc.
- Audience: general users, developers, enterprise buyers, creators, internal operators, managers, etc.
- Content density: low-density brand expression, medium-density product explanation, high-density data operation.
- Technical constraints: component library, Tailwind, shadcn, custom CSS, design tokens, breakpoints.
- Design tone: tool, content, product, brand, editorial, admin.

Do not audit every page with the same taste standard. A dashboard should not be treated like a cinematic marketing site; a portfolio should not be treated like enterprise SaaS; a form should not be treated like a poster.

## Audit Boundaries

- Do not reject product positioning because of personal taste.
- Do not recommend turning every page into the same "premium" style.
- Do not suggest unrelated rewrites, framework changes, or component-library changes unless the current implementation blocks the fix.
- Do not fabricate browser verification.
- Do not state unverified issues as facts; use "code suggests", "likely at 375px", or "needs verification".
- Do not remove necessary business information for visual consistency.
- Do not force marketing-page standards onto admin tools, or admin-tool standards onto marketing pages.
- Do not give abstract advice without an executable fix direction.

## Deduplication And Priority

- Report one root cause once, under the most explanatory category.
- If an issue affects both Layout and Responsive, prefer Responsive.
- If an issue affects both Components and Accessibility, prefer Accessibility unless the main issue is missing state feedback.
- If mixed tokens cause radius, border, and shadow inconsistency, report one systemic `Major`, not many `Minor` issues.
- Do not merge blocking `Critical` issues into broad systemic findings.
- Do not force a finding under every category.

## Do Not Report

- Pure subjective preference without usability, clarity, consistency, or trust impact.
- Issues without location, evidence, reproduction path, or reasonable inference.
- "Could be better" comments without a concrete fix direction.
- Low-value Minor findings used only to pad the report.
- Brand, marketing, or copy strategy expansion unrelated to the user's goal.
- Product-decision questions unless marked as `Open Questions`.
- Differences that are intentional hierarchy rather than inconsistency.

## Device Matrix

Default audit should check or infer:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px

Deep audit adds:

- Small mobile: 360px
- Large mobile: 390px or 430px
- Tablet large: 834px
- Desktop large: 1440px
- Wide: 1920px

If the page cannot run, infer from CSS, layout code, and breakpoints, and state which viewports were not verified.

## Evidence Standard

Evidence should include viewport, region, component, state, or code location.

Weak:

```text
Mobile layout is bad.
```

Better:

```text
At 375px, the hero CTA group stays horizontal and the secondary button likely exceeds the container, making the touch target incomplete.
```

Weak:

```text
The color is not premium.
```

Better:

```text
Badges, the primary button, data highlights, and links all use the same saturated purple, so users cannot tell which element is the primary action.
```

## Good Finding Examples

### Example 1: Responsive Critical

```markdown
### 1. Mobile hero CTA overflows
Location: `src/app/page.tsx` hero section
Evidence: At 375px, the CTA group remains horizontal and the secondary button extends about 24px beyond the container.
Impact: Mobile users cannot fully read or tap the secondary action in the primary conversion area.
Fix: Allow the CTA group to wrap or stack on small screens; set stable button min-height; check parent `overflow-x` and horizontal padding.
```

### Example 2: Major System Issue

```markdown
### 1. Radius system is inconsistent across core components
Location: `Button`, `Card`, `Input`, `Dialog`
Evidence: Primary buttons use 999px pill radius, cards use 24px, inputs use 4px, and dialogs use 16px in the same page.
Impact: The UI feels stitched together from different templates instead of one product system.
Fix: Define a compact radius scale, such as button/input 6px, card 8px, modal 10px; reserve pill radius for rare tags or special CTAs.
```

### Example 3: AI Template Smell

```markdown
### 1. Hero relies on generic AI-template decoration instead of product clarity
Location: homepage hero
Evidence: The first viewport has three badges, four stats, an abstract gradient background, and a large mockup, but does not explain who the product is for or what task it solves.
Impact: The page looks complete but is not decision-useful; users get atmosphere instead of product understanding.
Fix: Remove nonessential badges and stats; make the H1 specific; explain target user and core task; keep one primary CTA and one secondary CTA.
```

## Severity

### Critical

Directly blocks use, makes core information unreadable, prevents a core action, or breaks a common viewport.

Typical cases:

- Horizontal scrolling, overflow, or clipped primary content on common mobile widths.
- Main CTA, navigation, form, or dialog is unclickable, unclosable, or unreadable.
- First-screen hierarchy is so unclear that users cannot identify the page subject or next action.
- Core text contrast is too low to read.
- Overlay, modal, sticky header, or bottom bar blocks content with no recovery path.

### Major

Does not completely block use, but significantly reduces professionalism, trust, scanning efficiency, or responsive stability.

Typical cases:

- Missing key states such as hover, focus-visible, disabled, loading, or error.
- Spacing, type hierarchy, radius, borders, or color system is visibly inconsistent.
- Mobile or small desktop is usable but cramped, awkwardly wrapped, or hard to tap.
- Too many cards, bento grids, badges, or stats create template collage.
- The layout only works for ideal short copy and breaks under real content.

### Minor

Does not meaningfully block use, but lowers refinement, rhythm, or finish.

Typical cases:

- Local alignment, spacing, border opacity, or shadow strength is slightly unstable.
- Copy is slightly vague; labels or icons are slightly excessive.
- Motion exists but lacks restraint.
- State feedback works but is not polished.

## Scoring Model

Score each dimension from 0 to 5:

- `Usability`: whether the core task can be completed.
- `Clarity`: whether hierarchy, page subject, and next action are clear.
- `Consistency`: whether spacing, typography, color, radius, border, and components form a coherent system.
- `Responsiveness`: whether mobile, tablet, and desktop are stable.
- `Interaction States`: whether hover, active, focus-visible, disabled, loading, empty, error, and success are covered where relevant.
- `Visual Maturity`: whether the UI feels like a mature product rather than a rough demo.
- `AI Template Smell`: higher score means less AI-template smell.

`Overall` is not a simple average. Critical issues should heavily lower the total; if the core flow is unusable, overall should not exceed 2.5.

## Page-Type Differences

### Landing Page / Marketing Site

- Does the first viewport explain what it is, who it is for, what problem it solves, and what to do next within about 5 seconds?
- Are CTAs too many or poorly ranked?
- Do sections form a coherent story instead of stitched templates?
- Are social proof, metrics, and case studies credible rather than invented?
- Does decoration hide weak information?

### SaaS / Product Page

- Are product capabilities specific rather than abstract value claims?
- Do screenshots, mockups, and feature cards help understanding?
- Do pricing, features, FAQ, and CTA order support trial or purchase decisions?
- Do key features match the target audience?

### Dashboard / Admin

- Is density appropriate for repeated work rather than marketing-style display?
- Are table, filters, search, pagination, sorting, and bulk actions usable?
- Are loading, empty, error, permission, and offline states covered?
- Is data hierarchy clear, or do all metrics have equal weight?
- Is large-screen scanning efficient, and is small-screen degradation reasonable?

### App Screen / Tool

- Is the main task path short and clear?
- Are toolbar, sidebar, panels, and status areas stable under content changes?
- Are quick actions and dangerous actions clearly separated?
- Is feedback timely, and can failures recover?

### Form / Checkout / Onboarding

- Is each step goal clear, and does the user know progress?
- Do validation, errors, loading, and success form a complete loop?
- Do mobile keyboard, inputs, buttons, and errors avoid overlap?
- Are price, privacy, risk, and confirmation information clear?

### Portfolio / Personal Site

- Are the person, work, capability, or viewpoint the main subject?
- Do project cards include real role, time, problem, contribution, and result?
- Does the visual style serve the personal positioning?
- Is contact clear but not overly salesy?

### Docs / Content Site

- Are reading width, table of contents, anchors, code blocks, and search usable?
- Does heading hierarchy support scanning?
- Do code blocks and tables avoid mobile overflow?
- Are current location and next reading path clear?

## Layout

### Critical

- Horizontal scrolling on common 375px mobile width.
- Primary content, CTA, navigation, dialog, or table is clipped.
- Overlap makes text unreadable or controls unclickable.
- First viewport lacks clear priority because title, visual, background, and buttons all compete.

### Major

- Section spacing jumps between cramped and empty.
- Max width is uncontrolled on large screens or side padding is too tight on small screens.
- Grid, flex, or cards shrink on mobile instead of collapsing appropriately.
- Excessive cards, nested cards, floating panels, or uncontrolled information density.

### Minor

- Local alignment, card height, or baselines are slightly inconsistent.
- Section padding and gaps do not follow a stable rhythm.

### Fix Strategy

- Fix overflow, clipping, overlap, and unclickable elements first.
- Then normalize container width, section spacing, and grid collapse rules.
- Remove unnecessary cards and floating panels.

## Typography

### Critical

- Core headings or body text are unreadable, clipped, or overflowing.
- Button, nav, or form labels wrap so badly that meaning is unclear.
- Font size, contrast, or line-height makes primary content hard to read.

### Major

- H1/H2/H3/body/button/caption hierarchy is excessive or disordered.
- Long words, mixed-language text, dates, emails, filenames, or long labels lack a wrapping strategy.
- Line-height is tight, paragraphs are too wide or too narrow, or weights jump randomly.
- Oversized or ultra-bold type is used to fake premium quality.

### Minor

- Labels, captions, or helper text are slightly too small or faint.
- Button text centering or heading/body spacing is slightly off.

### Fix Strategy

- Use a small stable hierarchy: H1, H2, body, caption, button.
- Add natural wrapping and width constraints for long text and labels.
- Prefer line-height, max-width, and font-weight fixes before changing fonts.

## Color

### Critical

- Core text contrast is too low.
- Error, success, disabled, or current states are only expressed by color and are unclear.
- Background image, gradient, or texture overpowers text.

### Major

- Accent color is overused and hierarchy collapses.
- The page is dominated by one hue family in a cheap or template-like way.
- Saturated blue-purple, neon, rainbow gradients, or fake tech colors hurt trust.
- Surfaces, borders, backgrounds, and text lack clear hierarchy.

### Minor

- Secondary text is slightly faint, borders are slightly heavy/light, or hover color shifts are coarse.

### Fix Strategy

- Ensure text contrast and state recognition first.
- Limit accent color to primary CTA, current state, key data, and small visual anchors.
- Use background, border, and text opacity for hierarchy instead of saturated blocks.

## Border, Radius, Shadow

### Critical

- Borders or shadows reduce readability or make interactive boundaries unclear.
- Dialogs, menus, or inputs lack clear boundaries.

### Major

- Cards, buttons, inputs, and dialogs use conflicting radius systems.
- Border weight or color is inconsistent.
- Strong shadows make the page feel like stacked floating panels.
- Glassmorphism, heavy outlines, or glow effects feel cheap.

### Minor

- Small radius differences or divider opacity inconsistencies.

### Fix Strategy

- Define a compact radius scale.
- Use low-contrast borders for structure.
- Reserve shadows for true elevation such as popovers and modals.

## Components And States

### Critical

- Main buttons, navigation, forms, or menus lack usable interaction feedback.
- Form errors are invisible or do not explain recovery.
- Async actions lack loading/disabled feedback and can be double-submitted.
- Icon buttons lack labels, tooltips, or accessible names.

### Major

- Missing key hover, active, focus-visible, disabled, loading, empty, error, or success states.
- Primary, secondary, and destructive actions are not clearly ranked.
- Lists, tables, and cards only handle fixed counts or short text.
- Components shift size on hover or content changes.

### Minor

- State feedback exists but is too loud, too weak, or inconsistent.
- Loading skeletons, empty states, or icon sizing feel rough.

### Fix Strategy

- Add focus-visible, disabled, loading, and error states first.
- Stabilize sizes, borders, radius, and state feedback.
- Hover and active states must not alter layout dimensions.

## Navigation

### Critical

- Mobile navigation disappears without an alternative path.
- Current page, section, or state cannot be identified.
- Sticky navigation hides content or conflicts with modal/toast layers.

### Major

- Navigation has too many items or unclear priority.
- Logo, site name, or primary entry position is unstable.
- Mobile menu cannot close, lacks keyboard path, or has confused overlay behavior.

### Minor

- Current-state feedback is weak.
- Hover/focus details are inconsistent.

### Fix Strategy

- Ensure real navigation paths on desktop and mobile.
- Reduce item count and move secondary entries into menu or footer.
- Sticky nav needs enough background layer without becoming a heavy floating panel.

## Forms

### Critical

- Inputs lack labels or clear context.
- Error states are invisible or do not explain how to fix.
- Submit lacks loading, success, or error feedback.

### Major

- Placeholder is used as the only label.
- Focus state is too weak for keyboard users.
- Help text, errors, disabled, and required states are inconsistent.
- Mobile inputs are too small or too close to screen edges.

### Minor

- Form spacing is slightly loose or cramped.
- Error copy is vague.
- Input and button heights are slightly mismatched.

### Fix Strategy

- Give every input a label or equivalent context.
- Error copy should explain the problem and recovery.
- Form states should form a loop: idle, focus, disabled, loading, error, success.

## Modals And Overlays

### Critical

- Dialog cannot be closed.
- Mobile dialog content overflows with no scrolling.
- Overlay blocks key content with no recovery path.
- Destructive action lacks confirmation or clear feedback.

### Major

- Focus does not enter the dialog or return to the trigger.
- Dialog width, height, or padding is inappropriate on mobile.
- Overlay is too heavy/light and hierarchy is unclear.
- Dialog content behaves like stacked cards instead of one task.

### Minor

- Close button position, footer spacing, or motion is slightly rough.

### Fix Strategy

- Fix close, scroll, focus, and destructive confirmation first.
- Then refine mobile sizing and content hierarchy.
- A dialog should carry one main task.

## Responsive

### Critical

- 375px, 768px, or 1280px breaks a core flow.
- Images, mockups, tables, or code blocks cause horizontal scrolling.
- CTA, navigation, forms, or dialogs are inoperable on mobile.

### Major

- Mobile is merely a shrunken desktop layout.
- Large screens are too wide or too sparse.
- Tablet breakpoint is ignored and creates awkward intermediate layouts.
- Fixed/sticky elements hide content.

### Minor

- Mobile section spacing or image crop is slightly off.

### Fix Strategy

- Check at least 375px, 768px, and 1280px.
- Fix horizontal scrolling and inoperable controls first.
- Use aspect-ratio, min/max width, and stable dimensions for fixed-format UI.

## Motion

### Critical

- Motion blocks reading, clicking, or state understanding.
- Frequent animation, autoplay, or scroll fly-ins prevent stable operation.

### Major

- Hover changes size or position and shifts nearby layout.
- Multiple areas animate at once and compete for attention.
- Reduced motion is ignored.
- Loading motion feels frantic or cheap.

### Minor

- Transition duration or easing is inconsistent.

### Fix Strategy

- Motion should support feedback, hierarchy, or subtle atmosphere.
- Use color, border, or opacity changes for hover/active instead of size/position changes.
- Respect reduced motion.

## Accessibility

### Critical

- Keyboard cannot complete a core action.
- Focus-visible is missing.
- Important icon buttons lack accessible names.
- Important state is expressed only by color.

### Major

- Heading order harms structure.
- Form labels, errors, and controls are not associated.
- Dialog focus management is weak.
- Interactive targets are too small.

### Minor

- Aria-label copy is vague.
- Non-core semantics could be improved.

### Fix Strategy

- Ensure keyboard path, focus-visible, and accessible names first.
- Then fix semantics and state expression.
- Do not rely on color as the only state cue.

## Content Stress Test

AI-generated UI often only fits ideal short copy. Consider real content pressure:

- Long headings, long words, mixed language text.
- Numbers, dates, prices, emails, filenames.
- Button copy expanding from short to long.
- Cards with uneven content lengths.
- Lists with 0, 1, 3, 10, or 20 items.
- Long form error messages.
- Varied image ratios, missing avatars, different screenshot sizes.
- Very long user, organization, or project names.

### Critical

- Real content hides a core action, makes it unclickable, or creates horizontal scrolling.

### Major

- Real content makes card heights chaotic, titles wrap badly, buttons deform, or lists become hard to scan.

### Minor

- Real content remains usable but local rhythm or alignment degrades.

### Fix Strategy

- Set max-width, line-height, and wrapping rules.
- Use aspect-ratio, object-fit, min/max size for media.
- Give buttons and tags stable height and wrapping behavior.

## AI Template Smell

This is not pure taste. It checks whether the page feels assembled from generic AI templates.

### Critical

- The page has only a huge title, abstract background, and CTA, with no real information structure.
- Copy, data, or case studies are obviously fabricated or misleading.
- The first viewport feels like a poster rather than a usable site.

### Major

- Too many badges, stats, bento grids, gradient glows, and decorative icons.
- Sections feel stitched together from unrelated templates.
- Card density, icon count, and effects hide missing information.
- Copy is full of vague claims such as "redefine", "next generation", or "unlock potential".

### Minor

- Local decoration is slightly excessive.
- Some copy is generic or salesy.
- Icons or labels feel interchangeable.

### Fix Strategy

- Remove meaningless decoration and keep elements that support information or action.
- Build trust with real content, clear structure, and stable component systems.
- Copy should answer what it is, who it is for, what problem it solves, and what to do next.

## Fix Priority Reference

1. Fix Critical: overflow, overlap, unclickable, unreadable, broken navigation/dialog/form.
2. Fix Major: responsive degradation, hierarchy, component states, visual tokens, consistency.
3. Fix Content Stress: long copy, real data, varied counts and ratios.
4. Fix AI Template Smell: remove template noise and add real information structure.
5. Fix Minor: alignment, details, motion, copy polish.

Do not start by rewriting the visual style. Good UI repair order is: usable first, clear second, consistent third, refined last.
