import React from 'react';
import { SERVICES } from '../data/portfolioData';
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Layers,
  Box,
  Gamepad2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="h-5 w-5 text-[#8B5CF6]" />;
      case 'Smartphone':
        return <Smartphone className="h-5 w-5 text-[#8B5CF6]" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="h-5 w-5 text-[#8B5CF6]" />;
      case 'Layers':
        return <Layers className="h-5 w-5 text-[#8B5CF6]" />;
      case 'Box':
        return <Box className="h-5 w-5 text-[#8B5CF6]" />;
      case 'Gamepad2':
        return <Gamepad2 className="h-5 w-5 text-[#8B5CF6]" />;
      default:
        return <Globe className="h-5 w-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 border-t border-[#A78BFA]/15 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-2">
            <span>OFFERINGS</span>
            <span aria-hidden="true">·</span>
            <span>CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Design Services & Solutions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#A1A1B5] max-w-xl">
            Specialized UI/UX design packages tailored for founders, venture-backed startups, and growing engineering teams.
          </p>
        </div>

        {/* 6 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#A78BFA]/18 bg-[#171722]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 hover:bg-[#171722] hover:shadow-[0_12px_35px_-10px_rgba(139,92,246,0.3)]"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-[#A1A1B5]">
                    0{index + 1}.
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#C4B5FD] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-5 border-t border-[#A78BFA]/15 pt-4 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C4B5FD] block">
                    What's Included:
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#8B5CF6] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Inquiry button */}
              <div className="mt-6 pt-4 border-t border-[#A78BFA]/15 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="text-xs font-semibold text-[#8B5CF6] group-hover:text-[#C4B5FD] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
