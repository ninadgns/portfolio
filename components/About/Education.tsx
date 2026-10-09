import { itemVariants, schools } from '@/app/constants';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    return (
        <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                <GraduationCap aria-hidden="true" style={{ color: 'var(--accent)' }} />
                Education
              </h3>
              <div className="space-y-4">
                {schools.map(({ name, place, programme, grade, dates }) => (
                  <div key={name} className="card">
                    <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>{name}</h4>
                    <p style={{ color: 'var(--muted)' }}>{place}</p>
                    <p style={{ color: 'var(--muted)' }}>
                      {programme}; <span className="gradient-text font-semibold">{grade}</span>
                    </p>
                    <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{dates}</p>
                  </div>
                ))}
              </div>
            </motion.div>
    )
}
