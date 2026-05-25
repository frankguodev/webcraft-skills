# Webcraft Skills

[English](./README.md) | 中文

适合 Codex 和 Claude Code 的 UI audit / fix skill pack，用于排查和修复粗糙的 AI 生成网页 UI。

AI Coding 工具已经很会写代码，但生成的 UI 经常会显得太拥挤、太花哨、层级混乱，或者有很强的“AI 模板感”。

---

# 这是什么？

Webcraft Skills 是一个面向 AI Agent 的网页 UI 质量系统。

它不是 UI 框架、设计系统、组件库，也不是可视化建站工具。

当前已验证范围很明确：**审查现有 UI，并根据明确的 audit findings 修复问题**。可安装的 skill 名称是 `webcraft-ui`，npm 包名是 `webcraft-skills`。

更完整的长期目标是：

- 排查布局、字体、颜色、边框、圆角、弹窗、响应式和交互状态
- 根据具体 findings 修复粗糙的 AI 生成 UI
- 逐步支持生成更真实、更克制的网页
- 先打磨可复用的核心 Skill，再逐步扩展 Codex / Claude / Cursor 等平台适配
- 让 AI 不只会生成 UI，也会像资深 UI/UX + 前端 reviewer 一样修 UI

当前已测试工作流是 audit 和 fix。Claude Code 会安装 command prompt 文件，其中当前推荐稳定使用 `/ui-audit` 和 `/ui-fix`；Codex 中请使用 `/skills`、`$webcraft-ui` 或明确的自然语言调用。

---

# 稳定范围

适合用在这些场景：

- 审查现有页面、组件、功能流程、截图、localhost 页面或一组页面
- 找出 UI 问题，并给出证据、严重程度、影响视口和修复方向
- 根据明确的 audit / review findings 修复问题
- 默认保留现有视觉体系、业务逻辑、文案内容和技术栈
- 在可能时通过构建检查和浏览器页面打开验证确认修复没有破坏页面

它目前还不是稳定的通用建站工具。Build、polish、review、preset、Cursor 和 Plain Prompt 适配仍属于实验性或文档级能力。

---

# 自测效果

下面是项目内置自测页的一次 audit / fix 对比。测试页故意加入横向滚动、弹层遮挡、媒体比例失控、原生控件割裂、表格溢出和 AI 模板感等问题；修复后保留原有紫/青渐变和玻璃卡片风格，只收敛布局、控件、表格、状态和可读性问题。

| 检测前 | 修复后 |
| --- | --- |
| ![检测前：粗糙上传审核页面](./examples/reports/assets/self-audit-before.png) | ![修复后：保留原主题的上传审核页面](./examples/reports/assets/self-audit-after.png) |

完整过程见 [`examples/reports/self-audit-rough-ui-report.md`](./examples/reports/self-audit-rough-ui-report.md)，测试页面见 [`examples/test-cases/self-audit-rough-ui/`](./examples/test-cases/self-audit-rough-ui/)。

---

# 快速开始

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

Codex 会安装到：

```text
~/.agents/skills/webcraft-ui
~/.codex/skills/webcraft-ui
```

安装器会同时写入两个 Codex 兼容路径，以支持不同的当前客户端。

Claude Code 会安装到：

```text
~/.claude/skills/webcraft-ui
~/.claude/commands/*.md
```

## 使用方式

Codex 通过自然语言调用 `webcraft-ui`。建议把审查深度、对象范围和重点问题一起说清楚：

```text
使用 webcraft-ui 对当前网站进行 Standard Audit。
使用 webcraft-ui 对首页进行 Quick Audit，只看最明显的问题。
使用 webcraft-ui 对后台管理页面进行 Focused Audit，上线前认真检查但不要太重。
使用 webcraft-ui 对上传功能进行 Standard Audit，重点检查表单、状态和移动端。
使用 webcraft-ui 对所有后台管理页面进行 Deep Audit，准备上线前全面排查。
```

也可以在 Codex 中运行 `/skills`，或输入 `$` 来选择已安装的 `webcraft-ui` skill。

Claude Code 可使用已安装的 slash command prompts。命令后面的内容是给 Agent 的提示约定，不是独立 CLI 解析器：

```text
/ui-audit 对整个网站进行 Standard Audit
/ui-audit 对首页进行 Quick Audit，只看最明显的问题
/ui-audit 对后台管理页面进行 Focused Audit，上线前认真检查但不要太重
/ui-audit 对上传功能进行 Standard Audit，重点检查表单、状态和移动端
/ui-audit 对所有后台管理页面进行 Deep Audit，准备上线前全面排查
```

### Audit：审查问题

`Audit` 用来找问题、给证据和修复顺序，默认不直接改代码。适合在你想先知道 UI 风险时使用。

审查深度：

- `Quick Audit`：适合“快速看看”“有没有大问题”。只报告 Critical 和明显 Major，最多 8 条 findings。
- `Standard Audit`：默认实用模式。报告 Critical、Major 和少量高价值 Minor，通常 8 到 16 条 findings。
- `Focused Audit`：适合“认真检查”“聚焦深查”“上线前先看主要风险”。比 Standard 更深入，但不默认评分，最多 32 条 findings，并按风险扩展视口。
- `Deep Audit`：适合“全面排查”“严格 audit”“准备上线”。使用完整 audit 体系、评分模型、Content Stress Test 和更完整的视口检查。

这些审查模式的 findings 数量、严重级别、评分要求、视口范围和输出细节已经用结构化预算管理，因此不同 Agent 执行时会更稳定，不会把轻量审查做得过重，也不会把深度审查做得过浅。

默认视口从 375px mobile 和 1280px desktop 开始。Standard 可按需增加 768px。Focused 会按风险增加平板、宽屏或小手机视口。Deep 在项目可运行或可检查时，会扩大到小手机、平板、大桌面和宽屏视口。

浏览器证据：

- audit 打开浏览器时，会记录视口、页面区域、交互状态、滚动位置和可见现象。
- 如果保存截图，会在报告中列出截图目录和关键文件。Deep Audit 默认保存到 `examples/reports/assets/audit/<audit-run>/`。
- 如果 audit 临时启动 dev / preview / static server，会记录 URL / 端口，并在审查结束后关闭临时服务，除非你明确要求保留运行。
- 如果无法运行页面，布局、hover、focus、弹层和响应式结论会标记为静态推断，而不是浏览器实测。

常见审查对象：

- 当前页面：快速判断正在编辑的页面有没有明显布局、层级、响应式或状态问题。
- 指定页面：例如首页、定价页、登录页、设置页、文章详情页、结算页。
- 指定功能：例如上传功能、搜索筛选、批量操作、注册登录、编辑表单、弹窗确认。
- 指定模块：例如所有后台管理页面、用户中心、内容管理、订单流程、数据看板。
- 指定视口或设备：例如只看移动端、重点检查 375px、检查平板和桌面断点。
- 上线前检查：使用 `Deep Audit` 做更严格的全局排查，并输出修复优先级。

### Fix：修复问题

`Fix` 用来根据明确的 audit / review findings 或用户指定问题修改代码。它的目标是把已确认的问题修到可用、清晰、一致，不是顺手重做整个页面。

在 Codex 中可以这样调用：

```text
使用 webcraft-ui 修复上次 audit 里的问题。
使用 webcraft-ui 修复上次 audit 里的 Critical 和 Major 问题。
使用 webcraft-ui 只修复首页移动端横向溢出问题。
使用 webcraft-ui 修复上传功能里的表单状态、错误提示和 loading 状态。
使用 webcraft-ui 修复后台管理页面里原生 select 和现有组件风格不一致的问题。
使用 webcraft-ui 先给 fix plan，不要直接改代码。
```

在 Claude Code 中可以这样调用：

```text
/ui-fix 修复上次 audit 里的 Critical 和 Major 问题
/ui-fix 只修复首页移动端横向溢出问题
/ui-fix 修复上传功能里的表单状态、错误提示和 loading 状态
/ui-fix 修复后台管理页面里原生 select 和现有组件风格不一致的问题
/ui-fix 先给 fix plan，不要直接改代码
```

常见修复范围：

- 按严重级别修：只修 `Critical`，或修 `Critical` 和 `Major`。
- 按页面修：只修首页、登录页、设置页、结算页等指定页面。
- 按功能修：只修上传、搜索筛选、批量操作、编辑表单、弹窗确认等流程。
- 按问题类型修：只修响应式溢出、组件状态、表单错误、弹窗关闭、视觉 token 不一致。
- 按计划修：先输出 `fix plan`，确认后再改代码。

`Fix` 会优先保留现有视觉体系、文案、业务逻辑和技术栈。除非你明确要求 redesign 或指定 preset，否则不会把页面改成另一种风格。

修复验证：

- fix 会尽量对齐用户实际会打开的环境：启动命令、URL / 端口、路由、登录态、数据状态和操作路径。
- build 通过不等于页面可用。页面可运行时，fix 会打开受影响页面或路由，检查白屏、runtime error、错误边界、关键资源加载失败、关键交互初始化失败和明显 console error。
- 如果 fix 临时启动 dev / preview / static server，会记录启动命令和 URL / 端口，并在验证结束后关闭临时服务。
- 如果 fix 过程中生成截图，会优先保存到 `examples/reports/assets/fix/<fix-run>/`，有修复前后对照时使用 `before` / `after` 命名。
- 如果修复来源是 `Focused Audit`，fix 会优先处理 Top Findings、系统性 Major 和风险视口问题，不会自动扩展成 Deep 级别重构。

## Cursor

Cursor 暂时不属于稳定安装路径。如果你熟悉 Cursor Project Rules，可以先手动参考 audit / fix 规则。

## Plain Prompt

Plain Prompt 暂时不属于稳定发布能力。

## 项目扩展

在目标项目中创建 `.webcraft-skills/EXTEND.md` 和 `.webcraft-skills/config.json`，可覆盖默认 UI 审查标准、品牌约束、圆角体系、默认视口等。

用户级默认配置和优先级规则见 [`docs/configuration.md`](./docs/configuration.md)。

---

# 能力

稳定能力：

- 使用 Quick / Standard / Focused / Deep Audit 模式审查 UI 质量
- 根据明确的 audit findings 修复问题

实验性能力，尚未完整测试：

- 审查页面、组件或截图
- 保留业务含义的前提下润色页面
- 生成网页或站点
- 查看和应用视觉 preset

---

# 视觉预设

当前包内置一个 preset：`cinematic-minimal`。

电影感极简风格：

- 克制动效
- 暖黑色调
- 大留白
- 安静的产品感

更多 preset 会在准备好后继续补充。

---

# 理念

成熟的 UI，很多时候先是克制和一致的。

这个项目能让 AI 生成的界面：

- 更干净
- 更平静
- 更有节奏
- 更真实
- 更少 AI 味

---

# 许可证

MIT
