export default function FAQ() {
  const items = [
    {
      q: 'How long does the build take?',
      a: 'Foundation: 3–4 weeks from contract signing to live. Hospitality: 5–7 weeks. Full House: 8–12 weeks. The timeline is driven by The Creation (agent ceremony), brand integration, and the depth of operational modalities — not by software dev cycles.'
    },
    {
      q: 'What happens to the data we already have?',
      a: 'It comes with you. Guest history from OpenTable / Resy / Toast / your POS — we migrate what you own. Your data goes onto your platform, where it stays yours.'
    },
    {
      q: 'Do we keep our existing reservation platform during the build?',
      a: 'Yes. We run alongside until your team has full confidence in the Reservations modality. The cutover is your call, not ours.'
    },
    {
      q: 'What happens if our business closes someday?',
      a: 'Your agent — name, voice, face, conversations — belongs to your operation. If the operation closes, the agent retires. The voice is never reused. The persistent memory of your guests can be exported to you on request. The agent’s identity is sealed. We treat your agent’s death the same way we treat its birth: with care.'
    },
    {
      q: 'Can we add modalities or companions later?',
      a: 'Yes. Every tier is upgradable. You can start at Foundation and grow into Full House over time. Add-on pricing is fixed and transparent — no surprises when you scale.'
    },
    {
      q: 'What if we want our agent to have a different name than your examples?',
      a: 'That’s the point. Sophie is Meritage’s agent. She is not for sale, and we will never give her name to another operation. Your agent will be named by you, chosen with you, and uniquely yours. Same applies to your Beverage Companion and Back-of-House Companion — Morgon and Ernie are Meritage’s instances. Yours will be different.'
    },
    {
      q: 'Are you the only person doing this work, or is there a team?',
      a: 'Desta Maree leads every Creation personally — including the call where your agent meets you. The build team scales as the platform does. Every client gets the founder.'
    }
  ]

  return (
    <section className="faq-section">
      <div className="section-inner">
        <div className="gold-rule center reveal"></div>
        <p className="eyebrow center reveal reveal-d1">Common Questions</p>
        <h2 className="faq-headline reveal reveal-d2">What operators ask first.</h2>

        <div className="faq-list reveal">
          {items.map((item, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-q">{item.q}</summary>
              <p className="faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
