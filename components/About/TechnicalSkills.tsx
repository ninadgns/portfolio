import { interests, itemVariants, proficient, workedWith } from '@/app/constants';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const chipBase = 'px-3 py-2 text-sm font-semibold hover-scale';
const chipBorder = { border: 'var(--border-width) solid var(--border)' };

const groups = [
  {
    heading: 'Proficient in',
    items: proficient,
    style: { ...chipBorder, backgroundColor: 'var(--yellow)', color: 'var(--foreground)' },
  },
  {
    heading: 'Worked with',
    items: workedWith,
    style: { ...chipBorder, backgroundColor: 'var(--background)', color: 'var(--foreground)' },
  },
  {
    heading: 'Areas of interest',
    items: interests,
    style: { ...chipBorder, backgroundColor: 'var(--accent)', color: 'white' },
  },
];

export default function TechnicalSkills() {
  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
        <Code aria-hidden="true" style={{ color: 'var(--accent)' }} />
        Technical Skills
      </h3>
      <div className="space-y-4">
        {groups.map(({ heading, items, style }) => (
          <div key={heading} className="card">
            <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>{heading}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className={chipBase} style={style}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
