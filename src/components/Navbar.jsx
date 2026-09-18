import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Journey', to: 'journey' },
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
    const [activeSection, setActiveSection] = useState('hero');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            // Active section detection
            const sections = navLinks.map((l) => document.getElementById(l.to)).filter(Boolean);
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'glass-strong py-2.5 sm:py-3 shadow-xl shadow-black/60 border-b border-white/10'
                    : 'py-5 bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Brand Logo */}
                <button
                    onClick={() => scrollTo('hero')}
                    className="cursor-pointer flex items-center gap-2.5 group bg-transparent border-0 focus:outline-none"
                    aria-label="Scroll to Top"
                >
                    <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                        <div className="w-full h-full bg-dark rounded-[10px] flex items-center justify-center font-black text-sm text-neon-cyan">
                            K
                        </div>
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="font-extrabold text-base tracking-tight gradient-text leading-tight">
                            Karmjit SG
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 tracking-wider hidden sm:block">
                            FULL-STACK &amp; AI
                        </span>
                    </div>
                </button>

                {/* Desktop Navigation Links */}
                <ul className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl glass border border-white/10 backdrop-blur-md">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.to;
                        return (
                            <li key={link.to} className="relative">
                                <button
                                    onClick={() => scrollTo(link.to)}
                                    className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer relative z-10 focus:outline-none ${
                                        isActive
                                            ? 'text-dark font-bold'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan -z-10 shadow-md shadow-neon-blue/30"
                                            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                                        />
                                    )}
                                    {link.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Right Action */}
                <div className="hidden sm:flex items-center gap-3">
                    <a
                        href="/Resume%201st%20year.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs font-mono font-bold rounded-xl border border-neon-blue/40 bg-neon-blue/10 text-neon-cyan hover:bg-neon-blue hover:text-dark hover:border-neon-blue shadow-sm hover:shadow-neon-blue/30 transition-all duration-300"
                    >
                        Resume ↗
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="lg:hidden p-2 rounded-xl glass border border-white/10 text-neon-cyan hover:text-white transition-colors focus:outline-none cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="text-xl font-mono leading-none">{menuOpen ? '✕' : '☰'}</span>
                </button>
            </div>

            {/* Mobile Animated Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass-strong border-t border-white/10 overflow-hidden shadow-2xl"
                    >
                        <ul className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <button
                                        onClick={() => {
                                            scrollTo(link.to);
                                            setMenuOpen(false);
                                        }}
                                        className={`block w-full text-left py-2.5 px-3 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                                            activeSection === link.to
                                                ? 'bg-neon-blue/15 text-neon-cyan font-bold border-l-2 border-neon-cyan'
                                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                            <li className="pt-3">
                                <a
                                    href="/Resume%201st%20year.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-2.5 rounded-xl border border-neon-blue/40 bg-neon-blue/10 text-neon-cyan text-xs font-mono font-bold hover:bg-neon-blue hover:text-dark transition-all"
                                >
                                    Resume ↗
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
