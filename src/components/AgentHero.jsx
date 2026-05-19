import { useState, useRef, useEffect } from 'react'

/**
 * Big agent hero with inline video playback.
 * - Click → image swaps to the video, plays in place in the same frame
 * - No autoplay attribute. Play is triggered explicitly via ref AFTER the
 *   user clicks, so we have a single deterministic code path and can log it.
 */
export default function AgentHero({ imageUrl, imageAlt, videoUrl, aspectClass = 'agent-hero' }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  function play(e) {
    if (!videoUrl || playing) return
    e?.stopPropagation()
    console.log('[AgentHero] play triggered by user click:', { src: videoUrl, eventType: e?.type, target: e?.target?.tagName })
    setPlaying(true)
  }

  function handleEnded() {
    setPlaying(false)
  }

  // Explicit play after the video element mounts. Only happens because
  // setPlaying(true) was called, which only happens in onClick.
  useEffect(() => {
    if (playing && videoRef.current) {
      console.log('[AgentHero] calling video.play() on mounted element')
      videoRef.current.play().catch((err) => {
        console.error('[AgentHero] play failed:', err)
      })
    }
  }, [playing])

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
