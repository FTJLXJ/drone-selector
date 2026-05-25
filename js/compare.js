function renderCompare() {
  const main = document.getElementById('mainContent');
  const compareDrones = compareList.map(id => drones.find(d => d.id === id)).filter(Boolean);

  if (compareDrones.length === 0) {
    main.innerHTML = `
      <div class="compare-empty">
        <div class="empty-icon">⚖️</div>
        <h3>${t('compareTitle')}</h3>
        <p>${t('compareEmpty')}</p>
        <button class="btn btn-primary mt-24" onclick="navigateTo('filter')">🔍 ${t('navFilter')}</button>
        <button class="btn mt-8" style="margin-left:8px;" onclick="navigateTo('wizard')">🧭 ${t('navWizard')}</button>
      </div>`;
    return;
  }

  if (compareDrones.length === 1) {
    main.innerHTML = `
      <div class="compare-empty">
        <div class="empty-icon">⚖️</div>
        <h3>${t('compareTitle')}</h3>
        <p>${t('compareSelect')}</p>
        <div class="mt-16">${renderDroneCard(compareDrones[0], false)}</div>
        <button class="btn btn-primary mt-16" onclick="navigateTo('filter')">🔍 ${t('compareAdd')}</button>
      </div>`;
    return;
  }

  // Build comparison table
  const rows = [
    { label: t('detailBrand'), key: 'brand' },
    { label: t('detailCategory'), key: 'category', format: v => t('category' + v.charAt(0).toUpperCase() + v.slice(1)) },
    { label: t('filterPrice'), key: 'price', format: (v, d) => formatPrice(d) },
    { label: t('detailSensor'), key: 'specs.camera.sensor' },
    { label: t('detailResolution'), key: 'specs.camera.resolution' },
    { label: t('detailFlightTime'), key: 'specs.flightTime', format: v => v + t('min'), better: 'higher' },
    { label: t('detailWeight'), key: 'specs.weight', format: v => v + t('gram'), better: 'lower' },
    { label: t('detailTransmission'), key: 'specs.transmission.system' },
    { label: t('detailRange'), key: 'specs.transmission.range', format: v => v + t('km'), better: 'higher' },
    { label: t('detailObstacle'), key: 'specs.obstacleAvoidance' },
    { label: t('detailMaxSpeed'), key: 'specs.maxSpeed', format: v => v + t('kmh'), better: 'higher' },
    { label: t('detailScenario'), key: 'scenarios', format: v => (v || []).map(s => t('scenario' + s.charAt(0).toUpperCase() + s.slice(1))).join(' · ') }
  ];

  // Find best values
  function getVal(drone, key) {
    return key.split('.').reduce((o, k) => o?.[k], drone);
  }

  let tableHtml = '<thead><tr><th></th>';
  compareDrones.forEach(d => {
    const name = d.name[currentLang] || d.name.zh;
    tableHtml += `<th style="padding:14px 16px;">
      <div class="col-header-img">🚁</div>
      <div style="font-weight:700;">${name}</div>
      <div style="color:var(--red);">${formatPrice(d)}</div>
      <div style="margin-top:6px;">
        <button class="btn btn-sm btn-buy" onclick="window.open('${d.buyLinks.jd || d.buyLinks.official || '#'}','_blank')" style="font-size:10px;">🛒 ${t('recBuy')}</button>
      </div>
    </th>`;
  });
  tableHtml += '</tr></thead><tbody>';

  rows.forEach(row => {
    tableHtml += `<tr><td>${row.label}</td>`;
    const values = compareDrones.map(d => getVal(d, row.key));
    let bestIdx = -1;
    let bestUnique = false;

    if (row.better && values.every(v => v !== undefined && v !== null)) {
      const nums = values.map(v => Number(v));
      if (nums.every(n => !isNaN(n))) {
        if (row.better === 'higher') {
          const max = Math.max(...nums);
          const maxCount = nums.filter(n => n === max).length;
          if (maxCount === 1) { bestIdx = nums.indexOf(max); bestUnique = true; }
        } else {
          const min = Math.min(...nums);
          const minCount = nums.filter(n => n === min).length;
          if (minCount === 1) { bestIdx = nums.indexOf(min); bestUnique = true; }
        }
      }
    }

    compareDrones.forEach((d, i) => {
      let val = row.format ? row.format(getVal(d, row.key), d) : getVal(d, row.key);
      if (val === undefined || val === null) val = '-';
      const isBest = bestUnique && bestIdx === i;
      tableHtml += `<td class="${isBest ? 'col-best' : ''}">${val}${isBest ? `<br><span class="better">${t('compareBetter')} ✓</span>` : ''}</td>`;
    });
    tableHtml += '</tr>';
  });

  tableHtml += '</tbody>';

  main.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">⚖️ ${t('compareTitle')}</h2>
      <div class="flex gap-8">
        <button class="btn btn-primary btn-sm" onclick="navigateTo('filter')">+ ${t('compareAdd')}</button>
        <button class="btn btn-sm" onclick="compareList=[];updateCompareBadge();navigateTo('compare')">🗑 ${t('compareClear')}</button>
      </div>
    </div>
    <div class="compare-table-wrap">
      <table class="compare-table">${tableHtml}</table>
    </div>
    <div class="mt-24">
      <h3 style="margin-bottom:12px;">${t('detailBuy')}</h3>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        ${compareDrones.map(d => {
          const name = d.name[currentLang] || d.name.zh;
          let links = '';
          if (d.buyLinks.official) links += `<a class="btn btn-primary btn-sm" href="${d.buyLinks.official}" target="_blank" rel="noopener">🏪 ${name} ${t('detailBuyOfficial')}</a>`;
          if (d.buyLinks.jd) links += `<a class="btn btn-buy btn-sm" href="${d.buyLinks.jd}" target="_blank" rel="noopener">🛒 ${name} ${t('detailBuyJD')}</a>`;
          if (d.buyLinks.tmall) links += `<a class="btn btn-sm" href="${d.buyLinks.tmall}" target="_blank" rel="noopener">🛍️ ${name} ${t('detailBuyTmall')}</a>`;
          return links;
        }).join('')}
      </div>
    </div>`;
}
