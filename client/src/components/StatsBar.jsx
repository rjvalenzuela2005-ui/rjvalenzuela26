import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaPalette, FaLayerGroup, FaPhotoVideo, FaMagic, FaStar } from 'react-icons/fa';
import { getStats } from '../services/api';

const FALLBACK = [
  { label: 'Years Designing & Creating', value: '3+',   numVal: 3,   suffix: '+', icon: <FaPalette /> },
  { label: 'Creative & Web Projects',    value: '15+',  numVal: 15,  suffix: '+', icon: <FaLayerGroup /> },
  { label: 'Curated Visuals & Edits',    value: '100+', numVal: 100, suffix: '+', icon: <FaPhotoVideo /> },
  { label: 'Visual Storytelling',        value: '100%', numVal: 100, suffix: '%', icon: <FaMagic /> },
];

const ICONS = {
  FaPalette: <FaPalette />,
  FaLayerGroup: <FaLayerGroup />,
  FaPhotoVideo: <FaPhotoVideo />,
  FaMagic: <FaMagic />,
  FaStar: <FaStar />,
};

function parseVal(str) {
  const num = parseInt(str);
  const suffix = str.replace(/[0-9]/g, '');
  return { numVal: isNaN(num) ? 0 : num, suffix };
}

export default function StatsBar() {
  const [stats, setStats] = useState(FALLBACK);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    getStats()
      .then((res) => {
        if (res.data?.length) {
          const mapped = res.data.map((s) => ({
            ...s,
            icon: ICONS[s.icon] || <FaStar />,
            ...parseVal(s.value),
          }));
          setStats(mapped);
        }
      })
      .catch(() => {}); // use fallback silently
  }, []);

  return (
    <section className="relative z-10 py-10 px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-5xl mx-auto glass-card neon-glow-blue rounded-2xl px-6 py-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              {/* Icon */}
              <div className="p-3 rounded-xl bg-brand/15 text-cyan text-xl neon-glow-blue">
                {stat.icon}
              </div>

              {/* Animated number */}
              <div className="font-display text-4xl sm:text-5xl gradient-text">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.numVal}
                    suffix={stat.suffix}
                    duration={2.5}
                    delay={i * 0.15}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>

              {/* Label */}
              <p className="text-sky text-xs uppercase tracking-widest font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
