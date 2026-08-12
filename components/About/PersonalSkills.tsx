import { itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const strengths = [
  'Problem-solving & Critical thinking',
  'Mathematical modeling & Analysis',
  'Full-stack development',
  'Team collaboration & Leadership',
  'Project management',
];

const languages = [
  { name: 'Bengali', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Conversational' },
];

export default function PersonalSkills() {
    return (
        <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                <Award aria-hidden="true" style={{ color: 'var(--accent)' }} />
                Personal &amp; Professional
              </h3>
              <div className="space-y-4">
                <div className="card">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Core Strengths</h4>
                  <ul className="text-sm space-y-1.5" style={{ color: 'var(--muted)' }}>
                    {strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0" style={{ background: 'var(--accent)' }} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Languages</h4>
                  <div className="space-y-2">
                    {languages.map(({ name, level }) => (
                      <div key={name} className="flex justify-between gap-4">
                        <span style={{ color: 'var(--muted)' }}>{name}</span>
                        <span className="gradient-text font-semibold">{level}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* "Areas of interest" in Technical Skills covers the technical ones;
                    this card is deliberately the non-technical counterpart. */}
                <div className="card">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Outside Work</h4>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Mathematics Olympiad training, Open source contributions,
                    Tech community involvement, Chess, Photography, and exploring
                    emerging technologies.
                  </p>
                </div>
              </div>
            </motion.div>
    );
}
