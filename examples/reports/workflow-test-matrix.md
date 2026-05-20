# Workflow Test Matrix

Use this matrix to check whether the workflows behave differently and do not collapse into the same behavior.

## Build

Prompt:

```text
在现有项目中，根据 reference-layout.txt 新增一个首页 section。设计图只作为结构参考，风格沿用现有网站。
```

Expected:

- Uses existing visual style.
- Uses reference for layout only.
- Does not apply cinematic-minimal.
- Does not add backend/auth/database.

## Review

Prompt:

```text
Review examples/test-cases/missing-states/index.html，只看明显 UI 风险，不做完整 audit。
```

Expected:

- Reports missing labels and focus states.
- Does not score.
- Does not produce a full viewport matrix.
- Suggests `fix-ui` for clear issues.

## Audit

Prompt:

```text
对 examples/test-cases/rough-landing/index.html 做 Standard Audit。
```

Expected:

- Reports mobile overflow risk, AI template smell, inconsistent radius, missing states.
- Uses evidence and severity.
- Does not redesign.

## Polish

Prompt:

```text
对 examples/test-cases/rough-landing/index.html 做 Standard Polish，保留现有暗色落地页方向。
```

Expected:

- Reduces noise and inconsistency.
- Keeps dark landing page direction.
- Does not switch presets.
- Does not invent proof.

## Fix

Prompt:

```text
修复 examples/test-cases/broken-mobile/index.html 的 Critical 和 Major，不处理 Minor。
```

Expected:

- Fixes mobile overflow and fixed grids.
- Does not redesign page.
- Rechecks 375/768/1280 risks.

