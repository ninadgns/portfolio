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
                  <p style={{ color: 'var(--muted)' }}>B.Sc. in Computer Science & Engineering</p>
                  <p style={{ color: 'var(--muted)' }}>3rd Year 2nd Semester</p>
                  <p className="gradient-text font-semibold">CGPA: 3.77/4.00</p>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>2022 - Present</p>
                  <div className="mt-2">
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      Relevant Coursework: Data Structures, Algorithms, Database Systems,
                      Software Engineering, Computer Networks, Operating Systems
                    </p>
                  </div>
                </div>
                <div className="card hover-lift">
                  <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>Notre Dame College</h4>
                  <p style={{ color: 'var(--muted)' }}>Higher Secondary Certificate (Science)</p>
                  <p className="gradient-text font-semibold">GPA: 5.00/5.00</p>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>2019 - 2021</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                    Major: Physics, Chemistry, Mathematics, Biology
                  </p>
                </div>
                <div className="card hover-lift">
                  <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>Jamalpur Zilla School</h4>
                  <p style={{ color: 'var(--muted)' }}>Secondary School Certificate (Science)</p>
                  <p className="gradient-text font-semibold">GPA: 5.00/5.00</p>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>2011 - 2019</p>
                </div>
              </div>
            </motion.div>
    )
}