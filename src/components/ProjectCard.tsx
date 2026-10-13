import React from 'react';
import { ArrowUpRight, Smartphone, LayoutDashboard, Gamepad2 } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getPlatformIcon = (platform: Project['platform']) => {
    switch (platform) {
      case 'Mobile App':
        return <Smartphone className="h-3.5 w-3.5 text-[#C4B5FD]" />;
      case 'Web App / SaaS':
        return <LayoutDashboard className="h-3.5 w-3.5 text-[#C4B5FD]" />;
      case 'Game UI':
        return <Gamepad2 className="h-3.5 w-3.5 text-[#C4B5FD]" />;
    }
  };

  return (
    <article
      onClick={() => onSelect(project)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#A78BFA]/18 bg-[#171722]/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 hover:shadow-[0_12px_35px_-10px_rgba(139,92,246,0.3)] cursor-pointer"
    >
      {/* Top Media Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#11111A]">
        <img
          src={project.image}
          alt={`${project.title} - ${project.category} mockup preview`}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="h-full w-full flex flex-col items-center justify-center p-6 bg-[#11111A] text-center">
                  <div class="text-sm font-semibold text-[#C4B5FD]">${project.title}</div>
                  <div class="text-xs text-[#A1A1B5] mt-1">${project.category}</div>
                </div>
              `;
            }
          }}
        />

        {/* Hover overlay sheen */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171722] via-[#171722]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Floating Badge Bar */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded-md bg-[#08080D]/80 px-2.5 py-1 text-[11px] font-medium text-[#C4B5FD] backdrop-blur-md border border-[#A78BFA]/20">
            {getPlatformIcon(project.platform)}
            <span>{project.platform}</span>
          </div>

          {project.isConcept && (
            <span className="rounded-md bg-[#171722]/90 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[#A1A1B5] border border-[#A78BFA]/20 backdrop-blur-md">
              Concept Project
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Quiet unboxed metadata */}
          <div className="flex items-center gap-2 text-xs text-[#A1A1B5] mb-2">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-[#C4B5FD] transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm text-[#A1A1B5] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Bottom tags & View Case Study trigger */}
        <div className="mt-6 flex items-center justify-between border-t border-[#A78BFA]/15 pt-4">
          <div className="flex flex-wrap items-center gap-1 text-[11px] text-[#A1A1B5]">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={tag}>
                {tag}
                {i < Math.min(project.tags.length - 1, 2) && <span className="mx-1 text-[#8B5CF6]/50">·</span>}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B5CF6] group-hover:text-[#C4B5FD] group-hover:translate-x-0.5 transition-all">
            <span>Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
};
