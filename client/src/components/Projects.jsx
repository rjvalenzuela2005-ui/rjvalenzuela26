import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

const Projects = ({ projects = [], isFallback = false, loading = false }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Real-world full-stack web applications and client projects. Dynamic data backed by MongoDB & Express REST APIs.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'glass-card text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Database Status Info Banner */}
        {isFallback && (
          <div className="mb-8 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center justify-between">
            <span>
              ℹ️ Displaying pre-configured portfolio projects. Connect MongoDB Atlas and run <code className="font-mono bg-amber-500/20 px-1 py-0.5 rounded">npm run seed</code> to customize live database records!
            </span>
          </div>
        )}

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-80 rounded-2xl bg-slate-800/40 animate-pulse border border-slate-800" />
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id || project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No projects found in "{activeCategory}" category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
