import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';

export default function AboutMe() {
  const { ref: leftRef, inView: leftIn } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: rightRef, inView: rightIn } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-24 relative">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(37,99,235,0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text ── */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-xs text-cyan uppercase tracking-widest font-semibold">About Me</span>
              <h2 className="font-display text-3xl sm:text-4xl text-white uppercase mt-2 leading-tight">
                I&apos;m a Passionate{' '}
                <span className="gradient-text">UI/UX Designer</span>
              </h2>
            </div>

            <p className="text-sky/70 leading-relaxed text-base">
              I&apos;m an aspiring creative designer with a strong passion for UI/UX, photo curation, and video editing. Combining hands-on work in creative tools like Adobe Lightroom Classic, Photoshop, and DaVinci Resolve with modern web development, I craft cohesive visual identities and intuitive digital spaces.
            </p>

            <p className="text-sky/60 leading-relaxed text-sm">
              Every detail matters — from the lighting and tone of an image to the feel of a web interaction. I'm eager to bring a fresh creative eye, visual curiosity, and a strong drive to learn to an innovative design team.
            </p>

            {/* Signature */}
            <div>
              <p
                className="font-script text-cyan text-4xl"
                style={{ textShadow: '0 0 20px rgba(34,211,238,0.5)' }}
              >
                RJ Valenzuela
              </p>
            </div>

            {/* CTA */}
            <div>
              <button className="btn-primary">
                Read My Story <FaArrowRight />
              </button>
            </div>
          </motion.div>

          {/* ── RIGHT: Portrait ── */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: '0 0 60px rgba(34,211,238,0.3), 0 0 120px rgba(37,99,235,0.2)' }}
              />

              {/* Gradient border */}
              <div
                className="p-[3px] rounded-2xl relative z-10"
                style={{ background: 'linear-gradient(135deg, #2563EB, #22D3EE, #2DD4BF)' }}
              >
                <div className="rounded-[15px] overflow-hidden bg-gradient-to-b from-[#081b38] to-[#030B1A] w-72 sm:w-80 flex items-end justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2)_0%,transparent_0%)] pointer-events-none" />
                  <img
                    src="/myprofile4.png"
                    alt="RJ Valenzuela"
                    className="w-full h-96 object-contain object-bottom transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating experience badge — brought to front with explicit high z-index */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 glass-card neon-glow-cyan px-5 py-3 rounded-2xl text-center z-30 shadow-2xl backdrop-blur-md min-w-[110px] border border-cyan/30"
                style={{ zIndex: 30 }}
              >
                <p className="font-display gradient-text text-2xl leading-none">3+</p>
                <p className="text-sky text-[10px] uppercase tracking-wider font-semibold whitespace-nowrap mt-1">
                  Years Exp.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
