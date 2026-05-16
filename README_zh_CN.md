# AI 生成网页规范

[English](./README.md) | 中文

适合 Cursor、Codex、Claude Code、v0、Windsurf、Lovable 等 AI Coding 工具的 UI 提示词规则库。

AI Coding 工具已经很会写代码，但生成的 UI 经常会显得太拥挤、太花哨、层级混乱，或者有很强的“AI 模板感”。

---

# 这是什么？

AI UI Constitution 是一个轻量级 UI 提示词规则库。

它不是 UI 框架、设计系统、组件库，也不是可视化建站工具。

核心目标很简单：

- 更好的 spacing
- 更克制的动效
- 更统一的 UI
- 更清晰的 typography
- 更少的 AI 味
- 更像真实产品

复制一个 preset，粘贴到 AI Coding 工具里，再描述你想生成的页面即可。

---

# Quick Start

1. 打开 [zh/presets](./zh/presets/)。
2. 如果 preset 提供了信息填写区，先填入你的个人、产品或项目背景。
3. 复制 Prompt Rules。
4. 粘贴到 Cursor / Codex 等 AI 工具中。
5. 继续输入你的页面需求并生成界面。

---

# Presets

## [cinematic-minimal](./zh/presets/cinematic-minimal.md)

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

├── en/
│   └── presets/
├── zh/
│   └── presets/
├── examples/
├── README.md
├── README_zh_CN.md
├── CHANGELOG.md
└── LICENSE
```

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
