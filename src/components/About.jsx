import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaGithub, FaTerminal, FaRocket, FaLaptopCode } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';
import { HiLightningBolt } from 'react-icons/hi';
import { LuSparkles, LuGraduationCap } from 'react-icons/lu';
import TiltCard from './TiltCard';

const floatingIcons = [
    { icon: FaCode, color: 'neon-blue', label: 'Code', delay: '0s' },
    { icon: FaBrain, color: 'neon-purple', label: 'AI & ML', delay: '1s' },
    { icon: FaGithub, color: 'neon-cyan', label: 'Open Source', delay: '2s' },
    { icon: FaTerminal, color: 'neon-blue', label: 'Linux CLI', delay: '0.5s' },
    { icon: FaRocket, color: 'neon-purple', label: 'Deployments', delay: '1.5s' },
    { icon: SiOpenai, color: 'neon-cyan', label: 'AI APIs', delay: '2.5s' },
    { icon: HiLightningBolt, color: 'neon-blue', label: 'Automation', delay: '0.8s' },
    { icon: FaLaptopCode, color: 'neon-purple', label: 'Full-Stack', delay: '1.8s' },
];

export default function About() {
    return (
        <section id="about" className="py-28 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">About Me</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
                    </div>
                    <h2 className="section-title gradient-text mb-3">Who I Am</h2>
                    <p className="text-slate-400 text-sm max-w-lg mx-auto">
                        A student developer driven by hands-on engineering, practical products, and AI integration.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left – Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <TiltCard
                            maxTilt={3}
                            lift={6}
                            scale={1.01}
                            glowColor="rgba(0, 212, 255, 0.15)"
                            className="glass rounded-3xl p-7 sm:p-9 border border-neon-blue/20 shadow-2xl relative"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan" />

                            {/* Profile picture & Name banner */}
                            <div className="flex items-center gap-5 mb-7">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan flex items-center justify-center text-3xl font-black text-dark shadow-neon-blue flex-shrink-0">
                                    K
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">Karmjit SG</h3>
                                    <p className="text-neon-cyan text-xs sm:text-sm font-mono mt-0.5 flex items-center gap-1.5">
                                        <LuGraduationCap className="text-sm" /> 2nd-Year B.Tech CSE (AI &amp; ML)
                                    </p>
                                    <p className="text-slate-400 text-xs mt-0.5">Yenepoya University (Kalvium Program)</p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-5">
                                I am a <span className="neon-text-blue font-semibold">2nd-year B.Tech Computer Science and Engineering (AI &amp; ML)</span> student at Yenepoya University (Kalvium Program). I enjoy building real, production-ready web applications and practical tools rather than only experimenting with tutorials.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-7">
                                My core focus spans <span className="neon-text-cyan font-semibold">Full-Stack Web Development</span>, <span className="text-neon-purple font-semibold">AI/ML Integrations</span>, developer tools, product development, and automation. I have practical experience building and deploying projects using modern frontend, backend, database, and cloud platforms.
                            </p>

                            {/* Quick facts grid */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    { label: 'Role Focus', value: 'Full-Stack Developer' },
                                    { label: 'Education', value: '2nd Year B.Tech (AI/ML)' },
                                    { label: 'Institution', value: 'Yenepoya (Kalvium)' },
                                    { label: 'Core Stack', value: 'React, Node, TS, SQL' },
                                ].map((fact) => (
                                    <div
                                        key={fact.label}
                                        className="bg-white/5 rounded-xl px-4 py-3 border border-white/5 hover:border-neon-blue/30 transition-colors"
                                    >
                                        <p className="text-[11px] text-slate-400 font-mono mb-0.5">{fact.label}</p>
                                        <p className="text-xs sm:text-sm font-semibold text-white">{fact.value}</p>
                                    </div>
                                ))}
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Right – Interactive Floating Icon Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-4 gap-3 sm:gap-4"
                    >
                        {floatingIcons.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -6, scale: 1.08 }}
                                className="glass rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-2.5 cursor-default border border-white/10 hover:border-neon-cyan/40 hover:shadow-neon-blue/20 transition-all duration-300"
                                style={{ animation: `float ${6 + index * 0.5}s ease-in-out ${item.delay} infinite` }}
                            >
                                <item.icon
                                    className={`text-2xl ${
                                        item.color === 'neon-blue'
                                            ? 'text-neon-blue'
                                            : item.color === 'neon-purple'
                                            ? 'text-neon-purple'
                                            : 'text-neon-cyan'
                                    }`}
                                />
                                <span className="text-[11px] text-slate-400 text-center leading-tight font-medium">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}

                        {/* Extra highlight card: Areas of Interest */}
                        <div className="col-span-4 mt-2">
                            <div className="glass rounded-2xl p-5 border border-neon-purple/25">
                                <div className="flex items-center gap-2 mb-3">
                                    <LuSparkles className="text-neon-cyan text-sm" />
                                    <span className="text-xs text-slate-400 font-mono">areas_of_interest[]</span>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {[
                                        'Full-Stack Development',
                                        'AI & ML Systems',
                                        'Developer Tools',
                                        'Product Engineering',
                                        'Workflow Automation',
                                        'Open Source',
                                    ].map((interest) => (
                                        <span
                                            key={interest}
                                            className="px-3 py-1 text-xs font-mono font-medium text-neon-blue bg-neon-blue/10 rounded-lg border border-neon-blue/25"
                                        >
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
