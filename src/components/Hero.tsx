import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Database,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  RefreshCw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sync' | 'tenant' | 'terminal'>('sync');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleCopyCode = () => {
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/5 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-subtle-grid [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-slate-800 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Full-Stack Web & Offline-First POS Engineer
              </span>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Main Title & Role */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Manitharun Reddy{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Thallapureddy
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 font-sans">
                Full-Stack Software Engineer
              </p>
            </div>

            {/* Introduction Statement */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              I build scalable web applications, offline-first POS systems, enterprise management platforms, and real-world software solutions.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Core Production Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-dark-850/80 text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Actions & Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-cyan-950/60 hover:shadow-cyan-500/30 transition-all duration-300 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Manitharun_Reddy_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-900/90 hover:bg-dark-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 text-sm font-medium transition-all duration-200 shadow-md group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-dark-900/90 hover:bg-dark-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub: manitharunreddy"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-dark-900/90 hover:bg-dark-800 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-slate-700 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: manitharunreddy"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-dark-900/90 hover:bg-dark-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-all"
                  aria-label="Email Address"
                  title="Email: manitharunreddy@gmail.com"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code & Architecture Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-dark-900/95 border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl group">
              {/* Top Window Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-dark-950/90 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    pos-sync-engine.ts
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyCode}
                    className="p-1 text-slate-400 hover:text-slate-200 rounded transition-colors"
                    title="Copy code snippet"
                  >
                    {copiedSnippet ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Visualizer Mode Tabs */}
              <div className="flex border-b border-slate-800/70 bg-dark-950/40 text-[11px] font-mono px-3 pt-1">
                <button
                  onClick={() => setActiveTab('sync')}
                  className={`px-3 py-1.5 border-b-2 font-medium transition-colors ${
                    activeTab === 'sync'
                      ? 'border-cyan-400 text-cyan-300'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  OfflineSync.ts
                </button>
                <button
                  onClick={() => setActiveTab('tenant')}
                  className={`px-3 py-1.5 border-b-2 font-medium transition-colors ${
                    activeTab === 'tenant'
                      ? 'border-violet-400 text-violet-300'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  MultiTenant.ts
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 py-1.5 border-b-2 font-medium transition-colors ${
                    activeTab === 'terminal'
                      ? 'border-emerald-400 text-emerald-300'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Live Logs
                </button>
              </div>

              {/* Code Snippet Body */}
              <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-dark-900/60 min-h-[310px]">
                {activeTab === 'sync' && (
                  <div className="space-y-1">
                    <div className="text-slate-400">// Offline-First POS Transaction Pipeline</div>
                    <div>
                      <span className="text-purple-400">interface</span>{' '}
                      <span className="text-yellow-300">POSTransaction</span> {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">id</span>: <span className="text-cyan-300">UUIDv4</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">storeId</span>: <span className="text-amber-300">"STORE-HYD-06"</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">offlineSequence</span>: <span className="text-purple-300">number</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">syncStatus</span>: <span className="text-emerald-400">'PENDING' | 'SYNCED'</span>;
                    </div>
                    <div>{'}'}</div>
                    <div className="pt-1.5 text-slate-400">// Bi-directional WebSocket replay</div>
                    <div>
                      <span className="text-purple-400">async function</span>{' '}
                      <span className="text-blue-400">reconcileWithCloud</span>() {'{'}
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-purple-400">const</span> pending ={' '}
                      <span className="text-purple-400">await</span> sqlite.<span className="text-yellow-300">getUnsynced</span>();
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">await</span> ws.<span className="text-yellow-300">emit</span>(
                      <span className="text-emerald-400">'txn:batch_push'</span>, pending);
                    </div>
                    <div className="pl-4 text-emerald-400">
                      return verifyZeroDeduplication(pending);
                    </div>
                    <div>{'}'}</div>
                  </div>
                )}

                {activeTab === 'tenant' && (
                  <div className="space-y-1">
                    <div className="text-slate-400">// RetailSoft Database-per-Tenant Router</div>
                    <div>
                      <span className="text-purple-400">export const</span>{' '}
                      <span className="text-blue-400">tenantConnectionResolver</span> ={' '}
                      <span className="text-purple-400">async</span> (req, res, next) =&gt; {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">const</span> tenantId = req.headers[
                      <span className="text-emerald-400">'x-tenant-id'</span>];
                    </div>
                    <div className="pl-4 text-slate-400">// Connect to isolated MySQL instance</div>
                    <div className="pl-4">
                      req.db = <span className="text-purple-400">await</span> poolManager.
                      <span className="text-yellow-300">getPoolForTenant</span>(tenantId);
                    </div>
                    <div className="pl-4 text-cyan-300">
                      console.log(<span className="text-emerald-400">"{'`'}Routed to isolated tenant: ${'{'}tenantId{'}'}{'`'}"</span>);
                    </div>
                    <div className="pl-4">
                      next();
                    </div>
                    <div>{'}'};</div>
                    <div className="pt-2 text-slate-400">// 10+ Enterprise Tenants In Production</div>
                    <div className="text-violet-400">
                      ✔ Zero cross-tenant data leakage guaranteed
                    </div>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-1 text-slate-300">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-cyan-400">$</span> electron-pos --runtime-check
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> [SQLite] Local database initialized: ok
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> [StealthyPrint] Silent thermal queue: ready (port 8089)
                    </div>
                    <div className="text-cyan-300 flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> [WS-Sync] Cloud socket heartbeat established
                    </div>
                    <div className="text-slate-400 text-[11px] pt-1">
                      [INFO] 6 outlets connected | 700+ daily txns processing
                    </div>
                    <div className="text-purple-300 text-[11px]">
                      [TGFSL] 30 district offices active | RV/IV sync healthy
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 pt-1">
                      <span className="text-emerald-400">●</span> Ready for checkout transactions
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Metric Bar */}
              <div className="px-4 py-2.5 bg-dark-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Database className="w-3 h-3 text-cyan-400" /> 4 Database Engines
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Cpu className="w-3 h-3 text-purple-400" /> Offline-First Architecture
                  </span>
                </div>
                <span className="text-emerald-400 font-mono">100% Verified</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
