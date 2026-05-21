# AI Template Smell High-Risk Module

Use this module to strengthen AI-template-smell checks in `ui-audit.md`, especially pages that look complete but feel generic, untrustworthy, or unlike a mature product.

## When To Use

- The page contains many badges, bento grids, gradient glows, abstract icons, inflated metrics, vague slogans, or excessive decoration.
- The user says it feels AI-generated, template-like, unrealistic, or unclear.
- Auditing a landing page, product page, portfolio, homepage, or AI-generated site draft.

## Required Checks

- Product clarity: the first viewport should explain what it is, who it is for, what problem it solves, and what to do next.
- Information truthfulness: metrics, logos, testimonials, case studies, rankings, and timelines should be credible and not obviously fabricated.
- Narrative continuity: sections should build one product story, not feel like unrelated templates stitched together.
- Decoration ratio: badges, icons, gradients, bento blocks, mockups, and stat cards should support understanding instead of hiding weak content.
- Specificity: features, scenarios, users, outcomes, and constraints should be concrete, not only "redefine", "unlock potential", or "next generation" claims.
- Visual restraint: decoration should not overpower the main information or turn the page into a poster instead of a usable site.
- Business preservation: fixes should add real structure and remove noise, not invent facts or change positioning casually.

## Browser / Screenshot Verification

- Within about 5 seconds of the first viewport, confirm whether the page subject, target user, and next action are clear.
- Scan the whole page and check whether each section advances understanding instead of repeating cards and slogans.
- Check stats, testimonials, logos, and case studies for credibility; put uncertain claims under `Open Questions`.

## Common Signals

- The first viewport has only a huge title, abstract background, and CTA, with no specific object, scenario, or feature.
- Multiple sections repeat the same pattern: three cards, six icons, four metrics.
- Metrics look impressive but have no source; logos or testimonials look like placeholders.
- A bento grid is visually rich, but every card says only abstract capability.
- The fix direction becomes "make it more premium" instead of adding real information structure.

## Fix Boundaries

- Do not invent customers, numbers, case studies, testimonials, or product facts.
- Prefer removing meaningless decoration, merging repeated sections, and clarifying the target user and core task.
- Visual polish should support information credibility, not hide empty content with stronger decoration.
