import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

/* Stagger container variants */
const container = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-grid"
    >
      {/* Radial glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)', transform: 'translate(-30%, -20%)' }} />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)', transform: 'translate(30%, 0)' }} />
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[300px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)', transform: 'translateX(-50%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Giant display name behind photo */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-0">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col gap-5 z-10 order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left"
          >
            {/* Top Tagline Label */}
            <motion.div
              variants={item}
              className="text-xs sm:text-sm text-cyan tracking-[0.28em] uppercase font-semibold leading-relaxed"
            >
              I Design<br />
              <span className="font-extrabold text-white">Modern Websites</span><br />
              And Digital<br />
              <span className="font-extrabold text-white">Experiences</span>
            </motion.div>

            {/* Role Title */}
            <motion.h2
              variants={item}
              className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl gradient-text uppercase tracking-tight leading-tight"
            >
              UI/UX Designer
            </motion.h2>

            {/* Bio Description with strategic bold highlights */}
            <motion.p
              variants={item}
              className="text-sky/90 text-base sm:text-lg max-w-sm lg:max-w-md leading-relaxed font-normal"
            >
              I create <span className="text-white font-bold">clean, modern</span> and{' '}
              <span className="text-white font-bold">user-focused designs</span> that turn ideas into{' '}
              <span className="text-cyan font-bold">powerful digital experiences</span>.
            </motion.p>

            {/* CTA */}
            <motion.div variants={item} className="flex justify-center lg:justify-start pt-2">
              <motion.button
                className="btn-primary text-base font-bold tracking-wide px-8 py-3.5"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work <FaArrowRight />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ── CENTER COLUMN — Display Name + Cutout Photo with Halo Glow ── */}
          <div className="relative flex flex-col items-center z-10 order-1 lg:order-2 lg:mx-8">
            {/* Top Display Name: RJ */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[14vw] sm:text-[100px] lg:text-[115px] xl:text-[125px] uppercase leading-none select-none tracking-wider z-0 -mb-4 sm:-mb-6"
              style={{
                WebkitTextStroke: '2px rgba(34,211,238,0.7)',
                color: 'transparent',
                textShadow: '0 0 30px rgba(34,211,238,0.3)',
              }}
            >
              RJ
            </motion.div>

            {/* Photo Container — Sized cleanly with Circular Halo Glow & Faded Bottom */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
              className="relative my-0 flex items-center justify-center z-10 w-full [--halo-top:calc(1rem+0.75rem)] sm:[--halo-top:calc(1.5rem+0.75rem)]"
            >
              {/* Glowing circular halo in the background */}
              <div
                className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] rounded-full pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle, rgba(34,211,238,0.42) 0%, rgba(37,99,235,0.26) 45%, transparent 70%)',
                  filter: 'blur(45px)',
                  top: 'var(--halo-top)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)',
                }}
              />

              {/* Glowing neon ring halo (sits cleanly below "RJ" with a visible gap) */}
              <div
                className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full border-2 border-cyan/70 pointer-events-none z-0"
                style={{
                  boxShadow: '0 0 50px rgba(34,211,238,0.7), 0 0 20px rgba(34,211,238,0.5), inset 0 0 35px rgba(34,211,238,0.4)',
                  top: 'var(--halo-top)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 48%, rgba(0,0,0,0) 72%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 48%, rgba(0,0,0,0) 72%)',
                }}
              />

              {/* Balanced Portrait Cutout with Smooth Bottom Fade */}
              <div className="relative w-64 h-[380px] sm:w-[320px] sm:h-[440px] lg:w-[670px] lg:h-[490px] flex items-end justify-center overflow-hidden z-10">
                <img
                  src="/myprofile3.png"
                  alt="RJ Valenzuela"
                  className="w-full h-full object-contain object-top drop-shadow-[0_15px_35px_rgba(34,211,238,0.3)] transition-transform duration-500 hover:scale-[1.03]"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0.7) 76%, rgba(0,0,0,0.15) 88%, rgba(0,0,0,0) 98%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0.7) 76%, rgba(0,0,0,0.15) 88%, rgba(0,0,0,0) 98%)',
                  }}
                />
              </div>

              {/* Seamless bottom fade gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-midnight via-midnight/85 to-transparent pointer-events-none z-20" />
            </motion.div>

            {/* Bottom Display Name: VALENZUELA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-[8.5vw] sm:text-[62px] lg:text-[72px] xl:text-[84px] uppercase leading-none select-none text-white tracking-wide z-10 -mt-4 sm:-mt-6"
              style={{
                textShadow: '0 4px 25px rgba(0, 0, 0, 0.85), 0 0 35px rgba(34,211,238,0.25)',
              }}
            >
              VALENZUELA
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1 flex flex-col items-center lg:items-end gap-6 z-10 order-3 mt-6 lg:mt-0 text-center lg:text-right"
          >
            {/* Script tagline */}
            <p
              className="font-script text-cyan text-4xl sm:text-5xl"
              style={{ textShadow: '0 0 25px rgba(34,211,238,0.7), 0 0 45px rgba(34,211,238,0.35)' }}
            >
              Build Something<br />Amazing
            </p>

            {/* Vertical service list — bold, readable Montserrat */}
            <div className="flex flex-col gap-3 font-montserrat tracking-[0.25em] uppercase text-center lg:text-right">
              <span className="text-white font-extrabold text-sm sm:text-base hover:text-cyan transition-colors">
                UI/UX DESIGN
              </span>
              <span className="text-cyan/50 text-xs">—</span>
              <span className="text-white font-extrabold text-sm sm:text-base hover:text-cyan transition-colors">
                WEB DEVELOPMENT
              </span>
              <span className="text-cyan/50 text-xs">—</span>
              <span className="text-white font-extrabold text-sm sm:text-base hover:text-cyan transition-colors">
                BRANDING
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-sky/40 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-px h-8 bg-gradient-to-b from-cyan/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
