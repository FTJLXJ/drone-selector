const drones = [
  // ==================== DJI 大疆 ====================
  // --- Mini 系列 ---
  {
    id: 'dji-mini-4-pro',
    brand: 'DJI',
    name: { zh: 'DJI Mini 4 Pro', en: 'DJI Mini 4 Pro' },
    category: 'consumer',
    price: 4788,
    currency: 'CNY',
    images: {
      local: 'images/dji-mini-4-pro.jpg',
      external: ['https://dji-official-site.djicdn.com/image/mini4pro.png']
    },
    specs: {
      weight: 249,
      flightTime: 34,
      camera: { sensor: '1/1.3" CMOS', resolution: '4K/100fps', type: 'single', pixels: '48MP' },
      transmission: { system: 'O4', range: 20 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 57.6,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['travel', 'vlog', 'fun'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2023,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-mini-4-pro',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mini+4+Pro',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Mini+4+Pro'
    }
  },
  {
    id: 'dji-mini-3-pro',
    brand: 'DJI',
    name: { zh: 'DJI Mini 3 Pro', en: 'DJI Mini 3 Pro' },
    category: 'consumer',
    price: 4198,
    currency: 'CNY',
    images: { local: 'images/dji-mini-3-pro.jpg', external: [] },
    specs: {
      weight: 249, flightTime: 34,
      camera: { sensor: '1/1.3" CMOS', resolution: '4K/60fps', type: 'single', pixels: '48MP' },
      transmission: { system: 'O3', range: 12 },
      obstacleAvoidance: 'forward-backward-downward',
      maxSpeed: 57.6,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['travel', 'vlog', 'fun'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2022,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-mini-3-pro',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mini+3+Pro',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Mini+3+Pro'
    }
  },
  {
    id: 'dji-mini-3',
    brand: 'DJI',
    name: { zh: 'DJI Mini 3', en: 'DJI Mini 3' },
    category: 'consumer',
    price: 2899,
    currency: 'CNY',
    images: { local: 'images/dji-mini-3.jpg', external: [] },
    specs: {
      weight: 249, flightTime: 38,
      camera: { sensor: '1/1.3" CMOS', resolution: '4K/30fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'O2', range: 10 },
      obstacleAvoidance: 'downward',
      maxSpeed: 57.6,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['travel', 'vlog', 'fun'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2022,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-mini-3',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mini+3',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Mini+3'
    }
  },
  {
    id: 'dji-mini-2-se',
    brand: 'DJI',
    name: { zh: 'DJI Mini 2 SE', en: 'DJI Mini 2 SE' },
    category: 'consumer',
    price: 1999,
    currency: 'CNY',
    images: { local: 'images/dji-mini-2-se.jpg', external: [] },
    specs: {
      weight: 249, flightTime: 31,
      camera: { sensor: '1/2.3" CMOS', resolution: '2.7K/30fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'O2', range: 10 },
      obstacleAvoidance: 'downward',
      maxSpeed: 57.6,
      gnss: 'GPS + GLONASS'
    },
    scenarios: ['fun', 'travel'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2023,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-mini-2-se',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mini+2+SE',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Mini+2+SE'
    }
  },

  // --- Air 系列 ---
  {
    id: 'dji-air-3s',
    brand: 'DJI',
    name: { zh: 'DJI Air 3S', en: 'DJI Air 3S' },
    category: 'consumer',
    price: 6988,
    currency: 'CNY',
    images: { local: 'images/dji-air-3s.jpg', external: [] },
    specs: {
      weight: 724, flightTime: 46,
      camera: { sensor: '1" CMOS (dual)', resolution: '4K/120fps', type: 'dual', pixels: '50MP' },
      transmission: { system: 'O4', range: 20 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 75.6,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['travel', 'vlog', 'landscape', 'film'],
    level: 'intermediate',
    portability: 'medium',
    year: 2024,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-air-3s',
      jd: 'https://search.jd.com/Search?keyword=DJI+Air+3S',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Air+3S'
    }
  },
  {
    id: 'dji-air-3',
    brand: 'DJI',
    name: { zh: 'DJI Air 3', en: 'DJI Air 3' },
    category: 'consumer',
    price: 5988,
    currency: 'CNY',
    images: { local: 'images/dji-air-3.jpg', external: [] },
    specs: {
      weight: 720, flightTime: 46,
      camera: { sensor: '1/1.3" CMOS (dual)', resolution: '4K/100fps', type: 'dual', pixels: '48MP' },
      transmission: { system: 'O4', range: 20 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 75.6,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['travel', 'vlog', 'landscape'],
    level: 'intermediate',
    portability: 'medium',
    year: 2023,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-air-3',
      jd: 'https://search.jd.com/Search?keyword=DJI+Air+3',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Air+3'
    }
  },
  {
    id: 'dji-air-2s',
    brand: 'DJI',
    name: { zh: 'DJI Air 2S', en: 'DJI Air 2S' },
    category: 'consumer',
    price: 4499,
    currency: 'CNY',
    images: { local: 'images/dji-air-2s.jpg', external: [] },
    specs: {
      weight: 595, flightTime: 31,
      camera: { sensor: '1" CMOS', resolution: '5.4K/30fps', type: 'single', pixels: '20MP' },
      transmission: { system: 'O3', range: 12 },
      obstacleAvoidance: 'forward-backward-upward-downward',
      maxSpeed: 68.4,
      gnss: 'GPS + GLONASS + Galileo'
    },
    scenarios: ['travel', 'vlog', 'landscape'],
    level: 'intermediate',
    portability: 'medium',
    year: 2021,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-air-2s',
      jd: 'https://search.jd.com/Search?keyword=DJI+Air+2S',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Air+2S'
    }
  },

  // --- Mavic 系列 ---
  {
    id: 'dji-mavic-3-pro',
    brand: 'DJI',
    name: { zh: 'DJI Mavic 3 Pro', en: 'DJI Mavic 3 Pro' },
    category: 'consumer',
    price: 13888,
    currency: 'CNY',
    images: { local: 'images/dji-mavic-3-pro.jpg', external: [] },
    specs: {
      weight: 958, flightTime: 43,
      camera: { sensor: '4/3 CMOS Hasselblad (triple)', resolution: '5.1K/50fps', type: 'triple', pixels: '20MP' },
      transmission: { system: 'O3+', range: 15 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 75.6,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['film', 'landscape', 'travel'],
    level: 'expert',
    portability: 'medium',
    year: 2023,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-mavic-3-pro',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mavic+3+Pro',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Mavic+3+Pro'
    }
  },
  {
    id: 'dji-mavic-3-classic',
    brand: 'DJI',
    name: { zh: 'DJI Mavic 3 Classic', en: 'DJI Mavic 3 Classic' },
    category: 'consumer',
    price: 9888,
    currency: 'CNY',
    images: { local: 'images/dji-mavic-3-classic.jpg', external: [] },
    specs: {
      weight: 895, flightTime: 46,
      camera: { sensor: '4/3 CMOS Hasselblad', resolution: '5.1K/50fps', type: 'single', pixels: '20MP' },
      transmission: { system: 'O3+', range: 15 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 75.6,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['film', 'landscape'],
    level: 'expert',
    portability: 'medium',
    year: 2022,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-mavic-3-classic',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mavic+3+Classic',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Mavic+3+Classic'
    }
  },
  {
    id: 'dji-mavic-3-enterprise',
    brand: 'DJI',
    name: { zh: 'DJI Mavic 3E', en: 'DJI Mavic 3E' },
    category: 'enterprise',
    price: 20999,
    currency: 'CNY',
    images: { local: 'images/dji-mavic-3e.jpg', external: [] },
    specs: {
      weight: 915, flightTime: 45,
      camera: { sensor: '4/3 CMOS + 56x zoom', resolution: '4K/30fps', type: 'dual (RTK)', pixels: '20MP' },
      transmission: { system: 'O3 Enterprise', range: 15 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 75.6,
      gnss: 'GPS + Galileo + BeiDou + RTK'
    },
    scenarios: ['survey', 'inspection'],
    level: 'professional',
    portability: 'heavy',
    year: 2022,
    buyLinks: {
      official: 'https://enterprise.dji.com/mavic-3-enterprise',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mavic+3E',
      tmall: ''
    }
  },
  {
    id: 'dji-mavic-3-thermal',
    brand: 'DJI',
    name: { zh: 'DJI Mavic 3T', en: 'DJI Mavic 3T' },
    category: 'enterprise',
    price: 27999,
    currency: 'CNY',
    images: { local: 'images/dji-mavic-3t.jpg', external: [] },
    specs: {
      weight: 920, flightTime: 45,
      camera: { sensor: '4/3 CMOS + Thermal 640x512', resolution: '4K/30fps', type: 'thermal dual', pixels: '48MP' },
      transmission: { system: 'O3 Enterprise', range: 15 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 75.6,
      gnss: 'GPS + Galileo + BeiDou + RTK'
    },
    scenarios: ['inspection', 'survey', 'rescue'],
    level: 'professional',
    portability: 'heavy',
    year: 2022,
    buyLinks: {
      official: 'https://enterprise.dji.com/mavic-3-thermal',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mavic+3T',
      tmall: ''
    }
  },

  // --- Avata / FPV 系列 ---
  {
    id: 'dji-avata-2',
    brand: 'DJI',
    name: { zh: 'DJI Avata 2', en: 'DJI Avata 2' },
    category: 'fpv',
    price: 5988,
    currency: 'CNY',
    images: { local: 'images/dji-avata-2.jpg', external: [] },
    specs: {
      weight: 377, flightTime: 23,
      camera: { sensor: '1/1.3" CMOS', resolution: '4K/100fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'O4', range: 13 },
      obstacleAvoidance: 'downward',
      maxSpeed: 97.2,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['fpv', 'film', 'fun'],
    level: 'intermediate',
    portability: 'light',
    year: 2024,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-avata-2',
      jd: 'https://search.jd.com/Search?keyword=DJI+Avata+2',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Avata+2'
    }
  },
  {
    id: 'dji-avata',
    brand: 'DJI',
    name: { zh: 'DJI Avata', en: 'DJI Avata' },
    category: 'fpv',
    price: 3788,
    currency: 'CNY',
    images: { local: 'images/dji-avata.jpg', external: [] },
    specs: {
      weight: 410, flightTime: 18,
      camera: { sensor: '1/1.7" CMOS', resolution: '4K/60fps', type: 'single', pixels: '48MP' },
      transmission: { system: 'O3+', range: 10 },
      obstacleAvoidance: 'downward',
      maxSpeed: 97.2,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['fpv', 'fun'],
    level: 'intermediate',
    portability: 'light',
    year: 2022,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-avata',
      jd: 'https://search.jd.com/Search?keyword=DJI+Avata',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Avata'
    }
  },
  {
    id: 'dji-neo',
    brand: 'DJI',
    name: { zh: 'DJI Neo', en: 'DJI Neo' },
    category: 'consumer',
    price: 1499,
    currency: 'CNY',
    images: { local: 'images/dji-neo.jpg', external: [] },
    specs: {
      weight: 135, flightTime: 18,
      camera: { sensor: '1/2" CMOS', resolution: '4K/30fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'Wi-Fi', range: 6 },
      obstacleAvoidance: 'downward',
      maxSpeed: 28.8,
      gnss: 'GPS + Galileo'
    },
    scenarios: ['fun', 'vlog', 'fpv'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2024,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-neo',
      jd: 'https://search.jd.com/Search?keyword=DJI+Neo',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Neo'
    }
  },

  // --- Inspire 系列 ---
  {
    id: 'dji-inspire-3',
    brand: 'DJI',
    name: { zh: 'DJI Inspire 3', en: 'DJI Inspire 3' },
    category: 'consumer',
    price: 59888,
    currency: 'CNY',
    images: { local: 'images/dji-inspire-3.jpg', external: [] },
    specs: {
      weight: 4000, flightTime: 28,
      camera: { sensor: 'Full-Frame 8K', resolution: '8K/75fps', type: 'X9-8K Air', pixels: '44.7MP' },
      transmission: { system: 'O3 Pro', range: 15 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 94,
      gnss: 'GPS + Galileo + BeiDou + RTK'
    },
    scenarios: ['film'],
    level: 'professional',
    portability: 'heavy',
    year: 2023,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-inspire-3',
      jd: 'https://search.jd.com/Search?keyword=DJI+Inspire+3',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Inspire+3'
    }
  },

  // --- Agras 农业系列 ---
  {
    id: 'dji-agras-t50',
    brand: 'DJI',
    name: { zh: 'DJI Agras T50', en: 'DJI Agras T50' },
    category: 'agriculture',
    price: 58999,
    currency: 'CNY',
    images: { local: 'images/dji-agras-t50.jpg', external: [] },
    specs: {
      weight: 49600, flightTime: 15,
      camera: { sensor: 'FPV + Binocular', resolution: 'N/A', type: 'FPV + radar', pixels: 'N/A' },
      transmission: { system: 'O3 Agras', range: 2 },
      obstacleAvoidance: 'binocular + radar',
      maxSpeed: 36,
      gnss: 'GPS + Galileo + BeiDou + RTK'
    },
    scenarios: ['agriculture'],
    level: 'professional',
    portability: 'heavy',
    year: 2023,
    buyLinks: {
      official: 'https://ag.dji.com/t50',
      jd: 'https://search.jd.com/Search?keyword=DJI+Agras+T50',
      tmall: ''
    }
  },
  {
    id: 'dji-agras-t25',
    brand: 'DJI',
    name: { zh: 'DJI Agras T25', en: 'DJI Agras T25' },
    category: 'agriculture',
    price: 36999,
    currency: 'CNY',
    images: { local: 'images/dji-agras-t25.jpg', external: [] },
    specs: {
      weight: 26900, flightTime: 12,
      camera: { sensor: 'FPV + Binocular', resolution: 'N/A', type: 'FPV + radar', pixels: 'N/A' },
      transmission: { system: 'O3 Agras', range: 2 },
      obstacleAvoidance: 'binocular + radar',
      maxSpeed: 36,
      gnss: 'GPS + Galileo + BeiDou + RTK'
    },
    scenarios: ['agriculture'],
    level: 'professional',
    portability: 'heavy',
    year: 2024,
    buyLinks: {
      official: 'https://ag.dji.com/t25',
      jd: 'https://search.jd.com/Search?keyword=DJI+Agras+T25',
      tmall: ''
    }
  },

  // --- Matrice 行业系列 ---
  {
    id: 'dji-matrice-350-rtk',
    brand: 'DJI',
    name: { zh: 'DJI Matrice 350 RTK', en: 'DJI Matrice 350 RTK' },
    category: 'enterprise',
    price: 57999,
    currency: 'CNY',
    images: { local: 'images/dji-matrice-350.jpg', external: [] },
    specs: {
      weight: 6400, flightTime: 55,
      camera: { sensor: 'Interchangeable payload', resolution: 'N/A', type: 'multi-payload', pixels: 'N/A' },
      transmission: { system: 'O3 Enterprise', range: 20 },
      obstacleAvoidance: 'omnidirectional (6-direction)',
      maxSpeed: 82.8,
      gnss: 'GPS + Galileo + BeiDou + RTK'
    },
    scenarios: ['survey', 'inspection', 'rescue'],
    level: 'professional',
    portability: 'heavy',
    year: 2023,
    buyLinks: {
      official: 'https://enterprise.dji.com/matrice-350-rtk',
      jd: 'https://search.jd.com/Search?keyword=DJI+Matrice+350',
      tmall: ''
    }
  },
  {
    id: 'dji-matrice-30',
    brand: 'DJI',
    name: { zh: 'DJI Matrice 30', en: 'DJI Matrice 30' },
    category: 'enterprise',
    price: 39999,
    currency: 'CNY',
    images: { local: 'images/dji-matrice-30.jpg', external: [] },
    specs: {
      weight: 4000, flightTime: 41,
      camera: { sensor: '1/2" CMOS + zoom + thermal', resolution: '4K/30fps', type: 'triple', pixels: '48MP' },
      transmission: { system: 'O3 Enterprise', range: 15 },
      obstacleAvoidance: 'omnidirectional (6-direction)',
      maxSpeed: 82.8,
      gnss: 'GPS + Galileo + BeiDou + RTK'
    },
    scenarios: ['inspection', 'survey', 'rescue'],
    level: 'professional',
    portability: 'heavy',
    year: 2022,
    buyLinks: {
      official: 'https://enterprise.dji.com/matrice-30',
      jd: 'https://search.jd.com/Search?keyword=DJI+Matrice+30',
      tmall: ''
    }
  },

  // --- DJI Flip ---
  {
    id: 'dji-flip',
    brand: 'DJI',
    name: { zh: 'DJI Flip', en: 'DJI Flip' },
    category: 'consumer',
    price: 3888,
    currency: 'CNY',
    images: { local: 'images/dji-flip.jpg', external: [] },
    specs: {
      weight: 249, flightTime: 31,
      camera: { sensor: '1/1.3" CMOS', resolution: '4K/100fps', type: 'single', pixels: '48MP' },
      transmission: { system: 'O4', range: 20 },
      obstacleAvoidance: 'forward-downward',
      maxSpeed: 57.6,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['travel', 'vlog', 'fun'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2025,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-flip',
      jd: 'https://search.jd.com/Search?keyword=DJI+Flip',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Flip'
    }
  },

  // ==================== Autel 道通 ====================
  {
    id: 'autel-evo-nano-plus',
    brand: 'Autel',
    name: { zh: 'Autel EVO Nano+', en: 'Autel EVO Nano+' },
    category: 'consumer',
    price: 3499,
    currency: 'CNY',
    images: { local: 'images/autel-nano-plus.jpg', external: [] },
    specs: {
      weight: 249, flightTime: 28,
      camera: { sensor: '1/1.28" CMOS', resolution: '4K/30fps', type: 'single', pixels: '50MP' },
      transmission: { system: 'SkyLink', range: 10 },
      obstacleAvoidance: 'forward-backward-downward',
      maxSpeed: 54,
      gnss: 'GPS + GLONASS + Galileo'
    },
    scenarios: ['travel', 'vlog', 'fun'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2022,
    buyLinks: {
      official: 'https://www.autelrobotics.com/product/evo-nano-plus',
      jd: 'https://search.jd.com/Search?keyword=Autel+EVO+Nano%2B',
      tmall: 'https://www.tmall.com/mall-search.html?q=Autel+Nano%2B'
    }
  },
  {
    id: 'autel-evo-lite-plus',
    brand: 'Autel',
    name: { zh: 'Autel EVO Lite+', en: 'Autel EVO Lite+' },
    category: 'consumer',
    price: 7299,
    currency: 'CNY',
    images: { local: 'images/autel-lite-plus.jpg', external: [] },
    specs: {
      weight: 835, flightTime: 40,
      camera: { sensor: '1" CMOS', resolution: '6K/30fps', type: 'single', pixels: '20MP' },
      transmission: { system: 'SkyLink', range: 12 },
      obstacleAvoidance: 'forward-backward-downward',
      maxSpeed: 64.8,
      gnss: 'GPS + GLONASS + Galileo'
    },
    scenarios: ['travel', 'landscape', 'film'],
    level: 'intermediate',
    portability: 'medium',
    year: 2022,
    buyLinks: {
      official: 'https://www.autelrobotics.com/product/evo-lite-plus',
      jd: 'https://search.jd.com/Search?keyword=Autel+EVO+Lite%2B',
      tmall: 'https://www.tmall.com/mall-search.html?q=Autel+Lite%2B'
    }
  },
  {
    id: 'autel-evo-lite',
    brand: 'Autel',
    name: { zh: 'Autel EVO Lite', en: 'Autel EVO Lite' },
    category: 'consumer',
    price: 5499,
    currency: 'CNY',
    images: { local: 'images/autel-lite.jpg', external: [] },
    specs: {
      weight: 835, flightTime: 40,
      camera: { sensor: '1/2" CMOS', resolution: '4K/30fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'SkyLink', range: 12 },
      obstacleAvoidance: 'forward-backward-downward',
      maxSpeed: 64.8,
      gnss: 'GPS + GLONASS + Galileo'
    },
    scenarios: ['travel', 'vlog'],
    level: 'intermediate',
    portability: 'medium',
    year: 2022,
    buyLinks: {
      official: 'https://www.autelrobotics.com/product/evo-lite',
      jd: 'https://search.jd.com/Search?keyword=Autel+EVO+Lite',
      tmall: 'https://www.tmall.com/mall-search.html?q=Autel+Lite'
    }
  },
  {
    id: 'autel-evo-ii-pro-v3',
    brand: 'Autel',
    name: { zh: 'Autel EVO II Pro V3', en: 'Autel EVO II Pro V3' },
    category: 'consumer',
    price: 11999,
    currency: 'CNY',
    images: { local: 'images/autel-evo2-pro.jpg', external: [] },
    specs: {
      weight: 1191, flightTime: 40,
      camera: { sensor: '1" CMOS', resolution: '6K/30fps', type: 'single', pixels: '20MP' },
      transmission: { system: 'SkyLink 2.0', range: 15 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 72,
      gnss: 'GPS + GLONASS + Galileo'
    },
    scenarios: ['landscape', 'film', 'survey'],
    level: 'expert',
    portability: 'heavy',
    year: 2023,
    buyLinks: {
      official: 'https://www.autelrobotics.com/product/evo-ii-pro-v3',
      jd: 'https://search.jd.com/Search?keyword=Autel+EVO+II+Pro+V3',
      tmall: 'https://www.tmall.com/mall-search.html?q=Autel+EVO+II+V3'
    }
  },
  {
    id: 'autel-evo-ii-dual-640t',
    brand: 'Autel',
    name: { zh: 'Autel EVO II Dual 640T', en: 'Autel EVO II Dual 640T' },
    category: 'enterprise',
    price: 24999,
    currency: 'CNY',
    images: { local: 'images/autel-evo2-dual.jpg', external: [] },
    specs: {
      weight: 1191, flightTime: 38,
      camera: { sensor: '1/1.28" CMOS + Thermal 640x512', resolution: '4K/30fps', type: 'thermal dual', pixels: '50MP' },
      transmission: { system: 'SkyLink 2.0', range: 15 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 72,
      gnss: 'GPS + GLONASS + Galileo'
    },
    scenarios: ['inspection', 'rescue', 'survey'],
    level: 'professional',
    portability: 'heavy',
    year: 2023,
    buyLinks: {
      official: 'https://www.autelrobotics.com/product/evo-ii-dual-640t',
      jd: 'https://search.jd.com/Search?keyword=Autel+EVO+II+Dual',
      tmall: ''
    }
  },
  {
    id: 'autel-dragonfish',
    brand: 'Autel',
    name: { zh: 'Autel Dragonfish', en: 'Autel Dragonfish' },
    category: 'enterprise',
    price: 89999,
    currency: 'CNY',
    images: { local: 'images/autel-dragonfish.jpg', external: [] },
    specs: {
      weight: 14600, flightTime: 120,
      camera: { sensor: 'Interchangeable payload', resolution: 'N/A', type: 'VTOL multi-payload', pixels: 'N/A' },
      transmission: { system: 'SkyLink Pro', range: 30 },
      obstacleAvoidance: 'radar',
      maxSpeed: 108,
      gnss: 'GPS + GLONASS + Galileo + BeiDou + RTK'
    },
    scenarios: ['survey', 'inspection'],
    level: 'professional',
    portability: 'heavy',
    year: 2022,
    buyLinks: {
      official: 'https://www.autelrobotics.com/product/dragonfish',
      jd: '',
      tmall: ''
    }
  },

  // ==================== Parrot ====================
  {
    id: 'parrot-anafi-ai',
    brand: 'Parrot',
    name: { zh: 'Parrot ANAFI Ai', en: 'Parrot ANAFI Ai' },
    category: 'enterprise',
    price: 4999,
    currency: 'USD',
    images: { local: 'images/parrot-anafi-ai.jpg', external: [] },
    specs: {
      weight: 898, flightTime: 32,
      camera: { sensor: '1/2" CMOS', resolution: '4K/60fps', type: 'single', pixels: '48MP' },
      transmission: { system: '4G', range: 999 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 57.6,
      gnss: 'GPS + Galileo'
    },
    scenarios: ['survey', 'inspection'],
    level: 'professional',
    portability: 'medium',
    year: 2021,
    buyLinks: {
      official: 'https://www.parrot.com/us/drones/parrot-anafi-ai',
      jd: '',
      tmall: ''
    }
  },
  {
    id: 'parrot-anafi-usa',
    brand: 'Parrot',
    name: { zh: 'Parrot ANAFI USA', en: 'Parrot ANAFI USA' },
    category: 'enterprise',
    price: 7999,
    currency: 'USD',
    images: { local: 'images/parrot-anafi-usa.jpg', external: [] },
    specs: {
      weight: 500, flightTime: 32,
      camera: { sensor: '1/2.4" CMOS + Thermal FLIR', resolution: '4K/30fps', type: 'thermal dual', pixels: '21MP' },
      transmission: { system: 'Wi-Fi 6', range: 7 },
      obstacleAvoidance: 'none',
      maxSpeed: 54,
      gnss: 'GPS + GLONASS + Galileo'
    },
    scenarios: ['inspection', 'rescue', 'survey'],
    level: 'professional',
    portability: 'light',
    year: 2020,
    buyLinks: {
      official: 'https://www.parrot.com/us/drones/parrot-anafi-usa',
      jd: '',
      tmall: ''
    }
  },

  // ==================== Hubsan 哈博森 ====================
  {
    id: 'hubsan-zino-mini-pro',
    brand: 'Hubsan',
    name: { zh: 'Hubsan Zino Mini Pro', en: 'Hubsan Zino Mini Pro' },
    category: 'consumer',
    price: 1899,
    currency: 'CNY',
    images: { local: 'images/hubsan-zino-mini-pro.jpg', external: [] },
    specs: {
      weight: 249, flightTime: 40,
      camera: { sensor: '1/1.3" CMOS', resolution: '4K/30fps', type: 'single', pixels: '48MP' },
      transmission: { system: 'Syncleas 2.0', range: 10 },
      obstacleAvoidance: 'forward-backward-downward',
      maxSpeed: 54,
      gnss: 'GPS + GLONASS'
    },
    scenarios: ['travel', 'vlog', 'fun'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2021,
    buyLinks: {
      official: 'https://www.hubsan.com/product/zino-mini-pro',
      jd: 'https://search.jd.com/Search?keyword=Hubsan+Zino+Mini+Pro',
      tmall: 'https://www.tmall.com/mall-search.html?q=Hubsan+Zino+Mini+Pro'
    }
  },
  {
    id: 'hubsan-zino-2-plus',
    brand: 'Hubsan',
    name: { zh: 'Hubsan Zino 2 Plus', en: 'Hubsan Zino 2 Plus' },
    category: 'consumer',
    price: 2299,
    currency: 'CNY',
    images: { local: 'images/hubsan-zino2-plus.jpg', external: [] },
    specs: {
      weight: 930, flightTime: 35,
      camera: { sensor: '1/2.6" CMOS', resolution: '4K/30fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'Leas 2.0', range: 8 },
      obstacleAvoidance: 'forward',
      maxSpeed: 60,
      gnss: 'GPS + GLONASS'
    },
    scenarios: ['travel', 'vlog'],
    level: 'beginner',
    portability: 'medium',
    year: 2022,
    buyLinks: {
      official: 'https://www.hubsan.com/product/zino-2-plus',
      jd: 'https://search.jd.com/Search?keyword=Hubsan+Zino+2+Plus',
      tmall: 'https://www.tmall.com/mall-search.html?q=Hubsan+Zino+2+Plus'
    }
  },
  {
    id: 'hubsan-ace-pro',
    brand: 'Hubsan',
    name: { zh: 'Hubsan Ace Pro', en: 'Hubsan Ace Pro' },
    category: 'consumer',
    price: 2699,
    currency: 'CNY',
    images: { local: 'images/hubsan-ace-pro.jpg', external: [] },
    specs: {
      weight: 780, flightTime: 37,
      camera: { sensor: '1/2" CMOS', resolution: '4K/60fps', type: 'single', pixels: '48MP' },
      transmission: { system: 'Leas 3.0', range: 10 },
      obstacleAvoidance: 'forward-backward-downward',
      maxSpeed: 72,
      gnss: 'GPS + GLONASS + Galileo'
    },
    scenarios: ['travel', 'vlog', 'landscape'],
    level: 'intermediate',
    portability: 'medium',
    year: 2023,
    buyLinks: {
      official: 'https://www.hubsan.com/product/ace-pro',
      jd: 'https://search.jd.com/Search?keyword=Hubsan+Ace+Pro',
      tmall: 'https://www.tmall.com/mall-search.html?q=Hubsan+Ace+Pro'
    }
  },

  // ==================== Skydio ====================
  {
    id: 'skydio-2-plus',
    brand: 'Skydio',
    name: { zh: 'Skydio 2+', en: 'Skydio 2+' },
    category: 'consumer',
    price: 1099,
    currency: 'USD',
    images: { local: 'images/skydio-2-plus.jpg', external: [] },
    specs: {
      weight: 800, flightTime: 27,
      camera: { sensor: '1/2.3" CMOS', resolution: '4K/60fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'Skydio Link', range: 6 },
      obstacleAvoidance: 'omnidirectional (360°)',
      maxSpeed: 57.6,
      gnss: 'GPS + GLONASS'
    },
    scenarios: ['film', 'travel'],
    level: 'intermediate',
    portability: 'medium',
    year: 2022,
    buyLinks: {
      official: 'https://www.skydio.com/skydio-2-plus',
      jd: '',
      tmall: ''
    }
  },
  {
    id: 'skydio-x10',
    brand: 'Skydio',
    name: { zh: 'Skydio X10', en: 'Skydio X10' },
    category: 'enterprise',
    price: 10999,
    currency: 'USD',
    images: { local: 'images/skydio-x10.jpg', external: [] },
    specs: {
      weight: 1325, flightTime: 40,
      camera: { sensor: '1/1.7" CMOS + FLIR Thermal', resolution: '4K/60fps', type: 'thermal dual', pixels: '48MP' },
      transmission: { system: 'Skydio Enterprise', range: 8 },
      obstacleAvoidance: 'omnidirectional (360°)',
      maxSpeed: 72,
      gnss: 'GPS + Galileo'
    },
    scenarios: ['inspection', 'survey', 'rescue'],
    level: 'professional',
    portability: 'heavy',
    year: 2023,
    buyLinks: {
      official: 'https://www.skydio.com/skydio-x10',
      jd: '',
      tmall: ''
    }
  },

  // ==================== FIMI 飞米 ====================
  {
    id: 'fimi-x8-se-2023',
    brand: 'FIMI',
    name: { zh: 'FIMI X8 SE 2023', en: 'FIMI X8 SE 2023' },
    category: 'consumer',
    price: 1899,
    currency: 'CNY',
    images: { local: 'images/fimi-x8-se.jpg', external: [] },
    specs: {
      weight: 795, flightTime: 35,
      camera: { sensor: '1/2.6" CMOS', resolution: '4K/30fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'RokLink', range: 10 },
      obstacleAvoidance: 'forward-downward',
      maxSpeed: 64.8,
      gnss: 'GPS + GLONASS + Galileo'
    },
    scenarios: ['travel', 'vlog'],
    level: 'beginner',
    portability: 'medium',
    year: 2023,
    buyLinks: {
      official: 'https://www.fimi.com/fimi-x8-se-2023',
      jd: 'https://search.jd.com/Search?keyword=FIMI+X8+SE',
      tmall: 'https://www.tmall.com/mall-search.html?q=FIMI+X8+SE'
    }
  },
  {
    id: 'fimi-mini-3',
    brand: 'FIMI',
    name: { zh: 'FIMI Mini 3', en: 'FIMI Mini 3' },
    category: 'consumer',
    price: 1599,
    currency: 'CNY',
    images: { local: 'images/fimi-mini-3.jpg', external: [] },
    specs: {
      weight: 249, flightTime: 29,
      camera: { sensor: '1/2.5" CMOS', resolution: '4K/30fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'RokLink Mini', range: 8 },
      obstacleAvoidance: 'downward',
      maxSpeed: 57.6,
      gnss: 'GPS + GLONASS'
    },
    scenarios: ['fun', 'travel', 'vlog'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2024,
    buyLinks: {
      official: 'https://www.fimi.com/fimi-mini-3',
      jd: 'https://search.jd.com/Search?keyword=FIMI+Mini+3',
      tmall: 'https://www.tmall.com/mall-search.html?q=FIMI+Mini+3'
    }
  },

  // ==================== DJI 补充型号 ====================
  {
    id: 'dji-rc-pro',
    brand: 'DJI',
    name: { zh: 'DJI Mavic 3 Pro Cine', en: 'DJI Mavic 3 Pro Cine' },
    category: 'consumer',
    price: 19888,
    currency: 'CNY',
    images: { local: 'images/dji-mavic-3-pro-cine.jpg', external: [] },
    specs: {
      weight: 963, flightTime: 43,
      camera: { sensor: '4/3 CMOS Hasselblad (triple)', resolution: '5.1K ProRes', type: 'triple', pixels: '20MP' },
      transmission: { system: 'O3+', range: 15 },
      obstacleAvoidance: 'omnidirectional',
      maxSpeed: 75.6,
      gnss: 'GPS + Galileo + BeiDou'
    },
    scenarios: ['film'],
    level: 'professional',
    portability: 'medium',
    year: 2023,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-mavic-3-pro',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mavic+3+Pro+Cine',
      tmall: ''
    }
  },
  {
    id: 'dji-mini-4k',
    brand: 'DJI',
    name: { zh: 'DJI Mini 4K', en: 'DJI Mini 4K' },
    category: 'consumer',
    price: 1999,
    currency: 'CNY',
    images: { local: 'images/dji-mini-4k.jpg', external: [] },
    specs: {
      weight: 249, flightTime: 31,
      camera: { sensor: '1/2.3" CMOS', resolution: '4K/30fps', type: 'single', pixels: '12MP' },
      transmission: { system: 'O2', range: 10 },
      obstacleAvoidance: 'downward',
      maxSpeed: 57.6,
      gnss: 'GPS + GLONASS'
    },
    scenarios: ['fun', 'travel'],
    level: 'beginner',
    portability: 'ultralight',
    year: 2024,
    buyLinks: {
      official: 'https://store.dji.com/product/dji-mini-4k',
      jd: 'https://search.jd.com/Search?keyword=DJI+Mini+4K',
      tmall: 'https://www.tmall.com/mall-search.html?q=DJI+Mini+4K'
    }
  },
  {
    id: 'dji-matrice-300-rtk',
    brand: 'DJI',
    name: { zh: 'DJI Matrice 300 RTK', en: 'DJI Matrice 300 RTK' },
    category: 'enterprise',
    price: 67999,
    currency: 'CNY',
    images: { local: 'images/dji-matrice-300.jpg', external: [] },
    specs: {
      weight: 6300, flightTime: 55,
      camera: { sensor: 'Interchangeable payload', resolution: 'N/A', type: 'multi-payload', pixels: 'N/A' },
      transmission: { system: 'O3 Enterprise', range: 15 },
      obstacleAvoidance: 'omnidirectional (6-direction)',
      maxSpeed: 82.8,
      gnss: 'GPS + Galileo + BeiDou + RTK'
    },
    scenarios: ['survey', 'inspection', 'rescue'],
    level: 'professional',
    portability: 'heavy',
    year: 2020,
    buyLinks: {
      official: 'https://enterprise.dji.com/matrice-300',
      jd: '',
      tmall: ''
    }
  }
];

// Brand configuration
const brands = [
  { id: 'DJI', name: { zh: 'DJI 大疆', en: 'DJI' }, country: 'China' },
  { id: 'Autel', name: { zh: 'Autel 道通', en: 'Autel Robotics' }, country: 'China' },
  { id: 'Parrot', name: { zh: 'Parrot', en: 'Parrot' }, country: 'France' },
  { id: 'Hubsan', name: { zh: 'Hubsan 哈博森', en: 'Hubsan' }, country: 'China' },
  { id: 'Skydio', name: { zh: 'Skydio', en: 'Skydio' }, country: 'USA' },
  { id: 'FIMI', name: { zh: 'FIMI 飞米', en: 'FIMI' }, country: 'China' }
];

const scenarioKeys = ['travel', 'agriculture', 'survey', 'fpv', 'film', 'fun'];
const levelOrder = ['beginner', 'intermediate', 'expert', 'professional'];
