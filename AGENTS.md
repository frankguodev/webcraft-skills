# AGENTS.md

这个项目是 `webcraft-skills` 的源码仓库。后续协作时，请优先遵守这里的约定，避免 source 和 runtime 文件分叉。

## 工作原则

- `core/` 是审查规则、工作流、preset 和结构化模式预算的源文件。
- `skills/webcraft-skills/references/` 是安装时使用的 runtime 引用文件，由 `core/` 同步生成。
- 修改 audit / fix / review / polish / build workflow、checklist、preset 时，优先只改 `core/` 下对应文件。
- 改完 `core/` 后运行：

```bash
npm run sync:runtime
npm run validate
```

- 不要手动同时维护 `core/` 和 `skills/webcraft-skills/references/` 两份内容，除非正在修同步脚本本身。
- 如果发现 `skills/webcraft-skills/references/` 与 `core/` 不一致，以 `core/` 为准，然后重新同步。

## 文件职责

- `core/checklists/`：审查标准、评分 rubric 和高风险检查模块的源文件。
- `core/workflows/`：audit、fix、review、polish、build 等工作流源文件。
- `core/presets/`：视觉 preset 源文件。
- `core/modes/`：结构化模式预算源文件，例如 audit 的 Quick / Standard / Deep 硬预算、开关和数量限制。
- `skills/webcraft-skills/SKILL.md`：Skill 入口和模式路由，直接维护。
- `commands/`：Claude Code slash command prompt 文件，直接维护。
- `README.md` 和 `README_zh_CN.md`：公开说明文档，直接维护，并尽量保持中英文信息同步。
- `docs/`：补充文档，直接维护。
- `examples/test-cases/`：用于验证 workflow 能发现或修复典型 UI 问题的样例源文件。
- `examples/reports/`：手工或 Agent 自测报告，以及 README 中引用的示例截图。
- `scripts/sync-runtime.mjs`：把 `core/` 同步到 `skills/webcraft-skills/references/`。
- `scripts/validate.mjs`：校验必需文件、locale pair、JSON、结构化模式预算和 `SKILL.md` frontmatter。
- `scripts/validate-examples.mjs`：校验 `examples/test-cases/` 回归用例三件套和 README 列表。

## 架构演进原则

- Markdown 负责表达 workflow、判断边界、例子、反例和语境化规则。
- 结构化配置只用于硬预算、开关、数量限制或可脚本校验的规则，不替代 Markdown 判断标准。
- examples 应覆盖真实漏检/误修问题，优先作为回归用例维护，不要只作为展示素材。
- README 只展示最能说明能力的少量示例，避免把所有测试用例都堆进首页。

## 中英文同步

- `*.md` 和 `*.zh.md` 应尽量保持结构和信息量一致。
- 中文用户相关内容可以更贴近中文表达，但不要改变规则含义。
- 如果只改中文或英文，需要说明是否有意不同步。

## Audit 规则扩展

- Audit checklist 应保持技术无关。可以参考 Tailwind、CSS、组件库或浏览器能力，但不要把规则绑定到某个技术栈。
- 规则应适配 Tailwind、Bootstrap、MUI、shadcn、CSS Modules、Sass、原生 CSS、React、Vue、Svelte、Astro、服务端模板等不同项目。
- 审查结论应优先基于用户可见结果，再用项目当前技术实现寻找证据。

## 提交前检查

在完成规则、文档或脚本改动后，至少运行：

```bash
npm run validate
```

如果改了 `core/`，必须先运行：

```bash
npm run sync:runtime
```

再运行：

```bash
npm run validate
```
