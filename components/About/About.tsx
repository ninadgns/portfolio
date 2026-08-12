import { containerVariants, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import Education from './Education';
import TechnicalSkills from './TechnicalSkills';
import PersonalSkills from './PersonalSkills';

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--background)' }}>
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
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <Education />
            <TechnicalSkills />
            <PersonalSkills />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
