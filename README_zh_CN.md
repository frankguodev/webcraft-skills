# AI UI Constitution

[English](./README.md) | 中文

适合 Codex、Claude Code、Cursor、v0、Windsurf、Lovable 等 AI Coding 工具的 UI Skill / Rules / Prompt 规则库。

AI Coding 工具已经很会写代码，但生成的 UI 经常会显得太拥挤、太花哨、层级混乱，或者有很强的“AI 模板感”。

---

# 这是什么？

AI UI Constitution 是一个面向 AI Agent 的网页 UI 质量系统。

它不是 UI 框架、设计系统、组件库，也不是可视化建站工具。

核心目标很简单：

- 生成更真实、更克制的网页
- 审查 AI 生成页面的粗糙细节
- 排查布局、字体、颜色、边框、圆角、弹窗、响应式和交互状态
- 先打磨可复用的核心 Skill，再逐步扩展 Codex / Claude / Cursor 等平台适配
- 让 AI 不只会生成 UI，也会像资深 UI/UX + 前端 reviewer 一样修 UI

当前阶段以打磨 `skills/ai-ui-constitution` 为主；CLI Command 和项目配置示例作为辅助能力逐步完善。插件元数据和多平台 adapter 等发布层后续再加。

---

# Quick Start

## 当前推荐安装

当前阶段建议先使用仓库脚本安装本地 skill，方便快速迭代和调试。

如果未来发布到 skills CLI / marketplace，可以使用：

```bash
npx skills add frankguodev/ai-ui-constitution
```

## Codex

```powershell
.\scripts\install-codex.ps1
```

然后在项目中使用：

```text
/ui-audit current website
/ui-review homepage
/ui-polish reduce AI template feel
/ui-build cinematic-minimal personal homepage
```

更完整的参数式调用：

```text
/ui-audit --scope whole-site --strict --viewports 375,768,1280
/ui-review --page homepage --focus layout,typography,radius,states
/ui-polish --scope homepage --preset cinematic-minimal --preserve-content
/ui-fix --severity critical,major --yes
/ui-build --preset cinematic-minimal --target landing-page --stack next-tailwind
```

如果当前客户端没有配置 slash command，可以直接显式调用：

```text
Use ai-ui-constitution to audit the current website.
```

## 同步运行层

打磨 `core/` 后，运行：

```bash
npm run sync:runtime
npm run validate
```

这会把 `core/` 中的 preset、workflow、checklist 同步到 `skills/ai-ui-constitution/references/`。

## Cursor

当前先使用 `core/presets/` 和 `docs/commands.md` 中的规则手动放入 Cursor Project Rules。等核心 skill 稳定后，再补专门的 Cursor adapter。

## Plain Prompt

继续使用 `core/presets/` 中的规则进行复制粘贴。

## 项目扩展

在目标项目中创建 `.ai-ui-constitution/EXTEND.md` 和 `.ai-ui-constitution/config.json`，可覆盖默认 UI 审查标准、品牌约束、圆角体系、默认视口等。模板见 [examples/project-config](./examples/project-config/)，详见 [docs/configuration.md](./docs/configuration.md)。

---

# 能力

- `/ui-build`：生成网页或站点
- `/ui-review`：审查页面、组件或截图
- `/ui-audit`：严格排查整页或整站 UI 质量
- `/ui-polish`：保留业务含义的前提下润色页面
- `/ui-fix`：根据 review/audit 结果直接修复代码
- `/ui-preset`：查看和应用视觉 preset

---

# Presets

## [cinematic-minimal](./core/presets/cinematic-minimal.zh.md)

电影感极简风格：

- 克制动效
- 暖黑色调
- 大留白
- 安静的产品感

样例：

- [cinematic-minimal 个人品牌首页](./examples/cinematic-minimal/index.html)

更多 preset 会在准备好后继续补充。

---

# 项目结构

```bash
ai-ui-constitution/

├── core/          # 平台无关的 preset、checklist、workflow
├── skills/        # 可安装 Skill
├── commands/      # CLI 显式调用入口
├── scripts/       # 安装与校验脚本
├── docs/          # 架构与使用文档
├── examples/      # 示例页面、审查报告、项目配置模板
├── README.md
├── README_zh_CN.md
└── LICENSE
```

详见 [docs/architecture.md](./docs/architecture.md)、[docs/commands.md](./docs/commands.md) 和 [docs/configuration.md](./docs/configuration.md)。

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
