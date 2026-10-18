import React, { useState } from 'react';
import { BarChart3, TrendingUp, DollarSign, Layers, ArrowUpRight, Maximize2, FileSpreadsheet, Building2, CheckCircle2 } from 'lucide-react';

export default function BusinessAnalyst({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('executive');

  const studyA_dashboards = [
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
  ];

  const studyA_ledgers = [
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
  ];

  return (
    <section id="analyst" className="py-24 md:py-36 border-b border-zinc-900 bg-[#0d0d10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-3 tracking-widest uppercase">
              <span>02</span>
              <span className="text-zinc-600">//</span>
              <span>FEATURED CASE STUDY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              AI Business Analyst
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-lg font-normal leading-relaxed">
            Demonstrating end-to-end data modeling, DAX financial analytics, and strategic business intelligence. Rooted in analytical discipline to convert raw transactional ledgers into board-ready growth directives.
          </p>
        </div>

        {/* Study A: E-Commerce Business Intelligence */}
        <div className="space-y-12">
          {/* Executive Overview Card */}
          <div className="p-6 sm:p-10 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 shadow-2xl space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
              <div className="space-y-1">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                  CASE STUDY 01 // ENTERPRISE DATA INTELLIGENCE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  E-Commerce Business Intelligence & Performance Analysis
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                  Stack: Power BI · DAX · Excel Data Modeling · OpenAI · Business Analytics
                </p>
              </div>

              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7467973365245489152/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shrink-0"
              >
                <span>View LinkedIn Publication</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Core KPIs Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 font-mono">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                <span className="text-[11px] text-zinc-500 block">TOTAL REVENUE</span>
                <span className="text-xl sm:text-2xl font-bold text-white">$10.67M</span>
                <span className="text-[10px] text-emerald-400 block mt-1">+16.3% (2022→2023)</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                <span className="text-[11px] text-zinc-500 block">GROSS PROFIT</span>
                <span className="text-xl sm:text-2xl font-bold text-white">$1.84M</span>
                <span className="text-[10px] text-zinc-400 block mt-1">17.3% Margin Average</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                <span className="text-[11px] text-zinc-500 block">TOTAL ORDERS</span>
                <span className="text-xl sm:text-2xl font-bold text-white">3,500</span>
                <span className="text-[10px] text-zinc-400 block mt-1">17,261 Total Units Sold</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                <span className="text-[11px] text-zinc-500 block">HIGH-VOLUME SHARE</span>
                <span className="text-xl sm:text-2xl font-bold text-emerald-400">66.6%</span>
                <span className="text-[10px] text-zinc-400 block mt-1">$7.1M from Large Orders (6-9)</span>
              </div>
            </div>

            {/* Strategic Insights Bullet Strip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Growth & Anomaly Detection:</strong> 16.3% surge in 2023 followed by a -4.2% dip in 2024, identifying urgent inventory and market re-evaluation needs.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Product Economics:</strong> Camera and Monitor drive absolute top-line volume, while Laptop leads profitability at an 18.5% gross margin.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Territory Variance:</strong> West region is the top-performing territory with $2.84M in revenue, while North region suffered an identifiable dip in 2024.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Seasonality Patterns:</strong> August records peak sales every year, whereas February remains the chronic annual low across all three years.</span>
              </div>
            </div>

            {/* Tab Controls for Deep Visuals */}
            <div className="pt-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab('executive')}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeTab === 'executive'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'text-zinc-400 hover:text-white bg-zinc-900/40 border border-transparent'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Power BI Dashboards ({studyA_dashboards.length})</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('ledgers')}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeTab === 'ledgers'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'text-zinc-400 hover:text-white bg-zinc-900/40 border border-transparent'
                    }`}
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Excel Financial Models & Ledgers ({studyA_ledgers.length})</span>
                  </button>
                </div>
                <span className="hidden sm:inline font-mono text-[11px] text-zinc-500">
                  Click any sheet to inspect full resolution
                </span>
              </div>

              {/* Dashboards Tab View */}
              {activeTab === 'executive' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                  {studyA_dashboards.map((item) => (
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
                      <div className="p-4 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-zinc-100">{item.title}</h4>
                          <span className="text-[10px] font-mono text-emerald-400">{item.category}</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Excel Ledgers Tab View */}
              {activeTab === 'ledgers' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {studyA_ledgers.map((item) => (
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
                      <div className="p-4 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-semibold text-zinc-100 truncate">{item.title}</h4>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 block">{item.category}</span>
                        <p className="text-[11px] text-zinc-400 leading-snug line-clamp-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Study B: Warehouse & Retail Sales Performance Dashboard */}
          <div className="p-6 sm:p-10 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 shadow-2xl space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
              <div className="space-y-1">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                  CASE STUDY 02 // DUAL-CHANNEL OPERATIONS & LOGISTICS
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Warehouse & Retail Sales Performance Dashboard
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                  Stack: Power BI · DAX · SQL · Excel Analytics · Business Intelligence
                </p>
              </div>

              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7460639418194870272/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shrink-0"
              >
                <span>View LinkedIn Publication</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div 
                onClick={() => onOpenLightbox(
                  '/assets/projects/business-analyst-agent/warehouse-retail-dashboard.jpg',
                  'Warehouse & Retail Sales Performance Dashboard',
                  'Power BI Dual-Channel Analysis'
                )}
                className="lg:col-span-7 group cursor-pointer rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/projects/business-analyst-agent/warehouse-retail-dashboard.jpg"
                    alt="Warehouse & Retail Performance Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 text-xs font-mono text-zinc-200 border border-zinc-700">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Inspect Full Dashboard</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 text-xs sm:text-sm text-zinc-300">
                <p className="leading-relaxed">
                  Engineered to evaluate operational distribution between bulk warehouse fulfillment and consumer retail channels, identifying structural dependencies and supply risks.
                </p>
                <ul className="space-y-2.5 font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Channel Dependency:</strong> Demonstrated heavy operational reliance on warehouse-directed sales compared to retail storefronts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Supplier Concentration:</strong> Isolated key suppliers accounting for the dominant share of total revenue, highlighting vendor dependency risks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Transfer Ratio Dynamics:</strong> Measured inventory velocity and inter-warehouse transfer efficiency across high-demand product lines.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
