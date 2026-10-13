import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, Copy, Check, AlertCircle, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject || 'Product Design Project Inquiry',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate reliable dispatch preparation
    setTimeout(() => {
      setStatus('success');
    }, 400);
  };

  const handleMailtoLaunch = () => {
    const subjectEncoded = encodeURIComponent(formData.subject || 'Design Project Inquiry');
    const bodyEncoded = encodeURIComponent(
      `Hi Talha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#A78BFA]/15 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-3">
            <span>GET IN TOUCH</span>
            <span aria-hidden="true">·</span>
            <span>COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have an Idea? Let's Design Something Exceptional.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1B5] leading-relaxed">
            {PERSONAL_INFO.supportingText}
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact & Social Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Details</h3>
              <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                I'm actively discussing new product engagements, design systems architecture, and mobile app design. Feel free to reach out via email or direct message.
              </p>

              {/* Email Card with Copy button */}
              <div className="rounded-xl border border-[#A78BFA]/20 bg-[#171722]/80 p-4">
                <span className="text-[11px] font-mono uppercase text-[#A1A1B5]">Direct Email</span>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-[#C4B5FD] hover:underline truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#11111A] text-[#A1A1B5] hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Availability Box */}
              <div className="rounded-xl border border-[#8B5CF6]/30 bg-[#12111E] p-4 text-xs">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                  <span>Current Project Status</span>
                </div>
                <p className="text-[#A1A1B5] leading-relaxed">
                  {PERSONAL_INFO.availability}. Typical kickoff timeline: 1–2 weeks from agreement.
                </p>
              </div>
            </div>

            {/* Social Channels */}
            <div className="border-t border-[#A78BFA]/15 pt-6">
              <span className="text-xs font-mono uppercase text-[#A1A1B5] block mb-3">
                Professional Networks
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#A78BFA]/20 bg-[#171722] px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:border-[#8B5CF6] transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="h-3 w-3 text-[#8B5CF6]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-[#A78BFA]/25 bg-[#171722]/90 p-6 sm:p-8 shadow-xl">
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Prepared!</h4>
                <p className="text-xs sm:text-sm text-[#A1A1B5] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been compiled. You can launch your mail client now to transmit directly to <strong className="text-white">{PERSONAL_INFO.email}</strong>, or reset the form.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <button
                    onClick={handleMailtoLaunch}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#8B5CF6] px-5 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-[#7C3AED] transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send via Mail Client</span>
                  </button>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: 'Product Design Project Inquiry', message: '' });
                    }}
                    className="w-full sm:w-auto rounded-xl border border-[#A78BFA]/25 bg-[#11111A] px-4 py-2.5 text-xs text-[#A1A1B5] hover:text-white transition-colors"
                  >
                    Compose Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-[#8B5CF6]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full rounded-xl border border-[#A78BFA]/20 bg-[#11111A] px-3.5 py-2.5 text-xs text-white placeholder-[#A1A1B5]/50 focus:border-[#8B5CF6] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-[#8B5CF6]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@startup.io"
                      className="w-full rounded-xl border border-[#A78BFA]/20 bg-[#11111A] px-3.5 py-2.5 text-xs text-white placeholder-[#A1A1B5]/50 focus:border-[#8B5CF6] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Project Category
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Mobile App Redesign / SaaS Dashboard"
                    className="w-full rounded-xl border border-[#A78BFA]/20 bg-[#11111A] px-3.5 py-2.5 text-xs text-white placeholder-[#A1A1B5]/50 focus:border-[#8B5CF6] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message / Project Details <span className="text-[#8B5CF6]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, timeline, and goals..."
                    className="w-full rounded-xl border border-[#A78BFA]/20 bg-[#11111A] px-3.5 py-2.5 text-xs text-white placeholder-[#A1A1B5]/50 focus:border-[#8B5CF6] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] py-3 text-xs font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:from-[#9061f9] hover:to-[#8B5CF6] transition-all disabled:opacity-50"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{status === 'submitting' ? 'Preparing Transmission...' : 'Send Message'}</span>
                  </button>
                  <p className="mt-2 text-center text-[11px] text-[#A1A1B5]">
                    Direct point of contact: <span className="text-white font-mono">{PERSONAL_INFO.email}</span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
