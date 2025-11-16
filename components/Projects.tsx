import { containerVariants, interests, itemVariants, proficient, projects, workedWith } from '@/app/constants';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Award, GraduationCap, Code, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Projects(){
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return(
        <>
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--background)' }}>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover-lift relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ 
                    minHeight: hoveredIndex === index ? 'auto' : '280px',
                    alignSelf: 'start',
                    height: 'auto'
                  }}
                >
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
                    </div>
                    
                    <p className="gradient-text text-sm mb-2">{project.tech}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.projectType && (
                        <span className="badge badge-primary text-xs">{project.projectType}</span>
                      )}
                      {project.groupSize && (
                        <span className="badge badge-secondary text-xs">{project.groupSize}</span>
                      )}
                    </div>
                    
                    <motion.div 
                      className="mb-4"
                      layout
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <AnimatePresence mode="wait">
                        {hoveredIndex === index && project.details ? (
                          <motion.div
                            key="details"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ 
                              duration: 0.2,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
                              {project.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-2">
                                  <span className="text-xs mt-1.5" style={{ color: 'var(--accent)' }}>•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ) : (
                          <motion.p
                            key="description"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ 
                              duration: 0.2,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            className="text-sm"
                            style={{ color: 'var(--muted)' }}
                          >
                            {project.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <div className="mt-auto pt-4 flex flex-wrap gap-3">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors hover-scale text-sm"
                        style={{ color: 'var(--accent)' }}
                      >
                        <Github size={16} />
                        GitHub
                        <ExternalLink size={12} />
                      </Link>
                      {project.githubFrontend && (
                        <Link
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors hover-scale text-sm"
                          style={{ color: 'var(--accent)' }}
                        >
                          <Github size={16} />
                          Frontend
                          <ExternalLink size={12} />
                        </Link>
                      )}
                      {project.githubBackend && project.githubBackend !== project.github && (
                        <Link
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors hover-scale text-sm"
                          style={{ color: 'var(--accent)' }}
                        >
                          <Github size={16} />
                          Backend
                          <ExternalLink size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section></>
    )
}