import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight,
  FaTasks, FaPaintBrush, FaPhotoVideo, FaTrophy, FaCogs, FaCameraRetro, FaBoxes, FaGraduationCap,
} from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { getTestimonials } from '../services/api';

const LEADERSHIP_EXPERIENCES = [
  {
    _id: '1',
    title: 'Capstone Project Manager & Leader',
    role: 'Project Manager & Lead UI/UX Designer',
    organization: 'Bukidnon State University — BSIT Capstone',
    period: '2026–Present',
    category: 'Capstone Leadership',
    icon: <FaTasks className="text-cyan text-3xl" />,
    rating: 5,
    message:
      'Spearheaded our agile team’s capstone system, steering both system architecture and UI/UX design. Guided sprint planning, user research, and cross-functional collaboration to deliver a production-grade web platform commended for its user experience and clean engineering.',
  },
  {
    _id: '2',
    title: 'Multimedia and Publication Head',
    role: 'Executive Head of Multimedia & Publication',
    organization: 'BukSU Computer Society',
    period: '2024–2025',
    category: 'Creative Leadership',
    icon: <FaPaintBrush className="text-cyan text-3xl" />,
    rating: 5,
    message:
      'Led the creative department for the university’s official IT student organization. Directed branding identity, official publicity materials, and multimedia assets across collegiate conferences, tech summits, and general assemblies while mentoring junior creatives in design tools.',
  },
  {
    _id: '3',
    title: 'Media and Publication Head',
    role: 'Executive Media & Publication Head',
    organization: 'MAS-AMiCUS BukSU Chapter',
    period: '2024–2026',
    category: 'Media & Publication',
    icon: <FaPhotoVideo className="text-cyan text-3xl" />,
    rating: 5,
    message:
      'Oversaw creative media coverage, official publication releases, and social media campaigns for two consecutive academic years. Established unified visual guidelines that dramatically elevated student engagement and organizational visibility.',
  },
  {
    _id: '4',
    title: 'Artistic Photography — 1st Place Champion',
    role: '1st Place Awardee (Artistic Photography)',
    organization: 'BukSU Intramurals 2023',
    period: '2023',
    category: 'University Honor & Award',
    icon: <FaTrophy className="text-yellow-400 text-3xl" />,
    rating: 5,
    message:
      'Awarded 1st Place Champion in the university-wide artistic photography competition. Commended for creative framing, emotive lighting, and meticulous color grading in Adobe Lightroom Classic, reflecting a deep passion for visual storytelling.',
  },
  {
    _id: '5',
    title: 'Technical Head Officer',
    role: 'Technical Head Officer',
    organization: 'BukSU Computer Society',
    period: '2026–2027',
    category: 'Technical Leadership',
    icon: <FaCogs className="text-cyan text-3xl" />,
    rating: 5,
    message:
      'Directed technical logistics, IT hardware operations, and digital streaming infrastructure for major student society events. Bridged hands-on technical execution with executive council coordination to ensure zero-downtime event experiences.',
  },
  {
    _id: '6',
    title: 'Multimedia and Publication Photographer',
    role: 'Lead Event & Editorial Photographer',
    organization: 'BukSU Computer Society',
    period: '2025–2026',
    category: 'Visual Arts & Photography',
    icon: <FaCameraRetro className="text-cyan text-3xl" />,
    rating: 5,
    message:
      'Served as official photographer capturing high-profile university IT symposiums, coding bootcamps, and executive ceremonies. Performed high-volume photo curation and rapid color grading in Adobe Lightroom for same-day digital publication.',
  },
  {
    _id: '7',
    title: 'Logistics Officer',
    role: 'Executive Logistics Officer',
    organization: 'MAS-AMiCUS BukSU Chapter',
    period: '2026–2027',
    category: 'Operations & Management',
    icon: <FaBoxes className="text-cyan text-3xl" />,
    rating: 5,
    message:
      'Coordinated resource management, venue setup, and logistical operations for large-scale chapter gatherings. Demonstrated organizational rigor, fast on-site problem-solving, and dependable accountability across multi-day campus activities.',
  },
  {
    _id: '8',
    title: '1st Year BSIT Representative',
    role: 'Batch Representative & Student Liaison',
    organization: 'BukSU Computer Society',
    period: '2023–2024',
    category: 'Student Governance',
    icon: <FaGraduationCap className="text-cyan text-3xl" />,
    rating: 5,
    message:
      'Elected by the freshman cohort to represent student interests on the executive council. Facilitated student-faculty communication, organized peer study groups, and established the foundation for an active collegiate leadership journey.',
  },
];

export default function Testimonials() {
  const [items, setItems] = useState(LEADERSHIP_EXPERIENCES);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getTestimonials()
      .then((res) => {
        if (res.data?.length > 0) {
          // Merge API data if customized, or use local rich structured leadership data
          setItems(LEADERSHIP_EXPERIENCES);
        }
      })
      .catch(() => {});
  }, []);

  // Auto advance every 7 seconds
  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const current = items[currentIndex] || LEADERSHIP_EXPERIENCES[0];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-2 text-center">
          <span className="text-xs text-cyan uppercase tracking-widest font-semibold">
            Leadership &amp; Honors
          </span>
        </div>
        <div className="text-center">
          <SectionTitle title="Academic &amp; Leadership" highlight="Journey" />
        </div>

        {/* Carousel Card */}
        <div className="relative mt-8">
          <div className="glass-card neon-glow-blue rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-cyan/20">
            {/* Ambient water-mark quote icon */}
            <FaQuoteLeft className="absolute -top-4 -left-4 text-cyan/10 text-8xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
              >
                {/* Icon Badge with Neon Ring */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-brand via-cyan to-mint neon-glow-cyan p-0.5 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-midnight/90 flex items-center justify-center">
                      {current.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Category & Period Pill */}
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className="text-[11px] px-3 py-0.5 rounded-full bg-brand/20 text-cyan border border-cyan/30 font-medium">
                      {current.category}
                    </span>
                    <span className="text-[11px] text-sky/70 font-mono">
                      {current.period}
                    </span>
                  </div>

                  {/* Description / Experience Impact */}
                  <p className="text-white text-base sm:text-lg leading-relaxed italic mb-6">
                    &ldquo;{current.message}&rdquo;
                  </p>

                  <div>
                    <h4 className="font-display text-white text-xl tracking-wide uppercase">
                      {current.title}
                    </h4>
                    <p className="text-xs text-sky font-medium mt-0.5">
                      {current.role} <span className="text-cyan/70">• {current.organization}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons & Dots */}
            <div className="mt-8 pt-6 border-t border-cyan/10 flex items-center justify-between">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-6 bg-cyan neon-glow-cyan' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-xl glass-card text-sky hover:text-white hover:border-cyan/50 transition-all hover:scale-105"
                  aria-label="Previous role"
                >
                  <FaChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-xl glass-card text-sky hover:text-white hover:border-cyan/50 transition-all hover:scale-105"
                  aria-label="Next role"
                >
                  <FaChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick-Jump Milestone Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {items.map((item, idx) => (
            <button
              key={item._id}
              onClick={() => setCurrentIndex(idx)}
              className={`text-xs px-3 py-1.5 rounded-xl transition-all duration-300 border ${
                currentIndex === idx
                  ? 'bg-brand/30 border-cyan text-white neon-glow-blue'
                  : 'bg-deep/40 border-cyan/10 text-sky/60 hover:text-cyan hover:border-cyan/30'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
