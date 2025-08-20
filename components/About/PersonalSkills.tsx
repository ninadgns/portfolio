import { itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function  PersonalSkills() {
    return(
        <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                <Award className="text-blue-600" />
                Personal & Professional
              </h3>
              <div className="space-y-6">
                <div className="card hover-lift">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Core Strengths</h4>
                  <ul className="text-sm space-y-1" style={{ color: 'var(--muted)' }}>
                    <li>• Problem-solving & Critical thinking</li>
                    <li>• Mathematical modeling & Analysis</li>
                    <li>• Full-stack development</li>
                    <li>• Team collaboration & Leadership</li>
                    <li>• Project management</li>
                  </ul>
                </div>
                <div className="card hover-lift">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Languages</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span style={{ color: 'var(--muted)' }}>Bengali</span>
                      <span className="gradient-text font-semibold">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: 'var(--muted)' }}>English</span>
                      <span className="gradient-text font-semibold">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: 'var(--muted)' }}>Hindi</span>
                      <span className="gradient-text font-semibold">Conversational</span>
                    </div>
                  </div>
                </div>
                <div className="card hover-lift">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Interests</h4>
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