'use client';

import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import About from '@/components/About/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';



export default function Home() {
  // Force light mode — dark mode logic preserved below, uncomment to re-enable
  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
  }, []);

  // const [darkMode, setDarkMode] = useState(false);
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  //     setDarkMode(true);
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //   }
  // }, []);
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   if (!darkMode) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     document.documentElement.removeAttribute('data-theme');
  //     localStorage.setItem('theme', 'light');
  //   }
  // };

  return (
    // reducedMotion="user" honours prefers-reduced-motion. The CSS media query in
    // globals.css cannot do this alone: Framer Motion animates via inline styles.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen" style={{ background: 'var(--background)' }}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}