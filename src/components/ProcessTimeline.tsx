import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process" className="py-16 md:py-24 border-t border-[#A78BFA]/15 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-2">
            <span>METHODOLOGY</span>
            <span aria-hidden="true">·</span>
            <span>END-TO-END</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My 4-Step Design Process
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#A1A1B5] max-w-xl">
            A structured framework designed to eliminate ambiguity, minimize development rework, and deliver experiences that resonate with users.
          </p>
        </div>

        {/* 4 Connected Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step) => {
            const isSelected = activeStep === step.step;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-[#8B5CF6] bg-[#171722] shadow-[0_10px_30px_-10px_rgba(139,92,246,0.35)] -translate-y-1'
                    : 'border-[#A78BFA]/15 bg-[#11111A]/80 hover:border-[#A78BFA]/40 hover:bg-[#171722]/50'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-[#8B5CF6]">
                      0{step.step}.
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#8B5CF6]/20 text-[#C4B5FD]'
                          : 'bg-[#171722] text-[#A1A1B5]'
                      }`}
                    >
                      Phase {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.name}
                  </h3>
                  <h4 className="text-xs font-medium text-[#C4B5FD] mb-3 leading-snug">
                    {step.title}
                  </h4>

                  <p className="text-xs text-[#A1A1B5] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Activities List */}
                  <div className="space-y-1.5 border-t border-[#A78BFA]/15 pt-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1B5] block mb-1">
                      Key Activities:
                    </span>
                    {step.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <span className="text-[#8B5CF6] text-xs">›</span>
                        <span className="text-[11px] leading-tight">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Pill */}
                <div className="mt-5 border-t border-[#A78BFA]/15 pt-3">
                  <div className="text-[10px] font-mono uppercase text-[#8B5CF6]">Outcome</div>
                  <div className="text-xs font-semibold text-white mt-0.5">{step.deliverable}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
