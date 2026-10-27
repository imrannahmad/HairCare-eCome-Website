'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PRODUCTS = [
  {
    id: 'sh-elixir-100',
    title: 'Hair Regrowth Elixir',
    fullTitle: 'Sajad Hygam Hair Regrowth Elixir',
    subtitle: 'Intensive root-fortifying oil infusion with 2% Rosemary active extract, Black Kalonji (Nigella Sativa), and cold-pressed Castor.',
    price: 1199,
    originalPrice: 1799,
    image: '/images/sajad_elixir.jpg',
    badge: 'Signature Elixir • Save 33%',
    featured: false,
    rating: '★★★★★',
    reviewsCount: '1,420 Reviews',
    size: '100ml Dropper Bottle • 100% Herbal'
  },
  {
    id: 'sh-bundle-mastery',
    title: 'Complete 3-Step Regrowth System',
    fullTitle: 'Complete 3-Step Root-to-Tip Regrowth System',
    subtitle: 'The full 90-day protocol: Regrowth Elixir + Daytime Follicle Tonic Spray + Restorative Shampoo + Free Scalp Applicator.',
    price: 2499,
    originalPrice: 3999,
    image: '/images/sajad_bundle.jpg',
    badge: "★ Sajad's Choice • Save 38%",
    featured: true,
    rating: '★★★★★',
    reviewsCount: '2,890 Reviews',
    size: 'Full 90-Day Kit • Free Express Shipping'
  },
  {
    id: 'sh-spray-150',
    title: 'Follicle Scalp Tonic Spray',
    fullTitle: 'Follicle Revitalizing Scalp Tonic Spray',
    subtitle: 'Non-greasy, fast-absorbing daily daytime leave-in spray with Peppermint Hydrosol, Green Tea EGCG, Saw Palmetto, and Niacinamide.',
    price: 899,
    originalPrice: 1299,
    image: '/images/sajad_spray.jpg',
    badge: 'Lightweight Daily • Save 30%',
    featured: false,
    rating: '★★★★★',
    reviewsCount: '680 Reviews',
    size: '150ml Nozzle Spray • Zero Greasiness'
  }
];

const HERO_SLIDES = [
  {
    id: 'sh-bundle-mastery',
    badge: "★ BESTSELLER • SAVE 38%",
    tag: "COMPLETE 90-DAY ROOT RESTORATION",
    title: "Complete 3-Step Root-to-Tip Regrowth System",
    description: "The full clinical protocol: Handcrafted Regrowth Elixir + Daytime Follicle Tonic + Restorative Herbal Shampoo + Free Scalp Applicator.",
    price: 2499,
    originalPrice: 3999,
    saveText: "Save ₹1,500 (38% OFF)",
    image: "/images/sajad_bundle.jpg",
    rating: "4.9/5",
    reviewsCount: "2,890+ Reviews",
    dealNotice: "🎁 Free Express Shipping + Free Scalp Applicator Included",
    productLink: "/product?id=sh-bundle-mastery"
  },
  {
    id: 'sh-elixir-100',
    badge: "SIGNATURE ELIXIR • SAVE 33%",
    tag: "INTENSIVE NIGHTTIME ROOT THERAPY",
    title: "Botanical Hair Regrowth Elixir (100ml)",
    description: "Cold-infused Kashmiri herbal elixir with 2% Rosemary active extract, Black Kalonji (Nigella Sativa), and Castor oil to awaken dormant roots.",
    price: 1199,
    originalPrice: 1799,
    saveText: "Save ₹600 (33% OFF)",
    image: "/images/sajad_elixir.jpg",
    rating: "4.9/5",
    reviewsCount: "1,420+ Reviews",
    dealNotice: "🌿 100% Herbal Active • Zero Synthetic Minoxidil",
    productLink: "/product?id=sh-elixir-100"
  },
  {
    id: 'sh-spray-150',
    badge: "DAYTIME PROTECTION • SAVE 30%",
    tag: "LIGHTWEIGHT NON-GREASY TONIC",
    title: "Follicle Revitalizing Scalp Tonic Spray",
    description: "Fast-absorbing leave-in formula with Peppermint Hydrosol, Green Tea EGCG, Saw Palmetto, and Niacinamide for daytime follicle stimulation.",
    price: 899,
    originalPrice: 1299,
    saveText: "Save ₹400 (30% OFF)",
    image: "/images/sajad_spray.jpg",
    rating: "4.8/5",
    reviewsCount: "680+ Reviews",
    dealNotice: "💧 Zero Greasiness • Style Hair Normally After Spraying",
    productLink: "/product?id=sh-spray-150"
  },
  {
    id: 'clinical-results',
    badge: "CLINICALLY PROVEN • 14 DAYS",
    tag: "18,400+ DOCUMENTED TRANSFORMATIONS",
    title: "Documented 14-Day Shedding Halt & Root Regrowth",
    description: "Clinical patient proof: Natural DHT inhibition reactivates dormant hair bulbs, halts severe hair fall, and triggers dense baby hair regrowth without dependency.",
    price: 2499,
    originalPrice: 3999,
    saveText: "Full Protocol ₹2,499",
    image: "/images/before_after.jpg",
    rating: "4.95/5",
    reviewsCount: "18,400+ Restored Patients",
    dealNotice: "🔬 Visible baby hairs at temples & crown in 60-90 days",
    productLink: "#reviews"
  }
];

const REVIEWS = [
  {
    name: 'Tariq Mir',
    location: 'Srinagar, J&K',
    tag: 'Crown Thinning',
    title: 'Severe crown thinning filled in 75 days!',
    body: 'I was skeptical because I had already wasted money on chemical minoxidil with terrible itching. Sajad Hygam guided me on how to massage the Elixir daily. In 3 weeks my excessive shedding stopped, and by month 2, visible dark baby hairs filled my crown.'
  },
  {
    name: 'Farhan Akhtar',
    location: 'Delhi NCR',
    tag: 'Receding Hairline',
    title: 'Receding hairline is genuinely reversing',
    body: 'The combination of the Herbal Elixir with the Follicle Tonic is unmatched. No irritation, completely natural herbal aroma. My temples were pulling back since 2022, and this is the only botanical treatment that worked.'
  },
  {
    name: 'Priya Sharma',
    location: 'Chandigarh',
    tag: 'Postpartum Hairfall',
    title: 'Hairfall reduced by 85% in first 2 weeks',
    body: 'After pregnancy my hair was shedding in clumps. Ordered after speaking with Sajad on WhatsApp (+91 7889964048). The oil strengthens roots immediately and my hair feels twice as thick.'
  },
  {
    name: 'Dr. Zubair Lone',
    location: 'Anantnag',
    tag: 'Clinical Review',
    title: 'Cleanest botanical extraction I have tested',
    body: 'As a healthcare practitioner, I appreciate the chemical-free formulation. The cold-pressed extraction preserves the natural phytosterols that inhibit DHT without dependency.'
  },
  {
    name: 'Rohit Verma',
    location: 'Mumbai',
    tag: 'Crown Density',
    title: 'Fast delivery & authentic Kashmiri quality',
    body: 'Ordered directly on WhatsApp. The amber glass bottle and herbal scent feel ultra premium. Noticeable baby hairs along the hairline within 40 days.'
  },
  {
    name: 'Amina Bano',
    location: 'Jammu',
    tag: 'Flaky Scalp & Shedding',
    title: 'Eliminated stubborn flaking while boosting volume',
    body: 'The Follicle Tonic is like magic in the morning—so cooling, non-sticky, and lightweight. Hair fall stopped completely.'
  }
];

export default function HomePage() {
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
  const [problemActiveDot, setProblemActiveDot] = useState(0);
  const [productActiveDot, setProductActiveDot] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'UPI / Online'
  });

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

  // Save cart changes
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

  const addToCart = (productId, quantity = 1) => {
    const existing = cart.find((i) => i.productId === productId);
    let updated;
    if (existing) {
      updated = cart.map((i) =>
        i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i
      );
    } else {
      updated = [...cart, { productId, quantity }];
    }
    saveCart(updated);
    setIsCartOpen(true);
    const p = PRODUCTS.find((prod) => prod.id === productId);
    showToast(`Added ${p ? p.title : 'Item'} to cart! ✨`);
  };

  const updateQuantity = (productId, delta) => {
    let updated = cart
      .map((item) => {
        if (item.productId === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean);
    saveCart(updated);
  };

  const removeFromCart = (productId) => {
    const updated = cart.filter((i) => i.productId !== productId);
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

  // Carousel touch sync
  const handleCarouselScroll = (e, setDot, cardCount) => {
    const el = e.currentTarget;
    const cardWidth = el.children[0]?.offsetWidth || 300;
    const idx = Math.min(cardCount - 1, Math.max(0, Math.round(el.scrollLeft / (cardWidth + 14))));
    setDot(idx);
  };

  const scrollToSlideReact = (elementId, index) => {
    const el = document.getElementById(elementId);
    if (!el) return;
    const cards = el.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  // Checkout Handler
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

  // Double list for infinite marquee
  const marqueeReviews = [...REVIEWS, ...REVIEWS];

  return (
    <>
      {/* 1. Top Announcement Bar */}
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

      {/* 2. Symmetrical Minimalist Header */}
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
              <li><a href="#problem" className="nav-link">The Problem</a></li>
              <li><a href="#products" className="nav-link">Formulations</a></li>
              <li><a href="#reviews" className="nav-link">Patient Reviews</a></li>
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

      {/* 3. Mobile Slide Drawer */}
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
          {/* Doctor Direct Chat Banner */}
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

          {/* Products List in Drawer */}
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

          {/* Education & Clinical Proof */}
          <div className="drawer-nav-section">
            <div className="drawer-section-label">CLINICAL SCIENCE &amp; RESULTS</div>
            
            <a href="#problem" className="drawer-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="drawer-link-left">
                <span className="drawer-link-icon">🔬</span>
                <div>
                  <div className="drawer-link-title">The Root Cause (DHT Science)</div>
                  <div className="drawer-link-desc">Why minoxidil fails &amp; how herbs reverse shedding</div>
                </div>
              </div>
              <span className="drawer-chevron">›</span>
            </a>

            <a href="#reviews" className="drawer-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="drawer-link-left">
                <span className="drawer-link-icon">⭐</span>
                <div>
                  <div className="drawer-link-title">Patient Clinical Reviews</div>
                  <div className="drawer-link-desc">14,800+ Verified scalp transformations</div>
                </div>
              </div>
              <span className="drawer-chevron">›</span>
            </a>
          </div>

          {/* Active Promo Card */}
          <div className="drawer-promo-card">
            <div className="promo-card-badge">LIMITED PERIOD OFFER</div>
            <div className="promo-card-title">Flat 15% OFF On Your Order</div>
            <div className="promo-card-sub">Use coupon code <strong className="promo-code-pill">GROWTH15</strong> at checkout</div>
          </div>

          {/* Social & Contact */}
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

      {/* Main Content */}
      <main id="main-content">
        {/* Section 1: Premium Botanical Hero Section */}
        <section className="botanical-hero-section" id="hero">
          <div className="container botanical-hero-container">
            <div className="botanical-hero-grid">
              
              {/* Left Column: Brand Messaging, Benefits & CTAs */}
              <div className="botanical-hero-content">
                <div className="botanical-eyebrow">
                  <span className="eyebrow-leaf">🌿</span>
                  <span className="eyebrow-text">BOTANICAL SCALP SCIENCE</span>
                </div>

                <h1 className="botanical-hero-headline">
                  Healthier Scalp.<br />
                  Stronger, Fuller Hair.
                </h1>

                {/* Mobile-Only Product Visual (Flows naturally on small screens) */}
                <div className="botanical-hero-visual show-mobile-hero">
                  <div className="botanical-image-frame">
                    <img 
                      src="/images/sajad_spray.jpg" 
                      alt="Sajad Hygam Follicle Scalp Tonic Spray with natural botanicals"
                      className="botanical-product-image"
                      loading="eager"
                    />
                  </div>
                </div>

                <p className="botanical-hero-description">
                  A lightweight, non-greasy scalp tonic powered by carefully selected botanicals to nourish your scalp and support healthier-looking hair.
                </p>

                {/* Four Compact Benefits */}
                <div className="botanical-benefits-grid">
                  <div className="benefit-pill">
                    <span className="benefit-dot">✦</span>
                    <span className="benefit-text">Lightweight &amp; Non-Greasy</span>
                  </div>
                  <div className="benefit-pill">
                    <span className="benefit-dot">✦</span>
                    <span className="benefit-text">Botanical Ingredients</span>
                  </div>
                  <div className="benefit-pill">
                    <span className="benefit-dot">✦</span>
                    <span className="benefit-text">Daily Scalp Care</span>
                  </div>
                  <div className="benefit-pill">
                    <span className="benefit-dot">✦</span>
                    <span className="benefit-text">Easy Application</span>
                  </div>
                </div>

                {/* Primary & Secondary Action CTAs */}
                <div className="botanical-cta-group">
                  <button
                    type="button"
                    className="btn-botanical-primary"
                    onClick={() => addToCart('sh-spray-150', 1)}
                  >
                    <span>Shop Scalp Tonic</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>

                  <a href="#products" className="btn-botanical-secondary">
                    Explore Our Formula
                  </a>
                </div>

                {/* Verified Customer Rating & Reviews */}
                <div className="botanical-social-proof">
                  <div className="proof-stars" aria-label="5 out of 5 stars">
                    {'★★★★★'}
                  </div>
                  <div className="proof-details">
                    <span className="proof-score">4.9 / 5.0</span>
                    <span className="proof-divider">•</span>
                    <span className="proof-count">680 Verified Reviews</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Prominent Botanical Product Visual (Desktop & Tablet) */}
              <div className="botanical-hero-visual hide-mobile-hero">
                <div className="botanical-image-frame">
                  <img 
                    src="/images/sajad_spray.jpg" 
                    alt="Sajad Hygam Follicle Scalp Tonic Spray with natural botanicals"
                    className="botanical-product-image"
                    loading="eager"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: The Root Cause */}
        <section className="problem-section" id="problem">
          <div className="container">
            <div className="section-heading-box">
              <span className="section-tag">THE ROOT CAUSE</span>
              <h2 className="section-title">Why Hair Loss Happens &amp; Why Most Shampoos Fail</h2>
              <p className="section-subtitle">
                Hair loss is not just a surface cosmetic issue. When hair falls, the follicle beneath the scalp is suffocating. Commercial treatments often use harsh chemical minoxidil that creates dependency, or surface oils that never penetrate the dermis.
              </p>
            </div>

            <div
              className="problem-grid-4"
              id="problem-grid-4"
              onScroll={(e) => handleCarouselScroll(e, setProblemActiveDot, 4)}
            >
              <div className="problem-card">
                <span className="problem-step">01</span>
                <h3 className="problem-card-title">DHT Sebum Calcification</h3>
                <p className="problem-card-desc">
                  The 5-alpha reductase enzyme turns testosterone into DHT. This hardens like wax around the hair bulb, choking off capillary blood supply.
                </p>
              </div>

              <div className="problem-card">
                <span className="problem-step">02</span>
                <h3 className="problem-card-title">Follicle Miniaturization</h3>
                <p className="problem-card-desc">
                  Starved of blood, nutrients, and oxygen, thick hair strands shrink progressively into invisible fuzz, eventually leading to bald patches.
                </p>
              </div>

              <div className="problem-card">
                <span className="problem-step">03</span>
                <h3 className="problem-card-title">The Chemical Rebound Trap</h3>
                <p className="problem-card-desc">
                  Pharmaceutical minoxidil forces blood vessels open artificially. When you stop using it, all the new hair sheds violently within 30 days.
                </p>
              </div>

              <div className="problem-card highlighted">
                <span className="problem-step">04</span>
                <h3 className="problem-card-title">Sajad&apos;s Botanical Solution</h3>
                <p className="problem-card-desc">
                  Standardized Rosemary carnosic acid + Thymoquinone naturally dissolves DHT sebum and awakens dormant roots without chemical addiction.
                </p>
              </div>
            </div>

            {/* Mobile Touch-Swipe Carousel Controls for Root Cause */}
            <div className="mobile-carousel-controls">
              <div className="mobile-carousel-dots" id="problem-dots">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot ${problemActiveDot === idx ? 'active' : ''}`}
                    onClick={() => scrollToSlideReact('problem-grid-4', idx)}
                    aria-label={`Go to cause ${idx + 1}`}
                  ></button>
                ))}
              </div>
              <span className="mobile-swipe-guide">👈 Swipe with thumb to explore root causes 👉</span>
            </div>

            <div className="problem-quote-banner">
              <div className="quote-text">
                <strong>&quot;Stop treating dead hair on the outside. Start revitalizing the living root on the inside.&quot;</strong>
                <p>Every bottle of Sajad Hygam is formulated with cold-pressed botanical extractions tested for cellular follicle absorption.</p>
              </div>
              <a
                href="https://wa.me/917889964048?text=Hello%20Sajad,%20I%20want%20to%20send%20my%20hair%20photos%20for%20root%20cause%20assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid-dark"
              >
                Send Scalp Photos to Sajad ➔
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: The 3 Core Products */}
        <section className="products-section" id="products">
          <div className="container">
            <div className="section-heading-box">
              <span className="section-tag">BOTANICAL FORMULATIONS</span>
              <h2 className="section-title">Targeted Scalp Solutions</h2>
              <p className="section-subtitle">
                Pure, uncompromised formulations handcrafted in small batches by Sajad Hygam.
              </p>
            </div>

            <div
              className="products-grid-3"
              id="products-grid-3"
              onScroll={(e) => handleCarouselScroll(e, setProductActiveDot, PRODUCTS.length)}
            >
              {PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className={`product-card ${p.featured ? 'featured' : ''}`}
                  id={`card-${p.id}`}
                >
                  <div
                    className="product-badge"
                    style={p.featured ? { background: '#111827', color: '#fff' } : {}}
                  >
                    {p.badge}
                  </div>
                  <Link
                    href={`/product?id=${p.id}`}
                    className="product-img-box"
                    aria-label={`View ${p.title} Page`}
                  >
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

            {/* Mobile Touch-Swipe Carousel Controls for Products */}
            <div className="mobile-carousel-controls">
              <div className="mobile-carousel-dots" id="product-dots">
                {PRODUCTS.map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot ${productActiveDot === idx ? 'active' : ''}`}
                    onClick={() => scrollToSlideReact('products-grid-3', idx)}
                    aria-label={`Go to product ${idx + 1}`}
                  ></button>
                ))}
              </div>
              <span className="mobile-swipe-guide">👈 Swipe with thumb to view formulations 👉</span>
            </div>
          </div>
        </section>

        {/* Section 4: Verified Patient Transformations Marquee */}
        <section className="reviews-section" id="reviews">
          <div className="container">
            <div className="section-heading-box">
              <span className="section-tag">VERIFIED TRANSFORMATIONS</span>
              <h2 className="section-title">What Real Patients Say</h2>
              <p className="section-subtitle">
                Authentic experiences from men and women across India who restored their scalp with Sajad Hygam.
              </p>
            </div>
          </div>

          <div className="marquee-wrapper">
            <div className="marquee-track" id="reviews-marquee-track">
              {marqueeReviews.map((r, idx) => (
                <div key={idx} className="review-card">
                  <div className="review-card-top">
                    <div className="review-stars">★★★★★</div>
                    <div className="verified-tag">✓ Verified User</div>
                  </div>
                  <div className="review-title">&quot;{r.title}&quot;</div>
                  <p className="review-body">{r.body}</p>
                  <div className="review-author-footer">
                    <div className="author-avatar">{r.name.charAt(0)}</div>
                    <div>
                      <div className="author-name">{r.name}</div>
                      <div className="author-meta">
                        {r.location} • <span className="condition-badge">{r.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Section 5: Minimal Footer */}
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
                <li><a href="#problem">The Problem &amp; Root Cause</a></li>
                <li><a href="#products">Botanical Formulations</a></li>
                <li><a href="#reviews">Verified Client Reviews</a></li>
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

      {/* Slide-out Cart Drawer */}
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
    </>
  );
}
