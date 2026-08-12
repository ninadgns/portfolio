import { containerVariants, experience, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
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
                        Work Experience
                    </motion.h2>
                    {/* Narrower than the card grids: a single column of prose at full
                        7xl width cannot fill the line without wrecking the measure. */}
                    <div className="space-y-8 max-w-5xl mx-auto">
                        {experience.map((job) => (
                            <motion.div
                                key={`${job.company}-${job.role}`}
                                variants={itemVariants}
                                className="card lg:grid lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-8"
                            >
                                <div className="mb-4 lg:mb-0">
                                    <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>{job.role}</h3>
                                    <p className="gradient-text font-medium">{job.company}</p>
                                    <p className="mb-3" style={{ color: 'var(--muted)' }}>{job.location}</p>
                                    <span className="badge badge-primary">{job.duration}</span>
                                </div>
                                {/* 55ch measures to ~72 real characters in Geist. */}
                                <ul className="space-y-2 max-w-[55ch]" style={{ color: 'var(--muted)' }}>
                                    {job.details.map((detail) => (
                                        <li key={detail} className="flex items-start gap-3">
                                            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0" style={{ background: 'var(--accent)' }} />
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
