import React, { useState } from 'react';
import { Menu, X, Smartphone, Monitor, Download, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  mobileAppMode: boolean;
  onToggleMobileAppMode: () => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  mobileAppMode,
  onToggleMobileAppMode,
  onOpenDeployGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isInstallable, install } = usePWAInstall();

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#A78BFA]/15 bg-[#08080D]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#F8FAFC] transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] p-0.5 shadow-[0_0_15px_rgba(139,92,246,0.4)]">
            <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#08080D] font-mono text-xs font-bold text-[#C4B5FD] group-hover:text-white transition-colors">
              TUX
            </div>
          </div>
          <span className="font-bold text-white tracking-normal text-sm sm:text-base">
            Talha <span className="text-[#A78BFA]">UIUX</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1B5]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-white relative py-1 ${
                  isActive ? 'text-white' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B5CF6] rounded-full animate-in fade-in duration-200" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mode Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Mode Switcher: View Website vs Interactive Mobile App Simulator */}
          <button
            onClick={onToggleMobileAppMode}
            title={mobileAppMode ? 'Switch to Full Website View' : 'Open Mobile App Experience'}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-[#A78BFA]/25 bg-[#171722]/80 px-3 py-1.5 text-xs font-medium text-[#C4B5FD] hover:bg-[#8B5CF6]/15 hover:border-[#8B5CF6] transition-all whitespace-nowrap"
          >
            {mobileAppMode ? (
              <>
                <Monitor className="h-3.5 w-3.5 text-[#A78BFA]" />
                <span>Website View</span>
              </>
            ) : (
              <>
                <Smartphone className="h-3.5 w-3.5 text-[#A78BFA]" />
                <span>Mobile App View</span>
              </>
            )}
          </button>

          {/* Optional PWA Install trigger if browser supports it */}
          {isInstallable && (
            <button
              onClick={install}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-lg border border-[#A78BFA]/30 bg-[#171722] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#8B5CF6]/20 transition-all whitespace-nowrap"
            >
              <Download className="h-3.5 w-3.5 text-[#8B5CF6]" />
              <span>Install App</span>
            </button>
          )}

          {/* Primary CTA: Let's Talk */}
          <button
            onClick={() => handleLinkClick('contact')}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:from-[#9061f9] hover:to-[#8B5CF6] transition-all whitespace-nowrap shrink-0"
          >
            <span>{PERSONAL_INFO.secondaryCta}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-[#A78BFA]/20 bg-[#171722] text-[#A1A1B5] hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#A78BFA]/15 bg-[#08080D]/95 px-4 py-4 backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#171722] text-[#C4B5FD]'
                    : 'text-[#A1A1B5] hover:bg-[#171722]/50 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />}
              </button>
            ))}

            <div className="pt-3 border-t border-[#A78BFA]/15 flex flex-col gap-2">
              <button
                onClick={() => {
                  onToggleMobileAppMode();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#A78BFA]/30 bg-[#171722] py-2.5 text-xs font-medium text-[#C4B5FD]"
              >
                <Smartphone className="h-4 w-4 text-[#8B5CF6]" />
                <span>{mobileAppMode ? 'Return to Website View' : 'Launch Mobile App Experience'}</span>
              </button>

              <button
                onClick={() => {
                  onOpenDeployGuide();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-1 text-xs text-[#A1A1B5] hover:text-white py-1"
              >
                <span>Vercel & App Deployment Guide</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
