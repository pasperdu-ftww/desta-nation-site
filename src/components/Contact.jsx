import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    // TODO: wire to actual form handler when ready (Netlify Forms / formspree / API endpoint)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-inner">
        <div className="gold-rule center reveal"></div>
        <p className="eyebrow center reveal reveal-d1">Next Step</p>
        <h2 className="contact-headline reveal reveal-d2">Start the conversation.</h2>
        <p className="contact-sub reveal reveal-d3">
          Tell us what's taking up too much time. We'll come back with an honest assessment of whether this is the right fit — and what a build scoped to your operation would look like.
        </p>

        <form className="contact-form reveal" onSubmit={handleSubmit} name="hospitality-platform-inquiry" data-netlify="true">
          <input type="hidden" name="form-name" value="hospitality-platform-inquiry" />
          <div className="form-row">
            <div className="form-field">
              <label>Your Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label>Restaurant / Business Name</label>
              <input type="text" name="business" />
            </div>
            <div className="form-field">
              <label>Operation Type</label>
              <select name="type" defaultValue="">
                <option value="" disabled>Select…</option>
                <option>Independent Restaurant</option>
                <option>Restaurant Group</option>
                <option>Hotel / Boutique Property</option>
                <option>Wine Bar</option>
                <option>Café / Bistro</option>
                <option>Tour Operator</option>
                <option>Villa / Vacation Rental</option>
                <option>Other Hospitality</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label>What's taking up too much of your time right now?</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit" className="form-submit" disabled={sent} style={sent ? { opacity: 0.5 } : {}}>
            {sent ? 'Message Sent' : 'Start the Conversation'}
          </button>
        </form>
      </div>
    </section>
  )
}
