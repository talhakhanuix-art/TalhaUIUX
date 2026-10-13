import React, { useEffect } from 'react';
import { X, ExternalLink, Terminal, CheckCircle2, Copy, Check, Smartphone, Globe, Layers } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="deploy-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-[#A78BFA]/30 bg-[#0E0E17] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#A78BFA]/20 bg-[#08080D] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#8B5CF6] uppercase">DEVELOPER DOCUMENTATION</span>
            <span className="text-[#A1A1B5]" aria-hidden="true">·</span>
            <span className="text-xs text-white font-medium">Deployment & Customization Guide</span>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171722] text-[#A1A1B5] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
          {/* Section 1: Architecture classification */}
          <div className="rounded-xl border border-[#8B5CF6]/30 bg-[#12111E] p-5">
            <h3 id="deploy-guide-title" className="text-base font-bold text-white flex items-center gap-2">
              <Globe className="h-4 w-4 text-[#8B5CF6]" />
              <span>Architecture Classification: Web + PWA + Dedicated Mobile View</span>
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              This project is built as a production-grade <strong>React 19 + TypeScript + Vite Single Page Application</strong> paired with a <strong>Progressive Web App (PWA)</strong> service worker and an interactive <strong>390px Mobile App Experience</strong>.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                <span><strong>Responsive Website:</strong> Flawlessly adapts across Desktop (1440px+), Tablet, and Mobile.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                <span><strong>Installable PWA:</strong> Users can install it directly to their home screen on Android, iOS Safari, or Chromium Desktop without an App Store.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                <span><strong>To build a Native App (iOS/Android):</strong> You can wrap this exact codebase using <strong>Capacitor</strong> (<code className="text-[#C4B5FD]">npx cap init</code> &amp; <code className="text-[#C4B5FD]">npx cap add ios android</code>) to generate Xcode and Android Studio projects.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Deploying to Vercel */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-[#C4B5FD]">
              1. Instructions to Deploy to Vercel
            </h4>
            <p className="text-xs">
              You can deploy this repository to Vercel in less than 2 minutes using either the Vercel CLI or GitHub Git integration:
            </p>

            <div className="rounded-xl border border-[#A78BFA]/20 bg-[#11111A] p-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[#A1A1B5]">
                <span>Option A: Via Vercel CLI</span>
                <button
                  onClick={() => copyToClipboard('npm i -g vercel\nvercel', 'cli')}
                  className="flex items-center gap-1 text-[#C4B5FD] hover:text-white"
                >
                  {copiedCode === 'cli' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedCode === 'cli' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="text-white overflow-x-auto">
{`npm i -g vercel
vercel`}
              </pre>
            </div>

            <div className="rounded-xl border border-[#A78BFA]/20 bg-[#11111A] p-4 text-xs space-y-1">
              <div className="font-semibold text-white">Option B: Via Vercel Web Dashboard:</div>
              <ol className="list-decimal pl-4 space-y-1 text-[#A1A1B5]">
                <li>Push your repository to GitHub, GitLab, or Bitbucket.</li>
                <li>Go to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-[#C4B5FD] underline">vercel.com/new</a> and select your repository.</li>
                <li>Framework Preset: <strong>Vite</strong>.</li>
                <li>Build Command: <strong>npm run build</strong>. Output Directory: <strong>dist</strong>.</li>
                <li>Click <strong>Deploy</strong>. Vercel automatically generates your production URL and SSL certificate.</li>
              </ol>
            </div>
          </div>

          {/* Section 3: List of personal details to customize */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-[#C4B5FD]">
              2. Personal Details and Content You Can Replace
            </h4>
            <p className="text-xs">
              All personal information and project data are neatly decoupled in <code className="text-[#C4B5FD] font-mono">src/data/portfolioData.ts</code>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-[#A78BFA]/15 bg-[#171722] p-3">
                <span className="font-semibold text-white block mb-1">Personal Info:</span>
                <ul className="space-y-1 text-[#A1A1B5]">
                  <li>• <code className="text-[#C4B5FD]">PERSONAL_INFO.email</code>: your preferred inbox.</li>
                  <li>• <code className="text-[#C4B5FD]">PERSONAL_INFO.socials</code>: LinkedIn, Behance, Dribbble links.</li>
                  <li>• <code className="text-[#C4B5FD]">PERSONAL_INFO.availability</code>: current workload status.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-[#A78BFA]/15 bg-[#171722] p-3">
                <span className="font-semibold text-white block mb-1">Projects & Assets:</span>
                <ul className="space-y-1 text-[#A1A1B5]">
                  <li>• <code className="text-[#C4B5FD]">PROJECTS</code> array: replace concept case studies with verified client work.</li>
                  <li>• <code className="text-[#C4B5FD]">PORTFOLIO_ASSETS</code>: swap hero & workspace photographs if needed.</li>
                  <li>• <code className="text-[#C4B5FD]">SKILLS</code> &amp; <code className="text-[#C4B5FD]">SERVICES</code>: adjust design offerings.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#A78BFA]/20 bg-[#08080D] px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-[#8B5CF6] px-4 py-2 text-xs font-semibold text-white hover:bg-[#7C3AED]"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
