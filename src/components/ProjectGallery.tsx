import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { Info } from 'lucide-react';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Mobile App' | 'Web App / SaaS' | 'Game UI'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'Mobile App', label: 'Mobile Apps' },
    { id: 'Web App / SaaS', label: 'SaaS & Web' },
    { id: 'Game UI', label: 'Game Interfaces' },
  ] as const;

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.platform === activeFilter);

  return (
    <section id="work" className="py-16 md:py-24 border-t border-[#A78BFA]/15 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-2">
              <span>SELECTED WORKS</span>
              <span aria-hidden="true">·</span>
              <span>PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Case Studies & Concepts
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#A1A1B5] max-w-xl">
              High-fidelity product design explorations highlighting end-to-end design thinking, user flows, and scalable Figma systems.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#11111A] border border-[#A78BFA]/20 rounded-xl overflow-x-auto self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-[#8B5CF6] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                    : 'text-[#A1A1B5] hover:text-white hover:bg-[#171722]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Concept Transparency Notice */}
        <div className="mb-8 flex items-center gap-2.5 rounded-xl border border-[#A78BFA]/18 bg-[#171722]/50 px-4 py-2.5 text-xs text-[#A1A1B5]">
          <Info className="h-4 w-4 text-[#8B5CF6] shrink-0" />
          <span>
            <strong className="text-[#C4B5FD] font-semibold">Concept Transparency:</strong> The projects showcased here are exploratory design concepts developed to showcase problem-solving and UI architecture until my client-contracted work is declassified.
          </span>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
