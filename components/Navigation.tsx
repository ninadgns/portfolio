'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full glass-effect z-50 border-b-[3px]" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Wordmark, not a heading: the page's only h1 is the name in the hero. */}
          <a href="#top" className="text-xl font-extrabold gradient-text tracking-tight py-2">Ninad</a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link transition-colors py-2.5">
                {label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              ref={toggleRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="icon-button p-2"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden', borderTop: 'var(--border-width) solid var(--border)' }}
          >
            <div className="flex flex-col px-4 py-2" style={{ background: 'var(--background)' }}>
              {navLinks.map(({ href, label }, i) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link text-lg flex items-center min-h-11 py-2"
                  style={{ borderTop: i === 0 ? 'none' : 'var(--border-width-sm) solid var(--border)' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
