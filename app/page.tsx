import Link from "next/link";
import projectsData from "@/data/projects.json";
import Footer from "@/components/footer";
import { Project } from "@/types/project";

const projects = projectsData.slice(0, 4) as Project[];

const stats = [
  { num: "12+", label: "YEARS EXPERIENCE" },
  { num: "20+", label: "PRODUCTS LAUNCHED" },
  { num: "2", label: "SUCCESSFUL EXITS" },
  { num: "1", label: "NJBIZ DIGITAL INNOVATOR AWARD" },
];

const services = [
  {
    num: "01",
    title: "UX Research\n& Strategy",
    desc: "User interviews, competitive analysis, journey mapping, and strategic frameworks that ground every design decision in evidence.",
  },
  {
    num: "02",
    title: "Interface\nDesign",
    desc: "Pixel-precise UI design for web and mobile. High-fidelity prototypes, interaction design, and design systems built for scale.",
  },
  {
    num: "03",
    title: "Design\nSystems",
    desc: "Scalable component libraries, design tokens, and governance models. Building the foundation for consistent product experiences.",
  },
  {
    num: "04",
    title: "Creative\nDirection",
    desc: "Brand strategy, visual identity, and art direction. Aligning aesthetics with business goals for lasting impact.",
  },
];

const faqs = [
  {
    q: "How do you build and scale design teams?",
    a: "I hire for craftsmanship and curiosity, then build with clear rituals: regular design critiques, documented principles, and shared quality standards. At Vydia I scaled the design function from a solo IC role into a cross-functional team embedded with product and engineering — establishing the culture and process that survived two acquisitions.",
  },
  {
    q: "How do you measure design impact?",
    a: "I tie design outcomes directly to business metrics — not just task completion rates. At Vydia we tracked upload time reduction (62%), delivery success rates (31% increase), and development handoff efficiency (65% reduction). Impact without data is just opinion.",
  },
  {
    q: "How do you partner with product and engineering?",
    a: "I establish shared rituals: embedded sprint participation, joint discovery sessions, and a shared definition of done that includes design quality gates. The best product outcomes happen when design isn't a handoff — it's a continuous conversation. I've led cross-functional teams across multiple platforms serving millions of users.",
  },
  {
    q: "What's your approach to design systems governance?",
    a: "A design system is a product, not a deliverable. I establish ownership models, contribution frameworks, and regular audits. At Vydia I architected a 120+ component library with documented tokens and governance that reduced development handoff time by 65% and became a core part of the acquisition value.",
  },
  {
    q: "How do you advocate for UX at the executive level?",
    a: "I speak in outcomes, not deliverables. Instead of 'we need more research time,' I frame it as 'here's the revenue risk of shipping without validation.' I've presented design strategy to boards, participated in acquisition due diligence, and partnered directly with C-suite on product vision at both Vydia and Yashi.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f9f9f9]">
      {/* Hero */}
      <section className="pt-20">
        <div className="px-6 md:px-20 pt-30 pb-30">
          <h1 className="font-mono text-5xl md:text-6xl lg:text-8xl font-extralight leading-none text-[#1a1c1c] mb-8 tracking-tight">
            Head 
            <br />
            of UI/UX Design
          </h1>
          <p className="text-base text-[#666666] leading-relaxed mb-10 max-w-2xl">
            Design leader building product teams, design systems, and digital products that drive measurable business outcomes — two successful exits.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/work"
              className="bg-[#1a1c1c] text-white text-sm font-bold px-8 py-4 hover:bg-[#333333] transition-colors tracking-widest"
            >
              VIEW WORK
            </Link>
            <Link
              href="/about"
              className="border border-[#1a1c1c] text-[#1a1c1c] text-sm font-bold px-8 py-4 hover:bg-[#1a1c1c] hover:text-white transition-colors tracking-widest"
            >
              ABOUT ME
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#1a1c1c] px-6 md:px-20 py-16">
        <div className="grid grid-cols-2 md:flex w-full flex-col md:flex-row gap-6 justify-between">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 flex-1">
              <span className="font-mono text-4xl md:text-5xl font-extralight text-white leading-none">
                {s.num}
              </span>
              <span className="text-xs text-center text-white tracking-wider uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-6 md:px-20 py-20">
        <div className="flex items-center justify-between mb-12">
          <span className="text-xs text-[#666666] tracking-widest uppercase">
            SELECTED WORK
          </span>
          <Link
            href="/work"
            className="text-sm text-[#1a1c1c] hover:opacity-50 transition-opacity tracking-widest"
          >
            VIEW ALL
          </Link>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Link
              key={p.id}
              href={`/work/${p.id}`}
              className="min-h-[420px] md:h-105 flex flex-col justify-end p-8 md:p-12 group transition-opacity hover:opacity-90"
              style={{ backgroundColor: p.color || "#1a1c1c" }}
            >
              <span className="text-xs text-white tracking-widest uppercase mb-4 opacity-70">
                {p.category || p.tags[0]?.toUpperCase()}
              </span>
              <h3 className="font-mono text-2xl md:text-3xl font-extralight text-white leading-none mb-4">
                {p.title.toUpperCase()}
              </h3>
              <p className="text-sm text-white leading-relaxed max-w-120 mb-4 opacity-80">
                {p.description}
              </p>
              <span className="text-sm text-white font-bold tracking-widest">
                VIEW CASE STUDY ↗
              </span>
            </Link>
          ))}

          
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-20 border-t border-[#e0e0e0]">
        <div className="flex flex-col items-start md:flex-row justify-between items-end mb-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs text-[#666666] tracking-widest uppercase">
              SERVICES
            </span>
            <h2 className="font-mono text-4xl md:text-5xl font-extralight text-[#1a1c1c] leading-none">
              What I Do
            </h2>
          </div>
          <p className="text-sm text-[#666666] leading-relaxed w-full pt-6 md:pt-0 md:max-w-xs text-left md:text-right">
            Crafting digital products from concept to launch. Every project
            receives strategic thinking and meticulous execution.
          </p>
        </div>
        <div className="w-full h-px bg-[#e0e0e0] mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.num}
              className="flex flex-col gap-4 border-b md:border-b-0 md:border-r border-[#e0e0e0] last:border-r-0 p-6 md:p-8"
            >
              <span className="font-mono text-sm font-extralight text-[#999999]">
                {s.num}
              </span>
              <h3 className="font-mono text-2xl font-extralight text-[#1a1c1c] leading-[1.2] whitespace-pre-line">
                {s.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-20 py-20 border-t border-[#e0e0e0]">
        <div className="flex flex-wrap justify-between items-end mb-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs text-[#666666] tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="font-mono text-4xl md:text-5xl font-extralight text-[#1a1c1c] leading-none">
              Common Questions
            </h2>
          </div>
          <p className="text-sm text-[#666666] leading-relaxed w-full pt-6 md:pt-0 md:max-w-xs text-left md:text-right">
            How I think about teams, systems, and design leadership.
          </p>
        </div>
        <div className="w-full h-px bg-[#e0e0e0]" />
        <div className="flex flex-col">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-[#e0e0e0]">
              <summary className="flex items-center justify-between py-6 cursor-pointer list-none select-none">
                <span className="text-[#1a1c1c] font-medium text-base">
                  {faq.q}
                </span>
                <span className="text-[#666666] text-xl font-light group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="text-[#666666] text-sm leading-relaxed pb-6 max-w-2xl">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
