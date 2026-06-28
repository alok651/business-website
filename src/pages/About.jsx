const values = [
  { icon: '🤝', title: 'Trust & Transparency', desc: 'We believe in honest dealings with no hidden charges or surprises.' },
  { icon: '⚡', title: 'Quick Service', desc: 'We help you find the right property within the shortest time possible.' },
  { icon: '💰', title: 'Affordable Prices', desc: 'Properties for every budget range — from students to families.' },
  { icon: '🛡️', title: 'Verified Listings', desc: 'Every property is personally verified by our team before listing.' },
  { icon: '📞', title: '24/7 Support', desc: 'Our team is always available to assist you with any queries.' },
  { icon: '📋', title: 'Legal Assistance', desc: 'Complete help with rental agreements and documentation.' },
]

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="section-label">🏠 About Us</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>Your Trusted <span style={{ color: 'var(--primary-light)' }}>Rental Partner</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>With over 10 years of experience, Om Sai To-Let Service has been helping thousands find their perfect rental homes.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Who We Are</h2>
              <p>Om Sai To-Let Service is a premier property service based in Patna that has been connecting property owners with tenants and buyers for over a decade. We understand that finding the right place to live, work, or invest is one of life's most important decisions.</p>
              <p>Our dedicated team of property experts works tirelessly to match your requirements with the perfect property. Whether you're looking for a cozy room, a spacious flat, a commercial shop, or interested in buying and selling houses and lands — we've got you covered.</p>
              <p>We actively cover prime areas in Patna including Khagaul Road, Saguna More, Raza Bazar, and Boring Road. What sets us apart is our commitment to transparency, quality, and customer satisfaction.</p>
              <div style={{ marginTop: 24 }}>
                <a href="/contact" className="btn btn-primary">Get In Touch →</a>
              </div>
            </div>
            <div className="about-visual">
              <div style={{ marginBottom: '20px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <img src="/images/property_animation.gif" alt="Customer buying property animation" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div className="about-stat-card"><h3>5000+</h3><p>Happy Tenants</p></div>
                <div className="about-stat-card"><h3>1200+</h3><p>Properties Listed</p></div>
                <div className="about-stat-card"><h3>10+</h3><p>Years of Service</p></div>
                <div className="about-stat-card"><h3>98%</h3><p>Satisfaction Rate</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section" style={{ background: 'rgba(0,0,0,0.1)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">👤 Leadership</div>
            <h2 className="section-title">Meet Our Founder</h2>
            <p className="section-subtitle">The vision and leadership driving OM SAI to-let services</p>
          </div>
          <div className="about-founder-grid">
            <div className="founder-img-container">
              <img src="/images/founder.png" alt="Ajay Kumar - Founder" className="founder-img" />
            </div>
            <div className="founder-info-content">
              <div className="founder-badge">Founder & Managing Director</div>
              <h2>Ajay Kumar</h2>
              <p className="founder-exp">🎓 10+ Years of Excellence in Patna Real Estate</p>
              <p>OM SAI To-Let Services was founded by Ajay Kumar with a single mission: to simplify house hunting and property deals in Patna. Over the past 10 years, Ajay has built a reputation for providing excellent, transparent, and hassle-free services for tenants, buyers, and property owners.</p>
              <p>Under his management, OM SAI actively assists clients with renting, buying, and selling flats, houses, commercial shops, office spaces, and lands across Patna's most popular areas, including Khagaul Road, Saguna More, Raza Bazar, Gola Road, and Boring Road.</p>
              <div className="founder-quote">
                <p>"Our success is built entirely on the trust of our clients. We do not just find properties; we build long-term relationships through honesty, verified listings, and excellent support."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(0,0,0,0.15)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">💎 Our Values</div>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">The values that drive us to deliver the best service every single day</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="glass-card value-card" key={i}>
                <div className="icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
