import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let’s discuss your project
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Tell us where you are and where you want to be. We’ll reply within one business day with next steps.
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-heading">Email</p>
          <a href={`mailto:${site.email}`} className="mt-1 inline-block text-lg font-semibold text-accent hover:underline">
            {site.email}
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
