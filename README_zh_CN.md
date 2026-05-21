# Webcraft Skills

[English](./README.md) | 中文

适合 Codex 和 Claude Code 的 UI audit / fix skill，用于排查和修复粗糙的 AI 生成网页 UI。

AI Coding 工具已经很会写代码，但生成的 UI 经常会显得太拥挤、太花哨、层级混乱，或者有很强的“AI 模板感”。

---

# 这是什么？

Webcraft Skills 是一个面向 AI Agent 的网页 UI 质量系统。

它不是 UI 框架、设计系统、组件库，也不是可视化建站工具。

当前已验证范围很明确：**审查现有 UI，并根据明确的 audit findings 修复问题**。

更完整的长期目标是：

- 排查布局、字体、颜色、边框、圆角、弹窗、响应式和交互状态
- 根据具体 findings 修复粗糙的 AI 生成 UI
- 逐步支持生成更真实、更克制的网页
- 先打磨可复用的核心 Skill，再逐步扩展 Codex / Claude / Cursor 等平台适配
- 让 AI 不只会生成 UI，也会像资深 UI/UX + 前端 reviewer 一样修 UI

当前已测试工作流是 audit 和 fix。Claude Code 会安装 slash command prompts；Codex 中请使用 `/skills`、`$webcraft-skills` 或明确的自然语言调用。

---

# Quick Start

## 当前推荐安装

使用 npx 安装 skill：

```bash
npx webcraft-skills install --agent codex
```

Claude Code 使用：

```bash
npx webcraft-skills install --agent claude
```

同时安装 Codex 和 Claude Code：

```bash
npx webcraft-skills install --agent all
```

这会安装到：

```text
~/.agents/skills/webcraft-skills
~/.codex/skills/webcraft-skills
```

第一个路径对应当前 Codex skills 文档；第二个路径用于兼容已有 Codex 和 VS Code 客户端。

Claude Code 会安装到：

```text
~/.claude/skills/webcraft-skills
~/.claude/commands/*.md
```

然后在 Codex 中使用：

```text
Use webcraft-skills to audit the current website.
Use webcraft-skills to fix Critical and Major issues from the last audit.
```

也可以在 Codex 中运行 `/skills`，或输入 `$` 来选择已安装的 `webcraft-skills` skill。

在 Claude Code 中，可使用已安装的 slash command prompts：

```text
/ui-audit --scope whole-site --strict --viewports 375,768,1280
/ui-fix --severity critical,major --yes
```

## Cursor

Cursor 暂时不属于稳定安装路径。如果你熟悉 Cursor Project Rules，可以先手动参考 audit / fix 规则。

## Plain Prompt

Plain Prompt 暂时不属于稳定发布能力。

## 项目扩展

在目标项目中创建 `.webcraft-skills/EXTEND.md` 和 `.webcraft-skills/config.json`，可覆盖默认 UI 审查标准、品牌约束、圆角体系、默认视口等。

---

# 能力

稳定能力：

- 审查 UI 质量
- 根据明确的 audit findings 修复问题

实验性能力，尚未完整测试：

- 审查页面、组件或截图
- 保留业务含义的前提下润色页面
- 生成网页或站点
- 查看和应用视觉 preset

---

# Presets

当前包内置一个 preset：`cinematic-minimal`。

电影感极简风格：

- 克制动效
- 暖黑色调
- 大留白
- 安静的产品感

更多 preset 会在准备好后继续补充。

---

# Philosophy

真正高级的 UI，很多时候都是克制的。

这个项目能让 AI 生成的界面：

- 更干净
- 更平静
- 更有节奏
- 更真实
- 更少 AI 味

---

# License

MIT
