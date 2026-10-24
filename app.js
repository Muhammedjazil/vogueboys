/**
 * VOGUE BOYS - Modern Luxury E-Commerce Application Logic
 * Tailored Couture for Young Gentlemen (Ages 2-16)
 */

// =============================================================================
// Product Catalog Data
// =============================================================================
const PRODUCTS = [
  {
    id: 'vb-festive-kurta',
    title: 'Royal Brocade Nehru Jacket & Silk Kurta Set',
    category: 'festive',
    ageGroup: 'kids',
    ageBracket: '5-8Y',
    sizes: ['4Y', '6Y', '8Y', '10Y'],
    color: 'Maroon',
    colorHex: '#6b1426',
    price: 129,
    originalPrice: 165,
    rating: 4.9,
    reviews: 142,
    badge: 'Festive Exclusive',
    badgeType: 'festive',
    image: 'assets/festive-kurta.jpg',
    description: 'A magnificent festive ensemble for weddings and milestone celebrations. Features a royal maroon jacquard Nehru jacket with opulent gold zari motifs, paired with a soft raw-silk beige kurta and comfort-fit churidar pants.',
    fabricCare: [
      'Inner Lining: 100% Breathable Mulmul Cotton (Hypoallergenic)',
      'Outer Fabric: Heritage Brocade & Raw Mulberry Silk',
      'Waist: Elasticated waistband with soft inner drawstring',
      'Care: Dry Clean Recommended'
    ]
  },
  {
    id: 'vb-formal-tuxedo',
    title: 'Midnight Navy 3-Piece Silk Shawl Tuxedo',
    category: 'formal',
    ageGroup: 'junior',
    ageBracket: '9-12Y',
    sizes: ['6Y', '8Y', '10Y', '12Y', '14Y'],
    color: 'Navy',
    colorHex: '#0b1e36',
    price: 189,
    originalPrice: 245,
    rating: 5.0,
    reviews: 98,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    image: 'assets/formal-tuxedo.jpg',
    description: 'Impeccable bespoke craftsmanship designed for young gentlemen attending black-tie galas, weddings, and formal ceremonies. Includes single-button tailored blazer with black satin shawl lapel, formal vest, and matching pleated trousers.',
    fabricCare: [
      'Shell: 80% Fine Italian Wool Blend, 20% Viscose',
      'Lapel: Silk Satin Grosgrain Accent',
      'Hidden Feature: 1.5-inch inner waist expansion tabs for growth',
      'Care: Specialist Dry Clean Only'
    ]
  },
  {
    id: 'vb-ivory-sherwani',
    title: 'Imperial Ivory Gold Embroidered Sherwani Set',
    category: 'festive',
    ageGroup: 'kids',
    ageBracket: '5-8Y',
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
    color: 'Ivory',
    colorHex: '#f7f3e8',
    price: 195,
    originalPrice: 260,
    rating: 4.9,
    reviews: 184,
    badge: 'Royal Edition',
    badgeType: 'festive',
    image: 'assets/ivory-sherwani.jpg',
    description: 'An heirloom-grade masterpiece crafted from raw ivory silk with delicate floral needlework and antique gold zari embroidery. Complete with a soft matching silk stole with hand-tied tassels and tailored ivory trousers.',
    fabricCare: [
      'Lining: Ultra-soft 100% Organic Muslin Cotton (Zero Scratchiness)',
      'Fabric: Pure Raw Silk with Resham Embroidery',
      'Buttons: Handcrafted Fabric-Wrapped Buttons',
      'Care: Gentle Dry Clean Only'
    ]
  },
  {
    id: 'vb-varsity-bomber',
    title: 'Collegiate Emerald & Cream Varsity Bomber',
    category: 'streetwear',
    ageGroup: 'junior',
    ageBracket: '9-12Y',
    sizes: ['8Y', '10Y', '12Y', '14Y', '16Y'],
    color: 'Emerald',
    colorHex: '#1e4d3a',
    price: 89,
    originalPrice: 115,
    rating: 4.8,
    reviews: 167,
    badge: 'Trending Drop',
    badgeType: 'new',
    image: 'assets/varsity-streetwear.jpg',
    description: 'Retro collegiate varsity bomber jacket crafted from warm boiled wool blend body with supple cream vegan leather sleeves, custom chenille letter patches, and striped ribbed trims.',
    fabricCare: [
      'Body: 70% Warm Boiled Wool, 30% Polyamide',
      'Sleeves: Soft Eco Vegan Nappa Leather',
      'Lining: Quilted Diamond Satin Thermal Padding',
      'Care: Hand Wash or Mild Machine Wash Cold'
    ]
  },
  {
    id: 'vb-linen-resort',
    title: 'Amalfi Coast Sage Linen Mandarin Shirt & Chinos',
    category: 'casual',
    ageGroup: 'kids',
    ageBracket: '5-8Y',
    sizes: ['4Y', '6Y', '8Y', '10Y'],
    color: 'Sage',
    colorHex: '#9ab49d',
    price: 74,
    originalPrice: 95,
    rating: 4.9,
    reviews: 88,
    badge: 'Pure Linen',
    badgeType: 'new',
    image: 'assets/linen-casual.jpg',
    description: 'Effortless Mediterranean resort elegance. Tailored from 100% certified French flax linen that gets softer with every wash. Comes paired with sand-beige stretch cotton chinos and a faux-leather woven belt.',
    fabricCare: [
      'Shirt: 100% Certified French Flax Linen',
      'Chinos: 98% Supima Cotton, 2% Spandex for Active Flexibility',
      'Buttons: Natural Mother of Pearl Buttons',
      'Care: Machine Wash Gentle in Cold Water'
    ]
  },
  {
    id: 'vb-denim-sherpa',
    title: 'Vintage Washed Denim Trucker Jacket with Sherpa',
    category: 'streetwear',
    ageGroup: 'junior',
    ageBracket: '9-12Y',
    sizes: ['6Y', '8Y', '10Y', '12Y', '14Y'],
    color: 'Denim',
    colorHex: '#3b5a82',
    price: 92,
    originalPrice: 120,
    rating: 4.8,
    reviews: 112,
    badge: 'Rugged Warmth',
    badgeType: 'sale',
    image: 'assets/denim-sherpa.jpg',
    description: 'A rugged yet refined winter casual staple. Vintage stone-washed 12oz cotton denim with a plush faux-shearling fleece collar and thermal insulated interior.',
    fabricCare: [
      'Shell: 100% Premium Indigo Cotton Denim',
      'Fleece: High-Loft Ultra Soft Faux Shearling',
      'Hardware: Antique Brass Riveted Buttons',
      'Care: Machine Wash Cold Inside Out'
    ]
  },
  {
    id: 'vb-gentleman-bowtie',
    title: 'Preppy Suspenders, Oxford Shirt & Velvet Bowtie Set',
    category: 'formal',
    ageGroup: 'toddler',
    ageBracket: '2-4Y',
    sizes: ['2Y', '3Y', '4Y', '5Y'],
    color: 'Navy',
    colorHex: '#0b1e36',
    price: 79,
    originalPrice: 105,
    rating: 4.9,
    reviews: 204,
    badge: 'Gentleman Classic',
    badgeType: 'bestseller',
    image: 'assets/gentleman-bowtie.jpg',
    description: 'Adorably dignified! Pure cotton pin-point Oxford shirt, adjustable clip-on genuine leather & elastic suspenders, matching tailored shorts/trousers, and a plush pre-tied velvet bowtie.',
    fabricCare: [
      'Shirt: 100% Organic Pima Cotton',
      'Bowtie: Rich Micro-Velvet with Safety Snap Closure',
      'Suspenders: Y-Back Adjustable Elastic with Leather Joiners',
      'Care: Machine Wash Shirt; Spot Clean Accessories'
    ]
  },
  {
    id: 'vb-tartan-flannel',
    title: 'Heritage Tartan Check Brushed Flannel Shirt',
    category: 'casual',
    ageGroup: 'kids',
    ageBracket: '5-8Y',
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
    color: 'Maroon',
    colorHex: '#6b1426',
    price: 58,
    originalPrice: 75,
    rating: 4.7,
    reviews: 76,
    badge: 'Supima Flannel',
    badgeType: 'sale',
    image: 'assets/tartan-shirt.jpg',
    description: 'Double-brushed Scottish tartan plaid shirt woven from long-staple cotton yarns for heavenly softness. Features button-down collar and twin chest utility pockets.',
    fabricCare: [
      'Fabric: 100% Double-Brushed Cotton Twill',
      'Reinforced: Dual-needle flat felled seams',
      'Care: Machine Wash Tumble Dry Low'
    ]
  },
  {
    id: 'vb-nordic-puffer',
    title: 'Glacier Shield Hooded Down Quilted Puffer Jacket',
    category: 'winter',
    ageGroup: 'teen',
    ageBracket: '13-16Y',
    sizes: ['10Y', '12Y', '14Y', '16Y'],
    color: 'Navy',
    colorHex: '#0b1e36',
    price: 119,
    originalPrice: 155,
    rating: 4.9,
    reviews: 92,
    badge: 'Sub-Zero Warmth',
    badgeType: 'new',
    image: 'assets/winter-puffer.jpg',
    description: 'Engineered for freezing winter mornings and mountain holidays. Features high-density windproof outer shell, 650-fill hypoallergenic insulation, and detachable fleece-lined hood.',
    fabricCare: [
      'Shell: Water-Repellent Ripstop Nylon',
      'Insulation: 650 Fill Eco-Fluff Hypoallergenic Down Alternative',
      'Reflective: Subtle safety trim along back collar',
      'Care: Machine Wash Delicate & Air Dry'
    ]
  },
  {
    id: 'vb-summer-blazer',
    title: 'Riviera Navy Double-Breasted Linen-Wool Blazer',
    category: 'formal',
    ageGroup: 'junior',
    ageBracket: '9-12Y',
    sizes: ['6Y', '8Y', '10Y', '12Y'],
    color: 'Navy',
    colorHex: '#0b1e36',
    price: 139,
    originalPrice: 175,
    rating: 4.8,
    reviews: 64,
    badge: 'Riviera Chic',
    badgeType: 'bestseller',
    image: 'assets/formal-tuxedo.jpg',
    description: 'Inspired by classic yacht club attire. Sharp 6-button double-breasted cut with polished gold-tone crested buttons, peak lapels, and half-canvas lightweight construction.',
    fabricCare: [
      'Fabric: 55% Linen, 45% Tropical Wool Blend',
      'Lining: Striped Breathable Bemberg Cupro',
      'Care: Dry Clean Only'
    ]
  }
];

// Story Avatars for quick discovery
const STORY_CATEGORIES = [
  { id: 'all', name: 'All Drops', img: 'assets/hero-banner.jpg' },
  { id: 'festive', name: 'Festive & Sherwanis', img: 'assets/ivory-sherwani.jpg' },
  { id: 'formal', name: 'Suits & Tuxedos', img: 'assets/formal-tuxedo.jpg' },
  { id: 'streetwear', name: 'Varsity & Street', img: 'assets/varsity-streetwear.jpg' },
  { id: 'casual', name: 'Linen Casual', img: 'assets/linen-casual.jpg' },
  { id: 'winter', name: 'Winter Warmth', img: 'assets/winter-puffer.jpg' }
];

// Currency Rates relative to USD
const CURRENCY_CONFIG = {
  USD: { symbol: '$', rate: 1.0, label: 'USD' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP' },
  INR: { symbol: '₹', rate: 86.5, label: 'INR' }
};

// Available Coupons
const VALID_COUPONS = {
  'GENT20': { discountPercent: 20, description: '20% Off Festive & Spring Promotion' },
  'FIRST10': { discountPercent: 10, description: '10% Welcome Discount' },
  'VIP25': { discountPercent: 25, description: '25% VIP Club Voucher' }
};

const FREE_SHIPPING_THRESHOLD_USD = 99;

// =============================================================================
// Application State
// =============================================================================
const state = {
  currency: 'USD',
  theme: localStorage.getItem('vb_theme') || 'light',
  cart: JSON.parse(localStorage.getItem('vb_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('vb_wishlist') || '[]'),
  appliedCoupon: null,
  activeFilterCategory: 'all',
  activeFilterAge: 'all',
  activeFilterColor: 'all',
  activeSort: 'featured',
  searchQuery: '',
  shippingMethod: 'express', // 'express' (free over threshold) or 'overnight' (+$19)
  currentCheckoutStep: 1,
  checkoutData: {}
};

// =============================================================================
// Helper Functions
// =============================================================================
function formatPrice(usdAmount) {
  const cfg = CURRENCY_CONFIG[state.currency] || CURRENCY_CONFIG.USD;
  const converted = usdAmount * cfg.rate;
  if (state.currency === 'INR') {
    return `${cfg.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
  }
  return `${cfg.symbol}${converted.toFixed(2)}`;
}

function showToast(message, icon = '🛍️') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function saveCart() {
  localStorage.setItem('vb_cart', JSON.stringify(state.cart));
  renderCartUI();
  updateHeaderBadges();
}

function saveWishlist() {
  localStorage.setItem('vb_wishlist', JSON.stringify(state.wishlist));
  updateHeaderBadges();
  renderProducts();
}

// =============================================================================
// Filter & Sorting Logic
// =============================================================================
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (state.activeFilterCategory !== 'all') {
    list = list.filter(p => p.category === state.activeFilterCategory);
  }

  // Age group filter
  if (state.activeFilterAge !== 'all') {
    list = list.filter(p => p.ageGroup === state.activeFilterAge);
  }

  // Color filter
  if (state.activeFilterColor !== 'all') {
    list = list.filter(p => p.color === state.activeFilterColor);
  }

  // Search query
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.color.toLowerCase().includes(q)
    );
  }

  // Sorting
  switch (state.activeSort) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      list.reverse();
      break;
    default:
      // featured - keep default order
      break;
  }

  return list;
}

// =============================================================================
// Rendering Functions
// =============================================================================
function renderStoryCategories() {
  const track = document.getElementById('storyCategoryTrack');
  if (!track) return;

  track.innerHTML = STORY_CATEGORIES.map(story => `
    <button class="story-circle-card ${state.activeFilterCategory === story.id ? 'active' : ''}" data-category="${story.id}">
      <div class="story-ring">
        <img src="${story.img}" alt="${story.name}" class="story-avatar">
      </div>
      <span class="story-name">${story.name}</span>
    </button>
  `).join('');

  track.querySelectorAll('.story-circle-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      setCategoryFilter(cat);
      // Smooth scroll to catalog
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  const countBadge = document.getElementById('productCountBadge');
  if (!grid) return;

  const products = getFilteredProducts();

  if (countBadge) {
    countBadge.textContent = `Showing ${products.length} of ${PRODUCTS.length} styles`;
  }

  if (products.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = products.map(p => {
    const isWishlisted = state.wishlist.includes(p.id);
    const defaultSize = p.sizes[0];

    return `
      <article class="product-card" data-product-id="${p.id}">
        <div class="product-media">
          <span class="product-badge ${p.badgeType}">${p.badge}</span>
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-product-id="${p.id}" aria-label="Save to Wishlist" title="Save to Wishlist">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          
          <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy">
          
          <button class="quick-view-overlay-btn" data-product-id="${p.id}">
            Quick Look & Measurements
          </button>
        </div>

        <div class="product-body">
          <div class="product-category-row">
            <span>${p.category.toUpperCase()}</span>
            <span class="product-age-bracket">Ages ${p.ageBracket}</span>
          </div>

          <h3 class="product-title">${p.title}</h3>

          <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span class="count">${p.rating.toFixed(1)} (${p.reviews})</span>
          </div>

          <div class="product-sizes-chips">
            ${p.sizes.map((s, idx) => `
              <span class="size-chip ${idx === 0 ? 'selected' : ''}">${s}</span>
            `).join('')}
          </div>

          <div class="product-footer">
            <div class="price-box">
              <span class="current-price">${formatPrice(p.price)}</span>
              <span class="original-price">${formatPrice(p.originalPrice)}</span>
            </div>
            <button class="add-bag-btn" data-product-id="${p.id}" data-size="${defaultSize}">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  attachProductCardEvents();
}

function attachProductCardEvents() {
  // Wishlist toggle
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.getAttribute('data-product-id');
      toggleWishlist(pid);
    });
  });

  // Quick View overlay
  document.querySelectorAll('.quick-view-overlay-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.getAttribute('data-product-id');
      openQuickView(pid);
    });
  });

  // Direct add to bag
  document.querySelectorAll('.add-bag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.getAttribute('data-product-id');
      const size = btn.getAttribute('data-size') || '8Y';
      addToCart(pid, size, 1);
    });
  });

  // Click on card title or image opens quick view
  document.querySelectorAll('.product-card').forEach(card => {
    const pid = card.getAttribute('data-product-id');
    card.querySelector('.product-title')?.addEventListener('click', () => openQuickView(pid));
    card.querySelector('.product-img')?.addEventListener('click', () => openQuickView(pid));
  });
}

function updateHeaderBadges() {
  const cartBadge = document.getElementById('cartBadge');
  const wishlistBadge = document.getElementById('wishlistBadge');
  const cartTotalHeader = document.getElementById('cartTotalHeader');

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) cartBadge.textContent = totalItems;
  if (wishlistBadge) wishlistBadge.textContent = state.wishlist.length;

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (cartTotalHeader) {
    cartTotalHeader.textContent = formatPrice(subtotal);
  }
}

// =============================================================================
// Quick View Modal
// =============================================================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const container = document.getElementById('quickViewContent');
  if (!modal || !container) return;

  let selectedSize = product.sizes[0];
  let qty = 1;

  container.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-media">
        <img src="${product.image}" alt="${product.title}" class="quick-view-img">
      </div>
      <div class="quick-view-info">
        <span class="qv-eyebrow">${product.category.toUpperCase()} • AGES ${product.ageBracket}</span>
        <h2 class="qv-title">${product.title}</h2>
        
        <div class="qv-price-row">
          <span class="qv-price">${formatPrice(product.price)}</span>
          <span class="qv-original-price">${formatPrice(product.originalPrice)}</span>
          <span class="badge-mini">Save ${(100 - (product.price / product.originalPrice * 100)).toFixed(0)}%</span>
        </div>

        <p class="qv-desc">${product.description}</p>

        <div class="qv-section-title">
          <span>SELECT SIZE (AGE):</span>
          <a href="#sizeGuideSection" id="qvSizeGuideLink" style="color: var(--accent-gold); font-size: 0.75rem;">View Measurement Guide &rarr;</a>
        </div>
        <div class="qv-size-selector" id="qvSizeSelector">
          ${product.sizes.map((s, idx) => `
            <button class="qv-size-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
          `).join('')}
        </div>

        <div class="qv-section-title">
          <span>FABRIC & CRAFTSMANSHIP:</span>
        </div>
        <ul class="qv-details-list">
          ${product.fabricCare.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div class="qv-actions-row">
          <div class="cart-qty-stepper">
            <button class="qty-btn" id="qvDecQty">&minus;</button>
            <span class="qty-val" id="qvQtyVal">1</span>
            <button class="qty-btn" id="qvIncQty">&plus;</button>
          </div>
          <button class="btn btn-primary" id="qvAddToCartBtn" style="flex: 1;">
            <span>Add to Bag</span>
            <span id="qvBtnPrice">${formatPrice(product.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Size buttons inside modal
  container.querySelectorAll('.qv-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.qv-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.getAttribute('data-size');
    });
  });

  // Quantity controls
  const qtyVal = container.querySelector('#qvQtyVal');
  const btnPrice = container.querySelector('#qvBtnPrice');
  
  container.querySelector('#qvDecQty').addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      qtyVal.textContent = qty;
      btnPrice.textContent = formatPrice(product.price * qty);
    }
  });

  container.querySelector('#qvIncQty').addEventListener('click', () => {
    qty++;
    qtyVal.textContent = qty;
    btnPrice.textContent = formatPrice(product.price * qty);
  });

  // Add to cart from modal
  container.querySelector('#qvAddToCartBtn').addEventListener('click', () => {
    addToCart(product.id, selectedSize, qty);
    closeQuickView();
  });

  // Link to size guide
  container.querySelector('#qvSizeGuideLink')?.addEventListener('click', () => {
    closeQuickView();
  });

  modal.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

// =============================================================================
// Cart Drawer Management
// =============================================================================
function addToCart(productId, size, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = state.cart.findIndex(
    item => item.id === productId && item.size === size
  );

  if (existingItemIndex > -1) {
    state.cart[existingItemIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      size: size,
      color: product.color,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  openCartDrawer();
  showToast(`Added ${product.title} (${size}) to your bag!`, '✨');
}

function updateCartQuantity(index, delta) {
  if (state.cart[index]) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
  }
}

function removeCartItem(index) {
  if (state.cart[index]) {
    const title = state.cart[index].title;
    state.cart.splice(index, 1);
    saveCart();
    showToast(`Removed ${title} from bag.`, '🗑️');
  }
}

function renderCartUI() {
  const body = document.getElementById('cartDrawerBody');
  const countText = document.getElementById('cartItemCountText');
  const subtotalText = document.getElementById('cartSubtotalText');
  const discountLine = document.getElementById('discountLine');
  const discountCodeText = document.getElementById('discountCodeText');
  const discountText = document.getElementById('cartDiscountText');
  const grandTotalText = document.getElementById('cartGrandTotalText');
  const freeShippingText = document.getElementById('freeShippingText');
  const shippingFill = document.getElementById('shippingProgressFill');
  const footer = document.getElementById('cartDrawerFooter');

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countText) countText.textContent = `(${totalItems} items)`;

  if (state.cart.length === 0) {
    body.innerHTML = `
      <div class="empty-state" style="padding: 40px 10px;">
        <div class="empty-icon">🛍️</div>
        <h3>Your shopping bag is empty</h3>
        <p>Explore our royal kurtas, tuxedos, and casuals for boys.</p>
        <button class="btn btn-primary btn-sm" id="emptyCartShopBtn">Start Shopping</button>
      </div>
    `;
    body.querySelector('#emptyCartShopBtn')?.addEventListener('click', () => {
      closeCartDrawer();
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
    });
    if (footer) footer.style.display = 'none';
    if (freeShippingText) freeShippingText.textContent = `Add $99.00 for Free Express Shipping!`;
    if (shippingFill) shippingFill.style.width = '0%';
    return;
  }

  if (footer) footer.style.display = 'block';

  // Render items
  body.innerHTML = state.cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-meta">Size: <strong>${item.size}</strong> • Color: ${item.color}</div>
        <div class="cart-item-bottom">
          <div class="cart-qty-stepper">
            <button class="qty-btn" onclick="window.app.updateCartQty(${idx}, -1)">&minus;</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="window.app.updateCartQty(${idx}, 1)">&plus;</button>
          </div>
          <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
          <button class="cart-item-remove" onclick="window.app.removeCart(${idx})" title="Remove item">&times;</button>
        </div>
      </div>
    </div>
  `).join('');

  // Calculations
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (subtotalText) subtotalText.textContent = formatPrice(subtotal);

  // Free shipping progress
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD_USD - subtotal);
  const percentComplete = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD_USD) * 100);
  
  if (shippingFill) shippingFill.style.width = `${percentComplete}%`;
  if (freeShippingText) {
    if (remainingForFreeShipping === 0) {
      freeShippingText.innerHTML = `🎉 <strong>Congratulations!</strong> You qualify for <strong>FREE Express White-Glove Shipping</strong>.`;
    } else {
      freeShippingText.innerHTML = `Add <strong>${formatPrice(remainingForFreeShipping)}</strong> more to unlock <strong>FREE Express Shipping</strong>!`;
    }
  }

  // Discounts
  let discountAmount = 0;
  if (state.appliedCoupon && VALID_COUPONS[state.appliedCoupon]) {
    const coupon = VALID_COUPONS[state.appliedCoupon];
    discountAmount = (subtotal * coupon.discountPercent) / 100;
    if (discountLine) discountLine.style.display = 'flex';
    if (discountCodeText) discountCodeText.textContent = state.appliedCoupon;
    if (discountText) discountText.textContent = `-${formatPrice(discountAmount)}`;
  } else {
    if (discountLine) discountLine.style.display = 'none';
  }

  const grandTotal = Math.max(0, subtotal - discountAmount);
  if (grandTotalText) grandTotalText.textContent = formatPrice(grandTotal);
}

function openCartDrawer() {
  document.getElementById('cartDrawerBackdrop')?.classList.add('active');
  renderCartUI();
}

function closeCartDrawer() {
  document.getElementById('cartDrawerBackdrop')?.classList.remove('active');
}

// =============================================================================
// Wishlist Management
// =============================================================================
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed from saved wishlist`, '🤍');
  } else {
    state.wishlist.push(productId);
    showToast(`Saved ${product ? product.title : 'item'} to wishlist!`, '❤️');
  }

  saveWishlist();
}

function openWishlistDrawer() {
  const backdrop = document.getElementById('wishlistDrawerBackdrop');
  const body = document.getElementById('wishlistDrawerBody');
  const count = document.getElementById('wishlistItemCountText');
  if (!backdrop || !body) return;

  const savedProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  if (count) count.textContent = `(${savedProducts.length} items)`;

  if (savedProducts.length === 0) {
    body.innerHTML = `
      <div class="empty-state" style="padding: 40px 10px;">
        <div class="empty-icon">🤍</div>
        <h3>Your wishlist is empty</h3>
        <p>Save items you adore by tapping the heart icon on any style.</p>
      </div>
    `;
  } else {
    body.innerHTML = savedProducts.map(p => `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.title}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${p.title}</h4>
          <div class="cart-item-meta">Ages ${p.ageBracket} • ${p.color}</div>
          <div class="cart-item-price" style="margin-bottom: 8px;">${formatPrice(p.price)}</div>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-primary btn-sm" onclick="window.app.moveWishlistToBag('${p.id}')">Add to Bag</button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.removeWishlist('${p.id}')">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  backdrop.classList.add('active');
}

function closeWishlistDrawer() {
  document.getElementById('wishlistDrawerBackdrop')?.classList.remove('active');
}

// =============================================================================
// Checkout Multi-Step Flow
// =============================================================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your bag is empty! Add items to checkout.', '⚠️');
    return;
  }
  closeCartDrawer();
  state.currentCheckoutStep = 1;
  updateCheckoutStepUI();
  document.getElementById('checkoutModal')?.classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('active');
}

function updateCheckoutStepUI() {
  // Step indicator classes
  for (let i = 1; i <= 3; i++) {
    const indicator = document.getElementById(`stepIndicator${i}`);
    const page = document.getElementById(`checkoutStep${i}`);
    if (indicator) {
      if (i <= state.currentCheckoutStep) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    }
    if (page) {
      if (i === state.currentCheckoutStep) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    }
  }

  // Update total in payment step
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;
  if (state.appliedCoupon && VALID_COUPONS[state.appliedCoupon]) {
    discount = (subtotal * VALID_COUPONS[state.appliedCoupon].discountPercent) / 100;
  }
  const shippingCost = state.shippingMethod === 'overnight' ? 19 : 0;
  const finalTotal = subtotal - discount + shippingCost;

  const totalEl = document.getElementById('paymentFinalTotal');
  if (totalEl) totalEl.textContent = formatPrice(finalTotal);

  const shipPriceEl = document.getElementById('shippingMethodPrice');
  if (shipPriceEl) {
    shipPriceEl.textContent = subtotal >= FREE_SHIPPING_THRESHOLD_USD ? 'FREE' : formatPrice(12);
  }
}

function handleShippingSubmit(e) {
  e.preventDefault();
  state.checkoutData.firstName = document.getElementById('shipFirstName').value;
  state.checkoutData.lastName = document.getElementById('shipLastName').value;
  state.checkoutData.email = document.getElementById('shipEmail').value;
  state.checkoutData.phone = document.getElementById('shipPhone').value;
  state.checkoutData.address = document.getElementById('shipAddress').value;
  state.checkoutData.city = document.getElementById('shipCity').value;
  state.checkoutData.state = document.getElementById('shipState').value;
  state.checkoutData.zip = document.getElementById('shipZip').value;

  const selectedMethod = document.querySelector('input[name="shippingMethod"]:checked')?.value || 'express';
  state.shippingMethod = selectedMethod;

  state.currentCheckoutStep = 2;
  updateCheckoutStepUI();
}

function handlePaymentSubmit(e) {
  e.preventDefault();
  const orderNum = `VB-2026-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;
  if (state.appliedCoupon && VALID_COUPONS[state.appliedCoupon]) {
    discount = (subtotal * VALID_COUPONS[state.appliedCoupon].discountPercent) / 100;
  }
  const shippingCost = state.shippingMethod === 'overnight' ? 19 : 0;
  const grandTotal = subtotal - discount + shippingCost;

  // Render receipt
  const receiptCard = document.getElementById('orderReceiptCard');
  if (receiptCard) {
    receiptCard.innerHTML = `
      <div class="receipt-header">
        <div>
          <div>Order Tracking ID: <span class="receipt-order-no">${orderNum}</span></div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">Placed on ${orderDate}</div>
        </div>
        <div style="text-align: right;">
          <span class="badge-mini" style="background: #10b981; color: #fff;">Confirmed</span>
        </div>
      </div>

      <div style="margin-bottom: 14px; font-size: 0.8125rem;">
        <strong>Recipient:</strong> ${state.checkoutData.firstName} ${state.checkoutData.lastName}<br>
        <strong>Shipping to:</strong> ${state.checkoutData.address}, ${state.checkoutData.city}, ${state.checkoutData.state} ${state.checkoutData.zip}<br>
        <strong>Courier Method:</strong> ${state.shippingMethod === 'overnight' ? 'Rush Overnight Air' : 'Express White-Glove Courier'}
      </div>

      <div style="border-top: 1px dashed var(--border-light); padding-top: 10px; margin-top: 10px;">
        ${state.cart.map(item => `
          <div class="receipt-item-row">
            <span>${item.quantity}x ${item.title} (${item.size})</span>
            <strong>${formatPrice(item.price * item.quantity)}</strong>
          </div>
        `).join('')}
      </div>

      <div style="border-top: 1px solid var(--border-light); padding-top: 10px; margin-top: 10px;">
        <div class="receipt-item-row">
          <span>Subtotal:</span>
          <span>${formatPrice(subtotal)}</span>
        </div>
        ${discount > 0 ? `
          <div class="receipt-item-row" style="color: #10b981;">
            <span>Discount (${state.appliedCoupon}):</span>
            <span>-${formatPrice(discount)}</span>
          </div>
        ` : ''}
        <div class="receipt-item-row">
          <span>Shipping:</span>
          <span>${shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}</span>
        </div>
        <div class="receipt-item-row" style="font-size: 1.1rem; font-weight: 800; color: var(--accent-gold); padding-top: 6px;">
          <span>Grand Total Paid:</span>
          <span>${formatPrice(grandTotal)}</span>
        </div>
      </div>
    `;
  }

  // Clear cart
  state.cart = [];
  saveCart();

  state.currentCheckoutStep = 3;
  updateCheckoutStepUI();
  showToast('Order confirmed! Welcome to the Vogue Boys Family.', '✨');
}

// =============================================================================
// Size Advisor Interactive Calculator
// =============================================================================
function calculateSizeRecommendation() {
  const age = parseInt(document.getElementById('childAgeInput').value, 10);
  const build = document.getElementById('childBuildInput').value;
  const resultDisplay = document.getElementById('recSizeText');
  const detailsDisplay = document.getElementById('recDetailsText');

  let recSize = `${age}Y`;
  let height = '128 - 134 cm';
  let chest = '66 - 69 cm';
  let trouser = '78 cm';

  if (build === 'husky') {
    // Recommend sizing up for comfort
    recSize = `${age + 2}Y (Roomy Comfort Fit)`;
  } else if (build === 'slim') {
    recSize = `${age}Y (Tailored Slim)`;
  } else {
    recSize = `${age}Y (Standard Fit)`;
  }

  const measurements = {
    2: { h: '92 - 98 cm (36 - 38.5")', c: '20.5 - 21.5"', t: '50 cm' },
    4: { h: '104 - 110 cm (41 - 43.5")', c: '22 - 23"', t: '60 cm' },
    6: { h: '116 - 122 cm (45.5 - 48")', c: '23.5 - 24.5"', t: '68 cm' },
    8: { h: '128 - 134 cm (50.5 - 53")', c: '25.5 - 26.5"', t: '78 cm' },
    10: { h: '140 - 146 cm (55 - 57.5")', c: '27.5 - 28.5"', t: '86 cm' },
    12: { h: '152 - 158 cm (60 - 62")', c: '29.5 - 31"', t: '92 cm' },
    14: { h: '164 - 170 cm (64.5 - 67")', c: '32 - 33.5"', t: '98 cm' },
    16: { h: '172 - 178 cm (68 - 70")', c: '34 - 36"', t: '102 cm' }
  };

  const m = measurements[age] || measurements[8];

  if (resultDisplay) resultDisplay.textContent = recSize;
  if (detailsDisplay) {
    detailsDisplay.textContent = `Recommended Height: ${m.h} | Chest: ${m.c} | Trouser Length: ${m.t}. Built with 1.5" expansion seams.`;
  }

  showToast(`Calculated: Best fit is ${recSize}`, '📏');
}

// =============================================================================
// Live Search
// =============================================================================
function handleLiveSearch(query) {
  const dropdown = document.getElementById('searchResultsDropdown');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (!dropdown) return;

  state.searchQuery = query;

  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? 'block' : 'none';
  }

  if (query.trim().length === 0) {
    dropdown.classList.remove('active');
    dropdown.innerHTML = '';
    renderProducts();
    return;
  }

  const results = PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.color.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    dropdown.innerHTML = `
      <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
        No garments found for "${query}"
      </div>
    `;
  } else {
    dropdown.innerHTML = results.slice(0, 5).map(p => `
      <div class="search-res-item" onclick="window.app.openQuickView('${p.id}')">
        <img src="${p.image}" alt="${p.title}" class="search-res-thumb">
        <div class="search-res-details">
          <div class="search-res-title">${p.title}</div>
          <div class="search-res-price">${formatPrice(p.price)} • Ages ${p.ageBracket}</div>
        </div>
      </div>
    `).join('');
  }

  dropdown.classList.add('active');
  renderProducts();
}

// =============================================================================
// Filters, Sorting & Theme Setup
// =============================================================================
function setCategoryFilter(category) {
  state.activeFilterCategory = category;

  // Sync category pills
  document.querySelectorAll('.cat-pill').forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Sync nav links
  document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
    if (link.getAttribute('data-filter') === category) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Sync story circles
  document.querySelectorAll('.story-circle-card').forEach(card => {
    if (card.getAttribute('data-category') === category) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  renderProducts();
}

function resetAllFilters() {
  state.activeFilterCategory = 'all';
  state.activeFilterAge = 'all';
  state.activeFilterColor = 'all';
  state.activeSort = 'featured';
  state.searchQuery = '';

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  document.getElementById('searchResultsDropdown')?.classList.remove('active');

  const ageSelect = document.getElementById('ageGroupFilter');
  if (ageSelect) ageSelect.value = 'all';

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  document.querySelectorAll('.color-swatch-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-color') === 'all');
  });

  setCategoryFilter('all');
  showToast('Filters reset to default', '🔄');
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vb_theme', theme);
}

// =============================================================================
// Initialization & Event Listeners
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme(state.theme);

  // Render initial components
  renderStoryCategories();
  renderProducts();
  updateHeaderBadges();

  // Theme toggle
  document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  });

  // Currency select
  document.getElementById('currencySelect')?.addEventListener('change', (e) => {
    state.currency = e.target.value;
    renderProducts();
    renderCartUI();
    updateHeaderBadges();
    showToast(`Currency changed to ${state.currency}`, '💱');
  });

  // Category Pills
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      setCategoryFilter(cat);
    });
  });

  // Nav menu category links
  document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-filter');
      setCategoryFilter(cat);
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Hero CTAs
  document.getElementById('heroFestiveBtn')?.addEventListener('click', () => {
    setCategoryFilter('festive');
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('editorialFestiveCta')?.addEventListener('click', () => {
    setCategoryFilter('festive');
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Age group filter dropdown
  document.getElementById('ageGroupFilter')?.addEventListener('change', (e) => {
    state.activeFilterAge = e.target.value;
    renderProducts();
  });

  // Color Swatch buttons
  document.querySelectorAll('.color-swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilterColor = btn.getAttribute('data-color');
      renderProducts();
    });
  });

  // Sort dropdown
  document.getElementById('sortSelect')?.addEventListener('change', (e) => {
    state.activeSort = e.target.value;
    renderProducts();
  });

  // Reset Filters
  document.getElementById('resetFiltersBtn')?.addEventListener('click', resetAllFilters);
  document.getElementById('clearAllFiltersBtn')?.addEventListener('click', resetAllFilters);

  // Search input & keyboard shortcut '/'
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  searchInput?.addEventListener('input', (e) => {
    handleLiveSearch(e.target.value);
  });

  clearSearchBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    handleLiveSearch('');
  });

  // Close search dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box-wrapper')) {
      document.getElementById('searchResultsDropdown')?.classList.remove('active');
    }
  });

  // Cart Header Button & Drawer
  document.getElementById('cartHeaderBtn')?.addEventListener('click', openCartDrawer);
  document.getElementById('closeCartDrawerBtn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cartDrawerBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'cartDrawerBackdrop') closeCartDrawer();
  });
  document.getElementById('continueShoppingBtn')?.addEventListener('click', closeCartDrawer);

  // Wishlist Header Button & Drawer
  document.getElementById('wishlistHeaderBtn')?.addEventListener('click', openWishlistDrawer);
  document.getElementById('closeWishlistDrawerBtn')?.addEventListener('click', closeWishlistDrawer);
  document.getElementById('wishlistDrawerBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'wishlistDrawerBackdrop') closeWishlistDrawer();
  });

  // Coupon application
  document.getElementById('applyCouponBtn')?.addEventListener('click', () => {
    const input = document.getElementById('couponCodeInput');
    const status = document.getElementById('couponStatus');
    const code = (input?.value || '').trim().toUpperCase();

    if (VALID_COUPONS[code]) {
      state.appliedCoupon = code;
      if (status) {
        status.className = 'coupon-status success';
        status.textContent = `✓ ${VALID_COUPONS[code].description} applied!`;
      }
      renderCartUI();
      showToast(`Coupon ${code} applied: ${VALID_COUPONS[code].discountPercent}% off!`, '🏷️');
    } else {
      if (status) {
        status.className = 'coupon-status error';
        status.textContent = `Invalid promo code. Try "GENT20" for 20% off.`;
      }
    }
  });

  // Checkout modal interactions
  document.getElementById('cartCheckoutBtn')?.addEventListener('click', openCheckoutModal);
  document.getElementById('closeCheckoutBtn')?.addEventListener('click', closeCheckoutModal);
  document.getElementById('checkoutModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'checkoutModal') closeCheckoutModal();
  });
  document.getElementById('backToCartFromCheckout')?.addEventListener('click', () => {
    closeCheckoutModal();
    openCartDrawer();
  });
  document.getElementById('backToStep1Btn')?.addEventListener('click', () => {
    state.currentCheckoutStep = 1;
    updateCheckoutStepUI();
  });

  // Forms in checkout
  document.getElementById('shippingForm')?.addEventListener('submit', handleShippingSubmit);
  document.getElementById('paymentForm')?.addEventListener('submit', handlePaymentSubmit);
  document.getElementById('continueAfterOrderBtn')?.addEventListener('click', closeCheckoutModal);
  document.getElementById('printReceiptBtn')?.addEventListener('click', () => window.print());

  // Interactive Credit Card inputs
  const cardNumInput = document.getElementById('cardNumber');
  const cardNameInput = document.getElementById('cardName');
  const cardExpInput = document.getElementById('cardExpiry');

  cardNumInput?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    let formatted = val.replace(/(.{4})/g, '$1 ').trim();
    e.target.value = formatted;
    document.getElementById('cardNumDisplay').textContent = formatted || '•••• •••• •••• 4242';
  });

  cardNameInput?.addEventListener('input', (e) => {
    document.getElementById('cardHolderDisplay').textContent = e.target.value.toUpperCase() || 'MARCUS REYNOLDS';
  });

  cardExpInput?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2);
    e.target.value = val;
    document.getElementById('cardExpDisplay').textContent = val || '08/28';
  });

  // Size calculator
  document.getElementById('calcRecommendBtn')?.addEventListener('click', calculateSizeRecommendation);

  // Close Quick View
  document.getElementById('closeQuickViewBtn')?.addEventListener('click', closeQuickView);
  document.getElementById('quickViewModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'quickViewModal') closeQuickView();
  });

  // Mobile nav toggle
  document.getElementById('mobileNavToggle')?.addEventListener('click', () => {
    document.getElementById('mainNavigation')?.classList.toggle('open');
  });

  // Newsletter submission
  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail')?.value;
    showToast(`VIP code GENT20 activated for ${email}!`, '🎁');
    e.target.reset();
  });

  // Announcement bar coupon pill click
  document.querySelector('.code-pill')?.addEventListener('click', () => {
    navigator.clipboard?.writeText('GENT20');
    showToast('Promo code "GENT20" copied to clipboard!', '📋');
  });
});

// Expose functions globally for inline HTML event handlers
window.app = {
  updateCartQty: (idx, delta) => updateCartQuantity(idx, delta),
  removeCart: (idx) => removeCartItem(idx),
  openQuickView: (pid) => openQuickView(pid),
  moveWishlistToBag: (pid) => {
    addToCart(pid, '8Y', 1);
    const wIdx = state.wishlist.indexOf(pid);
    if (wIdx > -1) {
      state.wishlist.splice(wIdx, 1);
      saveWishlist();
    }
    openWishlistDrawer();
  },
  removeWishlist: (pid) => toggleWishlist(pid)
};
