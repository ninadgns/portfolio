import { achievements, containerVariants, itemVariants } from '@/app/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Achievements() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    return(
        <>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover-lift relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ 
                    minHeight: hoveredIndex === index ? 'auto' : '200px',
                    alignSelf: 'start',
                    height: 'auto'
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <Award className="text-yellow-500 flex-shrink-0 glow" size={20} />
                      <h3 className="text-lg font-semibold flex-1" style={{ color: 'var(--foreground)' }}>
                        {achievement.link ? (
                          <Link 
                            href={achievement.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                            style={{ color: 'var(--foreground)' }}
                          >
                            {achievement.title}
                            <ExternalLink size={14} />
                          </Link>
                        ) : (
                          achievement.title
                        )}
                      </h3>
                    </div>
                    
                    <motion.div 
                      className="mb-4"
                      layout
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <AnimatePresence mode="wait">
                        {hoveredIndex === index && achievement.details ? (
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
                              {achievement.details.map((detail, detailIndex) => (
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
                            {achievement.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
        </> 
    );
}