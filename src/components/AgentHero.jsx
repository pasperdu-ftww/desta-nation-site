import { useState, useRef } from 'react'

/**
 * Big agent hero with inline video playback.
 * - Full-bleed portrait fills the card
 * - Transparent cinema arrow overlay until clicked
 * - Click → image swaps to the video, plays in place in the same frame
 * - No fullscreen overlay, no takeover — video lives where the image was
 * - Video has native controls so user can pause/scrub/close
 * - When video ends or user pauses + clicks the card, swaps back to image
 */
export default function AgentHero({ imageUrl, imageAlt, videoUrl, aspectClass = 'agent-hero' }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  function play(e) {
    if (!videoUrl || playing) return
    e?.stopPropagation()
    setPlaying(true)
  }

  function handleEnded() {
    setPlaying(false)
  }

  return (
    <div className={aspectClass} onClick={!playing ? play : undefined} role={videoUrl && !playing ? 'button' : undefined} tabIndex={videoUrl && !playing ? 0 : undefined}>
      {!playing && (
        <img src={imageUrl} alt={imageAlt} className="agent-hero-img" />
      )}
      {playing && videoUrl && (
        <>
          <video
            ref={videoRef}
            className="agent-hero-video"
            src={videoUrl}
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
      {!playing && videoUrl && (
        <div className="agent-hero-play">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 26 L74 50 L36 74 Z" fill="rgba(250,248,245,0.95)" stroke="rgba(250,248,245,0.2)" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      {!playing && !videoUrl && (
        <div className="agent-hero-novideo">Hero portrait</div>
      )}
    </div>
  )
}
