/**
 * FINFEST '26 — Interactive Application Controller (Professional Corporate & FinTech Edition)
 * Handles live countdown, event modal dossiers, dynamic filtering, scroll animations, and navigation.
 */

// Disable automatic browser scroll restoration so page ALWAYS loads at the very top
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  initIntroLoader();
  init3DTitleTilt();
  initCountdown();
  renderGeneralRules();
  renderEvents();
  renderSchedule();
  renderDignitaries();
  renderGuests();
  renderCoordinators();
  initScrollAnimations();
  initNavigation();
  initModals();
});

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

/* ==========================================================================
   1. Live Countdown Timer
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  // Target: Event Start on 09-09-2026 at 09:00 AM (September 9, 2026)
  const targetDate = new Date(FINFEST_DATA?.meta?.eventStartIso || '2026-09-09T09:00:00').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      const noteEl = document.querySelector('.countdown-note');
      if (noteEl) noteEl.textContent = '⚡ FINFEST \'26 is Live! Event in progress.';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   2. Clean Icon Helper (No map-pin icons, sleek minimalist symbols)
   ========================================================================== */
function getIconSvg(iconName) {
  const icons = {
    'check': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    'arrow-right': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    'clock': `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    'award': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    'users': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  };

  return icons[iconName] || icons['arrow-right'];
}

/* ==========================================================================
   3. Render General Rules Section
   ========================================================================== */
function renderGeneralRules() {
  const container = document.getElementById('rules-grid-container');
  if (!container || !FINFEST_DATA.generalRules) return;

  container.innerHTML = FINFEST_DATA.generalRules.map((rule, idx) => `
    <div class="rule-card reveal reveal-delay-${(idx % 3) + 1}">
      <div class="rule-header-row">
        <span class="rule-category-pill">${rule.category}</span>
        <span class="badge badge-outline">#0${idx + 1}</span>
      </div>
      <h4>${rule.title}</h4>
      <p>${rule.text}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Render Professional Clean Events Grid
   ========================================================================== */
function renderEvents() {
  const gridContainer = document.getElementById('events-grid-container');
  if (!gridContainer || !FINFEST_DATA.events) return;

  gridContainer.innerHTML = FINFEST_DATA.events.map((evt, idx) => `
    <div class="event-card reveal reveal-delay-${(idx % 3) + 1}" 
         style="--card-accent: ${evt.color}; --card-glow: ${evt.accentGlow};"
         onclick="openEventModal('${evt.id}')">
      
      <div>
        <div class="event-card-header">
          <div style="display: flex; align-items: center; gap: 0.45rem; flex-wrap: wrap;">
            <span class="event-num-tag">EVENT 0${idx + 1}</span>
            <span class="badge badge-glow-cyan" style="font-size: 0.68rem; padding: 0.2rem 0.5rem;">${evt.badge}</span>
          </div>
          <span class="event-category-badge">${evt.category}</span>
        </div>

        <h3 class="event-card-title">${evt.title}</h3>
        <p class="event-card-tagline">${evt.tagline}</p>
      </div>

      <div>
        <div class="event-info-strip">
          <div class="event-info-row">
            <span class="event-info-label">Timing</span>
            <span class="event-info-value">${evt.timing}</span>
          </div>
          <div class="event-info-row">
            <span class="event-info-label">Venue</span>
            <span class="event-info-value">${evt.venue}</span>
          </div>
          <div class="event-info-row">
            <span class="event-info-label">Participation</span>
            <span class="event-info-value">${evt.teamSize}</span>
          </div>
        </div>

        <div class="event-card-footer">
          <div class="event-card-cta-btn">
            <span>View Details & Rules</span>
            ${getIconSvg('arrow-right')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

/* ==========================================================================
   5. Clean Professional Event Dossier Modal
   ========================================================================== */
function openEventModal(eventId) {
  const evt = FINFEST_DATA.events.find(e => e.id === eventId);
  if (!evt) return;

  const modal = document.getElementById('event-modal');
  const titleEl = document.getElementById('modal-event-title');
  const tagEl = document.getElementById('modal-event-tag');
  const bodyEl = document.getElementById('modal-event-body');
  const footerActionEl = document.getElementById('modal-event-footer-action');

  if (!modal || !bodyEl) return;

  titleEl.textContent = evt.title;
  tagEl.innerHTML = `
    <span class="badge badge-glow-gold">${evt.badge}</span>
    <span class="badge badge-outline">${evt.category}</span>
  `;

  // Build Executive Modal Dossier
  bodyEl.innerHTML = `
    <!-- Key Matrix Strip -->
    <div class="modal-key-matrix">
      <div class="modal-matrix-box">
        <span class="matrix-label">Scheduled Time</span>
        <span class="matrix-value" style="color: var(--accent-cyan);">${evt.timing}</span>
      </div>
      <div class="modal-matrix-box">
        <span class="matrix-label">Hall / Venue</span>
        <span class="matrix-value">${evt.venue}</span>
      </div>
      <div class="modal-matrix-box">
        <span class="matrix-label">Team Structure</span>
        <span class="matrix-value">${evt.teamSize}</span>
      </div>
      <div class="modal-matrix-box">
        <span class="matrix-label">Session Duration</span>
        <span class="matrix-value">${evt.duration}</span>
      </div>
    </div>

    <!-- Executive Overview -->
    <div class="modal-section-card">
      <h4 style="color: ${evt.color};">Executive Summary & Objective</h4>
      <p style="color: #CBD5E1; font-size: 0.94rem; line-height: 1.7;">${evt.overview}</p>
    </div>

    <!-- Competition Pipeline -->
    <div class="modal-section-card">
      <h4 style="color: ${evt.color};">Competition Pipeline & Rounds</h4>
      <div>
        ${evt.format.map(f => `
          <div class="stage-step-item">
            <h5>${f.phase}</h5>
            <p>${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Scoring Rubric -->
    <div class="modal-section-card">
      <h4 style="color: ${evt.color};">Evaluation Criteria & Weightage</h4>
      <div>
        ${evt.criteria.map(c => `
          <div class="criteria-row-item">
            <div>
              <strong>${c.label}</strong>
              <p>${c.desc}</p>
            </div>
            <span class="criteria-weight-tag">${c.weight}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Compliance & Regulations -->
    <div class="modal-section-card">
      <h4 style="color: ${evt.color};">Event Rules & Compliance</h4>
      <ul class="modal-rules-checklist">
        ${evt.rules.map(r => `
          <li>
            ${getIconSvg('check')}
            <span>${r}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  // Action Button
  if (footerActionEl) {
    footerActionEl.innerHTML = `
      <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; width: 100%; justify-content: space-between; align-items: center;">
        <div style="font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">
          Registration closes: 03-09-2026 • Event: 09-09-2026
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="${evt.regFormUrl}" target="_blank" class="btn btn-primary">
            Register for ${evt.title} ${getIconSvg('arrow-right')}
          </a>
          <button onclick="closeEventModal(); openRegisterModal('${evt.id}');" class="btn btn-secondary btn-sm">
            Event Form & Rules
          </button>
        </div>
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEventModal() {
  const modal = document.getElementById('event-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   6. Render Schedule Timeline
   ========================================================================== */
function renderSchedule() {
  const container = document.getElementById('timeline-container');
  if (!container || !FINFEST_DATA.schedule) return;

  container.innerHTML = FINFEST_DATA.schedule.map((item, idx) => `
    <div class="timeline-item reveal reveal-delay-${(idx % 2) + 1}">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <span class="timeline-time">${item.time}</span>
        <h4>${item.title}</h4>
        <div class="timeline-venue-badge">Venue: ${item.venue}</div>
        <p>${item.desc}</p>
        ${item.details ? `
          <div class="timeline-sub-events">
            ${item.details.map(d => `<div>• ${d}</div>`).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Render Dignitaries & Chief Guests
   ========================================================================== */
function renderDignitaries() {
  const container = document.getElementById('dignitaries-grid-container');
  if (!container || !FINFEST_DATA.dignitaries) return;

  container.innerHTML = FINFEST_DATA.dignitaries.map((d, idx) => `
    <div class="dignitary-card reveal reveal-delay-${(idx % 3) + 1}">
      <div class="dignitary-avatar-wrap">
        ${getIconSvg('award')}
      </div>
      <div class="dignitary-role">${d.role}</div>
      <h4>${d.name}</h4>
      <p style="font-size: 0.85rem; color: #fff; font-weight: 500;">${d.designation}</p>
      <div class="dignitary-inst">${d.institution}</div>
    </div>
  `).join('');
}

function renderGuests() {
  const container = document.getElementById('chief-guests-container');
  if (!container || !FINFEST_DATA.chiefGuests) return;

  container.innerHTML = FINFEST_DATA.chiefGuests.map((g, idx) => `
    <div class="guest-card reveal reveal-delay-${idx + 1}">
      <div class="guest-title-wrap">
        <span class="badge badge-glow-cyan" style="margin-bottom: 0.5rem;">${g.type}</span>
        <h4>${g.name}</h4>
        <p>${g.title}</p>
        <div class="guest-org">${g.organization}</div>
      </div>
      <p class="guest-bio">${g.bio}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   8. Render Footer Coordinators
   ========================================================================== */
function renderCoordinators() {
  const staffContainer = document.getElementById('faculty-coordinators');
  const studentContainer = document.getElementById('student-coordinators');

  if (staffContainer && FINFEST_DATA.coordinators.faculty) {
    staffContainer.innerHTML = FINFEST_DATA.coordinators.faculty.map(f => `
      <div class="coordinator-card">
        <h5>${f.name}</h5>
        <p>${f.designation}</p>
        <a href="mailto:${f.email}">✉ ${f.email}</a>
      </div>
    `).join('');
  }

  if (studentContainer && FINFEST_DATA.coordinators.student) {
    studentContainer.innerHTML = FINFEST_DATA.coordinators.student.map(s => `
      <div class="coordinator-card">
        <h5>${s.name}</h5>
        <p>${s.role}</p>
        <a href="mailto:${s.email}">✉ ${s.email}</a>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   9. Best-in-Class Scroll Reveal Observer
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ==========================================================================
   10. Navigation & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        targetNav?.classList.add('active');
      } else {
        targetNav?.classList.remove('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   11. Modal Setup Helpers
   ========================================================================== */
function initModals() {
  const modal = document.getElementById('event-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeEventModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeEventModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEventModal();
      closeRegisterModal();
    }
  });
}

function openRegisterModal(eventParam = '') {
  const regModal = document.getElementById('register-modal');
  const titleEl = document.getElementById('reg-modal-title');
  const subtitleEl = document.getElementById('reg-modal-subtitle');
  const badgeEl = document.getElementById('reg-modal-badge');
  const bodyContentEl = document.getElementById('reg-modal-body-content');

  if (!regModal || !bodyContentEl) return;

  const evt = eventParam ? FINFEST_DATA.events.find(e => e.id === eventParam || e.title.toLowerCase() === eventParam.toLowerCase()) : null;

  if (evt) {
    if (badgeEl) badgeEl.textContent = `${evt.title} Registration`;
    if (titleEl) titleEl.textContent = `Register for ${evt.title}`;
    if (subtitleEl) subtitleEl.textContent = `Direct Google Form for ${evt.title} (${evt.category})`;

    bodyContentEl.innerHTML = `
      <!-- Official WhatsApp Banner at Top -->
      <div style="background: linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(18, 140, 126, 0.2) 100%); border: 1px solid rgba(37, 211, 102, 0.4); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap;">
        <div>
          <div style="font-size: 0.88rem; color: #25D366; font-weight: 800;">
            💬 Official FINFEST '26 WhatsApp Group
          </div>
          <div style="font-size: 0.76rem; color: #CBD5E1;">
            Join for instant announcements & team briefing.
          </div>
        </div>
        <a href="${FINFEST_DATA.meta.whatsappGroupUrl}" target="_blank" class="btn btn-gold btn-sm" style="background: #25D366; color: #000; font-weight: 800;">
          Join WhatsApp ➔
        </a>
      </div>

      <div class="modal-section-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
          <h4 style="color: ${evt.color}; margin: 0;">${evt.title}</h4>
          <span class="badge badge-glow-cyan">${evt.timing}</span>
        </div>
        <p style="font-size: 0.9rem; color: #CBD5E1; line-height: 1.6; margin-bottom: 1rem;">
          ${evt.overview}
        </p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <span class="badge badge-outline">Team: ${evt.teamSize}</span>
          <span class="badge badge-outline">Venue: ${evt.venue}</span>
        </div>
      </div>

      <div class="modal-section-card">
        <h4 style="color: var(--accent-cyan);">Important Guidelines</h4>
        <ul class="modal-rules-checklist">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Fill out this dedicated Google Form for <strong>${evt.title}</strong>.</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>One candidate can register for a maximum of 3 events across FINFEST '26.</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Original College ID cards are mandatory on event day (09-09-2026).</span>
          </li>
        </ul>
      </div>

      <div style="text-align: center; padding: 0.5rem 0; display: flex; flex-direction: column; gap: 0.75rem;">
        <a href="${evt.regFormUrl}" target="_blank" class="btn btn-primary btn-lg" style="width: 100%;">
          Proceed to ${evt.title} Google Form →
        </a>
        <button onclick="openRegisterModal('')" class="btn btn-secondary btn-sm" style="width: 100%;">
          ← View Forms for Other 5 Events
        </button>
      </div>
    `;
  } else {
    // General 6-Event Hub
    if (badgeEl) badgeEl.textContent = 'Online Registration Hub';
    if (titleEl) titleEl.textContent = "FINFEST '26 Event Forms";
    if (subtitleEl) subtitleEl.textContent = 'Each event has a separate Google Form. Select your event below:';

    bodyContentEl.innerHTML = `
      <!-- Official WhatsApp Banner at Top of ALL Forms -->
      <div style="background: linear-gradient(135deg, rgba(37, 211, 102, 0.18) 0%, rgba(18, 140, 126, 0.28) 100%); border: 1px solid rgba(37, 211, 102, 0.45); border-radius: var(--radius-sm); padding: 1rem 1.25rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
        <div>
          <div style="font-weight: 800; color: #25D366; font-size: 1rem; display: flex; align-items: center; gap: 0.4rem;">
            💬 Official FINFEST '26 WhatsApp Community
          </div>
          <div style="font-size: 0.8rem; color: #E2E8F0; margin-top: 0.25rem;">
            Join before registering for live announcements, schedules & query resolution.
          </div>
        </div>
        <a href="${FINFEST_DATA.meta.whatsappGroupUrl}" target="_blank" class="btn btn-gold" style="background: #25D366; color: #000; font-weight: 800; border-color: #25D366; flex-shrink: 0;">
          Join WhatsApp Group ➔
        </a>
      </div>

      <!-- 6 Event Forms List -->
      <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem; margin-bottom: 1.25rem;">
        ${FINFEST_DATA.events.map((e, idx) => `
          <div style="background: rgba(4, 10, 24, 0.85); border: 1px solid var(--border-subtle); border-left: 3px solid ${e.color}; border-radius: var(--radius-xs); padding: 0.85rem 1rem; display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <div>
              <div style="font-weight: 700; color: #FFFFFF; font-size: 0.95rem;">${idx + 1}. ${e.title}</div>
              <div style="font-size: 0.76rem; color: var(--text-muted); font-family: var(--font-mono);">${e.timing} • ${e.teamSize}</div>
            </div>
            <a href="${e.regFormUrl}" target="_blank" class="btn btn-primary btn-sm" style="flex-shrink: 0;">
              Open Form →
            </a>
          </div>
        `).join('')}
      </div>

      <div class="modal-section-card">
        <h4 style="color: var(--accent-cyan);">General Guidelines</h4>
        <ul class="modal-rules-checklist">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Fill out the specific form corresponding to each competition you are participating in.</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>One candidate can register for a maximum of 3 events.</span>
          </li>
        </ul>
      </div>
    `;
  }

  regModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRegisterModal() {
  const regModal = document.getElementById('register-modal');
  if (regModal) {
    regModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   12. Full-Page Cinematic Moving Trading Intro Loader
   ========================================================================== */
function initIntroLoader() {
  const loader = document.getElementById('intro-loader');
  const canvas = document.getElementById('loader-canvas');
  const pctCounter = document.getElementById('loader-pct-counter');
  const barFill = document.getElementById('loader-bar-fill');

  if (!loader) return;

  // Prevent background scrolling while loading
  document.body.style.overflow = 'hidden';

  // 1. Full-Screen Dynamic Trading Canvas Animation inside Loader
  let animId = null;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    let frame = 0;
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#00F0FF' : '#00E676'
    }));

    function renderLoaderScene() {
      ctx.clearRect(0, 0, width, height);

      // Perspective Holographic Grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Dynamic Sweeping Stock Market Splines
      frame++;
      
      // Wave 1: Cyan Bullish Surge
      ctx.beginPath();
      ctx.strokeStyle = '#00F0FF';
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00F0FF';
      for (let x = 0; x < width; x += 10) {
        const y = height * 0.55 + Math.sin((x + frame * 4) * 0.012) * 50 + Math.cos((x - frame * 2) * 0.02) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Wave 2: Emerald Momentum Line
      ctx.beginPath();
      ctx.strokeStyle = '#00E676';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#00E676';
      for (let x = 0; x < width; x += 10) {
        const y = height * 0.65 + Math.cos((x + frame * 3) * 0.01) * 40 + Math.sin((x + frame * 2) * 0.018) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Floating Network Particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(renderLoaderScene);
    }

    renderLoaderScene();
  }

  // 2. Real-Time Percentage Counter & Progress Sync (7 Seconds Duration)
  let progress = 0;
  const duration = 7000; // 7 seconds total
  const intervalTime = 30;
  const step = (100 / (duration / intervalTime));
  const tickerMsg = document.querySelector('.ticker-msg');

  const progressInterval = setInterval(() => {
    progress += step;

    // Dynamic Phased Telemetry during the 7 seconds
    if (tickerMsg) {
      if (progress < 25) {
        tickerMsg.textContent = 'CONNECTING TO HIGH-FREQUENCY EXCHANGE...';
      } else if (progress < 50) {
        tickerMsg.textContent = 'FETCHING LIVE COMMERCE & STRATEGY FEEDS...';
      } else if (progress < 75) {
        tickerMsg.textContent = 'INITIALIZING 6 CHAMPIONSHIP ARENAS...';
      } else if (progress < 95) {
        tickerMsg.textContent = 'CALIBRATING REAL-TIME SCORING MATRICES...';
      } else {
        tickerMsg.textContent = 'SYSTEM READY — WELCOME TO FINFEST 2026';
      }
    }

    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      if (pctCounter) pctCounter.textContent = '100%';
      if (barFill) barFill.style.width = '100%';

      // Smooth dismiss
      setTimeout(() => {
        loader.classList.add('loaded');
        document.body.style.overflow = '';
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        if (animId) cancelAnimationFrame(animId);
        setTimeout(() => {
          loader.remove();
        }, 900);
      }, 400);
      return;
    }

    const currentVal = Math.floor(progress);
    if (pctCounter) pctCounter.textContent = `${currentVal}%`;
    if (barFill) barFill.style.width = `${currentVal}%`;
  }, intervalTime);
}

function init3DTitleTilt() {
  const title3d = document.getElementById('hero-3d-title');
  const heroWrap = document.querySelector('.hero-event-wrap');
  if (!title3d || !heroWrap) return;

  heroWrap.addEventListener('mousemove', (e) => {
    const rect = heroWrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / rect.height) * 22;
    const rotY = (x / rect.width) * 22;

    title3d.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(30px)`;
  });

  heroWrap.addEventListener('mouseleave', () => {
    title3d.style.transform = '';
  });
}

window.openEventModal = openEventModal;
window.closeEventModal = closeEventModal;
window.openRegisterModal = openRegisterModal;
window.closeRegisterModal = closeRegisterModal;

