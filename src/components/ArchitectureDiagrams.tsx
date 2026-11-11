import React from 'react';
import { Database, Server, RefreshCw, Printer, ShieldCheck, Utensils, CheckCircle2, ArrowRight } from 'lucide-react';

interface DiagramProps {
  type: string;
}

export const ArchitectureDiagram: React.FC<DiagramProps> = ({ type }) => {
  switch (type) {
    case 'pastrychef-pos':
      return (
        <div className="w-full bg-dark-900/90 rounded-xl p-5 border border-slate-800 text-xs font-mono select-none overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              Offline-First Bi-Directional Sync Topology
            </span>
            <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
              Active (6 Outlets)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
            {/* Local Client */}
            <div className="bg-dark-850 p-3.5 rounded-lg border border-slate-700/60 shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="font-semibold text-slate-200 text-xs">Store POS (Electron)</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans mb-2">Cashier terminal operating 100% offline</p>
              <div className="space-y-1.5">
                <div className="bg-dark-950 p-1.5 rounded flex items-center justify-between text-[11px] text-slate-300">
                  <span>SQLite Embedded</span>
                  <Database className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="bg-dark-950 p-1.5 rounded flex items-center justify-between text-[11px] text-slate-300">
                  <span>UUID Txn Queue</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Sync Channel */}
            <div className="flex flex-col items-center justify-center py-2 px-1 text-center">
              <div className="w-full flex items-center justify-center gap-1 text-[11px] text-cyan-400 bg-cyan-950/40 py-1 px-2 rounded border border-cyan-800/50 mb-1.5">
                <span>WebSocket Bridge</span>
                <RefreshCw className="w-3 h-3 text-cyan-400" />
              </div>
              <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 my-1"></div>
              <p className="text-[10px] text-slate-400 font-sans">Automatic batch replay upon reconnect</p>
            </div>

            {/* Cloud Core */}
            <div className="bg-dark-850 p-3.5 rounded-lg border border-slate-700/60 shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="font-semibold text-slate-200 text-xs">Cloud Central</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans mb-2">Centralized reporting & pricing cluster</p>
              <div className="space-y-1.5">
                <div className="bg-dark-950 p-1.5 rounded flex items-center justify-between text-[11px] text-slate-300">
                  <span>Node / Express</span>
                  <Server className="w-3 h-3 text-purple-400" />
                </div>
                <div className="bg-dark-950 p-1.5 rounded flex items-center justify-between text-[11px] text-slate-300">
                  <span>PostgreSQL DB</span>
                  <Database className="w-3 h-3 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'retailsoft':
      return (
        <div className="w-full bg-dark-900/90 rounded-xl p-5 border border-slate-800 text-xs font-mono select-none overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-slate-400">
            <span className="text-violet-400 font-semibold flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              Database-Per-Tenant Isolation Architecture
            </span>
            <span className="bg-violet-500/10 text-violet-400 px-2 py-0.5 rounded border border-violet-500/20 text-[10px]">
              10+ Enterprise Tenants
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 bg-dark-850 p-2.5 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 text-[11px]">Incoming Request:</span>
              <span className="text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60 text-[11px]">
                tenant_slug.retailsoft.app
              </span>
              <ArrowRight className="w-3 h-3 text-slate-500 mx-1" />
              <span className="text-slate-300 text-[11px]">Tenant Resolver Middleware</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-dark-950 p-2.5 rounded border border-violet-900/40 text-center">
                <Database className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                <div className="text-[11px] text-slate-200 font-bold">Tenant A DB</div>
                <div className="text-[10px] text-slate-500">Retail Chain 1</div>
              </div>
              <div className="bg-dark-950 p-2.5 rounded border border-violet-900/40 text-center">
                <Database className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                <div className="text-[11px] text-slate-200 font-bold">Tenant B DB</div>
                <div className="text-[10px] text-slate-500">Supermarket Group</div>
              </div>
              <div className="bg-dark-950 p-2.5 rounded border border-violet-900/40 text-center">
                <Database className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                <div className="text-[11px] text-slate-200 font-bold">Tenant N...</div>
                <div className="text-[10px] text-slate-500">Isolated Connection</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'tgfsl':
      return (
        <div className="w-full bg-dark-900/90 rounded-xl p-5 border border-slate-800 text-xs font-mono select-none overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-slate-400">
            <span className="text-blue-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Telangana Forensic Lab Digital Indent & Voucher Flow
            </span>
            <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 text-[10px]">
              30 District Offices
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-dark-850 p-2.5 rounded border border-slate-700/60">
              <div className="text-[10px] text-slate-400 mb-1">Step 1</div>
              <div className="text-slate-200 font-semibold text-[11px]">Indent Raised</div>
              <div className="text-[9px] text-slate-400 mt-1">District Officer</div>
            </div>
            <div className="bg-dark-850 p-2.5 rounded border border-blue-900/40">
              <div className="text-[10px] text-blue-400 mb-1">Step 2</div>
              <div className="text-blue-300 font-semibold text-[11px]">Multi-Level RBAC</div>
              <div className="text-[9px] text-slate-400 mt-1">Approval Matrix</div>
            </div>
            <div className="bg-dark-850 p-2.5 rounded border border-indigo-900/40">
              <div className="text-[10px] text-indigo-400 mb-1">Step 3</div>
              <div className="text-indigo-300 font-semibold text-[11px]">Receipt Voucher</div>
              <div className="text-[9px] text-slate-400 mt-1">Inward Verification</div>
            </div>
            <div className="bg-dark-850 p-2.5 rounded border border-emerald-900/40">
              <div className="text-[10px] text-emerald-400 mb-1">Step 4</div>
              <div className="text-emerald-300 font-semibold text-[11px]">Issue Voucher</div>
              <div className="text-[9px] text-slate-400 mt-1">Stock Dispatched</div>
            </div>
          </div>
        </div>
      );

    case 'stealthy-print':
      return (
        <div className="w-full bg-dark-900/90 rounded-xl p-5 border border-slate-800 text-xs font-mono select-none overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-slate-400">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              <Printer className="w-3.5 h-3.5" />
              Silent Printing Pipeline (Zero-Dialog)
            </span>
            <span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 text-[10px]">
              Sub-second Latency
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
            <div className="bg-dark-850 p-3 rounded border border-slate-700/60">
              <div className="text-[10px] text-cyan-400 font-bold mb-1">Browser Web POS</div>
              <p className="text-[11px] text-slate-300 font-sans">POST /print</p>
              <p className="text-[10px] text-slate-400 font-sans">Raw HTML / ESC-POS</p>
            </div>
            <div className="bg-dark-850 p-3 rounded border border-amber-900/40 text-center">
              <div className="text-[10px] text-amber-400 font-bold mb-1">Embedded Express</div>
              <p className="text-[11px] text-slate-300 font-sans">Queue Manager</p>
              <p className="text-[10px] text-slate-400 font-sans">Auto Retry on Jam</p>
            </div>
            <div className="bg-dark-850 p-3 rounded border border-emerald-900/40">
              <div className="text-[10px] text-emerald-400 font-bold mb-1">Thermal Printers</div>
              <p className="text-[11px] text-slate-300 font-sans">Direct Driver Comm</p>
              <p className="text-[10px] text-slate-400 font-sans">Instant Silent Cut</p>
            </div>
          </div>
        </div>
      );

    case 'restosoft':
      return (
        <div className="w-full bg-dark-900/90 rounded-xl p-5 border border-slate-800 text-xs font-mono select-none overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-slate-400">
            <span className="text-rose-400 font-semibold flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5" />
              Aggregator Webhook & KOT Flow
            </span>
            <span className="bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20 text-[10px]">
              Swiggy + Zomato Sync
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="bg-dark-850 p-2.5 rounded border border-slate-700/60 flex-1 text-center">
              <span className="text-[11px] text-orange-400 font-bold">UrbanPiper Webhook</span>
              <div className="text-[10px] text-slate-400 mt-0.5">Swiggy & Zomato Feeds</div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />
            <div className="bg-dark-850 p-2.5 rounded border border-rose-900/40 flex-1 text-center">
              <span className="text-[11px] text-rose-400 font-bold">Order Normalizer</span>
              <div className="text-[10px] text-slate-400 mt-0.5">Dine-In / Takeaway Core</div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />
            <div className="bg-dark-850 p-2.5 rounded border border-emerald-900/40 flex-1 text-center">
              <span className="text-[11px] text-emerald-400 font-bold">Station KOT Routing</span>
              <div className="text-[10px] text-slate-400 mt-0.5">Kitchen Display / Print</div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

