/* ==========================================================================
   Central de Documentação do Fluxo de Cashback — LJB CRM Mais Bônus 2026
   Supercharged Interactive Logic (Simulator 2.0, Code Tabs, Print & Search)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initViewSwitcher();
  initSearch();
  initScrollspy();
  initAccordions();
  initCopyButtons();
  initMobileMenu();
  initCashbackSimulator2();
  initCodeTabs();
  initPrintButton();
  initKeyboardShortcuts();
});

/* ==========================================================================
   THEME TOGGLE (Light Master / Dark Optional)
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!themeBtn) return;

  // Por padrão agora o tema é 100% claro, limpo e executivo
  const savedTheme = localStorage.getItem('ljb_theme_v3') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(themeBtn, savedTheme);

  themeBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ljb_theme_v3', newTheme);
    localStorage.setItem('ljb_theme', newTheme);
    updateThemeIcon(themeBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'light') {
    btn.innerHTML = `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    btn.title = 'Alternar para Modo Escuro';
  } else {
    btn.innerHTML = `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
    btn.title = 'Alternar para Modo Claro';
  }
}

/* ==========================================================================
   VIEW SWITCHER (Executiva vs Técnica vs Todos)
   ========================================================================== */
function initViewSwitcher() {
  const buttons = document.querySelectorAll('.view-pill-btn');
  const sections = document.querySelectorAll('.doc-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const view = btn.getAttribute('data-view');
      sections.forEach(sec => {
        const secType = sec.getAttribute('data-view-type');
        if (view === 'all') {
          sec.style.display = 'block';
        } else if (view === 'exec') {
          sec.style.display = (secType === 'tech') ? 'none' : 'block';
        } else if (view === 'tech') {
          sec.style.display = (secType === 'exec') ? 'none' : 'block';
        }
      });
    });
  });
}

/* ==========================================================================
   SEARCH ENGINE (Live filtering across modules)
   ========================================================================== */
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  const sections = document.querySelectorAll('.doc-section');
  const navItems = document.querySelectorAll('.nav-item');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
      sections.forEach(sec => sec.style.display = 'block');
      navItems.forEach(item => item.style.display = 'flex');
      return;
    }

    sections.forEach(sec => {
      const text = sec.innerText.toLowerCase();
      const secId = sec.getAttribute('id');
      const matches = text.includes(query);

      sec.style.display = matches ? 'block' : 'none';

      const matchedNav = document.querySelector(`.nav-item[href="#${secId}"]`);
      if (matchedNav) {
        matchedNav.style.display = matches ? 'flex' : 'none';
      }
    });
  });
}

/* ==========================================================================
   KEYBOARD SHORTCUTS
   ========================================================================== */
function initKeyboardShortcuts() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.blur();
    }
  });
}

/* ==========================================================================
   PRINT / PDF EXPORT
   ========================================================================== */
function initPrintButton() {
  const printBtn = document.getElementById('btn-print-doc');
  if (!printBtn) return;

  printBtn.addEventListener('click', () => {
    window.print();
  });
}

/* ==========================================================================
   SCROLLSPY (Active Navigation Link)
   ========================================================================== */
function initScrollspy() {
  const sections = document.querySelectorAll('.doc-section');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   ACCORDIONS
   ========================================================================== */
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('open');
    });
  });
}

/* ==========================================================================
   CODE TABS (cURL, C#, JS Fetch, JSON)
   ========================================================================== */
function initCodeTabs() {
  const tabContainers = document.querySelectorAll('.code-box');
  tabContainers.forEach(container => {
    const tabBtns = container.querySelectorAll('.code-tab-btn');
    const codeBlocks = container.querySelectorAll('pre code');
    if (!tabBtns.length || !codeBlocks.length) return;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetLang = btn.getAttribute('data-lang');
        codeBlocks.forEach(block => {
          if (block.getAttribute('data-lang') === targetLang) {
            block.parentElement.style.display = 'block';
          } else {
            block.parentElement.style.display = 'none';
          }
        });
      });
    });
  });
}

/* ==========================================================================
   COPY TO CLIPBOARD BUTTONS
   ========================================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      let textToCopy = '';

      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          textToCopy = targetElement.innerText;
        }
      } else {
        const parentBox = btn.closest('.code-box');
        if (parentBox) {
          const visiblePre = Array.from(parentBox.querySelectorAll('pre')).find(p => p.style.display !== 'none');
          if (visiblePre) {
            textToCopy = visiblePre.innerText;
          }
        }
      }

      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = `<svg class="svg-icon" viewBox="0 0 24 24" style="width:13px;height:13px;"><polyline points="20 6 9 17 4 12"/></svg> <span>Copiado!</span>`;
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
          }, 2000);
        });
      }
    });
  });
}

/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const sidebar = document.getElementById('sidebar');
  if (!toggleBtn || !sidebar) return;

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
      if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    }
  });

  const navLinks = sidebar.querySelectorAll('.nav-item');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        sidebar.classList.remove('open');
      }
    });
  });
}

/* ==========================================================================
   INTERACTIVE CASHBACK SIMULATOR 2.0 (LIVE SLIDERS, CONCURRENCY BARS & RECEIPT)
   ========================================================================== */
function initCashbackSimulator2() {
  const purchaseSlider = document.getElementById('sim-slider-purchase');
  const redeemedSlider = document.getElementById('sim-slider-redeemed');
  const purchaseDisplay = document.getElementById('sim-display-purchase');
  const redeemedDisplay = document.getElementById('sim-display-redeemed');

  const paymentSelect = document.getElementById('sim-payment-method');
  const personSelect = document.getElementById('sim-person-type');
  const categorySelect = document.getElementById('sim-category');

  if (!purchaseSlider) return;

  function runSimulation() {
    const purchaseAmount = parseFloat(purchaseSlider.value) || 0;
    const redeemedAmount = parseFloat(redeemedSlider.value) || 0;
    const paymentMethod = paymentSelect.value;
    const personType = personSelect.value; // 'Customer' or 'Employee'
    const category = categorySelect.value;

    // Update Slider Value Displays
    purchaseDisplay.innerText = formatBRL(purchaseAmount);
    redeemedDisplay.innerText = formatBRL(redeemedAmount);

    // 1. Base Líquida (Regra C008: Não gera bônus sobre bônus)
    const eligibleBase = Math.max(0, purchaseAmount - redeemedAmount);

    // 2. Avaliação de Campanhas Elegíveis
    const evaluatedCampaigns = [];

    // Campanha Geral C001: 10%
    const c001Rate = 0.10;
    const c001Amount = eligibleBase * c001Rate;
    evaluatedCampaigns.push({
      id: 'c001',
      name: 'QA - LUIZ - Campanha C001 - Geral 10%',
      rate: '10%',
      calculatedAmount: c001Amount,
      eligible: true
    });

    // Campanha Cartão Lojão C002: 20%
    const c002Eligible = (paymentMethod === 'CARTAO_LOJAO');
    const c002Rate = c002Eligible ? 0.20 : 0.00;
    const c002Amount = eligibleBase * c002Rate;
    evaluatedCampaigns.push({
      id: 'c002',
      name: 'QA - LUIZ - Campanha C002 - Cartao Lojao 20%',
      rate: '20%',
      calculatedAmount: c002Amount,
      eligible: c002Eligible
    });

    // Campanha Categoria Destaque C006: 12%
    const c006Eligible = (category === 'CUECAS');
    const c006Rate = c006Eligible ? 0.12 : 0.00;
    const c006Amount = eligibleBase * c006Rate;
    evaluatedCampaigns.push({
      id: 'c006',
      name: 'QA - LUIZ - Campanha C006 - Departamento Destaque 12%',
      rate: '12%',
      calculatedAmount: c006Amount,
      eligible: c006Eligible
    });

    // 3. Regra de Ouro: Desempate por Maior Crédito Financeiro (NUNCA SOMA!)
    let winningCampaign = evaluatedCampaigns[0];
    for (let i = 1; i < evaluatedCampaigns.length; i++) {
      if (evaluatedCampaigns[i].eligible && evaluatedCampaigns[i].calculatedAmount > winningCampaign.calculatedAmount) {
        winningCampaign = evaluatedCampaigns[i];
      }
    }

    let calculatedAmount = winningCampaign ? winningCampaign.calculatedAmount : 0;
    let grantedAmount = calculatedAmount;
    let floorApplied = false;
    let ceilingApplied = false;
    let ruleTraceReason = '';

    // 4. Regra de Piso R$ 10,00 (Apenas Cliente Comum; Bloqueado para Colaborador)
    if (personType === 'Customer') {
      if (eligibleBase > 0 && calculatedAmount < 10.00) {
        grantedAmount = 10.00;
        floorApplied = true;
        ruleTraceReason = 'Piso sanitário de R$ 10,00 aplicado com sucesso (elevado de ' + formatBRL(calculatedAmount) + ').';
      }
    } else if (personType === 'Employee') {
      floorApplied = false;
      ruleTraceReason = 'Colaborador LJB: Regra Anti-Moeda ativa. Piso de R$ 10,00 desativado permanentemente.';
    }

    // 5. Regra de Teto Sanitário R$ 80,00 (Para qualquer cliente)
    if (grantedAmount > 80.00) {
      grantedAmount = 80.00;
      ceilingApplied = true;
      ruleTraceReason = 'Teto sanitário de R$ 80,00 atingido e cortado para preservação da margem da rede.';
    }

    if (!floorApplied && !ceilingApplied && !ruleTraceReason) {
      ruleTraceReason = `Concessão normal: maior regra individual concedida (${winningCampaign.name}).`;
    }

    // Atualizar KPI do Simulador
    document.getElementById('sim-res-base').innerText = formatBRL(eligibleBase);
    document.getElementById('sim-res-calc').innerText = formatBRL(calculatedAmount);
    document.getElementById('sim-res-granted').innerText = formatBRL(grantedAmount);
    document.getElementById('sim-res-campaign').innerText = winningCampaign.name;

    // Atualizar badges do trace
    const floorBadge = document.getElementById('sim-badge-floor');
    const ceilBadge = document.getElementById('sim-badge-ceil');
    const employeeBadge = document.getElementById('sim-badge-employee');

    if (floorBadge) {
      floorBadge.className = floorApplied ? 'status-tag status-approved' : 'status-tag';
      floorBadge.innerText = floorApplied ? 'Piso R$ 10 Ativado' : 'Sem Piso';
    }
    if (ceilBadge) {
      ceilBadge.className = ceilingApplied ? 'status-tag status-approved' : 'status-tag';
      ceilBadge.innerText = ceilingApplied ? 'Teto R$ 80 Cortado' : 'Abaixo do Teto';
    }
    if (employeeBadge) {
      employeeBadge.innerText = personType === 'Employee' ? 'Colaborador (Anti-Moeda)' : 'Cliente Regular';
      employeeBadge.style.color = personType === 'Employee' ? 'var(--warning-text)' : 'var(--brand-blue)';
    }

    const traceText = document.getElementById('sim-trace-desc');
    if (traceText) {
      traceText.innerText = ruleTraceReason;
    }

    // Update Concurrency Comparison Bar Chart
    const maxVal = Math.max(...evaluatedCampaigns.map(c => c.calculatedAmount), 1);
    evaluatedCampaigns.forEach(c => {
      const barFill = document.getElementById(`concurrency-fill-${c.id}`);
      const barVal = document.getElementById(`concurrency-val-${c.id}`);
      if (barFill && barVal) {
        const pct = Math.min(100, Math.round((c.calculatedAmount / maxVal) * 100));
        barFill.style.width = `${c.eligible ? pct : 0}%`;
        barVal.innerText = c.eligible ? formatBRL(c.calculatedAmount) : 'Inelegível';
        if (c.id === winningCampaign.id && c.eligible) {
          barFill.className = 'concurrency-bar-fill winner';
        } else {
          barFill.className = 'concurrency-bar-fill loser';
        }
      }
    });

    // Update Simulated POS Slip Receipt
    document.getElementById('pos-slip-subtotal').innerText = formatBRL(purchaseAmount);
    document.getElementById('pos-slip-discount').innerText = '-' + formatBRL(redeemedAmount);
    document.getElementById('pos-slip-paid').innerText = formatBRL(eligibleBase);
    document.getElementById('pos-slip-bonus').innerText = formatBRL(grantedAmount);
    document.getElementById('pos-slip-campaign').innerText = winningCampaign.name;

    // Atualizar JSON Preview
    const jsonOutput = {
      outcome: "generated",
      saleId: "CUPOM-FISCAL-" + Math.floor(100000 + Math.random() * 900000),
      bonusLotId: "lot-" + Math.random().toString(36).substring(2, 10),
      amount: parseFloat(grantedAmount.toFixed(2)),
      expiresAt: getFutureDate(30),
      trace: {
        winningCampaignId: winningCampaign.id,
        winningCampaignName: winningCampaign.name,
        eligibleBase: parseFloat(eligibleBase.toFixed(2)),
        calculatedAmount: parseFloat(calculatedAmount.toFixed(2)),
        grantedAmount: parseFloat(grantedAmount.toFixed(2)),
        floorApplied: floorApplied,
        ceilingApplied: ceilingApplied,
        paymentMethod: paymentMethod,
        personType: personType,
        redeemedBonusAmount: parseFloat(redeemedAmount.toFixed(2)),
        campaigns: evaluatedCampaigns.map(c => ({
          campaignName: c.name,
          outcome: c.id === winningCampaign.id ? "Winner" : "Loser",
          calculatedAmount: parseFloat(c.calculatedAmount.toFixed(2)),
          rejectionReason: c.id === winningCampaign.id ? null : (!c.eligible ? "meio de pagamento ou categoria inelegível" : "outra campanha concedeu maior valor financeiro")
        }))
      }
    };

    const jsonCode = document.getElementById('sim-json-code');
    if (jsonCode) {
      jsonCode.innerText = JSON.stringify(jsonOutput, null, 2);
    }
  }

  // Event Listeners
  [purchaseSlider, redeemedSlider, paymentSelect, personSelect, categorySelect].forEach(input => {
    input.addEventListener('input', runSimulation);
    input.addEventListener('change', runSimulation);
  });

  // Run initial calculation
  runSimulation();
}

function formatBRL(val) {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getFutureDate(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
}
