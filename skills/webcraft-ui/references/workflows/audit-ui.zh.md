# UI Audit 工作流

用于严格、系统地排查网页、页面、组件、截图或整站 UI 质量。`audit-ui` 负责执行流程，`ui-audit` rubric 负责判断标准。

审查的目标是发现问题、给出证据和修复顺序，不是直接重写设计。只有当用户明确要求修复时，才进入修复流程。

## 职责边界

- 本 workflow 只定义如何执行 audit：选择模式、收集上下文、验证视口、采集证据、组织报告、决定是否转入修复。
- 具体什么算问题、如何分级、评分、模块含义、报告归属和输出规则，读取 `references/checklists/ui-audit.zh.md`。
- 本 workflow 负责决定本次 audit 要读哪些模块；不要把模块选择规则复制成报告内容。
- `Quick / Standard / Deep Audit` 的硬预算读取 `references/modes/audit-modes.json`；本文件负责解释这些预算如何执行。
- 不要把 rubric 逐条复制进报告；只输出有证据、有影响、有修复价值的问题。
- 不要同时读取英文和中文 reference，除非任务是翻译、双语对齐或一致性检查。

## 语言规则

读取本 workflow 前，skill 的 Locale Contract 已经选择了一个运行语言。继续使用这个语言，不要再打开配对的英文或中文 workflow/checklist/module 文件，除非用户明确要求翻译、双语比较、本地化或语言一致性检查。

## 1. 选择审查模式

根据用户请求选择审查深度：

- `Quick Audit`：用户说“快速看看”“有没有大问题”。只报告 Critical 和明显 Major。
- `Standard Audit`：默认模式。报告 Critical、Major 和少量有价值 Minor。
- `Deep Audit`：用户说“全面排查”“严格 audit”“准备上线”“找细节问题”。使用完整 audit 体系：主 rubric、相关 modules、评分模型、Content Stress Test、更多视口，并额外检查媒体比例、表格/富文本/代码块、滚动行为、原生控件、动效和高对比度风险。

如果用户没有指定，使用 `Standard Audit`。

### 模式预算

完整 audit 体系是判断背景，不是每次都要完整执行的任务清单。硬预算以 `references/modes/audit-modes.json` 为准；下面是执行解释：

- `Quick Audit`：只做主路径和当前可见界面的风险扫描。页面可运行时，最多检查当前视口或 1 个最关键视口；只做明显的布局/可点击/响应式 smoke check。最多 5 条 findings，只报告 Critical 和明显 Major，不做评分，不输出 Minor，不展开长尾细节。
- `Standard Audit`：默认实用模式。覆盖主要页面/功能和 2 个关键视口：1280px 桌面 + 1 个移动端视口；做一次首屏布局关系检查和 pointer / hover smoke check。先找系统性 Critical / Major，再挑少量高价值 Minor。通常 8 到 12 条 findings，不输出完整分类报告，不做完整 Content Stress Test，不默认评分。
- `Deep Audit`：才系统展开主 rubric、相关 modules、评分模型、Content Stress Test、更多视口和深度审查细项。适合上线前、严格排查或用户明确要求“全面”。即便是 Deep Audit，也先输出 Top Findings，再按分类展开，不要把所有通过项写进报告。

任何模式都不要为了“覆盖分类”而制造 finding。发现多个同源问题时，优先合并为一个系统性 finding。

## 2. 收集上下文

正式审查前，先确认或推断：

- Scope：单页、组件、截图、整站、代码目录或 localhost。
- Page type：landing page、dashboard、app screen、portfolio、docs、form、checkout、admin 等。
- Core task：阅读、注册、购买、搜索、筛选、管理、创作、联系、下载、预约等。
- Audience：普通用户、开发者、企业客户、创作者、内部运营、管理者等。
- Tech constraints：已有组件库、工具类 CSS、CSS Modules、自定义 CSS、设计 token、路由、断点、框架和渲染方式。
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
- 布局和滚动：容器宽度、grid/flex 降级、sticky/fixed 层级、滚动区域、锚点和表格横向滚动。
- 媒体和富内容：图片、视频、iframe、图表、代码块、富文本和表格的比例、裁切、加载前占位和小屏策略。
- 交互层：dropdown、popover、modal、toast、drawer、loading overlay 的层级和互相遮挡关系。
- 页面语气：营销型、工具型、内容型、后台型、个人品牌型等。

除非用户明确要求重设风格，否则所有审查建议都必须在现有视觉体系内判断。不要把某个 preset 当作默认审美标准。Preset 只有在用户明确指定，或当前项目没有明确视觉方向时，才作为参考。

## 4. 读取审查标准

运行时读取 `references/checklists/ui-audit.zh.md`。重点应用其中：

- 总原则
- 严重程度
- 证据标准
- 评分模型
- 模块路由
- 输出格式
- 去重优先级

具体细项通过 modules 读取，例如 layout、responsive、components-states、forms-controls、visual-system、accessibility 和 ai-template-smell。

### 模块读取策略

`references/checklists/modules/` 是高风险问题的聚焦检查路径。不要每次把所有模块都读完；先按模式和页面信号选择：

- `Quick Audit`：默认不展开模块。只有当问题明显命中时，读取相关 1 个模块，例如移动端崩坏读 `responsive`，可点击信号缺失读 `components-states`，首屏关系异常读 `layout`。
- `Standard Audit`：默认优先考虑 `layout`、`components-states`、`responsive`。如果页面包含表单/筛选/上传/批量操作，补读 `forms-controls`；如果主要风险是风格拼贴、token 混乱或主题保持，补读 `visual-system`。
- `Deep Audit`：按页面类型和风险读取所有相关模块，可包括 `accessibility` 和 `ai-template-smell`。但仍然只报告有证据、有影响、有修复价值的问题，不把模块条目当作检查清单逐项输出。

模块触发规则：

- 首屏、hero、搜索框、视觉容器、下一段内容关系异常：读 `modules/layout.zh.md`。
- cursor、hover、focus-visible、loading、disabled、自定义 clickable 区域异常：读 `modules/components-states.zh.md`。
- 375px、768px、1280px、中间断点、横向滚动、固定宽度、sticky/fixed 遮挡异常：读 `modules/responsive.zh.md`。
- 表单、搜索筛选、选择控件、上传、批量操作、错误恢复、原生控件混用异常：读 `modules/forms-controls.zh.md`。
- 字体层级、颜色职责、spacing、radius、border、shadow、装饰语言、主题保留异常：读 `modules/visual-system.zh.md`。
- 键盘路径、focus-visible、可访问名称、语义结构、目标尺寸、高对比度异常：读 `modules/accessibility.zh.md`。
- AI 模板感、空泛 slogan、虚假数据、过度 badge/bento/渐变、section 拼贴异常：读 `modules/ai-template-smell.zh.md`。

不要逐条机械输出所有分类。只报告有证据、有影响、有修复价值的问题。

## 5. 根据输入类型选择审查方式

### 代码项目

- 先读项目结构、页面入口、全局样式、组件和路由。
- 基于组件实现、样式规则、断点、状态逻辑、内容结构和浏览器能力判断风险。
- 先看用户可见结果，再用当前技术栈寻找证据；不要把 Tailwind、某个组件库或某种 CSS 写法当成唯一标准。
- 如果能运行，再用浏览器验证关键视口和交互。
- 如果页面可运行但没有实际打开浏览器，不能把布局、hover、cursor、focus、弹层或响应式判断写成已验证结论；必须在报告中标明未实测风险。

### localhost / 可运行页面

- 优先用浏览器检查真实布局、滚动、点击、focus、弹窗和响应式。
- 记录实际视口、页面区域、滚动位置、交互状态和可见现象。
- 对可运行页面，重点验证 source code 难以确认的内容：媒体裁切、弹层层级、滚动吸附、锚点跳转、表单状态和移动端触控。
- 对可运行页面，必须做一轮 pointer / hover smoke check：主要按钮、搜索按钮、链接、标签、卡片操作、图标按钮和自定义 clickable 区域在鼠标悬停时应显示正确可点击意图和状态反馈。
- 不要只看源码就下最终结论。

### 截图

- 只能审查可见的视觉、布局、层级、文案和明显状态。
- 不要断言 hover、focus、键盘路径、弹窗关闭、loading 等无法从截图验证的行为。
- 需要交互判断时，列入 `Open Questions`。

### 单组件

- 重点检查尺寸、状态、长内容、组合变体、可访问名称和与周边组件的关系。
- 同时检查组件是否适配真实内容：长标签、图标、数字、错误文案、loading、disabled、empty、media ratio 和不同容器宽度。
- 不要按整页 landing page 标准审查一个组件。

### 整站

- 先抽样核心路径，不要逐页穷举。
- 至少覆盖首页、核心转化页、核心功能页、表单/登录/设置等状态密集页面。
- 覆盖至少一个数据/列表密集页面、一个表单或设置页、一个弹层/菜单密集流程；如果是后台产品，优先抽样表格、筛选、批量操作和危险操作。
- 输出系统性问题和 Top Findings，而不是把每一页的小问题堆在一起。

## 6. 检查项目结构

如果审查的是代码项目，先找到：

- 页面入口：`app/`、`pages/`、`src/routes/`、`src/pages/`、`index.html` 等。
- 全局样式：`globals.css`、`app.css`、CSS Modules、Sass、工具类配置、design tokens、主题变量、断点规则。
- 组件：button、card、input、select、combobox、dropdown、checkbox、radio、switch、textarea、file upload、modal、drawer、popover、tooltip、nav、tabs、table、list、toast。
- 路由和页面类型：home、pricing、dashboard、settings、docs、auth、checkout。
- 已有 UI 系统：shadcn、Radix、MUI、Bootstrap、自定义组件、工具类 CSS、自定义 CSS 或原生 HTML 控件体系。
- 富内容和媒体：图片、视频、iframe、图表、代码块、富文本、表格、长列表和空/错误/loading 状态。
- 交互层和滚动：sticky/fixed header、dropdown、popover、modal、toast、drawer、scroll container、锚点、scroll snap。

不要在不了解项目结构时直接给大范围设计建议。

### 自定义控件一致性检查

代码审查时必须主动检查项目是否已有自定义基础控件，并反查页面是否仍混用原生控件：

- 先找已有组件：`Select`、`Combobox`、`Dropdown`、`MultiSelect`、`Checkbox`、`RadioGroup`、`Input`、`Textarea`、`Button` 等。
- 再找原生用法：`<select>`、`<option>`、`<input type="checkbox">`、`<input type="radio">`、`<input type="file">`、未封装的 `<input>` / `<textarea>`，以及只靠浏览器默认样式的控件。
- 检查 appearance、accent-color、caret-color、color-scheme、field-sizing、resize 等原生控件能力是否和当前视觉体系一致。
- 如果项目已有对应自定义控件，但某个页面仍使用突兀原生控件，必须作为 `Components And States` 或 `Forms` finding 评估，不要只放进 `Content Stress` 或 `Pass Notes`。
- 如果项目没有对应自定义控件，但原生控件明显不符合当前网站风格，也要报告；修复方向是建立或封装与现有视觉体系一致的基础控件，而不是只调整单个页面。
- 如果原生控件只是视觉略不协调且不影响操作，通常是 `Minor`；如果出现在筛选、批量操作、编辑表单等核心后台流程，并明显破坏视觉系统或操作信心，通常是 `Major`。

## 7. 运行与视口检查

如果项目可运行，优先用浏览器验证真实布局和交互，并可用截图记录证据。视口数量按模式控制，不要把所有 audit 都跑成 Deep Audit。

`Quick Audit`：

- 检查当前视口，或用户最关心的 1 个关键视口。
- 只看 Critical usability、明显响应式风险、首屏主次和核心可点击元素。
- 如果当前问题明显来自移动端或桌面端，优先选择该视口。

`Standard Audit` 默认检查：

- 375px mobile
- 1280px desktop

`Standard Audit` 可按页面类型增加 768px tablet，但不是强制矩阵。只有当问题明显涉及平板断点、侧栏、表格或多列布局时才补查。

如果时间或环境只能检查部分视口，至少检查当前问题最可能出现的 1 个视口，并在报告中写清未验证项。

`Standard Audit` 和 `Deep Audit` 的浏览器检查应额外扫一遍首屏布局关系：

- hero 两栏、搜索区、主要视觉容器和下一段内容之间是否有压住、断裂、错位或空洞感。
- mockup、插画、截图、图表或装饰容器是否内容过少但占位过大，导致首屏构图失衡。
- 搜索框、CTA、标签组、卡片组是否与上下 section 的间距、对齐和层级关系自然。
- 可点击元素是否有 cursor、hover、active 和 focus-visible 等基本交互信号。

Deep Audit 增加：

- 360px
- 390px 或 430px
- 834px
- 1440px
- 1920px

Deep Audit 还应尽量检查：

- 媒体：图片、视频、iframe、图表和产品截图的 aspect-ratio、object-fit、裁切焦点和加载前占位。
- 滚动：sticky header 下的锚点跳转、scroll-margin / scroll-padding、scroll snap、滚动条出现时的布局跳动。
- 数据内容：表格、代码块、富文本、长列表和多列内容在移动端、平板和大屏的降级方式。
- 状态和可访问性：focus-visible、键盘路径、forced colors / 高对比度风险、reduced motion。

如果无法运行页面：

- 基于 CSS、布局代码、断点和组件结构做静态推断。
- 明确写出未验证的视口和交互。
- 不要虚构“已看到”的浏览器结果。

## 8. 证据采集

根据审查方式记录证据：

- 浏览器证据：视口宽度、页面区域、交互状态、滚动位置、可见现象。
- 代码证据：文件路径、组件名、CSS 类、断点、状态分支、样式 token、组件 props、语义结构。
- 截图证据：截图区域、可见元素、层级关系、裁切或遮挡现象。
- 推断证据：基于代码或截图推断的风险，必须标明“未实测”或“需要验证”。
- 系统性证据：同类问题跨多个页面、组件或状态出现时，记录共同根因，例如 token 不一致、控件体系混用、断点策略缺失或滚动层级混乱。

证据要服务判断，不要为了显得详细而罗列无关实现。

## 9. 审查顺序

按这个顺序检查，避免一开始陷入审美细节：

1. Critical usability：overflow、遮挡、不可点击、不可读、导航/弹窗/表单不可用。
2. Responsive and layout stability：移动端、平板、大屏、fixed/sticky、z-index、媒体比例、表格/代码块/富文本溢出、首屏区域关系和视觉容器占位是否稳定。
3. Information hierarchy：首屏主次、页面类型是否清楚、核心任务是否明确。
4. Components and states：cursor、hover、active、focus-visible、disabled、loading、empty、error、success。
5. Form/control consistency：输入、选择、下拉、多选、菜单、批量操作是否沿用项目已有组件体系。
6. Data and rich content：表格、图表、代码块、富文本、长列表、数字排版和内容密度。
7. Visual system：spacing、typography、color、radius、border、shadow、background、filter、outline。
8. Interaction layers and motion：dropdown、popover、modal、toast、drawer、scroll behavior、动效、reduced motion。
9. Content stress：长文案、中英文混排、不同数据数量、不同图片比例、多列/分页/打印场景。
10. Accessibility baseline：键盘路径、可访问名称、语义结构、forced colors、高对比度。
11. AI template smell：空泛口号、过度 badge、bento grid、渐变光斑、虚假数据。
12. Minor polish：对齐、节奏、动效、文案细节。

## 10. Findings 数量控制

- `Quick Audit`：最多 5 条，只报告 Critical 和明显 Major。
- `Standard Audit`：建议 8 到 12 条，优先 Top Findings；除非用户要求，不展开完整分类报告。
- `Deep Audit`：可以更多，但先输出 Top Findings，再按分类展开；每个分类只输出有证据、有影响、有修复价值的问题。
- 如果 Critical/Major 已经足够说明主要风险，不继续挖低价值 Minor。
- 对 Quick / Standard，不要报告只影响局部精致度、且不影响任务、响应式、状态或一致性的长尾细节。
- 不要为了让报告看起来完整而凑数量。

## 11. 输出报告

使用这个结构：

```markdown
## Context / 上下文

- Scope / 范围:
- Audit mode / 审查模式:
- Page type / 页面类型:
- Core task / 核心任务:
- Viewports checked / 已检查视口:
- Verification level / 验证方式:
- Constraints / 约束:

## Top Findings / 主要问题

- 最重要的 3 到 5 个问题，按风险排序。

## Critical

### 1. 问题标题
Location / 位置:
Evidence / 证据:
Impact / 影响:
Fix / 修复建议:

## Major

...

## Minor

...

## Open Questions / 待确认问题

- 需要用户确认或需要运行页面才能判断的问题。

## Pass Notes / 通过说明

- 简短说明没有发现明显问题的关键方面。

## Fix Order / 修复顺序

1.
2.
3.

## Score / 评分

- Usability:
- Clarity:
- Consistency:
- Responsiveness:
- Interaction States:
- Control System Fit:
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
- 布局类 finding 优先给出浏览器证据：Viewport、区域、可见现象、可能根因和修复方向。
- Critical 和 Major 必须可定位、可修复。
- 没有发现的问题分类不要输出。
- `Open Questions` 只放需要确认的问题，不放建议。
- `Pass Notes` 不要逐项列通过，只保留 1 到 3 条高价值说明。
- 不要输出“检查了 X 项均通过”这类清单式通过项；只记录对用户决策有帮助的通过信息。

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
- Quick Audit 中，找到 Critical 或 3 到 5 个明显 Major 后即可停止，直接给修复顺序。
- Standard Audit 中，如果 Top Findings 已覆盖主要风险，不继续列低价值 polish 或深度细项。
- Deep Audit 中，可以继续展开，但要把系统性问题优先于零散细节；同类 Minor 应合并，不逐点堆叠。
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
