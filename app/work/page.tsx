import Link from "next/link";
import projectsData from "@/data/projects.json";
import Footer from "@/components/footer";
import { Project } from "@/types/project";
import { PageTitle } from "@/components/page-title";

const projects = projectsData as Project[];

export default function Work() {
  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="pt-20 px-20 py-20">
        <p className="text-[10px] text-[#666666] tracking-[0.3em] uppercase mb-6">
          ALL WORK
        </p>
        <PageTitle title="Projects" />
        <p className="text-base text-[#666666] leading-relaxed max-w-[600px]">
          A curated collection of product design, design systems, and brand work
          — spanning mobile, web, and enterprise.
        </p>
      </section>

      {/* Project Grid */}
      <div className="px-20 pb-20 flex flex-col gap-0">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex">
            {row.map((p) => (
              <Link
                key={p.id}
                href={`/work/${p.id}`}
                className="flex-1 h-105 flex flex-col justify-end p-12 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: p.color || "#1a1c1c" }}
              >
                <span className="text-[10px] text-white tracking-[0.3em] uppercase mb-4 opacity-70">
                  {p.category || p.tags[0]?.toUpperCase()}
                </span>
                <h3 className="font-mono text-[32px] font-extralight text-white leading-none mb-4">
                  {p.title.toUpperCase()}
                </h3>
                <p className="text-sm text-white leading-relaxed max-w-120 mb-4 opacity-80">
                  {p.description}
                </p>
                <span className="text-[13px] text-white font-bold tracking-[0.1em]">
                  VIEW PROJECT ↗
                </span>
              </Link>
            ))}
            {/* Fill empty slot if odd number */}
            {row.length === 1 && (
              <div className="flex-1 h-105 bg-[#f3f3f3]" />
            )}
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
