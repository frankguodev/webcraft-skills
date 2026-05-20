# UI Fix Workflow

Use this workflow to implement fixes from a review or audit.

1. Start with `Critical` issues that make the page unusable or broken.
2. Keep changes scoped and follow the existing framework, components, and styling system.
3. After each fix, check whether it introduces new responsive, state, or layout problems.
4. If visual tokens need unification, extract the smallest useful token set instead of performing an unrelated design-system rewrite.
5. Run the project's existing lint, build, or test commands when available, and report anything that could not be verified.

