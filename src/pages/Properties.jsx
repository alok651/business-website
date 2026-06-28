import { useState } from 'react'
import { Link } from 'react-router-dom'

const allProperties = [
  { id: 1, title: '2 BHK Spacious Flat', location: 'Ranjan Path, Danapur (Near Gyan Niketan)', areaName: 'Danapur', price: '₹12,000', type: 'Flat', beds: 2, baths: 2, area: '950 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/flat_interior.png' },
  { id: 2, title: 'Furnished 1 BHK Flat', location: 'Mitra Compound, Boring Road (Near Alankar Place)', areaName: 'Boring Road', price: '₹11,500', type: 'Flat', beds: 1, baths: 1, area: '600 sqft', badge: 'Premium', badgeClass: 'badge-premium', img: '/images/flat_interior.png' },
  { id: 3, title: 'Commercial Shop Space', location: 'Bailey Road, Raza Bazar (Near IGIMS)', areaName: 'Raza Bazar', price: '₹25,000', type: 'Shop', beds: 0, baths: 1, area: '650 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/commercial_shop.png' },
  { id: 4, title: 'Single Room for Students', location: 'Khagaul Road (Near Saguna More)', areaName: 'Saguna More', price: '₹4,500', type: 'Room', beds: 1, baths: 1, area: '250 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/pg_room.png' },
  { id: 5, title: '3 BHK Family Apartment', location: 'Gola Road, Danapur (Near T-Point)', areaName: 'Danapur', price: '₹18,000', type: 'Flat', beds: 3, baths: 2, area: '1450 sqft', badge: 'Premium', badgeClass: 'badge-premium', img: '/images/flat_interior.png' },
  { id: 6, title: 'Modern Office Space', location: 'Boring Road Chauraha (Above SBI Bank)', areaName: 'Boring Road', price: '₹35,000', type: 'Office', beds: 0, baths: 2, area: '1200 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/commercial_shop.png' },
  { id: 7, title: 'PG for Boys (Triple Sharing)', location: 'Ranjan Path, Danapur (Near Gyan Niketan)', areaName: 'Danapur', price: '₹6,000', type: 'PG', beds: 1, baths: 1, area: '350 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/pg_room.png' },
  { id: 8, title: '1 BHK Semi-Furnished Flat', location: 'Khagaul Road (Near Overbridge)', areaName: 'Khagaul Road', price: '₹8,500', type: 'Flat', beds: 1, baths: 1, area: '550 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/flat_interior.png' },
  { id: 9, title: 'Corner Shop – High Footfall', location: 'Bailey Road, Raza Bazar (Opp. Paras Hospital)', areaName: 'Raza Bazar', price: '₹30,000', type: 'Shop', beds: 0, baths: 1, area: '450 sqft', badge: 'Premium', badgeClass: 'badge-premium', img: '/images/commercial_shop.png' },
  { id: 10, title: 'PG for Girls (Single Room)', location: 'Boring Road (Near Women\'s College)', areaName: 'Boring Road', price: '₹7,500', type: 'PG', beds: 1, baths: 1, area: '300 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/pg_room.png' },
  { id: 11, title: 'Co-working Office Space', location: 'Saguna More (Near Ford Showroom)', areaName: 'Saguna More', price: '₹15,000', type: 'Office', beds: 0, baths: 1, area: '800 sqft', badge: 'Available', badgeClass: 'badge-available', img: '/images/commercial_shop.png' },
  { id: 12, title: 'Deluxe 2 BHK Fully Furnished', location: 'Bailey Road, Raza Bazar (Pillar 65)', areaName: 'Raza Bazar', price: '₹16,500', type: 'Flat', beds: 2, baths: 2, area: '1100 sqft', badge: 'Premium', badgeClass: 'badge-premium', img: '/images/flat_interior.png' },
]

const categories = ['All', 'Room', 'Flat', 'Shop', 'Office', 'PG']
const areas = ['All', 'Danapur', 'Boring Road', 'Raza Bazar', 'Saguna More', 'Khagaul Road']

export default function Properties() {
  const [filter, setFilter] = useState('All')
  const [areaFilter, setAreaFilter] = useState('All')

  const filtered = allProperties.filter(p => {
    const matchesCategory = filter === 'All' ? true : p.type === filter
    const matchesArea = areaFilter === 'All' ? true : p.areaName === areaFilter
    return matchesCategory && matchesArea
  })

  return (
    <>
      <section className="about-hero">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-label">🏘️ Properties</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>Browse <span style={{ color: 'var(--primary-light)' }}>Available Properties</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto', marginBottom: '30px' }}>Find rooms, flats, shops, offices, and PG accommodations at the best prices in Patna</p>
          <div style={{ maxWidth: '600px', width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '2px solid var(--primary-light)' }}>
            <img src="/images/property_search.gif" alt="Property Search Animation" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          {/* Dual Filtering controls */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>📁 Property Type</div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {categories.map(c => (
                    <button key={c} className={`filter-btn${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
                  ))}
                </div>
              </div>
              
              <div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>📍 Patna Locality (Facebook Cover Area)</div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {areas.map(a => (
                    <button key={a} className={`filter-btn${areaFilter === a ? ' active' : ''}`} onClick={() => setAreaFilter(a)}>{a}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="properties-grid">
            {filtered.map(p => (
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
          {filtered.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: 40 }}>No properties found matching your selection.</p>}
        </div>
      </section>
    </>
  )
}
