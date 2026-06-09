export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  promptTemplate: string;
  tags: string[];
}

export const categories: Category[] = [
  { id: 'all', name: '全部', icon: '📋' },
  { id: 'ui', name: 'UI与界面', icon: '🎨' },
  { id: 'infographic', name: '图表信息', icon: '📊' },
  { id: 'poster', name: '海报排版', icon: '🖼️' },
  { id: 'product', name: '商品电商', icon: '🛍️' },
  { id: 'brand', name: '品牌标志', icon: '⭐' },
  { id: 'architecture', name: '建筑空间', icon: '🏗️' },
  { id: 'map', name: '建筑地图', icon: '🗺️' },
  { id: 'photo', name: '摄影写实', icon: '📷' },
  { id: 'illustration', name: '插画艺术', icon: '🎭' },
];

export const templates: Template[] = [
  {
    id: '1',
    title: 'UI界面常规模板',
    category: 'UI与界面',
    description: '为产品生成高保真UI界面截图',
    promptTemplate: `为[产品类型]生成一张[平台，如 iOS/Android/Web]界面图。
核心功能：[功能点A]、[功能点B]、[功能点C]。
视觉风格：[极简/科技/拟物]，主色[颜色]，强调色[颜色]。
布局：[顶部导航/双栏/卡片流]，信息层级清晰，留白充足。
输出：高保真UI截图，文字清晰可读，比例[9:16/16:9]。`,
    tags: ['UI', '界面', '高保真']
  },
  {
    id: '2',
    title: '社交截图生成模板',
    category: 'UI与界面',
    description: '生成社交平台内容截图',
    promptTemplate: `生成一张[平台，如 X/抖音/小红书/微信朋友圈]内容截图，[深色/浅色]模式。
整体比例：[9:16 / 3:4 / 1:1]，手机截图风格。

核心内容：
- 账号信息：[头像描述 / 用户名 / 认证标识]
- 正文内容：[具体文本内容，包含指定中文]
- 互动数据：[点赞/评论/转发/收藏数量]

界面元素：
- 顶部：[状态栏/导航栏/搜索栏]
- 底部：[操作栏/Tab栏/输入框]
- 附加：[浮窗/弹幕/礼物特效/购物车卡片]

约束：文字必须准确显示指定的中文，禁止乱码和占位文本，比例固定。
输出：高仿社交平台截图，文字清晰可读。`,
    tags: ['截图', '社交', '手机']
  },
  {
    id: '3',
    title: '信息图常规模板',
    category: '图表信息',
    description: '生成结构化信息可视化图表',
    promptTemplate: `生成[主题：明确、具体，避免宽泛]信息图，目标读者为[人群]。
结构：标题区 + [3-5]个模块（每模块含图标、短标题、1-2句说明）。
图表类型：[流程图/对比图/关系图/时间线]。
风格：[专业报告/科普插画/儿童教育]，主色[颜色]，背景[浅色/深色]。
输出：信息层级清晰、可读性高的中文信息图。`,
    tags: ['信息图', '可视化', '流程图']
  },
  {
    id: '4',
    title: '海报常规模板',
    category: '海报排版',
    description: '设计活动、产品或电影海报',
    promptTemplate: `设计一张[活动/产品/电影]海报，主题为[主题词]。
主视觉：[主体元素]，标题文案：[标题]，副标题：[副标题]。
版式：[居中/左对齐/对角构图]，风格：[复古/未来/极简]。
色彩：[主色 + 辅色]，氛围：[情绪关键词]。
输出：可用于社媒传播的高分辨率海报。`,
    tags: ['海报', '设计', '排版']
  },
  {
    id: '5',
    title: '概念字体海报模板',
    category: '海报排版',
    description: '为标题生成高级概念字体海报',
    promptTemplate: `Create ONE finished premium conceptual typography poster for the exact title:

"[标题/词语/短句]"

Single poster only. No moodboard, grid, presentation board, mockup, captions, prompt text, process sheet, or sample labels.

The title must be the dominant visual structure of the poster: huge, readable, powerful, and spelled exactly.

Typography is the hero. Design custom-looking letterforms whose weight, width, contrast, spacing, rhythm, distortion, negative space, edge quality, and ink texture express the temperament of the title.

Composition style: high-end editorial poster, museum-quality graphic design, dramatic scale, strong hierarchy, few elements, intelligent whitespace, bold flat color areas, sharp cropping, silkscreen / lithograph / risograph grain, paper fibers, subtle ink imperfections, refined visual tension.`,
    tags: ['字体', '海报', '英文']
  },
  {
    id: '6',
    title: '电商商品主图模板',
    category: '商品电商',
    description: '生成电商产品展示主图',
    promptTemplate: `生成[商品名]电商主图，卖点为[卖点1]、[卖点2]。
场景：[纯色棚拍/生活方式场景]，镜头：[特写/半身/全景]。
材质细节：[材质关键词]，灯光：[柔光/侧光/轮廓光]。
附加元素：[价格角标/卖点icon/促销文案]。
输出：电商平台可直接使用的商品展示图。`,
    tags: ['电商', '商品', '主图']
  },
  {
    id: '7',
    title: '品牌视觉设计模板',
    category: '品牌标志',
    description: '设计品牌Logo和视觉识别系统',
    promptTemplate: `为[品牌名]设计品牌视觉方案。
品牌关键词：[关键词1]、[关键词2]、[关键词3]。
包含：Logo方向[几何/字标/图形]、辅助图形、主辅色、应用示意。
风格：[现代/高级/亲和]，行业：[行业]，受众：[受众]。
输出：统一风格的品牌识别视觉图。`,
    tags: ['品牌', 'Logo', '视觉']
  },
  {
    id: '8',
    title: '建筑空间效果图模板',
    category: '建筑空间',
    description: '生成建筑空间设计渲染图',
    promptTemplate: `生成[空间类型]设计效果图，功能定位为[用途]。
风格：[现代简约/工业/新中式]，材质：[木/石/金属/玻璃]。
空间结构：[开敞/分区]，动线：[主通道说明]。
光线：[自然采光/人工照明方案]，时间：[白天/夜景]。
输出：写实建筑空间渲染图。`,
    tags: ['建筑', '空间', '渲染']
  },
  {
    id: '9',
    title: '写实摄影模板',
    category: '摄影写实',
    description: '生成高写实摄影风格图像',
    promptTemplate: `拍摄主题：[人物/物品/街景]，场景为[地点]。
摄影参数风格：[35mm/85mm]，[浅景深/深景深]，[纪实/电影感]。
光线：[自然光/夜景霓虹/逆光]，情绪：[情绪词]。
细节要求：[肤质/材质/颗粒感]。
输出：高写实摄影风格图像。`,
    tags: ['摄影', '写实', '人像']
  },
  {
    id: '10',
    title: '插画常规模板',
    category: '插画艺术',
    description: '创作高质量艺术插画',
    promptTemplate: `创作[题材]插画，主角为[角色/主体]。
画风：[日漫/水彩/扁平/厚涂]，线条：[细腻/粗犷]。
配色：[配色方案]，背景：[简洁/复杂场景]。
构图：[近景/中景/远景]，重点表现[细节]。
输出：可用于封面或社媒发布的高质量插画。`,
    tags: ['插画', '艺术', '设计']
  },
  {
    id: '11',
    title: '直播界面截图模板',
    category: 'UI与界面',
    description: '生成直播平台界面截图',
    promptTemplate: `生成一张[平台，如抖音/快手/B站]直播界面截图。
主播：[人物描述/名称]，姿态：[坐姿/站立/动作]，服装：[服装描述]。
背景：[直播间背景描述]，灯光：[暖色/冷色/混合]。

UI叠加层：
- 顶部：主播头像 + 关注按钮 + 在线人数 + 排名/热值
- 左下：弹幕/评论列表（[N]条，内容示例）
- 右下或中部：商品卡片 / 礼物特效 / PK进度条
- 底部：输入框 + 功能图标（分享/点赞/礼物/购物车）

风格：[写实直播截图/高保真UI/暗黑系/粉嫩系]，比例 9:16。
约束：文字清晰可读，弹幕内容合理，界面元素不遮挡主播面部。
输出：高仿直播截图画面。`,
    tags: ['直播', 'UI', '截图']
  },
  {
    id: '12',
    title: '自然科普海报模板',
    category: '海报排版',
    description: '生成Apple风格自然科普海报',
    promptTemplate: `你是一个高端自然科普海报生成系统，目标是为稀有动物、昆虫、爬行动物、哺乳动物或其他小众生物生成 Apple keynote 风格的高级科普视觉海报。

整体视觉方向：
生成一张 9:16 竖版高级科普海报，画面采用极简、纯白、干净、现代、Apple 式产品发布海报语言。背景应为纯白或极浅灰白渐变，保持大量留白。

核心设计原则：
1. 主体动物必须被极度放大，成为画面最强视觉中心。
2. 主体应具有强烈立体感、真实质感、高清细节和柔和棚拍光影。
3. 海报信息要少而准，避免拥挤。

输出：生成一张 9:16 竖版、高级、干净、强视觉冲击的 Apple 风自然科普海报。`,
    tags: ['科普', '海报', 'Apple风格']
  },
  // ========== 建筑地图类模板 ==========
  {
    id: '13',
    title: '手绘水彩住宅空间导览图',
    category: '建筑地图',
    description: '基于蓝图生成温暖的手绘风格住宅导览图，适合客户汇报和户型介绍',
    promptTemplate: `基于上传的住宅平面蓝图，生成一张手绘水彩风格的住宅空间导览图。
保留原始房间关系和整体布局，包括 [Kitchen、Bedroom1、Living Room、Bedroom2、Kitchen Bedroom、Bathroom/Toilet，以及 1st Floor Bedroom1 和 Bathroom]。

使用柔和水彩纸纹理、手绘线条、浅色功能分区。
添加房间名称标注、简单家具符号和生活化小插画。
画面风格温暖、清晰、亲切，适合客户理解住宅空间。
不要生成施工图，不要改变房间数量和位置。`,
    tags: ['水彩', '手绘', '住宅', '导览图', '客户汇报']
  },
  {
    id: '14',
    title: '房屋功能分区手绘图',
    category: '建筑地图',
    description: '将住宅蓝图转化为功能分区图，清晰展示生活区、卧室区、湿区、服务区',
    promptTemplate: `基于上传的住宅蓝图，生成一张手绘水彩风格的功能分区图。
将平面图分为：
- Living / Public Zone（客厅/公共区）
- Bedroom / Private Zone（卧室/私密区）
- Kitchen / Service Zone（厨房/服务区）
- Bathroom / Wet Zone（浴室/湿区）
- 1st Floor Zone（一楼层）

使用柔和透明色块覆盖不同区域，保留墙体、门窗和房间关系。
添加手写风格英文标签、小图标、动线箭头和简短注释。
整体像建筑师手绘说明图，清楚、温暖、适合客户汇报。`,
    tags: ['水彩', '手绘', '功能分区', '建筑说明图']
  },
  {
    id: '15',
    title: '住宅生活方式地图',
    category: '建筑地图',
    description: '展示每个房间的生活场景，而非施工细节',
    promptTemplate: `Create a hand-drawn watercolor lifestyle map based on the uploaded residential floor plan.
Preserve the original layout and room relationships.

Show each room as a warm living scene:
- Kitchen: cooking scene
- Living Room: relaxing scene
- Bedroom1 and Bedroom2: sleeping and storage
- Bathroom/Toilet: simple use
- 1st Floor Bedroom1: quiet private room

Add soft watercolor textures, hand-drawn furniture, small lifestyle icons, room labels, circulation arrows, and gentle notes.
The image should feel like a friendly illustrated home guide, not a technical construction drawing.`,
    tags: ['水彩', '手绘', '生活方式', '家居场景', '英文']
  },
  {
    id: '16',
    title: '房屋销售/出租展示地图',
    category: '建筑地图',
    description: '适合 Facebook、微信、客户介绍页的房产展示图',
    promptTemplate: `Generate a hand-drawn watercolor real estate presentation map based on the uploaded house blueprint.
Keep the original room arrangement and proportions.

Present the house as a warm illustrated home layout with:
- Labeled rooms
- Simple furniture
- Soft color zoning
- Walking paths
- Small lifestyle details

Highlight Kitchen, Living Room, Bedroom1, Bedroom2, Bathroom, and 1st Floor Bedroom1.
Use a clean watercolor paper texture, elegant handwritten labels, and a friendly residential marketing style.
Suitable for rental or sale presentation.
Do not modify the floor plan.`,
    tags: ['水彩', '房产', '销售', '出租', '展示', '英文']
  },
  {
    id: '17',
    title: '民宿/Airbnb风格介绍图',
    category: '建筑地图',
    description: '为客人快速理解房屋布局的民宿风格地图',
    promptTemplate: `Create a cozy hand-drawn watercolor guesthouse floor map based on the uploaded blueprint.
Preserve the floor plan layout.

Show:
- Room names, beds, seating area
- Kitchen area
- Bathroom/toilet
- Windows, doors, circulation paths

Add small hospitality icons such as bed, sofa, coffee cup, kitchenware, shower, towel, and luggage.
Use soft warm colors, watercolor paper texture, friendly handwritten labels, and a travel-map style presentation.
The image should help guests quickly understand the house layout.`,
    tags: ['水彩', '民宿', 'Airbnb', '地图', '英文']
  },
  {
    id: '18',
    title: '手绘工程协调草图',
    category: '建筑地图',
    description: '比蓝图更容易给业主和工人解释的工程协调图',
    promptTemplate: `Convert the uploaded residential blueprint into a hand-drawn architectural coordination sketch.
Keep the original room layout, wall positions, doors, windows, and room labels.

Use black ink sketch lines with light watercolor highlights.
Mark Kitchen, Bedroom1, Living Room, Bedroom2, Bathroom/Toilet, and 1st Floor rooms.
Add simple arrows for circulation, highlight wet areas.
Include short notes such as "verify on site" and "reference only".

The style should look like an architect's hand sketch over a floor plan, clear and practical.`,
    tags: ['手绘', '工程', '协调', '草图', '英文']
  },
  {
    id: '19',
    title: '改造建议手绘图',
    category: '建筑地图',
    description: '用于讨论改造方案的概念图，清晰展示改进建议',
    promptTemplate: `Based on the uploaded house blueprint, create a hand-drawn watercolor renovation idea map.
Keep the existing footprint visible.

Use soft overlays to show suggested improvements for:
- Circulation（动线优化）
- Furniture placement（家具布置）
- Wet area clarity（湿区明确）
- Room function（房间功能）

Add handwritten notes, arrows, and small icons.
Present it as a concept discussion drawing, not a final construction plan.
Do not make structural claims.
All dimensions and wall conditions are TBC.`,
    tags: ['水彩', '手绘', '改造', '翻新', '概念', '英文']
  },
  {
    id: '20',
    title: '建筑空间导览地图版式',
    category: '建筑地图',
    description: '类似城市手绘地图的建筑空间导览图',
    promptTemplate: `Create a hand-drawn watercolor architectural space map based on the uploaded residential floor plan, inspired by illustrated city travel maps.

Show the house layout as a friendly illustrated guide with:
- Room zones（功能分区）
- Furniture icons（家具图标）
- Small scene illustrations（小场景插画）
- Handwritten labels（手写标签）
- Building landmarks（建筑地标）
- Walking paths（行走路径）
- Functional annotations（功能注释）

Style: hand-drawn watercolor, city map aesthetic, warm colors, paper texture.
The image should look like an architectural illustration guide, not a technical blueprint.`,
    tags: ['水彩', '手绘', '导览', '地图', '版式', '英文']
  },
];