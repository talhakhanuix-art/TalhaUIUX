import React from 'react';
import { PERSONAL_INFO, SKILLS, TOOLS } from '../data/portfolioData';
import { Sparkles, Terminal, CheckCircle2, Monitor } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-[#A78BFA]/15 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-2">
            <span>ABOUT ME</span>
            <span aria-hidden="true">·</span>
            <span>PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Design Engineered for People & Business Impact
          </h2>
        </div>

        {/* 2-Column Story & Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Intro copy & Story */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg text-white font-medium leading-relaxed">
              {PERSONAL_INFO.aboutIntro}
            </p>

            <p className="text-sm text-[#A1A1B5] leading-relaxed">
              Every interface I craft starts by asking the right human questions before pushing pixels. By bridging business objectives with empathetic user research, I transform complex technical flows into effortless, elegant digital touchpoints.
            </p>

            <p className="text-sm text-[#A1A1B5] leading-relaxed">
              Whether building an enterprise SaaS dashboard from the ground up, designing a mobile fintech wallet with biometric safety, or developing an atomic Figma token library, I strive for visual purity, tactile micro-interactions, and flawless usability across every device.
            </p>

            {/* Quick Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-[#A78BFA]/20 bg-[#171722]/60 p-4">
                <span className="text-xs font-mono text-[#8B5CF6] uppercase">01. Principle</span>
                <h4 className="text-sm font-semibold text-white mt-1">Clarity Over Cleverness</h4>
                <p className="text-xs text-[#A1A1B5] mt-1">Intuitive interactions that never force users to guess what happens next.</p>
              </div>

              <div className="rounded-xl border border-[#A78BFA]/20 bg-[#171722]/60 p-4">
                <span className="text-xs font-mono text-[#8B5CF6] uppercase">02. Principle</span>
                <h4 className="text-sm font-semibold text-white mt-1">Systematic Scalability</h4>
                <p className="text-xs text-[#A1A1B5] mt-1">Components and design tokens structured for frictionless developer implementation.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Workspace Photography */}
          <div className="lg:col-span-6 relative">
            <div className="overflow-hidden rounded-2xl border border-[#A78BFA]/25 bg-[#171722] shadow-2xl p-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#11111A]">
                <img
                  src="/src/assets/images/about_workspace_studio_1791919463771.jpg"
                  alt="Talha UIUX modern design workspace with dual monitors displaying Figma UI systems"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080D]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-[#8B5CF6]" />
                    <span className="font-medium">Design Studio Environment</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#A1A1B5]">Figma & System Prototyping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section (No fake percentages as required) */}
        <div className="mt-16 pt-12 border-t border-[#A78BFA]/15">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-wider">CORE CAPABILITIES</span>
              <h3 className="text-2xl font-bold text-white mt-1">Skills & Domain Expertise</h3>
            </div>
            <span className="text-xs text-[#A1A1B5] hidden sm:inline">
              Evidence-based & systematically documented
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl border border-[#A78BFA]/18 bg-[#171722]/60 p-5 transition-all hover:border-[#8B5CF6]/50 hover:bg-[#171722]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#C4B5FD]">{skill.category}</span>
                  <CheckCircle2 className="h-4 w-4 text-[#8B5CF6]" />
                </div>
                <h4 className="text-base font-bold text-white">{skill.name}</h4>
                <p className="mt-2 text-xs text-[#A1A1B5] leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Technologies */}
        <div className="mt-12 pt-10 border-t border-[#A78BFA]/15">
          <div className="mb-6">
            <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-wider">TOOL STACK</span>
            <h3 className="text-xl font-bold text-white mt-1">Tools & Platforms</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-[#A78BFA]/15 bg-[#11111A] p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-white">{tool.name}</span>
                    <span className="text-[10px] font-mono text-[#8B5CF6] bg-[#8B5CF6]/15 px-2 py-0.5 rounded">
                      {tool.badge}
                    </span>
                  </div>
                  <div className="text-xs text-[#C4B5FD] mt-0.5">{tool.category}</div>
                  <p className="text-xs text-[#A1A1B5] mt-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
