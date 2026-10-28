import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaBookOpen,
    FaUserTie,
    FaBolt,
} from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { LuSearch } from 'react-icons/lu';
import { projects, FILTER_CATEGORIES } from '../data/projectsData';
import CaseStudyModal from './CaseStudyModal';

/* ─────────────────────────────────────────────────────────────
   COMPACT TECH BADGE
───────────────────────────────────────────────────────────── */
function TechBadge({ tech }) {
    const Icon = tech.icon;
    return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium text-slate-300 bg-white/[0.04] border border-white/10 hover:border-neon-cyan/40 hover:bg-white/[0.08] transition-colors">
            {Icon && (
                <Icon
                    style={{ color: tech.color || '#00d4ff' }}
                    className="text-xs flex-shrink-0"
                />
            )}
            <span>{tech.label}</span>
        </span>
    );
}

/* ─────────────────────────────────────────────────────────────
   FULL-WIDTH LANDSCAPE PROJECT CARD
   One project card per row, stacked vertically
───────────────────────────────────────────────────────────── */
function LandscapeProjectCard({ project, onOpenCaseStudy }) {
    const IconComponent = project.icon || FaBolt;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="group relative w-full rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-r from-neon-purple/35 via-neon-blue/30 to-neon-cyan/35 hover:from-neon-purple/70 hover:via-neon-blue/60 hover:to-neon-cyan/70 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-[0_0_35px_rgba(0,212,255,0.18)]"
        >
            <div className="w-full h-full bg-[#070b14]/95 backdrop-blur-xl rounded-[calc(theme(borderRadius.2xl)-1px)] sm:rounded-[calc(theme(borderRadius.3xl)-1px)] p-5 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300">
                {/* ─────────────────────────────────────────────
                    A. TOP METADATA ROW
                ───────────────────────────────────────────── */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 pb-3 border-b border-white/5">
                    <div className="flex flex-wrap items-center gap-2">
                        <span
                            className={`text-[10px] sm:text-[11px] font-mono font-bold tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border ${
                                project.categoryColor ||
                                'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10'
                            }`}
                        >
                            {project.category}
                        </span>
                        <span
                            className={`text-[10px] sm:text-[11px] font-mono font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md border ${
                                project.statusColor ||
                                'text-emerald-400 border-emerald-500/40 bg-emerald-500/10'
                            }`}
                        >
                            ● {project.status}
                        </span>
                    </div>
                    {project.orderNumber && (
                        <span className="text-xs sm:text-sm font-mono font-bold text-slate-400">
                            #{project.orderNumber}
                        </span>
                    )}
                </div>

                {/* ─────────────────────────────────────────────
                    B. PROJECT IDENTITY (Icon, Title, Description)
                ───────────────────────────────────────────── */}
                <div className="mb-4">
                    <div className="flex items-start sm:items-center gap-3.5 mb-2.5">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-neon-cyan/40 transition-all shadow-md">
                            <IconComponent
                                className="text-xl sm:text-2xl"
                                style={{ color: project.iconColor || '#00d4ff' }}
                            />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-neon-cyan transition-colors leading-tight">
                            {project.title}
                        </h3>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed pl-0 sm:pl-[50px]">
                        {project.description}
                    </p>
                </div>

                {/* ─────────────────────────────────────────────
                    C. KEY FEATURES (Up to 3 short chips)
                ───────────────────────────────────────────── */}
                {project.features && project.features.length > 0 && (
                    <div className="mb-4 pl-0 sm:pl-[50px] flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feat, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono text-slate-200 bg-white/[0.04] border border-white/10 shadow-sm"
                            >
                                <BsCheckCircleFill className="text-neon-cyan text-xs flex-shrink-0" />
                                <span>{feat}</span>
                            </span>
                        ))}
                    </div>
                )}

                {/* ─────────────────────────────────────────────
                    D. TECHNOLOGY STACK
                ───────────────────────────────────────────── */}
                {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4 pl-0 sm:pl-[50px] flex flex-wrap items-center gap-2">
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mr-1">
                            TECH STACK:
                        </span>
                        {project.technologies.map((t) => (
                            <TechBadge key={t.label} tech={t} />
                        ))}
                    </div>
                )}

                {/* ─────────────────────────────────────────────
                    E. MY ROLE & CONTRIBUTION
                ───────────────────────────────────────────── */}
                {project.contribution && (
                    <div className="mb-5 pl-0 sm:pl-[50px]">
                        <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-neon-blue/[0.07] via-neon-purple/[0.04] to-transparent border border-neon-blue/20">
                            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neon-blue font-bold flex items-center gap-1.5 mb-1">
                                <FaUserTie className="text-xs text-neon-blue" /> MY ROLE &amp; CONTRIBUTION
                            </div>
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                                {project.contribution}
                            </p>
                        </div>
                    </div>
                )}

                {/* ─────────────────────────────────────────────
                    F. ACTION BUTTONS
                ───────────────────────────────────────────── */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-3 pl-0 sm:pl-[50px]">
                    {project.caseStudy && (
                        <button
                            onClick={() => onOpenCaseStudy(project)}
                            className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-neon-purple via-indigo-600 to-neon-blue text-white font-mono text-xs sm:text-sm font-bold shadow-md shadow-neon-purple/20 hover:brightness-110 hover:shadow-neon-purple/40 transition-all cursor-pointer"
                        >
                            <FaBookOpen className="text-xs text-white" /> Case Study &amp; Architecture ↗
                        </button>
                    )}

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan text-dark font-mono text-xs sm:text-sm font-bold shadow-md shadow-neon-blue/20 hover:brightness-110 hover:shadow-neon-cyan/30 transition-all cursor-pointer"
                        >
                            <FaExternalLinkAlt className="text-xs" /> Live Demo
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-neon-cyan hover:bg-white/10 transition-all text-sm cursor-pointer shadow-sm"
                            aria-label={`GitHub Repository for ${project.title}`}
                            title="View Source Code"
                        >
                            <FaGithub className="text-base" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PROJECTS SECTION
───────────────────────────────────────────────────────────── */
export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeModalProject, setActiveModalProject] = useState(null);

    // Deep-link hash listener: supports direct links like #case-study-ai-video-agent or #ai-video-agent
    useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash.replace('#', '');
            if (!hash) return;
            const targetProj = projects.find(
                (p) => p.id === hash || `case-study-${p.id}` === hash
            );
            if (targetProj) {
                setActiveModalProject(targetProj);
            }
        };
        handleHash();
        window.addEventListener('hashchange', handleHash);
        return () => window.removeEventListener('hashchange', handleHash);
    }, []);

    const handleOpenCaseStudy = (proj) => {
        setActiveModalProject(proj);
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', `#case-study-${proj.id}`);
        }
    };

    const handleCloseCaseStudy = () => {
        setActiveModalProject(null);
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', '#projects');
        }
    };

    // Filter logic
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory =
                selectedCategory === 'All' ||
                project.filterCategory === selectedCategory ||
                project.category.toLowerCase().includes(selectedCategory.toLowerCase());

            const query = searchQuery.trim().toLowerCase();
            const matchesSearch =
                !query ||
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.category.toLowerCase().includes(query) ||
                project.technologies.some((t) => t.label.toLowerCase().includes(query));

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <section id="projects" className="py-24 sm:py-28 relative overflow-hidden scroll-mt-20">
            {/* Background Glow Accents */}
            <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />
            <div className="absolute top-2/3 right-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* ══════════════════════════════════════════
                    SECTION HEADER
                ══════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">
                            Major Systems &amp; Technical Explorations
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
                    </div>
                    <h2 className="section-title gradient-text">Featured Projects</h2>
                    <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Spacious, deep-dive showcases of full-stack applications, browser automation agents, and deployed software solutions.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <span className="text-xs font-mono text-neon-cyan px-3.5 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 shadow-sm">
                            {filteredProjects.length} Displayed · {projects.length} Total Projects
                        </span>
                    </div>
                </motion.div>

                {/* ══════════════════════════════════════════
                    FILTER PILLS & SEARCH BAR
                ══════════════════════════════════════════ */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
                        {FILTER_CATEGORIES.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
                                        isSelected
                                            ? 'bg-neon-cyan text-dark font-bold shadow-lg shadow-neon-cyan/25 scale-105'
                                            : 'glass text-slate-300 hover:text-white hover:border-neon-cyan/40 hover:bg-white/5'
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-72">
                        <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                        <input
                            type="text"
                            placeholder="Search projects or tech..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 rounded-xl glass border border-white/10 text-xs font-mono text-white placeholder-slate-400 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
                        />
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                    VERTICAL FULL-WIDTH LANDSCAPE CARDS STACK
                    One project card per row, stacked vertically
                ══════════════════════════════════════════ */}
                <div className="flex flex-col gap-6 sm:gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <LandscapeProjectCard
                                key={project.id}
                                project={project}
                                onOpenCaseStudy={handleOpenCaseStudy}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 glass rounded-2xl border border-white/10 mt-6">
                        <p className="text-slate-400 font-mono text-sm mb-3">
                            No projects found matching "{searchQuery}" in category "{selectedCategory}".
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSearchQuery('');
                            }}
                            className="px-4 py-2 text-xs font-mono rounded-xl bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-dark transition-all cursor-pointer font-bold"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Deep-Dive Case Study Modal */}
            <CaseStudyModal
                project={activeModalProject}
                isOpen={!!activeModalProject}
                onClose={handleCloseCaseStudy}
            />
        </section>
    );
}
