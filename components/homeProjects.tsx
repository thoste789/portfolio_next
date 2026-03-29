"use client";

import React from 'react';
import projectsData from '../data/projects.json';
import Container from './base/container';
import ProjectCard from './projectCard';
import { Project } from '@/types/project';

export default function HomeProjects() {
  const projects: Project[] = projectsData as Project[];

  return (
    <section className="w-full bg-black py-32" id="work">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500 mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Designing Impactful SaaS Experiences
            </h3>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed mb-1">
            Guiding teams to build scalable SaaS products that users love and businesses grow from.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 border border-gray-100 dark:border-white/10 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 font-bold text-sm tracking-wide">
            VIEW ALL RECENT WORK
          </button>
        </div>
      </Container>
    </section>
  );
}