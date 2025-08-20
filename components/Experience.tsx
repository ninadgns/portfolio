import { containerVariants, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
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
                        Work Experience
                    </motion.h2>
                    <div className="space-y-8">
                        <motion.div variants={itemVariants} className="card hover-lift">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Full Stack Developer</h3>
                                    <p className="gradient-text font-medium">Askturing.Ai</p>
                                    <p style={{ color: 'var(--muted)' }}>Remote</p>
                                </div>
                                <span className="px-3 py-1 rounded-full text-sm badge badge-primary">
                                    July 2024 - Present
                                </span>
                            </div>
                            <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
                                <li>• Developing and maintaining full fledged user portal with NextJS</li>
                                <li>• Developed various APIs using Python to support backend functionality and data processing</li>
                                <li>• Working with teams to design client side and server side architecture</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants} className="card hover-lift">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Academic Team Member</h3>
                                    <p className="gradient-text font-medium">Bangladesh Math Olympiad</p>
                                    <p style={{ color: 'var(--muted)' }}>Bangladesh</p>
                                </div>
                                <span className="px-3 py-1 rounded-full text-sm badge badge-primary">
                                    2022 - Present
                                </span>
                            </div>
                            <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
                                <li>• Training students at Olympiad Camps</li>
                                <li>• Developing Olympiad Questions for National and Regional Olympiads</li>
                                <li>• Evaluating Answer Scripts and preparing results at National and Regional Olympiads</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants} className="card hover-lift">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>Secretary of Seminar & Workshop</h3>
                                    <p className="gradient-text font-medium">CSEDU Students&lsquo; Club</p>
                                    <p style={{ color: 'var(--muted)' }}>University of Dhaka</p>
                                </div>
                                <span className="px-3 py-1 rounded-full text-sm badge badge-secondary">
                                    2023 - 2025
                                </span>
                            </div>
                            <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
                                <li>• Organizing events at the Department</li>
                                <li>• Collaborating with other departments of DU for inter department events</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}