/**
 * XIDIROVA NARGIZAXON O'RINOVNA - AKADEMIK VA ILMIY PORTALI
 * Dasturiy Mantig'i, Interaktiv Funksiyalar va Dinamik Render
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTheme();
  initLanguage();
  initNavigation();
  initPortraitUpload();
  renderContent();
  initArticlesFilter();
  initModals();
  initCounters();
  initScrollReveal();
});

/* ==========================================================================
   CURRENT LANGUAGE STATE (Default: uz)
   ========================================================================== */
let CURRENT_LANG = localStorage.getItem('scholar_lang') || 'uz';

/* ==========================================================================
   1. INTERACTIVE CELESTIAL CONSTELLATION CANVAS
   (Astrolyabiya yulduzlari, mayin bog'lovchi chiziqlar va kursor aks-sadosi)
   ========================================================================== */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const mouse = { x: null, y: null, radius: 130 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(window.innerWidth < 768 ? 30 : 55, 65);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 1.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35 - 0.05,
      alpha: Math.random() * 0.4 + 0.35,
      pulseSpeed: Math.random() * 0.012 + 0.005,
      isMajorStar: i % 5 === 0,
      isLapis: Math.random() > 0.45
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse interactivity (celestial compass attraction & constellation thread)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          p.x -= (dx / distance) * force * 1.5;
          p.y -= (dy / distance) * force * 1.5;

          // Draw visible mouse constellation thread
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isLight 
            ? `rgba(14, 58, 102, ${0.45 * force})`
            : `rgba(223, 190, 120, ${0.65 * force})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
      }

      p.x += p.vx;
      p.y += p.vy;
      p.alpha += p.pulseSpeed;

      if (p.alpha > 0.85 || p.alpha < 0.25) {
        p.pulseSpeed = -p.pulseSpeed;
      }

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw Star Node (Lapis sapphire or warm antique bronze)
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      if (isLight) {
        ctx.fillStyle = p.isLapis 
          ? `rgba(14, 58, 102, ${p.alpha * 0.75})`
          : `rgba(133, 77, 14, ${p.alpha * 0.7})`;
      } else {
        ctx.fillStyle = p.isLapis 
          ? `rgba(56, 189, 248, ${p.alpha * 0.95})`
          : `rgba(223, 190, 120, ${p.alpha * 0.95})`;
      }
      ctx.fill();

      // If Major Star: Draw 4-pointed ancient astrolabe crosshair glint
      if (p.isMajorStar) {
        const glintLen = p.size * 2.8;
        ctx.beginPath();
        ctx.moveTo(p.x - glintLen, p.y);
        ctx.lineTo(p.x + glintLen, p.y);
        ctx.moveTo(p.x, p.y - glintLen);
        ctx.lineTo(p.x, p.y + glintLen);
        ctx.strokeStyle = isLight 
          ? `rgba(14, 58, 102, ${p.alpha * 0.45})`
          : `rgba(223, 190, 120, ${p.alpha * 0.6})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Connect nearby stars with visible constellation lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (dist < 115) {
          const lineAlpha = (1 - dist / 115) * (isLight ? 0.28 : 0.4);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = isLight 
            ? `rgba(14, 58, 102, ${lineAlpha})`
            : `rgba(197, 160, 89, ${lineAlpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. THEME SWITCHER (Default: Light / Kun Rejimi)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  // Default holatda kun rejimi (light)
  const savedTheme = localStorage.getItem('scholar_theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('scholar_theme', target);
      updateThemeIcon(target);
      const isUz = CURRENT_LANG === 'uz';
      const isRu = CURRENT_LANG === 'ru';
      const msg = target === 'dark' 
        ? (isUz ? 'Tungi rejim faollashtirildi' : isRu ? 'Включен ночной режим' : 'Dark mode activated')
        : (isUz ? 'Kun rejimi faollashtirildi' : isRu ? 'Включен дневной режим' : 'Light mode activated');
      showToast(msg);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    // Agar hozir light bo'lsa, tungi rejimga o'tish uchun oyni (moon), aks holda quyoshni (sun) ko'rsatamiz
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* ==========================================================================
   3. LANGUAGE SWITCHER (UZ / RU / EN)
   ========================================================================== */
function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  applyLanguage(CURRENT_LANG);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang && selectedLang !== CURRENT_LANG) {
        CURRENT_LANG = selectedLang;
        localStorage.setItem('scholar_lang', CURRENT_LANG);
        applyLanguage(CURRENT_LANG);
        renderContent();
        initArticlesFilter();
        const toastMsg = selectedLang === 'uz' ? 'O‘zbek tili tanlandi' : selectedLang === 'ru' ? 'Выбран русский язык' : 'English language selected';
        showToast(toastMsg);
      }
    });
  });
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.uz;
  document.documentElement.setAttribute('lang', lang);

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Replace text in all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });

  // Replace placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      elem.setAttribute('placeholder', dict[key]);
    }
  });

  // Update document title
  if (lang === 'ru') {
    document.title = "Хидирова Наргизахон Уриновна | Доктор исторических наук (DSc)";
  } else if (lang === 'en') {
    document.title = "Khidirova Nargizakhon Urinovna | Doctor of Historical Sciences (DSc)";
  } else {
    document.title = "Xidirova Nargizaxon O‘rinovna | Tarix fanlari doktori (DSc)";
  }
}

/* ==========================================================================
   3. NAVIGATION & SCROLL
   ========================================================================== */
function initNavigation() {
  const nav = document.getElementById('site-nav');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Submenu click for mobile/tablets
    document.querySelectorAll('.nav-item-dropdown > a').forEach(dropdownTrigger => {
      dropdownTrigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 1023) {
          e.preventDefault();
          const parent = dropdownTrigger.closest('.nav-item-dropdown');
          parent.classList.toggle('active');
        }
      });
    });

    navLinks.querySelectorAll('a:not(.nav-item-dropdown > a)').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (mobileBtn.querySelector('i')) {
          mobileBtn.querySelector('i').className = 'fas fa-bars';
        }
      });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 1023 && navLinks.classList.contains('open')) {
        if (!nav.contains(e.target)) {
          navLinks.classList.remove('open');
          if (mobileBtn.querySelector('i')) {
            mobileBtn.querySelector('i').className = 'fas fa-bars';
          }
        }
      }
    });
  }
}

/* ==========================================================================
   4. DASHBOARD PORTRAIT IMAGE
   ========================================================================== */
function initPortraitUpload() {
  const portraitImg = document.getElementById('scholar-portrait-img');
  if (portraitImg) {
    portraitImg.src = 'assets/nargizaxon_xidirova.jpg';
  }
}

/* ==========================================================================
   5. DYNAMIC CONTENT RENDERING
   ========================================================================== */
function renderContent() {
  renderResearchPillars();
  renderDissertations();
  renderMonographs();
  renderProjects();
  renderCertificates();
  renderArticles(SCHOLAR_DATA.articles);
  renderTimeline();
  renderLanguages();
  setTimeout(initScrollReveal, 50);
}

// Research Pillars
function renderResearchPillars() {
  const container = document.getElementById('pillars-grid');
  if (!container) return;

  container.innerHTML = SCHOLAR_DATA.researchAreas.map(pillar => `
    <div class="pillar-card" style="--card-accent: ${pillar.accent}; --card-glow: ${pillar.accent}40">
      <div class="pillar-icon-box">
        <i class="fas fa-${pillar.icon}"></i>
      </div>
      <span class="pillar-badge">${pillar.badge}</span>
      <h3 class="pillar-title">${pillar.title}</h3>
      <p class="pillar-subtitle">${pillar.subtitle}</p>
      <p class="pillar-desc">${pillar.description}</p>
    </div>
  `).join('');
}

// Dissertations
function renderDissertations() {
  const container = document.getElementById('dissertations-grid');
  if (!container) return;
  const t = TRANSLATIONS[CURRENT_LANG] || TRANSLATIONS.uz;
  const yearSuffix = CURRENT_LANG === 'uz' ? '-yil' : CURRENT_LANG === 'ru' ? ' г.' : '';

  container.innerHTML = SCHOLAR_DATA.dissertations.map(diss => `
    <div class="dissertation-card">
      <div class="dissertation-header">
        <span class="dissertation-type-tag">${diss.type}</span>
        <span class="dissertation-year">${diss.year}${yearSuffix}</span>
      </div>
      <h3 class="dissertation-title">${diss.title}</h3>
      <div class="dissertation-meta">
        <div class="meta-row">
          <span class="meta-label">${CURRENT_LANG === 'en' ? 'Specialty:' : CURRENT_LANG === 'ru' ? 'Специальность:' : 'Ixtisoslik:'}</span>
          <span class="meta-val">${diss.specialty}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">${CURRENT_LANG === 'en' ? 'Defense council:' : CURRENT_LANG === 'ru' ? 'Место защиты:' : 'Himoya joyi:'}</span>
          <span class="meta-val">${diss.defensePlace}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">${CURRENT_LANG === 'en' ? 'Advisor:' : CURRENT_LANG === 'ru' ? 'Научный консультант:' : 'Ilmiy maslahatchi:'}</span>
          <span class="meta-val">${diss.supervisor}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">${CURRENT_LANG === 'en' ? 'Volume:' : CURRENT_LANG === 'ru' ? 'Объем:' : 'Hajmi:'}</span>
          <span class="meta-val">${diss.pages}</span>
        </div>
      </div>
      <ul class="dissertation-highlights">
        ${diss.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="dissertation-actions">
        <button class="btn btn-primary btn-sm" onclick="openPdfModal('${diss.pdfFile}', '${diss.title}')">
          <i class="fas fa-file-pdf"></i> ${t.btn_read_autoreferat}
        </button>
        <a href="${diss.pdfFile}" download class="btn btn-secondary btn-sm" title="${t.btn_download_pdf}">
          <i class="fas fa-download"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// Monographs
function renderMonographs() {
  const container = document.getElementById('monographs-grid');
  if (!container) return;

  container.innerHTML = SCHOLAR_DATA.monographs.map(m => `
    <div class="pillar-card" style="--card-accent: #f59e0b; border-color: rgba(245, 158, 11, 0.3)">
      <div class="pillar-icon-box" style="background: rgba(245, 158, 11, 0.15)">
        <i class="fas fa-book"></i>
      </div>
      <span class="pillar-badge" style="background: rgba(245, 158, 11, 0.15); color: #fde68a">${m.badge} • ${m.year}</span>
      <h3 class="pillar-title">${m.title}</h3>
      <p class="pillar-subtitle">${m.city}, ${m.year}. ${m.pages}. (${m.status})</p>
      <p class="pillar-desc">${m.description}</p>
    </div>
  `).join('');
}

// Projects
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = SCHOLAR_DATA.projects.map(proj => `
    <div class="project-card">
      <span class="project-period"><i class="far fa-calendar-alt"></i> ${proj.period}</span>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-customer"><i class="fas fa-landmark"></i> ${proj.customer} (${proj.role})</p>
      <p class="project-desc">${proj.description}</p>
      ${proj.files && proj.files.length > 0 ? `
        <div class="project-files-list">
          ${proj.files.map(f => `
            <a href="javascript:void(0)" onclick="openPdfModal('${f.path}', '${f.name}')" class="project-file-item">
              <span><i class="fas fa-file-pdf" style="color: #ef4444; margin-right: 8px;"></i> ${f.name}</span>
              <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i>
            </a>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}

// Certificates & Diplomas
function renderCertificates() {
  const container = document.getElementById('certificates-grid');
  if (!container) return;

  container.innerHTML = SCHOLAR_DATA.certificates.map(cert => `
    <div class="certificate-card" onclick="openLightbox('${cert.image}', '${cert.title}', '${cert.desc}')">
      <div class="cert-thumbnail-box">
        <img src="${cert.image}" alt="${cert.title}" class="cert-thumbnail-img" loading="lazy">
        <div class="cert-hover-overlay">
          <i class="fas fa-search-plus"></i>
        </div>
      </div>
      <div class="cert-info">
        <span class="cert-category-tag">${cert.category} • ${cert.date}</span>
        <h4 class="cert-title">${cert.title}</h4>
        <p class="cert-institution">${cert.institution}</p>
      </div>
    </div>
  `).join('');
}

// Articles
function renderArticles(articlesList) {
  const container = document.getElementById('articles-grid');
  const countBadge = document.getElementById('articles-count');
  if (!container) return;
  const t = TRANSLATIONS[CURRENT_LANG] || TRANSLATIONS.uz;
  const yearSuffix = CURRENT_LANG === 'uz' ? '-yil' : CURRENT_LANG === 'ru' ? ' г.' : '';

  if (countBadge) {
    countBadge.textContent = CURRENT_LANG === 'uz' 
      ? `${articlesList.length} ta nashr ko‘rsatilmoqda` 
      : CURRENT_LANG === 'ru' 
        ? `Показано ${articlesList.length} публикаций` 
        : `Showing ${articlesList.length} publications`;
  }

  if (articlesList.length === 0) {
    const noResultsTitle = CURRENT_LANG === 'uz' ? 'Hech qanday maqola topilmadi' : CURRENT_LANG === 'ru' ? 'Статьи не найдены' : 'No articles found';
    const noResultsDesc = CURRENT_LANG === 'uz' ? 'Qidiruv so‘zini o‘zgartirib ko‘ring yoki boshqa toifani tanlang.' : CURRENT_LANG === 'ru' ? 'Попробуйте изменить поисковый запрос.' : 'Try changing your search term.';
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-subtle);">
        <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 14px; color: var(--gold-primary);"></i>
        <h3>${noResultsTitle}</h3>
        <p>${noResultsDesc}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = articlesList.map(art => `
    <div class="article-card">
      <div>
        <div class="article-top">
          <span class="article-badge ${art.category === 'international' ? 'international' : ''}">${art.badge}</span>
          <span class="article-year">${art.year}${yearSuffix}</span>
        </div>
        <h4 class="article-title">${art.title}</h4>
        <p class="article-journal">${art.journal}</p>
        <p class="article-desc">${art.desc}</p>
      </div>
      <div class="article-footer">
        <span class="article-pages"><i class="far fa-file-alt"></i> ${art.pages || (CURRENT_LANG === 'en' ? 'Scholarly article' : CURRENT_LANG === 'ru' ? 'Научная статья' : 'Ilmiy nashr')}</span>
        <div class="article-btn-group">
          ${art.pdfFile ? `
            <button class="btn btn-primary btn-sm" onclick="openPdfModal('${art.pdfFile}', '${art.title}')" title="${t.btn_read_pdf}">
              <i class="fas fa-file-pdf"></i> ${t.btn_read_pdf}
            </button>
            <a href="${art.pdfFile}" download class="btn btn-secondary btn-sm" title="${t.btn_download_pdf}">
              <i class="fas fa-download"></i>
            </a>
          ` : `
            <span class="btn btn-secondary btn-sm" style="opacity: 0.6; cursor: default;">
              <i class="fas fa-book"></i> ${CURRENT_LANG === 'en' ? 'Print only' : CURRENT_LANG === 'ru' ? 'Печатное издание' : 'Bosma nashr'}
            </span>
          `}
        </div>
      </div>
    </div>
  `).join('');
}

// Timeline
function renderTimeline() {
  const container = document.getElementById('timeline-list');
  if (!container) return;

  container.innerHTML = SCHOLAR_DATA.career.map((item, index) => {
    const isLeft = index % 2 === 0;
    return `
      <div class="timeline-item ${isLeft ? 'left' : 'right'}">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-period"><i class="far fa-calendar-check"></i> ${item.period}</div>
          <h4 class="timeline-title">${item.position}</h4>
          <p class="timeline-org">${item.org}</p>
          <p class="timeline-desc">${item.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

// Languages
function renderLanguages() {
  const container = document.getElementById('languages-grid');
  if (!container) return;

  container.innerHTML = SCHOLAR_DATA.personal.languages.map(lang => `
    <div class="language-item">
      <div class="lang-header">
        <span class="lang-name">${lang.name}</span>
        <span class="lang-level">${lang.level}</span>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-fill" style="width: ${lang.percent}%"></div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6. ARTICLES FILTER & SEARCH
   ========================================================================== */
function initArticlesFilter() {
  const searchInput = document.getElementById('article-search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let currentCategory = 'all';
  let currentSearch = '';

  function applyFilters() {
    const filtered = SCHOLAR_DATA.articles.filter(art => {
      const matchCategory = currentCategory === 'all' || art.category === currentCategory;
      const query = currentSearch.toLowerCase().trim();
      const matchSearch = !query || 
        art.title.toLowerCase().includes(query) ||
        art.journal.toLowerCase().includes(query) ||
        art.desc.toLowerCase().includes(query) ||
        art.year.toString().includes(query);

      return matchCategory && matchSearch;
    });

    renderArticles(filtered);
    setTimeout(initScrollReveal, 50);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      applyFilters();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      applyFilters();
    });
  });
}

/* ==========================================================================
   7. MODAL WINDOWS (PDF READER & LIGHTBOX & CV MODAL)
   ========================================================================== */
function initModals() {
  const pdfModal = document.getElementById('pdf-modal');
  const lightboxModal = document.getElementById('lightbox-modal');
  const cvModal = document.getElementById('cv-modal');

  // Close triggers
  document.querySelectorAll('.modal-close-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      if (pdfModal) pdfModal.classList.remove('active');
      if (lightboxModal) lightboxModal.classList.remove('active');
      if (cvModal) cvModal.classList.remove('active');
      // Clear iframe src to stop background memory
      const iframe = document.getElementById('pdf-modal-iframe');
      if (iframe) iframe.src = 'about:blank';
    });
  });

  // Close on outside click
  [pdfModal, lightboxModal, cvModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          const iframe = document.getElementById('pdf-modal-iframe');
          if (iframe) iframe.src = 'about:blank';
        }
      });
    }
  });

  // CV modal button trigger
  const openCvBtn = document.getElementById('open-cv-modal-btn');
  if (openCvBtn && cvModal) {
    openCvBtn.addEventListener('click', () => {
      cvModal.classList.add('active');
    });
  }
}

// Global functions for open modals
window.openPdfModal = function(pdfUrl, title) {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-modal-iframe');
  const titleElem = document.getElementById('pdf-modal-title');
  const downloadLink = document.getElementById('pdf-modal-download');

  if (modal && iframe) {
    if (titleElem) titleElem.textContent = title;
    if (downloadLink) {
      downloadLink.href = pdfUrl;
      downloadLink.setAttribute('download', title + '.pdf');
    }
    iframe.src = pdfUrl;
    modal.classList.add('active');
  }
};

window.openLightbox = function(imgUrl, title, desc) {
  const modal = document.getElementById('lightbox-modal');
  const imgElem = document.getElementById('lightbox-img');
  const titleElem = document.getElementById('lightbox-title');
  const descElem = document.getElementById('lightbox-desc');

  if (modal && imgElem) {
    imgElem.src = imgUrl;
    if (titleElem) titleElem.textContent = title;
    if (descElem) descElem.textContent = desc;
    modal.classList.add('active');
  }
};

/* ==========================================================================
   8. STATS COUNTERS (Silliq Raqamlar Animatsiyasi)
   ========================================================================== */
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let started = false;

  function runCounters() {
    statNumbers.forEach(elem => {
      const target = parseInt(elem.getAttribute('data-target') || '0', 10);
      const originalText = elem.textContent;
      const hasPlus = originalText.includes('+');
      let count = 0;
      const duration = 1200; // 1.2s
      const steps = 30;
      const increment = Math.max(1, Math.ceil(target / steps));
      const intervalTime = Math.floor(duration / steps);

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          elem.textContent = target + (hasPlus ? '+' : '');
          clearInterval(timer);
        } else {
          elem.textContent = count + (hasPlus ? '+' : '');
        }
      }, intervalTime);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        runCounters();
      }
    });
  }, { threshold: 0.1 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    observer.observe(statsSection);
  } else {
    runCounters();
  }
}

/* ==========================================================================
   9. TOAST NOTIFICATIONS (Bildirishnomalar)
   ========================================================================== */
function showToast(message, isError = false) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}" style="color: ${isError ? '#ef4444' : '#10b981'}; font-size: 1.25rem;"></i>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
}

/* ==========================================================================
   10. SCROLL REVEAL ANIMATSIYASI (Silliq va Salobatli Ko'tarilish)
   ========================================================================== */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.pillar-card, .dissertation-card, .project-card, .article-card, ' +
    '.certificate-card, .timeline-item, .section-header, .stat-item, .academic-info-card, .language-item'
  );

  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach((el, index) => {
    if (!el.classList.contains('reveal-item')) {
      el.classList.add('reveal-item');
      const delay = (index % 4) * 0.07;
      el.style.transitionDelay = `${delay}s`;
    }
    observer.observe(el);
  });
}
