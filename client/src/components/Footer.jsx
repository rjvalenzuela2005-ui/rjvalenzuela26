import React from 'react';
import { Terminal, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <span className="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/20">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="font-semibold text-slate-300">
            MERN Portfolio Stack
          </span>
        </div>

        {/* Notice */}
        <p className="text-xs text-slate-500 flex items-center gap-1">
          Built with <span className="text-emerald-400 font-mono">MongoDB</span>,{' '}
          <span className="text-slate-300 font-mono">Express</span>,{' '}
          <span className="text-cyan-400 font-mono">React</span>, and{' '}
          <span className="text-green-400 font-mono">Node.js</span>.
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
