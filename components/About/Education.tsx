import { itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const schools = [
  {
    name: 'University of Dhaka',
    place: 'Dhaka, Bangladesh',
    programme: 'CSE, 4th Year 1st Semester',
    grade: 'CGPA: 3.74/4.00',
    dates: 'September 2022 - December 2026 (Expected)',
  },
  {
    name: 'Notre Dame College',
    place: 'Dhaka, Bangladesh',
    programme: 'HSC',
    grade: 'GPA: 5.00',
    dates: '2019 - 2021',
  },
];

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
