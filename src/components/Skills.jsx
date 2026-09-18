import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss, SiReact,
    SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress,
    SiPostgresql, SiSupabase, SiFirebase, SiSqlite,
    SiTensorflow, SiGooglegemini, SiFastapi,
    SiGit, SiGithub, SiVercel, SiRender, SiReplit, SiLinux, SiN8N
} from 'react-icons/si';
import { FaServer, FaDatabase, FaBrain, FaTools, FaCode } from 'react-icons/fa';
import { LuNetwork, LuSparkles } from 'react-icons/lu';
import TiltCard from './TiltCard';

const skillGroups = [
    {
        id: 'frontend',
        category: 'Frontend Development',
        color: 'purple',
        icon: FaCode,
        description: 'Component architecture, responsive UI, client state, and modern SSR frameworks.',
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
        id: 'backend',
        category: 'Backend & APIs',
        color: 'blue',
        icon: FaServer,
        description: 'Server runtime environments, RESTful route architectures, and API middleware.',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#22c55e' },
            { name: 'Express.js', icon: SiExpress, color: '#e2e8f0' },
            { name: 'REST APIs', icon: FaServer, color: '#00d4ff' },
            { name: 'Python', icon: SiPython, color: '#38bdf8' },
            { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        ],
    },
    {
        id: 'database',
        category: 'Database & Storage',
        color: 'cyan',
        icon: FaDatabase,
        description: 'Relational data models, document stores, authentication, and cloud databases.',
        skills: [
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
            { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
            { name: 'Firebase / Firestore', icon: SiFirebase, color: '#f5820d' },
            { name: 'SQLite', icon: SiSqlite, color: '#003b57' },
        ],
    },
    {
        id: 'ai',
        category: 'AI / ML & Integrations',
        color: 'pink',
        icon: FaBrain,
        description: 'Deep learning frameworks, computer vision pipelines, and LLM integrations.',
        skills: [
            { name: 'Python', icon: SiPython, color: '#38bdf8' },
            { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
            { name: 'Machine Learning', icon: FaBrain, color: '#f472b6' },
            { name: 'Google Gemini API', icon: SiGooglegemini, color: '#4796e3' },
            { name: 'Google AI Studio', icon: SiGooglegemini, color: '#00d4ff' },
        ],
    },
    {
        id: 'devops',
        category: 'Tools & Deployment',
        color: 'green',
        icon: FaTools,
        description: 'Version control workflows, cloud host deployments, and workflow automation.',
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
    blue: {
        border: 'border-neon-blue/30',
        glow: 'hover:shadow-neon-blue/30',
        tag: 'text-neon-blue',
        bg: 'bg-neon-blue/5',
        title: 'neon-text-blue',
        badge: 'text-neon-blue border-neon-blue/30 bg-neon-blue/10',
    },
    purple: {
        border: 'border-neon-purple/30',
        glow: 'hover:shadow-neon-purple/30',
        tag: 'text-neon-purple',
        bg: 'bg-neon-purple/5',
        title: 'neon-text-purple',
        badge: 'text-neon-purple border-neon-purple/30 bg-neon-purple/10',
    },
    cyan: {
        border: 'border-neon-cyan/30',
        glow: 'hover:shadow-neon-cyan/30',
        tag: 'text-neon-cyan',
        bg: 'bg-neon-cyan/5',
        title: 'neon-text-cyan',
        badge: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
    },
    pink: {
        border: 'border-pink-500/30',
        glow: 'hover:shadow-pink-500/30',
        tag: 'text-pink-400',
        bg: 'bg-pink-500/5',
        title: 'text-pink-400',
        badge: 'text-pink-400 border-pink-500/30 bg-pink-500/10',
    },
    green: {
        border: 'border-emerald-500/30',
        glow: 'hover:shadow-emerald-500/30',
        tag: 'text-emerald-400',
        bg: 'bg-emerald-500/5',
        title: 'text-emerald-400',
        badge: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    },
};

export default function Skills() {
    const [activeGroup, setActiveGroup] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section id="skills" className="py-28 relative overflow-hidden grid-bg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

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
                        <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">
                            Technical Ecosystem
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-purple" />
                    </div>
                    <h2 className="section-title gradient-text">Skills &amp; Technologies</h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
                        Full-stack, database, and machine learning technologies I use for production-grade software and AI applications.
                    </p>
                </motion.div>

                {/* Central Hub View Header / Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                    <button
                        onClick={() => setActiveGroup(null)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                            activeGroup === null
                                ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold shadow-md shadow-neon-blue/20'
                                : 'glass text-slate-400 hover:text-white border border-white/10'
                        }`}
                    >
                        <LuNetwork className="inline-block mr-1.5 text-sm" /> All Stacks
                    </button>
                    {skillGroups.map((g) => {
                        const isSelected = activeGroup === g.id;
                        return (
                            <button
                                key={g.id}
                                onClick={() => setActiveGroup(isSelected ? null : g.id)}
                                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                                    isSelected
                                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold shadow-md shadow-neon-blue/20'
                                        : 'glass text-slate-400 hover:text-white border border-white/10'
                                }`}
                            >
                                <g.icon className="text-xs" />
                                {g.category}
                            </button>
                        );
                    })}
                </div>

                {/* Skill Groups Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups
                        .filter((group) => activeGroup === null || activeGroup === group.id)
                        .map((group, gi) => {
                            const c = colorMap[group.color];
                            const GroupIcon = group.icon;
                            return (
                                <TiltCard
                                    key={group.category}
                                    maxTilt={3.5}
                                    lift={7}
                                    scale={1.015}
                                    glowColor={
                                        group.color === 'purple'
                                            ? 'rgba(180, 0, 255, 0.15)'
                                            : group.color === 'cyan'
                                            ? 'rgba(0, 255, 234, 0.15)'
                                            : group.color === 'pink'
                                            ? 'rgba(244, 63, 94, 0.15)'
                                            : 'rgba(0, 212, 255, 0.15)'
                                    }
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: gi * 0.08 }}
                                    className={`glass rounded-2xl p-6 border ${c.border} transition-all duration-300 ${c.glow} flex flex-col justify-between`}
                                >
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className={`text-base font-bold ${c.title} flex items-center gap-2`}>
                                                <GroupIcon className="text-base flex-shrink-0" />
                                                {group.category}
                                            </h3>
                                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${c.badge}`}>
                                                {group.skills.length} tools
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                            {group.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                                        {group.skills.map((skill) => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ scale: 1.08, y: -2 }}
                                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${c.bg} border ${c.border} cursor-default transition-all duration-200 ${
                                                    hoveredSkill === skill.name
                                                        ? 'border-neon-cyan shadow-sm shadow-neon-cyan/30'
                                                        : ''
                                                }`}
                                            >
                                                <skill.icon style={{ color: skill.color }} className="text-sm flex-shrink-0" />
                                                <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </TiltCard>
                            );
                        })}
                </div>

                {/* Recruiter-friendly Technology Summary Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-10 glass rounded-2xl p-6 sm:p-8 border border-neon-blue/25 flex flex-col lg:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan flex items-center justify-center text-dark font-black text-xl flex-shrink-0 shadow-lg shadow-neon-blue/20">
                            <LuSparkles className="text-xl text-dark" />
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-white">Production Stack Snapshot</h4>
                            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                                Core focus: React / Next.js, Node.js / Express, PostgreSQL / Supabase, and AI API integrations.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                        {['TypeScript', 'React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'Python', 'Gemini AI', 'Vercel'].map((t) => (
                            <span key={t} className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-neon-blue/10 text-neon-cyan border border-neon-blue/30">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
