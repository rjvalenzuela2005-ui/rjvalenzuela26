import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaLightbulb, FaPencilRuler, FaVial, FaRocket } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Research, analyze & define the problem to uncover core objectives.',
    icon: <FaSearch className="w-5 h-5" />,
    isLast: false,
  },
  {
    step: '02',
    title: 'IDEATE',
    description: 'Brainstorm ideas, sketch user flows & outline creative technical strategies.',
    icon: <FaLightbulb className="w-5 h-5" />,
    isLast: false,
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'Create clean, functional & beautiful interactive UI/UX prototypes.',
    icon: <FaPencilRuler className="w-5 h-5" />,
    isLast: false,
  },
  {
    step: '04',
    title: 'TEST',
    description: 'Validate with real feedback, run audits & refine every single interaction.',
    icon: <FaVial className="w-5 h-5" />,
    isLast: false,
  },
  {
    step: '05',
    title: 'DELIVER',
    description: 'Ship with precision, deploy to cloud infrastructure & ensure lasting impact.',
    icon: <FaRocket className="w-5 h-5" />,
    isLast: true,
  },
];

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="process" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-2">
          <span className="text-xs text-cyan uppercase tracking-widest font-semibold">
            Workflow &amp; Methodology
          </span>
        </div>
        <SectionTitle title="My Design" highlight="Process" />

        {/* Horizontal Process Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {STEPS.map((stepItem, index) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl flex flex-col justify-between relative group transition-all duration-300 hover:-translate-y-2 ${
                stepItem.isLast
                  ? 'bg-gradient-to-br from-brand/40 via-cyan/25 to-mint/20 border border-cyan/40 neon-glow-cyan'
                  : 'glass-card border border-cyan/15 hover:neon-glow-cyan'
              }`}
            >
              <div>
                {/* Header: Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`font-display text-4xl leading-none ${
                      stepItem.isLast ? 'text-white' : 'gradient-text'
                    }`}
                  >
                    {stepItem.step}
                  </span>
                  <div
                    className={`p-3 rounded-xl ${
                      stepItem.isLast
                        ? 'bg-white/15 text-white neon-glow-mint'
                        : 'bg-brand/15 text-cyan neon-glow-blue'
                    } group-hover:scale-110 transition-transform`}
                  >
                    {stepItem.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg text-white tracking-wide uppercase mb-2">
                  {stepItem.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-sky/70 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="mt-6 pt-3 border-t border-cyan/10 flex items-center justify-between text-[10px] text-sky/50 font-mono">
                <span>Phase {index + 1} of 5</span>
                <span className="text-cyan">●</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
