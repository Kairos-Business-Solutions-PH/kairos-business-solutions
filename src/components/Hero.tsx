import { ArrowRight } from "./Icons";
import { site } from "@/lib/site";

// Decorative, inline SVG hero art (no raster payload, themed through CSS variables).
function HeroArt() {
  return (
    <svg viewBox="0 0 420 420" role="img" aria-label="Abstract hourglass and ascending bars representing timely, measurable growth" className="h-auto w-full max-w-md">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="210" r="190" fill="var(--bg-alt)" stroke="var(--border)" />
      <circle cx="210" cy="210" r="140" fill="none" stroke="var(--border)" strokeDasharray="4 8" />
      {/* hourglass */}
      <g fill="none" stroke="var(--heading)" strokeWidth="10" strokeLinejoin="round">
        <path d="M130 84h160M130 336h160" strokeLinecap="round" />
        <path d="M146 84c0 62 30 86 64 126-34 40-64 64-64 126M274 84c0 62-30 86-64 126 34 40 64 64 64 126" />
      </g>
      <path d="M166 100h88c-4 36-26 56-44 78-18-22-40-42-44-78z" fill="url(#g)" />
      <path d="M210 242c18 20 38 36 44 78h-88c6-42 26-58 44-78z" fill="url(#g)" />
      {/* ascending bars */}
      <g fill="var(--accent)">
        <rect x="318" y="268" width="14" height="52" rx="3" opacity="0.45" />
        <rect x="338" y="244" width="14" height="76" rx="3" opacity="0.65" />
        <rect x="358" y="214" width="14" height="106" rx="3" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x section grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">Business consulting &amp; solutions</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Kairos Business Solutions helps growing companies turn strategy into measurable results: streamlined
            operations, the right technology and clear priorities, delivered at the moment they matter most.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-primary">
              Discuss your project <ArrowRight />
            </a>
            <a href="#services" className="btn btn-outline">
              Explore services
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              ["6", "core service areas"],
              ["4-step", "proven process"],
              ["1 day", "typical reply time"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-extrabold text-heading">{v}</dt>
                <dd className="mt-1 text-sm">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-center lg:justify-end">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
