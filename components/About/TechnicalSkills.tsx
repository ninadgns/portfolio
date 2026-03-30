import { interests, itemVariants, proficient, workedWith } from '@/app/constants';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export default function TechnicalSkills() {

  return (
    <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                <Code style={{ color: 'var(--accent)' }} />
                Technical Skills
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Proficient in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {proficient.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-sm font-semibold hover-scale border-[3px] border-[var(--border)]"
                        style={{
                          backgroundColor: 'var(--yellow)',
                          color: 'var(--foreground)'
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
                        className="px-4 py-2 text-sm font-semibold hover-scale border-[3px] border-[var(--border)]"
                        style={{
                          backgroundColor: 'var(--background)',
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
                        className="px-4 py-2 text-sm font-semibold hover-scale border-[3px] border-[var(--border)]"
                        style={{
                          backgroundColor: 'var(--accent)',
                          color: 'white'
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

