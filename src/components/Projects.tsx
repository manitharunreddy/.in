import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  Store,
  Layers,
  Landmark,
  Printer,
  UtensilsCrossed,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArchitectureDiagram } from './ArchitectureDiagrams';

const projectIconMap: Record<string, React.ReactNode> = {
  Store: <Store className="w-5 h-5 text-cyan-400" />,
  Layers: <Layers className="w-5 h-5 text-violet-400" />,
  Landmark: <Landmark className="w-5 h-5 text-blue-400" />,
  Printer: <Printer className="w-5 h-5 text-amber-400" />,
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-rose-400" />,
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'POS & Offline', label: 'Offline POS' },
    { id: 'Multi-Tenant SaaS', label: 'Multi-Tenant SaaS' },
    { id: 'GovTech', label: 'GovTech Systems' },
    { id: 'Desktop & Hardware', label: 'Desktop & Hardware' },
    { id: 'F&B Tech', label: 'Restaurant & F&B' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Enterprise Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Engineering Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Real-world systems engineered for scalability, offline resilience, hardware printing bridges, and government inventory tracking.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-950/60'
                  : 'bg-dark-900 text-slate-400 hover:text-slate-200 hover:bg-dark-850 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl bg-dark-900/90 border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-dark-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                      {projectIconMap[project.iconName] || <Cpu className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/40">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Subtitle & Description */}
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wide mb-1">
                    {project.subtitle}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Architecture Preview Visual */}
                <div className="pt-1">
                  <ArchitectureDiagram type={project.id} />
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Key Capabilities:
                  </span>
                  {project.keyFeatures.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer: Metrics & Details Trigger */}
              <div className="p-4 sm:px-7 sm:py-4 bg-dark-950/80 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Deployed</span>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-1 px-3 rounded-lg hover:bg-cyan-950/40"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 text-center text-xs text-slate-400 font-mono">
          <p>
            * These are proprietary enterprise systems developed for commercial clients and government departments. System architecture representations are illustrated based on verified production deployment specs.
          </p>
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
