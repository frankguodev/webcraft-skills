# UI Audit Workflow

用于严格、系统地排查网页、页面、组件、截图或整站 UI 质量。`audit-ui` 负责执行流程，`ui-audit` rubric 负责判断标准。

审查的目标是发现问题、给出证据和修复顺序，不是直接重写设计。只有当用户明确要求修复时，才进入修复流程。

## 职责边界

- 本 workflow 只定义如何执行 audit：选择模式、收集上下文、验证视口、采集证据、组织报告、决定是否转入修复。
- 具体什么算问题、如何分级、各页面类型和 UI 维度的判断标准，读取 `references/checklists/ui-audit.zh.md`。
- 不要把 rubric 逐条复制进报告；只输出有证据、有影响、有修复价值的问题。
- 不要同时读取英文和中文 reference，除非任务是翻译、双语对齐或一致性检查。

## 1. 选择审查模式

根据用户请求选择审查深度：

- `Quick Audit`：用户说“快速看看”“有没有大问题”。只报告 Critical 和明显 Major。
- `Standard Audit`：默认模式。报告 Critical、Major 和少量有价值 Minor。
- `Deep Audit`：用户说“全面排查”“严格 audit”“准备上线”“找细节问题”。使用完整 Rubric、评分模型、Content Stress Test 和更多视口。

如果用户没有指定，使用 `Standard Audit`。

## 2. 收集上下文

正式审查前，先确认或推断：

- Scope：单页、组件、截图、整站、代码目录或 localhost。
- Page type：landing page、dashboard、app screen、portfolio、docs、form、checkout、admin 等。
- Core task：阅读、注册、购买、搜索、筛选、管理、创作、联系、下载、预约等。
- Audience：普通用户、开发者、企业客户、创作者、内部运营、管理者等。
- Tech constraints：已有组件库、Tailwind、shadcn、自定义 CSS、设计 token、路由和断点。
- Verification level：已运行浏览器、代码静态审查、截图审查，或混合审查。

缺少信息时可以根据项目结构和页面内容推断，但要标明“推断”。

如果用户使用中文提问，报告默认使用中文；必要的字段名和模式名可以保留英文，方便和命令、文档、自动化输出保持一致。

## 3. 识别现有视觉体系

审查必须先识别当前网站或产品已有的视觉体系，包括：

- 颜色：品牌色、背景色、文字色、状态色、强调色使用方式。
- 字体：字号层级、字重、行高、标题和正文节奏。
- spacing：页面容器、section 间距、组件内边距、grid gap。
- 圆角、边框、阴影：按钮、卡片、输入框、弹窗和菜单的共同规律。
- 组件风格：按钮、表单、导航、卡片、表格、弹窗、toast 的既有样式。
- 页面语气：营销型、工具型、内容型、后台型、个人品牌型等。

除非用户明确要求重设风格，否则所有审查建议都必须在现有视觉体系内判断。不要把某个 preset 当作默认审美标准。Preset 只有在用户明确指定，或当前项目没有明确视觉方向时，才作为参考。

## 4. 读取审查标准

运行时读取 `references/checklists/ui-audit.zh.md`。重点应用其中：

- 审查边界
- 去重与优先级
- 设备检查矩阵
- 证据标准
- 页面类型差异
- 评分模型
- Layout / Typography / Color / Border Radius Shadow / Components / Navigation / Forms / Modals / Responsive / Motion / Accessibility / Content Stress / AI Template Smell

不要逐条机械输出所有分类。只报告有证据、有影响、有修复价值的问题。

## 5. 根据输入类型选择审查方式

### 代码项目

- 先读项目结构、页面入口、全局样式、组件和路由。
- 基于组件实现、样式规则、断点和状态逻辑判断风险。
- 如果能运行，再用浏览器验证关键视口和交互。

### localhost / 可运行页面

- 优先用浏览器检查真实布局、滚动、点击、focus、弹窗和响应式。
- 记录实际视口和页面区域。
- 不要只看源码就下最终结论。

### 截图

- 只能审查可见的视觉、布局、层级、文案和明显状态。
- 不要断言 hover、focus、键盘路径、弹窗关闭、loading 等无法从截图验证的行为。
- 需要交互判断时，列入 `Open Questions`。

### 单组件

- 重点检查尺寸、状态、长内容、组合变体、可访问名称和与周边组件的关系。
- 不要按整页 landing page 标准审查一个组件。

### 整站

- 先抽样核心路径，不要逐页穷举。
- 至少覆盖首页、核心转化页、核心功能页、表单/登录/设置等状态密集页面。
- 输出系统性问题和 Top Findings，而不是把每一页的小问题堆在一起。

## 6. 检查项目结构

如果审查的是代码项目，先找到：

- 页面入口：`app/`、`pages/`、`src/routes/`、`src/pages/`、`index.html` 等。
- 全局样式：`globals.css`、`app.css`、`tailwind.config.*`、design tokens。
- 组件：button、card、input、select、combobox、dropdown、checkbox、radio、modal、nav、table、list、toast。
- 路由和页面类型：home、pricing、dashboard、settings、docs、auth、checkout。
- 已有 UI 系统：shadcn、Radix、MUI、自定义组件、Tailwind utility 体系。

不要在不了解项目结构时直接给大范围设计建议。

### 自定义控件一致性检查

代码审查时必须主动检查项目是否已有自定义基础控件，并反查页面是否仍混用原生控件：

- 先找已有组件：`Select`、`Combobox`、`Dropdown`、`MultiSelect`、`Checkbox`、`RadioGroup`、`Input`、`Textarea`、`Button` 等。
- 再找原生用法：`<select>`、`<option>`、`<input type="checkbox">`、`<input type="radio">`、未封装的 `<input>` / `<textarea>`，以及只靠浏览器默认样式的控件。
- 如果项目已有对应自定义控件，但某个页面仍使用突兀原生控件，必须作为 `Components And States` 或 `Forms` finding 评估，不要只放进 `Content Stress` 或 `Pass Notes`。
- 如果项目没有对应自定义控件，但原生控件明显不符合当前网站风格，也要报告；修复方向是建立或封装与现有视觉体系一致的基础控件，而不是只调整单个页面。
- 如果原生控件只是视觉略不协调且不影响操作，通常是 `Minor`；如果出现在筛选、批量操作、编辑表单等核心后台流程，并明显破坏视觉系统或操作信心，通常是 `Major`。

## 7. 运行与视口检查

如果项目可运行，优先用浏览器验证真实布局和交互，并可用截图记录证据。默认至少检查：

- 375px mobile
- 768px tablet
- 1280px desktop

Deep Audit 增加：

- 360px
- 390px 或 430px
- 834px
- 1440px
- 1920px

如果无法运行页面：

- 基于 CSS、布局代码、断点和组件结构做静态推断。
- 明确写出未验证的视口和交互。
- 不要虚构“已看到”的浏览器结果。

## 8. 证据采集

根据审查方式记录证据：

- 浏览器证据：视口宽度、页面区域、交互状态、滚动位置、可见现象。
- 代码证据：文件路径、组件名、CSS 类、断点、状态分支、样式 token。
- 截图证据：截图区域、可见元素、层级关系、裁切或遮挡现象。
- 推断证据：基于代码或截图推断的风险，必须标明“未实测”或“需要验证”。

证据要服务判断，不要为了显得详细而罗列无关实现。

## 9. 审查顺序

按这个顺序检查，避免一开始陷入审美细节：

1. Critical usability：overflow、遮挡、不可点击、不可读、导航/弹窗/表单不可用。
2. Responsive：移动端、平板、大屏、fixed/sticky、图片和表格溢出。
3. Information hierarchy：首屏主次、页面类型是否清楚、核心任务是否明确。
4. Components and states：hover、active、focus-visible、disabled、loading、empty、error、success。
5. Form/control consistency：输入、选择、下拉、多选、菜单、批量操作是否沿用项目已有组件体系。
6. Visual system：spacing、typography、color、radius、border、shadow。
7. Content stress：长文案、中英文混排、不同数据数量、不同图片比例。
8. AI template smell：空泛口号、过度 badge、bento grid、渐变光斑、虚假数据。
9. Minor polish：对齐、节奏、动效、文案细节。

## 10. Findings 数量控制

- `Quick Audit`：最多 5 条，只报告 Critical 和明显 Major。
- `Standard Audit`：建议 8 到 12 条，优先 Top Findings。
- `Deep Audit`：可以更多，但先输出 Top Findings，再按分类展开。
- 如果 Critical/Major 已经足够说明主要风险，不继续挖低价值 Minor。
- 不要为了让报告看起来完整而凑数量。

## 11. 输出报告

使用这个结构：

```markdown
## Context

- Scope:
- Audit mode:
- Page type:
- Core task:
- Viewports checked:
- Verification level:
- Constraints:

## Top Findings

- 最重要的 3 到 5 个问题，按风险排序。

## Critical

### 1. 问题标题
Location:
Evidence:
Impact:
Fix:

## Major

...

## Minor

...

## Open Questions

- 需要用户确认或需要运行页面才能判断的问题。

## Pass Notes

- 简短说明没有发现明显问题的关键方面。

## Fix Order

1.
2.
3.

## Score

- Usability:
- Clarity:
- Consistency:
- Responsiveness:
- Interaction States:
- Visual Maturity:
- AI Template Smell:
- Overall:
```

规则：

- `Quick Audit` 可以省略 Score 和 Minor。
- `Standard Audit` 可省略 Score，除非用户要求。
- `Deep Audit` 建议保留 Score。
- `Top Findings` 用于让用户先看到最重要风险；如果问题很少，可以省略。
- 每个 finding 必须有具体证据。
- Critical 和 Major 必须可定位、可修复。
- 没有发现的问题分类不要输出。
- `Open Questions` 只放需要确认的问题，不放建议。
- `Pass Notes` 不要逐项列通过，只保留 1 到 3 条高价值说明。

## 12. 去重与分组

- 同一根因只报告一次。
- 阻断使用的问题单独列为 Critical，不要合并进系统性问题。
- 系统性视觉问题可以合并，例如 radius、border、shadow 混乱可以作为一个 Major。
- 不要为了覆盖所有分类而凑问题。
- 如果问题需要产品决策，放到 `Open Questions`，不要假装是确定缺陷。

## 13. 修复衔接

如果用户要求继续修复，进入 `fix-ui` workflow。

修复前先确认：

- 用户是否要求直接改代码。
- 是否只修 Critical/Major。
- 是否允许调整视觉 token。
- 是否需要保持现有视觉风格和内容不变。

修复顺序：

1. Critical：先修不可用、不可读、不可点击、不可关闭。
2. Major：再修响应式、信息层级、组件状态、视觉 token。
3. Content Stress：再修长文案、真实数据和变体内容。
4. AI Template Smell：删除模板噪音，补真实信息结构。
5. Minor：最后做对齐、动效、文案和视觉 polish。

不要在 audit 阶段直接大改代码，除非用户明确要求“审查并修复”。

修复后必须复检对应问题：

- 修 overflow 的，复检对应视口。
- 修状态的，复检 hover、focus-visible、disabled、loading、error。
- 修弹窗的，复检关闭、滚动和 focus。
- 修视觉 token 的，复检同类组件是否一致。

## 14. 停止条件

- 已经找到会阻断使用的 Critical 时，先停止深挖 Minor，优先输出风险和修复顺序。
- Standard Audit 中，如果 Top Findings 已覆盖主要风险，不继续列低价值 polish。
- Deep Audit 中，可以继续展开，但要把系统性问题优先于零散细节。
- 如果证据不足，不继续推断；把问题放入 `Open Questions` 或标注需要验证。

## 15. 禁止事项

- 不要虚构浏览器验证结果。
- 不要输出没有位置、没有证据、没有修复建议的问题。
- 不要把纯审美偏好包装成缺陷。
- 不要建议无关技术重构。
- 不要把所有页面都改成同一种风格。
- 不要在用户未指定 preset 时强行套用 preset 风格。
- 不要因为统一视觉而删除必要业务信息。
- 不要把没有验证的问题写成确定事实。
