import { containerVariants, interests, itemVariants, proficient, projects, workedWith } from '@/app/constants';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Award, GraduationCap, Code, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Projects(){
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
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
      </section></>
    )
}