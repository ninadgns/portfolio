import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const social = [
    { href: 'https://github.com/ninadgns', label: 'GitHub', Icon: Github, external: true },
    { href: 'https://www.linkedin.com/in/ninadgns', label: 'LinkedIn', Icon: Linkedin, external: true },
    { href: 'mailto:ninadgns@gmail.com', label: 'Email', Icon: Mail, external: false },
];

export default function Footer() {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t-[3px]" style={{ borderColor: 'var(--border)' }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p style={{ color: 'var(--muted)' }}>
                        © {new Date().getFullYear()} Md. Muhaiminul Islam Ninad
                    </p>

                    <div className="flex items-center gap-5">
                        {social.map(({ href, label, Icon, external }) => (
                            <Link
                                key={label}
                                href={href}
                                aria-label={label}
                                className="flex items-center justify-center min-h-11 min-w-11 transition-colors hover:text-[var(--accent)]"
                                style={{ color: 'var(--muted)' }}
                                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                                <Icon size={22} aria-hidden="true" />
                            </Link>
                        ))}
                        <a href="#top" className="icon-button min-h-11 min-w-11" aria-label="Back to top">
                            <ArrowUp size={20} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
