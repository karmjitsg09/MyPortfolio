import React from 'react';
import { motion } from 'framer-motion';
import {
    SiPython, SiJavascript, SiCplusplus, SiHtml5, SiCss, SiReact,
    SiGit, SiGithub, SiLinux,
} from 'react-icons/si';
import { FaJava, FaRobot, FaBolt, FaGamepad, FaCode } from 'react-icons/fa';

const skillGroups = [
    {
        category: 'Programming',
        color: 'blue',
        skills: [
            { name: 'Python', icon: SiPython, color: '#3b82f6' },
            { name: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { name: 'Java', icon: FaJava, color: '#f97316' },
            { name: 'C++', icon: SiCplusplus, color: '#818cf8' },
        ],
    },
    {
        category: 'Front-end Web Development',
        color: 'purple',
        skills: [
            { name: 'HTML5', icon: SiHtml5, color: '#f97316' },
            { name: 'CSS3', icon: SiCss, color: '#38bdf8' },
            { name: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { name: 'React', icon: SiReact, color: '#61dafb' },
        ],
    },
    {
        category: 'Tools & Platforms',
        color: 'cyan',
        skills: [
            { name: 'Git', icon: SiGit, color: '#f97316' },
            { name: 'GitHub', icon: SiGithub, color: '#e2e8f0' },
            { name: 'Linux Terminal', icon: SiLinux, color: '#fbbf24' },
        ],
    },
    {
        category: 'Other Expertise',
        color: 'pink',
        skills: [
            { name: 'AI & Prompt Engineering', icon: FaRobot, color: '#00d4ff' },
            { name: 'Automation', icon: FaBolt, color: '#a78bfa' },
            { name: '2D Game Development', icon: FaGamepad, color: '#34d399' },
            { name: 'App & Logic Development', icon: FaCode, color: '#f472b6' },
        ],
    },
];

const colorMap = {
    blue: { border: 'border-neon-blue/30', glow: 'hover:shadow-neon-blue', tag: 'text-neon-blue', bg: 'bg-neon-blue/5', title: 'neon-text-blue' },
    purple: { border: 'border-neon-purple/30', glow: 'hover:shadow-neon-purple', tag: 'text-neon-purple', bg: 'bg-neon-purple/5', title: 'neon-text-purple' },
    cyan: { border: 'border-neon-cyan/30', glow: 'hover:shadow-neon-cyan', tag: 'text-neon-cyan', bg: 'bg-neon-cyan/5', title: 'neon-text-cyan' },
    pink: { border: 'border-pink-500/30', glow: 'hover:shadow-pink-500/30', tag: 'text-pink-400', bg: 'bg-pink-500/5', title: 'text-pink-400' },
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
                        <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">Tech Arsenal</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-purple" />
                    </div>
                    <h2 className="section-title gradient-text">Skills &amp; Tools</h2>
                </motion.div>

                {/* Skill Groups */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillGroups.map((group, gi) => {
                        const c = colorMap[group.color];
                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: gi * 0.1 }}
                                className={`glass rounded-2xl p-6 border ${c.border} hover:scale-[1.02] transition-all duration-300 ${c.glow}`}
                            >
                                <h3 className={`text-lg font-bold mb-5 ${c.title} flex items-center gap-2`}>
                                    <span className={`w-2 h-2 rounded-full ${c.bg} border ${c.border} inline-block`} />
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.skills.map((skill, si) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.07 }}
                                            whileHover={{ scale: 1.1, y: -4 }}
                                            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl ${c.bg} border ${c.border} cursor-default transition-all duration-200 hover:${c.border.replace('/30', '/60')}`}
                                        >
                                            <skill.icon style={{ color: skill.color }} className="text-lg flex-shrink-0" />
                                            <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Proficiency bars */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-12 glass rounded-2xl p-8 border border-neon-blue/10"
                >
                    <h3 className="text-lg font-bold neon-text-blue mb-6">Proficiency Levels</h3>
                    <div className="space-y-5">
                        {[
                            { name: 'Python', level: 75, color: '#3b82f6' },
                            { name: 'JavaScript', level: 65, color: '#facc15' },
                            { name: 'HTML & CSS', level: 80, color: '#f97316' },
                            { name: 'AI Tools & Prompt Engineering', level: 85, color: '#00d4ff' },
                            { name: 'Git & GitHub', level: 70, color: '#e2e8f0' },
                            { name: 'React', level: 65, color: '#61dafb' },
                            { name: 'Java / C++', level: 85, color: '#818cf8' },
                        ].map((item, i) => (
                            <div key={item.name}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-300 font-medium">{item.name}</span>
                                    <span className="text-slate-500 font-mono">{item.level}%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                                        className="h-full rounded-full"
                                        style={{ background: `linear-gradient(90deg, ${item.color}99, ${item.color})` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
