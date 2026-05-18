export default function Modalities() {
  return (
    <section className="platform-section">
      <div className="section-inner">
        <div className="gold-rule center reveal"></div>
        <p className="eyebrow center reveal reveal-d1">Operational Modalities</p>
        <h2 className="platform-headline reveal reveal-d2">Choose the depth your operation needs.</h2>
        <p className="platform-sub reveal reveal-d3">
          Beyond the Core Triad, three operational modalities plug in. You take the ones that match how you actually run.
        </p>

        <div className="platform-grid triad reveal">
          <div className="platform-card">
            <span className="platform-card-icon">🍽</span>
            <p className="platform-card-label">Reservations Modality</p>
            <h3 className="platform-card-name">The Front of House.</h3>
            <p className="platform-card-desc">
              Full reservation management — book, modify, cancel, validate pacing, check capacity. Waitlist intelligence with automated offer-loops. Resy / OpenTable / Toast inbox integration for guests who came through legacy channels. Events and experiences. Gift account lookup. Multilingual booking in English, French, Spanish, Turkish. Everything your host stand needs without a second person behind it.
            </p>
          </div>
          <div className="platform-card">
            <span className="platform-card-icon">📊</span>
            <p className="platform-card-label">Financial Modality</p>
            <h3 className="platform-card-name">The C-suite View.</h3>
            <p className="platform-card-desc">
              Invoice processing with every line item extracted and costed automatically. Vendor payment tracking. Food cost variance alerts when costs shift more than five percent. Labor cost analysis. Recipe management and plate costing that updates the moment vendor prices change. A C-suite-grade financial hub, with optional accountant access. Your books, your data, your control.
            </p>
          </div>
          <div className="platform-card">
            <span className="platform-card-icon">👥</span>
            <p className="platform-card-label">HR Modality</p>
            <h3 className="platform-card-name">The Team.</h3>
            <p className="platform-card-desc">
              Payroll integration and automated tip distribution. Time-off requests with manager approval workflows. Onboarding for new hires — the new server gets a welcome email from your agent, walked through the portal, set up on day one. Schedule management. Staff document management. Illness reporting. HR handled without adding to a manager's plate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
