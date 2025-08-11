'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Award, GraduationCap, Code, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference and localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{
      background: darkMode ? 'linear-gradient(to bottom right, #0f172a, #1e293b)' : 'linear-gradient(to bottom right, #f8fafc, #dbeafe)'
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold gradient-text">Ninad</h1>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>About</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>Experience</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>Projects</a>
              <a href="#achievements" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>Achievements</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>Contact</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg transition-colors hover-scale"
                style={{ 
                  background: 'var(--border)', 
                  color: 'var(--muted)',
                  border: '1px solid var(--border)'
                }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg transition-colors hover-scale"
                style={{ 
                  background: 'var(--border)', 
                  color: 'var(--muted)',
                  border: '1px solid var(--border)'
                }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="hover:text-blue-600 hover-scale" style={{ color: 'var(--muted)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8 flex flex-col items-center">
              <div className="relative w-40 h-40 mb-6">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-40 h-40 object-cover rounded-full shadow-xl border-4 border-accent pop-in"
                  style={{ background: 'var(--accent)' }}
                  onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ninad&background=ff6bcb&color=fff&size=160'; }}
                />
              </div>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl font-extrabold mb-6"
              style={{ color: 'var(--foreground)' }}
            >
              Md. Muhaiminul Islam <span className="gradient-text">Ninad</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-2xl mb-8 mx-auto pop-in"
              style={{ color: 'var(--muted)' }}
            >
              Third-year CSE student at the University of Dhaka with a strong background in Olympiad Mathematics and problem-solving. <br />
              <span className="font-semibold gradient-text">Web & Software Developer</span> | <span className="font-semibold gradient-text">Next.js & Python Enthusiast</span>
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <Link href="tel:01799525733" className="btn-primary hover-scale pop-in flex items-center gap-2">
                <Phone size={20} />
                Call
              </Link>
              <Link href="mailto:ninadgns@gmail.com" className="btn-primary hover-scale pop-in flex items-center gap-2">
                <Mail size={20} />
                Email
              </Link>
              <Link href="https://www.linkedin.com/in/ninadgns" className="btn-primary hover-scale pop-in flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </Link>
              <Link href="https://github.com/ninadgns" className="btn-primary hover-scale pop-in flex items-center gap-2">
                <Github size={20} />
                GitHub
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 pop-in"
              style={{ color: 'var(--muted)' }}
            >
              <MapPin size={20} />
              <span>Chankharpul, Dhaka</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center gradient-text mb-12"
            >
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                  <GraduationCap className="text-blue-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="card hover-lift">
                    <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>University of Dhaka</h4>
                    <p style={{ color: 'var(--muted)' }}>CSE, 3rd Year 1st Semester</p>
                    <p className="gradient-text font-semibold">CGPA: 3.79/4.00</p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>2022 - Present</p>
                  </div>
                  <div className="card hover-lift">
                    <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>Notre Dame College</h4>
                    <p style={{ color: 'var(--muted)' }}>HSC</p>
                    <p className="gradient-text font-semibold">GPA: 5.00</p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>2019 - 2021</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                  <Code className="text-blue-600" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Proficient in:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Full Stack Web Development', 'React/NextJS', 'Python', 'Olympiad Mathematics'].map((skill) => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover-scale shimmer" style={{
                          backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                          color: 'var(--accent)'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Worked with:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Rust', 'C++', 'LaTeX', 'Java', 'PostgreSQL', 'GitHub', 'Manim', 'Blender', 'Photoshop'].map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full text-sm hover-scale" style={{
                          backgroundColor: 'var(--border)',
                          color: 'var(--foreground)'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center gradient-text mb-12"
            >
              Work Experience
            </motion.h2>
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="card hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Full Stack Developer</h3>
                    <p className="gradient-text font-medium">Askturing.Ai</p>
                    <p style={{ color: 'var(--muted)' }}>Remote</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm glow" style={{
                    backgroundColor: darkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--success)'
                  }}>
                    July 2024 - Present
                  </span>
                </div>
                <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
                  <li>• Developing and maintaining full fledged user portal with NextJS</li>
                  <li>• Developed various APIs using Python to support backend functionality and data processing</li>
                  <li>• Working with teams to design client side and server side architecture</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="card hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Academic Team Member</h3>
                    <p className="gradient-text font-medium">Bangladesh Math Olympiad</p>
                    <p style={{ color: 'var(--muted)' }}>Bangladesh</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm" style={{
                    backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                    color: 'var(--accent)'
                  }}>
                    2022 - Present
                  </span>
                </div>
                <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
                  <li>• Training students at Olympiad Camps</li>
                  <li>• Developing Olympiad Questions for National and Regional Olympiads</li>
                  <li>• Evaluating Answer Scripts and preparing results at National and Regional Olympiads</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="card hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Secretary of Seminar & Workshop</h3>
                    <p className="gradient-text font-medium">CSEDU Students&lsquo; Club</p>
                    <p style={{ color: 'var(--muted)' }}>University of Dhaka</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm" style={{
                    backgroundColor: darkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.1)',
                    color: 'var(--secondary)'
                  }}>
                    2023 - 2025
                  </span>
                </div>
                <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
                  <li>• Organizing events at the Department</li>
                  <li>• Collaborating with other departments of DU for inter department events</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center gradient-text mb-12"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "KitchenMate",
                  tech: "Flutter, Dart, Firebase, Supabase",
                  description: "Cross-platform mobile app for smart cooking assistance with ingredient management, recipe discovery, custom timers, and offline functionality.",
                  github: "https://github.com/ninadgns/Android-Project-Pink-Flag"
                },
                {
                  title: "TEMS Academy LMS",
                  tech: "Next.js 14, TypeScript, Supabase",
                  description: "Full-stack Learning Management System for TEMS Academy with automated PDF report generation and role-based access control.",
                  github: "https://github.com/ninadgns/TEMS-LMS"
                },
                {
                  title: "Hill Climb Racing Clone",
                  tech: "C++, SDL2, Custom Physics Engine",
                  description: "2D physics-based game recreation with custom collision detection, fuel management, and Entity Component System architecture.",
                  github: "https://github.com/mithunvoe/Hill-Climb-Racing"
                },
                {
                  title: "NutriCulinary",
                  tech: "Next.js, TypeScript, Supabase",
                  description: "Full-stack personalized meal planning platform with recipe recommendations and admin dashboard.",
                  github: "https://github.com/ninadgns/meal-planner"
                },
                {
                  title: "CGPA Calculator",
                  tech: "React, HTML, CSS, JavaScript",
                  description: "CGPA Calculator used by CSEDU students, featuring calculations for theory and lab subjects with mobile-responsive design.",
                  github: "https://github.com/ninadgns/ninadgns.github.io/tree/main/CGPASource"
                },
                {
                  title: "BookStay - Hotel Booking App",
                  tech: "JavaFX, PostgreSQL, Maven",
                  description: "Desktop hotel booking platform with multi-user authentication, real-time chat, and comprehensive booking management.",
                  github: "https://github.com/ninadgns/OOP-Project"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover-lift"
                >
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
                  <p className="gradient-text text-sm mb-3">{project.tech}</p>
                  <p className="mb-4" style={{ color: 'var(--muted)' }}>{project.description}</p>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors hover-scale"
                    style={{ color: 'var(--accent)' }}
                  >
                    <Github size={16} />
                    View on GitHub
                    <ExternalLink size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center gradient-text mb-12"
            >
              Achievements
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  title: "2nd Runners Up at Code Samurai Inter University Hackathon 2024",
                  description: "Member of team 'DU_Diligence' in this competitive hackathon, focusing on rapid development and presentation of innovative solutions."
                },
                {
                  title: "1st Place at DU CTF 2024",
                  description: "Member of team 'DU_MPLING' in this university-wide Capture The Flag cybersecurity competition."
                },
                {
                  title: "Honorable Mention at Asian Pacific Mathematical Olympiad",
                  description: "Recognized in 2019 & 2021 in this prestigious international mathematics competition for pre-university students."
                },
                {
                  title: "Bangladesh Mathematical Olympiad National Winner",
                  description: "2013, 2017, 2018, 2021. Consistently ranked well in BdMO and attended multiple National Camps."
                },
                {
                  title: "International Mathematical Olympiad Team Selection",
                  description: "Participated in selection tests in 2019, 2020. Qualified through rigorous pre-tests for this global competition."
                }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover-lift flex items-start gap-4"
                >
                  <Award className="text-yellow-500 mt-1 flex-shrink-0 glow" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{achievement.title}</h3>
                    <p style={{ color: 'var(--muted)' }}>{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: darkMode ? '#1e293b' : '#ffffff' }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold gradient-text mb-8"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: 'var(--muted)' }}
            >
              I&lsquo;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and mathematics.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="mailto:ninadgns@gmail.com"
                className="btn-primary hover-scale flex items-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/ninadgns"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover-scale flex items-center gap-2"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p style={{ color: 'var(--muted)' }}>
            © 2025 Md. Muhaiminul Islam Ninad. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}