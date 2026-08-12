import { containerVariants, itemVariants, projects } from '@/app/constants';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import DetailsDisclosure from './DetailsDisclosure';

const linkClass =
  'inline-flex items-center gap-2 font-semibold transition-colors text-sm min-h-11 border-b-[3px] border-[var(--accent)] hover:border-b-[var(--accent-hover)]';

export default function Projects() {
    return (
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-black text-center gradient-text mb-12 tracking-tight"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="card flex flex-col"
                >
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>{project.title}</h3>

                  <p className="text-sm font-medium mt-1 mb-3" style={{ color: 'var(--muted)' }}>{project.tech}</p>

                  {(project.projectType || project.groupSize) && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.projectType && (
                        <span className="badge badge-primary text-xs">{project.projectType}</span>
                      )}
                      {project.groupSize && (
                        <span className="badge badge-secondary text-xs">{project.groupSize}</span>
                      )}
                    </div>
                  )}

                  <DetailsDisclosure
                    summary={project.description}
                    details={project.details}
                    label={project.title}
                  />

                  <div className="mt-auto pt-4 flex flex-wrap gap-x-4 gap-y-1">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                          style={{ color: 'var(--foreground)' }}
                        >
                          <Github size={16} aria-hidden="true" />
                          GitHub
                          <ExternalLink size={12} aria-hidden="true" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </Link>
                      )}
                      {project.githubFrontend && (
                        <Link
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                          style={{ color: 'var(--foreground)' }}
                        >
                          <Github size={16} aria-hidden="true" />
                          Frontend
                          <ExternalLink size={12} aria-hidden="true" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </Link>
                      )}
                      {project.githubBackend && (
                        <Link
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                          style={{ color: 'var(--foreground)' }}
                        >
                          <Github size={16} aria-hidden="true" />
                          Backend
                          <ExternalLink size={12} aria-hidden="true" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                          style={{ color: 'var(--foreground)' }}
                        >
                          {project.liveLabel ?? 'Live'}
                          <ExternalLink size={12} aria-hidden="true" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </Link>
                      )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
}
