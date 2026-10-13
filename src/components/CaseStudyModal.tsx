import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, User, Target, Lightbulb, Compass, Smartphone, Monitor } from 'lucide-react';
import { Project } from '../types/portfolio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-[#A78BFA]/30 bg-[#0E0E17] shadow-2xl overflow-hidden">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#A78BFA]/20 bg-[#08080D]/95 px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8B5CF6] uppercase tracking-wider">
              CASE STUDY EXPLORATION
            </span>
            <span className="text-[#A1A1B5]" aria-hidden="true">
              ·
            </span>
            <span className="text-xs text-[#A1A1B5]">{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            {caseStudy.prototypeUrl && (
              <a
                href={caseStudy.prototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-[#A78BFA]/30 bg-[#171722] px-3 py-1.5 text-xs font-medium text-[#C4B5FD] hover:bg-[#8B5CF6]/20 transition-colors"
              >
                <span>Figma Prototype</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171722] text-[#A1A1B5] hover:bg-[#8B5CF6]/20 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10">
          {/* Hero Banner inside modal */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1B5] mb-2">
              <span className="font-semibold text-[#C4B5FD]">{project.platform}</span>
              <span aria-hidden="true">·</span>
              <span>Year {project.year}</span>
              {project.isConcept && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-400 font-mono">Concept Specification</span>
                </>
              )}
            </div>

            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}: {project.subtitle}
            </h2>

            <p className="mt-3 text-base text-[#A1A1B5] leading-relaxed">
              {caseStudy.overview}
            </p>

            {/* High-res Showcase Image */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#A78BFA]/25 bg-[#171722] shadow-lg">
              <img
                src={project.image}
                alt={`${project.title} final UI design showcase`}
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Problem & Design Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem Statement */}
            <div className="rounded-xl border border-rose-500/20 bg-[#141019] p-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400 mb-3">
                <Target className="h-4 w-4" />
                <span>The Problem Statement</span>
              </div>
              <p className="text-sm text-[#F8FAFC] leading-relaxed">
                {caseStudy.problemStatement}
              </p>
            </div>

            {/* Design Goals */}
            <div className="rounded-xl border border-[#8B5CF6]/25 bg-[#12111E] p-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C4B5FD] mb-3">
                <Lightbulb className="h-4 w-4" />
                <span>Core Design Goals</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#A1A1B5]">
                {caseStudy.designGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#F8FAFC]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Target Users & Personas */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-4">
              <User className="h-4 w-4" />
              <span>Target Users & Personas</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.targetUsers.map((user, idx) => (
                <div key={idx} className="rounded-xl border border-[#A78BFA]/18 bg-[#171722]/80 p-5">
                  <div className="text-sm font-bold text-white">{user.persona}</div>
                  <div className="text-xs text-[#8B5CF6] mt-0.5 font-medium">{user.role}</div>
                  <p className="mt-3 text-xs text-[#A1A1B5] leading-relaxed">
                    <strong className="text-slate-300">Key Pain Point:</strong> {user.painPoint}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* User Flow Architecture */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-4">
              <Compass className="h-4 w-4" />
              <span>Key User Flow & Happy Path</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {caseStudy.userFlowSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-[#A78BFA]/15 bg-[#11111A] p-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#8B5CF6]">Step 0{step.step}</span>
                    <h4 className="text-sm font-semibold text-white mt-1">{step.action}</h4>
                    <p className="mt-2 text-xs text-[#A1A1B5] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wireframes & Final UI Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#A78BFA]/15 pt-8">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-[#C4B5FD]">
                Wireframing & IA Blueprint
              </h4>
              <p className="text-xs text-[#A1A1B5] leading-relaxed">
                {caseStudy.wireframeNotes}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-[#C4B5FD]">
                Visual UI & Design System Execution
              </h4>
              <p className="text-xs text-[#A1A1B5] leading-relaxed">
                {caseStudy.finalScreensNotes}
              </p>
            </div>
          </div>

          {/* Key Design Decisions */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-4">
              <span>DESIGN DECISIONS & RATIONALE</span>
            </div>
            <div className="space-y-3">
              {caseStudy.designDecisions.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-[#A78BFA]/18 bg-[#171722]/60 p-4">
                  <div className="text-sm font-semibold text-white">
                    {idx + 1}. {item.decision}
                  </div>
                  <div className="text-xs text-[#A1A1B5] mt-1.5 leading-relaxed">
                    <span className="text-[#8B5CF6] font-medium">Why: </span>
                    {item.rationale}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Measured Outcomes */}
          <div className="rounded-xl border border-[#8B5CF6]/30 bg-gradient-to-r from-[#171722] to-[#12111E] p-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C4B5FD] mb-3">
              Deliverables & System Artifacts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseStudy.metricsOrOutcomes.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] shrink-0" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-[#A78BFA]/20 bg-[#08080D] px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-[#A1A1B5]">
            Interested in implementing a similar architecture for your product?
          </span>
          <button
            onClick={onClose}
            className="rounded-lg bg-[#8B5CF6] px-4 py-2 text-xs font-semibold text-white hover:bg-[#7C3AED] transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
