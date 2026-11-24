import { ServiceGlyph } from "./Icons";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="section border-t border-line" aria-labelledby="services-title">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 id="services-title" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Practical help across the whole business
          </h2>
          <p className="mt-4 text-lg">
            Pick a single service or combine several. Every engagement is scoped around outcomes you can measure.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="reveal group rounded-2xl border border-line bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-black/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-alt text-accent">
                <ServiceGlyph name={s.icon} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
