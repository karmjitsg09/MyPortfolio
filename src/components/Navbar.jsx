import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Research', to: 'research' },
    { label: 'Hackathons', to: 'hackathons' },
    { label: 'Open Source', to: 'opensource' },
    { label: 'Resume', to: 'resume' },
    { label: 'Contact', to: 'contact' },
];

function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong py-3 shadow-lg shadow-black/50' : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <button onClick={() => scrollTo('hero')} className="cursor-pointer flex items-center gap-2 group bg-transparent border-0">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center font-bold text-dark text-sm">
                        K
                    </div>
                    <span className="gradient-text font-bold text-lg hidden sm:block">Karmjit SG</span>
                </button>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <button
                                onClick={() => scrollTo(link.to)}
                                className="text-sm font-medium text-slate-400 hover:text-neon-blue transition-colors cursor-pointer relative group bg-transparent border-0"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300 rounded-full" />
                            </button>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/Resume%201st%20year.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-semibold rounded-lg border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark transition-all duration-300"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-neon-blue text-2xl bg-transparent border-0"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-strong border-t border-neon-blue/10 overflow-hidden"
                    >
                        <ul className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <button
                                        onClick={() => { scrollTo(link.to); setMenuOpen(false); }}
                                        className="block w-full text-left py-3 text-slate-300 hover:text-neon-blue transition-colors cursor-pointer font-medium border-b border-white/5 bg-transparent border-0"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                            <li className="pt-2">
                                <a
                                    href="/Resume%201st%20year.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-2.5 rounded-lg border border-neon-blue text-neon-blue font-semibold hover:bg-neon-blue hover:text-dark transition-all"
                                >
                                    Download Resume
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
