import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-text">
      <div className="container-x py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            {/* White-and-blue logo on the navy footer in both themes */}
            <Logo variant="on-dark" height={44} />
            <p className="mt-5 text-sm leading-relaxed">{site.description}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </nav>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
