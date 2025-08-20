import { containerVariants, itemVariants } from '@/app/constants';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Contact(){
    return (
        <>
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-left md:w-2/3">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold gradient-text mb-8"
              >
                Get In Touch
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl"
                style={{ color: 'var(--muted)' }}
              >
                I&lsquo;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and mathematics.
              </motion.p>
            </div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 md:w-1/3 justify-end"
            >
              <Link
                href="mailto:ninadgns@gmail.com"
                className="btn-primary hover-scale flex items-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/ninadgns"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover-scale flex items-center gap-2"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section></>
    )
}