# cinematic-minimal

Cinematic minimal UI prompt rules.

Works with:

- Cursor
- Codex
- Claude Code
- Windsurf
- v0
- Lovable

Goal:

Help AI generate interfaces that feel quieter, more restrained, more polished, more atmospheric, and closer to real products.

---

# Example

Example page generated with this preset:

- [cinematic-minimal personal brand homepage](../../examples/cinematic-minimal/index.html)

---

# Usage

Copy the rules below into your AI coding tool, then add your page request.

Example:

```text
Based on the following UI rules, create a personal brand homepage.
```

Or:

```text
Use the following UI style rules to generate a landing page for an AI product.
```

---

# Project Information

Before using this preset, fill in the information below when possible.

If an item does not apply yet, you can remove it or leave it blank.

```text
Page type:
Example: personal brand homepage / product website / SaaS landing page / tool introduction page / portfolio homepage

Name:
Example: Frank Guo / Quietform AI / product name

One-line positioning:
Example: software engineer & AI practitioner / an AI workspace for product decisions

Target audience:
Example: indie builders / small teams / creators / everyday AI users

Core value:
Example: help everyday people build better systems, workflows, and long-term growth

Main content:
Example: personal introduction, working style, projects, writing, contact entry

Hero message:
Example: Build better systems with AI, instead of creating more noise

Primary actions:
Example: learn about my work / view projects / request access / contact me

Visual assets:
Example: product screenshots / workspace atmosphere / no assets, generate an abstract interface

Special requirements:
Example: generate a complete index.html / use React / use Tailwind / do not use external assets
```

---

# Cinematic Minimal Rules

```text
You are now a professional product designer, visual designer, and frontend UI engineer.
Generate the page according to the rules below.

Prioritize the user's provided page type, name, positioning, target audience, core value, hero message, button copy, and visual asset requirements.

Do not invent products, personas, companies, features, or examples that conflict with the user's information.

If the user does not provide complete information, fill in the gaps reasonably based on what is known, while keeping the copy restrained, specific, and credible.

---

# Core Principles

Prioritize:

- clear information
- generous spacing
- sensible layout
- stable hierarchy
- consistent mood
- restrained details
- real usability
- less but better

Every visual element must have a clear purpose.

If an element only exists to make the page look richer, remove it.

Avoid:

- excessive tech aesthetics
- cyberpunk
- neon gradients
- flashy motion
- generic SaaS template feeling
- complex Bento grids
- large glowing areas
- excessive glassmorphism
- visual noise
- cheap gradients
- over-marketing
- meaningless icons, tags, badges, and decorative cards

---

# Visuals, Color, And Background

Use a warm dark cinematic palette.

Suggested backgrounds:

- #0F1115
- #151821
- #1B1F27

You may use small amounts of warm gray, graphite, or deep brown-gray for layering.

Avoid pure black.

Use soft gray-white, warm gray, and low-contrast white for text. Avoid pure white.

Suggested accent colors:

- #F4C84A
- #D9B861
- #D8AE37
- #C59B4A

More broadly, accents should be low-saturation warm yellow, amber, or golden brown, used only in small areas.

Use accent colors only for primary buttons, active states, key data, and small visual anchors.

Avoid saturated blue, purple tech aesthetics, fluorescent colors, rainbow gradients, and large bright color blocks.

The background should have subtle depth, faint atmospheric light, soft dark variation, and a cinematic sense of air. You may use very restrained dark gradients, low-opacity noise texture, soft edge light, and slight depth-of-field feeling, but the background must remain low-presence.

Background texture, grids, and noise should only create atmosphere. They must not become the main visual.

If you use grids, noise, or fabric-like texture, keep opacity extremely low so the page does not become a tech template or texture template.

Avoid:

- empty backgrounds
- large glowing areas
- sci-fi UI
- excessive futurism
- obvious decorative light orbs
- distracting background patterns
- obvious grid backgrounds
- rough noise texture
- backgrounds that feel stronger than the content

The overall color system must feel unified, restrained, and quiet.

---

# Typography And Copy

Typography should feel clean, modern, restrained, and breathable.

Maintain:

- clear hierarchy
- comfortable line height
- relaxed reading rhythm
- enough size contrast, but not too much

Headlines should not be too long, too large, too heavy, or too visually aggressive.

Body text should be soft, readable, and realistic.

Copy should be clear, specific, and restrained. It should not sound like advertising.

Avoid:

- “redefine”
- “ultimate experience”
- “next generation”
- “revolutionary”
- “unlock unlimited potential”
- “empower everyone”
- exaggerated marketing language

Copy should explain what the product does, why it is worth using, and build trust with fewer words.

---

# Layout And Hero

The layout should have cinematic framing, but it should not become a poster.

Keep the page:

- low-density
- made of fewer but more refined elements
- clearly sectioned without feeling rigid
- natural in information flow
- rhythmic in horizontal and vertical spacing

Recommendations:

- keep the maximum content width restrained
- let each section express one core idea
- use fewer cards than a typical template
- create polish through whitespace, not decoration

Avoid:

- crowded layouts
- dashboard-like landing pages
- complex grids
- stacked card-heavy sections
- turning every section into a floating panel
- faking cinematic quality with oversized type and a dark background

The hero section must establish mood first, then communicate function.

The hero is not a poster or a concept visual. It must still feel like a real, usable website homepage.

The hero may include:

- one clear headline
- one restrained supporting paragraph
- one or two main actions
- a quiet but refined product visual or atmospheric image

The hero must have a clear visual hierarchy:

- there should be only one primary visual focus
- headline, product visual, and background must not all be strong at the same time
- if the headline is strong, the product visual and background must recede
- if the product visual is strong, the headline size and background depth must be more restrained

Headline rules:

- the headline may have presence, but it must not become poster-like
- Chinese headlines must break naturally by meaning, not just for visual blocks
- English headlines should not put every short word on its own line
- line height must feel comfortable, not oppressive
- headline width should keep the meaning readable
- avoid making 80px+ hero type the default solution

Product visual rules:

- hero mockups should show one core scenario
- do not put a full dashboard inside the mockup
- do not combine sidebars, complex lists, multiple metrics, and layered cards at once
- mockup information density should stay low and serve explanation, not visual showmanship
- the mockup must not overpower the headline unless it is the only primary visual focus

Avoid in the hero:

- too many badges
- too many CTAs
- too many metrics
- complex stacks of product screenshots
- hard-sell language
- template-like slogans
- huge type with no real information structure
- visual poster feeling instead of a real product page

The main headline should be clear and strong without shouting.

---

# Components, Interaction, And States

Components should be clean, soft, layered, and usable like a real product. Component borders should use appropriate, consistent border radius.

Cards:

- minimal shadow
- low-contrast border
- subtle depth
- not dramatic
- do not wrap every content block in a card
- text inside cards must not feel crowded, overflow, wrap awkwardly, or touch the edges

Buttons:

- refined, quiet, and clear
- clear primary and secondary hierarchy
- text must not wrap, overflow, or touch the edges
- mobile height should be comfortable for touch

All interactive elements must include clear but restrained feedback:

- hover
- active / pressed
- focus-visible
- disabled
- loading, if the action is asynchronous

Feedback may use a slight background lift, subtle border lift, small text color change, or opacity change, but should not move the element.

Avoid:

- glowing buttons
- strong shadows
- complex outlines
- sudden hover scaling
- hover effects that shift surrounding layout
- clickable elements with no feedback
- floating movement on hover

If the page includes forms, search boxes, subscription boxes, login areas, or any input area, include label or clear context, placeholder, focus state, disabled state, error state, and help text or error message.

If the page includes data, lists, asynchronous actions, or user behavior, include loading, empty, error, success, and disabled states, plus a subtle skeleton or loading placeholder when appropriate.

---

# Responsive, Navigation, And Usability

Consider desktop, tablet, and mobile.

Mobile is not just a smaller desktop layout.

On mobile, check:

- navigation is usable
- buttons are easy to tap
- headings wrap naturally
- copy does not feel squeezed
- cards become single-column
- images or product screenshots do not overflow
- section spacing is reduced appropriately
- horizontal padding is sufficient
- fixed elements do not cover content
- modals and overlays are usable

Avoid:

- horizontal scrolling
- text touching screen edges
- buttons that are too small
- navigation disappearing without an alternative
- desktop working while mobile breaks
- modals or overlays that cannot be closed

On desktop, avoid content that is too wide, large screens that feel empty, and unstable multi-column alignment.

Navigation must be genuinely usable, not decorative.

Check:

- logo or site name is clear
- navigation count is restrained
- current page or current section has a clear state
- mobile has a usable menu pattern
- sticky navigation, if used, has restrained background and border

The interface must be usable, not only beautiful.

Ensure:

- text contrast is sufficient
- clickable areas are large enough
- keyboard focus-visible is clear
- icon buttons have understandable labels or aria-labels
- state is not communicated by color alone
- motion does not harm readability

---

# Real Content And Assets

The page must handle real content, not just ideal placeholder copy.

Consider:

- long headings wrapping naturally
- cards with uneven content staying aligned
- different image ratios cropping properly
- lists with more or fewer items still looking good
- mixed-language text staying stable
- numbers, tags, dates, and names not breaking the layout

Avoid lorem ipsum, vague marketing copy, distorted images, text overflow, and layouts that only work with perfect short copy.

If the page needs images or visual assets, choose realistic, quiet, low-noise assets, such as product interface screenshots, dark workspaces, low-saturation environmental images, real devices, and realistic usage scenes.

Avoid obvious AI-generated images, exaggerated abstract 3D graphics, neon tech illustrations, meaningless people photos, and generic stock-business imagery.

Visual assets must increase realism, not decoration.

---

# Motion

Motion must be restrained.

Use:

- soft fades
- slight movement in non-interactive moments
- smooth opacity changes
- subtle hover motion
- slow, low-presence ambient motion

Avoid:

- bouncing animations
- exaggerated scaling
- flashy transitions
- high-frequency motion
- attention-seeking effects
- many elements flying in during scroll

Motion should support atmosphere and hierarchy, not steal attention.

---

# Final Self-Check

After generating the page, automatically check and continue improving:

- Is it too crowded, template-like, over-marketed, or over-decorated?
- Are spacing, typography hierarchy, alignment, color, and motion unified and restrained?
- Does the hero feel like a real website, not a poster or concept mockup with only huge type?
- Does the main headline break naturally and preserve meaning?
- Are the headline, product visual, and background competing for attention?
- Is the hero mockup too dense, or does it include too many lists, metrics, sidebars, and cards?
- Are background grids, noise, textures, or glow effects too strong?
- Do buttons and clickable elements include hover, active, focus, disabled, and loading states?
- Are borders, dividers, and layers clear but restrained?
- Are form, loading, empty, error, and success states complete?
- Does mobile have horizontal scrolling, edge-hugging text, tiny buttons, or unusable navigation?
- Do long headings, long copy, and different image ratios break the layout?
- Do icon buttons have understandable labels or aria-labels?
- Is focus-visible clear?
- Does the page have enough breathing room and feel like a real product?
- Do buttons, cards, tables, and other components have appropriate border radius?

The final page should be cleaner, more unified, more restrained, more polished, and more like a real product.
```

# Output Format Tip

This project provides UI style rules and does not enforce a specific tech stack.

If you want a static page that can be opened directly in the browser, add this after the preset:

```text
Generate a complete index.html file using HTML, CSS, and a small amount of JavaScript. Do not use a framework. The page should be directly previewable in a browser.
```

If you want to use Tailwind, you can add:

```text
Generate a complete index.html file using HTML + Tailwind CSS via CDN + a small amount of JavaScript. Do not use a framework. The page should be directly previewable in a browser.
```

If you are using React, Vue, Next.js, Astro, Tailwind, or another stack, explicitly mention that stack so the AI can generate code that fits your project.
