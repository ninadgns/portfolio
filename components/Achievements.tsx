import { achievements, containerVariants, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
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
              className="text-3xl font-black text-center gradient-text mb-12 tracking-tight"
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
                    minHeight: '200px',
                    alignSelf: 'start',
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <Award className="flex-shrink-0" size={20} style={{ color: 'var(--yellow)' }} />
                      <h3 className="text-lg font-semibold flex-1" style={{ color: 'var(--foreground)' }}>
                        {achievement.link ? (
                          <Link
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors inline-flex items-center gap-1 hover:underline"
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

                    <div className="mb-4">
                      <motion.p
                        animate={{
                          opacity: hoveredIndex === index && achievement.details ? 0 : 1,
                          height: hoveredIndex === index && achievement.details ? 0 : 'auto',
                        }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: 'hidden', color: 'var(--muted)' }}
                        className="text-sm"
                      >
                        {achievement.description}
                      </motion.p>

                      {achievement.details && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: hoveredIndex === index ? 'auto' : 0,
                            opacity: hoveredIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          style={{ overflow: 'hidden' }}
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
                      )}
                    </div>
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