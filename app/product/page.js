'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PRODUCTS = [
  {
    id: 'sh-elixir-100',
    title: 'Hair Regrowth Elixir',
    fullTitle: 'Sajad Hygam Hair Regrowth Elixir',
    subtitle: 'Intensive Root-Fortifying Botanical Oil Infusion with 2% Rosemary & Active Phytosterols',
    price: 1199,
    originalPrice: 1799,
    image: '/images/sajad_elixir.jpg',
    gallery: [
      '/images/sajad_elixir.jpg',
      '/images/ingredients.jpg',
      '/images/before_after.jpg',
      '/images/sajad_bundle.jpg'
    ],
    badge: 'Signature Elixir • Save 33%',
    featured: false,
    savePercent: 33,
    rating: '★★★★★',
    ratingNum: 4.9,
    reviewsCount: '1,420 Reviews',
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
    title: 'Complete 3-Step Regrowth System',
    fullTitle: 'Complete 3-Step Root-to-Tip Regrowth System',
    subtitle: 'The Full 90-Day Restoration Protocol: Elixir Oil + Follicle Spray + Restorative Shampoo + Free Applicator',
    price: 2499,
    originalPrice: 3999,
    image: '/images/sajad_bundle.jpg',
    gallery: [
      '/images/sajad_bundle.jpg',
      '/images/sajad_elixir.jpg',
      '/images/sajad_spray.jpg',
      '/images/ingredients.jpg',
      '/images/before_after.jpg'
    ],
    badge: "★ Sajad's Choice • Save 38%",
    featured: true,
    savePercent: 38,
    rating: '★★★★★',
    ratingNum: 5.0,
    reviewsCount: '2,890 Reviews',
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
    title: 'Follicle Scalp Tonic Spray',
    fullTitle: 'Follicle Revitalizing Scalp Tonic Spray',
    subtitle: 'Non-Greasy Daytime Leave-in Spray with Targeted Micro-Circulation Stimulants',
    price: 899,
    originalPrice: 1299,
    image: '/images/sajad_spray.jpg',
    gallery: [
      '/images/sajad_spray.jpg',
      '/images/ingredients.jpg',
      '/images/before_after.jpg',
      '/images/sajad_bundle.jpg'
    ],
    badge: 'Lightweight Daily • Save 30%',
    featured: false,
    savePercent: 30,
    rating: '★★★★★',
    ratingNum: 4.8,
    reviewsCount: '680 Reviews',
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

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id') || 'sh-bundle-mastery';
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[1];

  const [activeImg, setActiveImg] = useState(product.image);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [orderId, setOrderId] = useState('');
  const [waOrderUrl, setWaOrderUrl] = useState('');

  // Checkout form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'UPI / Online'
  });

  // Update active image and reset quantity when product changes
  useEffect(() => {
    setActiveImg(product.image);
    setQty(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sajad_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      } else {
        setCart([{ productId: 'sh-bundle-mastery', quantity: 1 }]);
      }
    } catch (e) {
      setCart([{ productId: 'sh-bundle-mastery', quantity: 1 }]);
    }
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    try {
      localStorage.setItem('sajad_cart', JSON.stringify(newCart));
    } catch (e) {}
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const addToCart = (pId, quantity = 1) => {
    const existing = cart.find((i) => i.productId === pId);
    let updated;
    if (existing) {
      updated = cart.map((i) =>
        i.productId === pId ? { ...i, quantity: i.quantity + quantity } : i
      );
    } else {
      updated = [...cart, { productId: pId, quantity }];
    }
    saveCart(updated);
    setIsCartOpen(true);
    const p = PRODUCTS.find((prod) => prod.id === pId);
    showToast(`Added ${p ? p.title : 'Item'} to cart! ✨`);
  };

  const updateQuantity = (pId, delta) => {
    let updated = cart
      .map((item) => {
        if (item.productId === pId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean);
    saveCart(updated);
  };

  const removeFromCart = (pId) => {
    const updated = cart.filter((i) => i.productId !== pId);
    saveCart(updated);
    showToast('Item removed from cart');
  };

  // Cart Calculations
  const subtotal = cart.reduce((sum, item) => {
    const p = PRODUCTS.find((prod) => prod.id === item.productId);
    return sum + (p ? p.price * item.quantity : 0);
  }, 0);

  let discount = 0;
  if (appliedCoupon === 'GROWTH15') {
    discount = Math.round(subtotal * 0.15);
  } else if (appliedCoupon === 'SAJAD10') {
    discount = Math.round(subtotal * 0.1);
  }

  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const grandTotal = Math.max(0, subtotal - discount + shipping);
  const totalCartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === 'GROWTH15') {
      setAppliedCoupon('GROWTH15');
      showToast('Code GROWTH15 applied! 15% discount activated.');
    } else if (code === 'SAJAD10') {
      setAppliedCoupon('SAJAD10');
      showToast('Code SAJAD10 applied! 10% discount activated.');
    } else {
      showToast('Invalid coupon code. Try GROWTH15 or SAJAD10.');
    }
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      alert('Please fill out all address details.');
      return;
    }

    const genOrderId = 'SH-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(genOrderId);

    let itemsList = '';
    cart.forEach((item, index) => {
      const p = PRODUCTS.find((prod) => prod.id === item.productId);
      if (p) {
        itemsList += `${index + 1}. ${p.title} (Qty: ${item.quantity}) - ₹${(p.price * item.quantity).toLocaleString('en-IN')}%0A`;
      }
    });

    const waMsg =
      `*NEW ORDER - SAJAD HYGAM WEBSITE*%0A` +
      `----------------------------------------%0A` +
      `*Order ID:* ${genOrderId}%0A` +
      `*Customer Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Delivery Address:* ${encodeURIComponent(formData.address)}, ${encodeURIComponent(formData.city)} - ${encodeURIComponent(formData.pincode)}%0A` +
      `----------------------------------------%0A` +
      `*Items Ordered:*%0A${itemsList}` +
      `----------------------------------------%0A` +
      `*Subtotal:* ₹${subtotal}%0A` +
      (discount > 0 ? `*Discount:* -₹${discount}%0A` : '') +
      `*Shipping:* ${shipping === 0 ? 'FREE' : '₹' + shipping}%0A` +
      `*Grand Total:* ₹${grandTotal}%0A` +
      `*Payment Preference:* ${encodeURIComponent(formData.paymentMethod)}%0A` +
      `----------------------------------------%0A` +
      `Please confirm my order and share courier dispatch details!`;

    const url = `https://wa.me/917889964048?text=${waMsg}`;
    setWaOrderUrl(url);

    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
    saveCart([]);

    setTimeout(() => {
      window.open(url, '_blank');
    }, 1200);
  };

  const companionProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div className="pdp-page">
      {/* 1. Top Announcement Bar (Identical to Home) */}
      <div className="announcement-bar" id="announcement">
        <div className="announcement-inner">
          <span className="announcement-desktop-text hide-mobile">
            🌿 100% Botanical Extracts • No Minoxidil Dependency • Code <strong>GROWTH15</strong> for 15% OFF
          </span>
          <span className="announcement-mobile-text show-mobile">
            🌿 15% OFF: Code <strong>GROWTH15</strong>
          </span>
          <span className="sep">•</span>
          <a
            href="https://wa.me/917889964048?text=Hello%20Sajad,%20I%20want%20to%20consult%20about%20my%20hair%20loss"
            target="_blank"
            rel="noopener noreferrer"
            className="announcement-link"
          >
            <span className="hide-mobile">Direct Consultation: </span>+91 7889964048 ➔
          </a>
        </div>
      </div>

      {/* 2. Symmetrical Minimalist Header (Identical to Home) */}
      <header className="header" id="main-header">
        <div className="container header-inner">
          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Brand Identity */}
          <Link href="/" className="brand-logo" id="brand-logo">
            <span className="brand-name">SAJAD HYGAM</span>
            <span className="brand-tagline">Botanical Scalp Science</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="nav-menu">
              <li><Link href="/#problem" className="nav-link">The Problem</Link></li>
              <li><Link href="/#products" className="nav-link">Formulations</Link></li>
              <li><Link href="/#reviews" className="nav-link">Patient Reviews</Link></li>
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <a
              href="https://www.instagram.com/sajad_hygam"
              target="_blank"
              rel="noopener noreferrer"
              className="header-action-text"
              title="Instagram: @sajad_hygam"
            >
              @sajad_hygam
            </a>

            <a
              href="https://wa.me/917889964048?text=Hello%20Sajad,%20I%20want%20to%20consult%20about%20hair%20regrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-header"
            >
              <span className="wa-dot"></span>
              <span>WhatsApp Sajad</span>
            </a>

            {/* Shopping Bag Button */}
            <button
              className="cart-toggle-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="cart-count-badge" id="cart-count-badge">
                {totalCartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Slide Drawer (Identical to Home) */}
      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <aside className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-nav-header">
          <div className="brand-logo">
            <span className="brand-name" style={{ fontSize: '1.12rem' }}>SAJAD HYGAM</span>
            <span className="brand-tagline">Botanical Scalp Science</span>
          </div>
          <button
            className="close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="mobile-nav-body">
          <div className="drawer-consult-card">
            <div className="consult-avatar-box">
              <div className="consult-avatar">SH</div>
              <span className="status-indicator online"></span>
            </div>
            <div className="consult-info">
              <div className="consult-title">Chat with Sajad Hygam</div>
              <div className="consult-sub">Botanical Formulator • Live Now</div>
            </div>
            <a
              href="https://wa.me/917889964048?text=Hello%20Sajad,%20I%20want%20to%20consult%20about%20my%20hair%20loss"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-wa-btn"
            >
              Ask Free ➔
            </a>
          </div>

          <div className="drawer-nav-section">
            <div className="drawer-section-label">BOTANICAL FORMULATIONS</div>

            <Link
              href="/product?id=sh-bundle-mastery"
              className="drawer-product-row"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="drawer-product-thumb">
                <img src="/images/sajad_bundle.jpg" alt="3-Step Regrowth System" />
              </div>
              <div className="drawer-product-info">
                <div className="drawer-prod-title">
                  3-Step Regrowth System
                  <span className="drawer-tag-pill featured">Best Value</span>
                </div>
                <div className="drawer-prod-sub">Full 90-Day Root Restoration Protocol</div>
                <div className="drawer-prod-price">₹2,499 <span className="drawer-orig-price">₹3,999</span></div>
              </div>
              <span className="drawer-chevron">›</span>
            </Link>

            <Link
              href="/product?id=sh-elixir-100"
              className="drawer-product-row"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="drawer-product-thumb">
                <img src="/images/sajad_elixir.jpg" alt="Hair Regrowth Elixir" />
              </div>
              <div className="drawer-product-info">
                <div className="drawer-prod-title">
                  Hair Regrowth Elixir
                  <span className="drawer-tag-pill">2% Rosemary</span>
                </div>
                <div className="drawer-prod-sub">Root Fortifying Oil (100ml)</div>
                <div className="drawer-prod-price">₹1,199 <span className="drawer-orig-price">₹1,799</span></div>
              </div>
              <span className="drawer-chevron">›</span>
            </Link>

            <Link
              href="/product?id=sh-spray-150"
              className="drawer-product-row"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="drawer-product-thumb">
                <img src="/images/sajad_spray.jpg" alt="Follicle Scalp Tonic" />
              </div>
              <div className="drawer-product-info">
                <div className="drawer-prod-title">
                  Follicle Scalp Tonic Spray
                  <span className="drawer-tag-pill">Save 30%</span>
                </div>
                <div className="drawer-prod-sub">Daily Non-Greasy Leave-In (150ml)</div>
                <div className="drawer-prod-price">₹899 <span className="drawer-orig-price">₹1,299</span></div>
              </div>
              <span className="drawer-chevron">›</span>
            </Link>
          </div>

          <div className="drawer-nav-section">
            <div className="drawer-section-label">CLINICAL SCIENCE &amp; RESULTS</div>
            
            <Link href="/#problem" className="drawer-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="drawer-link-left">
                <span className="drawer-link-icon">🔬</span>
                <div>
                  <div className="drawer-link-title">The Root Cause (DHT Science)</div>
                  <div className="drawer-link-desc">Why minoxidil fails &amp; how herbs reverse shedding</div>
                </div>
              </div>
              <span className="drawer-chevron">›</span>
            </Link>

            <Link href="/#reviews" className="drawer-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="drawer-link-left">
                <span className="drawer-link-icon">⭐</span>
                <div>
                  <div className="drawer-link-title">Patient Clinical Reviews</div>
                  <div className="drawer-link-desc">14,800+ Verified scalp transformations</div>
                </div>
              </div>
              <span className="drawer-chevron">›</span>
            </Link>
          </div>

          <div className="drawer-promo-card">
            <div className="promo-card-badge">LIMITED PERIOD OFFER</div>
            <div className="promo-card-title">Flat 15% OFF On Your Order</div>
            <div className="promo-card-sub">Use coupon code <strong className="promo-code-pill">GROWTH15</strong> at checkout</div>
          </div>

          <div className="drawer-footer-actions">
            <a
              href="https://www.instagram.com/sajad_hygam"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-instagram-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow @sajad_hygam on Instagram</span>
            </a>
            <div className="drawer-trust-strip">
              <div className="trust-pill-mini">🌿 100% Herbal</div>
              <div className="trust-pill-mini">🚚 Free Shipping ₹999+</div>
              <div className="trust-pill-mini">🔒 Secure Checkout</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main PDP Content */}
      <main className="pdp-main-wrapper">
        {/* Breadcrumb Navigation */}
        <div className="container pdp-breadcrumb-container">
          <nav className="pdp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="pdp-breadcrumb-sep">/</span>
            <Link href="/#products">Formulations</Link>
            <span className="pdp-breadcrumb-sep">/</span>
            <span className="pdp-breadcrumb-current">{product.title}</span>
          </nav>
        </div>

        {/* Product Showcase Section */}
        <section className="pdp-showcase-section">
          <div className="container">
            <div className="pdp-grid">
              
              {/* Left Column: Media Gallery */}
              <div className="pdp-gallery-col">
                <div className="pdp-gallery-sticky">
                  <div className="pdp-main-img-box">
                    <span className="pdp-badge-tag">{product.badge}</span>
                    <img src={activeImg} alt={product.fullTitle} />
                  </div>

                  <div className="pdp-thumbs-row">
                    {product.gallery.map((thumb, idx) => (
                      <div
                        key={idx}
                        className={`pdp-thumb-item ${activeImg === thumb ? 'active' : ''}`}
                        onClick={() => setActiveImg(thumb)}
                      >
                        <img src={thumb} alt={`Thumbnail ${idx + 1}`} />
                      </div>
                    ))}
                  </div>

                  {/* Trust Highlights */}
                  <div className="pdp-guarantee-strip">
                    <div className="guarantee-item">
                      <span className="guarantee-icon">🌿</span>
                      <div>
                        <strong>100% Kashmir Botanicals</strong>
                        <p>No synthetic chemicals or minoxidil</p>
                      </div>
                    </div>
                    <div className="guarantee-item">
                      <span className="guarantee-icon">🛡️</span>
                      <div>
                        <strong>60-Day Regrowth Assurance</strong>
                        <p>Direct dosage monitoring by Sajad Hygam</p>
                      </div>
                    </div>
                    <div className="guarantee-item">
                      <span className="guarantee-icon">🚚</span>
                      <div>
                        <strong>Free Express Delivery</strong>
                        <p>Dispatched same-day via BlueDart / Delhivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Actions */}
              <div className="pdp-info-col">
                <div className="pdp-rating-pill">
                  <span className="rating-stars">★★★★★</span>
                  <span className="rating-score">{product.ratingNum}</span>
                  <span className="rating-sep">•</span>
                  <span className="rating-count">{product.reviewsCount}</span>
                  <span className="rating-verified">✓ 100% Verified</span>
                </div>

                <h1 className="pdp-title">{product.fullTitle}</h1>
                <p className="pdp-subtitle">{product.subtitle}</p>

                {/* Price Display */}
                <div className="pdp-pricing-card">
                  <div className="pricing-main-row">
                    <div className="price-tag-wrap">
                      <span className="pdp-currency">₹</span>
                      <span className="pdp-current-price">{product.price.toLocaleString('en-IN')}</span>
                      <span className="pdp-orig-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <span className="pdp-save-pill">Save {product.savePercent}%</span>
                  </div>
                  <div className="pricing-taxes-note">Inclusive of all taxes • Free express shipping eligible</div>
                </div>

                {/* Size / Variant Tag */}
                <div className="pdp-variant-box">
                  <div className="variant-label">Active Formulation Size:</div>
                  <div className="variant-pill-active">
                    <span className="variant-dot"></span>
                    <span>{product.size}</span>
                  </div>
                </div>

                {/* Clinical Highlights Checklist */}
                <div className="pdp-highlights-box">
                  <div className="highlights-title">Trichological Clinical Highlights:</div>
                  <ul className="pdp-benefits-list">
                    {product.benefits.map((b, idx) => (
                      <li key={idx}>
                        <span className="benefit-check">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity & CTA Buttons */}
                <div className="pdp-action-panel">
                  <div className="pdp-qty-row">
                    <span className="qty-label">Quantity:</span>
                    <div className="pdp-qty-selector">
                      <button
                        className="pdp-qty-btn"
                        onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="pdp-qty-display">{qty}</span>
                      <button
                        className="pdp-qty-btn"
                        onClick={() => setQty((prev) => prev + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="pdp-buttons-stack">
                    <button
                      className="btn-pdp-add-cart"
                      onClick={() => addToCart(product.id, qty)}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      <span>Add to Bag • ₹{(product.price * qty).toLocaleString('en-IN')}</span>
                    </button>

                    <button
                      className="btn-pdp-buy-now"
                      onClick={() => {
                        addToCart(product.id, qty);
                        setIsCheckoutOpen(true);
                      }}
                    >
                      Buy Now (Instant Express Checkout) ➔
                    </button>
                  </div>

                  {/* Direct WhatsApp Consultation Button */}
                  <a
                    href={`https://wa.me/917889964048?text=Hello%20Sajad,%20I%20have%20questions%20about%20ordering%20the%20${encodeURIComponent(product.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdp-wa-consult-btn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>💬 Consult Sajad on WhatsApp (+91 7889964048)</span>
                  </a>
                </div>

                {/* Technical Accordions */}
                <div className="pdp-accordions-group">
                  <details className="pdp-accordion" open>
                    <summary>
                      <span>Clinical Mode of Action (How It Works)</span>
                      <span className="acc-chevron">›</span>
                    </summary>
                    <div className="acc-content">
                      <p style={{ lineHeight: 1.6, color: '#475569', fontSize: '0.88rem', marginBottom: '8px' }}>
                        This formula acts directly on the dermal papilla through a triple-pathway mechanism:
                      </p>
                      <ul style={{ paddingLeft: '18px', color: '#475569', fontSize: '0.85rem', lineHeight: 1.6 }}>
                        <li><strong>1. DHT Sebum Breakdown:</strong> Natural phytosterols dissolve waxy calcification choking the follicle pore.</li>
                        <li><strong>2. Micro-Vessel Reactivation:</strong> 2% Standardized Rosemary active stimulates oxygenated blood flow directly to dermal papilla.</li>
                        <li><strong>3. Follicle Anchoring:</strong> Cold-pressed black kalonji and biotin tripeptides reinforce the keratin sheath, stopping shedding in 14 days.</li>
                      </ul>
                    </div>
                  </details>

                  <details className="pdp-accordion">
                    <summary>
                      <span>Complete Botanical Actives (Full Transparency)</span>
                      <span className="acc-chevron">›</span>
                    </summary>
                    <div className="acc-content">
                      <p style={{ lineHeight: 1.6, color: '#475569', fontSize: '0.88rem' }}>
                        {product.ingredients}
                      </p>
                      <div className="acc-pure-badge">
                        ✓ 0% Parabens • 0% Mineral Oil • 0% Synthetic Fragrance • 0% Minoxidil
                      </div>
                    </div>
                  </details>

                  <details className="pdp-accordion">
                    <summary>
                      <span>How to Apply (Daily Protocol)</span>
                      <span className="acc-chevron">›</span>
                    </summary>
                    <div className="acc-content">
                      <div style={{ lineHeight: 1.6, color: '#475569', fontSize: '0.88rem' }}>
                        {product.howToUse}
                      </div>
                    </div>
                  </details>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Clinical Comparison Table */}
        <section className="pdp-comparison-section">
          <div className="container">
            <div className="section-heading-box text-center">
              <span className="section-tag">THE TRICHOLOGICAL DIFFERENCE</span>
              <h2 className="section-title">Sajad Hygam vs Conventional Chemical Treatments</h2>
            </div>

            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Core Parameter</th>
                    <th className="table-brand-col">Sajad Hygam Protocol 🌿</th>
                    <th>Conventional 5% Minoxidil ⚠️</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Primary Mechanism</strong></td>
                    <td className="table-brand-col">Addresses root inflammation &amp; cellular DHT safely</td>
                    <td>Forced blood vessel dilation with artificial chemicals</td>
                  </tr>
                  <tr>
                    <td><strong>What Happens If You Stop?</strong></td>
                    <td className="table-brand-col"><strong>Gains remain permanent</strong> as roots are naturally strengthened</td>
                    <td>Catastrophic rapid shedding of all newly regrown hair</td>
                  </tr>
                  <tr>
                    <td><strong>Scalp Health &amp; Itchiness</strong></td>
                    <td className="table-brand-col">Deeply soothes, hydrates, and eliminates stubborn dandruff</td>
                    <td>Frequent alcohol burning, dryness, and severe flaking</td>
                  </tr>
                  <tr>
                    <td><strong>Systemic Side Effects</strong></td>
                    <td className="table-brand-col"><strong>Zero side effects.</strong> 100% pure plant botanicals</td>
                    <td>Risk of low blood pressure, headaches, and facial swelling</td>
                  </tr>
                  <tr>
                    <td><strong>Formulator Accountability</strong></td>
                    <td className="table-brand-col">Direct 1-on-1 consultation on WhatsApp with Sajad Hygam</td>
                    <td>Generic mass pharma product with zero dosage support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Verified Patient Transformations */}
        <section className="pdp-reviews-section" id="pdp-reviews-section">
          <div className="container">
            <div className="section-heading-box text-center">
              <span className="section-tag">VERIFIED RESULTS</span>
              <h2 className="section-title">Real Patient Transformations</h2>
              <p className="section-subtitle">
                14,800+ Clients have reversed chronic thinning under Sajad Hygam&apos;s botanical guidance.
              </p>
            </div>

            <div className="pdp-reviews-grid">
              <div className="pdp-review-card">
                <div className="review-card-stars">★★★★★</div>
                <h3 className="review-card-heading">&quot;Severe crown thinning filled in 75 days!&quot;</h3>
                <p className="review-card-text">
                  &quot;I was skeptical because I had already wasted money on chemical minoxidil with terrible itching. Sajad Hygam guided me on how to massage the Elixir daily. In 3 weeks my excessive shedding stopped, and by month 2, visible dark baby hairs filled my crown.&quot;
                </p>
                <div className="review-card-author">
                  <strong>Tariq Mir</strong>
                  <span>Srinagar, J&amp;K • Verified Buyer (Crown Thinning)</span>
                </div>
              </div>

              <div className="pdp-review-card">
                <div className="review-card-stars">★★★★★</div>
                <h3 className="review-card-heading">&quot;Receding hairline is genuinely reversing&quot;</h3>
                <p className="review-card-text">
                  &quot;The combination of the Herbal Elixir with the Follicle Tonic is unmatched. No irritation, completely natural herbal aroma. My temples were pulling back since 2022, and this is the only botanical treatment that worked.&quot;
                </p>
                <div className="review-card-author">
                  <strong>Farhan Akhtar</strong>
                  <span>Delhi NCR • Verified Buyer (Receding Hairline)</span>
                </div>
              </div>

              <div className="pdp-review-card">
                <div className="review-card-stars">★★★★★</div>
                <h3 className="review-card-heading">&quot;Postpartum hairfall stopped completely&quot;</h3>
                <p className="review-card-text">
                  &quot;After giving birth, my hair was falling in clumps. Sajad&apos;s 3-step bundle was so gentle and pure. Within 4 weeks, the daily shedding was cut in half, and by month 3 my hair is thicker than it was before pregnancy.&quot;
                </p>
                <div className="review-card-author">
                  <strong>Priya Sharma</strong>
                  <span>Chandigarh • Verified Buyer (Postpartum Shedding)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product FAQ Section */}
        <section className="pdp-faq-section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="section-heading-box text-center">
              <span className="section-tag">COMMON QUESTIONS</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className="pdp-faq-list">
              <details className="pdp-accordion" open>
                <summary>
                  <span>How soon will I notice a visible reduction in shedding?</span>
                  <span className="acc-chevron">›</span>
                </summary>
                <div className="acc-content">
                  <p style={{ lineHeight: 1.6, color: '#475569', fontSize: '0.88rem' }}>
                    Most patients experience a significant drop in pillow and shower hair shed within 10 to 14 days of consistent application. Active follicle thickening and microscopic baby hairs begin emerging between week 6 and 9.
                  </p>
                </div>
              </details>

              <details className="pdp-accordion">
                <summary>
                  <span>Can I stop minoxidil and switch to Sajad Hygam?</span>
                  <span className="acc-chevron">›</span>
                </summary>
                <div className="acc-content">
                  <p style={{ lineHeight: 1.6, color: '#475569', fontSize: '0.88rem' }}>
                    Yes, but do not stop minoxidil cold turkey. We recommend a 3-week tapering protocol while introducing Sajad Hygam Elixir to prevent sudden chemical withdrawal shock. Message Sajad on WhatsApp for a custom tapering schedule.
                  </p>
                </div>
              </details>

              <details className="pdp-accordion">
                <summary>
                  <span>Is this formula safe for colored or chemically treated hair?</span>
                  <span className="acc-chevron">›</span>
                </summary>
                <div className="acc-content">
                  <p style={{ lineHeight: 1.6, color: '#475569', fontSize: '0.88rem' }}>
                    Absolutely. The formula contains zero synthetic solvents, sulfates, silicones, or drying alcohols. It nourishes the keratin cuticle and preserves hair color integrity.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Companion Cross-Sell Section */}
        <section className="pdp-related-section">
          <div className="container">
            <div className="section-heading-box text-center">
              <span className="section-tag">COMPLETE PROTOCOL</span>
              <h2 className="section-title">Other Botanical Formulas by Sajad Hygam</h2>
            </div>

            <div className="products-grid-3" id="pdp-related-grid">
              {companionProducts.map((p) => (
                <div
                  key={p.id}
                  className={`product-card ${p.featured ? 'featured' : ''}`}
                >
                  <div
                    className="product-badge"
                    style={p.featured ? { background: '#111827', color: '#fff' } : {}}
                  >
                    {p.badge}
                  </div>
                  <Link href={`/product?id=${p.id}`} className="product-img-box">
                    <img src={p.image} alt={p.fullTitle} />
                    <span className="quick-view-btn">View Formula &amp; Science →</span>
                  </Link>
                  <div className="product-card-body">
                    <div className="product-rating">
                      {p.rating} <span>({p.reviewsCount})</span>
                    </div>
                    <h3 className="product-title">
                      <Link href={`/product?id=${p.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {p.title}
                      </Link>
                    </h3>
                    <p className="product-desc">{p.subtitle}</p>
                    <div className="product-meta">{p.size}</div>
                    <div className="product-bottom-row">
                      <div className="product-price">
                        <span className="price-current">₹{p.price.toLocaleString('en-IN')}</span>
                        <span className="price-original">₹{p.originalPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <button
                        className="btn-add-product"
                        style={p.featured ? { background: '#111827', color: '#fff' } : {}}
                        onClick={() => addToCart(p.id)}
                      >
                        {p.featured ? '+ Add Bundle' : '+ Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sticky Bottom Buy Bar */}
      <div className="pdp-mobile-sticky-bar" id="pdp-mobile-bar">
        <div className="sticky-bar-left">
          <div className="sticky-bar-title">{product.title}</div>
          <div className="sticky-bar-price">₹{product.price.toLocaleString('en-IN')}</div>
        </div>
        <div className="sticky-bar-right">
          <button className="sticky-add-btn" onClick={() => addToCart(product.id, qty)}>
            + Add
          </button>
          <button
            className="sticky-buy-btn"
            onClick={() => {
              addToCart(product.id, qty);
              setIsCheckoutOpen(true);
            }}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Section 5: Minimal Footer (Identical to Home) */}
      <footer className="footer-black" id="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col-brand">
              <div className="brand-name">SAJAD HYGAM</div>
              <div className="brand-tagline">Botanical Scalp Science</div>
              <p>
                Handcrafted botanical hair restoration formulations by Sajad Hygam. Dedicated to reversing scalp thinning and rebuilding follicle density without harsh chemicals or dependency.
              </p>
            </div>

            <div className="footer-col-nav">
              <h4>Navigation</h4>
              <ul className="footer-nav-list">
                <li><Link href="/#problem">The Problem &amp; Root Cause</Link></li>
                <li><Link href="/#products">Botanical Formulations</Link></li>
                <li><Link href="/#reviews">Verified Client Reviews</Link></li>
              </ul>
            </div>

            <div className="footer-col-contact">
              <h4>Direct Consultation</h4>
              <div className="footer-contact-details">
                <div className="contact-line">
                  <span>📞 Phone:</span>
                  <a href="tel:+917889964048">+91 7889964048</a>
                </div>
                <div className="contact-line">
                  <span>💬 WhatsApp:</span>
                  <a href="https://wa.me/917889964048" target="_blank" rel="noopener noreferrer">
                    +91 7889964048
                  </a>
                </div>
                <div className="contact-line">
                  <span>📸 Instagram:</span>
                  <a href="https://www.instagram.com/sajad_hygam" target="_blank" rel="noopener noreferrer">
                    @sajad_hygam
                  </a>
                </div>
                <div className="contact-line">
                  <span>📍 Origin:</span>
                  <span>Hygam, Jammu &amp; Kashmir, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Sajad Hygam. All Rights Reserved. Botanical Trichology.</div>
            <div className="footer-badges">
              <span>🌿 100% Herbal</span>
              <span>•</span>
              <span>🐰 Cruelty-Free</span>
              <span>•</span>
              <span>🛡️ 60-Day Regrowth Guarantee</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Slide-out Cart Drawer (Identical to Home) */}
      <div
        className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`}
        id="cart-drawer-overlay"
        onClick={() => setIsCartOpen(false)}
      ></div>
      <aside className={`cart-drawer ${isCartOpen ? 'open' : ''}`} id="cart-drawer" aria-label="Shopping Cart">
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <span className="cart-header-icon">🛍️</span>
            <span>Your Treatment Bag</span>
            {totalCartCount > 0 && <span className="cart-header-badge">{totalCartCount}</span>}
          </div>
          <button className="close-btn" onClick={() => setIsCartOpen(false)} aria-label="Close Cart">✕</button>
        </div>

        <div className="shipping-progress-box">
          <div className="shipping-progress-text" id="shipping-progress-text">
            {subtotal >= 999
              ? '🎉 You unlocked FREE Express Shipping!'
              : `Add ₹${999 - subtotal} more for FREE Express Delivery!`}
          </div>
          <div className="shipping-progress-bar-bg">
            <div
              className="shipping-progress-bar-fill"
              id="shipping-progress-fill"
              style={{ width: `${Math.min(100, (subtotal / 999) * 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="cart-items-container" id="cart-items-container">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">🌿</div>
              <h4>Your bag is currently empty</h4>
              <p>Start your hair restoration journey today with our clinically-tested botanical remedies.</p>
              <button
                className="btn-solid-dark"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Formulas ➔
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const p = PRODUCTS.find((prod) => prod.id === item.productId);
              if (!p) return null;
              return (
                <div key={item.productId} className="cart-item">
                  <div className="cart-item-img">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <div className="cart-item-title">{p.title}</div>
                      <button
                        className="remove-item-btn"
                        onClick={() => removeFromCart(p.id)}
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="cart-item-meta">{p.size}</div>
                    <div className="cart-item-footer">
                      <div className="qty-picker">
                        <button className="qty-btn" onClick={() => updateQuantity(p.id, -1)} aria-label="Decrease quantity">−</button>
                        <span className="qty-val">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => updateQuantity(p.id, 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <div className="cart-item-price">
                        ₹{(p.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="cart-drawer-footer">
          <div className="coupon-row">
            <input
              type="text"
              id="coupon-input"
              placeholder="Coupon Code (GROWTH15)"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className="btn-apply-coupon" onClick={handleApplyCoupon}>
              Apply
            </button>
          </div>

          <div className="cart-totals">
            <div className="cart-totals-row">
              <span>Subtotal:</span>
              <span id="cart-subtotal">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            {discount > 0 && (
              <div className="cart-totals-row discount-row">
                <span>Discount ({appliedCoupon}):</span>
                <span id="cart-discount-val">−₹{discount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="cart-totals-row">
              <span>Express Shipping:</span>
              <span className="shipping-badge" id="cart-shipping-val">
                {shipping === 0 ? 'FREE' : `₹${shipping}`}
              </span>
            </div>
            <div className="cart-totals-row final">
              <span>Total:</span>
              <span className="total-amount" id="cart-total-val">
                ₹{grandTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <button
            className="btn-checkout"
            onClick={() => {
              if (cart.length === 0) {
                showToast('Please add at least 1 item to proceed.');
                return;
              }
              setIsCartOpen(false);
              setIsCheckoutOpen(true);
            }}
          >
            <span>Proceed to Checkout</span>
            <span className="btn-checkout-arrow">➔</span>
          </button>

          <a
            href="https://wa.me/917889964048?text=Hello%20Sajad,%20I%20have%20questions%20about%20ordering%20the%20hair%20treatment."
            target="_blank"
            rel="noopener noreferrer"
            className="cart-wa-order-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.055-1.579-.333-.997-.412-1.637-.996-2.146-1.505-.51-.51-1.093-1.15-1.505-2.146-.388-.945-.378-1.267-.333-1.579.05-.333.419-1.026.824-1.17.133-.048.271-.023.367.072.102.101.524 1.26.571 1.393.047.133.023.28-.052.378-.076.098-.142.164-.23.26-.089.096-.184.2-.072.396.113.196.505.832 1.082 1.346.745.663 1.373.868 1.569.966.196.098.31.082.426-.052.115-.133.493-.573.626-.77.133-.196.265-.164.444-.098.178.066 1.13.533 1.325.63.196.098.327.147.375.23.048.082.048.477-.096.882zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.05 22l5.176-1.332A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
            <span>Or Order Directly via WhatsApp</span>
          </a>

          <div className="cart-trust-badges">
            <span className="cart-trust-item">🔒 100% Secure</span>
            <span className="cart-trust-dot">•</span>
            <span className="cart-trust-item">⚡ Express Dispatch</span>
            <span className="cart-trust-dot">•</span>
            <span className="cart-trust-item">🌿 100% Herbal</span>
          </div>
        </div>
      </aside>

      {/* Checkout Modal */}
      <div className={`modal-backdrop ${isCheckoutOpen ? 'open' : ''}`} id="checkout-modal">
        <div className="checkout-modal-box">
          <div className="modal-top-bar">
            <h3>Complete Your Hair Restoration Order</h3>
            <button className="close-btn" onClick={() => setIsCheckoutOpen(false)}>✕</button>
          </div>

          <form id="checkout-form" onSubmit={handleCheckoutSubmit}>
            <div className="checkout-summary-mini">
              <div className="mini-summary-header">Order Summary ({totalCartCount} items)</div>
              <div className="mini-summary-row">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div className="mini-summary-row" style={{ color: '#166534' }}>
                  <span>Discount:</span>
                  <span>−₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="mini-summary-row">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              <div className="mini-summary-row final">
                <span>Total Due:</span>
                <span className="summary-grand-total">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="form-field">
              <label>Full Name *</label>
              <input
                type="text"
                id="cust-name"
                required
                placeholder="e.g. Aamir Khan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>WhatsApp / Mobile Number *</label>
              <input
                type="tel"
                id="cust-phone"
                required
                placeholder="e.g. 9876543210 (For order confirmation)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>Delivery Address *</label>
              <textarea
                id="cust-address"
                rows={2}
                required
                placeholder="Flat / House No, Street, Landmark"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              ></textarea>
            </div>

            <div className="form-group-row">
              <div className="form-field">
                <label>City / Town *</label>
                <input
                  type="text"
                  id="cust-city"
                  required
                  placeholder="e.g. Srinagar"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
              <div className="form-field">
                <label>PIN Code *</label>
                <input
                  type="text"
                  id="cust-pincode"
                  required
                  placeholder="e.g. 190001"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                />
              </div>
            </div>

            <div className="form-field">
              <label>Payment Method</label>
              <div className="payment-options-grid">
                {['UPI / Online', 'Cash on Delivery', 'WhatsApp Direct'].map((method) => (
                  <div
                    key={method}
                    className={`payment-option ${formData.paymentMethod === method ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, paymentMethod: method })}
                  >
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-confirm-order" id="btn-submit-order">
              Confirm Order &amp; Open WhatsApp Confirmation ➔
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <div className={`modal-backdrop ${isSuccessOpen ? 'open' : ''}`} id="success-modal">
        <div className="success-modal-box">
          <div className="success-icon-badge">✓</div>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>Order Placed Successfully!</h3>
          <p style={{ fontSize: '0.85rem', color: '#4b5563', marginBottom: '16px' }}>
            Thank you for trusting Sajad Hygam&apos;s Botanical Hair Science.
          </p>
          <div className="order-id-pill" id="success-order-id">
            Order ID: #{orderId}
          </div>
          <p style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '20px' }}>
            Tap below to open WhatsApp with Sajad to receive your express courier tracking number:
          </p>
          <a
            href={waOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid-dark"
            style={{ width: '100%', justifyContent: 'center', marginBottom: '10px' }}
          >
            💬 Open WhatsApp with Sajad
          </a>
          <button
            className="btn-outline-dark"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setIsSuccessOpen(false)}
          >
            Back to Website
          </button>
        </div>
      </div>

      {/* Floating Mobile WhatsApp Button */}
      <a
        href="https://wa.me/917889964048?text=Hello%20Sajad,%20I%20want%20to%20consult%20about%20my%20hair%20regrowth"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Consult Sajad on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-container" id="toast-container" style={{ display: 'block' }}>
          <div className="toast">
            <span style={{ color: '#b88636' }}>✨</span>
            <span style={{ fontSize: '0.8rem', color: '#111814', fontWeight: 600 }}>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={<div style={{ padding: 60, textAlign: 'center', color: '#475569' }}>Loading formula science...</div>}>
      <ProductDetailContent />
    </Suspense>
  );
}
