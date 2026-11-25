import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNodeJs, FaGitAlt, FaCode,
} from 'react-icons/fa';
import {
  SiMongodb, SiTailwindcss, SiFigma, SiJavascript,
  SiExpress, SiTypescript, SiNextdotjs, SiPostgresql,
  SiDocker, SiGraphql, SiDavinciresolve,
} from 'react-icons/si';
import { TbBrandAdobePhotoshop } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import SectionTitle from './SectionTitle';
import { getSkills } from '../services/api';

/* Custom clean Lightroom badge icon */
const LightroomIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#001E36" stroke="#38BDF8" strokeWidth="1.5" />
    <text x="5" y="16.5" fill="#38BDF8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Lr</text>
  </svg>
);

/* Map skill name → react-icon */
const ICON_MAP = {
  'react': <FaReact className="text-cyan text-2xl" />,
  'react.js': <FaReact className="text-cyan text-2xl" />,
  'node': <FaNodeJs className="text-teal text-2xl" />,
  'node.js': <FaNodeJs className="text-teal text-2xl" />,
  'mongodb': <SiMongodb className="text-mint text-2xl" />,
  'tailwind': <SiTailwindcss className="text-sky text-2xl" />,
  'tailwind css': <SiTailwindcss className="text-sky text-2xl" />,
  'figma': <SiFigma className="text-cyan text-2xl" />,
  'adobe lightroom classic': <LightroomIcon />,
  'adobe lightroom': <LightroomIcon />,
  'lightroom': <LightroomIcon />,
  'adobe photoshop': <TbBrandAdobePhotoshop className="text-sky text-2xl" />,
  'photoshop': <TbBrandAdobePhotoshop className="text-sky text-2xl" />,
  'davinci resolve': <SiDavinciresolve className="text-cyan text-2xl" />,
  'davinci': <SiDavinciresolve className="text-cyan text-2xl" />,
  'vs code': <VscVscode className="text-sky text-2xl" />,
  'vscode': <VscVscode className="text-sky text-2xl" />,
  'visual studio code': <VscVscode className="text-sky text-2xl" />,
  'git': <FaGitAlt className="text-brand text-2xl" />,
  'git & github': <FaGitAlt className="text-brand text-2xl" />,
  'javascript': <SiJavascript className="text-yellow-400 text-2xl" />,
  'express': <SiExpress className="text-white text-2xl" />,
  'express.js': <SiExpress className="text-white text-2xl" />,
  'typescript': <SiTypescript className="text-blue-400 text-2xl" />,
  'next.js': <SiNextdotjs className="text-white text-2xl" />,
  'postgresql': <SiPostgresql className="text-sky text-2xl" />,
  'docker': <SiDocker className="text-sky text-2xl" />,
  'graphql': <SiGraphql className="text-pink-400 text-2xl" />,
};

function getIcon(name) {
  return ICON_MAP[name.toLowerCase()] || <FaCode className="text-cyan text-2xl" />;
}

const FALLBACK_SKILLS = [
  { _id: '1', name: 'React.js',               category: 'Frontend',       level: 92 },
  { _id: '2', name: 'JavaScript',             category: 'Frontend',       level: 95 },
  { _id: '3', name: 'Tailwind CSS',           category: 'Frontend',       level: 90 },
  { _id: '8', name: 'Node.js',                category: 'Backend',        level: 88 },
  { _id: '9', name: 'Express.js',             category: 'Backend',        level: 87 },
  { _id: '10', name: 'MongoDB',               category: 'Database',       level: 85 },
  { _id: '11', name: 'Git & GitHub',          category: 'DevOps',         level: 90 },
  { _id: '12', name: 'VS Code',               category: 'Tools',          level: 85 },
  { _id: '4', name: 'Figma',                  category: 'Design',         level: 88 },
  { _id: '5', name: 'Adobe Lightroom Classic', category: 'Creative Tools', level: 90 },
  { _id: '6', name: 'Adobe Photoshop',         category: 'Creative Tools', level: 80 },
  { _id: '7', name: 'Davinci Resolve',         category: 'Creative Tools', level: 60 },
];

function SkillCard({ skill, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="glass-card p-5 flex flex-col items-center gap-3 hover:neon-glow-cyan hover:-translate-y-1 transition-all duration-300 group rounded-2xl"
    >
      {/* Icon */}
      <div className="p-3 rounded-xl bg-brand/10 neon-glow-blue group-hover:scale-110 transition-transform duration-300">
        {getIcon(skill.name)}
      </div>

      {/* Name */}
      <p className="text-white font-semibold text-sm text-center">{skill.name}</p>

      {/* Category */}
      <p className="text-sky text-xs text-center">{skill.category}</p>

      {/* Level bar */}
      <div className="w-full">
        <div className="flex justify-between text-[10px] text-sky/60 mb-1">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full h-1.5 bg-deep rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #2563EB, #22D3EE)' }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.07 + 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="glass-card p-5 flex flex-col items-center gap-3 animate-pulse rounded-2xl">
      <div className="w-12 h-12 bg-brand/10 rounded-xl" />
      <div className="h-3 w-20 bg-white/10 rounded" />
      <div className="h-2 w-12 bg-cyan/10 rounded" />
      <div className="w-full h-1.5 bg-deep rounded-full" />
    </div>
  );
}

export default function Skills() {
  const [skills,  setSkills]  = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills()
      .then((res) => setSkills(res.data?.length ? res.data : FALLBACK_SKILLS))
      .catch(() => setSkills(FALLBACK_SKILLS))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-2">
          <span className="text-xs text-cyan uppercase tracking-widest font-semibold">My Skills</span>
        </div>
        <SectionTitle title="Tools &amp; Technologies" highlight="I Use" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : skills.map((skill, i) => <SkillCard key={skill._id} skill={skill} index={i} />)}
        </div>
      </div>
    </section>
  );
}
