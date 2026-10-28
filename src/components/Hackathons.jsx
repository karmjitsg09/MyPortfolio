import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaUserTie, FaRobot, FaHeartbeat, FaBalanceScale, FaBuilding } from 'react-icons/fa';
import { SiReplit, SiReact, SiPython, SiJavascript, SiFastapi } from 'react-icons/si';
import { MdOutlineScience, MdLocationOn } from 'react-icons/md';
import { LuSparkles, LuTrophy, LuFilter } from 'react-icons/lu';
import { BsShieldCheck } from 'react-icons/bs';
import TiltCard from './TiltCard';

import { hackathons, FILTER_TAGS } from '../data/hackathonsData';

export default function Hackathons() {
    const [selectedTag, setSelectedTag] = useState('ALL');

    const filteredHackathons = useMemo(() => {
        if (selectedTag === 'ALL') return hackathons;
        return hackathons.filter(
            (h) =>
                h.filterCategory === selectedTag ||
                h.category.toUpperCase().includes(selectedTag)
        );
    }, [selectedTag]);

    return (
        <section id="hackathons" className="py-28 relative overflow-hidden grid-bg">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-purple" />
                        <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">
                            Hackathons &amp; Competitions
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-purple" />
                    </div>
                    <h2 className="section-title gradient-text mb-3">Hackathons &amp; Competitions</h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                        Rapid problem-solving, collaborative engineering, and building under real hackathon constraints.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <span className="text-xs font-mono text-neon-cyan px-3.5 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 shadow-sm">
                            {hackathons.length} Confirmed Hackathons
                        </span>
                    </div>
                </motion.div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {FILTER_TAGS.map((tag) => {
                        const isSelected = selectedTag === tag;
                        return (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                                    isSelected
                                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold shadow-md shadow-neon-blue/20'
                                        : 'glass text-slate-400 hover:text-white border border-white/10'
                                }`}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>

                {/* Hackathon Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <AnimatePresence>
                        {filteredHackathons.map((hackathon, index) => {
                            const IconComponent = hackathon.icon;
                            return (
                                <TiltCard
                                    key={hackathon.id}
                                    maxTilt={3.5}
                                    lift={8}
                                    scale={1.015}
                                    glowColor={hackathon.isFeaturedLead ? 'rgba(52, 211, 153, 0.2)' : 'rgba(0, 212, 255, 0.15)'}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    className={`glass rounded-3xl p-7 sm:p-8 border ${hackathon.border} flex flex-col justify-between shadow-xl ${
                                        hackathon.isFeaturedLead ? 'md:col-span-2 bg-gradient-to-br from-emerald-950/20 via-slate-900/60 to-dark' : ''
                                    }`}
                                >
                                    {/* Top accent bar */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${hackathon.accent}`} />

                                    <div>
                                        {/* Header Row */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                            <span className={`text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-full border ${hackathon.badgeColor}`}>
                                                {hackathon.category}
                                            </span>

                                            {hackathon.role && (
                                                <span className="flex items-center gap-1.5 text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/50 text-emerald-300 shadow-sm">
                                                    <FaUserTie className="text-xs" /> TEAM LEAD
                                                </span>
                                            )}
                                        </div>

                                        {/* Event Info */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                                                <IconComponent style={{ color: hackathon.iconColor }} className="text-2xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-neon-cyan transition-colors leading-snug">
                                                    {hackathon.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm font-mono text-neon-blue mt-0.5 font-medium">
                                                    {hackathon.organizer}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Project Name banner */}
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mb-4">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                                                Project Built:
                                            </span>
                                            <h4 className="text-base font-bold text-white mb-2">
                                                {hackathon.project}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                                {hackathon.description}
                                            </p>

                                            {/* Team Members if present */}
                                            {hackathon.team && (
                                                <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 flex-wrap text-xs">
                                                    <span className="font-mono text-slate-400 flex items-center gap-1">
                                                        <FaUsers className="text-emerald-400" /> Team Members:
                                                    </span>
                                                    {hackathon.team.map((member) => (
                                                        <span key={member} className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-200 font-medium text-[11px]">
                                                            {member}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Footer / Tech Badges + Actions */}
                                    <div>
                                        <div className="flex flex-wrap gap-1.5 mb-5 pt-2">
                                            {hackathon.technologies.map((t) => (
                                                <span key={t.label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10">
                                                    <t.icon style={{ color: t.color }} className="text-xs flex-shrink-0" />
                                                    {t.label}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                                            {hackathon.github && (
                                                <a
                                                    href={hackathon.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 text-xs font-semibold transition-all cursor-pointer"
                                                >
                                                    <FaGithub className="text-sm" /> Code
                                                </a>
                                            )}

                                            {hackathon.live && (
                                                <a
                                                    href={hackathon.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold text-xs hover:brightness-110 shadow-md shadow-neon-blue/20 transition-all cursor-pointer"
                                                >
                                                    <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </TiltCard>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* 2026 Planned & Registered Challenges Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 glass rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan text-lg flex-shrink-0">
                            <LuSparkles />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Upcoming &amp; Target 2026 Challenges</h4>
                            <p className="text-xs text-slate-400 mt-0.5">
                                Actively preparing project architectures and team registrations for <span className="text-neon-cyan font-mono">IBM Z Datathon 2026</span>, <span className="text-neon-blue font-mono">ESoC 2026</span>, and <span className="text-neon-purple font-mono">INCON-SDG 2026</span>.
                            </p>
                        </div>
                    </div>
                    <span className="text-[11px] font-mono text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/30 flex-shrink-0">
                        In Preparation ⏳
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
