# missing-states Fix Dry Run

## Context

- Scope: `examples/test-cases/missing-states/index.html`
- Source: `missing-states-review.md`
- Fix level: Critical and Major
- Verification level: Static fix plan, not browser verified

## Fix Plan

1. Add labels and help/error structure to form fields.
   Finding: Inputs rely on placeholder text instead of labels.
   Scope: email input and role select

2. Restore visible keyboard focus.
   Finding: Keyboard focus is intentionally removed.
   Scope: input, select, button focus styles

3. Separate destructive action from primary submit.
   Finding: Destructive action lacks hierarchy and confirmation.
   Scope: `.danger` button and form actions

4. Improve empty state.
   Finding: Empty state is not actionable.
   Scope: `.empty`

## Expected Changes

- Add visible labels associated with inputs.
- Use `:focus-visible` instead of removing focus outlines.
- Add disabled/loading-ready button styles.
- Move destructive action away from the primary submit area or require confirmation.
- Add useful empty-state text and a next action.

## Should Not Change

- Do not turn the form into a new product page.
- Do not introduce a new component library.
- Do not change the core invite flow.

## Recheck

- Keyboard tab order is visible.
- Error/help text remains readable.
- Buttons have primary/destructive hierarchy.
- Empty state gives users a next step.

