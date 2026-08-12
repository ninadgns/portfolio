import { achievements, containerVariants, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Achievements() {
    return (
        <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
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
              Achievements
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  className="card flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="shrink-0 mt-0.5" size={20} aria-hidden="true" style={{ color: 'var(--yellow-ink)' }} />
                    <h3 className="text-lg font-semibold flex-1" style={{ color: 'var(--foreground)' }}>
                      {achievement.link ? (
                        <Link
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors inline hover:underline"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {achievement.title}
                          <ExternalLink size={14} aria-hidden="true" className="inline ml-1 align-baseline" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </Link>
                      ) : (
                        achievement.title
                      )}
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
                    {achievement.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
}
