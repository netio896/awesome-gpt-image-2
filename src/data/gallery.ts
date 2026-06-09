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
];