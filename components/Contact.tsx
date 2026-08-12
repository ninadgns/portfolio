import { containerVariants, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col lg:flex-row lg:items-start justify-between gap-10"
          >
            <div className="lg:max-w-xl">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-black gradient-text mb-6 tracking-tight"
              >
                Get In Touch
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-pretty mb-6"
                style={{ color: 'var(--muted)' }}
              >
                I&rsquo;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and mathematics.
              </motion.p>
              <motion.ul variants={itemVariants} className="space-y-2" style={{ color: 'var(--muted)' }}>
                <li className="flex items-center gap-3">
                  <Mail size={18} aria-hidden="true" style={{ color: 'var(--accent)' }} />
                  <a href="mailto:ninadgns@gmail.com" className="hover:underline">ninadgns@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} aria-hidden="true" style={{ color: 'var(--accent)' }} />
                  <a href="tel:+8801799525733" className="hover:underline">+880 1799 525733</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} aria-hidden="true" style={{ color: 'var(--accent)' }} />
                  <span>Chankharpul, Dhaka</span>
                </li>
              </motion.ul>
            </div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0"
            >
              <Link
                href="mailto:ninadgns@gmail.com"
                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail size={20} aria-hidden="true" />
                Send Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/ninadgns"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Linkedin size={20} aria-hidden="true" />
                Connect on LinkedIn
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
}
