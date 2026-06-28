import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)

    // Construct WhatsApp message content
    const whatsappMessage = `*New Property Inquiry - OM SAI To-Let Services*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `✉️ *Email:* ${form.email || 'Not Provided'}\n` +
      `🏘️ *Property Type:* ${form.type || 'General Inquiry'}\n` +
      `💬 *Message:* ${form.message}`

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/918252878700?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')

    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', email: '', type: '', message: '' })
  }

  return (
    <>
      <section className="contact-hero">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-label">📞 Contact Us</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>Get In <span style={{ color: 'var(--primary-light)' }}>Touch</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto', marginBottom: '30px' }}>Have a question or need help finding a property? We'd love to hear from you!</p>
          <div style={{ maxWidth: '500px', width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '2px solid var(--primary-light)' }}>
            <img src="/images/contact_us.gif" alt="Customer Support Animation" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="glass-card contact-info-card">
                <div className="icon">📍</div>
                <div><h4>Visit Us</h4><p>Ranjan Path, In front of Gyan Niketan School<br />Danapur, Gola Road, Patna, Bihar - 801503</p></div>
              </div>
              <div className="glass-card contact-info-card">
                <div className="icon">📞</div>
                <div><h4>Call / WhatsApp</h4><p>+91 78708 54790 (Call)<br />+91 82528 78700 (WhatsApp)</p></div>
              </div>
              <div className="glass-card contact-info-card">
                <div className="icon">✉️</div>
                <div><h4>Email Us</h4><p>ajay24519@gmail.com</p></div>
              </div>
              <div className="glass-card contact-info-card">
                <div className="icon">👤</div>
                <div><h4>Contact Person</h4><p>Ajay Kumar</p></div>
              </div>
            </div>
            <div className="contact-form">
              <h3 style={{ marginBottom: 24, fontSize: '1.4rem' }}>Send Us a Message</h3>
              {sent && <div style={{ background: 'rgba(26,188,156,0.15)', border: '1px solid rgba(26,188,156,0.3)', padding: '14px 20px', borderRadius: 12, marginBottom: 20, color: '#1abc9c', fontWeight: 500 }}>✅ Message sent successfully! We'll get back to you soon.</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Property Type</label>
                  <select id="type" name="type" value={form.type} onChange={handleChange}>
                    <option value="">Select property type</option>
                    <option value="Room">Room</option>
                    <option value="Flat">Flat (1BHK / 2BHK / 3BHK)</option>
                    <option value="Shop">Shop / Commercial Space</option>
                    <option value="Office">Office Space</option>
                    <option value="PG">PG Accommodation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your requirements..." required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
