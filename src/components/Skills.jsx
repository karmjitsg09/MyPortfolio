import React from 'react';
import { motion } from 'framer-motion';
import {
    SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss, SiReact,
    SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress,
    SiPostgresql, SiSupabase, SiFirebase, SiSqlite,
    SiTensorflow, SiGooglegemini, SiFastapi,
    SiGit, SiGithub, SiVercel, SiRender, SiReplit, SiLinux, SiN8N
} from 'react-icons/si';
import { FaServer, FaDatabase, FaBrain, FaTools, FaCode } from 'react-icons/fa';

const skillGroups = [
    {
        category: 'Frontend Development',
        color: 'purple',
        icon: FaCode,
        skills: [
            { name: 'HTML5', icon: SiHtml5, color: '#f97316' },
            { name: 'CSS3', icon: SiCss, color: '#38bdf8' },
            { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#facc15' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { name: 'React.js', icon: SiReact, color: '#61dafb' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
        ],
    },
    {
        category: 'Backend & APIs',
        color: 'blue',
        icon: FaServer,
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#22c55e' },
            { name: 'Express.js', icon: SiExpress, color: '#e2e8f0' },
            { name: 'REST APIs', icon: FaServer, color: '#00d4ff' },
            { name: 'Python', icon: SiPython, color: '#38bdf8' },
            { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        ],
    },
    {
        category: 'Database & Storage',
        color: 'cyan',
        icon: FaDatabase,
        skills: [
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
            { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
            { name: 'Firebase / Firestore', icon: SiFirebase, color: '#f5820d' },
            { name: 'SQLite', icon: SiSqlite, color: '#003b57' },
        ],
    },
    {
        category: 'AI / ML & Integrations',
        color: 'pink',
        icon: FaBrain,
        skills: [
            { name: 'Python', icon: SiPython, color: '#38bdf8' },
            { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
            { name: 'Machine Learning', icon: FaBrain, color: '#f472b6' },
            { name: 'Google Gemini API', icon: SiGooglegemini, color: '#4796e3' },
            { name: 'Google AI Studio', icon: SiGooglegemini, color: '#00d4ff' },
        ],
    },
    {
        category: 'Tools & Deployment',
        color: 'green',
        icon: FaTools,
        skills: [
            { name: 'Git', icon: SiGit, color: '#f97316' },
            { name: 'GitHub', icon: SiGithub, color: '#e2e8f0' },
            { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
            { name: 'Render', icon: SiRender, color: '#46e3b7' },
            { name: 'Replit', icon: SiReplit, color: '#f26207' },
            { name: 'n8n Automation', icon: SiN8N, color: '#ff6d5a' },
            { name: 'Linux Terminal', icon: SiLinux, color: '#fbbf24' },
        ],
    },
];

const colorMap = {
    blue: { border: 'border-neon-blue/30', glow: 'hover:shadow-neon-blue', tag: 'text-neon-blue', bg: 'bg-neon-blue/5', title: 'neon-text-blue' },
    purple: { border: 'border-neon-purple/30', glow: 'hover:shadow-neon-purple', tag: 'text-neon-purple', bg: 'bg-neon-purple/5', title: 'neon-text-purple' },
    cyan: { border: 'border-neon-cyan/30', glow: 'hover:shadow-neon-cyan', tag: 'text-neon-cyan', bg: 'bg-neon-cyan/5', title: 'neon-text-cyan' },
    pink: { border: 'border-pink-500/30', glow: 'hover:shadow-pink-500/30', tag: 'text-pink-400', bg: 'bg-pink-500/5', title: 'text-pink-400' },
    green: { border: 'border-emerald-500/30', glow: 'hover:shadow-emerald-500/30', tag: 'text-emerald-400', bg: 'bg-emerald-500/5', title: 'text-emerald-400' },
};

export default function Skills() {
    return (
        <section id="skills" className="py-28 relative overflow-hidden grid-bg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/3 to-transparent pointer-events-none" />

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
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-purple" />
                        <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">Technical Stack</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-purple" />
                    </div>
                    <h2 className="section-title gradient-text">Skills &amp; Technologies</h2>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto mt-3">
                        Technologies I use for building full-stack web applications, database systems, and AI-enabled software.
                    </p>
                </motion.div>

                {/* Skill Groups */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, gi) => {
                        const c = colorMap[group.color];
                        const GroupIcon = group.icon;
                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: gi * 0.1 }}
                                className={`glass rounded-2xl p-6 border ${c.border} hover:scale-[1.02] transition-all duration-300 ${c.glow} flex flex-col`}
                            >
                                <h3 className={`text-base font-bold mb-4 ${c.title} flex items-center gap-2`}>
                                    <GroupIcon className="text-base" />
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2.5 mt-auto">
                                    {group.skills.map((skill, si) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.04 }}
                                            whileHover={{ scale: 1.06, y: -2 }}
                                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${c.bg} border ${c.border} cursor-default transition-all duration-200`}
                                        >
                                            <skill.icon style={{ color: skill.color }} className="text-base flex-shrink-0" />
                                            <span className="text-xs font-medium text-slate-300">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Recruiter-friendly Technology Summary Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-10 glass rounded-2xl p-6 border border-neon-blue/20 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-dark font-black text-xl flex-shrink-0">
                            ⚡
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-white">Production Stack Snapshot</h4>
                            <p className="text-xs text-slate-400 mt-0.5">
                                Primary focus: React / Next.js, Node.js / Express, PostgreSQL / Supabase, and AI API integrations.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end">
                        {['TypeScript', 'React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'Python', 'Gemini AI', 'Vercel'].map((t) => (
                            <span key={t} className="px-3 py-1 text-xs font-mono font-semibold rounded-md bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
