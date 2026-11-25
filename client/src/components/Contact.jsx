import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaArrowUp,
  FaQrcode,
} from 'react-icons/fa';
import { sendMessage } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendMessage(formData);
      toast.success('Message sent successfully! We will connect soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || 'Failed to send message. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative overflow-hidden bg-midnight/90 border-t border-cyan/10">
      {/* Radial glow background */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ── LEFT: Glowing Circular Badge ── */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full flex items-center justify-center p-2"
            >
              {/* Spinning / Glowing Outer Rings */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #22D3EE, #2DD4BF)',
                  filter: 'blur(20px)',
                  opacity: 0.45,
                }}
              />
              <div
                className="absolute inset-0 rounded-full border border-cyan/40"
                style={{
                  boxShadow: '0 0 35px rgba(34, 211, 238, 0.35), inset 0 0 35px rgba(34, 211, 238, 0.2)',
                }}
              />

              {/* Inner Circle Content */}
              <div className="w-full h-full rounded-full bg-deep/90 border border-cyan/30 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center z-10">
                <span className="text-[11px] uppercase tracking-[0.25em] text-sky font-semibold mb-1">
                  Let&apos;s Create
                </span>
                <span className="text-sm uppercase tracking-[0.2em] text-white font-medium mb-1">
                  Something
                </span>
                <span className="font-display text-2xl sm:text-3xl gradient-text tracking-wider uppercase leading-none my-1">
                  Extraordinary
                </span>
                <span className="text-sm uppercase tracking-[0.2em] text-white font-medium mt-1">
                  Together
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Contact Card & Form ── */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-cyan/20 neon-glow-blue relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide">
                    Let&apos;s <span className="gradient-text">Connect</span>
                  </h3>
                  <p className="text-xs text-sky/70 mt-1">
                    Send an inquiry, explore collaboration, or ask about availability.
                  </p>
                </div>

                {/* Available Status Pill */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-mint/10 border border-mint/30 text-mint text-xs font-medium w-fit">
                  <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                  <span>Open for opportunities</span>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-midnight/70 border border-cyan/15 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-brand/20 text-cyan">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase tracking-wider text-sky/60 font-semibold">Email</p>
                    <p className="text-xs text-white truncate font-medium">rjvalenzuela2005@gmail.com</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-midnight/70 border border-cyan/15 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-brand/20 text-cyan">
                    <FaPhoneAlt className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase tracking-wider text-sky/60 font-semibold">Phone</p>
                    <p className="text-xs text-white truncate font-medium">+63 (964) 745-4996</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-midnight/70 border border-cyan/15 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-brand/20 text-cyan">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase tracking-wider text-sky/60 font-semibold">Location</p>
                    <p className="text-xs text-white truncate font-medium">Malaybalay City, Bukidnon, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-sky/90 mb-1.5">
                      Your Name <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-midnight/80 border border-cyan/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-sky/90 mb-1.5">
                      Email Address <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-midnight/80 border border-cyan/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-sky/90 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-midnight/80 border border-cyan/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-sky/90 mb-1.5">
                    Your Message <span className="text-cyan">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-midnight/80 border border-cyan/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    <FaPaperPlane className="text-xs" />
                  </button>

                  {/* QR Box Link */}
                  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-midnight/70 border border-cyan/20">
                    <FaQrcode className="text-cyan text-xl" />
                    <div className="text-left">
                      <p className="text-[10px] text-cyan font-bold tracking-wider uppercase">Scan To View</p>
                      <p className="text-[9px] text-sky/60 uppercase">Portfolio Mobile</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ── FOOTER BAR ── */}
        <div className="mt-16 pt-8 border-t border-cyan/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-sky/60 text-center sm:text-left">
            &copy; {new Date().getFullYear()} RJ Valenzuela. Crafted with MERN stack &amp; Aqua Neon Glassmorphism.
          </p>

          {/* Social Icons (GitHub, LinkedIn, Behance, Dribbble, Instagram) */}
          <div className="flex items-center gap-2">
            {[
              { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
              { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <FaBehance />, href: 'https://behance.net', label: 'Behance' },
              { icon: <FaDribbble />, href: 'https://dribbble.com', label: 'Dribbble' },
              { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-sky hover:text-cyan hover:border-cyan/50 hover:neon-glow-cyan transition-all hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="ml-3 w-9 h-9 rounded-xl glass-card flex items-center justify-center text-sky hover:text-cyan hover:border-cyan/50 transition-all hover:scale-110"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
