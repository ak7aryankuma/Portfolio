import React from 'react';
import VideoPlayer from './VideoPlayer';
import { ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Cpu, ArrowUpRight, Maximize2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function SelectedWork({ onOpenLightbox }) {
  const projects = [
    {
      index: '01',
      tag: 'FINANCIAL INTELLIGENCE // AGENTIC WORKFLOW',
      title: 'FinSight AI',
      subtitle: 'Financial & Business Performance Analyst Agent',
      status: 'Live & Deployed',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'An AI-powered Financial & Business Performance Analyst designed to automate the end-to-end analytical workflow. It digests raw multi-format Excel/CSV ledgers, computes verified KPIs, and decomposes financial variances down to root drivers (Revenue, COGS, and OPEX) while offering conversational natural-language Q&A.',
      architecture: 'Combines deterministic Python calculations (Pandas, NumPy) with generative intelligence (Google ADK, Gemini) to eliminate hallucinated numbers while preserving strategic reasoning.',
      highlights: [
        'Automated data-quality audits and raw ledger ingestion',
        'Mathematical variance decomposition (identifying revenue & cost drivers)',
        'Conversational Q&A: "Which region performed best?", "What caused profitability shifts?"',
        'Management-ready executive reports and variance charts'
      ],
      techStack: ['Python', 'Google ADK', 'Gemini', 'Streamlit', 'Pandas', 'NumPy', 'Plotly'],
      videoSrc: '/assets/projects/project-01/demo-video.mp4',
      coverSrc: '/assets/projects/project-01/cover.jpg',
      githubUrl: 'https://github.com/ak7aryankuma/FinancialAnalystAgent',
      liveUrl: 'https://financialanalystagent-klgoappyzrpeq8z2vsz47ey.streamlit.app/',
    },
    {
      index: '02',
      tag: 'DOCUMENT INTELLIGENCE // AUDIT AUTOMATION',
      title: 'AI Invoice Audit Agent',
      subtitle: 'Autonomous Document Processing & Risk Verification',
      status: 'Live & Deployed',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'Built to eliminate manual auditing overhead by automating invoice document analysis, line-item verification, and consistency auditing. Applies internal audit controls directly into an automated agent workflow, extracting unstructured invoice entities and flagging suspicious discrepancies.',
      architecture: 'Employs advanced Google Prompting & GenAI principles to parse complex invoice layouts, cross-validate purchase orders, and route high-risk anomalies directly to human reviewers.',
      highlights: [
        'Automated line-item data extraction from unstructured invoices',
        'Cross-checks calculations, tax totals, and purchase order consistency',
        'Human-in-the-loop risk routing for flagged anomalies and suspicious rates',
        'Structured audit insights for rapid executive finance approval'
      ],
      techStack: ['Python', 'Generative AI', 'Prompt Engineering', 'Streamlit', 'Document AI', 'Workflow Automation'],
      videoSrc: '/assets/projects/project-02/demo-video.mp4',
      coverSrc: '/assets/projects/project-02/cover.jpg',
      githubUrl: 'https://github.com/ak7aryankuma/AI_INVOICE_AUDIT_AGENT',
      liveUrl: 'https://aiinvoiceauditagent.streamlit.app/',
    },
    {
      index: '03',
      tag: 'FULL-STACK // MULTI-LLM ASSISTED',
      title: 'FinZen AI',
      subtitle: 'AI-Powered Personal Finance & Budgeting Manager',
      status: 'Functional Prototype',
      statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'A full-stack personal finance application designed to make personal wealth management insightful and automated. Integrates dual-LLM intelligence (Claude & ChatGPT) to generate custom spending recommendations, track categorical expenses, and guide long-term savings targets.',
      architecture: 'MERN-stack application paired with multi-LLM API integrations. Leverages AI-assisted engineering methodologies to accelerate development, automated debugging, and architectural scaffolding.',
      highlights: [
        'Real-time categorical expense tracking & income monitoring',
        'Multi-LLM financial insights synthesizing Claude & ChatGPT analyses',
        'Interactive financial goal calculators & progress tracking',
        'Responsive multi-device dashboards for web and mobile'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Chart.js', 'Claude API', 'OpenAI'],
      videoSrc: null,
      coverSrc: '/assets/projects/project-03/cover.png',
      githubUrl: 'https://github.com/ak7aryankuma/FenZenAI',
      liveUrl: null,
    }
  ];

  return (
    <section id="work" className="py-24 md:py-36 border-b border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6 pb-8 border-b border-zinc-900">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-3 tracking-widest uppercase">
              <span>01</span>
              <span className="text-zinc-600">//</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Autonomous Systems & AI Agents
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Real-world applications engineered for data verifiability, deterministic mathematics, and operational workflow automation.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project) => (
            <div 
              key={project.index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
            >
              {/* Media Container (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                {project.videoSrc ? (
                  <div className="space-y-3">
                    <VideoPlayer 
                      src={project.videoSrc} 
                      poster={project.coverSrc} 
                      title={project.title} 
                    />
                    {project.coverSrc && (
                      <div className="flex items-center justify-between text-xs text-zinc-500 font-mono px-1">
                        <span>Interactive Walkthrough Video</span>
                        <button
                          onClick={() => onOpenLightbox(project.coverSrc, project.title, "Cover Overview Graphic")}
                          className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Presentation Graphic</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div 
                    onClick={() => onOpenLightbox(project.coverSrc, project.title, "Full Device Mockup")}
                    className="group relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl cursor-pointer"
                  >
                    <img 
                      src={project.coverSrc} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/90 text-xs font-mono text-zinc-200 border border-zinc-700">
                        <Maximize2 className="w-4 h-4 text-emerald-400" />
                        <span>Inspect High-Res Preview</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Container (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-500 tracking-wider">
                      PROJECT // {project.index}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-emerald-400/90">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Note */}
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ENGINEERING ARCHITECTURE</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {project.architecture}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono text-zinc-500 block">KEY CAPABILITIES</span>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-zinc-500 block mb-2">TECHNOLOGIES</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                    >
                      <span>Live Application</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
