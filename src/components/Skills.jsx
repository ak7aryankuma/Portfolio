import React from 'react';
import { Bot, Database, BarChart2, ShieldAlert, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Bot,
      category: 'AI & AGENTIC SYSTEMS',
      skills: [
        'Google ADK', 'Gemini Models', 'Multi-Agent Systems', 'Autonomous AI Agents', 
        'AI Automation Workflows', 'Prompt Engineering', 'LLM Integration', 
        'Human-in-the-Loop Risk Routing', 'Claude Code', 'FastAPI', 'n8n'
      ]
    },
    {
      icon: Database,
      category: 'PROGRAMMING & DATA ENGINEERING',
      skills: [
        'Python', 'SQL', 'Automated Data Pipelines', 'Data Extraction & Ingestion', 
        'Google BigQuery', 'Google Analytics 4 (GA4)', 'Advanced Excel (VBA/Formulas)', 
        'REST APIs', 'Pandas & NumPy'
      ]
    },
    {
      icon: BarChart2,
      category: 'ANALYTICS & FINANCIAL INTELLIGENCE',
      skills: [
        'Power BI & DAX', 'Variance Analysis', 'KPI Architecture & Reporting', 
        'Financial Modeling', 'Executive Dashboarding', 'Driver Decomposition', 
        'Trend & Seasonality Analysis', 'A/B Testing'
      ]
    },
    {
      icon: ShieldAlert,
      category: 'AUDIT, RISK & INTERNAL CONTROLS',
      skills: [
        'Statutory & Internal Audit', 'Risk Assessment', 'Internal Controls Design', 
        'Compliance & Governance', 'Account & Bank Reconciliation', 'Ledger Scrutiny', 
        'Journal Entry Verification', 'Trial Balance Review'
      ]
    },
    {
      icon: Cpu,
      category: 'CURRENTLY EXPANDING & DEEPENING',
      skills: [
        'RAG & Vector Databases', 'LangChain & LangGraph', 'Cloud Deployment (GCP/AWS/Azure)', 
        'Make.com & Zapier', 'Apache Airflow', 'LLM Evaluation & Guardrails', 'Docker'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-36 border-b border-zinc-900 bg-[#0d0d10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-3 tracking-widest uppercase">
              <span>03</span>
              <span className="text-zinc-600">//</span>
              <span>TECHNICAL COMPETENCY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Skills & Engineering Stack
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Verified technical capabilities spanning agentic orchestration, data pipelines, statistical modeling, and financial governance.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isFullWidth = idx === 4;
            return (
              <div
                key={cat.category}
                className={`p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 shadow-xl space-y-6 flex flex-col justify-between ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-400">
                    <Icon className="w-4 h-4" />
                    <span>{cat.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-zinc-900 text-[11px] font-mono text-zinc-500">
                  {cat.skills.length} verified technologies
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
