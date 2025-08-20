
import { containerVariants, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-center"
                >
                    <motion.div variants={itemVariants} className="mb-8 flex flex-col items-center">
                        <div className="relative w-40 h-40 mb-6">
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-40 h-40 object-cover rounded-full shadow-xl border-4 border-accent pop-in"
                                style={{ background: 'var(--accent)' }}
                                onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ninad&background=ff6bcb&color=fff&size=160'; }}
                            />
                        </div>
                    </motion.div>
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-7xl font-extrabold mb-6"
                        style={{ color: 'var(--foreground)' }}
                    >
                        Md. Muhaiminul Islam <span className="gradient-text">Ninad</span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-2xl mb-8 mx-auto pop-in"
                        style={{ color: 'var(--muted)' }}
                    >
                        Third-year CSE student at the University of Dhaka with a strong background in Olympiad Mathematics and problem-solving. <br />
                        <span className="font-semibold gradient-text">Web & Software Developer,</span> focused on <span className="font-semibold gradient-text">Next.js and Python</span>
                    </motion.p>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-4 mb-8"
                    >
                        <Link href="tel:01799525733" className="btn-primary hover-scale pop-in flex items-center gap-2">
                            <Phone size={20} />
                            Call
                        </Link>
                        <Link href="mailto:ninadgns@gmail.com" className="btn-primary hover-scale pop-in flex items-center gap-2">
                            <Mail size={20} />
                            Email
                        </Link>
                        <Link href="https://www.linkedin.com/in/ninadgns" className="btn-primary hover-scale pop-in flex items-center gap-2">
                            <Linkedin size={20} />
                            LinkedIn
                        </Link>
                        <Link href="https://github.com/ninadgns" className="btn-primary hover-scale pop-in flex items-center gap-2">
                            <Github size={20} />
                            GitHub
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-2 pop-in"
                        style={{ color: 'var(--muted)' }}
                    >
                        <MapPin size={20} />
                        <span>Chankharpul, Dhaka</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}