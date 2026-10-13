import React, { useState } from 'react';
import {
  Home,
  Briefcase,
  User,
  Mail,
  Search,
  ArrowLeft,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles,
  CheckCircle2,
  Send,
  Smartphone,
  Compass,
  Monitor,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, PROCESS_STEPS, TOOLS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface MobileAppExperienceProps {
  onExit?: () => void;
  isStandaloneScreen?: boolean;
}

export const MobileAppExperience: React.FC<MobileAppExperienceProps> = ({
  onExit,
  isStandaloneScreen = false,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'work' | 'about' | 'contact'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [contactSubject, setContactSubject] = useState('Mobile App Design');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Filtered projects
  const filteredProjects = PROJECTS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = filterPlatform === 'all' || p.platform === filterPlatform;
    return matchesSearch && matchesPlatform;
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleMobileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSubmitted(true);
  };

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className={`flex flex-col items-center justify-center ${isStandaloneScreen ? 'min-h-screen py-4' : 'py-8'}`}>
      {/* Top Banner on Desktop mode */}
      {!isStandaloneScreen && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 w-full max-w-md px-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="text-xs font-semibold text-white">Dedicated Mobile App View</span>
            <span className="text-[11px] font-mono text-[#A1A1B5] bg-[#171722] px-2 py-0.5 rounded border border-[#A78BFA]/20">
              390px Reference Device
            </span>
          </div>
          {onExit && (
            <button
              onClick={onExit}
              className="text-xs text-[#C4B5FD] hover:text-white flex items-center gap-1 transition-colors"
            >
              <Monitor className="h-3.5 w-3.5" />
              <span>Back to Web Mode</span>
            </button>
          )}
        </div>
      )}

      {/* Simulated Device Frame (390px width reference) */}
      <div className="relative w-full max-w-[390px] h-[780px] rounded-[44px] border-[6px] border-[#252538] bg-[#08080D] shadow-[0_25px_60px_-15px_rgba(139,92,246,0.3)] flex flex-col overflow-hidden text-[#F8FAFC]">
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-28 bg-[#171722] rounded-full z-40 flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-[#08080D] ml-auto mr-2" />
        </div>

        {/* Status Bar */}
        <div className="h-10 pt-2 px-6 flex items-center justify-between text-[11px] font-medium text-[#A1A1B5] z-30 shrink-0">
          <span className="font-semibold text-white">12:23</span>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* Scrollable Screen Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-20 pt-1 space-y-4">
          {/* SCREEN 3: Project Detail Case Study View (if selected) */}
          {selectedProject ? (
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Top Bar inside Case Study */}
              <div className="sticky top-0 z-20 flex items-center justify-between py-2 bg-[#08080D]/90 backdrop-blur-md">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-1 text-xs font-semibold text-[#8B5CF6] hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
                <span className="text-[11px] font-mono uppercase text-[#A1A1B5] truncate max-w-[150px]">
                  {selectedProject.title}
                </span>
                <span className="text-[10px] text-[#C4B5FD] font-mono bg-[#8B5CF6]/15 px-2 py-0.5 rounded">
                  Case Study
                </span>
              </div>

              {/* Cover Mockup */}
              <div className="overflow-hidden rounded-2xl border border-[#A78BFA]/25 bg-[#171722]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#8B5CF6] uppercase">
                  {selectedProject.category}
                </span>
                <h2 className="text-xl font-extrabold text-white mt-0.5">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-[#A1A1B5] mt-1.5 leading-relaxed">
                  {selectedProject.caseStudy.overview}
                </p>
              </div>

              {/* Problem & Goal */}
              <div className="rounded-xl border border-rose-500/20 bg-[#17121C] p-3.5 space-y-1">
                <span className="text-[10px] font-mono uppercase text-rose-400">The Problem</span>
                <p className="text-xs text-[#F8FAFC] leading-relaxed">
                  {selectedProject.caseStudy.problemStatement}
                </p>
              </div>

              <div className="rounded-xl border border-[#8B5CF6]/25 bg-[#12111E] p-3.5 space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#C4B5FD]">Design Goals</span>
                <div className="space-y-1.5">
                  {selectedProject.caseStudy.designGoals.map((g, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-200">
                      <CheckCircle2 className="h-3 w-3 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span className="text-[11px]">{g}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Flow */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#A78BFA] block">
                  User Journey Steps
                </span>
                <div className="space-y-2">
                  {selectedProject.caseStudy.userFlowSteps.map((step) => (
                    <div key={step.step} className="rounded-lg border border-[#A78BFA]/15 bg-[#171722] p-2.5">
                      <div className="text-[11px] font-bold text-white flex items-center justify-between">
                        <span>{step.step}. {step.action}</span>
                      </div>
                      <p className="text-[10px] text-[#A1A1B5] mt-1">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Decisions */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#A78BFA] block">
                  Design Decisions
                </span>
                {selectedProject.caseStudy.designDecisions.map((d, i) => (
                  <div key={i} className="rounded-lg border border-[#A78BFA]/15 bg-[#11111A] p-2.5">
                    <div className="text-[11px] font-semibold text-white">{d.decision}</div>
                    <div className="text-[10px] text-[#A1A1B5] mt-0.5 leading-relaxed">
                      <span className="text-[#8B5CF6]">Why: </span>{d.rationale}
                    </div>
                  </div>
                ))}
              </div>

              {/* Close / Action Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full rounded-xl bg-[#8B5CF6] py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#7C3AED]"
              >
                Return to Projects
              </button>
            </div>
          ) : activeTab === 'home' ? (
            /* SCREEN 1: Mobile App Home Screen */
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* App Header */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] font-mono text-[10px] font-bold text-white">
                    TUX
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-white leading-tight">Talha UIUX</h1>
                    <p className="text-[10px] text-[#A1A1B5]">Digital Product Designer</p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#8B5CF6] bg-[#8B5CF6]/15 border border-[#8B5CF6]/20 px-2 py-0.5 rounded-full">
                  Available
                </div>
              </div>

              {/* Hero Profile Card */}
              <div className="relative overflow-hidden rounded-2xl border border-[#A78BFA]/25 bg-gradient-to-br from-[#171722] to-[#11111A] p-3.5">
                <div className="flex items-center gap-3">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-[#A78BFA]/30 bg-[#08080D]">
                    <img
                      src="/src/assets/images/hero_portrait_dark_1791919462684.jpg"
                      alt="Talha portrait"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase text-[#C4B5FD]">
                      Product Designer
                    </span>
                    <h2 className="text-sm font-bold text-white leading-snug truncate">
                      Talha UIUX
                    </h2>
                    <p className="text-[11px] text-[#A1A1B5] leading-snug line-clamp-2 mt-0.5">
                      Designing intuitive, visually engaging digital experiences.
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-[#A78BFA]/15 text-[10px]">
                  <span className="text-[#A1A1B5]">Figma & Mobile Design</span>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="text-[#C4B5FD] font-semibold flex items-center gap-0.5"
                  >
                    <span>Let's Talk</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Featured Concept Spotlight */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white">Featured Project</span>
                  <button
                    onClick={() => setActiveTab('work')}
                    className="text-[10px] text-[#8B5CF6] font-medium"
                  >
                    View All
                  </button>
                </div>

                {PROJECTS[0] && (
                  <div
                    onClick={() => openCaseStudy(PROJECTS[0])}
                    className="overflow-hidden rounded-xl border border-[#A78BFA]/20 bg-[#171722] cursor-pointer hover:border-[#8B5CF6] transition-all"
                  >
                    <img
                      src={PROJECTS[0].image}
                      alt={PROJECTS[0].title}
                      className="w-full aspect-[16/10] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-3">
                      <div className="flex items-center justify-between text-[10px] text-[#A1A1B5]">
                        <span>{PROJECTS[0].category}</span>
                        <span className="font-mono text-[#8B5CF6]">Concept</span>
                      </div>
                      <h3 className="text-xs font-bold text-white mt-0.5">
                        {PROJECTS[0].title}
                      </h3>
                      <p className="text-[10px] text-[#A1A1B5] mt-1 line-clamp-2">
                        {PROJECTS[0].description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Capabilities Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div
                  onClick={() => setActiveTab('about')}
                  className="rounded-xl border border-[#A78BFA]/15 bg-[#11111A] p-2.5 cursor-pointer hover:border-[#8B5CF6]"
                >
                  <Layers className="h-4 w-4 text-[#8B5CF6] mb-1" />
                  <div className="text-xs font-bold text-white">Design Systems</div>
                  <div className="text-[10px] text-[#A1A1B5]">Figma Tokens & Kits</div>
                </div>

                <div
                  onClick={() => setActiveTab('about')}
                  className="rounded-xl border border-[#A78BFA]/15 bg-[#11111A] p-2.5 cursor-pointer hover:border-[#8B5CF6]"
                >
                  <Smartphone className="h-4 w-4 text-[#8B5CF6] mb-1" />
                  <div className="text-xs font-bold text-white">Mobile UX</div>
                  <div className="text-[10px] text-[#A1A1B5]">Thumb-zone Flows</div>
                </div>
              </div>
            </div>
          ) : activeTab === 'work' ? (
            /* SCREEN 2: Projects List with Search & Filter */
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pt-1">
                <h2 className="text-base font-bold text-white">Selected Projects</h2>
                <span className="text-[10px] font-mono text-[#A1A1B5]">
                  {filteredProjects.length} items
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#A1A1B5]" />
                <input
                  type="text"
                  placeholder="Search projects or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-[#A78BFA]/20 bg-[#11111A] pl-8 pr-3 py-2 text-xs text-white placeholder-[#A1A1B5]/50 focus:border-[#8B5CF6] focus:outline-none"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[10px]">
                {['all', 'Mobile App', 'Web App / SaaS', 'Game UI'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilterPlatform(f)}
                    className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-colors ${
                      filterPlatform === f
                        ? 'bg-[#8B5CF6] text-white font-medium'
                        : 'bg-[#171722] text-[#A1A1B5] hover:text-white'
                    }`}
                  >
                    {f === 'all' ? 'All' : f}
                  </button>
                ))}
              </div>

              {/* Project Cards List */}
              <div className="space-y-3">
                {filteredProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => openCaseStudy(p)}
                    className="overflow-hidden rounded-xl border border-[#A78BFA]/18 bg-[#171722] cursor-pointer hover:border-[#8B5CF6] transition-all"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden bg-[#11111A]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between text-[10px] text-[#A1A1B5]">
                        <span>{p.category}</span>
                        <span className="font-mono text-[#8B5CF6]">Case Study</span>
                      </div>
                      <h3 className="text-xs font-bold text-white mt-0.5">{p.title}</h3>
                      <p className="text-[10px] text-[#A1A1B5] mt-1 line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}

                {filteredProjects.length === 0 && (
                  <div className="text-center py-8 text-xs text-[#A1A1B5]">
                    No matching projects found. Try resetting the search query.
                  </div>
                )}
              </div>
            </div>
          ) : activeTab === 'about' ? (
            /* SCREEN 4: About & Skills Screen */
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="pt-1">
                <span className="text-[10px] font-mono uppercase text-[#8B5CF6]">ABOUT TALHA</span>
                <h2 className="text-base font-bold text-white">Philosophy & Expertise</h2>
              </div>

              {/* Workspace Snapshot */}
              <div className="overflow-hidden rounded-xl border border-[#A78BFA]/20 bg-[#171722]">
                <img
                  src="/src/assets/images/about_workspace_studio_1791919463771.jpg"
                  alt="Talha Studio"
                  className="w-full aspect-[16/9] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-xs text-[#A1A1B5] leading-relaxed">
                {PERSONAL_INFO.aboutIntro}
              </p>

              {/* Skills */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-white block">Core Competencies</span>
                <div className="grid grid-cols-2 gap-1.5">
                  {SKILLS.map((s) => (
                    <div
                      key={s.name}
                      className="rounded-lg border border-[#A78BFA]/15 bg-[#11111A] p-2 text-[11px]"
                    >
                      <div className="font-semibold text-white">{s.name}</div>
                      <div className="text-[9px] text-[#8B5CF6]">{s.category}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Steps */}
              <div className="space-y-2 pt-2 border-t border-[#A78BFA]/15">
                <span className="text-xs font-bold text-white block">Design Process</span>
                {PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="rounded-lg border border-[#A78BFA]/15 bg-[#171722] p-2.5">
                    <div className="flex items-center justify-between text-[11px] font-bold text-white">
                      <span>0{step.step}. {step.name}</span>
                      <span className="text-[9px] font-mono text-[#8B5CF6]">Phase {step.step}</span>
                    </div>
                    <div className="text-[10px] text-[#A1A1B5] mt-1">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* SCREEN 5: Mobile Contact Screen */
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="pt-1">
                <span className="text-[10px] font-mono uppercase text-[#8B5CF6]">LET'S CONNECT</span>
                <h2 className="text-base font-bold text-white">Start a Project</h2>
                <p className="text-xs text-[#A1A1B5] mt-1">
                  Have an idea? Let's turn it into an intuitive digital experience.
                </p>
              </div>

              {/* Email direct box */}
              <div className="rounded-xl border border-[#A78BFA]/20 bg-[#171722] p-3 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-mono uppercase text-[#A1A1B5]">Direct Email</div>
                  <div className="text-xs font-semibold text-[#C4B5FD]">{PERSONAL_INFO.email}</div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="h-7 w-7 rounded-lg bg-[#11111A] flex items-center justify-center text-[#A1A1B5]"
                >
                  {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>

              {/* Subject Presets */}
              <div>
                <label className="text-[10px] font-mono uppercase text-[#A1A1B5] block mb-1.5">
                  Project Topic:
                </label>
                <div className="flex flex-wrap gap-1 text-[10px]">
                  {['Mobile App Design', 'SaaS Dashboard', 'Design System', 'UI Consultation'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setContactSubject(s)}
                      className={`px-2.5 py-1 rounded-lg ${
                        contactSubject === s
                          ? 'bg-[#8B5CF6] text-white font-medium'
                          : 'bg-[#11111A] text-[#A1A1B5]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              {contactSubmitted ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center space-y-2">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 mx-auto" />
                  <div className="text-xs font-bold text-white">Inquiry Compiled!</div>
                  <p className="text-[10px] text-[#A1A1B5]">
                    Ready to send via your mobile email app.
                  </p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(contactSubject)}&body=${encodeURIComponent(
                      `Name: ${contactName}\nEmail: ${contactEmail}\n\nMessage:\n${contactMessage}`
                    )}`}
                    className="inline-block mt-2 rounded-lg bg-[#8B5CF6] px-4 py-2 text-xs font-semibold text-white"
                  >
                    Open Mail App
                  </a>
                </div>
              ) : (
                <form onSubmit={handleMobileSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full rounded-xl border border-[#A78BFA]/20 bg-[#11111A] px-3 py-2 text-xs text-white placeholder-[#A1A1B5]/50 focus:border-[#8B5CF6] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full rounded-xl border border-[#A78BFA]/20 bg-[#11111A] px-3 py-2 text-xs text-white placeholder-[#A1A1B5]/50 focus:border-[#8B5CF6] focus:outline-none"
                  />
                  <textarea
                    required
                    rows={3}
                    placeholder="Brief project details..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full rounded-xl border border-[#A78BFA]/20 bg-[#11111A] px-3 py-2 text-xs text-white placeholder-[#A1A1B5]/50 focus:border-[#8B5CF6] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] py-2.5 text-xs font-semibold text-white shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Send className="h-3 w-3" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Bottom Navigation Bar (Home, Work, About, Contact) */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-[#08080D]/95 border-t border-[#A78BFA]/18 backdrop-blur-xl px-4 flex items-center justify-around z-30">
          <button
            onClick={() => {
              setActiveTab('home');
              setSelectedProject(null);
            }}
            className={`flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors py-1 ${
              activeTab === 'home' && !selectedProject
                ? 'text-[#C4B5FD] font-semibold'
                : 'text-[#A1A1B5] hover:text-white'
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('work');
              setSelectedProject(null);
            }}
            className={`flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors py-1 ${
              activeTab === 'work' || selectedProject
                ? 'text-[#C4B5FD] font-semibold'
                : 'text-[#A1A1B5] hover:text-white'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>Work</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('about');
              setSelectedProject(null);
            }}
            className={`flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors py-1 ${
              activeTab === 'about' && !selectedProject
                ? 'text-[#C4B5FD] font-semibold'
                : 'text-[#A1A1B5] hover:text-white'
            }`}
          >
            <User className="h-4 w-4" />
            <span>About</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('contact');
              setSelectedProject(null);
            }}
            className={`flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors py-1 ${
              activeTab === 'contact' && !selectedProject
                ? 'text-[#C4B5FD] font-semibold'
                : 'text-[#A1A1B5] hover:text-white'
            }`}
          >
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </button>
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-28 bg-[#252538] rounded-full z-40 pointer-events-none" />
      </div>
    </div>
  );
};
