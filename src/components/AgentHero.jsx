import { useState, useEffect, useRef } from 'react'

/**
 * Reusable big-hero-with-play-overlay for agent presentations.
 * - Full-bleed image fills the card
 * - Gold play button overlay (or "VIDEO SOON" badge if no video URL)
 * - Click anywhere on the hero opens the video modal
 * - Escape / background click closes
 */
export default function AgentHero({ imageUrl, imageAlt, videoUrl, aspectClass = 'agent-hero' }) {
  const [open, setOpen] = useState(false)
  const videoRef = useRef(null)

  function openVideo() {
    if (!videoUrl) return
    setOpen(true)
    setTimeout(() => videoRef.current?.play().catch(() => {}), 50)
  }

  function closeVideo() {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setOpen(false)
  }

  function closeOnBg(e) {
    if (e.target === e.currentTarget) closeVideo()
  }

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape' && open) closeVideo()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [open])

  return (
    <>
      <div className={aspectClass} onClick={openVideo} role={videoUrl ? 'button' : undefined} tabIndex={videoUrl ? 0 : undefined}>
        <img src={imageUrl} alt={imageAlt} className="agent-hero-img" />
        {videoUrl ? (
          <div className="agent-hero-play">
            <svg width="14" height="16" viewBox="0 0 16 18" fill="none">
              <path d="M2 1.5L14 9L2 16.5V1.5Z" fill="#0E1C30" />
            </svg>
          </div>
        ) : (
          <div className="agent-hero-novideo">Hero portrait</div>
        )}
      </div>

      {videoUrl && (
        <div className={`video-overlay${open ? ' active' : ''}`} onClick={closeOnBg}>
          <div className="video-overlay-inner">
            <button className="video-close" onClick={closeVideo}>✕ &nbsp; Close</button>
            <video ref={videoRef} controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  )
}
