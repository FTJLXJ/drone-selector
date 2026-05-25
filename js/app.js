// App state
let currentPage = 'wizard';
let currentLang = 'zh';
let compareList = [];

// Init
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('langSwitch').addEventListener('click', toggleLang);
  document.getElementById('overlay').addEventListener('click', closeDetail);
  setupNavTabs();
  navigateTo('wizard');
});

function setupNavTabs() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const page = tab.dataset.page;
      navigateTo(page);
    });
  });
}

function navigateTo(page) {
  currentPage = page;
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const tab = document.querySelector(`[data-page="${page}"]`);
  if (tab) tab.classList.add('active');

  const main = document.getElementById('mainContent');
  switch (page) {
    case 'wizard': renderWizard(); break;
    case 'filter': renderFilter(); break;
    case 'compare': renderCompare(); break;
    default: renderWizard();
  }
}

function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-CN';
  document.getElementById('langSwitch').textContent = currentLang === 'zh' ? 'EN' : '中';
  updateI18nTexts();
  navigateTo(currentPage);
}

function updateI18nTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
}

function openDetail(droneId) {
  const drone = drones.find(d => d.id === droneId);
  if (!drone) return;

  const overlay = document.getElementById('overlay');
  let html = `
    <div class="detail-modal">
      <button class="detail-close" onclick="closeDetail()">&times;</button>
      <div class="detail-hero brand-${drone.brand.toLowerCase()}">
        <img src="${drone.images.local || ''}" alt="${drone.name[currentLang] || drone.name.zh}"
             onerror="this.style.display='none';this.parentElement.classList.add('no-img')">
      </div>
      <div class="detail-thumbs">
        <div class="detail-thumb active">🚁</div>
        <div class="detail-thumb">📷</div>
        <div class="detail-thumb">📡</div>
      </div>
      <div class="detail-body">
        <div class="detail-info">
          <h2>${drone.name[currentLang] || drone.name.zh}</h2>
          <p style="color:var(--text-secondary);font-size:13px;margin-bottom:8px;">
            ${t('detailBrand')}: ${drone.brand} · ${t('detailCategory')}: ${t('category' + drone.category.charAt(0).toUpperCase() + drone.category.slice(1))}
          </p>
          <div class="detail-price">${formatPrice(drone)}</div>
          <div class="detail-specs">
            ${specRow(t('detailCamera'), drone.specs.camera.sensor)}
            ${specRow(t('detailResolution'), drone.specs.camera.resolution)}
            ${specRow(t('detailFlightTime'), drone.specs.flightTime + ' ' + t('min'))}
            ${specRow(t('detailWeight'), drone.specs.weight + t('gram'))}
            ${specRow(t('detailTransmission'), drone.specs.transmission.system + ' / ' + drone.specs.transmission.range + t('km'))}
            ${specRow(t('detailObstacle'), drone.specs.obstacleAvoidance)}
            ${specRow(t('detailMaxSpeed'), drone.specs.maxSpeed + t('kmh'))}
            ${specRow(t('detailGnss'), drone.specs.gnss)}
          </div>
          <p style="font-size:13px;color:var(--text-secondary);">
            <strong>${t('detailScenario')}:</strong> ${(drone.scenarios || []).map(s => t('scenario' + s.charAt(0).toUpperCase() + s.slice(1))).join(' · ')}
          </p>
          <div class="detail-buy-btns">
            ${hasAffiliateLink(drone, 'jd') ? `<a class="btn btn-buy" href="${getAffiliateLink(drone, 'jd')}" target="_blank" rel="noopener">🛒 ${t('detailBuyJD')}</a>` : ''}
            ${hasAffiliateLink(drone, 'official') ? `<a class="btn btn-primary" href="${getAffiliateLink(drone, 'official')}" target="_blank" rel="noopener">🏪 ${t('detailBuyOfficial')}</a>` : ''}
            ${hasAffiliateLink(drone, 'tmall') ? `<a class="btn" href="${getAffiliateLink(drone, 'tmall')}" target="_blank" rel="noopener">🛍️ ${t('detailBuyTmall')}</a>` : ''}
          </div>
        </div>
      </div>
    </div>`;

  overlay.innerHTML = html;
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

function toggleCompare(droneId, event) {
  event.stopPropagation();
  const idx = compareList.indexOf(droneId);
  if (idx >= 0) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 4) {
      alert(currentLang === 'zh' ? '最多对比 4 款机型' : 'Maximum 4 drones for comparison');
      return;
    }
    compareList.push(droneId);
  }
  updateCompareBadge();
  refreshCurrentView();
}

function updateCompareBadge() {
  const btn = document.getElementById('navCompareBtn');
  btn.textContent = `${t('navCompare')} (${compareList.length})`;
}

function refreshCurrentView() {
  navigateTo(currentPage);
}

function renderDroneCard(drone, showCompare = true) {
  const name = drone.name[currentLang] || drone.name.zh;
  const isSelected = compareList.includes(drone.id);
  const spec = drone.specs;
  const imgSrc = drone.images.local || (drone.images.external && drone.images.external[0]) || '';
  const is249 = drone.specs.weight <= 249;
  const brandClass = 'brand-' + drone.brand.toLowerCase();

  return `
    <div class="drone-card ${isSelected ? 'selected' : ''}" onclick="openDetail('${drone.id}')">
      <div class="card-img ${brandClass}">
        ${showCompare ? `<div class="card-compare-check" onclick="toggleCompare('${drone.id}', event)">${isSelected ? '✓' : '+'}</div>` : ''}
        ${imgSrc
          ? `<img src="${imgSrc}" alt="${escapeHtml(name)}" onerror="this.style.display='none';this.parentElement.classList.add('no-img')">`
          : '<div class="placeholder-info"><span class="placeholder-brand">' + escapeHtml(drone.brand) + '</span><span class="placeholder-name">' + escapeHtml(name) + '</span></div>'}
        ${is249 ? '<span class="card-badge badge-249">≤249g</span>' : ''}
      </div>
      <div class="card-body">
        <div class="card-header">
          <div>
            <div class="drone-name">${escapeHtml(name)}</div>
            <div class="drone-brand">${escapeHtml(drone.brand)}</div>
          </div>
          <div class="drone-price">${formatPrice(drone)}</div>
        </div>
        <div class="specs-grid">
          <div>📷 ${escapeHtml(spec.camera.sensor.split(' ')[0])}</div>
          <div>🔋 ${spec.flightTime}${t('min')}</div>
          <div>⚖️ ${spec.weight}${t('gram')}</div>
          <div>📡 ${escapeHtml(spec.transmission.system)}</div>
        </div>
        <div class="card-actions">
          <button class="btn btn-sm btn-primary" onclick="event.stopPropagation();openDetail('${drone.id}')">${t('recDetail')}</button>
          ${hasAffiliateLink(drone, 'jd') || hasAffiliateLink(drone, 'official') ? `<a class="btn btn-sm btn-buy" href="${getAffiliateLink(drone, 'jd') || getAffiliateLink(drone, 'official')}" target="_blank" rel="noopener" onclick="event.stopPropagation();">🛒 ${t('recBuy')}</a>` : ''}
        </div>
      </div>
    </div>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatPrice(drone) {
  if (drone.currency === 'USD') return `$${drone.price.toLocaleString()}`;
  return `¥${drone.price.toLocaleString()}`;
}

function specRow(label, value) {
  return `<div class="detail-spec-item"><strong>${label}</strong>${value}</div>`;
}

function getDronesByScenario(scenario) {
  return drones.filter(d => d.scenarios && d.scenarios.includes(scenario));
}

function getDronesByCategory(cat) {
  return drones.filter(d => d.category === cat);
}
