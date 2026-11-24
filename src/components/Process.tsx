import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="section border-y border-line bg-alt" aria-labelledby="process-title">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Our Process</p>
          <h2 id="process-title" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A simple path from first call to lasting results
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="reveal relative rounded-2xl border border-line bg-card p-7">
              <span className="font-display text-4xl font-extrabold text-accent" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
