export default function Investment() {
  return (
    <section className="pricing-section" id="investment">
      <div className="section-inner">
        <div className="gold-rule center reveal"></div>
        <p className="eyebrow center reveal reveal-d1">Investment</p>
        <h2 className="pricing-headline reveal reveal-d2">Three ways in. No surprises.</h2>
        <p className="pricing-sub reveal reveal-d3">
          Every tier includes the Core Triad — Primary Agent, Management Portal, and Database-Driven Website. Modalities and specialist companions are added based on your operation. Every tier scales up into Full House when you're ready.
        </p>

        <div className="pricing-grid reveal">

          <div className="pricing-card">
            <p className="pricing-tier">The Path In</p>
            <h3 className="pricing-name">Foundation</h3>
            <div className="pricing-price">
              <div className="pricing-main">$12,500 <span>setup</span></div>
              <p className="pricing-secondary">+ <strong>$1,500</strong> / month ongoing<br />Core Triad + one operational modality.</p>
            </div>
            <ul className="pricing-features">
              <li>Core Triad — Primary Agent, Management Portal, Website</li>
              <li>One operational modality of your choice (HR, Financial, or Reservations)</li>
              <li>Standard agent ceremony with owner-interview onboarding</li>
              <li>Ongoing optimization & support</li>
              <li>Upgradable to Hospitality or Full House</li>
            </ul>
            <p className="pricing-fit">For cafés, fast-casual, small bistros, hotel f&b sidelines — operations that need a sophisticated front-of-house agent and one operational depth.</p>
          </div>

          <div className="pricing-card">
            <p className="pricing-tier">The Middle Way</p>
            <h3 className="pricing-name">Hospitality</h3>
            <div className="pricing-price">
              <div className="pricing-main">$25,000 <span>setup</span></div>
              <p className="pricing-secondary">+ <strong>$2,750</strong> / month ongoing<br />Core Triad + two modalities + one companion.</p>
            </div>
            <ul className="pricing-features">
              <li>Core Triad</li>
              <li>Two operational modalities of your choice</li>
              <li>One specialist companion (Beverage or Back-of-House)</li>
              <li>Enhanced agent ceremony — extended owner interview, brand consultation</li>
              <li>Priority support</li>
              <li>Upgradable to Full House</li>
            </ul>
            <p className="pricing-fit">For wine bars, beverage-forward concepts, neighborhood restaurants — operations with one area of real depth beyond the basics.</p>
          </div>

          <div className="pricing-card featured">
            <p className="pricing-tier">The Destination</p>
            <h3 className="pricing-name">Full House</h3>
            <div className="pricing-price">
              <div className="pricing-main">$48,000 <span>setup</span></div>
              <p className="pricing-secondary">+ <strong>$4,500</strong> / month ongoing<br />Three agents. One operation.</p>
            </div>
            <ul className="pricing-features">
              <li>Core Triad</li>
              <li>All three modalities (HR + Financial + Reservations)</li>
              <li>Both specialist companions (Beverage + Back-of-House)</li>
              <li>White-glove agent ceremony — multi-day, on-site if needed</li>
              <li>Priority support & continuous optimization</li>
            </ul>
            <p className="pricing-fit">For full-service restaurants — operations like Meritage, where the front of house, kitchen, and beverage program each warrant their own intelligence.</p>
          </div>

        </div>

        <p className="pricing-note reveal">
          Build scope is determined through discovery. Every platform is custom — your agents, your portals, your website, your operation. The numbers above reflect a single independent restaurant. Restaurant groups and multi-location operations are scoped separately.
        </p>
      </div>
    </section>
  )
}
