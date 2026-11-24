import Image from "next/image";

// Hero illustration: optimized raster (public/brand/hero-roadmap.webp, extracted from
// kairos-animated-hero.svg by scripts/extract-hero.mjs) + the original vector animation overlay
// (sweeping clock hand, milestone highlights, roadmap trace). Overlay keyframes live in globals.css (.hero-*).
// Coordinates share the source SVG's 1536x1240 viewBox; the raster sits at y=216.
const W = 1536;
const H = 1240;
const IMG_Y = 216;
const IMG_H = 1024;

export function HeroScene() {
  return (
    <div
      role="img"
      aria-label="Two consultants mapping a business roadmap beneath an animated clock"
      className="relative w-full"
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      <Image
        src="/brand/hero-roadmap.webp"
        alt=""
        width={W}
        height={IMG_H}
        priority
        fetchPriority="high"
        sizes="(min-width: 1024px) 560px, 92vw"
        className="absolute left-0 w-full"
        style={{ top: `${(IMG_Y / H) * 100}%`, height: `${(IMG_H / H) * 100}%` }}
      />
      <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false" className="absolute inset-0 h-full w-full">
        <g fill="none" strokeLinecap="round">
          <circle cx="768" cy="109" r="78" stroke="#08a99e" strokeWidth="14" strokeDasharray="442 49" transform="rotate(-30 768 109)" />
          <circle cx="816" cy="48" r="11" fill="#ffc252" />
          <path d="M768 109l-33-24" stroke="#087f7a" strokeWidth="10" />
          <path className="hero-hand" d="M768 109l43-30" stroke="#08a99e" strokeWidth="9" />
          <circle cx="768" cy="109" r="7" fill="#087f7a" />
        </g>
        <g fill="none" strokeWidth="6">
          <rect className="hero-milestone" x="432" y="403" width="118" height="112" rx="23" stroke="#08a99e" />
          <rect className="hero-milestone hero-second" x="693" y="403" width="118" height="112" rx="23" stroke="#08a99e" />
          <rect className="hero-milestone hero-third" x="953" y="403" width="116" height="112" rx="23" stroke="#9c5700" />
          <path className="hero-vision" pathLength="1" d="M369 736 Q558 687 681 572" stroke="#08a99e" strokeWidth="8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
