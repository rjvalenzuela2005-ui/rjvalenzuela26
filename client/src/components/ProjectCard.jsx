import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    category,
    tags = [],
    imageUrl,
    liveUrl,
    githubUrl,
    featured,
  } = project;

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group">
      {/* Project Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
        <img
          src={imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

        {/* Category & Featured Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-900/90 text-indigo-300 border border-slate-700/60 backdrop-blur-md">
            {category || 'Full Stack'}
          </span>
          {featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
              <Star className="w-3 h-3 fill-amber-300" />
              <span>Featured</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          <p className="mt-2.5 text-sm text-slate-400 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-xs font-medium rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          ) : (
            <span className="text-xs text-slate-600">Code Private</span>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
