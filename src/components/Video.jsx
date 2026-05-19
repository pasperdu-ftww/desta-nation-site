/**
 * Proof of Concept — image-only mode.
 * Video temporarily disabled while we diagnose autoplay reports.
 */
export default function Video() {
  return (
    <section className="video-section" id="proof">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <div className="gold-rule center reveal"></div>
        <p className="eyebrow center reveal reveal-d1">Proof of Concept</p>
        <h2 className="video-headline reveal reveal-d2">See it in production.</h2>
        <p className="video-sub reveal reveal-d3">
          The agent you're about to meet runs Meritage Restaurant in Saint Paul. She is not for sale. She exists to show you what yours can be.
        </p>

        <div className="video-frame reveal reveal-d3">
          <div className="video-thumb">
            <img
              src="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/the-sophie-project/SophieOffice.png"
              alt="Sophie at her desk in the Meritage office"
              className="video-thumb-hero"
            />
          </div>
          <p className="video-caption">Meritage's Administrative Intelligence</p>
        </div>
      </div>
    </section>
  )
}
