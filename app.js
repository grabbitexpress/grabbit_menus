/**
 * GRABBIT EXPRESS - MENU HUB APPLICATION LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // State management
  let activeCategory = 'all';
  let searchQuery = '';
  let activeLightboxImages = [];
  let currentImageIndex = 0;

  // DOM Elements
  const categoriesBar = document.getElementById('categoriesBar');
  const restaurantsGrid = document.getElementById('restaurantsGrid');
  const gridCount = document.getElementById('gridCount');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');

  // Modal Elements
  const imageModal = document.getElementById('imageModal');
  const pdfModal = document.getElementById('pdfModal');
  const orderModal = document.getElementById('orderModal');
  
  // Lightbox Controls
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxVenueName = document.getElementById('lightboxVenueName');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxThumbs = document.getElementById('lightboxThumbs');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');

  // PDF Modal Controls
  const pdfFrame = document.getElementById('pdfFrame');
  const pdfVenueName = document.getElementById('pdfVenueName');
  const pdfDownloadBtn = document.getElementById('pdfDownloadBtn');

  // Order Modal Controls
  const orderVenueName = document.getElementById('orderVenueName');
  const orderWhatsappBtn = document.getElementById('orderWhatsappBtn');
  const orderCallBtn = document.getElementById('orderCallBtn');

  let currentZoom = 1;

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

    restaurantsGrid.innerHTML = filtered.map(item => `
      <div class="card" data-id="${item.id}">
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
          <div class="card-actions">
            <button class="btn-card-menu" onclick="handleViewMenu('${item.id}')">
              <i class="fa-solid ${getMenuBtnIcon(item.type)}"></i>
              <span>${getMenuBtnText(item.type)}</span>
            </button>
            <button class="btn-card-order" onclick="handleOrderModal('${item.id}')">
              <i class="fa-brands fa-whatsapp"></i>
              <span>Order</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function getMenuBtnIcon(type) {
    if (type === 'link') return 'fa-arrow-up-right-from-square';
    if (type === 'pdf') return 'fa-file-pdf';
    return 'fa-images';
  }

  function getMenuBtnText(type) {
    if (type === 'link') return 'Live Menu';
    if (type === 'pdf') return 'PDF Menu';
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

    // Lightbox navigation
    if (prevBtn) prevBtn.addEventListener('click', navigatePrev);
    if (nextBtn) nextBtn.addEventListener('click', navigateNext);
    
    // Zoom controls
    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => {
        currentZoom = Math.min(currentZoom + 0.25, 2.5);
        applyZoom();
      });
    }
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => {
        currentZoom = Math.max(currentZoom - 0.25, 1);
        applyZoom();
      });
    }

    // Close modals on close button or backdrop click
    document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close-btn')) {
          closeAllModals();
        }
      });
    });

    // Keyboard support (Escape to close, Arrows for gallery)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
      if (imageModal && imageModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') navigatePrev();
        if (e.key === 'ArrowRight') navigateNext();
      }
    });
  }

  /**
   * Handle Menu Click Action
   */
  window.handleViewMenu = function(id) {
    const venue = RESTAURANTS_DATA.find(r => r.id === id);
    if (!venue) return;

    if (venue.type === 'link') {
      window.open(venue.link, '_blank');
    } else if (venue.type === 'pdf') {
      openPdfModal(venue);
    } else if (venue.type === 'images') {
      openImageModal(venue);
    }
  };

  /**
   * Open Image Lightbox Gallery
   */
  function openImageModal(venue) {
    activeLightboxImages = venue.images || [];
    currentImageIndex = 0;
    currentZoom = 1;
    
    if (lightboxVenueName) lightboxVenueName.textContent = venue.name;
    updateLightboxStage();
    renderLightboxThumbs();

    imageModal.classList.add('active');
  }

  function updateLightboxStage() {
    if (!activeLightboxImages.length) return;
    lightboxImg.src = activeLightboxImages[currentImageIndex];
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentImageIndex + 1} / ${activeLightboxImages.length}`;
    }
    applyZoom();
    updateThumbActiveState();
  }

  function renderLightboxThumbs() {
    if (!lightboxThumbs) return;
    lightboxThumbs.innerHTML = activeLightboxImages.map((img, idx) => `
      <div class="thumb-item ${idx === currentImageIndex ? 'active' : ''}" onclick="selectThumb(${idx})">
        <img src="${img}" alt="Menu Page ${idx + 1}" />
      </div>
    `).join('');
  }

  window.selectThumb = function(idx) {
    currentImageIndex = idx;
    currentZoom = 1;
    updateLightboxStage();
  };

  function updateThumbActiveState() {
    const thumbs = lightboxThumbs.querySelectorAll('.thumb-item');
    thumbs.forEach((t, idx) => {
      t.classList.toggle('active', idx === currentImageIndex);
    });
  }

  function navigatePrev() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      currentZoom = 1;
      updateLightboxStage();
    }
  }

  function navigateNext() {
    if (currentImageIndex < activeLightboxImages.length - 1) {
      currentImageIndex++;
      currentZoom = 1;
      updateLightboxStage();
    }
  }

  function applyZoom() {
    if (lightboxImg) {
      lightboxImg.style.transform = `scale(${currentZoom})`;
    }
  }

  /**
   * Open PDF Modal Viewer
   */
  function openPdfModal(venue) {
    if (pdfVenueName) pdfVenueName.textContent = venue.name;
    if (pdfFrame) pdfFrame.src = venue.pdfUrl;
    if (pdfDownloadBtn) pdfDownloadBtn.href = venue.pdfUrl;
    pdfModal.classList.add('active');
  }

  /**
   * Open Order Modal
   */
  window.handleOrderModal = function(id) {
    const venue = RESTAURANTS_DATA.find(r => r.id === id);
    if (!venue) return;

    if (orderVenueName) orderVenueName.textContent = `Order from ${venue.name}`;
    
    // Prepare WhatsApp message
    const msg = encodeURIComponent(`Hello Grabbit Express! I would like to order from ${venue.name} in Pamplemousses.`);
    if (orderWhatsappBtn) {
      orderWhatsappBtn.href = `https://wa.me/23058000000?text=${msg}`;
    }
    if (orderCallBtn) {
      orderCallBtn.href = `tel:+23058000000`;
    }

    orderModal.classList.add('active');
  };

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
  }

  // Toggle Owner Info Banner
  window.dismissBanner = function() {
    const banner = document.getElementById('ownerBanner');
    if (banner) banner.style.display = 'none';
  };
});
