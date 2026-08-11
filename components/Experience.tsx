import { containerVariants, experience, itemVariants } from '@/app/constants';
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
                        className="text-3xl font-black text-center gradient-text mb-12 tracking-tight"
                    >
                        Work Experience
                    </motion.h2>
                    <div className="space-y-8">
                        {experience.map((job) => (
                            <motion.div key={`${job.company}-${job.role}`} variants={itemVariants} className="card hover-lift">
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>{job.role}</h3>
                                        <p className="gradient-text font-medium">{job.company}</p>
                                        <p style={{ color: 'var(--muted)' }}>{job.location}</p>
                                    </div>
                                    <span className={`px-3 py-1 text-sm badge badge-${job.badge} shrink-0`}>
                                        {job.duration}
                                    </span>
                                </div>
                                <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
                                    {job.details.map((detail) => (
                                        <li key={detail} className="flex items-start gap-2">
                                            <span className="mt-1" style={{ color: 'var(--accent)' }}>•</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
