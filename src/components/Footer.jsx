import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <img src="/images/logo.jpg" alt="OM SAI Logo" className="logo-img" />
              <span>OM SAI</span>
            </Link>
            <p>Contact us for rents, buy & sales of houses, flats, and lands. We cover areas from Khagaul Road, Saguna More, to Raza Bazar and Boring Road in Patna.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/p/OM-SAI-to-let-services-100063710357698/" target="_blank" rel="noreferrer" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="https://wa.me/918252878700" target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Property Types</h4>
            <a href="#">Rooms</a>
            <a href="#">1 BHK Flats</a>
            <a href="#">2 BHK Flats</a>
            <a href="#">Shops</a>
            <a href="#">Offices</a>
            <a href="#">PG Accommodation</a>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <a href="#">📍 Ranjan path lane no.7 near gyan Niketan school, Danapur, Gola Road, Patna - 801503</a>
            <a href="tel:+918252878700">📞 +91 82528 78700</a>
            <a href="https://wa.me/918252878700" target="_blank" rel="noreferrer">💬 WhatsApp Us</a>
            <a href="mailto:ajay24519@gmail.com">✉️ ajay24519@gmail.com</a>
            <a href="#">👤 Ajay Kumar</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Om Sai To-Let Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
