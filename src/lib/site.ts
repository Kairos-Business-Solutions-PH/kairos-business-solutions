// Single source of truth for site-wide content, SEO and structured data.
// NOTE: service/process/FAQ copy and the contact email are DRAFT placeholders — review before launch.

export const site = {
  name: "Kairos Business Solutions",
  shortName: "Kairos",
  url: "https://kairosbusinesssolutions.com",
  email: "hello@kairosbusinesssolutions.com",
  tagline: "The right solution, at the right moment.",
  description:
    "Kairos Business Solutions helps growing businesses turn strategy into results with consulting, process optimization and digital transformation.",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
] as const;

export type ServiceIcon = "strategy" | "process" | "digital" | "data" | "operations" | "growth";

export const services: { icon: ServiceIcon; title: string; text: string }[] = [
  {
    icon: "strategy",
    title: "Business Strategy & Consulting",
    text: "Clear direction, realistic roadmaps and measurable goals so every decision moves the business forward.",
  },
  {
    icon: "process",
    title: "Process Optimization",
    text: "Map, simplify and standardize workflows to remove waste, cut cycle times and free your team's capacity.",
  },
  {
    icon: "digital",
    title: "Digital Transformation",
    text: "Select and implement the right tools and automation, without over-engineering or vendor lock-in.",
  },
  {
    icon: "data",
    title: "Data & Reporting",
    text: "Dashboards and KPIs that turn scattered data into timely, trusted insight for leadership.",
  },
  {
    icon: "operations",
    title: "Operations Support",
    text: "Hands-on help with day-to-day operations, project delivery and vendor coordination.",
  },
  {
    icon: "growth",
    title: "Growth Advisory",
    text: "Structured plans for new markets, offers and partnerships, tested before you scale them.",
  },
];

export const processSteps = [
  { title: "Discover", text: "We listen first: goals, constraints, current processes and where time is being lost." },
  { title: "Design", text: "We shape a practical plan with priorities, owners, timelines and success measures." },
  { title: "Deliver", text: "We implement alongside your team in short cycles, so results show up early." },
  { title: "Improve", text: "We track outcomes, refine what works and hand over with clear documentation." },
] as const;

export const faqs = [
  {
    q: "What does Kairos Business Solutions do?",
    a: "Kairos Business Solutions is a business consultancy that helps organizations improve strategy, streamline processes, adopt the right technology and run operations more effectively.",
  },
  {
    q: "Who do you work with?",
    a: "We work mainly with small and mid-sized businesses that are growing and need structure, clarity and capacity, without the overhead of a large consulting firm.",
  },
  {
    q: "How does an engagement start?",
    a: "With a short discovery conversation. We learn about your goals and challenges, then propose a scoped plan with timelines and deliverables before any work begins.",
  },
  {
    q: "Where does the name Kairos come from?",
    a: "Kairos is the Greek word for the opportune moment. Our work is about helping you act on the right priorities at the right time.",
  },
  {
    q: "How can I get in touch?",
    a: `Use the contact form on this page or email ${site.email}. We usually reply within one business day.`,
  },
] as const;
