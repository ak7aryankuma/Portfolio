import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ak.7aryankumar@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="pt-24 pb-16 bg-[#09090b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact Banner */}
        <div className="p-8 sm:p-14 md:p-16 rounded-3xl bg-zinc-950 border border-zinc-800/80 shadow-2xl relative overflow-hidden mb-20">
          <div className="max-w-3xl space-y-8 relative z-10">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase">
              <span>06</span>
              <span className="text-zinc-600">//</span>
              <span>INITIATE CONTACT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Let's engineer your next intelligent workflow.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              Available for full-time roles in <span className="text-zinc-100 font-medium">Agentic AI, AI Automation, GenAI/LLM Engineering, AI Solutions, AI Business Analyst / AI Consultant</span>. Also open to strategic consulting and enterprise automation advisory.
            </p>

            {/* Direct Contact Action Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg hover:shadow-emerald-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-mono text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                <span>{copied ? "Email Copied!" : email}</span>
              </button>

              <a
                href="/assets/Aryan_Kumar_Resume.pdf"
                download="Aryan_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/80 transition-colors"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Grid of Verified Coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-900 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block mb-1">LINKEDIN</span>
                <a
                  href="https://www.linkedin.com/in/aryan-kumar-b355222aa/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-200 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>in/aryan-kumar</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div>
                <span className="text-zinc-500 block mb-1">GITHUB</span>
                <a
                  href="https://github.com/ak7aryankuma"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-200 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>github/ak7aryankuma</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div>
                <span className="text-zinc-500 block mb-1">LOCATION</span>
                <span className="text-zinc-200 inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>India (IST / UTC+5:30)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Colophon Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-900 text-xs font-mono text-zinc-500">
          <div>
            <span>© {new Date().getFullYear()} Aryan Kumar. All verified rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Built with React & Vite</span>
            <span className="text-zinc-700">|</span>
            <span>Minimal Editorial Design</span>
            <span className="text-zinc-700">|</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
