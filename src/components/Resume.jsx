import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiAcademicCap, HiBriefcase, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const resumeHighlights = [
    {
        icon: HiAcademicCap,
        title: 'Education',
        color: 'blue',
        items: [
            { label: 'B.Tech Student', desc: 'Yenepoya University (Kalvium)' },
            { label: 'First Year', desc: 'Computer Science & Engineering' },
        ],
    },
    {
        icon: HiCode,
        title: 'Technical Skills',
        color: 'purple',
        items: [
            { label: 'Languages', desc: 'Python, JavaScript, Java, C++' },
            { label: 'Web', desc: 'HTML, CSS' },
            { label: 'Tools', desc: 'Git, GitHub, Linux Terminal' },
        ],
    },
    {
        icon: HiBriefcase,
        title: 'Projects & OS',
        color: 'cyan',
        items: [
            { label: 'Smart Spend', desc: 'Revenue Tracker App' },
            { label: 'Fighting Game', desc: 'Motion-controlled 2D game' },
            { label: 'Mathesar', desc: 'Open-source contributor' },
        ],
    },
];

const colorMap = {
    blue: { border: 'border-neon-blue/30', icon: 'text-neon-blue', bg: 'bg-neon-blue/10', dot: 'bg-neon-blue' },
    purple: { border: 'border-neon-purple/30', icon: 'text-neon-purple', bg: 'bg-neon-purple/10', dot: 'bg-neon-purple' },
    cyan: { border: 'border-neon-cyan/30', icon: 'text-neon-cyan', bg: 'bg-neon-cyan/10', dot: 'bg-neon-cyan' },
};

export default function Resume() {
    return (
        <section id="resume" className="py-28 relative overflow-hidden grid-bg">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">Resume</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
                    </div>
                    <h2 className="section-title gradient-text">My Resume</h2>
                </motion.div>

                {/* Summary Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {resumeHighlights.map((section, i) => {
                        const c = colorMap[section.color];
                        return (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: i * 0.12 }}
                                className={`glass rounded-2xl p-6 border ${c.border} card-hover`}
                            >
                                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5`}>
                                    <section.icon className={`text-xl ${c.icon}`} />
                                </div>
                                <h3 className={`text-lg font-bold ${c.icon} mb-4`}>{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.items.map((item) => (
                                        <li key={item.label} className="flex items-start gap-2.5">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                                            <div>
                                                <p className="text-sm font-semibold text-white">{item.label}</p>
                                                <p className="text-xs text-slate-500">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Download CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="glass rounded-2xl p-10 border border-neon-blue/20 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-neon-blue/50" />
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-neon-blue">
                            <HiDownload className="text-dark text-2xl" />
                        </div>
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-neon-blue/50" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Download Full Resume</h3>
                    <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
                        Get the complete resume in PDF format with all projects, skills, and contact details.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="/Resume%201st%20year.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold rounded-xl hover:shadow-neon-blue-lg transition-all duration-300"
                        >
                            <HiDownload className="text-xl" />
                            View / Download PDF
                        </motion.a>
                        <motion.a
                            href="https://github.com/karmjitsg09"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center justify-center gap-2 px-8 py-3.5 border border-neon-blue/60 text-neon-blue font-bold rounded-xl hover:bg-neon-blue/10 transition-all duration-300"
                        >
                            <FaGithub className="text-xl" />
                            View GitHub
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
