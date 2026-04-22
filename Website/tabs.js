/**
 * tabs.js
 * Handles tab switching and renders project cards into each tab panel.
 * Each tab's data lives in its own file under /data/
 */

// ── TAB SWITCHING ──────────────────────────────────────────────────────────

const tabBtns  = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(`tab-${target}`).classList.add('active');

    // Re-trigger scroll observer for newly shown cards
    observeCards();
  });
});

// ── RENDER HELPERS ─────────────────────────────────────────────────────────

/**
 * Render a list of projects into a tab panel.
 * @param {string} tabId   - e.g. "graphic-design"
 * @param {object} tabData - { label, title, projects: [...] }
 */
function renderTab(tabId, tabData) {
  const panel = document.getElementById(`tab-${tabId}`);
  if (!panel) return;

  panel.innerHTML = `
    <div class="cat-header">
      <span class="cat-label">— ${tabData.label}</span>
      <h2 class="cat-title">${tabData.title}</h2>
    </div>
    <div class="projects">
      ${tabData.projects.map((p, i) => renderCard(p, i)).join('')}
    </div>
  `;
}

/**
 * Render a single project card.
 * @param {object} project
 * @param {number} index
 */
function renderCard(project, index) {
  const num = String(index + 1).padStart(2, '0');
  const descHtml = project.description
    ? `<p class="project-desc">${project.description}</p>`
    : `<p class="project-desc placeholder-desc">// Add a description for this project</p>`;

  const mediaHtml = renderMedia(project.images || []);

  return `
    <article class="project-card">
      <div class="project-info">
        <span class="project-index">Project ${num}</span>
        <h3 class="project-title">${project.title}</h3>
        ${descHtml}
        <span class="project-tag">${project.tag || 'Work'}</span>
      </div>
      <div class="project-media">
        <div class="image-grid">
          ${mediaHtml}
        </div>
      </div>
    </article>
  `;
}

/**
 * Render image items — real <img> tags or placeholder divs.
 * Each image object: { src, alt, size } where size is one of:
 *   img-square | img-portrait | img-portrait-lg | img-large | img-landscape
 * Or use { placeholder: true, icon, label, size } for placeholders.
 */
function renderMedia(images) {
  if (!images.length) {
    return `
      <div class="placeholder img-large">
        <span class="placeholder-icon">🖼️</span>
        <span class="placeholder-text">Add images to this project</span>
      </div>
    `;
  }

  return images.map(img => {
    if (img.placeholder) {
      return `
        <div class="placeholder ${img.size || 'img-square'}">
          <span class="placeholder-icon">${img.icon || '🖼️'}</span>
          <span class="placeholder-text">${img.label || ''}</span>
        </div>
      `;
    }
    return `<img src="${img.src}" alt="${img.alt || ''}" class="${img.size || 'img-square'}" loading="lazy" />`;
  }).join('');
}

// ── SCROLL REVEAL ──────────────────────────────────────────────────────────

let observer;

function observeCards() {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.08 }
  );

  document.querySelectorAll('.project-card').forEach(c => observer.observe(c));
}

// ── BOOT ───────────────────────────────────────────────────────────────────

// Data objects are declared in their respective /data/*.js files
// and must be available globally before tabs.js runs.

renderTab('graphic-design', GRAPHIC_DESIGN_DATA);
renderTab('filmmaking',     FILMMAKING_DATA);
renderTab('photography',    PHOTOGRAPHY_DATA);
renderTab('misc',           MISC_DATA);

observeCards();
