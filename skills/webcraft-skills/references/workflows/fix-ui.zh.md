# UI Fix Workflow

用于根据审查结果（review / audit findings）直接修复 UI 代码。`fix-ui` 的目标是把已确认的问题修到可用、清晰、一致，而不是顺手重做整个页面。

默认只修有证据、有影响、有明确修复方向的问题。没有证据的问题先放入 `Open Questions`，不要假装已经确认。

## 1. 修复前确认

开始改代码前，先确认修复边界：

- 修复来源：来自 audit、review、用户指定问题，还是当前观察。
- Audit 模式：来自 Quick / Standard / Deep Audit，还是用户指定的单点问题。
- 修复范围：单页、组件、整站、某个视口、某类状态。
- 修复级别：只修 Critical，还是包含 Major / Minor。
- 是否允许改视觉 token：颜色、圆角、阴影、spacing、字体层级。
- 是否允许改共享组件、基础控件、布局规则、断点或滚动容器。
- 是否涉及媒体比例、表格/富文本/代码块、滚动层、原生控件、动效或高对比度风险。
- 是否必须保留现有风格、文案、布局结构和技术栈。
- 是否需要先给 fix plan，再执行。

如果用户说“直接修”“帮我改好”，可以执行；如果范围可能很大，先给简短修复计划。

## 2. 保留现有视觉体系

修复前必须先识别并尊重当前项目已有的视觉体系：

- 颜色：品牌色、背景色、文字色、状态色、强调色。
- 字体：字号层级、字重、行高、标题和正文节奏。
- spacing：容器宽度、section 间距、组件 padding、grid gap。
- 圆角、边框、阴影：按钮、卡片、输入框、弹窗、菜单的共同规律。
- 组件风格：按钮、表单、导航、卡片、表格、弹窗、toast 的既有样式。
- 布局和滚动：容器宽度、grid/flex 降级、sticky/fixed 层级、滚动区域、锚点和表格横向滚动。
- 媒体和富内容：图片、视频、iframe、图表、代码块、富文本和表格的比例、裁切、加载前占位和小屏策略。
- 控件体系：输入、选择、下拉、多选、上传、开关、复选框、单选框是否已有共享组件或共享样式。
- 交互层：dropdown、popover、modal、toast、drawer、loading overlay 的层级和互相遮挡关系。
- 页面语气：营销型、工具型、内容型、后台型、个人品牌型等。

除非用户明确要求 redesign、换主题、重设品牌方向或指定 preset，否则修复必须在现有视觉体系内完成。不要为了修一个问题，把页面改成另一种风格。Preset 只在用户明确指定，或当前项目没有明确视觉方向时作为参考。

主题风格属于默认必须保留的边界，包括但不限于：明暗模式、品牌色气质、圆角/阴影语言、插画或背景表达、密度、产品语气、组件形态和整体视觉方向。

保留主题不是冻结缺陷。只要某个视觉特征造成明确的可用性、可读性、响应式、状态、交互或可访问性问题，就必须修；但修复方式应在原主题内完成，例如校正、降噪、收敛、补状态、加约束、调整局部 token，而不是换成另一套视觉方案。

如果原主题的某个元素本身导致明确问题，例如背景太花影响文字、渐变导致对比度不够、玻璃拟态让层级不可读、动效造成眩晕或布局跳动，可以降低强度、增加遮罩、调整局部 token、补充 focus/状态或约束动画。但必须保留主题意图，并在输出里说明：

- 保留了哪些原有风格特征。
- 调整了哪些视觉特征。
- 为什么这些调整是修复问题所必需，而不是审美替换。
- 是否仍保持原主题方向。

如果要从根本上改明暗模式、主色、视觉密度、组件形态、插画/背景语言或整体风格方向，必须先放入 `Open Questions` 让用户确认。

## 3. 根据修复来源选择策略

### 来自 audit

- 按 Critical / Major / Minor 和 Fix Order 修。
- 每个改动都要能对应到某个 finding。
- 如果来自 Quick / Standard Audit，保持修复范围克制；只修 Top Findings、Fix Order 和直接依赖问题。
- 如果来自 Deep Audit，可以处理系统性问题，但仍要先修影响核心任务和跨页面一致性的项。
- 不要顺手修没有证据的低价值问题。

### 来自 review

- 优先修 reviewer 明确指出的风险。
- 如果 review 只提出方向性建议，先转成可执行 finding，再修。
- 不要把普通 review 扩展成全量 redesign。

### 来自用户指定问题

- 只修用户点名的问题和直接依赖问题。
- 不扩大范围，除非不扩大就无法彻底修复。
- 如果发现额外 Critical，可以提醒用户，但不要擅自大改。

### 来自截图

- 只修可见的布局、视觉、层级、文案问题。
- 不要断言或修复无法从截图确认的交互逻辑。
- hover、focus、loading、弹窗关闭等问题需要运行页面验证后再修。

### 来自代码观察

- 标明哪些是基于代码推断。
- 能运行页面时优先验证后再修。
- 不能运行时，修复要更保守，并说明未验证风险。

## 4. 修复计划格式

范围较大或涉及多个文件时，先输出简短计划：

```markdown
## Fix Plan

1. 修复移动端 hero CTA 横向溢出。
   Finding: Mobile hero CTA overflows.
   Scope: `src/app/page.tsx`

2. 补齐按钮 focus-visible / disabled / loading 状态。
   Finding: Primary actions lack complete states.
   Scope: `src/components/Button.tsx`

3. 收敛 card/button/input 圆角体系。
   Finding: Radius system is inconsistent.
   Scope: shared component styles
```

计划必须对应 finding。不要把“顺便优化整体 UI”写进计划。

## 5. 修复优先级

按这个顺序修：

1. `Critical`：不可用、不可读、不可点击、不可关闭、横向滚动、核心流程中断。
2. 响应式和布局稳定性：断点、grid/flex 降级、sticky/fixed、z-index、滚动容器、表格/代码块/富文本溢出。
3. 组件、表单和控件体系：状态、focus-visible、disabled、loading、error、选择类控件、原生控件混用。
4. 数据和富内容：表格、图表、代码块、富文本、长列表、数字对齐、媒体比例和裁切。
5. 视觉系统：spacing、typography、color、radius、border、shadow、background、filter、outline。
6. 交互层和动效：dropdown、popover、modal、toast、drawer、scroll behavior、reduced motion。
7. 内容压力测试（Content Stress）：长文案、中英文混排、真实数据数量变化、图片比例变化、多列/分页/打印场景。
8. 可访问性：键盘路径、可访问名称、label/error 关联、forced colors / 高对比度。
9. AI 模板感（AI Template Smell）：删除模板噪音，补真实信息结构。
10. `Minor`：对齐、间距、动效、文案和视觉润色（polish）。

不要先修 Minor。只要 Critical 仍存在，就不要把时间花在局部精致度上。

## 6. 修复策略

### Layout / Responsive

- 先找根因：固定宽度、容器 padding、grid/flex 断点、overflow、absolute/fixed 定位。
- 优先用响应式约束解决：`max-width`、`min-width: 0`、`min-height`、`flex-wrap`、合理断点、单列降级、稳定滚动容器。
- 修首屏布局关系时，不只看是否 overflow；还要处理 hero 两栏比例、搜索区与下一区块间距、视觉容器过空、mockup/插画/图表占位过大、组件像压住下一段内容等真实渲染问题。
- 对固定格式元素使用 `aspect-ratio`、`object-fit`、min/max size 和加载前占位，避免拉伸、裁切失控和 layout shift。
- 表格、代码块、富文本、图表和长列表优先放入明确的滚动/折叠/重排容器，不要让整页横向滚动。
- 修 sticky/fixed/z-index 问题时，明确层级顺序：导航、菜单、toast、弹窗、遮罩、loading overlay 不应互相压住。
- 修锚点、滚动吸附或滚动条跳动时，检查 `scroll-margin`、`scroll-padding`、`scrollbar-gutter`、scroll snap 和 sticky header 高度。
- 不要用 `overflow: hidden` 隐藏内容来掩盖布局问题，除非该内容确实是移动端次要信息且仍有替代路径。
- 修完必须复检相关视口。

### Typography

- 先修可读性：字号、行高、段落宽度、对比度、换行。
- 中文标题按语义自然断行，不为视觉块面强行拆句。
- 长英文、邮箱、文件名、数字等要有换行或截断策略。
- 数据密集界面要处理数字宽度、对齐、小数位、价格、日期和表格列扫描；必要时使用 tabular numeric 或稳定列宽。
- 长内容可使用 `overflow-wrap`、`word-break`、`hyphens`、`line-clamp`、合理 max-width 或 tooltip/详情入口。
- 不要通过盲目放大标题制造“高级感”。

### Color

- 先保证对比度和状态可识别。
- 限制强调色用途，避免主色到处出现。
- 保持现有品牌色，除非用户明确要求重设视觉方向。
- 修背景图、渐变、滤镜、mask、blend mode 或 backdrop-filter 时，优先保证文本可读性、性能和真实产品感。
- 当背景、渐变、玻璃拟态或强装饰是当前主题的一部分时，优先降低干扰、补对比、加约束或局部改 token；不要默认移除整套主题表达。
- 不要把整个页面改成单一风格色盘。

### Border / Radius / Shadow

- 优先收敛 token，而不是逐个组件手调。
- 只抽取最小必要 scale，例如 button/input、card、modal 三档。
- focus ring / outline 必须和边框体系兼容，不能为了视觉干净隐藏键盘焦点。
- 阴影只用于真正需要层级的 popover、modal、dropdown，不要每张卡都浮起来。
- 避免强描边、强发光、过度玻璃拟态。

### Components And States

- 先补可用性状态：focus-visible、disabled、loading、error。
- 再补体验状态：hover、active、empty、success。
- 可点击元素必须有符合语义的鼠标反馈：按钮、链接、搜索按钮、标签、chip、卡片操作、图标按钮和自定义 clickable 区域应有 `cursor: pointer` 或等价的可点击 affordance，并有不会导致布局位移的 hover/active 反馈。
- 状态反馈不要导致布局位移。
- 图标按钮必须有文本、tooltip 或 `aria-label`。
- 图标、SVG、头像和媒体控件要统一尺寸、线宽、颜色继承和对齐；SVG 优先随文字颜色或状态正确变化。
- cursor、pointer-events、touch-action、selection 行为要符合控件语义，不要让用户误判可点击、可拖拽或可选择区域。
- 修复输入、选择、下拉、多选、菜单等基础控件不一致时，先查项目是否已有对应自定义组件；已有则优先复用或扩展，不要继续手写原生控件样式。
- 如果项目没有对应自定义控件，但原生控件明显破坏当前视觉体系，优先封装最小可复用控件或共享样式，让核心筛选、编辑、批量操作沿用同一套交互和视觉规则。
- 原生控件修复要纳入 `appearance`、`accent-color`、`caret-color`、`color-scheme`、`field-sizing`、`resize`、file input 等能力，避免系统控件和产品视觉割裂。

### Data / Rich Content / Media

- 表格修复先处理可用性：列宽、`table-layout`、横向滚动容器、sticky header、长单元格换行、空状态和批量操作。
- 代码块、富文本、长列表和图表需要小屏策略：滚动、折叠、分组、单列化或摘要入口。
- 图片、视频、iframe、产品截图和图表要有稳定比例、合理裁切焦点、加载前占位和最大尺寸约束。
- 不要为了适配一个截图比例，把真实内容裁掉；关键内容被裁切时，应调整容器比例、object-fit 或内容布局。
- 多列内容、打印/分页场景和长内容组合要避免卡片、表格行、代码块被不自然拆开。

### Accessibility

- 先修键盘路径、focus-visible、可访问名称、label 关联。
- 图标按钮、关闭按钮、菜单按钮必须有清楚的 `aria-label` 或可见文本。
- 不依赖颜色作为唯一状态表达。
- 表单错误要和输入控件建立明确关系。
- 弹窗要处理 focus 进入、关闭后返回触发点、Esc/关闭按钮等基本路径。
- forced colors / 高对比度下，文本、边框、focus、图标和状态反馈仍要可辨认。

### Forms / Modals / Navigation

- 表单修复要形成闭环：label、help、error、disabled、loading、success。
- 选择类控件修复要覆盖 trigger、menu/popup、option、selected、disabled、empty、error、focus-visible、键盘路径和长选项。
- 弹窗先保证关闭、滚动、focus、destructive confirmation。
- 弹层修复要明确 layering：trigger、menu/popup、overlay、modal、toast 和 loading overlay 的 z-index 与关闭路径。
- 导航先保证桌面和移动端都有可用路径，再做视觉 polish。

## 7. 局部修复与系统修复

- 同一问题只出现一次，优先局部修复。
- 同一问题出现在 3 个以上组件或页面，优先考虑共享组件、设计 token 或工具类。
- 问题影响多个页面但根因不同，不要强行抽象。
- 抽象必须减少重复或降低风险，不要为了“更架构化”而抽象。
- 修共享组件前，先确认它不会破坏其它使用场景。

## 8. 改动范围控制

- 遵循项目现有框架、组件、样式体系和命名习惯。
- 优先改局部组件和样式，不做无关架构重构。
- 不换 UI 库，不重写路由，不删除业务逻辑。
- 不换主题、明暗模式、品牌色气质、组件形态或整体视觉方向，除非用户明确要求。
- 不为了统一视觉删除必要内容。
- 如果多个页面共享同一问题，优先修共享组件或 token。
- 如果只有单页问题，不要抽象过度。

## 9. 需要用户决策的问题

以下问题不要擅自决定，放入 `Open Questions`：

- 产品定位、目标用户、核心卖点不清。
- 真实数据、案例、客户、价格、指标需要确认。
- 品牌色、字体、视觉方向需要取舍。
- 删除业务内容会影响信息完整性。
- 修复需要引入新依赖、换组件库或重构设计系统。
- 修复需要改变核心信息架构、数据模型、真实业务流程或删除重要内容。

## 10. 修复后复检

每次修复后，至少复检被修问题对应的维度：

- 修 overflow：复检相关视口，尤其 375px、768px、1280px。
- 修首屏布局、搜索区、hero、mockup 或 section 间距：必须用浏览器复检至少一个桌面视口和一个移动端视口，确认没有压住、错位、空洞占位或新的布局跳动。
- 修媒体比例：复检 aspect-ratio、object-fit、裁切焦点、加载前占位和不同图片/视频比例。
- 修表格/富文本/代码块/长列表：复检小屏滚动、折叠、长内容、sticky header 和横向滚动容器。
- 修滚动和层级：复检 sticky header、锚点跳转、scroll snap、scrollbar-gutter、弹层遮挡和关闭路径。
- 修按钮/表单：复检 hover、active、focus-visible、disabled、loading、error。
- 修可点击元素：复检鼠标悬停是否显示 pointer / hover 反馈，键盘 focus-visible 是否可见，点击热区是否和视觉区域一致。
- 修选择/下拉/多选/菜单：复检打开、关闭、选中、清空、键盘路径、长选项、空状态和移动端。
- 修弹窗：复检打开、关闭、遮罩、滚动、focus、移动端。
- 修导航：复检桌面、移动端、当前状态、键盘路径。
- 修 token：复检同类组件是否一致，是否产生新冲突。
- 修文案/标题：复检长文案和中英文混排。
- 修可访问性：复检键盘路径、可访问名称、label/error 关联、forced colors / 高对比度和 reduced motion。

如果无法运行页面，说明哪些复检只能基于代码推断。

## 11. 验证

### 工程验证

优先运行项目已有命令：

- lint
- typecheck
- test
- build

没有这些命令时，不要强行添加新工具。说明未能验证的部分。

### 视觉验证

- 复检相关视口，至少覆盖被修问题出现的宽度。
- 对比修复前后的区域，确认没有引入新的遮挡、溢出、跳动。
- 对布局类问题，优先用截图或浏览器观察记录首屏区域关系、搜索区与下一区块、视觉容器占位和核心内容对齐是否恢复自然。
- 修视觉 token 时，检查同类组件是否仍统一。
- 修媒体、表格、滚动或弹层时，优先截图或记录具体视口，证明问题没有从局部转移到别处。
- 修主题内视觉问题时，确认缺陷已修复，同时原主题方向没有被替换。

### 交互验证

- 复检 hover、active、focus-visible、disabled、loading、error。
- 对主要可点击元素做 pointer / hover smoke test：主按钮、搜索按钮、链接、chip/tag、卡片 action、图标按钮和自定义 clickable 容器。
- 修弹窗、菜单、表单、导航时，必须复检打开、关闭、键盘路径和移动端。
- 修原生控件替换或自定义控件封装时，必须复检同类页面是否仍有原生控件混用，以及新控件是否符合现有 token。
- 修滚动、动效或 transform 时，必须复检滚动路径、点击热区、reduced motion 和布局是否跳动。
- 没有浏览器时，基于代码说明无法验证的布局、pointer、hover 和交互风险。

## 12. 输出格式

```markdown
## Fix Summary

- 修复了什么：
- 保留了什么：
- 主题方向是否保持：
- 未处理什么：

## Fixed Findings

- Finding:
  Change:
  Recheck:

## Changed Files

- `path/to/file`

## Verification

- 已运行：
- 未验证：

## Remaining Questions

- 需要用户确认的问题。
```

输出要具体，不要只写“优化了 UI”。说明修了哪个 finding、如何修、是否复检。

## 13. 禁止事项

- 不要把 fix 变成 redesign，除非用户明确要求。
- 不要在用户未要求时改变主题风格、明暗模式、品牌方向、组件形态或页面气质。
- 不要因为审美偏好重写页面。
- 不要在用户未指定 preset 时强行套用 preset 风格。
- 不要无关重构。
- 不要换技术栈或引入新依赖，除非修复必须且用户同意。
- 不要删除用户内容、业务逻辑、真实数据。
- 不要伪造 lint/build/browser 验证结果。
- 不要修一个问题引入新的响应式、状态或可访问性问题。
- 不要为了修一个局部问题，引入全局视觉变化。
- 不要用隐藏、裁切、删除内容来伪装修复 overflow、表格、媒体或长文案问题。
