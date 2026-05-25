// Filter state
let filterState = {
  priceMin: 0,
  priceMax: Infinity,
  brands: [],
  scenarios: [],
  flightTimeMin: 0,
  weightMax: Infinity,
  cameraRes: [],
  sortBy: 'default'
};

function renderFilter() {
  const main = document.getElementById('mainContent');

  // Get unique brands from data
  const allBrands = [...new Set(drones.map(d => d.brand))];

  let html = `
    <div class="filter-layout">
      <div class="filter-sidebar">
        <h3 style="margin-bottom:16px;">🔍 ${t('filterTitle')}</h3>

        <div class="filter-group">
          <div class="filter-label">${t('filterPrice')}</div>
          <div class="price-inputs">
            <input type="number" id="fPriceMin" placeholder="0" value="${filterState.priceMin || ''}" onchange="updateFilter()">
            <span>—</span>
            <input type="number" id="fPriceMax" placeholder="∞" value="${filterState.priceMax === Infinity ? '' : filterState.priceMax}" onchange="updateFilter()">
          </div>
        </div>

        <div class="filter-group">
          <div class="filter-label">${t('filterBrand')}</div>
          <div class="checkbox-group">
            ${allBrands.map(b => `
              <label><input type="checkbox" value="${b}" ${filterState.brands.length === 0 || filterState.brands.includes(b) ? 'checked' : ''} onchange="updateFilter()"> ${b}</label>
            `).join('')}
          </div>
        </div>

        <div class="filter-group">
          <div class="filter-label">${t('filterScenario')}</div>
          <div class="checkbox-group">
            ${scenarioKeys.map(s => `
              <label><input type="checkbox" value="${s}" ${filterState.scenarios.length === 0 || filterState.scenarios.includes(s) ? 'checked' : ''} onchange="updateFilter()"> ${t('scenario' + s.charAt(0).toUpperCase() + s.slice(1))}</label>
            `).join('')}
          </div>
        </div>

        <div class="filter-group">
          <div class="filter-label">${t('filterFlightTime')} ≥ <span id="fFlightVal">${filterState.flightTimeMin}</span>${t('min')}</div>
          <input type="range" id="fFlightTime" min="0" max="60" value="${filterState.flightTimeMin}" oninput="document.getElementById('fFlightVal').textContent=this.value;updateFilter()">
        </div>

        <div class="filter-group">
          <div class="filter-label">${t('filterWeight')} ≤ <span id="fWeightVal">${filterState.weightMax === Infinity ? t('gram').charAt(0) === 'g' ? '∞' : '不限' : filterState.weightMax + t('gram')}</span></div>
          <input type="range" id="fWeight" min="80" max="50000" value="${filterState.weightMax === Infinity ? 50000 : filterState.weightMax}" oninput="document.getElementById('fWeightVal').textContent=this.value>=50000?'∞':this.value+'${t('gram')}';updateFilter()">
        </div>

        <div class="filter-group">
          <div class="filter-label">${t('filterCamera')}</div>
          <div class="checkbox-group">
            <label><input type="checkbox" value="4k" ${filterState.cameraRes.includes('4k') ? 'checked' : ''} onchange="updateFilter()"> 4K+</label>
            <label><input type="checkbox" value="5k" ${filterState.cameraRes.includes('5k') ? 'checked' : ''} onchange="updateFilter()"> 5.1K+</label>
            <label><input type="checkbox" value="8k" ${filterState.cameraRes.includes('8k') ? 'checked' : ''} onchange="updateFilter()"> 8K</label>
          </div>
        </div>

        <button class="btn btn-primary btn-block" onclick="applyFilter()">${t('filterApply')}</button>
        <button class="btn btn-block mt-8" onclick="resetFilter()">${t('filterReset')}</button>
      </div>

      <div class="filter-results" id="filterResults"></div>
    </div>`;

  main.innerHTML = html;
  renderFilterResults();
}

function updateFilter() {
  // Read values from DOM
  const pMin = document.getElementById('fPriceMin')?.value;
  const pMax = document.getElementById('fPriceMax')?.value;
  const fTime = document.getElementById('fFlightTime')?.value;
  const fWeight = document.getElementById('fWeight')?.value;

  filterState.priceMin = pMin ? Number(pMin) : 0;
  filterState.priceMax = pMax ? Number(pMax) : Infinity;

  // Read checkboxes
  const allBrands = [...new Set(drones.map(d => d.brand))];
  filterState.brands = allBrands.filter(b => document.querySelector(`input[value="${b}"]`)?.checked);

  filterState.scenarios = scenarioKeys.filter(s => document.querySelector(`input[value="${s}"]`)?.checked);

  filterState.flightTimeMin = fTime ? Number(fTime) : 0;
  filterState.weightMax = (fWeight && Number(fWeight) < 50000) ? Number(fWeight) : Infinity;

  filterState.cameraRes = [];
  if (document.querySelector('input[value="4k"]')?.checked) filterState.cameraRes.push('4k');
  if (document.querySelector('input[value="5k"]')?.checked) filterState.cameraRes.push('5k');
  if (document.querySelector('input[value="8k"]')?.checked) filterState.cameraRes.push('8k');

  applyFilter();
}

function applyFilter() {
  updateFilter();
  renderFilterResults();
}

function resetFilter() {
  filterState = {
    priceMin: 0, priceMax: Infinity, brands: [], scenarios: [],
    flightTimeMin: 0, weightMax: Infinity, cameraRes: [], sortBy: 'default'
  };
  renderFilter();
}

function renderFilterResults() {
  const container = document.getElementById('filterResults');
  if (!container) return;

  // Apply filters
  let filtered = drones.filter(d => {
    const price = d.price * (d.currency === 'USD' ? 7.2 : 1);

    if (price < filterState.priceMin) return false;
    if (filterState.priceMax < Infinity && price > filterState.priceMax) return false;

    if (filterState.brands.length > 0 && !filterState.brands.includes(d.brand)) return false;

    if (filterState.scenarios.length > 0) {
      const hasScenario = d.scenarios && d.scenarios.some(s => filterState.scenarios.includes(s));
      if (!hasScenario) return false;
    }

    if (d.specs.flightTime < filterState.flightTimeMin) return false;

    if (d.specs.weight > filterState.weightMax) return false;

    if (filterState.cameraRes.length > 0) {
      const res = d.specs.camera.resolution;
      let match = false;
      filterState.cameraRes.forEach(r => {
        if (r === '4k' && (res.includes('4K') || res.includes('5.1K') || res.includes('5.4K') || res.includes('6K') || res.includes('8K'))) match = true;
        if (r === '5k' && (res.includes('5.1K') || res.includes('5.4K') || res.includes('6K') || res.includes('8K'))) match = true;
        if (r === '8k' && res.includes('8K')) match = true;
      });
      if (!match) return false;
    }

    return true;
  });

  // Sort
  const sort = document.getElementById('fSort')?.value || filterState.sortBy;
  filterState.sortBy = sort;
  switch (sort) {
    case 'priceAsc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'priceDesc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'flightTime':
      filtered.sort((a, b) => b.specs.flightTime - a.specs.flightTime);
      break;
    default:
      // Recommended: weighted score
      break;
  }

  container.innerHTML = `
    <div class="section-header">
      <span class="result-count">${t('filterFound')} <strong>${filtered.length}</strong> ${t('filterUnit')}</span>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="font-size:13px;color:var(--text-secondary);">${t('filterSort')}:</span>
        <select id="fSort" onchange="filterState.sortBy=this.value;applyFilter()">
          <option value="default" ${sort === 'default' ? 'selected' : ''}>${t('sortDefault')}</option>
          <option value="priceAsc" ${sort === 'priceAsc' ? 'selected' : ''}>${t('sortPriceAsc')}</option>
          <option value="priceDesc" ${sort === 'priceDesc' ? 'selected' : ''}>${t('sortPriceDesc')}</option>
          <option value="flightTime" ${sort === 'flightTime' ? 'selected' : ''}>${t('sortFlightTime')}</option>
        </select>
      </div>
    </div>
    <div class="card-grid">
      ${filtered.map(d => renderDroneCard(d, true)).join('')}
    </div>
    ${filtered.length === 0 ? '<div class="empty-state"><div class="empty-icon">🔍</div><p>没有匹配的机型，请调整筛选条件</p></div>' : ''}
    ${compareList.length >= 2 ? `<div class="text-center mt-16"><button class="btn btn-primary" onclick="navigateTo('compare')">⚖️ ${t('recCompare')} (${compareList.length})</button></div>` : ''}
  `;
}
