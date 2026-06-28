import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const featuredProperties = [
  { id: 1, title: '2 BHK Spacious Flat', location: 'Ranjan Path, Danapur (Near Gyan Niketan)', price: '₹12,000', type: 'Flat', beds: 2, baths: 2, area: '950 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/flat_interior.png' },
  { id: 2, title: 'Furnished 1 BHK Flat', location: 'Mitra Compound, Boring Road (Near Alankar Place)', price: '₹11,500', type: 'Flat', beds: 1, baths: 1, area: '600 sqft', badge: 'Premium', badgeClass: 'badge-premium', img: '/images/flat_interior.png' },
  { id: 3, title: 'Commercial Shop Space', location: 'Bailey Road, Raza Bazar (Near IGIMS)', price: '₹25,000', type: 'Shop', beds: 0, baths: 1, area: '650 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/commercial_shop.png' },
]

const carouselSlides = [
  {
    id: 0,
    title: 'Find Your Dream Home',
    desc: 'Looking to purchase a new property? We offer complete solutions for buying, selling, and renting properties in Patna.',
    img: '/images/buying_house.gif'
  },
  {
    id: 1,
    title: 'Welcome to OM SAI To-Let Services',
    desc: 'Your trusted rental partner in Patna. Rents starting at: Khagaul (₹5k+), Saguna More (₹6k+), Raza Bazar (₹5k+), Boring Rd (₹8k+).',
    img: '/images/patna_city.jpg'
  },
  {
    id: 2,
    title: 'Premium Flat & Apartment Rentals',
    desc: 'Spacious 1, 2 & 3 BHK flats. Danapur (₹6k-₹18k), Boring Road (₹8k-₹45k), and Raza Bazar (₹6k-₹25k).',
    img: '/images/flat_interior.png'
  },
  {
    id: 3,
    title: 'Luxury Bedrooms & Furnished Flats',
    desc: 'Fully furnished AC flats ready to move in. Saguna More & Boring Road premium apartments starting at ₹12,000/month.',
    img: '/images/luxury_bedroom.jpg'
  },
  {
    id: 4,
    title: 'Modern Kitchens & Family Living',
    desc: 'Flats with modular kitchens in Khagaul Road (₹7k+) and Raza Bazar (₹8k+) for comfortable family living.',
    img: '/images/modern_kitchen.jpg'
  },
  {
    id: 5,
    title: 'Prime Commercial Shops & Offices',
    desc: 'Retail shops on Bailey Road (₹15k+) and Boring Road Chauraha (₹25k+). Boost your business at prime locations.',
    img: '/images/commercial_shop.png'
  },
  {
    id: 6,
    title: 'Professional Office & Co-working Spaces',
    desc: 'Modern co-working and private offices in Saguna More (₹15k+) and Boring Road (₹30k+) with AC & parking.',
    img: '/images/office_interior.jpg'
  },
  {
    id: 7,
    title: 'Cozy PG Rooms & Student Housing',
    desc: 'Fully managed PG accommodations and shared rooms in Danapur & Boring Road starting from just ₹4,500/month.',
    img: '/images/pg_room.png'
  }
]

const services = [
  { icon: '🏠', title: 'Room Rentals', desc: 'Single and shared rooms with modern amenities for students and professionals.' },
  { icon: '🏢', title: 'Flat Rentals', desc: '1BHK, 2BHK, and 3BHK furnished and unfurnished flats for families.' },
  { icon: '🏪', title: 'Shop Spaces', desc: 'Prime commercial spaces in busy market areas for your business.' },
  { icon: '🏛️', title: 'Office Spaces', desc: 'Modern office spaces with all utilities for startups and companies.' },
  { icon: '🛏️', title: 'PG Accommodation', desc: 'Fully managed paying guest accommodation with meals included.' },
  { icon: '📋', title: 'Rental Agreement', desc: 'Complete assistance with legal documentation and agreements.' },
]

const testimonials = [
  { name: 'Rahul Sharma', role: 'Software Engineer', text: 'Found my perfect 2BHK flat within just 2 days! The team was incredibly helpful and professional. Highly recommended!', initials: 'RS' },
  { name: 'Priya Patel', role: 'Business Owner', text: 'Got an amazing shop space at a great location. Om Sai made the entire process smooth and hassle-free.', initials: 'PP' },
  { name: 'Amit Kumar', role: 'Student', text: 'Best PG accommodation service in the city. Clean rooms, good food, and very affordable prices. Thank you Om Sai!', initials: 'AK' },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % carouselSlides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setActiveSlide(prev => (prev + 1) % carouselSlides.length)
  const prevSlide = () => setActiveSlide(prev => (prev - 1 + carouselSlides.length) % carouselSlides.length)

  return (
    <>
      {/* Hero */}
      <section className="hero" id="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge"><span className="dot" /> Trusted by 5000+ Happy Tenants</div>
            <h1>Find Your Perfect <span className="highlight">Rental Home</span> With Ease</h1>
            <p className="hero-desc">Om Sai To-Let Service helps you find the ideal rooms, flats, shops, and PG accommodations in Patna. We cover areas from Khagaul Road, Saguna More, to Raza Bazar and Boring Road.</p>
            <div className="hero-actions">
              <Link to="/properties" className="btn btn-primary">🔍 Browse Properties</Link>
              <Link to="/contact" className="btn btn-outline">📞 Get In Touch</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><h3>5000+</h3><p>Happy Tenants</p></div>
              <div className="hero-stat"><h3>1200+</h3><p>Properties</p></div>
              <div className="hero-stat"><h3>10+</h3><p>Years Experience</p></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-carousel">
              <div className="carousel-track-wrapper">
                {carouselSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`carousel-slide${index === activeSlide ? ' active' : ''}`}
                    style={{ backgroundImage: `url(${slide.img})` }}
                  >
                    <div className="carousel-overlay" />
                    <div className="carousel-content">
                      <h3>{slide.title}</h3>
                      <p>{slide.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous Slide">‹</button>
              <button className="carousel-btn next" onClick={nextSlide} aria-label="Next Slide">›</button>
              <div className="carousel-dots">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot${index === activeSlide ? ' active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Purchase Animation Section */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="about-founder-grid">
            <div className="founder-info-content">
              <div className="founder-badge">🏡 New Service</div>
              <h2>Buy Your <span className="highlight">Dream Home</span></h2>
              <div className="founder-exp">Looking to purchase a property in Patna?</div>
              <p>We are now offering complete end-to-end assistance for home buyers. From finding the perfect flat or independent house to handling legal paperwork, OM SAI To-Let Services makes buying property hassle-free.</p>
              <div className="cta-actions" style={{ justifyContent: 'flex-start', marginTop: '24px' }}>
                <Link to="/contact" className="btn btn-accent">Contact Our Agents</Link>
              </div>
            </div>
            <div className="founder-img-container" style={{ border: 'none', boxShadow: 'none', background: 'transparent' }}>
              <img src="/images/buying_house.gif" alt="Home Purchase Animation" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius)', mixBlendMode: 'screen' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">🌟 Our Services</div>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Comprehensive rental solutions for every need and budget</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="glass-card service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section" id="featured-properties" style={{ background: 'rgba(0,0,0,0.15)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">🏘️ Featured Listings</div>
            <h2 className="section-title">Popular Properties</h2>
            <p className="section-subtitle">Handpicked properties that match the highest standards</p>
          </div>
          <div className="properties-grid">
            {featuredProperties.map(p => (
              <div className="property-card" key={p.id}>
                <div className="property-img">
                  {p.img ? (
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span className="placeholder-icon">🏠</span>
                  )}
                  <span className={`property-badge ${p.badgeClass}`}>{p.badge}</span>
                </div>
                <div className="property-body">
                  <h3>{p.title}</h3>
                  <div className="property-location">📍 {p.location}</div>
                  <div className="property-features">
                    {p.beds > 0 && <span>🛏️ {p.beds} Beds</span>}
                    <span>🚿 {p.baths} Bath</span>
                    <span>📐 {p.area}</span>
                  </div>
                  <div className="property-footer">
                    <div className="property-price">{p.price}<small>/month</small></div>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '.85rem' }}>Enquire</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/properties" className="btn btn-outline">View All Properties →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" id="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">💬 Testimonials</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Real stories from real people who found their perfect rental</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="glass-card testimonial-card" key={i}>
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-info"><h4>{t.name}</h4><p>{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="cta-section">
        <div className="container">
          <div className="cta-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
              <h2>Ready to Find Your Perfect Rental or Buy a New Home?</h2>
              <p>Contact us today and let us help you find the ideal property that fits your needs and budget. Handing over the keys to your happiness!</p>
              <div className="cta-actions" style={{ justifyContent: 'flex-start' }}>
                <Link to="/contact" className="btn btn-primary">📞 Contact Us Now</Link>
                <a href="https://wa.me/918252878700" className="btn btn-accent" target="_blank" rel="noreferrer">💬 WhatsApp Us</a>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/images/buying_house.gif" 
                alt="Customer Buying House" 
                style={{ maxWidth: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '2px solid var(--primary)' }} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
