// Wizard state
let wizardStep = 0;
let wizardAnswers = {
  scenarios: [],
  budget: null,
  experience: null,
  cameraQuality: null,
  portability: null,
  brands: []
};

const totalSteps = 6;

function renderWizard() {
  const main = document.getElementById('mainContent');
  if (wizardStep === 0) {
    renderWizardIntro(main);
  } else if (wizardStep <= totalSteps) {
    renderWizardStep(main, wizardStep);
  } else {
    renderWizardResults(main);
  }
}

function renderWizardIntro(main) {
  main.innerHTML = `
    <div class="wizard-container text-center">
      <div style="font-size:64px;margin-bottom:16px;">🚁</div>
      <h2 style="font-size:28px;margin-bottom:8px;">${t('wizardTitle')}</h2>
      <p style="color:var(--text-secondary);margin-bottom:32px;">${t('wizardSubtitle')}</p>
      <button class="btn btn-primary btn-block" onclick="startWizard()" style="max-width:320px;margin:0 auto;padding:14px 24px;font-size:16px;">
        ${t('wizardNext')} →
      </button>
    </div>`;
}

function startWizard() {
  wizardStep = 1;
  wizardAnswers = { scenarios: [], budget: null, experience: null, cameraQuality: null, portability: null, brands: [] };
  renderWizardStep(document.getElementById('mainContent'), 1);
}

function renderWizardStep(main, step) {
  const config = getStepConfig(step);
  const total = totalSteps;
  const pct = (step / total) * 100;

  let optionsHtml = '';
  if (step === 2) {
    // Budget: special range selector
    optionsHtml = renderBudgetOptions();
  } else if (step === 6) {
    // Brand: multi-select cards
    optionsHtml = renderBrandOptions();
  } else {
    // Generic option grid
    const isMulti = step === 1 || step === 6;
    optionsHtml = config.options.map((opt, i) => {
      const selected = isMulti
        ? (wizardAnswers[getAnswerKey(step)] || []).includes(i)
        : wizardAnswers[getAnswerKey(step)] === i;
      return `
        <div class="option-card ${selected ? 'selected' : ''}" onclick="${isMulti ? 'toggleMultiAnswer' : 'selectSingleAnswer'}(${step}, ${i}, this)">
          <div class="option-icon">${opt.icon}</div>
          <div class="option-title">${opt.title}</div>
          <div class="option-desc">${opt.desc}</div>
        </div>`;
    }).join('');
  }

  main.innerHTML = `
    <div class="wizard-container">
      <div class="wizard-progress">
        <div class="wizard-progress-bar" style="width:${pct}%"></div>
      </div>
      <div class="wizard-step">${t('wizardStep', { current: step, total })}</div>
      <h2 class="wizard-question">${config.title}</h2>
      <p class="wizard-hint">${config.hint}</p>
      <div class="option-grid">${optionsHtml}</div>
      <div class="wizard-nav">
        <button class="btn" onclick="prevStep()">← ${t('wizardBack')}</button>
        <button class="btn btn-primary" onclick="nextStep()">${step === totalSteps ? t('wizardResult') + ' 🎯' : t('wizardNext') + ' →'}</button>
      </div>
    </div>`;
}

function renderBudgetOptions() {
  const labels = t('q2Labels');
  const budgets = [2000, 5000, 10000, 30000, 999999, Infinity];
  return labels.map((label, i) => {
    const selected = wizardAnswers.budget === i;
    return `
      <div class="option-card ${selected ? 'selected' : ''}" onclick="selectSingleAnswer(2, ${i}, this)">
        <div class="option-icon">${['💰','💰','💵','💎','🏦','🌐'][i]}</div>
        <div class="option-title">${label}</div>
      </div>`;
  }).join('');
}

function renderBrandOptions() {
  const opts = t('q6Options');
  return opts.map((opt, i) => {
    const selected = (wizardAnswers.brands || []).includes(i);
    return `
      <div class="option-card ${selected ? 'selected' : ''}" onclick="toggleMultiAnswer(6, ${i}, this)">
        <div class="option-icon">${opt.icon}</div>
        <div class="option-title">${opt.title}</div>
        <div class="option-desc">${opt.desc}</div>
      </div>`;
  }).join('');
}

function getStepConfig(step) {
  const qKey = 'q' + step + 'Title';
  const hKey = 'q' + step + 'Hint';
  const oKey = 'q' + step + 'Options';
  return {
    title: t(qKey),
    hint: t(hKey),
    options: t(oKey)
  };
}

function getAnswerKey(step) {
  const keys = { 1: 'scenarios', 2: 'budget', 3: 'experience', 4: 'cameraQuality', 5: 'portability', 6: 'brands' };
  return keys[step];
}

function selectSingleAnswer(step, value, el) {
  const key = getAnswerKey(step);
  wizardAnswers[key] = value;
  // Update UI
  el.parentElement.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function toggleMultiAnswer(step, value, el) {
  const key = getAnswerKey(step);
  if (!wizardAnswers[key]) wizardAnswers[key] = [];
  const idx = wizardAnswers[key].indexOf(value);
  if (idx >= 0) {
    wizardAnswers[key].splice(idx, 1);
    el.classList.remove('selected');
  } else {
    wizardAnswers[key].push(value);
    el.classList.add('selected');
  }
}

function prevStep() {
  if (wizardStep <= 1) {
    wizardStep = 0;
  } else {
    wizardStep--;
  }
  navigateTo('wizard');
}

function nextStep() {
  const key = getAnswerKey(wizardStep);
  const ans = wizardAnswers[key];

  // Validation
  if (Array.isArray(ans) && ans.length === 0) {
    alert(currentLang === 'zh' ? '请至少选择一个选项' : 'Please select at least one option');
    return;
  }
  if (!Array.isArray(ans) && ans === null) {
    alert(currentLang === 'zh' ? '请选择一个选项' : 'Please select an option');
    return;
  }

  wizardStep++;
  navigateTo('wizard');
}

function renderWizardResults(main) {
  // Score all drones
  const scored = drones.map(d => ({
    ...d,
    score: calculateScore(d, wizardAnswers)
  })).sort((a, b) => b.score - a.score);

  const top3 = scored.slice(0, 3).filter(d => d.score > 0);

  if (top3.length === 0) {
    main.innerHTML = `
      <div class="wizard-container text-center">
        <div style="font-size:64px;">🤷</div>
        <h2 style="margin:16px 0;">${t('recNoResult')}</h2>
        <button class="btn btn-primary mt-24" onclick="startWizard()">${t('wizardRestart')}</button>
      </div>`;
    return;
  }

  const maxScore = top3[0].score;

  let resultsHtml = top3.map((d, i) => {
    const matchPct = Math.round((d.score / maxScore) * 100);
    const name = d.name[currentLang] || d.name.zh;
    const spec = d.specs;
    const isTop = i === 0;
    return `
      <div class="rec-card ${isTop ? 'best' : ''}">
        <span class="rec-rank ${isTop ? 'top' : 'other'}">${isTop ? '🏆 ' : '#' + (i + 1) + ' '}${isTop ? t('recTitle').split(' ')[0] : ''}</span>
        <div class="rec-info">
          <span class="rec-name">${name}</span>
          <span class="rec-match ${isTop ? 'high' : 'mid'}">${t('recMatch')} ${matchPct}%</span>
          <div class="rec-specs">
            <span>💰 ${formatPrice(d)}</span>
            <span>📷 ${spec.camera.sensor.split(' ').slice(0,2).join(' ')}</span>
            <span>🔋 ${spec.flightTime}${t('min')}</span>
            <span>⚖️ ${spec.weight}${t('gram')}</span>
            <span>📡 ${spec.transmission.system}</span>
          </div>
        </div>
        <div class="rec-actions">
          <button class="btn btn-sm btn-primary" onclick="openDetail('${d.id}')">${t('recDetail')}</button>
          ${getBestBuyLink(d)}
          <button class="btn btn-sm" onclick="toggleCompareFromBtn('${d.id}')" style="font-size:11px;">⚖️ ${t('recCompare')}</button>
        </div>
      </div>`;
  }).join('');

  main.innerHTML = `
    <div style="max-width:700px;margin:0 auto;">
      <div class="text-center" style="margin-bottom:24px;">
        <div style="font-size:48px;">🎯</div>
        <h2 style="margin:8px 0;">${t('recTitle')}</h2>
        <p style="color:var(--text-secondary);font-size:14px;">
          <span style="background:var(--primary-light);padding:4px 10px;border-radius:6px;">
            ${getAnswersSummary()}
          </span>
        </p>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">${resultsHtml}</div>
      <div class="text-center mt-24">
        <button class="btn" onclick="startWizard()">🔄 ${t('wizardRestart')}</button>
        <button class="btn btn-primary" style="margin-left:8px;" onclick="navigateTo('filter')">🔍 ${t('navFilter')}</button>
      </div>
    </div>`;
}

function calculateScore(drone, answers) {
  let score = 0;

  // Scenarios (max 30 pts)
  if (answers.scenarios && answers.scenarios.length > 0) {
    const scenarioMap = { 0: 'travel', 1: 'agriculture', 2: 'survey', 3: 'fpv', 4: 'film', 5: 'fun' };
    answers.scenarios.forEach(sIdx => {
      const scenario = scenarioMap[sIdx];
      if (drone.scenarios && drone.scenarios.includes(scenario)) {
        score += 30 / answers.scenarios.length;
      }
    });
  }

  // Budget (max 20 pts)
  if (answers.budget !== null) {
    const budgetRanges = [
      { min: 0, max: 2000 },
      { min: 2000, max: 5000 },
      { min: 5000, max: 10000 },
      { min: 10000, max: 30000 },
      { min: 30000, max: Infinity },
      { min: 0, max: Infinity }
    ];
    const budget = budgetRanges[answers.budget];
    if (budget.min === 0 && budget.max === Infinity) {
      score += 20;
    } else {
      const price = drone.price * (drone.currency === 'USD' ? 7.2 : 1);
      if (price >= budget.min && price <= budget.max) {
        score += 20;
      } else {
        const mid = (budget.min + (budget.max === Infinity ? 50000 : budget.max)) / 2;
        const dist = Math.abs(price - mid) / mid;
        score += Math.max(0, 20 - dist * 15);
      }
    }
  }

  // Experience (max 20 pts)
  if (answers.experience !== null) {
    const levels = ['beginner', 'intermediate', 'expert', 'professional'];
    const userLevel = levels[answers.experience];
    const droneLevelIdx = levelOrder.indexOf(drone.level);
    const userLevelIdx = answers.experience;
    const diff = Math.abs(droneLevelIdx - userLevelIdx);
    score += Math.max(0, 20 - diff * 7);
  }

  // Camera quality (max 15 pts)
  if (answers.cameraQuality !== null) {
    const cameraLevels = [0, 1, 2, 3]; // none, 1080p, 4K, pro
    const droneCamLevel = getDroneCameraLevel(drone);
    const diff = Math.abs(droneCamLevel - answers.cameraQuality);
    score += Math.max(0, 15 - diff * 5);
  }

  // Portability (max 10 pts)
  if (answers.portability !== null) {
    const portWeights = [249, 1000, 99999];
    const userMaxWeight = portWeights[answers.portability];
    if (drone.specs.weight <= userMaxWeight) {
      score += 10;
    } else {
      score += Math.max(0, 10 - (drone.specs.weight - userMaxWeight) / userMaxWeight * 10);
    }
  }

  // Brand preference (max 5 pts)
  if (answers.brands && answers.brands.length > 0) {
    const brandMap = { 0: null, 1: 'DJI', 2: 'Autel', 3: 'Parrot', 4: 'Hubsan' };
    if (answers.brands.includes(0)) {
      score += 5; // No preference
    } else {
      answers.brands.forEach(bIdx => {
        if (brandMap[bIdx] && drone.brand === brandMap[bIdx]) {
          score += 5;
        }
      });
    }
  }

  return Math.round(score * 10) / 10;
}

function getDroneCameraLevel(drone) {
  const res = drone.specs.camera.resolution;
  const sensor = drone.specs.camera.sensor;
  if (res.includes('8K') || res.includes('ProRes') || sensor.includes('Full-Frame')) return 3;
  if (res.includes('5.1K') || res.includes('6K') || sensor.includes('4/3') || sensor.includes('Hasselblad')) return 3;
  if (res.includes('4K') || sensor.includes('1"')) return 2;
  if (res.includes('2.7K') || res.includes('1080p')) return 1;
  return 0;
}

function getAnswersSummary() {
  const parts = [];
  if (wizardAnswers.scenarios?.length) {
    const sMap = { 0: '📸', 1: '🌾', 2: '🏗️', 3: '🏎️', 4: '🎬', 5: '🎮' };
    parts.push(wizardAnswers.scenarios.map(i => sMap[i]).join(' '));
  }
  if (wizardAnswers.budget !== null) {
    parts.push(t('q2Labels')[wizardAnswers.budget]);
  }
  return parts.join(' · ') || '';
}

function getBestBuyLink(drone) {
  const links = [];
  if (drone.buyLinks.jd) links.push(`<a class="btn btn-sm btn-buy" href="${drone.buyLinks.jd}" target="_blank" rel="noopener" onclick="event.stopPropagation()">🛒 ${t('recBuy')}</a>`);
  else if (drone.buyLinks.official) links.push(`<a class="btn btn-sm btn-primary" href="${drone.buyLinks.official}" target="_blank" rel="noopener" onclick="event.stopPropagation()">🏪 ${t('recBuy')}</a>`);
  return links.join('');
}

function toggleCompareFromBtn(droneId) {
  if (!compareList.includes(droneId)) {
    if (compareList.length >= 4) {
      alert(currentLang === 'zh' ? '最多对比 4 款机型' : 'Maximum 4 drones');
      return;
    }
    compareList.push(droneId);
  }
  updateCompareBadge();
  navigateTo('compare');
}
