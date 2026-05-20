# missing-states Review Dry Run

## Context

- Scope: `examples/test-cases/missing-states/index.html`
- Review mode: Standard Review
- Page type: Form / invite flow
- Verification level: Static code review, not browser verified

## Findings / 问题列表

### Critical

#### 1. Keyboard focus is intentionally removed
Location: `input:focus, select:focus, button:focus`
Evidence: Focus styles set `outline: none` with no replacement `focus-visible` style.
Impact: Keyboard users cannot reliably see where they are in the form.
Fix: Add visible `:focus-visible` styles for inputs, selects, and buttons.

#### 2. Inputs rely on placeholder text instead of labels
Location: email input and role select
Evidence: The email field has only `placeholder="Email address"` and the select has a placeholder-like option.
Impact: Context can disappear while typing and assistive technology has weaker structure.
Fix: Add visible labels or associated accessible labels for each control.

### Major

#### 1. Destructive action lacks hierarchy and confirmation
Location: `.danger` button
Evidence: "Remove all pending invites" appears next to the primary submit action with no confirmation state.
Impact: Users can confuse primary and destructive actions.
Fix: Separate destructive action, add confirmation, and provide disabled/loading states.

#### 2. Empty state is not actionable
Location: `.empty`
Evidence: Empty state only says "No teammates yet".
Impact: Users do not know what to do next.
Fix: Add helpful context and a clear next action.

## Suggested Next Step / 建议下一步

- Enter `fix-ui` for focus-visible, labels, destructive-action hierarchy, and empty state.

