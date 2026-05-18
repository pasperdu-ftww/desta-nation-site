import AgentHero from './AgentHero.jsx'

export default function CustomAgent() {
  return (
    <section className="custom-section">
      <div className="section-inner narrow">
        <div className="gold-rule center reveal"></div>
        <p className="eyebrow center reveal reveal-d1">Your Custom Agent</p>
        <h2 className="custom-headline reveal reveal-d2">Some operations need a fourth agent.</h2>
        <p className="custom-sub reveal reveal-d3">
          <em>The standard platform covers front of house, kitchen, and beverage. When your operation needs something the core three don't — we build it.</em>
        </p>

        <div className="reveal" style={{ maxWidth: '520px', margin: '3rem auto' }}>
          <AgentHero
            imageUrl="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/sebastian/Sebastian.png"
            imageAlt="Sebastian — concierge intelligence"
            videoUrl={null}
          />
          <p className="agent-role" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Concierge Intelligence — example</p>
          <h3 className="agent-name" style={{ textAlign: 'center' }}>Sebastian.</h3>
        </div>

        <div className="custom-body reveal">
          <p>Sebastian is a multilingual concierge intelligence we built ourselves — connected to a destination network spanning three continents. He's not part of the standard build because what he does is specific to our operation. But he's proof that an additional agent can become whatever your operation actually needs.</p>
          <p><strong>Your fourth agent might be:</strong></p>
        </div>

        <ul className="custom-examples reveal">
          <li><strong>A multilingual translator</strong> — real-time between your FOH and BOH staff when language differences slow service</li>
          <li><strong>A staff educator</strong> — running wine training, menu knowledge, certification prep on its own schedule</li>
          <li><strong>A guest-facing concierge</strong> — with deep recommendation intelligence for your neighborhood, your sister restaurants, your trusted hotels</li>
          <li><strong>An event coordinator</strong> — managing private dining inquiries, catering pipelines, BEO production</li>
          <li><strong>A multi-location operations agent</strong> — for restaurant groups coordinating across rooms</li>
        </ul>

        <div className="custom-body reveal" style={{ marginTop: '2rem' }}>
          <p>We scope it during discovery and build it into your platform with the same care as the standard companions. A new name. A new voice. A new face. Sacred to your operation. Never reused.</p>
        </div>
      </div>
    </section>
  )
}
