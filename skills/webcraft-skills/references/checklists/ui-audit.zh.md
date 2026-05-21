# UI Audit Rubric

用于严格审查 AI 生成网页、落地页、应用界面或整站视觉质量。目标不是表达审美偏好，而是发现会让页面显得粗糙、不可用、不真实、不像成熟产品的问题。

审查时按 `Critical`、`Major`、`Minor` 分级。每个问题都必须包含：位置、现象、影响、修复建议。

## 目录

- 使用方式
- 高风险模块
- 页面语境
- 审查边界
- 去重与优先级
- 不要报告的问题
- 设备检查矩阵
- 证据标准
- Good Finding Examples
- 严重程度
- 评分模型
- 页面类型差异
- Layout
- Typography
- Color
- Border, Radius, Shadow
- Components And States
- Navigation
- Forms
- Modals And Overlays
- Responsive
- Motion
- Accessibility
- Content Stress Test
- AI Template Smell
- 修复优先级参考

## 使用方式

1. 先确认审查对象：单页、组件、截图、整站还是代码。Rubric 是判断库，不是每次 audit 都要完整执行的清单；实际检查深度由 `Quick / Standard / Deep Audit` 决定。
2. 优先检查可用性和结构问题，再检查视觉一致性，最后检查审美细节。
3. 不要因为个人喜好否定已有产品定位；只指出会影响可用性、清晰度、一致性、真实感的问题。
4. 如果没有浏览器环境，基于代码做静态审查，并明确说明未验证的视口和交互。
5. 审查时先看用户可见结果，再用当前项目的实现方式寻找证据。证据可以来自组件、CSS 类、设计 token、DOM 结构、断点配置、截图或交互实测；布局、hover、cursor、focus 和弹层问题优先用浏览器实测确认。
6. 输出时先列问题，再给修复顺序；不要先写长篇总结。

## 高风险模块

主文件仍是完整 rubric。遇到以下高风险问题时，优先读取对应模块作为聚焦检查路径；模块是补强，不替代本文件，也不要求重复报告同一问题。

- `modules/layout.zh.md`：首屏区域关系、hero/search/chip/next section 的布局断裂、错位、空洞、遮挡和层叠问题。
- `modules/components-states.zh.md`：cursor、hover、active、focus-visible、loading、disabled、可点击信号和自定义 clickable 区域。
- `modules/responsive.zh.md`：375px / 768px / 1280px 关键视口稳定性、横向滚动、固定宽度、媒体比例、sticky/fixed 遮挡和中间断点。
- `modules/forms-controls.zh.md`：表单、搜索筛选、选择控件、批量操作、错误恢复、原生控件混用和移动端表单可用性。
- `modules/visual-system.zh.md`：字体层级、颜色职责、spacing、radius、border、shadow、装饰克制和主题保留。
- `modules/accessibility.zh.md`：键盘路径、focus-visible、可访问名称、语义结构、目标尺寸、状态表达和高对比度风险。
- `modules/ai-template-smell.zh.md`：首屏产品清晰度、虚假内容、模板拼贴、过度装饰、空泛文案和信息可信度。

## 页面语境

判断 UI 问题前，先理解页面语境。缺少信息时根据代码和页面内容推断，但要标明推断。

必须识别：

- 页面类型：landing page、dashboard、app screen、portfolio、docs、form、checkout、admin、marketing site 等。
- 核心任务：阅读、注册、购买、搜索、筛选、管理、创作、联系、下载、预约等。
- 目标用户：普通用户、开发者、企业客户、创作者、内部运营、管理者等。
- 内容密度：低密度品牌表达、中密度产品介绍、高密度数据操作。
- 技术约束：已有组件库、工具类 CSS、CSS Modules、自定义 CSS、设计 token、响应式断点、框架和渲染方式。
- 设计语气：工具型、内容型、产品型、品牌型、编辑型、运营后台型。

不要用同一套审美标准审查所有页面。dashboard 不应该被审成电影感官网，作品集不应该被审成企业 SaaS，表单页不应该被审成视觉海报。

## 审查边界

- 不要因为个人审美否定产品定位。
- 不要把所有页面都建议改成同一种“高级感”。
- 不要建议无关重构、换框架、换组件库，除非现有实现阻碍修复。
- 不要虚构浏览器验证结果；没有实际打开页面时，必须说“未实测”。
- 不要把没有验证的问题写成确定事实；使用“代码上看可能”“需要在 375px 验证”等措辞。
- 不要为了统一视觉而删除必要业务信息。
- 不要把营销页强行审成后台工具，也不要把后台工具强行审成落地页。
- 不要只给抽象建议，必须给出可执行修复方向。

## 去重与优先级

- 同一根因只报告一次，放在最能解释问题的分类下。
- 如果一个问题同时影响 Layout 和 Responsive，优先归到 Responsive。
- 如果一个问题同时影响 Components 和 Accessibility，优先归到 Accessibility，除非主要问题是状态缺失。
- 如果一个问题由 token 混乱导致，例如 radius、border、shadow 全部不一致，可以归为一个系统性 `Major`，不要拆成十几个 Minor。
- `Critical` 不要被合并进大而泛的系统问题；阻断使用的问题必须单独列出。
- 不要为了覆盖所有分类而强行输出问题。没有发现就跳过该分类。

## 不要报告的问题

- 纯主观偏好，且无法说明对可用性、清晰度、一致性或真实感的影响。
- 没有位置、没有证据、无法复现或无法推断的问题。
- “可以更好”但没有明确修复方向的问题。
- 为了凑数量而输出的低价值 Minor。
- 与用户目标无关的品牌、营销、文案策略扩展。
- 需要产品决策才能判断的问题，除非明确标为 Open Question。
- 不要把所有差异都当成不一致。有些差异是为了建立层级。

## 设备检查矩阵

默认 audit 至少检查或静态推断：

- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px

严格 audit 增加：

- Small mobile: 360px
- Large mobile: 390px 或 430px
- Tablet large: 834px
- Desktop large: 1440px
- Wide: 1920px

如果不能实际运行页面，仍要基于 CSS、布局代码和断点推断风险，并明确哪些视口未验证。

## 证据标准

每个问题必须尽量具体。证据应该包含视口、区域、组件、状态或代码位置。

不要写：

```text
移动端布局不好。
```

要写：

```text
在 375px 宽度下，hero CTA group 使用固定横向排列，secondary button 右侧可能超出容器，导致触控区域不完整。
```

不要写：

```text
颜色不高级。
```

要写：

```text
同一屏内 badge、主按钮、数据高亮和链接都使用同一高饱和紫色，导致用户无法判断真正的主操作。
```

## Good Finding Examples

### Example 1: Responsive Critical

```markdown
### 1. Mobile hero CTA overflows
Location: `src/app/page.tsx` hero section
Evidence: 在 375px 宽度下，CTA group 仍保持横向排列，secondary button 右侧超出容器约 24px。
Impact: 移动端用户无法完整阅读和点击次要操作，首屏核心转化区域不可用。
Fix: 允许 CTA group 在小屏换行或改为纵向排列；给按钮设置稳定 min-height；检查父容器 `overflow-x` 和 horizontal padding。
```

### Example 2: Major System Issue

```markdown
### 1. Radius system is inconsistent across core components
Location: `Button`, `Card`, `Input`, `Dialog`
Evidence: 主按钮使用 999px pill，卡片使用 24px，输入框使用 4px，弹窗使用 16px；这些组件在同一页面高频出现。
Impact: 页面像多个模板拼接，组件之间缺少同一产品系统的归属感。
Fix: 定义小型 radius scale，例如 button/input 6px、card 8px、modal 10px；只保留 pill 用于少量标签或特殊 CTA。
```

### Example 3: AI Template Smell

```markdown
### 1. Hero relies on generic AI-template decoration instead of product clarity
Location: homepage hero
Evidence: 首屏包含 3 个 badge、4 个统计数字、抽象渐变背景和大型 mockup，但没有说明产品给谁用、解决什么问题、下一步做什么。
Impact: 页面看起来完整但信息不可决策，用户只能感受到氛围，无法理解产品价值。
Fix: 删除非必要 badge 和统计数字；把 H1 改成具体主张；用一段说明解释目标用户和核心任务；保留一个主 CTA 和一个次 CTA。
```

## 严重程度

### Critical

会直接导致页面不可用、核心信息不可读、核心操作不可完成，或在常见设备上明显崩坏。

典型情况：

- 375px 等常见移动宽度出现横向滚动，或主要内容、表格、代码块、产品图被裁切。
- 主要 CTA、导航、表单、弹窗不可点击、不可关闭或不可读。
- 首屏信息层级混乱到用户无法判断页面主题和下一步动作。
- 文本对比度严重不足，核心内容无法阅读。
- 弹窗、遮罩、sticky 元素遮挡主要内容且无法恢复。
- 键盘无法完成核心路径，focus-visible 不可见，或关键图标按钮没有可访问名称。
- 表单提交、校验、loading、错误恢复缺失，导致用户无法完成或确认核心任务。
- 真实内容、长文案、不同图片比例或数据量变化导致核心信息/操作消失、溢出或不可点击。

### Major

不会完全阻断使用，但显著降低专业感、可信度、扫描效率或响应式稳定性。

典型情况：

- 组件缺少关键状态，例如 hover、active、focus-visible、disabled、loading、empty、error、success。
- 可点击元素没有明确鼠标可点击信号，例如按钮、搜索按钮、链接、标签、卡片操作或自定义 clickable 区域悬停时不显示 pointer 或没有 hover 反馈，导致用户误判是否能点。
- spacing、字体层级、圆角、边框、颜色体系明显不统一。
- 移动端和小屏幕桌面可用但拥挤、换行不自然、点击区域偏小，呼吸感不足。
- 平板、大屏或中间断点布局松散、过宽、过挤，响应式策略缺少稳定规则。
- 信息层级、CTA 优先级或页面叙事不清，用户需要反复阅读才能理解主任务。
- 导航、当前状态、面包屑、步骤进度或页面位置反馈不足，用户容易迷路。
- 表单、筛选、搜索、表格、批量操作等状态不完整，降低操作信心和恢复能力。
- 卡片、bento grid、徽章、统计数字过多，页面呈现明显模板拼贴感。
- 内容只适配理想短文案或固定数据量，真实文案、空状态、多数据量会明显破坏布局节奏。

### Minor

不会明显影响使用，但会降低精致度、节奏感或整体完成度。

典型情况：

- 局部对齐、间距、边框透明度、阴影强度略不稳定。
- 文案略空泛，标签或图标略多。
- 动效存在但不够克制。
- hover、focus、loading、empty 等状态存在，但反馈强度、节奏或文案不够统一。
- 个别标题、按钮、标签或辅助文字换行不够自然，但仍可阅读和操作。
- 个别视口下 section spacing、图片裁切或卡片高度略不理想，但不影响核心流程。
- 图标、标签、装饰元素略显通用或数量略多，但没有干扰信息层级。
- 同类组件在尺寸、内边距、图标线宽或文案语气上有轻微差异。
- 输入框、选择框、下拉框、多选框等仍使用突兀的原生样式，或项目已有自定义表单控件但局部没有对应使用，导致细节上不够协调。

## 评分模型

每项 0 到 5 分：

- `Usability`：核心任务是否能顺利完成。
- `Clarity`：信息层级、页面主题、下一步动作是否清楚。
- `Consistency`：spacing、typography、颜色、圆角、边框、组件体系是否统一。
- `Responsiveness`：移动端、平板、桌面是否稳定。
- `Interaction States`：hover、active、focus-visible、disabled、loading、empty、error、success 是否完整。
- `Control System Fit`：输入、选择、下拉、多选、菜单、批量操作等基础控件是否沿用项目已有组件体系。
- `Visual Maturity`：是否像成熟产品，而不是粗糙 demo。
- `AI Template Smell`：分数越高表示 AI 模板味越低。

`Overall` 不要简单平均。Critical 问题会显著拉低总分；如果核心流程不可用，总分最高不应超过 2.5。

## 页面类型差异

### Landing Page / Marketing Site

重点检查：

- 首屏是否在 5 秒内说明“是什么、给谁用、解决什么问题、下一步做什么”。
- CTA 是否过多或层级混乱。
- section 是否像模板拼接，叙事是否连贯。
- 社会证明、数据、案例是否真实可信，是否疑似虚构。
- 装饰是否掩盖信息不足。

### SaaS / Product Page

重点检查：

- 产品能力是否具体，而不是只有抽象价值主张。
- 截图、mockup、功能卡片是否服务理解，而不是炫技。
- pricing、feature、FAQ、CTA 的顺序是否符合购买/试用决策。
- 关键功能和目标用户是否匹配。

### Dashboard / Admin

重点检查：

- 信息密度是否适合重复使用，而不是像营销页。
- 表格、过滤器、搜索、分页、排序、批量操作是否可用。
- 表格列宽、table-layout、border-collapse、border-spacing、caption、sticky header 和横向滚动是否支持真实数据量。
- 筛选、下拉、多选、批量操作、危险操作是否沿用后台已有组件和状态体系。
- loading、empty、error、permission、offline 等状态是否完整。
- 数据层级是否清楚，是否把所有指标都做成同等重量。
- 大屏是否能高效扫描，小屏是否有合理降级策略。

### App Screen / Tool

重点检查：

- 主任务路径是否短且清楚。
- 工具栏、侧边栏、面板、状态栏是否稳定，不因内容变化跳动。
- 快捷操作和危险操作是否区分清楚。
- 操作反馈是否及时，失败后是否可恢复。

### Form / Checkout / Onboarding

重点检查：

- 每一步目标是否明确，用户是否知道还剩多少步骤。
- 输入、校验、错误恢复、loading、success 是否形成闭环。
- 移动端键盘、输入框、按钮、错误提示是否互不遮挡。
- 价格、隐私、风险、确认信息是否清晰。

### Portfolio / Personal Site

重点检查：

- 人、作品、能力或观点是否成为主角，装饰是否抢内容。
- 项目卡片是否提供真实信息：角色、时间、问题、贡献、结果。
- 视觉风格是否服务个人定位，而不是套用通用模板。
- 联系入口是否清楚但不过度销售。

### Docs / Content Site

重点检查：

- 阅读宽度、目录、锚点、代码块、搜索是否可用。
- heading 层级是否帮助扫描。
- 代码块和表格是否在移动端溢出。
- 当前页面、当前位置、下一步阅读路径是否明确。

## Layout

### Critical

- 页面在 375px 常见移动宽度下出现横向滚动。
- 主内容、主按钮、导航、弹窗或表格被裁切，用户无法完成核心任务。
- 元素重叠导致文本不可读或按钮不可点击。
- sticky、fixed、absolute 或 z-index 层级错误导致导航、toast、菜单、弹窗互相遮挡，且用户无法恢复。
- 首屏没有明确主次，标题、视觉、背景、按钮同时抢注意力。

### Major

- section 间距忽大忽小，页面节奏像多个模板拼接。
- 首屏区域关系不自然：hero 视觉容器、搜索区、标签组或下一段内容之间出现压住、断裂、错位、过度空洞或像占位未完成。
- 图片、mockup、插画、图表或装饰容器内容过少但占位过大，导致页面构图失衡或让用户误以为资源未加载。
- 页面最大宽度失控，大屏阅读过宽，小屏左右贴边。
- grid、flex、card 在移动端只是缩小，没有合理降级为单列或更简单结构。
- display、position、overflow、min/max size 等基础布局规则零散，导致同类区域在不同页面表现不一致。
- columns、多列内容、分页/打印断点、break-before/after/inside 等断裂规则导致卡片、表格行、代码块或内容段落被不自然拆开。
- visibility、isolation、float/clear 或 box-sizing 使用不当，导致不可见元素仍占位、浮动影响后续内容、层叠上下文难以预测或尺寸计算混乱。
- 卡片过多、卡片套卡片、浮层过多，信息密度失控。
- Dashboard、landing page、portfolio 等页面类型的布局语言混用，产品语境不清。

### Minor

- 局部 alignment 不精确，卡片高度或内容基线略不统一。
- section 内部 padding 和 section 之间 spacing 比例不够稳定。
- 分隔线、空白、容器宽度略显随意。

### Fix Strategy

- 先修 overflow、遮挡、重叠和不可点击。
- 再统一页面容器宽度、section spacing、首屏区域关系、grid/flex 降级规则、层级规则和滚动区域。
- 最后减少不必要卡片和浮层，让每个 section 只表达一个核心信息。

## Typography

### Critical

- 核心标题或正文在常见视口不可读、被裁切或严重溢出。
- 按钮、导航、表单 label 因换行或挤压导致含义不清。
- 字体对比、字号、行高组合导致主要内容难以阅读。

### Major

- H1/H2/H3/body/button/caption 层级过多或无序。
- 中文标题强行断句，英文短词被机械拆行，语义不完整。
- 行高过紧，段落过宽或过窄，阅读节奏压迫。
- 字重乱跳，依赖超粗标题或超大字号伪装高级感。
- 中英文混排、数字、日期、邮箱、文件名等长内容没有处理策略。
- 数字、价格、日期、表格列或仪表盘指标没有稳定的 numeric 规则，导致数据扫描时左右跳动或小数位难比较。
- 列表、引用、代码片段、tab 缩进、上下标、图文基线或 inline icon 对齐粗糙，破坏阅读节奏。

### Minor

- 个别标签、caption、辅助文字偏小或偏淡。
- 按钮文字视觉居中不够好。
- 标题和正文之间的距离略不协调。
- 下划线、删除线、链接装饰、大小写转换、letter spacing 或 hyphenation 细节略不统一。

### Fix Strategy

- 建立少量稳定层级：H1、H2、body、caption、button 即可覆盖大多数页面。
- 中文标题按语义断行，不为视觉块面强行换行。
- 给长词、长标题、按钮文案设置自然换行或宽度约束。
- 数据密集界面优先使用稳定数字宽度、对齐和小数位规则，提升扫描效率。
- 优先改善 line-height、max-width、font-weight，再考虑换字体。

## Color

### Critical

- 核心文字与背景对比度严重不足。
- 错误、成功、禁用、当前状态只靠颜色区分，且不可理解。
- 背景图、渐变或纹理压过文字，导致主要信息不可读。

### Major

- 主色或强调色使用过多，页面失去层级。
- 页面被单一色系统治，显得廉价、模板化或缺少真实产品层次。
- 高饱和蓝紫、霓虹、彩虹渐变、廉价科技色影响产品可信度。
- 浮层、边框、背景、文字颜色之间没有清楚层级。
- 背景图、背景定位、重复、裁切、固定背景或 background-size 策略不稳定，导致不同视口可读性变化大。
- blend mode、opacity、mask、filter 或 backdrop-filter 用得过重，牺牲文本对比度、性能或真实产品感。

### Minor

- 辅助文字略淡，边框颜色略重或略轻。
- 暗色界面缺少微妙层次，浅色界面缺少结构分隔。
- hover、active、focus 状态颜色变化不够细腻。

### Fix Strategy

- 先保证文字对比度和状态可识别。
- 限制强调色用途：主 CTA、当前状态、关键数据、小面积视觉锚点。
- 用背景、边框、文字透明度建立层级，不用大量高饱和色块制造层级。

## Border, Radius, Shadow

### Critical

- 边框或阴影导致内容可读性下降，或让可点击区域边界不清。
- 弹窗、菜单、输入框边界不明确，用户无法判断交互范围。

### Major

- 卡片、按钮、输入框、弹窗圆角体系冲突，产生拼贴感。
- 边框有的很重、有的很淡、有的颜色偏离体系。
- outline / focus ring 与边框体系冲突，或者为了视觉干净被隐藏，影响键盘可用性。
- 阴影过强，页面像一堆悬浮卡片叠在一起。
- 过度玻璃拟态、强描边、强发光让界面显得廉价。

### Minor

- 少量组件 radius 差异不大但不够统一。
- 分隔线透明度略不稳定。
- hover 边框反馈略突兀。

### Fix Strategy

- 定义小而稳定的 radius scale，例如 button/input 6px、card 8px、modal 10px。
- 边框用低对比度建立结构，不要用强描边装饰。
- 阴影只用于真正需要层级的元素，例如 popover、modal，不要每张卡都浮起来。

## Components And States

### Critical

- 主要按钮、导航、表单、菜单没有可用的交互反馈。
- 核心可点击元素缺少 pointer、hover、active 或 focus-visible 反馈，用户无法确认是否可点击。
- 表单错误不可见，用户不知道如何修正。
- 异步操作没有 loading/disabled，导致重复提交或状态不明。
- 图标按钮没有文本、tooltip 或 aria-label，含义不可理解。

### Major

- 缺少 hover、active、focus-visible、disabled、loading、empty、error、success 中的关键状态。
- 主按钮、次按钮、危险按钮层级不清。
- 列表、表格、卡片只适配固定数量或固定短文本。
- 组件尺寸在 hover 或内容变化时跳动。
- 输入、选择、下拉、多选、菜单等基础控件缺少统一组件体系：已有自定义控件却混用浏览器原生控件，或没有自定义控件但核心流程中的原生控件明显不符合网站风格。
- 图标、SVG、头像、媒体控件在尺寸、线宽、颜色继承、对齐或可访问名称上不统一。
- cursor、pointer-events、touch-action 或选择行为与控件语义不匹配，用户无法判断哪里可点、可拖、可选；自定义按钮、chip、tag、card、图标按钮和 clickable div 尤其要检查。
- appearance、accent-color、caret-color、color-scheme、field-sizing、resize 等原生控件能力没有被纳入视觉体系，导致输入、选择、开关、文本域和系统控件风格割裂。

### Minor

- 状态反馈存在但不够克制或不够统一。
- loading skeleton 或 empty state 文案略粗糙。
- 图标风格、大小、线宽不完全一致。

### Fix Strategy

- 先补齐可用性状态：focus-visible、disabled、loading、error。
- 再统一按钮、输入框、卡片、菜单的尺寸、边框、圆角、cursor 和状态反馈。
- 为 Select / Dropdown / MultiSelect / Checkbox / RadioGroup 等高频基础控件建立统一样式或组件封装。
- 所有 hover/active/selected 反馈必须不改变布局尺寸；图标和 SVG 应随文字颜色、状态和尺寸正确适配。

## Navigation

### Critical

- 移动端导航消失且没有替代入口。
- 当前页面、当前 section 或当前状态无法判断。
- sticky nav 遮挡内容或与弹窗、toast 冲突。

### Major

- 导航项过多，优先级不清。
- Logo、站点名、主要入口位置不稳定。
- 移动端菜单无法关闭、无法键盘操作或遮罩层混乱。

### Minor

- 当前状态反馈偏弱。
- 导航 hover/focus 细节不统一。
- 移动端菜单动效略重。

### Fix Strategy

- 保证导航在桌面和移动端都有真实可用路径。
- 控制导航项数量，把次级入口放入菜单或 footer。
- sticky nav 必须有足够背景层级，但不能像厚重浮层。

## Forms

### Critical

- 输入框缺少 label 或明确上下文，用户不知道要输入什么。
- 错误状态不可见或不说明如何修正。
- 提交后没有 loading、success、error 反馈。

### Major

- placeholder 被当作唯一 label。
- focus 状态不明显，键盘用户难以定位。
- 帮助文字、错误文字、禁用态、必填态样式不统一。
- 移动端输入框太小或贴边。
- 输入、选择、下拉、多选等控件样式与产品视觉系统明显割裂，降低表单可信度和操作信心。

### Minor

- 表单间距略松散或略拥挤。
- 错误文案不够具体。
- 输入框与按钮高度略不匹配。
- 非核心区域的输入框、选择框、下拉框、多选框仍使用突兀的原生样式，或未沿用项目已有自定义表单控件；如果出现在核心筛选、编辑或批量操作流程，应升为 `Major`。

### Fix Strategy

- 所有输入都要有 label 或等价上下文。
- 错误文案要说明问题和修复方式。
- 表单状态要形成闭环：idle、focus、disabled、loading、error、success。
- 如果没有现成自定义控件，封装与现有按钮、输入框、菜单、弹窗一致的选择类控件，而不是让浏览器默认样式混入核心流程。

## Modals And Overlays

### Critical

- 弹窗不可关闭。
- 移动端弹窗内容溢出且无法滚动。
- 遮罩或弹窗遮挡关键内容后无法恢复。
- destructive action 没有确认或明确反馈。

### Major

- focus 没有进入弹窗，关闭后没有回到触发点。
- 弹窗宽度、高度、padding 在移动端不合理。
- 遮罩太重或太轻，层级不清。
- 弹窗内容像卡片堆叠，主次不明。

### Minor

- 关闭按钮位置不够稳定。
- 弹窗动效略重。
- footer 按钮间距或层级略不自然。

### Fix Strategy

- 先保证关闭、滚动、focus、destructive confirmation。
- 再调整移动端尺寸和内容层级。
- 弹窗只承载一个主要任务，不要塞完整页面。

## Responsive

### Critical

- 375px、768px、1280px 任一关键视口出现核心流程不可用。
- 图片、产品 mockup、表格、代码块导致横向滚动。
- CTA、导航、表单、弹窗在移动端不可操作。
- 图片、视频、iframe、图表或产品截图没有稳定比例，导致加载前后布局跳动、拉伸变形或关键内容被裁切。

### Major

- 桌面正常，移动端只是缩小版，阅读和点击体验差。
- 大屏内容过宽或过散，没有合适 max-width。
- 平板断点被忽略，布局处于尴尬中间态。
- fixed/sticky 元素遮挡内容。
- 表格、代码块、富文本、图表或长列表缺少小屏滚动、折叠或重排策略。
- scroll-behavior、scroll-margin、scroll-padding、scrollbar-gutter、scroll snap 或滚动条样式处理不当，导致锚点跳转被 sticky header 遮挡、滚动吸附卡顿或布局因滚动条出现而跳动。

### Minor

- 某些 section 在移动端 spacing 略大或略小。
- 图片裁切点不够理想。
- 部分文案换行不够漂亮但仍可读。

### Fix Strategy

- 至少检查 375px、768px、1280px。
- 先修横向滚动和不可操作，再修布局节奏。
- 对固定格式元素使用稳定尺寸、aspect-ratio、min/max width，而不是靠内容撑开。
- 媒体内容优先检查 aspect-ratio、object-fit、裁切焦点和加载前占位。

## Motion

### Critical

- 动效阻碍阅读、点击或状态理解。
- 高频动画、自动播放、滚动飞入让用户无法稳定操作。

### Major

- hover 后元素放大、位移，影响周围布局。
- 多个区域同时进入动画，抢注意力。
- 没有考虑 reduced motion。
- loading 动效过强，显得廉价或焦虑。
- transform origin、perspective、backface、scale、translate、rotate 或 zoom 使用不当，导致元素模糊、裁切、层级异常或点击热区和视觉位置不一致。
- will-change 滥用或长时间保留，增加性能压力却没有真实交互收益。

### Minor

- transition duration 或 easing 不统一。
- transition delay、transition property 或 transition behavior 不统一，状态反馈显得迟钝或不可预测。
- 轻微动效存在但对层级帮助不大。

### Fix Strategy

- 动效只服务反馈、层级和轻微氛围。
- hover/active 使用颜色、边框、透明度变化，避免尺寸和位置变化。
- 尊重 reduced motion。

## Accessibility

### Critical

- 键盘无法完成核心操作。
- focus-visible 不可见。
- 重要图标按钮无可访问名称。
- 重要状态只靠颜色表达。

### Major

- heading 顺序混乱，影响结构理解。
- 表单 label、错误提示和输入控件没有明确关联。
- 弹窗没有合理 focus 管理。
- 交互目标过小。
- 自定义下拉框、多选框、菜单或弹窗缺少合理键盘操作、焦点顺序或状态表达。
- 高对比度 / forced colors 模式下，文本、边框、focus、图标或状态反馈不可辨认。

### Minor

- aria-label 文案不够具体。
- 非核心区域的语义结构可改进。

### Fix Strategy

- 先保证键盘路径、focus-visible、可访问名称。
- 再修语义结构和状态表达。
- 不依赖颜色作为唯一状态区分。

## Content Stress Test

AI 生成 UI 经常只适配理想短文案。审查时必须考虑真实内容压力。

### 必测内容

- 长中文标题、长英文标题、长单词。
- 中英文混排、数字、日期、价格、邮箱、文件名。
- 按钮文案从 2 个字变成 10 个字。
- 卡片内容长短不一。
- 列表数量为 0、1、3、10、20。
- 表单错误信息较长。
- 图片比例不一致，头像缺失，产品截图尺寸不同。
- 视频、iframe、图表、代码块、富文本、表格和长列表在不同宽度下的表现。
- 用户名、组织名、项目名非常长。
- 下拉选项很长、多选数量很多、筛选条件较多。
- 多列内容、打印/分页场景、锚点跳转、滚动吸附、sticky header 与长内容组合后的表现。

### Critical

- 真实内容导致核心操作不可见、不可点击或页面横向滚动。

### Major

- 真实内容导致卡片高度混乱、标题断行难看、按钮变形、列表难以扫描。

### Minor

- 真实内容仍可用，但局部节奏和对齐变差。

### Fix Strategy

- 给文本容器设置合理 max-width、line-height、wrapping。
- 给图片和 mockup 设置 aspect-ratio、object-fit、min/max size。
- 给按钮和标签设置稳定高度与换行策略。
- 给长下拉选项、多选标签、筛选条件设置截断、换行、弹层宽度和空状态策略。

## AI Template Smell

这一类不是单纯审美问题，而是判断页面是否像 AI 拼出来的模板。

### Critical

- 页面只有巨大标题、抽象背景和 CTA，没有真实信息结构。
- 文案、数据、案例明显虚构或误导。
- 首屏像海报而不是可用网站，用户不知道产品做什么。

### Major

- 过多 badge、统计数字、bento grid、渐变光斑、装饰图标。
- 每个 section 都像独立模板，缺少统一叙事和视觉系统。
- 卡片密度、图标数量、背景特效用来掩盖信息不足。
- 文案充满“重新定义”“下一代”“释放潜能”等空泛表达。

### Minor

- 局部装饰略多。
- 个别文案略营销化。
- 图标或标签略显通用。

### Fix Strategy

- 删除无意义装饰，保留服务信息和操作的元素。
- 用真实内容、明确结构和稳定组件体系建立可信度。
- 文案回答“是什么、给谁用、解决什么问题、下一步做什么”。

## 修复优先级参考

1. 修 Critical：overflow、遮挡、不可点击、不可读、键盘不可达、导航/弹窗/表单不可用。
2. 修 Major：响应式降级、信息层级、组件状态、视觉 token、一致性。
3. 修 Content Stress：长文案、真实数据、不同数量和比例。
4. 修 AI Template Smell：删除模板噪音，补真实信息结构。
5. 修 Minor：对齐、细节、动效、文案 polish。

不要一开始就重写视觉风格。好的 UI 修复顺序永远是：先可用，再清晰，再一致，最后精致。
