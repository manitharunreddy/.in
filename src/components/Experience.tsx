import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Contributions' },
    { id: 'pos', label: 'Offline POS & Sync', keyword: 'pos' },
    { id: 'multitenant', label: 'Multi-Tenant SaaS', keyword: 'tenant' },
    { id: 'gov', label: 'GovTech & RBAC', keyword: 'government' },
    { id: 'hardware', label: 'Hardware & Printing', keyword: 'print' },
    { id: 'restaurant', label: 'Restaurant & F&B', keyword: 'restaurant' },
  ];

  const filteredBullets = EXPERIENCE.bulletPoints.filter((bp) => {
    if (activeCategoryFilter === 'all') return true;
    const filter = filterOptions.find((f) => f.id === activeCategoryFilter);
    if (!filter || !filter.keyword) return true;
    return (
      bp.category.toLowerCase().includes(filter.keyword) ||
      bp.text.toLowerCase().includes(filter.keyword)
    );
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Track Record & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            4 years of proven engineering impact across high-volume retail POS, multi-tenant enterprise backends, and government systems.
          </p>
        </div>

        {/* Experience Card */}
        <div className="rounded-3xl bg-dark-900/90 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
          
          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-slate-800/80 gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 shadow-lg shadow-cyan-950/40">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {EXPERIENCE.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                    Full-Time • 4 Years
                  </span>
                </div>
                <h4 className="text-base font-medium text-slate-300 mt-1">
                  {EXPERIENCE.company}
                </h4>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-dark-950 px-3 py-2 rounded-lg border border-slate-800">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{EXPERIENCE.period}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-dark-950 px-3 py-2 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{EXPERIENCE.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Stat Pill Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            <div className="p-3 bg-dark-950/80 rounded-xl border border-slate-800 text-center">
              <span className="text-cyan-400 text-base sm:text-lg font-bold font-mono">6 Outlets</span>
              <p className="text-[10px] text-slate-400 font-sans mt-0.5">Offline POS Operations</p>
            </div>
            <div className="p-3 bg-dark-950/80 rounded-xl border border-slate-800 text-center">
              <span className="text-violet-400 text-base sm:text-lg font-bold font-mono">10+ Tenants</span>
              <p className="text-[10px] text-slate-400 font-sans mt-0.5">Database-per-Tenant</p>
            </div>
            <div className="p-3 bg-dark-950/80 rounded-xl border border-slate-800 text-center">
              <span className="text-amber-400 text-base sm:text-lg font-bold font-mono">700+ Txns/Day</span>
              <p className="text-[10px] text-slate-400 font-sans mt-0.5">Per Retail Store</p>
            </div>
            <div className="p-3 bg-dark-950/80 rounded-xl border border-slate-800 text-center">
              <span className="text-emerald-400 text-base sm:text-lg font-bold font-mono">30 Offices</span>
              <p className="text-[10px] text-slate-400 font-sans mt-0.5">TGFSL State Lab Footprint</p>
            </div>
          </div>

          {/* Filter Pills for Contributions */}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-2 pb-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter Contributions:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {filterOptions.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveCategoryFilter(f.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    activeCategoryFilter === f.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-dark-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline & Contribution Cards */}
          <div className="space-y-4 pt-4">
            {filteredBullets.map((bullet, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="p-4 sm:p-5 rounded-xl bg-dark-850/60 border border-slate-800/80 hover:border-slate-700 hover:bg-dark-850 transition-all duration-200 group flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-dark-950 border border-slate-800 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:border-cyan-500/40 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wide uppercase">
                    {bullet.category}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {bullet.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Used in This Role */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Technologies Deployed In Production
            </h5>
            <div className="flex flex-wrap gap-2">
              {EXPERIENCE.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-dark-950 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
