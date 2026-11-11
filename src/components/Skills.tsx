import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Monitor,
  Network,
  Terminal,
  Search,
  CheckCircle2,
  Cpu,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const categoryIconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-blue-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-violet-400" />,
  Monitor: <Monitor className="w-5 h-5 text-amber-400" />,
  Network: <Network className="w-5 h-5 text-emerald-400" />,
  Terminal: <Terminal className="w-5 h-5 text-rose-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = [
    { id: 'all', label: 'All Domains' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'desktop', label: 'Desktop & Hardware' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() === '') {
      return true;
    }
    const q = searchQuery.toLowerCase();
    const matchesCategory = category.name.toLowerCase().includes(q) || category.description.toLowerCase().includes(q);
    const matchesSkills = category.skills.some((s) => s.name.toLowerCase().includes(q) || (s.tag && s.tag.toLowerCase().includes(q)));
    return matchesCategory || matchesSkills;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills & Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Battle-tested technologies utilized in production across multi-tenant enterprise backends, offline retail terminals, and state systems.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/60'
                    : 'bg-dark-900 text-slate-400 hover:text-slate-200 hover:bg-dark-850 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, e.g. SQLite, Docker..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-dark-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="rounded-2xl bg-dark-900/90 border border-slate-800/90 p-6 backdrop-blur-md hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-dark-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {categoryIconMap[cat.iconName] || <Layers className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {cat.skills.length} verified technologies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                          skill.isPrimary
                            ? 'bg-dark-800 text-slate-100 border border-cyan-500/30 hover:border-cyan-400/60 shadow-sm'
                            : 'bg-dark-950/60 text-slate-300 border border-slate-800/90 hover:border-slate-700'
                        }`}
                      >
                        {skill.isPrimary && (
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        )}
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-dark-950 text-slate-400 border border-slate-800/80">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Production Ready</span>
                  <span className="text-emerald-400">● 100% Verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-dark-900/40 rounded-xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

