import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaGithub, FaTerminal, FaRocket, FaLaptopCode } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';
import { HiLightningBolt } from 'react-icons/hi';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
    }),
};

const floatingIcons = [
    { icon: FaCode, color: 'neon-blue', label: 'Code', delay: '0s' },
    { icon: FaBrain, color: 'neon-purple', label: 'AI', delay: '1s' },
    { icon: FaGithub, color: 'neon-cyan', label: 'Open Source', delay: '2s' },
    { icon: FaTerminal, color: 'neon-blue', label: 'Linux', delay: '0.5s' },
    { icon: FaRocket, color: 'neon-purple', label: 'Launch', delay: '1.5s' },
    { icon: SiOpenai, color: 'neon-cyan', label: 'AI Tools', delay: '2.5s' },
    { icon: HiLightningBolt, color: 'neon-blue', label: 'Automation', delay: '0.8s' },
    { icon: FaLaptopCode, color: 'neon-purple', label: 'Dev', delay: '1.8s' },
];

export default function About() {
    return (
        <section id="about" className="py-28 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl" />
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section title */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">About Me</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
                    </div>
                    <h2 className="section-title gradient-text mb-3">Who I Am</h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – Bio */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={1}
                    >
                        <div className="glass rounded-2xl p-8 card-hover border border-neon-blue/10">
                            {/* Profile picture placeholder / avatar */}
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan flex items-center justify-center text-3xl font-black text-dark shadow-neon-blue flex-shrink-0">
                                    K
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Karmjit SG</h3>
                                    <p className="text-neon-cyan text-sm font-mono mt-0.5">2nd-Year B.Tech CSE (AI &amp; ML)</p>
                                    <p className="text-slate-400 text-xs mt-0.5">Yenepoya University (Kalvium) • Full-Stack Developer</p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed text-base mb-5">
                                I am a <span className="neon-text-blue font-semibold">2nd-year B.Tech Computer Science and Engineering (AI &amp; ML)</span> student at Yenepoya University (Kalvium Program). I enjoy building real, production-ready web applications and practical tools rather than only experimenting with tutorials.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-base mb-6">
                                My core focus spans <span className="neon-text-cyan font-semibold">Full-Stack Web Development</span>, <span className="text-neon-purple font-semibold">AI/ML Integrations</span>, developer tools, product development, and automation. I have practical experience building and deploying projects using modern frontend, backend, database, and cloud platforms.
                            </p>

                            {/* Quick facts */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Role Focus', value: 'Junior Full-Stack Dev' },
                                    { label: 'Education', value: '2nd Year B.Tech CSE (AI/ML)' },
                                    { label: 'Institution', value: 'Yenepoya (Kalvium)' },
                                    { label: 'Core Stack', value: 'React, Node, TypeScript, SQL' },
                                ].map((fact) => (
                                    <div key={fact.label} className="bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                                        <p className="text-xs text-slate-400 mb-0.5">{fact.label}</p>
                                        <p className="text-sm font-semibold text-white">{fact.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right – Floating Icon Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid grid-cols-4 gap-4"
                    >
                        {floatingIcons.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                whileHover={{ y: -8, scale: 1.1 }}
                                className={`glass rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default border border-transparent hover:border-neon-blue/30 transition-all duration-300`}
                                style={{ animation: `float ${6 + index * 0.5}s ease-in-out ${item.delay} infinite` }}
                            >
                                <item.icon
                                    className={`text-2xl ${item.color === 'neon-blue' ? 'text-neon-blue' :
                                            item.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-cyan'
                                        }`}
                                />
                                <span className="text-xs text-slate-400 text-center leading-tight">{item.label}</span>
                            </motion.div>
                        ))}

                        {/* Extra highlight card: Areas of Interest */}
                        <div className="col-span-4 mt-4">
                            <div className="glass rounded-2xl p-5 border border-neon-purple/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                                    <span className="text-xs text-slate-400 font-mono">areas_of_interest[]</span>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {['Full-Stack Development', 'AI & ML Systems', 'Developer Tools', 'Product Engineering', 'Workflow Automation', 'Open Source'].map((interest) => (
                                        <span key={interest} className="px-3 py-1 text-xs font-medium text-neon-blue bg-neon-blue/10 rounded-lg border border-neon-blue/20">
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
