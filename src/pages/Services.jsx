import { Link } from 'react-router-dom'

const services = [
  { icon: '🏠', title: 'Room Rentals', desc: 'Single, double, and shared rooms for students, professionals, and working individuals. All rooms come with basic amenities.' },
  { icon: '🏢', title: 'Flat Rentals', desc: '1BHK, 2BHK, and 3BHK apartments — furnished, semi-furnished, and unfurnished options available for families and couples.' },
  { icon: '🤝', title: 'Buy & Sales', desc: 'Expert assistance in buying and selling of houses, flats, and lands in prime locations across Patna.' },
  { icon: '🏪', title: 'Shop Rentals', desc: 'Prime commercial shop spaces in high-footfall areas perfect for retail, restaurants, and small businesses.' },
  { icon: '🏛️', title: 'Office Spaces', desc: 'Professional office spaces and co-working setups with modern infrastructure for startups and established businesses.' },
  { icon: '🛏️', title: 'PG Accommodation', desc: 'Fully managed paying guest facilities for boys and girls with meals, Wi-Fi, laundry, and security included.' },
  { icon: '📋', title: 'Rental Agreements', desc: 'Complete legal documentation support including rental agreements, police verification, and stamp papers.' },
  { icon: '🔧', title: 'Property Management', desc: 'End-to-end property management services for landlords including tenant screening, rent collection, and maintenance.' },
]

export default function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="container">
          <div className="section-label">⚙️ Services</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>Our <span style={{ color: 'var(--primary-light)' }}>Services</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>Complete rental solutions tailored to your unique needs</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
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

      <section className="section" style={{ background: 'rgba(0,0,0,0.15)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">📌 How It Works</div>
            <h2 className="section-title">Simple 4-Step Process</h2>
            <p className="section-subtitle" style={{ marginBottom: '30px' }}>Getting your dream rental property is easier than you think</p>
            <div style={{ maxWidth: '500px', margin: '0 auto', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '2px solid var(--primary)' }}>
              <img src="/images/signing_contract.gif" alt="Customer signing contract" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
          <div className="process-grid">
            <div className="glass-card process-card"><h3>Tell Us Your Needs</h3><p>Share your budget, preferred location, and property type with us.</p></div>
            <div className="glass-card process-card"><h3>Browse Options</h3><p>We curate a list of verified properties matching your requirements.</p></div>
            <div className="glass-card process-card"><h3>Visit & Choose</h3><p>Schedule visits to shortlisted properties and pick your favorite.</p></div>
            <div className="glass-card process-card"><h3>Move In!</h3><p>Complete the paperwork with our help and move into your new space.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2>Need a Custom Solution?</h2>
            <p>We offer personalized rental services. Tell us what you need and we'll find it for you.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">📞 Contact Us</Link>
              <a href="https://wa.me/918252878700" className="btn btn-accent" target="_blank" rel="noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
