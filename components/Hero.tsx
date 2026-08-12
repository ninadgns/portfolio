
import { containerVariants, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { FileDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-center"
                >
                    <motion.div variants={itemVariants} className="mb-6 flex flex-col items-center">
                        <Image
                            src="/profile.jpg"
                            alt="Md. Muhaiminul Islam Ninad"
                            width={160}
                            height={160}
                            priority
                            className="w-40 h-40 object-cover"
                            style={{
                                border: 'var(--border-width) solid var(--border)',
                                boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0 0 var(--border)',
                            }}
                        />
                    </motion.div>
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-6xl lg:text-7xl font-black mb-5 tracking-tight text-balance"
                        style={{ color: 'var(--foreground)' }}
                    >
                        Md. Muhaiminul Islam <span className="gradient-text">Ninad</span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-pretty"
                        style={{ color: 'var(--muted)' }}
                    >
                        AI Engineer at Makebell Ltd., building the document-automation agent and LLM orchestration behind an AI legal drafting platform. Final-year CSE student at the University of Dhaka with a strong background in Olympiad Mathematics and problem-solving.
                    </motion.p>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-4 mb-8"
                    >
                        <Link
                            href="/Md_Muhaiminul_Islam_Ninad_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2"
                        >
                            <FileDown size={20} aria-hidden="true" />
                            Download CV
                        </Link>
                        <Link href="mailto:ninadgns@gmail.com" className="btn-primary flex items-center gap-2">
                            <Mail size={20} aria-hidden="true" />
                            Email
                        </Link>
                        <Link href="tel:+8801799525733" className="btn-outline flex items-center gap-2">
                            <Phone size={20} aria-hidden="true" />
                            Call
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/ninadgns"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline flex items-center gap-2"
                        >
                            <Linkedin size={20} aria-hidden="true" />
                            LinkedIn
                        </Link>
                        <Link
                            href="https://github.com/ninadgns"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline flex items-center gap-2"
                        >
                            <Github size={20} aria-hidden="true" />
                            GitHub
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-2"
                        style={{ color: 'var(--muted)' }}
                    >
                        <MapPin size={20} aria-hidden="true" />
                        <span>Chankharpul, Dhaka</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
