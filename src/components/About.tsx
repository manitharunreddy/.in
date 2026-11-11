import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Layers,
  Cpu,
  GraduationCap,
  Sparkles,
  Server,
  Workflow,
  Radio,
  FileCheck2
} from 'lucide-react';
import { EDUCATION, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const coreCompetencies = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Full-Stack & Enterprise Systems",
      description: "Architecting end-to-end web platforms using React, Node.js, Express, and SQL databases designed for high volume, continuous uptime, and maintainable codebases."
    },
    {
      icon: <Radio className="w-5 h-5 text-blue-400" />,
      title: "Offline-First Architecture",
      description: "Engineering local-storage failovers with SQLite and Electron, enabling checkout lanes to function seamlessly during internet outages and replay batches without data loss."
    },
    {
      icon: <Server className="w-5 h-5 text-violet-400" />,
      title: "Database-per-Tenant Multi-Tenancy",
      description: "Implementing strict tenant data isolation for enterprise B2B retail chains with connection pool caching, ensuring zero cross-tenant data leaks and independent backups."
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      title: "Desktop & Silent Hardware Bridges",
      description: "Building Electron desktop daemons with embedded Express HTTP servers, managing printer queues for zero-dialog thermal receipt generation and barcode scanner integrations."
    },
    {
      icon: <Workflow className="w-5 h-5 text-emerald-400" />,
      title: "Real-Time Sync & Workflows",
      description: "Bidirectional WebSocket protocols, UUID-based conflict resolution, multi-stage approval indents, and automated Receipt/Issue Voucher generation for government audits."
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-rose-400" />,
      title: "Retail & Restaurant Operations",
      description: "Comprehensive POS billing, Dine-In floor plans, KOT kitchen routing, GST calculations, and Swiggy/Zomato online delivery webhook integrations via UrbanPiper."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Profile & Core Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Passionate software engineer bridging distributed cloud backends, resilient desktop runtimes, and polished user experiences.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-dark-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 backdrop-blur-md shadow-xl space-y-5"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Full-Stack Software Engineer</h3>
                <p className="text-xs font-mono text-slate-400">Based in Hyderabad, Telangana, India</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              With 4 years of hands-on professional experience developing enterprise-grade software at Young Minds Technology Solutions, I specialize in building mission-critical web applications, high-throughput backend services, and offline-resilient retail POS ecosystems.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              My engineering work is defined by solving real-world physical and architectural constraints: ensuring retail cashiers can bill hundreds of transactions without an active internet connection, maintaining strict data isolation for enterprise B2B tenants through database-per-tenant architectures, and bridging web interfaces to thermal receipt printers with zero operating system dialog interruptions.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Whether architecting bidirectional WebSocket synchronization pipelines, coordinating procurement workflows across 30 government district offices, or integrating food delivery aggregator webhooks for automated kitchen tickets, I approach every project with an emphasis on system integrity, reliability, and developer maintainability.
            </p>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-slate-400 font-mono">PRIMARY STACK</div>
                <div className="text-sm font-semibold text-white mt-0.5">React • Node • TS</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">DATABASES</div>
                <div className="text-sm font-semibold text-white mt-0.5">PostgreSQL • MySQL • SQLite</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">SPECIALTY</div>
                <div className="text-sm font-semibold text-cyan-400 mt-0.5">Offline-First & Multi-Tenant</div>
              </div>
            </div>
          </motion.div>

          {/* Education & Career Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="bg-dark-900/90 rounded-2xl p-6 sm:p-7 border border-slate-800 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Education & Academic Foundation</h3>
                  <p className="text-xs text-slate-400">{EDUCATION.duration}</p>
                </div>
              </div>

              <div className="bg-dark-950/80 p-4 rounded-xl border border-slate-800/80 space-y-2">
                <h4 className="text-sm font-bold text-cyan-300">
                  {EDUCATION.degree}
                </h4>
                <p className="text-xs font-medium text-slate-200">
                  {EDUCATION.specialization}
                </p>
                <p className="text-xs text-slate-400 flex items-center justify-between">
                  <span>{EDUCATION.institution}</span>
                  <span className="text-slate-400">{EDUCATION.location}</span>
                </p>
              </div>

              <ul className="mt-4 space-y-2">
                {EDUCATION.highlights.map((point, i) => (
                  <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact Snapshot */}
            <div className="bg-gradient-to-br from-dark-900 to-dark-850 p-6 rounded-2xl border border-slate-800/80 shadow-lg">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Quick Snapshot
              </h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Experience</span>
                  <span className="font-semibold text-white">4 Years (2022 - 2026)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Company</span>
                  <span className="font-semibold text-white">Young Minds Tech Solutions</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Work Model</span>
                  <span className="font-semibold text-white">Full-Stack & Distributed Systems</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Location</span>
                  <span className="font-semibold text-cyan-400">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 6 Key Architectural Pillars */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Specialized Engineering Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreCompetencies.map((comp, idx) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-xl bg-dark-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-dark-850/80 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 w-fit mb-3 group-hover:border-cyan-500/30 transition-colors">
                  {comp.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-100 mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {comp.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {comp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

