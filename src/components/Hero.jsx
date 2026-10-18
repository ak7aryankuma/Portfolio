import React from 'react';
import { ArrowDown, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-zinc-900">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          {/* Large Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
              Aryan Kumar
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-400 leading-snug">
              AI Engineer focused on <span className="text-zinc-100 font-medium">agentic AI</span>, LLM applications, multi-agent systems, RAG, and intelligent business automation.
            </p>
          </div>

          {/* Key Metric Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-zinc-900/90 font-mono text-xs">
            <div>
              <span className="block text-zinc-500 text-[11px]">ARCHITECTURE</span>
              <span className="text-zinc-200 font-semibold text-sm">Google ADK & Python</span>
            </div>
            <div>
              <span className="block text-zinc-500 text-[11px]">DATA STUDIED</span>
              <span className="text-emerald-400 font-semibold text-sm">$10.67M+ Revenue</span>
            </div>
            <div>
              <span className="block text-zinc-500 text-[11px]">CREDENTIALS</span>
              <span className="text-zinc-200 font-semibold text-sm">Google, Cisco, IIM</span>
            </div>
            <div>
              <span className="block text-zinc-500 text-[11px]">VERIFIABILITY</span>
              <span className="text-zinc-200 font-semibold text-sm">Audit Traceable</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg hover:shadow-emerald-500/20"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>Get in Touch</span>
            </a>

            <a
              href="/assets/Aryan_Kumar_Resume.pdf"
              download="Aryan_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/60 transition-colors"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Verified Social Links */}
          <div className="flex items-center gap-6 pt-4 text-zinc-500 text-xs font-mono">
            <a 
              href="https://github.com/ak7aryankuma" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/ak7aryankuma</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/aryan-kumar-b355222aa/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>linkedin.com/in/aryan-kumar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
