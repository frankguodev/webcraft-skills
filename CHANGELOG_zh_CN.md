# 更新日志

[English](./CHANGELOG.md) | 中文

---

## v0.1.0 - 2026-05-20

第一个面向外部用户的 Skill 化版本。

### 稳定能力

- 新增 npm/npx 安装方式：`npx ai-ui-constitution install --agent codex|claude|all`。
- 安装时会同时安装 `ai-ui-constitution` skill 和 slash command prompts。
- 当前稳定命令：
  - `/ui-audit`：严格排查 UI 质量问题。
  - `/ui-fix`：根据明确的 audit findings 修复问题。
- 补齐 audit / fix 的中英文运行时 reference。
- 增加语言路由：中文用户读取 `.zh.md` reference，英文用户读取英文 reference。

### Audit

- 扩展 UI audit rubric，明确 Critical / Major / Minor 的分级标准。
- 加强后台 / dashboard、响应式断点、交互状态、真实内容压力、可访问性和视觉一致性检查。
- 增加原生控件检查：发现不符合网站风格的原生控件，或已有自定义控件却没有使用的情况。
- 完善 audit workflow：覆盖证据采集、视口检查、代码静态审查、截图审查和整站抽样。

### Fix

- 扩展 fix workflow：增加修复边界、修复优先级、验证步骤和输出格式。
- 增加输入框、选择框、下拉框、多选框、菜单等基础控件的修复策略。
- 增加修复后的复检规则：响应式、组件状态、弹窗、菜单、表单、导航和真实内容压力。

### 文档

- 重写 README，使其更适合外部用户阅读。
- 明确 `/ui-audit` 和 `/ui-fix` 是当前稳定能力。
- 标注 `/ui-review`、`/ui-polish`、`/ui-build`、`/ui-preset` 为实验性能力，尚未完整测试。
- 从公开 README 中移除维护者使用的同步运行层说明。

## v0.0.1 - 2026-05-16

AI UI Constitution 的第一个公开版本。
