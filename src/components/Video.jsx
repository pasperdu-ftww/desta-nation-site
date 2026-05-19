import { useState, useRef, useEffect } from 'react'

/**
 * Proof of Concept Sophie video — click-to-play in place.
 * Click target: the play <button> ONLY. Frame is not clickable.
 * No autoPlay, no user-gesture-free triggers possible.
 */
export default function Video() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  function handlePlayClick(e) {
    e.stopPropagation()
    e.preventDefault()
    setPlaying(true)
  }

  function handleClose(e) {
    e.stopPropagation()
    e.preventDefault()
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setPlaying(false)
  }

  function handleEnded() {
    setPlaying(false)
  }

  useEffect(() => {
    if (playing && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error('[Video proof] play blocked by browser:', err)
      })
    }
  }, [playing])

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
                  ref={videoRef}
                  className="video-thumb-video"
                  src="https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/the-sophie-project/Sophie_for_Desta-Nation.mp4"
                  controls
                  controlsList="nofullscreen nodownload noremoteplayback"
                  disablePictureInPicture
                  playsInline
                  onEnded={handleEnded}
                />
                <button
                  type="button"
                  className="agent-hero-close"
                  onClick={handleClose}
                  aria-label="Close video"
                >✕</button>
              </>
            )}
            {!playing && (
              <button
                type="button"
                className="play-ring"
                onClick={handlePlayClick}
                aria-label="Play Sophie video"
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36 26 L74 50 L36 74 Z" fill="rgba(250,248,245,0.95)" stroke="rgba(250,248,245,0.2)" strokeWidth="1" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
          {!playing && <p className="video-caption">Meritage's Administrative Intelligence &nbsp;·&nbsp; Click play to watch</p>}
        </div>
      </div>
    </section>
  )
}
