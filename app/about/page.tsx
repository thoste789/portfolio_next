import Footer from "@/components/footer";
import { PageTitle } from "@/components/page-title";

const experience = [
  {
    role: "Head of UI/UX Design",
    company: "Vydia",
    location: "Holmdel, NJ",
    period: "Oct 2016 – Present",
    bullets: [
      "Led the strategy, evolution, and maintenance of a comprehensive design system and React-based component library, enabling consistent, pixel-perfect implementation and scalable high-quality experiences across a platform serving millions of users.",
      "Scaled and managed a cross-functional design team, implementing design thinking frameworks, shared libraries, and governance processes that drove widespread adoption and reduced design-to-dev handoff time.",
      "Partnered closely with Product, Engineering, and brand stakeholders to define system vision/roadmap, translate brand values into actionable components/patterns, and ensure cohesive, accessible experiences aligned with business priorities.",
      "Championed design quality standards through critiques, reviews, documentation, and metrics-driven iteration (analytics + user feedback), improving engagement, retention, and conversion rates.",
      "Directed platform-wide redesigns with a mobile-first, accessibility-focused approach, emphasizing user trust and seamless cross-platform interactions.",
      "Mentored designers, fostered a culture of craftsmanship/collaboration/continuous improvement, and advocated for user-centered practices organization-wide.",
      "Built, mentored, and retained a high-performing design team, providing growth opportunities, regular feedback, and professional development to elevate craft and innovation.",
      "Led recruitment and onboarding of design talent to support design system evolution and platform scalability.",
    ],
  },
  {
    role: "Head of Design",
    company: "Yashi",
    location: "Toms River, NJ",
    period: "Jun 2014 – Nov 2016",
    bullets: [
      "Built and led the design team responsible for cohesive branding, platform UX, and multimodal product experiences.",
      "Re-architected the product interface based on user research insights, improving workflow efficiency and teamwork between sales and engineering.",
      "Produced high-fidelity prototypes and end-to-end user journeys that accelerated stakeholder approvals and improved user retention.",
      "Spearheaded a major product redesign emphasizing simplicity, modern visual storytelling, and accessibility across devices.",
    ],
  },
  {
    role: "Senior Developer",
    company: "SEMGeeks",
    location: "Belmar, NJ",
    period: "Nov 2011 – Jul 2014",
    bullets: [
      "Designed and developed responsive, dynamic web experiences for multiple major CMS platforms (Drupal, Magento, WordPress).",
      "Established scalable QA and design–dev workflows improving release efficiency by 25%.",
      "Combined technical fluency with design execution, ensuring brand integrity and performance across platforms.",
    ],
  },
];

const skills = [
  {
    category: "Design",
    items: [
      "Product Design",
      "UX Research",
      "Design Systems",
      "Interaction Design",
      "Information Architecture",
      "Prototyping",
      "Accessibility",
      "AI Design"
    ],
  },
  {
    category: "Tools",
    items: ["Figma","Claude Code", "Framer", "Webflow", "Adobe CC", "Storybook", "Zeplin"],
  },
  {
    category: "Development",
    items: ["HTML / CSS", "Tailwind CSS", "React", "Next.js", "TypeScript", "Wordpress", "Shopify"],
  },
  {
    category: "Strategy",
    items: [
      "Product Strategy",
      "OKR Frameworks",
      "Stakeholder Management",
      "Workshop Facilitation",
      "A/B Testing",
    ],
  },
];

export default function About() {
  return (
    <main className="bg-[#f9f9f9] pt-20">
      {/* Page Header */}
      <section className="pt-20 px-6 md:px-20 py-12 md:py-20">
        <p className="text-[10px] text-[#666666] tracking-[0.3em] uppercase mb-6">
          ABOUT ME
        </p>
        <PageTitle title="Learn More" />
        <p className="text-base text-[#666666] leading-relaxed max-w-[560px]">
          I’m a product-first designer who thinks like a business owner. For the
          past 15+ years, I’ve been building digital products that drive real
          business impact — from early-stage startups to Fortune 500 companies.
          <br />
          <br />
          My approach combines deep UX research, clean visual design, and a
          strong understanding of business strategy. I don’t just make things look
          good — I design systems that solve complex problems, improve
          efficiency, and deliver measurable results.
        </p>
      </section>

      {/* Resume & Skills */}
      <section className="px-6 md:px-20 pb-16 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Left — Experience */}
        <div>
          <p className="text-[10px] text-[#666666] tracking-[0.3em] uppercase mb-10">
            EXPERIENCE
          </p>
          <div className="flex flex-col divide-y divide-[#e5e5e5]">
            {experience.map((job) => (
              <div key={job.company} className="py-8 first:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1 gap-1">
                  <div>
                    <p className="text-sm font-semibold text-[#1a1c1c] tracking-tight">{job.role}</p>
                    <p className="text-sm text-[#666666]">{job.company} &mdash; {job.location}</p>
                  </div>
                  <span className="text-[10px] text-[#999999] tracking-[0.15em] uppercase shrink-0 sm:ml-6 sm:mt-0.5">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-3 flex flex-col gap-1.5 list-disc list-outside ml-4">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-[#666666] leading-relaxed">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Skills */}
        <div>
          <p className="text-[10px] text-[#666666] tracking-[0.3em] uppercase mb-10">
            SKILLS
          </p>
          <div className="flex flex-col gap-10">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-[10px] text-[#999999] tracking-[0.2em] uppercase mb-4">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-[#1a1c1c] border border-[#e5e5e5] px-3 py-1.5 tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
