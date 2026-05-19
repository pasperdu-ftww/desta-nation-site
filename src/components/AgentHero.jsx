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
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36 26 L74 50 L36 74 Z" fill="rgba(250,248,245,0.95)" stroke="rgba(250,248,245,0.2)" strokeWidth="1" strokeLinejoin="round" />
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
