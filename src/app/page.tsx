'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Award, GraduationCap, Code} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold gradient-text">Ninad</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#achievements" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Achievements</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover-scale">
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
              className="text-5xl sm:text-7xl font-extrabold text-slate-900 dark:text-white mb-6"
            >
              Md. Muhaiminul Islam <span className="gradient-text">Ninad</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-2xl text-slate-700 dark:text-slate-200 mb-8 mx-auto pop-in"
            >
              Third-year CSE student at the University of Dhaka with a strong background in Olympiad Mathematics and problem-solving. <br />
              <span className="font-semibold text-accent">Web & Software Developer</span> | <span className="font-semibold text-accent-hover">Next.js & Python Enthusiast</span>
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
              className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 pop-in"
            >
              <MapPin size={20} />
              <span>Chankharpul, Dhaka</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
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
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="text-blue-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="card hover-lift">
                    <h4 className="font-semibold text-slate-900 dark:text-white">University of Dhaka</h4>
                    <p className="text-slate-600 dark:text-slate-300">CSE, 3rd Year 1st Semester</p>
                    <p className="gradient-text font-semibold">CGPA: 3.79/4.00</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">2022 - Present</p>
                  </div>
                  <div className="card hover-lift">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Notre Dame College</h4>
                    <p className="text-slate-600 dark:text-slate-300">HSC</p>
                    <p className="gradient-text font-semibold">GPA: 5.00</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">2019 - 2021</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Code className="text-blue-600" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Proficient in:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Full Stack Web Development', 'React/NextJS', 'Python', 'Olympiad Mathematics'].map((skill) => (
                        <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm hover-scale shimmer">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Worked with:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Rust', 'C++', 'LaTeX', 'Java', 'PostgreSQL', 'GitHub', 'Manim', 'Blender', 'Photoshop'].map((skill) => (
                        <span key={skill} className="bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm hover-scale">
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
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Full Stack Developer</h3>
                    <p className="gradient-text font-medium">Askturing.Ai</p>
                    <p className="text-slate-500 dark:text-slate-400">Remote</p>
                  </div>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm glow">
                    July 2024 - Present
                  </span>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Developing and maintaining full fledged user portal with NextJS</li>
                  <li>• Developed various APIs using Python to support backend functionality and data processing</li>
                  <li>• Working with teams to design client side and server side architecture</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="card hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Academic Team Member</h3>
                    <p className="gradient-text font-medium">Bangladesh Math Olympiad</p>
                    <p className="text-slate-500 dark:text-slate-400">Bangladesh</p>
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    2022 - Present
                  </span>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Training students at Olympiad Camps</li>
                  <li>• Developing Olympiad Questions for National and Regional Olympiads</li>
                  <li>• Evaluating Answer Scripts and preparing results at National and Regional Olympiads</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="card hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Secretary of Seminar & Workshop</h3>
                    <p className="gradient-text font-medium">CSEDU Students&lsquo; Club</p>
                    <p className="text-slate-500 dark:text-slate-400">University of Dhaka</p>
                  </div>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    2023 - 2025
                  </span>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Organizing events at the Department</li>
                  <li>• Collaborating with other departments of DU for inter department events</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
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
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="gradient-text text-sm mb-3">{project.tech}</p>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors hover-scale"
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
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
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
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
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
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Md. Muhaiminul Islam Ninad. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}