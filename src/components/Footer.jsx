import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Journey', id: 'journey' },
    { label: 'Hackathons', id: 'hackathons' },
    { label: 'Open Source', id: 'opensource' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
];

const socials = [
    { icon: FaGithub, href: 'https://github.com/karmjitsg09', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/karmjit-sg-61a09b385', label: 'LinkedIn' },
    { icon: HiMail, href: 'mailto:sgjitbros@gmail.com', label: 'Email' },
];

function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center font-bold text-dark text-xs">
                                K
                            </div>
                            <span className="gradient-text font-bold text-lg">Karmjit SG</span>
                        </div>
                        <p className="text-xs text-slate-500 font-mono">2nd-Year B.Tech CSE (AI &amp; ML) · Full-Stack Developer</p>
                    </div>

                    {/* Nav */}
                    <nav className="flex flex-wrap justify-center gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="text-xs text-slate-500 hover:text-neon-blue transition-colors cursor-pointer bg-transparent border-0"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="w-9 h-9 rounded-lg glass border border-neon-blue/20 flex items-center justify-center text-slate-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300"
                            >
                                <s.icon className="text-base" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-xs text-slate-600 flex items-center justify-center gap-1.5">
                        Built with <FaHeart className="text-neon-purple text-xs" /> by Karmjit SG · 2025 · Yenepoya University
                    </p>
                </div>
            </div>
        </footer>
    );
}
