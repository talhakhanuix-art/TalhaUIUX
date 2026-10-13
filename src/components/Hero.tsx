import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, ShieldCheck, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContact }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[800px] max-w-full rounded-full bg-gradient-to-tr from-[#8B5CF6]/15 via-[#6366F1]/10 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute -top-40 right-10 h-80 w-80 rounded-full bg-[#8B5CF6]/10 blur-[90px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker & Authentic Availability */}
            <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
              <span className="font-mono tracking-wider uppercase text-[#C4B5FD] font-semibold">
                {PERSONAL_INFO.titleKicker}
              </span>
              <span className="text-[#A1A1B5]" aria-hidden="true">
                ·
              </span>
              <div className="inline-flex items-center gap-1.5 text-[#A1A1B5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
            </div>

            {/* Headline with balanced wrapping */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl text-balance">
              Designing Digital{' '}
              <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
                Experiences
              </span>{' '}
              Beyond the Ordinary.
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-6 text-base sm:text-lg text-[#A1A1B5] leading-relaxed max-w-xl">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 rounded-xl bg-[#8B5CF6] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:bg-[#7C3AED] transition-all"
              >
                <span>{PERSONAL_INFO.primaryCta}</span>
                <ArrowDown className="h-4 w-4" />
              </button>

              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 rounded-xl border border-[#A78BFA]/30 bg-[#171722]/80 px-6 py-3.5 text-sm font-medium text-[#F8FAFC] hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition-all"
              >
                <span>{PERSONAL_INFO.secondaryCta}</span>
                <ArrowUpRight className="h-4 w-4 text-[#A78BFA]" />
              </button>
            </div>

            {/* Quick Specializations Line */}
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#A1A1B5] border-t border-[#A78BFA]/15 pt-6">
              <span className="text-white font-medium">Core Focus:</span>
              <span>Mobile Apps (iOS & Android)</span>
              <span aria-hidden="true">·</span>
              <span>SaaS Dashboards</span>
              <span aria-hidden="true">·</span>
              <span>Figma Design Systems</span>
              <span aria-hidden="true">·</span>
              <span>Tactical Game UI</span>
            </div>
          </div>

          {/* Right Column: Professional Portrait Visual Container */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Subtle violet ambient ring behind portrait */}
            <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-tr from-[#8B5CF6]/25 to-[#6366F1]/10 blur-2xl opacity-70" />

            {/* Card Frame with refined glassmorphism */}
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#A78BFA]/25 bg-[#171722]/90 shadow-2xl p-2.5">
              {/* Image Container with Fallback */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#11111A]">
                <img
                  src={PERSONAL_INFO.portfolioRefUrl ? '/src/assets/images/hero_portrait_dark_1791919462684.jpg' : '/src/assets/images/hero_portrait_dark_1791919462684.jpg'}
                  alt="Talha UIUX - Professional UI/UX Designer in dark minimal outfit"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to stylized SVG card
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="h-full w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#171722] to-[#08080D] text-center">
                          <div class="h-16 w-16 rounded-2xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center mb-4 text-[#C4B5FD] font-mono text-xl font-bold">TUX</div>
                          <h3 class="text-lg font-bold text-white">Talha UIUX</h3>
                          <p class="text-xs text-[#A1A1B5] mt-1">UI/UX Designer & Product Architect</p>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#171722] via-[#171722]/60 to-transparent" />

                {/* Floating Micro-Card 1: Design System */}
                <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-[#A78BFA]/30 bg-[#11111A]/85 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]/20 text-[#C4B5FD]">
                        <Layers className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Talha UIUX</div>
                        <div className="text-[11px] text-[#A1A1B5]">UI/UX Designer · Figma Specialist</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#C4B5FD] bg-[#8B5CF6]/15 px-2 py-0.5 rounded border border-[#8B5CF6]/20">
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative futuristic corner ticks */}
              <div className="absolute top-4 left-4 h-2 w-2 border-t-2 border-l-2 border-[#8B5CF6]" />
              <div className="absolute top-4 right-4 h-2 w-2 border-t-2 border-r-2 border-[#8B5CF6]" />
            </div>

            {/* Floating 3D Badge: User Experience */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-2 rounded-xl border border-[#A78BFA]/25 bg-[#171722]/90 px-3.5 py-2 backdrop-blur-lg shadow-xl text-xs text-white">
              <Compass className="h-4 w-4 text-[#8B5CF6]" />
              <span>Evidence-Based UX</span>
            </div>

            {/* Floating 3D Badge: Design Tokens */}
            <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 rounded-xl border border-[#A78BFA]/25 bg-[#171722]/90 px-3.5 py-2 backdrop-blur-lg shadow-xl text-xs text-white">
              <Sparkles className="h-4 w-4 text-[#C4B5FD]" />
              <span>Atomic Figma Systems</span>
            </div>
          </div>
        </div>

        {/* Full-width KPI strip placed below the split (strictly complying with Rule 13) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-[#A78BFA]/15 py-6">
          <div className="flex flex-col">
            <span className="font-mono text-2xl md:text-3xl font-extrabold text-white tabular-nums tracking-tight">
              4+
            </span>
            <span className="text-xs text-[#A1A1B5] mt-1">Featured Case Studies</span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl md:text-3xl font-extrabold text-[#C4B5FD] tabular-nums tracking-tight">
              100%
            </span>
            <span className="text-xs text-[#A1A1B5] mt-1">Figma Auto-Layout & Tokens</span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl md:text-3xl font-extrabold text-white tabular-nums tracking-tight">
              4-Step
            </span>
            <span className="text-xs text-[#A1A1B5] mt-1">Discover-Define-Design-Refine</span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl md:text-3xl font-extrabold text-[#A78BFA] tabular-nums tracking-tight">
              Universal
            </span>
            <span className="text-xs text-[#A1A1B5] mt-1">Web, Mobile & Game Interfaces</span>
          </div>
        </div>
      </div>
    </section>
  );
};
