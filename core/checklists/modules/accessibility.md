# Accessibility High-Risk Module

Use this module to strengthen the accessibility baseline in `ui-audit.md`, especially keyboard paths, screen-reader meaning, visible focus, target size, and understandable states.

## When To Use

- The page includes forms, dialogs, menus, dropdowns, multi-selects, icon buttons, card actions, tables, uploads, or destructive actions.
- The user reports poor keyboard behavior, invisible focus, or unclear icon-only controls.
- The audit is for launch readiness, admin UI, form flows, mobile operation, or high-contrast/accessibility requirements.

## Required Checks

- Keyboard path: the core task must be possible with keyboard, and Tab order should match visual and task order.
- Focus-visible: focus must be visible and not hidden by outline resets, overflow clipping, overlays, or contrast issues.
- Accessible names: icon buttons, menu buttons, close buttons, upload buttons, and card actions need text, aria-label, or equivalent naming.
- Semantic structure: heading order, button/link semantics, label/input association, error association, and table semantics should support understanding.
- State expression: error, success, disabled, current, selected, and loading states must not rely on color alone.
- Target size: core actions should not be too small or dense on touch devices.
- High contrast: in forced-colors / high-contrast modes, text, borders, focus, icons, and state feedback should remain distinguishable.

## Browser Verification

- Use `Tab` through the core path and verify focus order, visible focus, dialog entry/exit, and return-to-trigger behavior.
- Check accessible names for icon buttons and custom controls; use the browser accessibility tree when available.
- For dialogs, menus, dropdowns, and multi-selects, check Escape, close behavior, focus management, and keyboard selection.

## Common Signals

- `outline: none` is used without a replacement focus-visible style.
- Clickable cards, icon buttons, or close buttons lack accessible names.
- A dialog opens while focus stays in the background, or close does not return focus to the trigger.
- Errors are expressed only by red borders, so users do not know what to fix.
- Buttons or chips are too small or dense and create mobile mistap risk.

## Fix Boundaries

- Accessibility is not optional polish; when it affects a core path, elevate it to `Critical` or `Major`.
- Do not hide focus, labels, help text, or errors for visual cleanliness.
- Prefer the project's component-library accessibility APIs before writing one-off page patches.
