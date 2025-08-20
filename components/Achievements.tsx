import { achievements, containerVariants, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
export default function Achievements() {  
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
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover-lift flex items-start gap-4"
                >
                  <Award className="text-yellow-500 mt-1 flex-shrink-0 glow" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{achievement.title}</h3>
                    <p style={{ color: 'var(--muted)' }}>{achievement.description}</p>
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