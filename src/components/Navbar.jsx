import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/properties', label: 'Properties' },
    { to: '/services', label: 'Services' },
  ]

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="main-nav">
        <div className="container">
          <Link to="/" className="nav-logo">
            <img src="/images/logo.jpg" alt="OM SAI Logo" className="logo-img" />
            <span>OM SAI</span>
          </Link>
          <div className="nav-links">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={location.pathname === l.to ? 'active' : ''}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="nav-contact">Contact Us</Link>
          </div>
          <button className="mobile-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => (
          <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
    </>
  )
}
