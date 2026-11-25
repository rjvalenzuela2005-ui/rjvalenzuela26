import React from 'react';
import { FaGem } from 'react-icons/fa';

/**
 * Reusable section title.
 * Props: sparkle, title, highlight (gradient), link, linkText
 */
export default function SectionTitle({ sparkle, title, highlight, link, linkText }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
      <div className="flex items-center gap-3">
        {sparkle && (
          <span className="text-cyan text-lg" aria-hidden>
            <FaGem />
          </span>
        )}
        <h2 className="font-display text-3xl sm:text-4xl uppercase text-white tracking-wide">
          {title}{' '}
          {highlight && (
            <span className="gradient-text">{highlight}</span>
          )}
        </h2>
      </div>
      {link && linkText && (
        <a
          href={link}
          className="text-xs text-sky hover:text-cyan transition-colors tracking-widest uppercase font-semibold flex items-center gap-1 group"
        >
          {linkText}
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </a>
      )}
    </div>
  );
}
