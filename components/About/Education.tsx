import { itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';


export default function Education(){
    return (
        <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                <GraduationCap className="text-blue-600" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="card hover-lift">
                  <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>University of Dhaka</h4>
                  <p style={{ color: 'var(--muted)' }}>Dhaka, Bangladesh</p>
                  <p style={{ color: 'var(--muted)' }}>CSE, 3rd Year 2nd Semester; <span className="gradient-text font-semibold">CGPA: 3.77/4.00</span></p>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>September 2022 - November 2026 (Expected)</p>
                </div>
                <div className="card hover-lift">
                  <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>Notre Dame College</h4>
                  <p style={{ color: 'var(--muted)' }}>Dhaka, Bangladesh</p>
                  <p style={{ color: 'var(--muted)' }}>HSC; <span className="gradient-text font-semibold">GPA: 5.00</span></p>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>2019 - 2021</p>
                </div>
              </div>
            </motion.div>
    )
}