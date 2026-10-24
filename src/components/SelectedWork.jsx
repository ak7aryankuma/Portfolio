import React, { useRef, useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Play, 
  Layers, 
  Sparkles, 
  BarChart3, 
  FileText 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectDetailModal from './ProjectDetailModal';

export default function SelectedWork({ onOpenLightbox }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      index: '01',
      tag: 'AGENTIC WORKFLOWS // HUMAN-IN-THE-LOOP',
      category: 'Agentic AI',
      title: 'AI-Powered E-Commerce Support Automation',
      subtitle: 'Intelligent Query Triage & Risk-Gated Human Review System',
      status: 'Functional System',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      cardSummary: 'Automates routine customer inquiries with local LLM reasoning while routing high-risk refund and complaint cases to a human review queue.',
      overview: 'An AI-powered e-commerce support system that automates repetitive customer inquiries (order status, tracking, delivery delays) while identifying sensitive cases (refund requests, damaged items, customer complaints) that require human judgment. Combines deterministic order verification with local LLM reasoning to ensure customer responses remain strictly grounded in transactional facts.',
      businessProblem: 'E-commerce support teams handle repetitive questions about order status, delivery delays, refunds, damaged products, and complaints. Each request requires someone to understand the issue, check order information, and decide what to do next. Handling these manually creates major operational bottlenecks, while unconstrained LLMs risk hallucinations or automatically executing risky financial transactions without human oversight.',
      solutionImpact: 'Engineered an autonomous workflow that automates the initial investigation and draft preparation without removing human judgment from sensitive decisions. Connects intelligent agents with real business processes, delivering consistent, verifiable responses grounded in live transactional order data.',
      howItWorks: [
        'Understand incoming customer messages and classify intent.',
        'Retrieve relevant order information through a Python FastAPI service.',
        'Generate grounded customer-response drafts for suitable routine cases.',
        'Identify potentially sensitive requests (refunds, escalations) and route them for human review.',
        'Validate AI-generated decisions via a defensive JavaScript normalization node before taking workflow actions.',
        'Maintain an Excel-based queue of cases awaiting supervisor inspection and approval.'
      ],
      architecture: 'Orchestrated via n8n with local Gemma LLM inference (LM Studio) and a Python FastAPI backend service. Features a JavaScript defensive normalization node that validates the model\'s structured decision before routing sensitive tickets into an Excel-backed human review queue.',
      highlights: [
        'Automated order lookup & query investigation via FastAPI REST service',
        'Gemma LLM grounded in real-time order records to draft accurate customer replies',
        'Defensive JavaScript normalization node preventing ungrounded model output',
        'Human-in-the-loop risk routing: routes refund requests and complaints to review branch',
        'Maintains structured Excel review queue for supervisor audit and approval'
      ],
      techStack: ['n8n', 'Python', 'FastAPI', 'Gemma (Local LLM)', 'LM Studio', 'Excel Queue', 'Docker', 'Google Antigravity'],
      videoSrc: '/assets/projects/project-04/demo-video.mp4',
      coverSrc: '/assets/projects/project-04/cover.png',
      pdfUrl: '/assets/projects/project-04/ecommerce-support-architecture.pdf',
      githubUrl: null,
      liveUrl: null,
    },
    {
      index: '02',
      tag: 'FINANCIAL INTELLIGENCE // AGENTIC WORKFLOW',
      category: 'Financial Agent',
      title: 'FinSight AI',
      subtitle: 'Financial & Business Performance Analyst Agent',
      status: 'Live & Deployed',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      cardSummary: 'Autonomous financial analyst agent that ingests raw ledgers, computes deterministic KPIs, and decomposes revenue/cost variances with natural language Q&A.',
      overview: 'An AI-powered Financial & Business Performance Analyst designed to automate the end-to-end analytical workflow. It digests raw multi-format Excel/CSV ledgers, computes verified KPIs, and decomposes financial variances down to root drivers (Revenue, COGS, and OPEX) while offering conversational natural-language Q&A.',
      businessProblem: 'Corporate finance analysts spend 60%+ of their time manually consolidating multi-sheet ledgers, recalculating variance formulas, and troubleshooting formatting errors. Standard LLMs hallucinate calculations when fed raw numbers, making them unusable for audited enterprise accounting.',
      solutionImpact: 'FinSight AI pairs deterministic mathematical code with generative LLM synthesis. Numbers are calculated strictly with zero hallucination via Python (Pandas/NumPy), while Gemini generates high-level executive strategic commentary and answers ad-hoc questions.',
      howItWorks: [
        'Upload multi-format CSV or Excel ledgers with automated schema detection.',
        'Deterministic audit engine calculates exact period-over-period KPIs.',
        'Mathematical variance decomposition isolates revenue, COGS, and OPEX drivers.',
        'Interactive Plotly charts and visual waterfall decompositions generated automatically.',
        'Conversational natural-language Q&A interface grounded exclusively in computed figures.'
      ],
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
      index: '03',
      tag: 'DOCUMENT INTELLIGENCE // AUDIT AUTOMATION',
      category: 'Audit Agent',
      title: 'AI Invoice Audit Agent',
      subtitle: 'Autonomous Document Processing & Risk Verification',
      status: 'Live & Deployed',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      cardSummary: 'Extracts unstructured invoice data, audits tax totals and purchase order consistency, and routes suspicious line items for human review.',
      overview: 'Built to eliminate manual auditing overhead by automating invoice document analysis, line-item verification, and consistency auditing. Applies internal audit controls directly into an automated agent workflow, extracting unstructured invoice entities and flagging suspicious discrepancies.',
      businessProblem: 'Internal audit and accounts payable teams drown in manual paperwork, checking tax percentages, line items, and PO alignments. Humans suffer fatigue leading to undetected invoice fraud, duplicate billing, and rate discrepancies.',
      solutionImpact: 'Implements systematic statutory audit controls automatically. Parses unstructured scanned invoices, performs mathematical verification on tax and totals, cross-checks against PO benchmarks, and routes anomalous or fraudulent items to an auditor queue.',
      howItWorks: [
        'Ingest scanned invoice documents across PDF and image formats.',
        'Extract header entities, vendor metadata, line items, and tax rates using advanced prompt engineering.',
        'Perform deterministic arithmetic reconciliation across unit price, quantity, tax, and net totals.',
        'Evaluate risk thresholds; auto-approve compliant documents and flag anomalies for human review.'
      ],
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
      index: '04',
      tag: 'ENTERPRISE DATA INTELLIGENCE // DAX & MODELING',
      category: 'Business Intelligence',
      title: 'E-Commerce Business Intelligence',
      subtitle: 'Multi-Year Revenue & Margin Decomposition System',
      status: 'Published Case Study',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      cardSummary: 'End-to-end data modeling and DAX business intelligence analyzing $10.67M in revenue, 3,500 orders, and 36 months of margin trends across multi-regional channels.',
      overview: 'Comprehensive business intelligence and analytical modeling project analyzing $10.67M total revenue, $1.84M gross profit, and 17,261 units across 36 monthly reporting cycles. Developed in Power BI and Excel to convert raw transactional ledgers into board-ready growth directives.',
      businessProblem: 'E-commerce executives lacked unified visibility into customer purchase sizes, territory margin variances, and annual growth dips across multi-channel product lines. Unstructured sales records hid product line profitability and geographic demand anomalies.',
      solutionImpact: 'Delivered an executive BI suite with 4 Power BI dashboards and 6 granular Excel financial models. Identified a 16.3% growth surge in 2023 followed by a -4.2% dip in 2024, proved that large orders (6-9 units) generate 66.6% ($7.1M) of total revenue, and isolated Laptop as the top margin driver (18.5%).',
      howItWorks: [
        'Modeled 3,500 transactions and 17,261 sold units into relational schemas.',
        'Engineered custom DAX measures for YoY growth, profit margins, and cohort distribution.',
        'Built 4 interactive Power BI executive dashboards for trend, territory, and margin analysis.',
        'Constructed 6 financial Excel ledgers and heatmaps for unit economics and monthly scrutiny.'
      ],
      architecture: 'Star-schema relational model built in Power BI & Excel, integrating DAX calculations, cohort segmentation matrices, and time-series variance decomposition.',
      kpis: [
        { label: 'TOTAL REVENUE', value: '$10.67M', change: '+16.3% (2022→2023)' },
        { label: 'GROSS PROFIT', value: '$1.84M', change: '17.3% Margin Average' },
        { label: 'TOTAL ORDERS', value: '3,500', change: '17,261 Total Units Sold' },
        { label: 'HIGH-VOLUME SHARE', value: '66.6%', change: '$7.1M from Large Orders (6-9)' },
      ],
      highlights: [
        'Growth & Anomaly Detection: 16.3% surge in 2023 followed by a -4.2% dip in 2024',
        'Product Economics: Camera & Monitor drive top-line volume; Laptop leads profitability at 18.5% margin',
        'Territory Variance: West region top territory ($2.84M); North region identified with a 2024 dip',
        'Seasonality Patterns: August peak sales; February chronic annual low across all 3 years'
      ],
      techStack: ['Power BI', 'DAX', 'Excel Data Modeling', 'OpenAI', 'Business Analytics', 'SQL'],
      coverSrc: '/assets/projects/business-analyst-agent/executive-dashboard.png',
      dashboards: [
        {
          id: 'exec-dash',
          title: 'Executive Performance Dashboard',
          category: 'Power BI / DAX',
          src: '/assets/projects/business-analyst-agent/executive-dashboard.png',
          desc: 'Consolidated executive view displaying $10.67M total revenue, $1.84M profit, unit volume, and regional breakdowns.',
        },
        {
          id: 'kpi-trend',
          title: 'KPI Summary & 3-Year Monthly Revenue Trend',
          category: 'Time Series / Trend Analysis',
          src: '/assets/projects/business-analyst-agent/kpi-summary-trend.png',
          desc: '36-month trend lines comparing 2022 vs 2023 vs 2024. Reveals annual peaks in August and consistent February troughs.',
        },
        {
          id: 'cat-profit',
          title: 'Category Share & Margin Band Distribution',
          category: 'Portfolio Economics',
          src: '/assets/projects/business-analyst-agent/category-profitability.png',
          desc: 'Category share breakdown (Electronics 49.9%, Accessories 39.8%) and margin distribution bands across product lines.',
        },
        {
          id: 'reg-purchasing',
          title: 'Regional Trends & Purchasing Behavior',
          category: 'Geographic & Cohort Analysis',
          src: '/assets/projects/business-analyst-agent/regional-purchasing.png',
          desc: 'Regional revenue trajectories and order size segmentation proving large orders (6–9 units) generate 66.6% ($7.1M) of sales.',
        },
      ],
      ledgers: [
        {
          id: 'excel-regional',
          title: 'Regional Trends & Category Breakdown (2022–2024)',
          category: 'Multi-Year Regional Ledger',
          src: '/assets/projects/business-analyst-agent/excel-regional-trends.png',
          desc: 'Granular tabular breakdown of orders, unit sales, cost, profit, and margin % across West, East, South, and North territories.',
        },
        {
          id: 'excel-monthly',
          title: 'Monthly Performance Detail Across 36 Months',
          category: 'Temporal Financial Ledger',
          src: '/assets/projects/business-analyst-agent/excel-monthly-performance.png',
          desc: 'Complete month-by-month record showing exact orders, units, revenue, cost, profit, and margin % per period.',
        },
        {
          id: 'excel-ordersize',
          title: 'Order Size Distribution & Regional Heatmap',
          category: 'Customer Segment Modeling',
          src: '/assets/projects/business-analyst-agent/excel-ordersize-heatmap.png',
          desc: 'Order segment economics and cross-tabulation matrix mapping each product performance against geographic regions.',
        },
        {
          id: 'excel-category',
          title: 'Category Analysis & Year-over-Year Growth',
          category: 'YoY Growth Modeling',
          src: '/assets/projects/business-analyst-agent/excel-category-analysis.png',
          desc: 'Year-over-year revenue progression across Electronics (+13.1%), Accessories (+6.9%), and Office supplies (+20.8%).',
        },
        {
          id: 'excel-profitability',
          title: 'Profitability & Cost Efficiency Matrix',
          category: 'Unit Economics & Margin Bands',
          src: '/assets/projects/business-analyst-agent/excel-profitability-cost-efficiency.png',
          desc: 'Cost-to-revenue ratios and margin bands confirming Laptop as the peak margin driver (18.5%) and identifying cost anomalies.',
        },
        {
          id: 'excel-modeling',
          title: 'Comprehensive Product Performance Model',
          category: 'Core Data Model',
          src: '/assets/projects/business-analyst-agent/excel-data-modeling.png',
          desc: 'Complete relational product master ledger integrating order quantities, costs, gross profit, and performance tagging.',
        },
      ],
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7467973365245489152/',
    },
    {
      index: '05',
      tag: 'DUAL-CHANNEL LOGISTICS // SUPPLY CHAIN ANALYTICS',
      category: 'Logistics Intelligence',
      title: 'Warehouse & Retail Sales Intelligence',
      subtitle: 'Dual-Channel Operations & Logistics Risk Dashboard',
      status: 'Published Case Study',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      cardSummary: 'Dual-channel logistics and fulfillment intelligence model analyzing bulk warehouse distribution vs retail storefront demand and vendor concentration.',
      overview: 'Engineered to evaluate operational distribution between bulk warehouse fulfillment and consumer retail channels, identifying structural dependencies, inter-warehouse transfer dynamics, and supplier concentration risks.',
      businessProblem: 'Companies with mixed distribution channels (bulk warehouse wholesale vs consumer storefronts) frequently struggle with inventory misallocation, vendor reliance bottlenecks, and slow stock replenishment.',
      solutionImpact: 'Developed a comprehensive operational intelligence dashboard in Power BI and DAX that monitors distribution velocity between bulk warehouse fulfillment and consumer retail channels, isolating critical supplier dependencies.',
      howItWorks: [
        'Aggregate multi-channel inventory logs across regional fulfillment centers and retail outlets.',
        'Model transfer velocity ratios to measure inter-warehouse replenishment efficiency.',
        'Analyze supplier concentration indices to isolate vendor dependency and delivery bottlenecks.',
        'Present interactive Power BI dashboards for supply chain managers and logistics directors.'
      ],
      architecture: 'Relational data pipeline combining SQL warehouse queries, DAX operational measures, and channel transfer velocity modeling.',
      highlights: [
        'Channel Dependency: Demonstrated heavy operational reliance on warehouse-directed sales compared to retail storefronts',
        'Supplier Concentration: Isolated key suppliers accounting for the dominant share of total revenue, highlighting vendor dependency risks',
        'Transfer Ratio Dynamics: Measured inventory velocity and inter-warehouse transfer efficiency across high-demand product lines'
      ],
      techStack: ['Power BI', 'DAX', 'SQL', 'Excel Analytics', 'Business Intelligence', 'Supply Chain Analytics'],
      coverSrc: '/assets/projects/business-analyst-agent/warehouse-retail-dashboard.jpg',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7460639418194870272/',
    },
    {
      index: '06',
      tag: 'FULL-STACK // MULTI-LLM ASSISTED',
      category: 'Full-Stack AI',
      title: 'FinZen AI',
      subtitle: 'AI-Powered Personal Finance & Budgeting Manager',
      status: 'Functional Prototype',
      statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      cardSummary: 'Full-stack wealth management application integrating dual-LLM intelligence (Claude & ChatGPT) for automated expense tracking and savings advice.',
      overview: 'A full-stack personal finance application designed to make personal wealth management insightful and automated. Integrates dual-LLM intelligence (Claude & ChatGPT) to generate custom spending recommendations, track categorical expenses, and guide long-term savings targets.',
      businessProblem: 'Managing personal finances across multiple bank accounts and spending categories is tedious. Traditional budgeting tools present static charts without personalized behavioral guidance on how to optimize expenses.',
      solutionImpact: 'FinZen AI combines full-stack tracking with dual-LLM automated analysis, providing real-time categorical expense tracking, multi-LLM financial insights, and interactive savings goal calculators.',
      howItWorks: [
        'Record and manage daily transactions across customized budget categories.',
        'Store and aggregate user financial data using Express and MongoDB backend APIs.',
        'Synthesize personalized financial insights and recommendations via dual Claude & ChatGPT API queries.',
        'Deliver interactive visualizations and progress tracking across web and mobile viewports.'
      ],
      architecture: 'MERN-stack application paired with multi-LLM API integrations. Leverages AI-assisted engineering methodologies to accelerate development, automated debugging, and architectural scaffolding.',
      highlights: [
        'Real-time categorical expense tracking & income monitoring',
        'Multi-LLM financial insights synthesizing Claude & ChatGPT analyses',
        'Interactive financial goal calculators & progress tracking',
        'Responsive multi-device dashboards for web and mobile'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Chart.js', 'Claude API', 'OpenAI'],
      coverSrc: '/assets/projects/project-03/cover.png',
      githubUrl: 'https://github.com/ak7aryankuma/FenZenAI',
      liveUrl: null,
    }
  ];

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < maxScroll - 15);

    const cards = trackRef.current.children;
    if (cards && cards.length > 0) {
      const cardWidth = cards[0].offsetWidth;
      const gap = 24; // gap-6
      const currentIndex = Math.min(
        projects.length - 1,
        Math.max(0, Math.round(scrollLeft / (cardWidth + gap)))
      );
      setActiveIndex(currentIndex);
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    checkScroll();
    return () => {
      track.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [projects.length]);

  const scrollNext = () => {
    if (!trackRef.current) return;
    const cards = trackRef.current.children;
    const cardWidth = cards[0]?.offsetWidth || 380;
    trackRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    if (!trackRef.current) return;
    const cards = trackRef.current.children;
    const cardWidth = cards[0]?.offsetWidth || 380;
    trackRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      scrollNext();
    } else if (e.key === 'ArrowLeft') {
      scrollPrev();
    }
  };

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="work" className="py-24 md:py-32 border-b border-zinc-900 bg-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-8 border-b border-zinc-900">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-3 tracking-widest uppercase">
              <span>01</span>
              <span className="text-zinc-600">//</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Autonomous Systems & Intelligence
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl font-normal leading-relaxed">
              Engineered for deterministic math, automated data auditing, and human-in-the-loop operational safety. Browse horizontally and select any project to explore its architecture.
            </p>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0">
            {/* Project Index Counter */}
            <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 bg-zinc-900/60 border border-zinc-800 px-3.5 py-2 rounded-xl">
              <span className="text-emerald-400 font-semibold">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="text-zinc-600">/</span>
              <span>{String(projects.length).padStart(2, '0')}</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider ml-1 hidden sm:inline">PROJECTS</span>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous project"
                className={`p-2.5 sm:p-3 rounded-xl border transition-all ${
                  canScrollLeft
                    ? 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 active:scale-95'
                    : 'bg-zinc-950/60 border-zinc-900 text-zinc-600 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollRight}
                aria-label="Next project"
                className={`p-2.5 sm:p-3 rounded-xl border transition-all ${
                  canScrollRight
                    ? 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 active:scale-95'
                    : 'bg-zinc-950/60 border-zinc-900 text-zinc-600 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontally Swipeable Project Gallery Track */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div
            ref={trackRef}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Horizontally scrollable projects gallery"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 no-scrollbar focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded-2xl"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project) => (
              <div
                key={project.index}
                onClick={() => handleOpenProject(project)}
                className="group relative flex flex-col justify-between w-[84vw] sm:w-[380px] lg:w-[calc(33.333%-1rem)] min-w-[300px] sm:min-w-[360px] lg:max-w-[420px] shrink-0 snap-start snap-always rounded-2xl bg-[#111114] border border-zinc-800/90 hover:border-zinc-700 hover:shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300 cursor-pointer overflow-hidden flex-1"
              >
                {/* Top Media Preview Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                  <img
                    src={project.coverSrc}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                  {/* Floating Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-zinc-950/85 text-zinc-200 border border-zinc-800 backdrop-blur-md">
                      {project.index} // {project.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border backdrop-blur-md ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Video/Preview Icon Indicator on Media */}
                  <div className="absolute bottom-3 right-3 z-10">
                    {project.videoSrc ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/90 text-[10px] font-mono text-zinc-300 border border-zinc-800 backdrop-blur-md group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                        <Play className="w-3 h-3 fill-current text-emerald-400" />
                        <span>VIDEO DEMO</span>
                      </span>
                    ) : project.dashboards ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/90 text-[10px] font-mono text-zinc-300 border border-zinc-800 backdrop-blur-md group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                        <BarChart3 className="w-3 h-3 text-emerald-400" />
                        <span>DASHBOARDS</span>
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider line-clamp-1">
                      {project.tag}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono text-emerald-400/80 line-clamp-1">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 pt-1 font-light">
                      {project.cardSummary}
                    </p>
                  </div>

                  {/* Card Bottom Meta & CTA */}
                  <div className="space-y-4 pt-2">
                    {/* Tech Pills (Show top 3) */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 group-hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors">
                        <span>EXPLORE PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>

                      {/* Direct External Links Quick Buttons */}
                      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                            title="Launch Live Application"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                            title="View GitHub Repository"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.pdfUrl && (
                          <a
                            href={project.pdfUrl}
                            target="_blank"
                            rel="noreferrer"
                            download="ecommerce-support-architecture.pdf"
                            className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                            title="Download Architecture Spec PDF"
                          >
                            <FileText className="w-3.5 h-3.5 text-emerald-400" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Progress Line & Discoverability Footer */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Subtle Progress Bar */}
          <div className="flex-1 max-w-md h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/60">
            <div
              className="h-full bg-emerald-400 rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${Math.max(16, ((activeIndex + 1) / projects.length) * 100)}%`
              }}
            />
          </div>

          {/* Swipe / Navigation Hint */}
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
            <span className="hidden sm:inline">Use arrows, trackpad swipe, or keys (←/→) to navigate</span>
            <span className="sm:hidden">Swipe horizontally to discover all 6 projects</span>
          </div>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onOpenLightbox={onOpenLightbox}
      />
    </section>
  );
}
