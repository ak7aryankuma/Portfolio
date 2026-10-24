import React from 'react';
import { FileDown, Award, GraduationCap, Briefcase, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function About({ onOpenLightbox }) {
  const auditClients = [
    'Ferrero Rocher', 'Pfizer Limited', 'Voltas Beko', 'Lupin', 
    'Bajaj Finance', 'Bajaj Electricals', 'Emcure Pharma', 
    'Gennova Bio', 'Zuventus', 'Syngenta', 'Wagh Bakri'
  ];

  return (
    <section id="about" className="py-24 md:py-36 border-b border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-zinc-900">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-3 tracking-widest uppercase">
              <span>02</span>
              <span className="text-zinc-600">//</span>
              <span>PROFILE & BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              The Rigor Behind the Intelligence
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Where audit precision, financial accounting standards, and autonomous machine intelligence intersect.
          </p>
        </div>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              onClick={() => onOpenLightbox('/assets/profile/portrait.jpg', 'Aryan Kumar', 'Professional Portrait')}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl cursor-pointer"
            >
              <img
                src="/assets/profile/portrait.jpg"
                alt="Aryan Kumar"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 inset-x-6">
                <span className="font-mono text-xs text-emerald-400 block mb-1">ARYAN KUMAR</span>
                <p className="text-sm text-zinc-200 font-medium">AI Engineer & AI Automation</p>
                <span className="text-xs text-zinc-400 font-mono">India · ak.7aryankumar@gmail.com</span>
              </div>
            </div>

            {/* Quick Resume CTA Card */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-semibold text-white">Verified Curriculum Vitae</h4>
                <p className="text-[11px] text-zinc-400 font-mono mt-0.5">Updated PDF with complete career history</p>
              </div>
              <a
                href="/assets/Aryan_Kumar_Resume.pdf"
                download="Aryan_Kumar_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shrink-0"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Engineering AI that respects ground truth and eliminates hallucinations.
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                Most AI solutions fail in production because they rely on generative guessing for problems that require mathematical certainty. My background began in financial audit and corporate accounting at <span className="text-zinc-200 font-medium">Hanish Chaudhary and Associates</span>, conducting statutory and internal audits, ledger scrutiny, journal verification, and internal control evaluations for leading pharmaceutical, FMCG, and financial enterprises.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                Today, I bring that same non-negotiable insistence on accuracy into <span className="text-emerald-400 font-medium">Agentic AI and Automation Engineering</span>. Whether designing autonomous multi-agent systems with Google ADK, building intelligent document auditors, or modeling multi-million-dollar transactional datasets, my systems combine deterministic computation with high-order reasoning.
              </p>
            </div>

            {/* Corporate Audit Experience Strip */}
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>AUDIT & ACCOUNTING FOUNDATION // HANISH CHAUDHARY & ASSOCIATES</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Reviewed financial statements, ledgers, statutory compliance, and internal controls across an enterprise client portfolio including:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {auditClients.map((client) => (
                  <span 
                    key={client} 
                    className="px-2.5 py-1 rounded text-[11px] font-mono text-zinc-300 bg-zinc-950 border border-zinc-800"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Academic Honors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>EDUCATION</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-zinc-100">
                    Bachelor of Business Administration (BBA)
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Jagannath Institute of Management Science (JIMS VK2)
                  </p>
                  <p className="text-[11px] font-mono text-emerald-400/90 pt-1">
                    US CMA (Certified Management Accountant) — Currently Pursuing
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>ACHIEVEMENTS</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-zinc-100">
                    2nd Place, Stock Market Competition
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    JIMS University Capital Markets Challenge
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 pt-1">
                    Active publisher of deep business & financial analytics on LinkedIn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
