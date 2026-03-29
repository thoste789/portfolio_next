"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-black border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Link 
            href={`/work/${project.id}`}
            className="flex items-center gap-2 text-white font-bold text-sm bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors"
          >
            View Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider text-orange-500/80 bg-orange-500/25 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-xl uppercase font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
            {project.title}
          </h3>
          <h4 className="text-sm uppercase font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
            {project.subtitle}
          </h4>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Footer Links */}
        <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-auto">
          <span className="text-xs font-medium text-gray-400">{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
