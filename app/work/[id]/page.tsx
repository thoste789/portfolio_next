import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import Footer from "@/components/footer";
import { Project } from "@/types/project";
import { PageTitle } from "@/components/page-title";

export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id) as Project | undefined;

  if (!project) notFound();

  const challenges = project.challenges || [];
  const researchStats = project.researchStats || [];
  const phases = project.phases || [];
  const metrics = project.metrics || [];

  return (
    <main className="font-manrope pt-20 ">
      {/* Page Header */}
      <section className="pt-20 px-6 md:px-20 ">
        <p className="text-[11px] text-[#999999] tracking-[0.3em] uppercase mb-6">
          ALL WORK
        </p>
        <PageTitle title={project.title} />

        <h3 className="text-xl font-light text-[#1a1c1c] uppercase leading-[1.2] tracking-[0.1em] mb-8">
          {project.subtitle}
        </h3>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Description */}
          <div className="flex-1 max-w-150 flex gap-4">
            <div className="w-0.5 bg-[#ff5722] self-stretch shrink-0" />
            <p className="text-lg text-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-col gap-4 min-w-50">
            <div>
              <p className="text-sm font-bold text-primary mb-1">MY ROLE</p>
              <p className="text-base text-[#1a1c1c]">{project.role}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">METHODS</p>
              <p className="text-base text-[#1a1c1c]">
                {(project.methods ?? []).join(", ")}
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* Hero Image */}
      <div className="px-6 md:px-20 pb-0 py-20">
        <div className="relative w-full h-screen rounded-xl overflow-hidden bg-[#e8e9eb]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* The Challenge */}
      <section className="px-20 py-20 flex gap-12 items-start">
        <div className="flex flex-col gap-8 flex-1">
          <h2
            className="text-5xl font-semibold text-primary leading-none tracking-tight"
          >
            The Challenge
          </h2>
          <p className="text-lg text-foreground leading-[1.7] max-w-150">
            {project.problem}
          </p>
          {/* Challenges */}
          {challenges.length > 0 && (
            <div className="flex flex-col gap-2">
              {challenges.map((c) => (
                <p key={c} className="text-[15px] font-semibold text-[#1a1c1c]">
                  {c}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Research & Discovery */}
      {project.process && (
        <section className="px-20 py-20 bg-[#f3f3f3]">
          <p className="text-[11px] text-[#999999] tracking-[0.3em] uppercase mb-4">
            RESEARCH & DISCOVERY
          </p>
          <h2
            className="text-5xl font-semibold text-primary tracking-tight mb-12"
          >
            Understanding the Problem
          </h2>
          <div className="flex gap-12">
            <p
              className="text-base text-[#1a1c1c] leading-[1.7] flex-1 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: project.process }}
            />
            {researchStats.length > 0 && (
              <div className="flex flex-col gap-4 flex-shrink-0 w-85">
                {researchStats.map((s) => (
                  <div
                    key={s.num}
                    className="bg-white rounded p-8 flex flex-col gap-2"
                  >
                    <span className="text-4xl font-semibold text-primary leading-none">
                      {s.num}
                    </span>
                    <span className="text-sm text-foreground leading-[1.5]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Design Process */}
      {phases.length > 0 && (
        <section className="px-20 py-20 bg-[#f9f9f9]">
          <p className="text-[11px] text-[#999999] tracking-[0.3em] uppercase mb-4">
            DESIGN PROCESS
          </p>
          <h2
            className="text-5xl font-semibold text-primary leading-[1.05] tracking-tight mb-4"
          >
            From Insight
            <br />
            to Interface
          </h2>
          <p className="text-base text-foreground leading-[1.7] max-w-170 mb-12">
            {project.solution}
          </p>
          <div className="flex gap-8">
            {phases.map((ph, i) => (
              <div
                key={ph.num}
                className={`flex-1 rounded p-8 flex flex-col gap-4 ${
                  i % 2 === 0 ? "bg-[#f3f3f3]" : "bg-white"
                }`}
              >
                <span className="text-4xl font-semibold text-primary leading-none">
                  {ph.num}
                </span>
                <h3 className="text-xl font-semibold text-foreground leading-[1.3] whitespace-pre-line">
                  {ph.title}
                </h3>
                <p className="text-sm text-foreground leading-[1.7]">
                  {ph.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Results & Impact */}
      {metrics.length > 0 && (
        <section className="px-20 py-20 bg-[#f9f9f9]">
          <p className="text-[11px] text-[#999999] tracking-[0.3em] uppercase mb-4">
            RESULTS & IMPACT
          </p>
          <h2
            className="text-5xl font-semibold text-primary leading-[1.05] tracking-tight mb-4"
          >
            Measurable
            <br />
            Outcomes
          </h2>
          <p className="text-base text-foreground leading-[1.7] max-w-170 mb-12">
            {project.results}
          </p>

          <div className="flex gap-0 mb-8">
            {metrics.map((m, i) => (
              <div
                key={m.val}
                className={`flex-1 p-10 flex flex-col gap-3 rounded ${
                  i % 2 === 0 ? "bg-white" : "bg-[#f3f3f3]"
                }`}
              >
                <span
                  className="text-5xl font-semibold text-primary leading-none tracking-tight"
                >
                  {m.val}
                </span>
                <span className="text-sm text-foreground leading-[1.5] whitespace-pre-line">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {project.quote && (
            <div className="bg-white rounded p-16">
              <p
                className="text-xl font-medium text-[#1a1c1c] leading-[1.7] w-full"
                dangerouslySetInnerHTML={{ __html: `${project.quote}` }}
              />
            </div>
          )}
        </section>
      )}

      {/* Next Project */}
      <div className="px-20 py-12 flex items-center justify-end border-t border-[#e0e0e0]">
        <Link
          href="/work"
          className="text-2xl font-semibold text-primary tracking-tight hover:opacity-70 transition-opacity"
        >
          View All Work →
        </Link>
      </div>

      <Footer />
    </main>
  );
}
