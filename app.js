/**
 * SAJAD HYGAM - Minimalist Luxury E-Commerce Engine
 * Founder & Formulator: Sajad Hygam
 * Direct Phone & WhatsApp: +91 7889964048
 * Instagram: @sajad_hygam
 */

// ==========================================================================
// 1. Exactly 3 Core Products (as requested)
// ==========================================================================
const PRODUCTS = [
  {
    id: 'sh-elixir-100',
    title: 'Sajad Hygam Hair Regrowth Elixir',
    subtitle: 'Intensive Root-Fortifying Botanical Oil Infusion with 2% Rosemary & Active Phytosterols',
    price: 1199,
    originalPrice: 1799,
    image: 'assets/images/sajad_elixir.jpg',
    gallery: [
      'assets/images/sajad_elixir.jpg',
      'assets/images/ingredients.jpg',
      'assets/images/before_after.jpg',
      'assets/images/sajad_bundle.jpg'
    ],
    badge: 'Signature Elixir • Save 33%',
    savePercent: 33,
    rating: 4.9,
    reviewsCount: 1420,
    size: '100ml Dropper Bottle • 100% Kashmir Actives',
    benefits: [
      'Awakens dormant follicles within 30-60 days naturally',
      'Halts rapid hair-fall and comb shedding within 14 days',
      '100% cold-pressed herbal actives, 0% minoxidil or synthetic solvents',
      'Lightweight, non-sticky deep scalp absorption with zero residue'
    ],
    ingredients: 'Standardized Rosemary Leaf Extract (2% Verbenone), Cold-Pressed Black Kalonji (Nigella Sativa), Bhringraj (Eclipta Alba), Brahmi (Bacopa Monnieri), Pure Golden Jojoba, Cold-Pressed Castor Oil, Pumpkin Seed Oil, Biotin Tripeptide-1.',
    howToUse: 'Apply 1-2 full droppers directly to thinning areas of the scalp at night. Gently massage for 3-5 minutes with fingertips or wooden scalp massager. Leave on overnight or for at least 2 hours before washing. Use 3-4 times a week.'
  },
  {
    id: 'sh-bundle-mastery',
    title: 'Complete 3-Step Root-to-Tip Regrowth System',
    subtitle: 'The Full 90-Day Restoration Protocol: Elixir Oil + Follicle Spray + Restorative Shampoo + Free Applicator',
    price: 2499,
    originalPrice: 3999,
    image: 'assets/images/sajad_bundle.jpg',
    gallery: [
      'assets/images/sajad_bundle.jpg',
      'assets/images/sajad_elixir.jpg',
      'assets/images/sajad_spray.jpg',
      'assets/images/ingredients.jpg',
      'assets/images/before_after.jpg'
    ],
    badge: "Sajad's Choice • Save 38%",
    savePercent: 38,
    rating: 5.0,
    reviewsCount: 2890,
    size: 'Full 90-Day Regrowth Kit • 3 Full-Size Formulas + Free Scalp Massager',
    benefits: [
      'Comprehensive 360° cellular hair restoration across 90 days',
      'Natural DHT block during day, intensive root feed at night',
      'Cleanses pore sebum without stripping scalp protective moisture barrier',
      'Includes handcrafted neem wood scalp massager for enhanced circulation'
    ],
    ingredients: 'Complete synergistic triad: Rosemary, Redensyl, Saw Palmetto, Kalonji, Fenugreek, Biotin peptides, and Peppermint hydrosol.',
    howToUse: 'Step 1: Wash with Restorative Cleanser 2-3x/week. Step 2: Spray Follicle Scalp Tonic daily morning for micro-circulation. Step 3: Massage Hair Regrowth Elixir at night.'
  },
  {
    id: 'sh-spray-150',
    title: 'Follicle Revitalizing Scalp Tonic Spray',
    subtitle: 'Non-Greasy Daytime Leave-in Spray with Targeted Micro-Circulation Stimulants',
    price: 899,
    originalPrice: 1299,
    image: 'assets/images/sajad_spray.jpg',
    gallery: [
      'assets/images/sajad_spray.jpg',
      'assets/images/ingredients.jpg',
      'assets/images/before_after.jpg',
      'assets/images/sajad_bundle.jpg'
    ],
    badge: 'Lightweight Daily • Save 30%',
    savePercent: 30,
    rating: 4.8,
    reviewsCount: 680,
    size: '150ml Nozzle Spray • Daily Leave-In',
    benefits: [
      'Immediate soothing & cooling scalp sensation upon application',
      'Zero greasiness, completely invisible on hair for daytime wear',
      'Inhibits 5-alpha reductase (DHT enzyme) naturally without shedding',
      'Fortifies fragile thinning strands and clears scalp flaking'
    ],
    ingredients: 'Peppermint Hydrosol, Green Tea EGCG Active, Saw Palmetto Extract, Niacinamide, Caffeine, Pure Aloe Vera Leaf Juice.',
    howToUse: 'Spray 5-6 pumps directly onto clean scalp in the morning. Gently tap with fingertips. Do not rinse out.'
  }
];

// ==========================================================================
// 2. Reviews for Left-to-Right Animated Marquee
// ==========================================================================
const REVIEWS = [
  {
    name: 'Tariq Mir',
    location: 'Srinagar, J&K',
    tag: 'Crown Thinning',
    stars: 5,
    title: 'Severe crown thinning filled in 75 days!',
    body: 'I was skeptical because I had already wasted money on chemical minoxidil with terrible itching. Sajad Hygam guided me on how to massage the Elixir daily. In 3 weeks my excessive shedding stopped, and by month 2, visible dark baby hairs filled my crown.'
  },
  {
    name: 'Farhan Akhtar',
    location: 'Delhi NCR',
    tag: 'Receding Hairline',
    stars: 5,
    title: 'Receding hairline is genuinely reversing',
    body: 'The combination of the Herbal Elixir with the Follicle Tonic is unmatched. No irritation, completely natural herbal aroma. My temples were pulling back since 2022, and this is the only botanical treatment that worked.'
  },
  {
    name: 'Priya Sharma',
    location: 'Chandigarh',
    tag: 'Postpartum Hairfall',
    stars: 5,
    title: 'Hairfall reduced by 85% in first 2 weeks',
    body: 'After pregnancy my hair was shedding in clumps. Ordered after speaking with Sajad on WhatsApp (+91 7889964048). The oil strengthens roots immediately and my hair feels twice as thick.'
  },
  {
    name: 'Dr. Zubair Lone',
    location: 'Anantnag',
    tag: 'Clinical Review',
    stars: 5,
    title: 'Cleanest botanical extraction I have tested',
    body: 'As a healthcare practitioner, I appreciate the chemical-free formulation. The cold-pressed extraction preserves the natural phytosterols that inhibit DHT without dependency.'
  },
  {
    name: 'Rohit Verma',
    location: 'Mumbai',
    tag: 'Crown Density',
    stars: 5,
    title: 'Fast delivery & authentic Kashmiri quality',
    body: 'Ordered directly on WhatsApp. The amber glass bottle and herbal scent feel ultra premium. Noticeable baby hairs along the hairline within 40 days.'
  },
  {
    name: 'Amina Bano',
    location: 'Jammu',
    tag: 'Flaky Scalp & Shedding',
    stars: 5,
    title: 'Eliminated stubborn flaking while boosting volume',
    body: 'The Follicle Tonic is like magic in the morning—so cooling, non-sticky, and lightweight. Hair fall stopped completely.'
  }
];

// ==========================================================================
// 3. Cart State Management
// ==========================================================================
let cart = [];
let appliedCoupon = null;
const FREE_SHIPPING_THRESHOLD = 999;
const SHIPPING_COST = 99;

try {
  const savedCart = localStorage.getItem('sajad_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  } else {
    cart = [{ productId: 'sh-bundle-mastery', quantity: 1 }];
  }
} catch (e) {
  cart = [{ productId: 'sh-bundle-mastery', quantity: 1 }];
}

function saveCart() {
  try {
    localStorage.setItem('sajad_cart', JSON.stringify(cart));
  } catch (e) {}
}

function getCartProduct(productId) {
  return PRODUCTS.find(p => p.id === productId);
}

function addToCart(productId, quantity = 1) {
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveCart();
  updateCartUI();
  openCartDrawer();
  
  const product = getCartProduct(productId);
  showToast(`Added ${product ? product.title : 'Item'} to cart! ✨`);
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.productId === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.productId !== productId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart');
}

function getCartCalculations() {
  let subtotal = 0;
  let totalItems = 0;
  
  cart.forEach(item => {
    const p = getCartProduct(item.productId);
    if (p) {
      subtotal += p.price * item.quantity;
      totalItems += item.quantity;
    }
  });

  let discount = 0;
  if (appliedCoupon === 'GROWTH15') {
    discount = Math.round(subtotal * 0.15);
  } else if (appliedCoupon === 'SAJAD10') {
    discount = Math.round(subtotal * 0.10);
  }

  const eligibleForFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
  const shipping = eligibleForFreeShipping ? 0 : SHIPPING_COST;
  const total = Math.max(0, subtotal - discount + shipping);

  return {
    subtotal,
    totalItems,
    discount,
    shipping,
    eligibleForFreeShipping,
    total
  };
}

// ==========================================================================
// 4. UI Renders
// ==========================================================================
function updateCartUI() {
  const { subtotal, totalItems, discount, shipping, eligibleForFreeShipping, total } = getCartCalculations();
  
  const badge = document.getElementById('cart-count-badge');
  if (badge) {
    badge.textContent = totalItems;
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }

  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🌿</div>
        <h4>Your Cart is Empty</h4>
        <p style="font-size: 0.85rem; color: #6e7d74; margin-top: 6px;">Add Sajad Hygam's botanical treatments to begin your restoration.</p>
        <button class="btn-primary" style="margin-top: 18px; padding: 10px 24px; font-size: 0.85rem;" onclick="closeCartDrawer(); scrollToShop();">
          View Formulations
        </button>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => {
      const p = getCartProduct(item.productId);
      if (!p) return '';
      return `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${p.image}" alt="${p.title}" />
          </div>
          <div class="cart-item-details">
            <div class="cart-item-name">${p.title}</div>
            <div class="cart-item-price">₹${p.price.toLocaleString('en-IN')} <span style="font-size:0.75rem; color:#7d8c83; font-weight:normal;">(${p.size})</span></div>
            <div class="cart-quantity-controls">
              <button class="qty-btn" onclick="updateQuantity('${p.id}', -1)">-</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity('${p.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${p.id}')" title="Remove Item">✕</button>
        </div>
      `;
    }).join('');
  }

  const shippingText = document.getElementById('shipping-progress-text');
  const shippingFill = document.getElementById('shipping-progress-fill');
  if (shippingText && shippingFill) {
    if (eligibleForFreeShipping) {
      shippingText.innerHTML = `🎉 You qualify for <strong>FREE Express Shipping</strong>!`;
      shippingFill.style.width = '100%';
    } else {
      const needed = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      shippingText.innerHTML = `Add <strong>₹${needed}</strong> more for <strong>FREE Express Delivery</strong>!`;
      shippingFill.style.width = `${pct}%`;
    }
  }

  const subtotalEl = document.getElementById('cart-subtotal');
  const discountRow = document.getElementById('cart-discount-row');
  const discountEl = document.getElementById('cart-discount-val');
  const shippingEl = document.getElementById('cart-shipping-val');
  const totalEl = document.getElementById('cart-total-val');

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-₹${discount.toLocaleString('en-IN')}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
  if (totalEl) totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;

  const checkoutSubtotal = document.getElementById('checkout-subtotal');
  const checkoutDiscount = document.getElementById('checkout-discount');
  const checkoutDiscountRow = document.getElementById('checkout-discount-row');
  const checkoutShipping = document.getElementById('checkout-shipping');
  const checkoutTotal = document.getElementById('checkout-total');

  if (checkoutSubtotal) checkoutSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (checkoutDiscountRow && checkoutDiscount) {
    if (discount > 0) {
      checkoutDiscountRow.style.display = 'flex';
      checkoutDiscount.textContent = `-₹${discount.toLocaleString('en-IN')}`;
    } else {
      checkoutDiscountRow.style.display = 'none';
    }
  }
  if (checkoutShipping) checkoutShipping.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
  if (checkoutTotal) checkoutTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
}

// ==========================================================================
// 5. Drawer & Modals Control
// ==========================================================================
function openMobileMenu() {
  const overlay = document.getElementById('mobile-nav-overlay');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (overlay) overlay.classList.add('open');
  if (drawer) drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const overlay = document.getElementById('mobile-nav-overlay');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (overlay) overlay.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = '';
}

function openCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Add products first.');
    return;
  }
  closeCartDrawer();
  document.getElementById('checkout-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Redirect to dedicated Product Page (replacing old popup)
function openQuickView(productId) {
  window.location.href = `product.html?id=${productId}`;
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeSuccessModal() {
  const modal = document.getElementById('success-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// 6. Coupon Engine
// ==========================================================================
function applyCoupon() {
  const input = document.getElementById('coupon-input');
  const code = input ? input.value.trim().toUpperCase() : '';

  if (!code) {
    showToast('Please enter a coupon code.');
    return;
  }

  if (code === 'GROWTH15') {
    appliedCoupon = 'GROWTH15';
    showToast('Code GROWTH15 applied! 15% discount activated.');
  } else if (code === 'SAJAD10') {
    appliedCoupon = 'SAJAD10';
    showToast('Code SAJAD10 applied! 10% discount activated.');
  } else {
    showToast('Invalid coupon code. Try GROWTH15 or SAJAD10.');
    return;
  }

  updateCartUI();
}

// ==========================================================================
// 7. Order Placement & Direct WhatsApp Integration
// ==========================================================================
function selectPaymentMethod(element, method) {
  document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('active'));
  element.classList.add('active');
  document.getElementById('selected-payment-method').value = method;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  const city = document.getElementById('checkout-city').value.trim();
  const pincode = document.getElementById('checkout-pincode').value.trim();
  const paymentMethod = document.getElementById('selected-payment-method').value || 'UPI / Online';

  if (!name || !phone || !address || !city || !pincode) {
    alert('Please complete all delivery fields.');
    return;
  }

  const { subtotal, discount, shipping, total } = getCartCalculations();
  const orderId = 'SH-' + Math.floor(100000 + Math.random() * 900000);

  let itemsListText = '';
  cart.forEach((item, index) => {
    const p = getCartProduct(item.productId);
    if (p) {
      itemsListText += `${index + 1}. ${p.title} (Qty: ${item.quantity}) - ₹${(p.price * item.quantity).toLocaleString('en-IN')}%0A`;
    }
  });

  const waMessage = 
    `*NEW ORDER - SAJAD HYGAM WEBSITE*%0A` +
    `----------------------------------------%0A` +
    `*Order ID:* ${orderId}%0A` +
    `*Customer Name:* ${encodeURIComponent(name)}%0A` +
    `*Phone:* ${encodeURIComponent(phone)}%0A` +
    `*Delivery Address:* ${encodeURIComponent(address)}, ${encodeURIComponent(city)} - ${encodeURIComponent(pincode)}%0A` +
    `----------------------------------------%0A` +
    `*Items Ordered:*%0A${itemsListText}` +
    `----------------------------------------%0A` +
    `*Subtotal:* ₹${subtotal}%0A` +
    (discount > 0 ? `*Discount:* -₹${discount}%0A` : '') +
    `*Shipping:* ${shipping === 0 ? 'FREE' : '₹' + shipping}%0A` +
    `*Grand Total:* ₹${total}%0A` +
    `*Payment Preference:* ${encodeURIComponent(paymentMethod)}%0A` +
    `----------------------------------------%0A` +
    `Please confirm my order and share tracking information!`;

  const waUrl = `https://wa.me/917889964048?text=${waMessage}`;

  closeCheckoutModal();

  const successModal = document.getElementById('success-modal');
  const orderIdEl = document.getElementById('success-order-id');
  const waConfirmBtn = document.getElementById('success-wa-btn');

  if (orderIdEl) orderIdEl.textContent = `Order ID: #${orderId}`;
  if (waConfirmBtn) waConfirmBtn.href = waUrl;

  successModal.classList.add('open');
  document.body.style.overflow = 'hidden';

  cart = [];
  saveCart();
  updateCartUI();

  setTimeout(() => {
    window.open(waUrl, '_blank');
  }, 1200);
}

function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color:#b88636;">✨</span>
    <span style="font-size:0.8rem; color:#111814; font-weight:600;">${message}</span>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function scrollToShop() {
  const el = document.getElementById('products');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================================================
// 8. Render Animated Reviews Marquee
// ==========================================================================
function renderReviewsMarquee() {
  const track = document.getElementById('reviews-marquee-track');
  if (!track) return;

  // Duplicate list twice to create seamless infinite loop
  const list = [...REVIEWS, ...REVIEWS];
  track.innerHTML = list.map(r => `
    <div class="review-card">
      <div class="review-card-top">
        <div class="review-stars">★★★★★</div>
        <div class="verified-tag">✓ Verified User</div>
      </div>
      <div class="review-title">"${r.title}"</div>
      <p class="review-body">${r.body}</p>
      <div class="review-author-footer">
        <div class="author-avatar">${r.name.charAt(0)}</div>
        <div>
          <div class="author-name">${r.name}</div>
          <div class="author-meta">${r.location} • <span class="condition-badge">${r.tag}</span></div>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 9. Mobile Touch-Swipe Carousel Controls
// ==========================================================================
function scrollToSlide(carouselId, index) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  const cards = carousel.querySelectorAll('.problem-card, .product-card');
  const targetCard = cards[index];
  if (targetCard) {
    const offsetLeft = targetCard.offsetLeft - carousel.offsetLeft - 20;
    carousel.scrollTo({ left: Math.max(0, offsetLeft), behavior: 'smooth' });
  }
}

function initCarouselScrollSync(carouselId, dotsContainerId) {
  const carousel = document.getElementById(carouselId);
  const dotsContainer = document.getElementById(dotsContainerId);
  if (!carousel || !dotsContainer) return;

  const dots = dotsContainer.querySelectorAll('.carousel-dot');
  if (!dots.length) return;

  let ticking = false;
  carousel.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollLeft = carousel.scrollLeft;
        const cards = carousel.querySelectorAll('.problem-card, .product-card');
        if (!cards.length) return;
        const cardWidth = cards[0].offsetWidth + 14;
        const activeIndex = Math.min(
          cards.length - 1,
          Math.max(0, Math.round(scrollLeft / cardWidth))
        );

        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === activeIndex);
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ==========================================================================
// 10. Dedicated Product Detail Page (PDP) Dynamic Engine
// ==========================================================================
let currentPdpProduct = null;
let pdpQuantity = 1;

function initProductPage() {
  const pdpContainer = document.getElementById('pdp-container');
  if (!pdpContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'sh-bundle-mastery';
  
  const product = getCartProduct(productId) || PRODUCTS[1];
  currentPdpProduct = product;
  pdpQuantity = 1;

  // 1. Meta & Titles
  document.title = `${product.title} | Sajad Hygam Botanical Scalp Science`;
  const metaDesc = document.getElementById('pdp-meta-desc');
  if (metaDesc) metaDesc.content = product.subtitle;

  const crumb = document.getElementById('pdp-breadcrumb-title');
  if (crumb) crumb.textContent = product.title;

  const titleDisplay = document.getElementById('pdp-title-display');
  if (titleDisplay) titleDisplay.textContent = product.title;

  const subDisplay = document.getElementById('pdp-sub-display');
  if (subDisplay) subDisplay.textContent = product.subtitle;

  const badgeDisplay = document.getElementById('pdp-badge-display');
  if (badgeDisplay) badgeDisplay.textContent = product.badge;

  // 2. Pricing
  const priceDisplay = document.getElementById('pdp-price-display');
  if (priceDisplay) priceDisplay.textContent = `₹${product.price.toLocaleString('en-IN')}`;

  const origDisplay = document.getElementById('pdp-orig-display');
  if (origDisplay) origDisplay.textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;

  const saveBadge = document.getElementById('pdp-save-percent-display');
  if (saveBadge) {
    const diff = product.originalPrice - product.price;
    saveBadge.textContent = `Save ${product.savePercent}% (₹${diff.toLocaleString('en-IN')} OFF)`;
  }

  const sizeDisplay = document.getElementById('pdp-size-display');
  if (sizeDisplay) sizeDisplay.textContent = `📦 ${product.size}`;

  // 3. Ratings & Reviews
  const ratingDisplay = document.getElementById('pdp-rating-display');
  if (ratingDisplay) ratingDisplay.textContent = `${product.rating} / 5.0`;

  const reviewCountDisplay = document.getElementById('pdp-reviews-count-display');
  if (reviewCountDisplay) reviewCountDisplay.textContent = `${product.reviewsCount.toLocaleString('en-IN')} Verified Patient Reviews`;

  // 4. Benefits Checklist
  const benefitsList = document.getElementById('pdp-benefits-list');
  if (benefitsList && product.benefits) {
    benefitsList.innerHTML = product.benefits.map(b => `<li>${b}</li>`).join('');
  }

  // 5. Ingredients & Instructions Accordions
  const ingredientsDisplay = document.getElementById('pdp-ingredients-display');
  if (ingredientsDisplay) ingredientsDisplay.textContent = product.ingredients;

  const howToUseDisplay = document.getElementById('pdp-how-to-use-display');
  if (howToUseDisplay) howToUseDisplay.textContent = product.howToUse;

  // 6. Action Button Text
  updatePdpButtonText();

  // 7. WhatsApp Consultation Link
  const waLink = document.getElementById('pdp-wa-link');
  if (waLink) {
    waLink.href = `https://wa.me/917889964048?text=${encodeURIComponent(`Hello Sajad, I want to consult about ${product.title}`)}`;
  }

  // 8. Sticky Mobile Bar
  const stickyTitle = document.getElementById('pdp-sticky-title');
  if (stickyTitle) stickyTitle.textContent = product.title;

  const stickyPrice = document.getElementById('pdp-sticky-price');
  if (stickyPrice) stickyPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;

  // 9. Main Image & Gallery Thumbnails
  const mainImg = document.getElementById('pdp-main-img');
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.title;
  }

  const thumbsContainer = document.getElementById('pdp-thumbs-container');
  if (thumbsContainer && product.gallery) {
    thumbsContainer.innerHTML = product.gallery.map((imgSrc, idx) => `
      <div class="pdp-thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchPdpImage('${imgSrc}', this)">
        <img src="${imgSrc}" alt="${product.title} view ${idx + 1}" />
      </div>
    `).join('');
  }

  // 10. Companion Cross-Sell Grid (other 2 products)
  const relatedGrid = document.getElementById('pdp-related-grid');
  if (relatedGrid) {
    const companionProducts = PRODUCTS.filter(p => p.id !== product.id);
    relatedGrid.innerHTML = companionProducts.map(p => `
      <div class="product-card" id="card-${p.id}">
        <div class="product-badge">${p.badge}</div>
        <a href="product.html?id=${p.id}" class="product-img-box" aria-label="View ${p.title}">
          <img src="${p.image}" alt="${p.title}" />
          <span class="quick-view-btn">View Formula &amp; Science →</span>
        </a>
        <div class="product-card-body">
          <div class="product-rating">★★★★★ <span>(${p.reviewsCount} Reviews)</span></div>
          <h3 class="product-title">
            <a href="product.html?id=${p.id}" style="color: inherit; text-decoration: none;">${p.title}</a>
          </h3>
          <p class="product-desc">${p.subtitle}</p>
          <div class="product-meta">${p.size}</div>
          <div class="product-bottom-row">
            <div class="product-price">
              <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
              <span class="price-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>
            </div>
            <button class="btn-add-product" onclick="addToCart('${p.id}')">
              + Add to Cart
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function switchPdpImage(newSrc, thumbEl) {
  const mainImg = document.getElementById('pdp-main-img');
  if (mainImg) {
    mainImg.src = newSrc;
  }
  const thumbs = document.querySelectorAll('.pdp-thumb-item');
  thumbs.forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function increasePdpQty() {
  pdpQuantity++;
  const input = document.getElementById('pdp-qty-input');
  if (input) input.value = pdpQuantity;
  updatePdpButtonText();
}

function decreasePdpQty() {
  if (pdpQuantity > 1) {
    pdpQuantity--;
    const input = document.getElementById('pdp-qty-input');
    if (input) input.value = pdpQuantity;
    updatePdpButtonText();
  }
}

function updatePdpButtonText() {
  if (!currentPdpProduct) return;
  const addText = document.getElementById('pdp-add-text');
  if (addText) {
    const total = currentPdpProduct.price * pdpQuantity;
    addText.textContent = `Add To Cart • ₹${total.toLocaleString('en-IN')}`;
  }
}

function handlePdpAddToCart() {
  if (!currentPdpProduct) return;
  addToCart(currentPdpProduct.id, pdpQuantity);
}

function handlePdpBuyNow() {
  if (!currentPdpProduct) return;
  addToCart(currentPdpProduct.id, pdpQuantity);
  closeCartDrawer();
  openCheckoutModal();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  renderReviewsMarquee();
  initProductPage();
  initCarouselScrollSync('problem-grid-4', 'problem-dots');
  initCarouselScrollSync('products-grid-3', 'product-dots');

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
});

