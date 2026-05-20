# UI Audit Workflow

Use this workflow for a strict, comprehensive UI quality audit.

1. Inspect the project structure and identify page entry points, global styles, component systems, and routes.
2. If the app can run locally, inspect desktop, tablet, and mobile viewports.
3. Use the checklist to inspect layout, typography, color, border/radius/shadow, components, modals, responsive behavior, motion, accessibility, and AI template smell.
4. Produce a severity-ranked report. `Critical` and `Major` findings must be actionable and locatable.
5. If the user asks for fixes, repair `Critical` issues first, then `Major`, then minor polish.

Audit should discover problems before redesigning. Do not override existing product constraints with personal taste.

