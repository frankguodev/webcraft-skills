# UI Polish 工作流

用于在保留现有产品含义、信息结构、技术栈和视觉方向的前提下，让页面更精致、更真实、更有呼吸感、更少 AI 模板感。

Polish 是克制润色，不是 redesign。默认不换风格、不套 preset、不重写产品表达。

## 语言规则

读取本 workflow 前，skill 的 Locale Contract 已经选择了一个运行语言。继续使用这个语言，不要再打开配对的英文或中文 workflow/checklist/module 文件，除非用户明确要求翻译、双语比较、本地化或语言一致性检查。

## 1. 先诊断

动手前先判断粗糙感主要来自哪里：

- spacing / rhythm：间距忽密忽空、section 缺少停顿、容器过宽、组件 padding 不稳。
- typography：字号层级乱、行高压迫、标题断行不自然。
- color：颜色层级不清、强调色过度、对比度不足。
- radius / border / shadow：圆角、边框、阴影不成体系。
- states：cursor / pointer、hover、focus-visible、disabled、loading、error 缺失或粗糙。
- responsive：移动端拥挤、溢出、按钮太小、媒体比例不稳。
- template smell：文案空泛、badge 太多、装饰多于信息。

先定位主要问题，再润色。不要没有诊断就到处微调。

## 2. 边界

`polish-ui` 适合：

- 页面基本可用，但显得粗糙、不稳定、不够真实。
- 需要收敛 spacing、typography、color、radius、border、shadow、状态或模板噪音。
- 用户说“精致一点”“少点 AI 味”“优化细节”“整体太拥挤，呼吸感不够”。
- audit 已确认主要问题不阻断使用，剩余问题主要是 Minor polish、视觉体系收敛、状态完成度或 AI 模板感。

`polish-ui` 不适合：

- 核心流程不可用、严重溢出、遮挡、不可点击、弹窗不可关闭、表单无法提交。
- 跨页面组件体系严重混乱，需要系统性 audit / fix。
- 用户明确要求全新设计。

发现阻断问题先转 `fix-ui`；发现系统性问题先转 `audit-ui`；发现需要重做方向，说明原因并建议 redesign。

## 3. 与 Audit / Fix 衔接

- 来源是 audit findings：只处理视觉成熟度、模板噪音、状态细节、非阻断响应式和高价值 Minor；Critical 和阻断性 Major 先交给 `fix-ui`。
- 来源是 `Focused Audit`：优先 polish Top Findings 中与视觉系统、AI 模板感、控件一致性和风险视口相关的问题，不扩展成 Deep Polish。
- 来源是 `Deep Audit`：按 Fix Order 中排在可用性问题之后的 polish 项处理，不重新跑完整 audit。
- 来自 review / audit 的 finding 只能作为 polish 诊断线索；执行前必须重新确认它仍属于本次 polish 范围，且不会改变信息结构或重复同页已有内容。
- 用户只是说“更精致”但页面风险不明：先轻量诊断；发现系统性风险时建议 audit。

## 4. 保留与收敛

默认保留：

- 产品含义、业务逻辑、信息结构、主要内容顺序。
- 用户提供的真实文案、数据、价格、案例和品牌信息。
- 现有技术栈、组件库、路由和状态逻辑。
- 已有品牌方向、页面语气和视觉体系。

优先收敛：

- 用现有 token 修，不为 polish 新造一套颜色、圆角、阴影或 spacing 体系。
- 能局部修就不重构组件；能删除噪音就不添加新装饰。
- Polish 默认不新增页面级信息模块、数据概览、排行榜、地图、推荐区或内容集合；需要新增这些内容时，先停止并说明这已超出 polish。
- 收敛颜色、字体层级、圆角、边框、阴影和 spacing。
- 统一组件状态，而不是增加新的视觉效果。

可以轻微调整空泛、重复、明显模板化的文案；如果会影响产品表达，放入 `Open Questions`。

## 5. Polish 模式

### Light Polish / 轻量润色

- 范围通常是单个页面区域、单个组件或少量同类组件。
- 调整 spacing、对齐、局部 radius、border、hover/focus 状态。
- 不改信息结构、色盘和大组件。

### Standard Polish / 标准润色

- 默认模式，范围通常是一个页面、一个主要流程或一组紧密相关组件。
- 统一局部视觉 token，改善 typography、section 节奏、组件状态和响应式细节。
- 删除明显模板噪音，可小幅调整文案但不改变产品含义。

### Deep Polish / 深度润色

- 用于页面整体质感粗糙，但不需要 redesign 的情况。
- 允许页面级系统收敛：spacing、字体层级、颜色层级、radius、border、shadow、共享状态。
- 不跨整站重构组件体系；跨页面系统性问题应先 audit。

Deep Polish 遇到以下情况要停止并给 plan 或转 workflow：

- 需要改变信息架构、产品定位、核心文案或主要转化路径。
- 跨页面组件体系、token 体系或路由结构需要重构。
- 修复量超过当前页面或当前流程边界。
- 需要引入新依赖、替换组件库或改变技术栈。

## 6. 润色优先级

1. 可用性边界：阻断使用的问题转 `fix-ui`；polish 只处理不阻断流程的状态和细节。
2. 响应式细节：移动端换行、按钮高度、媒体比例、sticky 遮挡、弹窗滚动。
3. 信息层级：首屏主次、section 呼吸感、标题/正文节奏、CTA 层级。
4. 视觉 token：spacing、font scale、color、radius、border、shadow。
5. AI 模板感：过多 badge、bento grid、渐变光斑、空泛 slogan、装饰图标。
6. 微交互：cursor / pointer、hover、active、focus-visible、transition、图标文字对齐和点击热区。

不要先加动效或装饰。真正的精致通常来自更清晰的层级和更稳定的系统。

## 7. 分项策略

- Spacing：先统一页面容器、section 间距、分组关系和组件 padding；移动端缩小间距但不要贴边，也不要把桌面密度直接压缩到小屏。
- Typography：减少层级数量，控制字号/字重跳跃，改善 line-height、段落宽度和标题换行。
- Color：保留品牌色，限制强调色范围，先保证文字对比度和状态可识别。
- Radius / Border / Shadow：收敛小型 token scale；边框用于结构，阴影只用于真实层级。
- Components / States：补齐真实可点击元素的 cursor / pointer、hover、active、focus-visible、disabled、loading、empty、error、success；状态反馈不应改变元素尺寸、相邻布局或滚动位置。
- Icons / Click targets：统一图标尺寸、线宽、文字基线和图标文字间距；图标按钮和紧邻操作的点击 / 触控热区要足够清楚，不要只靠视觉小图标承担操作。
- AI Template Smell：优先删除、弱化或收敛无意义 badge、装饰图标、重复 CTA 和填空间卡片；只有不重复同页已有信息且服务当前任务时，才补少量辅助内容。

如果 token 混乱已经跨页面扩散，停止页面级 polish，建议先做 audit 或设计系统整理。

## 8. 参考 Audit 模块

Polish 不需要完整读取 audit checklist。只有来源不清或边界需要判断时，按需参考：

- `visual-system`：token、图标、媒体和视觉体系收敛。
- `components-states`：状态完成度。
- `ai-template-smell`：模板噪音。
- `responsive`：轻量视口 polish、换行、按钮高度、媒体比例、非阻断 overflow。
- `forms-controls`：不阻断流程但影响一致性的输入、选择、下拉、多选、菜单和表单状态。

如果模块判断显示问题已经影响核心任务、可访问性或数据操作，停止 polish，转 `fix-ui` 或 `audit-ui`。

## 9. 复检

润色后检查：

- 375px、768px、1280px 关键视口。
- 长标题、长按钮文案、中英文混排、长标签、badge、chip 和错误文案。
- 真实可点击元素的 cursor / pointer、hover、active、focus-visible、disabled、loading、error。
- 图标与文字是否对齐，图标线宽和尺寸是否统一，图标按钮热区是否足够。
- 弹窗、菜单、表单和导航是否仍可用。
- 视觉 token 是否更统一，是否引入新的不一致。
- 页面是否更容易扫描，section 是否有停顿，主要 CTA 是否没有被同权重元素淹没。
- 是否仍保留原页面风格和产品含义。
- 信息重复：确认没有把同页已有列表、统计、分类、标签或 CTA 复制到新的装饰区或摘要区。

页面可运行且环境允许时，打开目标页面做轻量复检：

- 对齐用户实际入口：启动命令、URL / 端口、路由、登录态和主要状态。
- 如果本次 polish 临时启动 dev / preview / static server，记录命令、URL / 端口和进程信息；复检结束后关闭临时服务，并检查目标端口是否仍被占用。复用用户已有服务时只记录，不擅自关闭。
- 在 Windows、npm、Next.js、Vite、Storybook 等多进程启动场景下，不要只依赖启动返回的父 PID；无法确认端口残留属于本次 polish 时，不要关闭，并在 `Temporary service(临时服务)` 中说明。
- 如果生成截图，优先保存到 `examples/reports/assets/polish/` 下，按本次润色建立子目录；`before` / `after` 截图放在同一目录，文件名包含页面或区域、视口和阶段，例如 `home-375-before.png`、`home-375-after.png`。
- 临时对照文件、视觉草稿、一次性截图、验证脚本或临时数据默认在输出前删除；只有用户要求保留或作为证据产物保留时才放入 `examples/reports/assets/polish/<polish-run>/` 并在 `Screenshots(截图)` 或 `Temporary service(临时服务)` 中说明。
- 无法打开浏览器、启动服务或保存截图时，说明原因和剩余风险。

## 10. 输出格式

```markdown
## Polish Summary / 润色摘要
- Source(来源):
- Boundary(边界):
- Preserved(保留):
- Adjusted(调整):
- Removed(删除):

## Before / After / 前后对照
- Before:
- After:

## Changed Files / 修改文件
- `path/to/file`

## Verification / 验证
- Checked(已检查):
- Not verified(未验证):
- Screenshots(截图):
- Temporary service(临时服务):

## Remaining Questions / 待确认问题
- ...
```

输出要说明具体收敛了哪些视觉细节、删除了哪些模板噪音，以及是否保留原风格。

输出前确认 polish 过程中创建的临时文件已删除；保留的文件必须是用户要求保留、证据产物或真实项目改动，并在输出中列明路径。

## 11. 禁止事项

- 不要把 polish 变成 redesign，或在用户未指定 preset 时强行套用 preset。
- 不要默认改成暗色、电影感、极简或 SaaS 风。
- 不要为了高级感增加渐变、光斑、卡片、动效。
- 不要删除真实业务信息、重写产品定位或核心文案，除非用户要求。
- 不要引入新依赖、换组件库、重写路由或改变业务逻辑。
- 不要用隐藏 overflow、裁切内容、缩小到不可读或删除必要信息来制造“看起来更干净”的假 polish。
- 不要只靠压缩间距、缩小字号或塞满卡片来制造“整齐”，这会破坏呼吸感和可读性。
- 不要伪造浏览器验证结果。
- 不要把本次验证临时启动的 dev / preview / static server 留在后台占用端口，除非用户明确要求保留运行。
- 不要关闭 polish 开始前已存在或无法确认属于本次 polish 的服务。
