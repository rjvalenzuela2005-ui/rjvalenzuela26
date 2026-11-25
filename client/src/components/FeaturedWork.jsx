import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { getProjects } from '../services/api';

/* ── Fallback data shown when API is offline ── */
const FALLBACK_PROJECTS = [
  {
    _id: '1', title: 'Smart Wedding Planner Dashboard', category: 'Capstone Project', featured: true,
    description: 'A web-based system that combines an AI chatbot with CRM-style client and vendor management to help wedding planners handle inquiries, bookings, and coordination in one place.',
    techStack: ['OpenAI', 'Node.js', 'Express', 'PostgreSQL', 'SupaBase', 'REST API'],
    image: '/swplandingpage.jpg',
    githubUrl: 'https://github.com/jerichoayunar/smart_wedding_crm.git',
  },
  {
    _id: '2', title: 'First Portfolio Project', category: 'Portfolio', featured: true,
    description: 'High-conversion product landing page featuring dark neon glassmorphism aesthetics, interactive feature comparisons, and Stripe payment checkout.',
    techStack: ['HTML', 'CSS',],
    image: 'firstport.png',
    liveUrl: 'https://rjvalenzuela.github.io',
  },
  {
    _id: '3', title: 'Portfolio Website', category: 'Personal Brand', featured: true,
    description: 'Personal developer & designer portfolio website with custom neon glassmorphism effects, dynamic REST API synchronization, and contact inquiry storage.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    image: 'port2.png',
    liveUrl: 'https://example.com', githubUrl: 'https://github.com',
  },
  {
    _id: '4', title: 'Integrative Programming Project', category: 'Agency Website', featured: false,
    description: 'Futuristic digital creative agency showcase featuring smooth page transitions, web canvas shader effects, and high-performance design.',
    techStack: ['Figma', 'HTML', 'CSS', 'JavaScript',],
    image: 'figmaproj.png',
    liveUrl: 'https://www.figma.com/proto/R1CwVtY1v9KAgqddDJEM7j/Main-Prototype?node-id=1-3&starting-point-node-id=1%3A3',
  }
];

/* ── Project Modal ── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center bg-midnight/80 backdrop-blur-sm px-4 py-20 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass-card max-w-2xl w-full rounded-2xl overflow-hidden relative"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-deep/80 text-sky hover:text-cyan transition-colors"
            aria-label="Close modal"
          >
            <FaTimes />
          </button>

          {/* Image */}
          {project.image && (
            <div className="w-full aspect-video overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            <span className="text-xs text-cyan uppercase tracking-widest font-semibold">{project.category}</span>
            <h3 className="font-display text-2xl text-white mt-1 mb-3">{project.title}</h3>
            <p className="text-sky/80 text-sm leading-relaxed mb-5">{project.description}</p>

            {/* Tech Stack */}
            {project.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full bg-brand/15 text-cyan border border-cyan/20 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-3 flex-wrap">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer"
                  className="btn-primary text-sm py-2 px-5">
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-sm px-5 py-2 rounded-full border border-cyan/30 text-sky hover:text-cyan hover:border-cyan transition-colors">
                  <FaGithub /> Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Project Card ── */
function ProjectCard({ project, onClick, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden hover:neon-glow-cyan transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
      onClick={() => onClick(project)}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-deep">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand/30 to-cyan/20 flex items-center justify-center">
            <span className="text-cyan/40 text-4xl font-display">{project.title[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
      </div>

      {/* Footer */}
      <div className="p-5 flex items-end justify-between">
        <div>
          <p className="text-[10px] text-cyan uppercase tracking-widest font-semibold mb-1">{project.category}</p>
          <h3 className="font-display text-white text-lg leading-tight">{project.title}</h3>
        </div>
        {/* Circular arrow button */}
        <button
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: 'linear-gradient(135deg, #2563EB, #22D3EE)' }}
          aria-label={`Open ${project.title}`}
        >
          <FaArrowRight className="text-white text-xs" />
        </button>
      </div>
    </motion.div>
  );
}

/* ── Skeleton ── */
function SkeletonCard() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-video bg-deep/80" />
      <div className="p-5 space-y-2">
        <div className="h-2 w-16 bg-cyan/10 rounded" />
        <div className="h-4 w-3/4 bg-white/10 rounded" />
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function FeaturedWork() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getProjects()
      .then((res) => {
        setProjects(res.data?.length ? res.data : FALLBACK_PROJECTS);
      })
      .catch(() => {
        setProjects(FALLBACK_PROJECTS);
        setError('API offline — showing sample projects.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          sparkle
          title="FEATURED"
          highlight="WORK"
          linkText="VIEW ALL PROJECTS →"
        />

        {/* Offline notice */}
        {error && (
          <p className="mb-6 text-xs text-amber-400/70 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2">
            ℹ️ {error}
          </p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : projects.map((p, i) => (
              <ProjectCard key={p._id} project={p} index={i} onClick={setSelected} />
            ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
