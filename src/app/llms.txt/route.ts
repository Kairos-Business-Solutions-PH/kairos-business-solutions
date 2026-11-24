import { faqs, processSteps, services, site } from "@/lib/site";

export const dynamic = "force-static";

// Plain-text summary for LLM-based search/answer engines (https://llmstxt.org).
export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} (${site.shortName}) is a business consultancy. Tagline: "${site.tagline}"

## Services
${services.map((s) => `- ${s.title}: ${s.text}`).join("\n")}

## How we work
${processSteps.map((p, i) => `${i + 1}. ${p.title}: ${p.text}`).join("\n")}

## FAQ
${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Links
- [Home](${site.url}/): overview of services, process and contact
- [Sitemap](${site.url}/sitemap.xml)

## Contact
- Email: ${site.email}
- Web: ${site.url}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
