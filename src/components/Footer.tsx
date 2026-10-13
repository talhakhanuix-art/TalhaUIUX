import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDeployGuide }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#A78BFA]/15 bg-[#08080D] pt-12 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#A78BFA]/15">
          {/* Brand lockup */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] p-0.5 shadow-md">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#08080D] font-mono text-xs font-bold text-[#C4B5FD]">
                  TUX
                </div>
              </div>
              <span className="font-bold text-white text-base">
                Talha <span className="text-[#A78BFA]">UIUX</span>
              </span>
            </div>
            <p className="mt-2 text-xs text-[#A1A1B5] max-w-sm">
              Designing intuitive, visually engaging digital experiences that connect user needs with business goals.
            </p>
          </div>

          {/* Quick links & Back to top */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#A1A1B5]">
            <button onClick={() => onNavigate('work')} className="hover:text-white transition-colors">
              Work
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors">
              Process
            </button>
            <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
              Services
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
            <button
              onClick={onOpenDeployGuide}
              className="text-[#C4B5FD] hover:underline"
            >
              Vercel Deployment Guide
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 rounded-lg border border-[#A78BFA]/20 bg-[#171722] px-3 py-1.5 text-xs text-white hover:bg-[#8B5CF6]/20 transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1B5]">
          <p>© {currentYear} Talha UIUX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {PERSONAL_INFO.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
