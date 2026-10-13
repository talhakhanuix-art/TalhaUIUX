/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { CaseStudyModal } from './components/CaseStudyModal';
import { About } from './components/About';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileAppExperience } from './components/MobileAppExperience';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { Project } from './types/portfolio';
import { Smartphone, Monitor, Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileAppMode, setMobileAppMode] = useState(false);
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Handle URL parameters (e.g. ?view=app)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'app') {
      setMobileAppMode(true);
    }
  }, []);

  // Update active section on scroll
  useEffect(() => {
    if (mobileAppMode) return;

    const sections = ['home', 'work', 'about', 'process', 'services', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileAppMode]);

  const handleNavigate = (sectionId: string) => {
    if (mobileAppMode) {
      setMobileAppMode(false);
    }
    setActiveSection(sectionId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#08080D] text-[#F8FAFC] selection:bg-[#8B5CF6]/30 selection:text-[#C4B5FD] flex flex-col relative font-sans antialiased">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        mobileAppMode={mobileAppMode}
        onToggleMobileAppMode={() => setMobileAppMode(!mobileAppMode)}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {mobileAppMode ? (
          /* Dedicated Mobile App View */
          <div className="py-8 px-4 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase text-[#8B5CF6] tracking-wider">
                MOBILE COMPANION EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Talha UIUX Mobile Portfolio App
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1B5] mt-2 max-w-md mx-auto">
                Interact with the 5 mobile screens below: Home, Projects Search, Case Study Details, About/Skills, and Contact.
              </p>
            </div>

            <MobileAppExperience
              onExit={() => setMobileAppMode(false)}
              isStandaloneScreen={true}
            />
          </div>
        ) : (
          /* Full Responsive Website View */
          <>
            {/* Hero Section */}
            <Hero
              onExploreWork={() => handleNavigate('work')}
              onContact={() => handleNavigate('contact')}
            />

            {/* Selected Projects Showcase */}
            <ProjectGallery onSelectProject={(p) => setSelectedProject(p)} />

            {/* Mobile App Showcase Spotlight Banner */}
            <section className="py-16 border-t border-[#A78BFA]/15 bg-gradient-to-b from-[#11111A]/40 to-[#08080D] relative overflow-hidden">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-[#A78BFA]/25 bg-gradient-to-r from-[#171722] via-[#12111E] to-[#171722] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#8B5CF6]/15 blur-[90px]" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C4B5FD]">
                        <Smartphone className="h-4 w-4 text-[#8B5CF6]" />
                        <span>COHESIVE DESIGN SYSTEM</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Experience the Dedicated Mobile App
                      </h2>
                      <p className="text-sm text-[#A1A1B5] max-w-xl leading-relaxed">
                        Beyond responsive web scaling, I designed a dedicated mobile app UI concept for the Talha UIUX portfolio featuring 390px reference ergonomics, thumb-zone bottom navigation, instant search, and tactile micro-flows.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setMobileAppMode(true)}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#8B5CF6] px-5 py-3 text-xs font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:bg-[#7C3AED] transition-all"
                        >
                          <Smartphone className="h-4 w-4" />
                          <span>Launch Mobile App Experience</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => setDeployGuideOpen(true)}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-[#A78BFA]/30 bg-[#11111A] px-4 py-3 text-xs font-medium text-slate-300 hover:text-white transition-all"
                        >
                          <span>PWA & Native App Architecture</span>
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex justify-center">
                      <div className="relative w-48 rounded-2xl border border-[#A78BFA]/30 bg-[#08080D] p-2 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer"
                           onClick={() => setMobileAppMode(true)}>
                        <img
                          src="/src/assets/images/novacart_ecommerce_ui_1791919463837.jpg"
                          alt="Mobile App Preview"
                          className="rounded-xl object-cover aspect-[9/16] w-full"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end justify-center p-3">
                          <span className="text-[11px] font-bold text-white bg-[#8B5CF6] px-2.5 py-1 rounded-md shadow-md">
                            Click to Preview
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About & Philosophy Section */}
            <About />

            {/* 4-Step Design Process Timeline */}
            <ProcessTimeline />

            {/* Services & Offerings */}
            <Services onSelectService={handleSelectService} />

            {/* Contact Section */}
            <Contact initialSubject={selectedService ? `${selectedService} Inquiry` : ''} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Vercel & Technical Deployment Modal */}
      <DeploymentGuideModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
      />

      {/* PWA Floating Install Notification & Offline Alert */}
      <PWAInstallBanner />
    </div>
  );
}
