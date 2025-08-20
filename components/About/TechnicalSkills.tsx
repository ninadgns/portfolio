import { interests, itemVariants, proficient, workedWith } from '@/app/constants';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export default function TechnicalSkills() {

  return (
    <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                <Code className="text-blue-600" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Proficient in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {proficient.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full text-sm hover-scale shimmer"
                        style={{
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          color: 'var(--accent)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Worked with:</h4>
                  <div className="flex flex-wrap gap-2">
                    {workedWith.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 rounded-full text-sm hover-scale"
                        style={{
                          backgroundColor: 'var(--border)',
                          color: 'var(--foreground)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Areas of Interest:</h4>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-2 rounded-full text-sm hover-scale"
                        style={{
                          backgroundColor: 'rgba(139, 92, 246, 0.1)',
                          color: 'var(--secondary)'
                        }}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
  )
};

