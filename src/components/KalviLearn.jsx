import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript, SiReact, SiNodedotjs, SiExpress,
    SiGit, SiGithub, SiLinux, SiPostgresql
} from 'react-icons/si';
import { FaGraduationCap, FaCodeBranch, FaCheckCircle, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap } from 'react-icons/hi';

const learningProgression = [
    {
        step: '01',
        stage: 'Learning Concepts',
        title: 'Foundations & Algorithm Design',
        description: 'Deep problem-solving in DSA, Linux terminal workflows, Git essentials, and modern JavaScript (ES6+).',
        skills: ['DSA', 'Linux CLI', 'Git', 'JavaScript ES6+'],
        color: '#f97316',
    },
    {
        step: '02',
        stage: 'Building Features',
        title: 'Interactive Frontend & State',
        description: 'Constructing robust UI components, custom hooks, and dynamic data-binding using React, Next.js, and Tailwind CSS.',
        skills: ['React.js', 'Next.js', 'Custom Hooks', 'Tailwind CSS'],
        color: '#facc15',
    },
    {
        step: '03',
        stage: 'Architecting Systems',
        title: 'Backend APIs & Databases',
        description: 'Designing RESTful APIs with Node.js/Express, writing queries in PostgreSQL & Supabase, and securing auth flows.',
        skills: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'Supabase'],
        color: '#22c55e',
    },
    {
        step: '04',
        stage: 'Collaborating in Teams',
        title: 'Team Workspaces & Sprints',
        description: 'Executing agile team sprints, peer code reviews, feature branching, and building tools like TeamSync & CivicBridge.',
        skills: ['Team Sprints', 'PR Reviews', 'TeamSync', 'CivicBridge'],
        color: '#61dafb',
    },
    {
        step: '05',
        stage: 'Deploying Applications',
        title: 'Production Delivery & CI/CD',
        description: 'Shipping live full-stack applications with state persistence on Vercel, Supabase, and Render.',
        skills: ['Vercel', 'Live Deployments', 'Production CI/CD', 'Real Users'],
        color: '#b400ff',
    },
];

export default function KalviLearn() {
    return (
        <section id="journey" className="py-28 relative overflow-hidden grid-bg">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
            <div className="absolute -left-40 top-1/3 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none" />
            <div className="absolute -right-40 bottom-1/3 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
                        <span className="text-neon-cyan text-sm font-mono tracking-widest uppercase">
                            Academic &amp; Development Journey
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
                    </div>
                    <h2 className="section-title gradient-text">Building While Learning</h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
                        How my coursework in the <span className="text-neon-cyan font-semibold">Kalvium</span> program directly connects to engineering and deploying real-world software products.
                    </p>
                </motion.div>

                {/* Progression Flow Narrative */}
                <div className="grid md:grid-cols-5 gap-4 mb-12">
                    {learningProgression.map((item, index) => (
                        <motion.div
                            key={item.stage}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass rounded-2xl p-5 border border-white/10 hover:border-neon-cyan/40 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span
                                        className="text-xs font-mono font-bold px-2 py-0.5 rounded-md"
                                        style={{
                                            background: `${item.color}15`,
                                            border: `1px solid ${item.color}40`,
                                            color: item.color,
                                        }}
                                    >
                                        Step {item.step}
                                    </span>
                                </div>
                                <p className="text-xs font-mono text-neon-cyan/80 mb-1">{item.stage}</p>
                                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-neon-cyan transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-white/5">
                                <div className="flex flex-wrap gap-1">
                                    {item.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-0.5 text-[10px] rounded bg-white/5 text-slate-300 font-mono"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Highlight Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="glass rounded-2xl p-6 border border-neon-purple/25 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-xl font-bold text-dark flex-shrink-0">
                            <FaGraduationCap />
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-white">From Theory to Working Software</h4>
                            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                                Every academic milestone at Kalvium translates directly into actual software projects like <span className="text-neon-cyan font-semibold">KalviLearn</span>, <span className="text-emerald-400 font-semibold">TeamSync</span>, and deployed full-stack applications.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <a
                            href="https://kalvilearn.vercel.app/dashboard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-mono text-neon-cyan px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-all font-semibold"
                        >
                            Open KalviLearn App ↗
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
