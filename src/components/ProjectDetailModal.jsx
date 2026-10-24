import React, { useEffect, useState } from 'react';
import { 
  X, 
  ArrowUpRight, 
  FileText, 
  CheckCircle2, 
  Cpu, 
  Maximize2, 
  BarChart3, 
  FileSpreadsheet, 
  AlertCircle, 
  ShieldCheck, 
  Layers, 
  Workflow, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import VideoPlayer from './VideoPlayer';

export default function ProjectDetailModal({ project, isOpen, onClose, onOpenLightbox }) {
  const [activeMediaTab, setActiveMediaTab] = useState('dashboards');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
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

  // Reset tab when project changes
  useEffect(() => {
    setActiveMediaTab('dashboards');
  }, [project?.index]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-5xl my-auto flex flex-col bg-[#0f0f13] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-8 py-4 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80">
          <div className="min-w-0 pr-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">
                PROJECT // {project.index}
              </span>
              <span className="text-zinc-600 text-xs">•</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${project.statusColor}`}>
                {project.status}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-base sm:text-xl font-bold text-white tracking-tight truncate">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Quick action links in header */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                title="Launch Live Application"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}

            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noreferrer"
                download="ecommerce-support-architecture.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                title="Download Architecture Spec PDF"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Spec (PDF)</span>
              </a>
            )}

            {project.linkedinUrl && (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                title="View LinkedIn Publication"
              >
                <span>Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="group flex items-center gap-1.5 px-2.5 py-1.5 text-zinc-400 hover:text-white rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              aria-label="Close project details"
            >
              <X className="w-4 h-4" />
              <span className="hidden md:inline font-mono text-[10px] text-zinc-500 group-hover:text-zinc-400">ESC</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto max-h-[calc(90vh-70px)] p-5 sm:p-8 space-y-10 text-zinc-300">
          {/* Subtitle & Tag Bar */}
          <div className="space-y-2 border-b border-zinc-800/80 pb-6">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
              {project.tag}
            </span>
            <p className="text-base sm:text-lg font-medium text-emerald-400/90 font-mono">
              {project.subtitle}
            </p>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-1">
              {project.overview}
            </p>
          </div>

          {/* Section F: Project Media Showcase */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>SYSTEM ARTIFACTS & VISUAL DEMONSTRATION</span>
              </span>
            </div>

            {/* Video Player if available */}
            {project.videoSrc && (
              <div className="space-y-3">
                <VideoPlayer
                  src={project.videoSrc}
                  poster={project.coverSrc}
                  title={project.title}
                />
                {project.coverSrc && (
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono px-1">
                    <span>Interactive Walkthrough Demo</span>
                    <button
                      onClick={() => onOpenLightbox(project.coverSrc, project.title, "Architecture Diagram / Cover")}
                      className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Enlarge Architecture / Workflow Diagram</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Power BI & Excel Tabbed Explorer for BI project */}
            {project.dashboards && (
              <div className="space-y-6">
                {/* KPI Banner */}
                {project.kpis && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 font-mono">
                    {project.kpis.map((kpi, idx) => (
                      <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                        <span className="text-[10px] text-zinc-500 block">{kpi.label}</span>
                        <span className="text-lg sm:text-2xl font-bold text-white">{kpi.value}</span>
                        <span className="text-[10px] text-emerald-400 block mt-0.5">{kpi.change}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab switchers */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => setActiveMediaTab('dashboards')}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                        activeMediaTab === 'dashboards'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'text-zinc-400 hover:text-white bg-zinc-900/40 border border-transparent'
                      }`}
                    >
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>Power BI Dashboards ({project.dashboards.length})</span>
                    </button>

                    {project.ledgers && (
                      <button
                        onClick={() => setActiveMediaTab('ledgers')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                          activeMediaTab === 'ledgers'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'text-zinc-400 hover:text-white bg-zinc-900/40 border border-transparent'
                        }`}
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5" />
                        <span>Excel Ledgers & Models ({project.ledgers.length})</span>
                      </button>
                    )}
                  </div>
                  <span className="hidden sm:inline font-mono text-[11px] text-zinc-500">
                    Click any view to inspect full resolution
                  </span>
                </div>

                {/* Dashboards view */}
                {activeMediaTab === 'dashboards' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.dashboards.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onOpenLightbox(item.src, item.title, item.category)}
                        className="group cursor-pointer rounded-xl overflow-hidden bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all shadow-md"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 text-xs font-mono text-zinc-200 border border-zinc-700">
                              <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Enlarge Dashboard</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-3.5 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs sm:text-sm font-semibold text-zinc-100">{item.title}</h4>
                            <span className="text-[10px] font-mono text-emerald-400">{item.category}</span>
                          </div>
                          <p className="text-xs text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Ledgers view */}
                {activeMediaTab === 'ledgers' && project.ledgers && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.ledgers.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onOpenLightbox(item.src, item.title, item.category)}
                        className="group cursor-pointer rounded-xl overflow-hidden bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all shadow-md"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 text-xs font-mono text-zinc-200 border border-zinc-700">
                              <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Inspect Ledger</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 space-y-1">
                          <h4 className="text-xs font-semibold text-zinc-100 truncate">{item.title}</h4>
                          <span className="text-[10px] font-mono text-emerald-400 block">{item.category}</span>
                          <p className="text-[11px] text-zinc-400 leading-snug line-clamp-2">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Single cover image view if no video & no dashboards */}
            {!project.videoSrc && !project.dashboards && project.coverSrc && (
              <div
                onClick={() => onOpenLightbox(project.coverSrc, project.title, "Full Project Preview")}
                className="group relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl cursor-pointer"
              >
                <img
                  src={project.coverSrc}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/90 text-xs font-mono text-zinc-200 border border-zinc-700">
                    <Maximize2 className="w-4 h-4 text-emerald-400" />
                    <span>Inspect High-Resolution Artifact</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Grid Layout: Business Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Problem */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>PRACTICAL BUSINESS PROBLEM</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {project.businessProblem}
              </p>
            </div>

            {/* Solution & Impact */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>SOLUTION & VERIFIABLE OUTCOMES</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {project.solutionImpact}
              </p>
            </div>
          </div>

          {/* Section D: How It Works & Workflow Breakdown */}
          {project.howItWorks && (
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 uppercase tracking-wider">
                <Workflow className="w-4 h-4 text-emerald-400" />
                <span>OPERATIONAL WORKFLOW & AGENT EXECUTION</span>
              </div>
              <ol className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {project.howItWorks.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed font-light">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Architecture & Engineering Rigor */}
          <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>ENGINEERING ARCHITECTURE & VALIDATION RIGOR</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              {project.architecture}
            </p>
          </div>

          {/* Key Capabilities Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                CORE CAPABILITIES & VERIFIED FINDINGS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300 font-light leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section E: Technology Stack */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
              VERIFIED TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-800/80">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                >
                  <span>Launch Live Application</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  download="ecommerce-support-architecture.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Architecture Spec (PDF)</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Source Code</span>
                </a>
              )}

              {project.linkedinUrl && (
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                >
                  <span>View LinkedIn Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors"
            >
              ← Back to Project Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
