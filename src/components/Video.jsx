import { useState } from 'react'

export default function Video() {
  const [playing, setPlaying] = useState(false)

  function play(e) {
    if (playing) return
    e?.stopPropagation()
    setPlaying(true)
  }

  function handleEnded() {
    setPlaying(false)
  }

  return (
    <section className="video-section" id="proof">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <div className="gold-rule center reveal"></div>
        <p className="eyebrow center reveal reveal-d1">Proof of Concept</p>
        <h2 className="video-headline reveal reveal-d2">See it in production.</h2>
        <p className="video-sub reveal reveal-d3">
          The agent you're about to meet runs Meritage Restaurant in Saint Paul. She is not for sale. She exists to show you what yours can be.
        </p>

        <div className="video-frame reveal reveal-d3" onClick={!playing ? play : undefined}>
          <div className="video-thumb">
            {!playing && (
              <img
                src="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/the-sophie-project/SophieOffice.png"
                alt="Sophie at her desk in the Meritage office"
                className="video-thumb-hero"
              />
            )}
            {playing && (
              <>
                <video
                  className="video-thumb-video"
                  src="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/the-sophie-project/Sophie_for_Desta-Nation.mp4"
                  autoPlay
                  controls
                  controlsList="nofullscreen nodownload noremoteplayback"
                  disablePictureInPicture
                  playsInline
                  onEnded={handleEnded}
                />
                <button
                  type="button"
                  className="agent-hero-close"
                  onClick={(e) => { e.stopPropagation(); handleEnded() }}
                  aria-label="Close video"
                >✕</button>
              </>
            )}
            {!playing && (
              <div className="play-ring">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36 26 L74 50 L36 74 Z" fill="rgba(250,248,245,0.95)" stroke="rgba(250,248,245,0.2)" strokeWidth="1" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
          {!playing && <p className="video-caption">Meritage's Administrative Intelligence &nbsp;·&nbsp; Click to watch</p>}
        </div>
      </div>
    </section>
  )
}
