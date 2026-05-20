# UI Audit Checklist

Use this checklist to inspect AI-generated web pages, landing pages, application screens, or whole sites. Report findings by `Critical`, `Major`, and `Minor`. Each finding should include location, problem, impact, and fix.

## Layout

- Check for horizontal scrolling, overflow, overlapping elements, and clipped content.
- Verify section spacing is stable and does not jump between cramped and empty areas.
- Check max-width behavior on large screens and side padding on small screens.
- Verify grid, flex, and card layouts collapse properly on mobile.
- Flag excessive cards, nested cards, floating panels, and uncontrolled information density.

## Typography

- Verify H1/H2/H3/body/button/caption hierarchy is clear and restrained.
- Check natural line breaks for Chinese text and overflow behavior for long English words.
- Check line-height, paragraph width, and reading rhythm.
- Flag random font-weight jumps and headings that rely on weight alone to feel premium.
- Check buttons, tags, nav items, and labels for wrapping, edge-touching text, or overflow.

## Color

- Verify clear hierarchy between background, text, borders, surfaces, and accents.
- Check whether the page is dominated by a single hue family in a cheap or template-like way.
- Flag overused accent colors.
- Verify text contrast and disabled-state legibility.
- Flag neon colors, cheap gradients, and attention-grabbing backgrounds.

## Borders, Radius, Shadow

- Verify the radius system is consistent across cards, buttons, inputs, and modals.
- Check whether borders are too heavy, too faint, or inconsistent.
- Flag strong shadows that create a pasted-together floating-panel feel.
- Verify dividers help scanning instead of adding visual noise.

## Components

- Verify buttons include primary, secondary, disabled, loading, hover, active, and focus-visible states where relevant.
- Verify inputs include label or clear context, placeholder, focus, error, and help text.
- Verify tables, lists, and cards support long content, empty data, and varied item counts.
- Verify icon buttons have understandable labels or `aria-label`.
- Verify navigation has current state and a usable mobile alternative.

## Modals And Overlays

- Verify modals can be closed and the overlay is clear but not overpowering.
- Check mobile overflow and internal scrolling.
- Verify focus moves into the modal and returns to the trigger after close.
- Verify destructive actions include confirmation and state feedback.

## Responsive

- Check at least 375px, 768px, and 1280px.
- Verify images, mockups, tables, and code blocks do not overflow.
- Check sticky headers, bottom bars, and toasts do not hide content.
- Verify CTAs remain tappable and touch targets are large enough.

## Motion

- Verify motion is restrained and supports hierarchy or feedback.
- Check hover and active states do not resize or shift layout.
- Flag high-frequency animation, bounce, exaggerated scaling, and attention-seeking transitions.
- Respect reduced motion when motion is present.

## AI Template Smell

- Flag excessive badges, statistics, bento grids, gradient glows, and generic slogans.
- Check whether sections feel stitched together from unrelated templates.
- Verify real content can vary in length without breaking the layout.
- Flag lorem ipsum, fake customers, invented metrics, and meaningless decorative icons.

