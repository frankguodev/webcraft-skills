# Components And States 高风险模块

用于补强 `ui-audit.zh.md` 中组件状态和可点击信号的检查，尤其针对 AI 页面常漏的 cursor、hover、focus-visible 和自定义 clickable 区域。

## 使用时机

- 页面中有按钮、搜索按钮、链接、chip、tag、卡片操作、图标按钮、菜单、筛选器、表单控件或自定义 clickable div。
- 用户反馈“点哪里不清楚”“鼠标放上去没反应”“按钮像文字/卡片不像能点”。
- fix 后页面看起来没问题，但交互细节仍像静态稿。

## 必查点

- 可点击信号：所有真实可点击元素在鼠标悬停时应有 `cursor: pointer` 或等价平台反馈。
- hover/active：状态反馈应明确但不改变布局尺寸，不通过放大、位移或边框变厚造成跳动。
- focus-visible：键盘访问核心路径时必须能看到焦点，且焦点样式不能被 outline reset 或 overflow 裁掉。
- disabled/loading：异步操作和不可用状态要能阻止重复提交，并解释当前状态。
- 语义一致：button、a、input、select、menu、checkbox、radio、card action 的视觉和 DOM 语义应尽量匹配。
- 自定义区域：clickable div、卡片、图标按钮、标签、拖拽区域要检查 cursor、aria-label、keyboard path 和触控尺寸。

## 分级提示

- `Critical`：核心操作缺少必要状态导致重复提交、误操作、不可点击、不可恢复，或 focus 不可见导致核心路径无法完成。
- `Major`：关键组件缺少 hover、active、disabled、loading、selected 或可点击信号，用户仍能操作但信心明显下降。
- `Minor`：状态存在但反馈强度、动效节奏、文案或视觉 token 不够统一。

## 浏览器验证

- 用鼠标扫过首屏和核心流程中的按钮、链接、卡片、chip、搜索按钮和图标按钮。
- 用键盘 `Tab` 走一遍核心路径，确认 focus-visible、顺序、弹层进入/退出和返回触发点。
- 对 loading、disabled、error、empty、success 至少做静态代码确认；能运行时优先实测。

## 典型问题信号

- 按钮点击有效，但鼠标悬停仍是默认箭头。
- 卡片整体可点，但只有局部文字有 hover，用户不知道整卡可点。
- hover 增加 border 或 scale，导致附近文本、卡片或布局轻微跳动。
- focus-visible 被全局 CSS 清掉，或被父级 `overflow: hidden` 裁切。
- 图标按钮只有图标没有 aria-label、tooltip 或可理解文本。

## 修复边界

- 不要为了补状态而改变主题风格；状态应沿用现有色彩、边框、阴影和圆角体系。
- cursor/hover/focus-visible 是可用性修复，不是可选 polish。
- 如果原组件库已经有状态体系，优先复用组件库 API 或 token，而不是给单个元素硬写孤立样式。
