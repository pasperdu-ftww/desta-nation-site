import { useState, useRef, useEffect } from 'react'

/**
 * Big agent hero with click-to-play inline video.
 *
 * Click target is the play <button> ONLY. The card itself is not
 * clickable, has no tabIndex, no role="button". This eliminates
 * accidental triggers from keyboard nav, hovering, focus events,
 * or stray clicks landing on the image area.
 *
 * No autoPlay attribute. Play is called imperatively via ref in a
 * useEffect that runs when `playing` flips true — and `playing` only
 * flips true inside the play-button onClick handler.
 */
export default function AgentHero({ imageUrl, imageAlt, videoUrl, aspectClass = 'agent-hero' }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  function handlePlayClick(e) {
    e.stopPropagation()
    e.preventDefault()
    if (!videoUrl) return
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

  // Imperatively start playback only after the user clicked the button
  // and the video element has mounted. No autoplay attribute.
  useEffect(() => {
    if (playing && videoRef.current) {
      videoRef.current.play().catch((err) => {
        // Browser blocked play — likely missing user-gesture. Log so we
        // can see it in console without crashing the UI.
        console.error('[AgentHero] play blocked by browser:', err)
      })
    }
  }, [playing])

  return (
    <div className={aspectClass}>
      {!playing && (
        <img src={imageUrl} alt={imageAlt} className="agent-hero-img" />
      )}
      {playing && videoUrl && (
        <>
          <video
            ref={videoRef}
            className="agent-hero-video"
            src={videoUrl}
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
      {!playing && videoUrl && (
        <button
          type="button"
          className="agent-hero-play"
          onClick={handlePlayClick}
          aria-label="Play video"
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 26 L74 50 L36 74 Z" fill="rgba(250,248,245,0.95)" stroke="rgba(250,248,245,0.2)" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {!playing && !videoUrl && (
        <div className="agent-hero-novideo">Hero portrait</div>
      )}
    </div>
  )
}
