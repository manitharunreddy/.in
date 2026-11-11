import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Building2, Store, Zap, Landmark } from 'lucide-react';
import { METRICS } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5 text-cyan-400" />,
  Building2: <Building2 className="w-5 h-5 text-violet-400" />,
  Store: <Store className="w-5 h-5 text-blue-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Landmark: <Landmark className="w-5 h-5 text-emerald-400" />,
};

interface CounterProps {
  target: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-dark-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-60"></div>
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Proven Production Footprint
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Verified Enterprise Impact & Scale
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {METRICS.map((metric, idx) => {
              return (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative p-5 rounded-xl bg-dark-850/60 border border-slate-800/80 hover:border-slate-700 hover:bg-dark-800/60 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {iconMap[metric.iconName] || <Zap className="w-5 h-5 text-cyan-400" />}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Verified
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline">
                      <AnimatedCounter target={metric.numericVal} suffix={metric.suffix} />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-200 mt-1.5">
                      {metric.label}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

