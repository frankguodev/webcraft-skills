# /ui-fix

Fix UI issues found by review or audit.

## Usage

```text
/ui-fix [issue or scope]
```

Examples:

```text
/ui-fix Critical and Major issues from the last audit
/ui-fix mobile overflow and modal states
```

## Agent Instructions

Use the `ai-ui-constitution` skill in Fix mode. Read the selected-locale fix workflow before editing. Keep edits scoped to confirmed findings. Fix Critical issues first, then Major, then Minor. Verify with the project's existing checks.

