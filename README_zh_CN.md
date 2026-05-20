# Webcraft Skills

[English](./README.md) | 中文

适合 Codex 和 Claude Code 的 UI audit / fix skill，提供 slash commands，用于排查和修复粗糙的 AI 生成网页 UI。

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

当前已测试命令是 `/ui-audit` 和 `/ui-fix`。其它 command prompt 会保留用于迭代，但暂时不作为稳定公开能力承诺。

---

# Quick Start

## 当前推荐安装

使用 npx 安装 skill 和 slash commands：

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
~/.codex/skills/webcraft-skills
~/.codex/commands/*.md
```

或：

```text
~/.claude/skills/webcraft-skills
~/.claude/commands/*.md
```

然后在项目中使用：

```text
/ui-audit current website
/ui-fix Critical and Major issues from the last audit
```

更完整的参数式调用：

```text
/ui-audit --scope whole-site --strict --viewports 375,768,1280
/ui-fix --severity critical,major --yes
```

如果当前客户端没有从 `~/.codex/commands` 加载命令，可以直接显式调用：

```text
Use webcraft-skills to audit the current website.
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

- `/ui-audit`：严格排查整页或整站 UI 质量
- `/ui-fix`：根据 audit 结果直接修复代码

实验性能力，尚未完整测试：

- `/ui-review`：审查页面、组件或截图
- `/ui-polish`：保留业务含义的前提下润色页面
- `/ui-build`：生成网页或站点
- `/ui-preset`：查看和应用视觉 preset

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
