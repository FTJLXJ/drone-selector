const i18n = {
  zh: {
    appName: 'DroneSelector',
    navWizard: '智能推荐',
    navFilter: '浏览筛选',
    navCompare: '对比',
    footerNotice: '数据仅供参考，请以官方渠道为准',

    wizardTitle: '找到最适合你的无人机',
    wizardSubtitle: '回答几个问题，帮你快速匹配',
    wizardStep: '第 {current} 步 / 共 {total} 步',
    wizardBack: '上一步',
    wizardNext: '下一步',
    wizardResult: '查看推荐结果',
    wizardRestart: '重新测评',
    wizardLoading: '正在分析你的需求...',

    q1Title: '你打算用无人机做什么？',
    q1Hint: '可多选，我们会综合推荐最适合的类型',
    q1Options: [
      { icon: '📸', title: '航拍 / 旅拍', desc: '旅行记录、Vlog 创作' },
      { icon: '🌾', title: '农业植保', desc: '喷洒、播撒、巡田' },
      { icon: '🏗️', title: '测绘 / 巡检', desc: '建筑、电力、管线' },
      { icon: '🏎️', title: 'FPV 穿越', desc: '竞技飞行、高速穿越' },
      { icon: '🎬', title: '专业影视', desc: '电影、广告、纪录片' },
      { icon: '🎮', title: '娱乐 / 入门', desc: '随便玩玩、新手体验' }
    ],

    q2Title: '你的预算范围是？',
    q2Hint: '参考价格（人民币），滑动选择区间',
    q2Labels: ['¥2,000 以下', '¥2,000-5,000', '¥5,000-10,000', '¥10,000-30,000', '¥30,000 以上', '不限预算'],

    q3Title: '你的飞行经验？',
    q3Hint: '不同经验水平适合不同级别的机型',
    q3Options: [
      { icon: '🌱', title: '完全新手', desc: '没飞过，想要容易上手的机型' },
      { icon: '🌿', title: '有基础', desc: '飞过一两次，掌握基本操作' },
      { icon: '🌳', title: '经验丰富', desc: '经常飞，熟悉手动操控' },
      { icon: '🏆', title: '专业飞手', desc: '持有执照，能操作复杂机型' }
    ],

    q4Title: '你对画质的要求？',
    q4Hint: '根据创作需求选择合适的相机规格',
    q4Options: [
      { icon: '❌', title: '不需要相机', desc: '主要用于娱乐飞行或行业作业' },
      { icon: '📱', title: '1080p 够用', desc: '社交媒体分享、记录生活' },
      { icon: '🎥', title: '4K 高清', desc: '高质量视频创作、旅拍大片' },
      { icon: '🎬', title: '专业级影像', desc: '5.1K+、RAW、Log 曲线' }
    ],

    q5Title: '便携性重要吗？',
    q5Hint: '重量影响携带便利性和是否需要登记',
    q5Options: [
      { icon: '🪶', title: '越轻越好', desc: '最好 ≤249g，免登记，随身带' },
      { icon: '🎒', title: '适中可接受', desc: '250g-1kg，放背包无压力' },
      { icon: '🧳', title: '不太介意', desc: '1kg 以上也没关系，性能优先' }
    ],

    q6Title: '有品牌偏好吗？',
    q6Hint: '选择你感兴趣的品牌，可多选',
    q6Options: [
      { icon: '🚁', title: '不限品牌', desc: '给我推荐最好的就行' },
      { icon: '🚁', title: 'DJI 大疆', desc: '全球领先的无人机制造商' },
      { icon: '🚁', title: 'Autel 道通', desc: '高性能航拍无人机' },
      { icon: '🚁', title: 'Parrot', desc: '法国无人机品牌' },
      { icon: '🚁', title: 'Hubsan 哈博森', desc: '高性价比选择' }
    ],

    recTitle: '为你推荐',
    recMatch: '匹配度',
    recNoResult: '没有完全匹配的机型，请调整条件',
    recDetail: '查看详情',
    recBuy: '去购买',
    recCompare: '对比所选',

    filterTitle: '高级筛选',
    filterPrice: '价格区间',
    filterBrand: '品牌',
    filterScenario: '使用场景',
    filterFlightTime: '续航',
    filterWeight: '重量',
    filterCamera: '相机分辨率',
    filterApply: '应用筛选',
    filterReset: '重置',
    filterSort: '排序',
    filterFound: '找到',
    filterUnit: '款机型',
    sortDefault: '推荐排序',
    sortPriceAsc: '价格低→高',
    sortPriceDesc: '价格高→低',
    sortFlightTime: '续航长→短',

    compareTitle: '机型对比',
    compareEmpty: '请在浏览筛选或推荐结果中勾选机型进行对比',
    compareSelect: '请勾选 2-4 款机型开始对比',
    compareAdd: '添加更多机型',
    compareClear: '清空对比',
    compareBetter: '更优',

    detailSpecs: '技术规格',
    detailScenario: '适用场景',
    detailBuy: '购买渠道',
    detailBuyJD: '京东',
    detailBuyOfficial: '官方商城',
    detailBuyTmall: '天猫',
    detailBrand: '品牌',
    detailCategory: '级别',
    detailCamera: '相机',
    detailFlightTime: '续航',
    detailWeight: '重量',
    detailTransmission: '图传',
    detailObstacle: '避障',
    detailMaxSpeed: '最大速度',
    detailGnss: '卫星定位',
    detailSensor: '传感器',
    detailResolution: '视频',
    detailRange: '距离',

    categoryConsumer: '消费级',
    categoryEnterprise: '行业级',
    categoryFpv: 'FPV',
    categoryAgriculture: '农业',

    scenarioTravel: '航拍旅拍',
    scenarioAgriculture: '农业植保',
    scenarioSurvey: '测绘巡检',
    scenarioFpv: 'FPV 穿越',
    scenarioFilm: '专业影视',
    scenarioFun: '入门娱乐',

    min: '分钟',
    gram: '克',
    km: '公里',
    kmh: '公里/时',
    yuan: '元起',
  },

  en: {
    appName: 'DroneSelector',
    navWizard: 'Smart Pick',
    navFilter: 'Browse',
    navCompare: 'Compare',
    footerNotice: 'Data is for reference only. Check official channels for latest info.',

    wizardTitle: 'Find Your Perfect Drone',
    wizardSubtitle: 'Answer a few questions and we\'ll match you with the best options',
    wizardStep: 'Step {current} of {total}',
    wizardBack: 'Back',
    wizardNext: 'Next',
    wizardResult: 'Show Results',
    wizardRestart: 'Start Over',
    wizardLoading: 'Analyzing your needs...',

    q1Title: 'What will you use the drone for?',
    q1Hint: 'Select all that apply — we\'ll recommend the best fit',
    q1Options: [
      { icon: '📸', title: 'Travel / Vlog', desc: 'Travel recording, content creation' },
      { icon: '🌾', title: 'Agriculture', desc: 'Spraying, seeding, field scouting' },
      { icon: '🏗️', title: 'Survey / Inspection', desc: 'Construction, power lines, pipelines' },
      { icon: '🏎️', title: 'FPV Racing', desc: 'Competitive flying, high-speed aerial' },
      { icon: '🎬', title: 'Professional Film', desc: 'Movies, commercials, documentaries' },
      { icon: '🎮', title: 'Casual / Beginner', desc: 'Just for fun, first-time flyer' }
    ],

    q2Title: 'What\'s your budget?',
    q2Hint: 'Slide to select your price range',
    q2Labels: ['Under $300', '$300-700', '$700-1,400', '$1,400-4,200', 'Over $4,200', 'No limit'],

    q3Title: 'What\'s your flight experience?',
    q3Hint: 'Experience level helps match drone difficulty',
    q3Options: [
      { icon: '🌱', title: 'Complete Beginner', desc: 'Never flown, need something easy' },
      { icon: '🌿', title: 'Some Basics', desc: 'Flown a few times, know the controls' },
      { icon: '🌳', title: 'Experienced', desc: 'Fly regularly, comfortable with manual' },
      { icon: '🏆', title: 'Professional Pilot', desc: 'Licensed, can handle complex systems' }
    ],

    q4Title: 'How important is image quality?',
    q4Hint: 'Choose based on your creative needs',
    q4Options: [
      { icon: '❌', title: 'No Camera Needed', desc: 'Mainly for fun or industrial use' },
      { icon: '📱', title: '1080p is Fine', desc: 'Social media sharing, casual recording' },
      { icon: '🎥', title: '4K HD', desc: 'Quality video creation, travel films' },
      { icon: '🎬', title: 'Professional Grade', desc: '5.1K+, RAW, Log profiles' }
    ],

    q5Title: 'How important is portability?',
    q5Hint: 'Weight affects carry convenience and registration requirements',
    q5Options: [
      { icon: '🪶', title: 'As Light as Possible', desc: 'Preferably ≤249g, no registration needed' },
      { icon: '🎒', title: 'Medium is Fine', desc: '250g-1kg, fits in a backpack' },
      { icon: '🧳', title: 'Don\'t Mind Weight', desc: 'Over 1kg is okay, performance matters' }
    ],

    q6Title: 'Any brand preference?',
    q6Hint: 'Select brands you\'re interested in',
    q6Options: [
      { icon: '🚁', title: 'No Preference', desc: 'Just recommend the best' },
      { icon: '🚁', title: 'DJI', desc: 'World leader in drone technology' },
      { icon: '🚁', title: 'Autel Robotics', desc: 'High-performance aerial drones' },
      { icon: '🚁', title: 'Parrot', desc: 'French drone manufacturer' },
      { icon: '🚁', title: 'Hubsan', desc: 'Great value for money' }
    ],

    recTitle: 'Top Picks for You',
    recMatch: 'Match',
    recNoResult: 'No perfect match. Try adjusting your criteria.',
    recDetail: 'Details',
    recBuy: 'Buy Now',
    recCompare: 'Compare Selected',

    filterTitle: 'Filters',
    filterPrice: 'Price Range',
    filterBrand: 'Brand',
    filterScenario: 'Use Case',
    filterFlightTime: 'Flight Time',
    filterWeight: 'Weight',
    filterCamera: 'Camera Resolution',
    filterApply: 'Apply Filters',
    filterReset: 'Reset',
    filterSort: 'Sort by',
    filterFound: 'Found',
    filterUnit: 'drones',
    sortDefault: 'Recommended',
    sortPriceAsc: 'Price: Low to High',
    sortPriceDesc: 'Price: High to Low',
    sortFlightTime: 'Flight Time: Long to Short',

    compareTitle: 'Drone Comparison',
    compareEmpty: 'Select drones from Browse or Smart Pick to compare them here',
    compareSelect: 'Select 2-4 drones to start comparing',
    compareAdd: 'Add More',
    compareClear: 'Clear All',
    compareBetter: 'Better',

    detailSpecs: 'Specifications',
    detailScenario: 'Best For',
    detailBuy: 'Where to Buy',
    detailBuyJD: 'JD.com',
    detailBuyOfficial: 'Official Store',
    detailBuyTmall: 'Tmall',
    detailBrand: 'Brand',
    detailCategory: 'Category',
    detailCamera: 'Camera',
    detailFlightTime: 'Flight Time',
    detailWeight: 'Weight',
    detailTransmission: 'Transmission',
    detailObstacle: 'Obstacle Avoidance',
    detailMaxSpeed: 'Max Speed',
    detailGnss: 'GNSS',
    detailSensor: 'Sensor',
    detailResolution: 'Video',
    detailRange: 'Range',

    categoryConsumer: 'Consumer',
    categoryEnterprise: 'Enterprise',
    categoryFpv: 'FPV',
    categoryAgriculture: 'Agriculture',

    scenarioTravel: 'Travel',
    scenarioAgriculture: 'Agriculture',
    scenarioSurvey: 'Survey',
    scenarioFpv: 'FPV',
    scenarioFilm: 'Film',
    scenarioFun: 'Casual',

    min: 'min',
    gram: 'g',
    km: 'km',
    kmh: 'km/h',
    yuan: '',
  },

  t(key, params) {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'zh';
    let text = this[lang][key] ?? this.zh[key] ?? key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => { text = text.replace(`{${k}}`, v); });
    }
    return text;
  }
};

function t(key, params) { return i18n.t(key, params); }
