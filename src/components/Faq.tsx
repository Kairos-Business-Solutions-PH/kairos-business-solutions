import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="section border-t border-line bg-alt" aria-labelledby="faq-title">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-title" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-heading">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
