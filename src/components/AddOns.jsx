export default function AddOns() {
  return (
    <section className="addons-section">
      <div className="section-inner">
        <div className="gold-rule center reveal"></div>
        <p className="eyebrow center reveal reveal-d1">À la carte</p>
        <h2 className="addons-headline reveal reveal-d2">Every tier can grow.</h2>
        <p className="addons-sub reveal reveal-d3">
          These plug into any platform. Add as your operation evolves.
        </p>

        <div className="addons-table reveal">
          <div className="addons-row header">
            <div>Add-on</div>
            <div className="price">Setup</div>
            <div className="price">Monthly</div>
          </div>
          <div className="addons-row">
            <div>Additional modality (HR / Financial / Reservations)</div>
            <div className="price">$4,500</div>
            <div className="price">$400</div>
          </div>
          <div className="addons-row">
            <div>Additional companion (Beverage / Back-of-House)</div>
            <div className="price">$8,500</div>
            <div className="price">$750</div>
          </div>
          <div className="addons-row">
            <div>Custom agent (specialist scoped to your edge case)</div>
            <div className="price">from $15,000</div>
            <div className="price">scoped</div>
          </div>
        </div>

        <div className="financing-note reveal">
          <strong>Financing option — applies to any tier.</strong><br />
          $5,500 setup · build cost amortized over 24 months. After month 24, you drop to standard platform license. Same platform, same agents, same everything — built upfront, paid for as the platform earns its place.
        </div>
      </div>
    </section>
  )
}
