import React from 'react';
import { Code2, Server, Database, Cpu, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      title: 'Modern Frontend',
      description: 'Component-driven, responsive UIs built with React, Vite, and utility-first Tailwind CSS.',
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      title: 'Robust REST APIs',
      description: 'Clean Node.js & Express backends with validation, error middleware, and modular controllers.',
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: 'Scalable MongoDB',
      description: 'Flexible document schemas modeled with Mongoose, connected to MongoDB Atlas in the cloud.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      title: 'Developer Experience',
      description: 'Streamlined development workflow with concurrently running client and server, hot reloading, and seeding scripts.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">
            About Me & Stack
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for performance, built with the MERN stack
          </p>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            I specialize in building complete web solutions from database schema modeling to interactive client interfaces. This portfolio demonstrates a decoupled full-stack architecture where data flows seamlessly between MongoDB Atlas, Express, and React.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl hover:border-indigo-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="p-3 bg-slate-800/80 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Architecture flow banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wide">
                Full-Stack Architecture
              </span>
              <h4 className="text-xl font-bold text-white mt-2">
                Decoupled Frontend & Backend Architecture
              </h4>
              <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                The client communicates with the Express REST API via Axios. When MongoDB Atlas is configured, project content and contact inquiries are dynamically synchronized in real-time.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">React Client</span>
              <span className="text-indigo-400 font-bold">⇄</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">Express API</span>
              <span className="text-indigo-400 font-bold">⇄</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">MongoDB Atlas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
