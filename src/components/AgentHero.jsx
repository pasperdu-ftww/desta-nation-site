/**
 * Big agent hero — image-only mode.
 * Videos temporarily disabled while we diagnose autoplay reports.
 * No video element ever renders. Click is a no-op.
 */
export default function AgentHero({ imageUrl, imageAlt, aspectClass = 'agent-hero' }) {
  return (
    <div className={aspectClass}>
      <img src={imageUrl} alt={imageAlt} className="agent-hero-img" />
    </div>
  )
}
