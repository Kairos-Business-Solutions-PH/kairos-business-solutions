import { ArrowRight } from "./Icons";
import { HeroScene } from "./HeroScene";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <div className="container-x section grid w-full items-center gap-12 lg:grid-cols-[1fr_1fr]">
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
        <div className="mx-auto w-full max-w-[34rem] lg:max-w-none">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
