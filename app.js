/**
 * GRABBIT EXPRESS - MENU HUB APPLICATION LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  const heroWhatsappBtn = document.getElementById('heroWhatsappBtn');
  if (heroWhatsappBtn) {
    heroWhatsappBtn.href = `https://wa.me/${GRABBIT_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_INTRO)}`;
  }

  // Animate the sustainability impact numbers counting up from 0
  document.querySelectorAll('.impact-number').forEach((el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = value.toLocaleString('en-US') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  // State management
  let activeCategory = 'all';
  let searchQuery = '';

  // DOM Elements
  const categoriesBar = document.getElementById('categoriesBar');
  const restaurantsGrid = document.getElementById('restaurantsGrid');
  const gridCount = document.getElementById('gridCount');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');

  // Order Modal Controls
  const orderModal = document.getElementById('orderModal');
  const orderVenueName = document.getElementById('orderVenueName');
  const orderWhatsappBtn = document.getElementById('orderWhatsappBtn');

  // Initial setup
  renderCategoryPills();
  renderRestaurants();
  setupEventListeners();

  /**
   * Render Category Pill Navigation
   */
  function renderCategoryPills() {
    if (!categoriesBar) return;
    categoriesBar.innerHTML = CATEGORIES.map(cat => `
      <button class="cat-pill ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
        <i class="fa-solid ${cat.icon}"></i>
        <span>${cat.label}</span>
      </button>
    `).join('');
  }

  /**
   * Filter and Render Restaurant Cards
   */
  function renderRestaurants() {
    if (!restaurantsGrid) return;

    const filtered = RESTAURANTS_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery) ||
        item.tagline.toLowerCase().includes(searchQuery) ||
        item.categoryLabel.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    // Update count display
    if (gridCount) {
      gridCount.textContent = `Showing ${filtered.length} venue${filtered.length === 1 ? '' : 's'} in Pamplemousses`;
    }

    if (filtered.length === 0) {
      restaurantsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <i class="fa-solid fa-utensils" style="font-size: 3rem; color: var(--text-sub); margin-bottom: 16px;"></i>
          <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 8px;">No restaurants found</h3>
          <p style="color: var(--text-muted);">Try searching for a different food item or select another category filter.</p>
        </div>
      `;
      return;
    }

    restaurantsGrid.innerHTML = filtered.map((item, idx) => {
      const hasLiveMenu = Boolean(item.link) && item.type !== 'link';
      return `
      <div class="card" data-id="${item.id}" style="--i:${idx}">
        <div class="card-img-wrap">
          <img src="${item.coverImage}" alt="${item.name}" class="card-img" loading="lazy" />
          <span class="card-badge">${item.badge}</span>
          <span class="card-eta"><i class="fa-regular fa-clock"></i> ${item.eta}</span>
        </div>
        <div class="card-body">
          <div class="card-cat">${item.categoryLabel}</div>
          <h3 class="card-title">${item.name}</h3>
          <p class="card-tagline">${item.tagline}</p>
          <div class="card-location">
            <i class="fa-solid fa-location-dot" style="color: var(--green-primary);"></i>
            <span>${item.location}</span>
          </div>
          <div class="card-actions ${hasLiveMenu ? 'card-actions-triple' : ''}">
            <a class="btn-card-menu" href="/menu/${item.id}">
              <i class="fa-solid ${getMenuBtnIcon(item.type)}"></i>
              <span>${getMenuBtnText(item.type)}</span>
            </a>
            ${hasLiveMenu ? `
            <a class="btn-card-order" href="${item.link}" target="_blank" title="View live ${item.name} menu">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              <span>Live Menu</span>
            </a>` : ''}
            <button class="btn-card-order" onclick="handleOrderModal('${item.id}')">
              <i class="fa-brands fa-whatsapp"></i>
              <span>Order</span>
            </button>
          </div>
        </div>
      </div>
    `;
    }).join('');
  }

  function getMenuBtnIcon(type) {
    if (type === 'link') return 'fa-arrow-up-right-from-square';
    if (type === 'pdf') return 'fa-file-pdf';
    return 'fa-images';
  }

  function getMenuBtnText(type) {
    if (type === 'link') return 'Live Menu';
    if (type === 'pdf') return 'View Catalogue';
    return 'View Menu';
  }

  /**
   * Set up Event Listeners
   */
  function setupEventListeners() {
    // Category pill clicks
    if (categoriesBar) {
      categoriesBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-pill');
        if (!btn) return;
        activeCategory = btn.dataset.category;
        renderCategoryPills();
        renderRestaurants();
      });
    }

    // Search Input Listener
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        if (searchClear) {
          searchClear.style.display = searchQuery.length > 0 ? 'block' : 'none';
        }
        renderRestaurants();
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.style.display = 'none';
        renderRestaurants();
      });
    }

    // Close order modal on close button or backdrop click
    document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close-btn')) {
          closeAllModals();
        }
      });
    });

    // Keyboard support (Escape to close order modal)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
    });
  }

  /**
   * Open Order Modal
   */
  window.handleOrderModal = function(id) {
    const venue = RESTAURANTS_DATA.find(r => r.id === id);
    if (!venue) return;

    if (orderVenueName) orderVenueName.textContent = `Order from ${venue.name}`;

    // Prepare WhatsApp message
    const msg = encodeURIComponent(`Hi Grabbit Express. I would love to order [ ] from ${venue.name} (${venue.location}). Thank you!`);
    if (orderWhatsappBtn) {
      orderWhatsappBtn.href = `https://wa.me/${GRABBIT_WHATSAPP_NUMBER}?text=${msg}`;
    }

    orderModal.classList.add('active');
  };

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
  }
});
