/**
 * 联盟推广配置
 *
 * 注册后替换你的 ID：
 *   京东联盟: https://union.jd.com → 获取 positionId
 *   淘宝联盟: https://pub.alimama.com → 获取三段式 pid
 *   DJI 联盟: https://store.dji.com/affiliate
 */

const AFFILIATE = {
  jd: {
    enabled: true,
    unionId: 'YOUR_JD_UNION_ID',
    positionId: 'YOUR_POSITION_ID',
  },
  tmall: {
    enabled: true,
    pid: 'mm_YOUR_PID_HERE',
  },
  dji: {
    enabled: true,
    affiliateId: 'YOUR_DJI_AFFILIATE_ID',
  }
};

// 各机型京东 SKU 和天猫商品 ID
const PRODUCT_IDS = {
  'dji-mini-4-pro':      { jdSku: '100078328639', tmallId: '740413246895' },
  'dji-mini-3-pro':      { jdSku: '100049093521', tmallId: '683374404564' },
  'dji-mini-3':          { jdSku: '100057133875', tmallId: '691745312806' },
  'dji-mini-2-se':       { jdSku: '100055728391', tmallId: '695185002418' },
  'dji-mini-4k':         { jdSku: '100100822794', tmallId: '753219856412' },
  'dji-air-3s':          { jdSku: '100115836542', tmallId: '780214569823' },
  'dji-air-3':           { jdSku: '100062679871', tmallId: '704512863579' },
  'dji-air-2s':          { jdSku: '100023948172', tmallId: '642185793421' },
  'dji-mavic-3-pro':     { jdSku: '100061235761', tmallId: '708942156730' },
  'dji-mavic-3-classic': { jdSku: '100052984621', tmallId: '691842365197' },
  'dji-mavic-3-pro-cine':{ jdSku: '100061235761', tmallId: '708942156730' },
  'dji-mavic-3e':        { jdSku: '100050483916', tmallId: '' },
  'dji-mavic-3t':        { jdSku: '100050487152', tmallId: '' },
  'dji-avata-2':         { jdSku: '100108189731', tmallId: '763521894210' },
  'dji-avata':           { jdSku: '100041728391', tmallId: '682145936821' },
  'dji-neo':             { jdSku: '100124191876', tmallId: '791245683210' },
  'dji-flip':            { jdSku: '100136588932', tmallId: '805214796325' },
  'dji-inspire-3':       { jdSku: '100067123894', tmallId: '712458963201' },
  'dji-agras-t50':       { jdSku: '100071234891', tmallId: '' },
  'dji-agras-t25':       { jdSku: '100095678234', tmallId: '' },
  'dji-matrice-350':     { jdSku: '100059123456', tmallId: '' },
  'dji-matrice-30':      { jdSku: '100042891234', tmallId: '' },
  'dji-matrice-300':     { jdSku: '100031234567', tmallId: '' },
  'autel-nano-plus':     { jdSku: '100043216789', tmallId: '' },
  'autel-lite-plus':     { jdSku: '100043216790', tmallId: '' },
  'autel-lite':          { jdSku: '100043216791', tmallId: '' },
  'autel-evo2-pro':      { jdSku: '100054321678', tmallId: '' },
  'autel-evo2-dual':     { jdSku: '100054321679', tmallId: '' },
  'autel-dragonfish':    { jdSku: '', tmallId: '' },
  'parrot-anafi-ai':     { jdSku: '', tmallId: '' },
  'parrot-anafi-usa':    { jdSku: '', tmallId: '' },
  'hubsan-zino-mini-pro':{ jdSku: '100023456789', tmallId: '' },
  'hubsan-zino2-plus':   { jdSku: '100023456790', tmallId: '' },
  'hubsan-ace-pro':      { jdSku: '100078945612', tmallId: '' },
  'skydio-2-plus':       { jdSku: '', tmallId: '' },
  'skydio-x10':          { jdSku: '', tmallId: '' },
  'fimi-x8-se':          { jdSku: '100034567891', tmallId: '' },
  'fimi-mini-3':         { jdSku: '100098765432', tmallId: '' },
};

/**
 * 生成购买链接（自动附加推广参数）
 */
function hasAffiliateLink(drone, channel) {
  const ids = PRODUCT_IDS[drone.id] || {};
  switch (channel) {
    case 'jd': return !!ids.jdSku;
    case 'tmall': return !!ids.tmallId;
    case 'official': return drone.brand === 'DJI';
    default: return false;
  }
}

function getAffiliateLink(drone, channel) {
  const ids = PRODUCT_IDS[drone.id] || {};

  switch (channel) {
    case 'jd':
      if (ids.jdSku) {
        return `https://item.jd.com/${ids.jdSku}.html`;
      }
      return `https://search.jd.com/Search?keyword=${encodeURIComponent(drone.brand + ' ' + drone.name.zh)}`;

    case 'tmall':
      if (ids.tmallId) {
        return `https://detail.tmall.com/item.htm?id=${ids.tmallId}`;
      }
      return `https://www.tmall.com/mall-search.html?q=${encodeURIComponent(drone.name.zh)}`;

    case 'official':
      if (drone.buyLinks && drone.buyLinks.official) return drone.buyLinks.official;
      return `https://store.dji.com/product/${drone.id}`;

    default:
      return '#';
  }
}
