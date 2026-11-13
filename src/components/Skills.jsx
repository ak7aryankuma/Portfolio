import React from 'react';
import { Bot, Database, BarChart2, ShieldAlert } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Bot,
      category: 'AI & AGENTIC SYSTEMS',
      skills: [
        'AI Agents & Multi-Agent Systems',
        'Agentic AI Architecture',
        'LLM Application Development',
        'RAG & Vector Databases',
        'LangChain & LangGraph',
        'Google ADK & MCP',
        'AI Workflow Automation',
        'LLM Integration & API Orchestration',
        'Human-in-the-Loop AI Systems',
        'LLM Evaluation, Validation & Guardrails'
      ]
    },
    {
      icon: Database,
      category: 'PROGRAMMING & DATA ENGINEERING',
      skills: [
        'Python',
        'FastAPI',
        'SQL',
        'Data Pipelines & ETL/ELT',
        'API Development & Integration',
        'Docker & Containerization',
        'Cloud Deployment',
        'n8n Workflow Automation',
        'Git & GitHub',
        'Data Analysis & Automation'
      ]
    },
    {
      icon: BarChart2,
      category: 'ANALYTICS & FINANCIAL INTELLIGENCE',
      skills: [
        'Power BI & DAX',
        'Variance Analysis',
        'KPI Architecture & Reporting',
        'Financial Modeling',
        'Executive Dashboarding',
        'Driver Decomposition',
        'Trend & Seasonality Analysis',
        'A/B Testing'
      ]
    },
    {
      icon: ShieldAlert,
      category: 'AUDIT, RISK & INTERNAL CONTROLS',
      skills: [
        'Statutory & Internal Audit',
        'Risk Assessment',
        'Internal Controls Design',
        'Compliance & Governance',
        'Account & Bank Reconciliation',
        'Ledger Scrutiny',
        'Journal Entry Verification',
        'Trial Balance Review'
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 shadow-xl space-y-6 flex flex-col justify-between hover:border-zinc-700/80 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-400">
                    <Icon className="w-4 h-4" />
                    <span className="tracking-wider uppercase">{cat.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
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
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>{cat.skills.length} core capabilities</span>
                  <span className="text-emerald-400/80">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
