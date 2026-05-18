import AgentHero from './AgentHero.jsx'

export default function Team() {
  return (
    <section className="agents-section">
      <div className="section-inner wide">
        <div className="agents-header reveal">
          <div className="gold-rule center"></div>
          <p className="eyebrow center">The Team</p>
          <h2 className="agents-headline">Three agents. One operation.</h2>
          <p className="agents-sub">
            The full Desta-Nation hospitality platform is three agents working in concert: your Primary Agent, your Beverage Companion, and your Back-of-House Companion. At full strength, they share one memory, one operational picture, and one goal — supporting your team and your guests with intelligence that knows your business as well as they do.
            <br /><br />
            <em>This is Full House. It's where the platform reaches its complete expression. It's the destination.</em>
          </p>
        </div>

        <div className="agents-grid">

          <div className="agent-card reveal">
            <AgentHero
              imageUrl="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/the-sophie-project/SophieOffice.png"
              imageAlt="Sophie at her desk"
              videoUrl="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/the-sophie-project/Sophie_for_Desta-Nation.mp4"
            />
            <p className="agent-role">Administrative Intelligence</p>
            <h3 className="agent-name">Sophie.</h3>
            <p className="agent-desc">
              Meritage's Primary Agent. Answers phones, triages email, manages the calendar, handles HR, posts to social, captures leads, never forgets a follow-up.
            </p>
            <p className="agent-meta">
              Sophie is Meritage's. Your Primary Agent will have a different name, voice, and face — chosen with you, sacred to your operation.
            </p>
          </div>

          <div className="agent-card reveal reveal-d1">
            <AgentHero
              imageUrl="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/Cellar_Rat_Morgon.png"
              imageAlt="Morgon, beverage companion"
              videoUrl="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/Morgon-short-and-sweet.mp4"
            />
            <p className="agent-role">Beverage Intelligence</p>
            <h3 className="agent-name">Morgon.</h3>
            <p className="agent-desc">
              Meritage's beverage companion — named for the Morgon cru of Beaujolais, built for a French-leaning wine program. Voice-driven inventory, pairings, staff education, guest recommendations, digital list management.
            </p>
            <p className="agent-meta">
              Your beverage companion will be different. Specialized to your program — cocktails, beer, different wine regions. Different name, sacred to your operation.
            </p>
          </div>

          <div className="agent-card reveal reveal-d2">
            <AgentHero
              imageUrl="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/Ernie.png"
              imageAlt="Ernie, kitchen companion"
              videoUrl="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/Ernie.mp4"
            />
            <p className="agent-role">Kitchen Intelligence</p>
            <h3 className="agent-name">Ernie.</h3>
            <p className="agent-desc">
              Meritage's kitchen companion — built for Russell Klein's operation, the duck press, the seasonal menu. Voice-driven inventory, invoice processing with line-item costing, food cost variance alerts, scheduling, labor analysis, recipe management.
            </p>
            <p className="agent-meta">
              Your kitchen companion will be different. Built for your executive chef's workflow, your menu's complexity. Truly the companion to your executive chef.
            </p>
          </div>

        </div>

        <div className="team-tiers reveal">
          <h3 className="team-tiers-headline">Not every operation starts at Full House. That's the point.</h3>
          <ul className="team-tiers-list">
            <li><strong>Foundation</strong> clients begin with a Primary Agent and one operational depth. They grow modalities and companions as the operation matures.</li>
            <li><strong>Hospitality</strong> clients begin with a Primary plus one specialist companion — wine-forward starts with a Morgon-class beverage companion, volume kitchens start with an Ernie-class back-of-house companion. They expand from there.</li>
            <li><strong>Full House</strong> is the destination — three agents, every modality, the complete platform working in concert. Where Meritage runs today.</li>
          </ul>
          <p className="team-tiers-close">
            The configuration matches the business, not the SKU.<br />
            And every configuration scales up into Full House when the operation is ready.
          </p>
        </div>
      </div>
    </section>
  )
}
