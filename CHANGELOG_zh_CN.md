# 更新日志

[English](./CHANGELOG.md) | 中文

---

## v0.1.2 - 2026-05-22
 - 优化audit和fix功能


## v0.1.1 - 2026-05-21

`webcraft-skills` 的公开发布准备版本。

### 变更

- 项目名和包名从偏 UI 的旧名称调整为 `webcraft-skills`，为后续扩展成更完整的网站 skill pack 预留空间。
- 可安装的 UI skill 改名为 `webcraft-ui`，`webcraft-skills` 继续作为 npm 包名和仓库名。
- 更新公开 README 和 usage 文档，只承诺当前已验证的稳定工作流：audit 和 fix。
- 从面向用户的文档中移除维护者内部实现和同步运行层说明。
- 统一安装器帮助、package metadata 和 skill 路径，使其全部指向新的包名。
- 修正 Codex 安装和使用说明：Codex 同时安装到 `~/.agents/skills` 和 `~/.codex/skills` 以提升兼容性，并通过 `/skills`、`$webcraft-ui` 或明确自然语言调用，而不是依赖本包自定义 slash commands。

### Audit

- 继续打磨 audit checklist，强化原生表单控件、自定义组件复用、响应式断点、后台工作流和真实内容压力检查。
- 明确输入框、选择框、下拉框、多选框、菜单等原生控件在不符合网站风格，或绕过项目已有自定义组件时，应被识别为问题。

### Fix

- 补充控件修复策略：将不协调的原生控件替换或封装为符合项目风格的自定义组件。
- 强化修复后的复检范围：表单、弹窗、菜单、导航、响应式布局和交互状态。

### 发布

- 已通过项目校验和 npm dry-run 打包预检。

## v0.1.0 - 2026-05-20

Skill 化基础版本。

### 稳定能力

- 安装时会同时安装 skill package 和 slash command prompts。
- 当前稳定工作流：
  - Audit：严格排查 UI 质量问题。
  - Fix：根据明确的 audit findings 修复问题。
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
- 明确 audit 和 fix 是当前稳定能力。
- 标注 `/ui-review`、`/ui-polish`、`/ui-build`、`/ui-preset` 为实验性能力，尚未完整测试。
- 从公开 README 中移除维护者使用的同步运行层说明。

## v0.0.1 - 2026-05-16

项目的第一个公开版本。
