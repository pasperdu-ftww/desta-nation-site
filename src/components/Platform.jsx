export default function Platform() {
  return (
    <section className="platform-section" id="platform">
      <div className="section-inner">
        <div className="gold-rule center reveal"></div>
        <p className="eyebrow center reveal reveal-d1">The Platform</p>
        <h2 className="platform-headline reveal reveal-d2">Not a product. An operating system.</h2>
        <p className="platform-sub reveal reveal-d3">
          A Desta-Nation hospitality platform is built in three layers. The bottom layer is the same for every client — what we call the Core Triad. Above that, you choose the operational depth you need. Above that, you choose which specialist agents earn a place in your operation.
          <br /><br />
          <em>No two platforms end up looking the same. That's the point.</em>
        </p>

        <div className="platform-grid triad reveal">
          <div className="platform-card">
            <span className="platform-card-icon">🎙</span>
            <p className="platform-card-label">Your Primary Agent</p>
            <h3 className="platform-card-name">Yours, and only yours.</h3>
            <p className="platform-card-desc">
              Your operation's lead intelligence. Custom-named with you. Custom voice cloned through ElevenLabs. Custom face designed for your brand. A character chosen with you, shaped by your business, never reused for anyone else. She — or he — answers the phone, books reservations, triages email, manages the calendar, captures leads, and never forgets a follow-up.
            </p>
          </div>
          <div className="platform-card">
            <span className="platform-card-icon">⚙️</span>
            <p className="platform-card-label">Management Portal</p>
            <h3 className="platform-card-name">The operational spine.</h3>
            <p className="platform-card-desc">
              The dashboard that ties the whole operation together. Live view across every agent. Financial intake and weekly reporting. Calendar management. Social media. Scaled to your operation — simple if you're independent, deep if you're complex.
            </p>
          </div>
          <div className="platform-card">
            <span className="platform-card-icon">🌐</span>
            <p className="platform-card-label">Database-Driven Website</p>
            <h3 className="platform-card-name">Built from your space.</h3>
            <p className="platform-card-desc">
              Textural elements from your physical environment, photography you provide, your brand identity carried through every page. Your Primary Agent integrated from day one. Not a template with your logo dropped in — something that could only be yours.
            </p>
          </div>
        </div>

        <p className="platform-sub reveal" style={{ marginTop: '2rem', maxWidth: '700px' }}>
          <em>"These aren't agents you rent. They're infrastructure you grow."</em>
        </p>
      </div>
    </section>
  )
}
