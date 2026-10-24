import React from 'react';
import { Award, ExternalLink, Calendar, Building, Maximize2, CheckCircle2 } from 'lucide-react';

export default function Certificates({ onOpenLightbox }) {
  const certificates = [
    {
      id: 'google-prompting',
      title: 'Google Prompting Essentials',
      issuer: 'Google (via Coursera)',
      date: 'June 29, 2026',
      credentialUrl: 'https://coursera.org/verify/specialization/1CMWPATF3I4K',
      description: '4-Course Specialization covering prompt engineering principles, multi-task automation, data analysis acceleration, and creative partner workflows.',
      imageSrc: '/assets/certificates/google-prompting-essentials.jpg',
      badgeSrc: '/assets/certificates/badge-google-prompting-essentials.png'
    },
    {
      id: 'google-ai',
      title: 'Google AI Essentials',
      issuer: 'Google (via Coursera)',
      date: 'June 27, 2026',
      credentialUrl: 'https://coursera.org/verify/specialization/U6BY5PD8N87L',
      description: '5-Course Specialization covering foundational AI concepts, workplace productivity tools, responsible AI deployment, and prompt techniques.',
      imageSrc: '/assets/certificates/google-ai-essentials.jpg',
      badgeSrc: '/assets/certificates/badge-google-ai-essentials.png'
    },
    {
      id: 'kaggle-agents',
      title: '5-Day AI Agents: Intensive Vibe Coding',
      issuer: 'Kaggle | Google',
      date: 'July 30, 2026',
      credentialUrl: null,
      description: 'Hands-on intensive development course focused on building, debugging, and deploying autonomous AI agents.',
      imageSrc: '/assets/certificates/google-kaggle-5day-ai-agents.jpg',
      badgeSrc: null
    },
    {
      id: 'cisco-analytics',
      title: 'Data Analytics Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'July 07, 2026',
      credentialUrl: null,
      description: 'Comprehensive student-level credential for data preparation, statistical analysis, SQL, Tableau, and Excel analytics labs.',
      imageSrc: '/assets/certificates/cisco-data-analytics-essentials.png',
      badgeSrc: '/assets/certificates/badge-cisco-data-analytics.png'
    },
    {
      id: 'iimb-equity',
      title: 'Equity Stock Market',
      issuer: 'Indian Institute of Management Bangalore (IIMB) / SWAYAM',
      date: 'December 27, 2023',
      credentialUrl: 'https://swayam.gov.in/',
      description: 'Two-credit academic certification in capital markets, equity valuation, and securities analysis. Proctored examination held by IIM Bangalore.',
      imageSrc: '/assets/certificates/iimb-swayam-equity-stock-market.png',
      badgeSrc: null
    },
    {
      id: 'iima-acmegrade',
      title: 'Training Completion in Finance',
      issuer: 'Acmegrade (CHAOS, IIM Ahmedabad)',
      date: 'August 15 – September 15, 2023',
      credentialUrl: null,
      description: 'Practical corporate finance training covering financial modeling, valuation, and ledger analysis. Verified Certificate ID: AGC2023082285.',
      imageSrc: '/assets/certificates/acmegrade-iima-finance-training.jpg',
      badgeSrc: null
    }
  ];

  const digitalBadges = [
    {
      title: 'Google Prompting Essentials',
      issuer: 'Google | Coursera',
      src: '/assets/certificates/badge-google-prompting-essentials.png'
    },
    {
      title: 'Cisco Data Analytics',
      issuer: 'Cisco Networking Academy',
      src: '/assets/certificates/badge-cisco-data-analytics.png'
    },
    {
      title: 'Google AI Essentials',
      issuer: 'Google | Coursera',
      src: '/assets/certificates/badge-google-ai-essentials.png'
    },
    {
      title: 'AI in Accounting 101',
      issuer: 'Miles Education | CAIRA',
      src: '/assets/certificates/badge-miles-caira-ai-in-accounting.png'
    }
  ];

  return (
    <section id="certifications" className="py-24 md:py-36 border-b border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6 pb-8 border-b border-zinc-900">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-3 tracking-widest uppercase">
              <span>04</span>
              <span className="text-zinc-600">//</span>
              <span>ACCREDITATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Certifications & Badges
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Formally verified credentials in AI engineering, prompt design, data analytics, and capital markets from premier institutions.
          </p>
        </div>

        {/* Certificates Grid (Large readable previews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between rounded-2xl overflow-hidden bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-xl group"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => onOpenLightbox(cert.imageSrc, cert.title, cert.issuer)}
                className="relative aspect-[4/3] bg-zinc-900 overflow-hidden cursor-pointer"
              >
                <img
                  src={cert.imageSrc}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-xs font-mono text-zinc-200 border border-zinc-700 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View Readable Certificate</span>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Building className="w-3.5 h-3.5" />
                      <span className="truncate">{cert.issuer}</span>
                    </span>
                    <span className="shrink-0">{cert.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
                  <button
                    onClick={() => onOpenLightbox(cert.imageSrc, cert.title, cert.issuer)}
                    className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    Inspect Full Image
                  </button>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Badges Strip */}
        <div className="mt-20 pt-12 border-t border-zinc-900">
          <div className="mb-8">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block mb-1">
              DIGITAL ACCREDITATION BADGES
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Verified Issuer Badges
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {digitalBadges.map((badge, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightbox(badge.src, badge.title, badge.issuer)}
                className="group cursor-pointer p-6 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col items-center text-center space-y-4"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                  <img
                    src={badge.src}
                    alt={badge.title}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">{badge.title}</h4>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{badge.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
