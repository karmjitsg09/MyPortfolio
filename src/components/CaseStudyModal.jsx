import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaTimes,
    FaCode,
    FaCheckCircle,
    FaExclamationTriangle,
    FaLightbulb,
    FaArrowRight,
    FaCogs,
    FaLayerGroup,
} from 'react-icons/fa';
import { SiPostgresql, SiSupabase, SiGooglegemini, SiOpenai } from 'react-icons/si';
import { LuWorkflow, LuSparkles, LuShieldCheck, LuTerminal } from 'react-icons/lu';

export default function CaseStudyModal({ project, isOpen, onClose }) {
    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    const caseStudy = project.caseStudy || null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                {/* Backdrop with blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-opacity"
                    aria-hidden="true"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative z-50 w-full max-w-4xl max-h-[90vh] glass-strong rounded-3xl border border-neon-cyan/30 shadow-2xl shadow-neon-blue/20 overflow-hidden flex flex-col bg-dark/95 my-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="case-study-title"
                >
                    {/* Top Accent Strip */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple flex-shrink-0" />

                    {/* Header */}
                    <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4 flex-shrink-0">
                        <div>
                            <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                                <span className={`text-[11px] font-mono font-bold tracking-wider px-3 py-0.5 rounded-full border ${project.categoryColor || 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10'}`}>
                                    {project.category}
                                </span>
                                <span className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border ${project.statusColor || 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10'}`}>
                                    {project.status || 'Verified Project'}
                                </span>
                            </div>
                            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                                {project.title}
                            </h2>
                            <p className="text-slate-300 text-sm mt-1.5 max-w-2xl leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0"
                            aria-label="Close dialog"
                        >
                            <FaTimes className="text-lg" />
                        </button>
                    </div>

                    {/* Scrollable Modal Content */}
                    <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
                        {/* Quick Metadata Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                            <div>
                                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Architecture / Role</span>
                                <span className="text-xs sm:text-sm font-semibold text-white">
                                    {caseStudy?.role || 'Full-Stack Engineering & System Design'}
                                </span>
                            </div>
                            <div>
                                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Core Technologies</span>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                    {project.technologies?.slice(0, 4).map((tech) => (
                                        <span key={tech.label} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10">
                                            {tech.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Destinations</span>
                                <div className="flex items-center gap-2 mt-1">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-neon-cyan font-mono"
                                        >
                                            <FaGithub /> Repository ↗
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs text-neon-blue hover:text-neon-cyan font-mono font-semibold"
                                        >
                                            <FaExternalLinkAlt /> Live App ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* CASE STUDY SECTION 1: Context & Problem Statement */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <FaExclamationTriangle className="text-amber-400 text-base" /> Context &amp; Problem Statement
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {caseStudy?.problem || project.problemStatement || project.description}
                            </p>
                        </div>

                        {/* CASE STUDY SECTION 2: Workflow or Architecture Visualization */}
                        {caseStudy?.workflow && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <LuWorkflow className="text-neon-cyan text-base" /> {caseStudy.workflowTitle || 'Intended Architecture & Workflow Pipeline'}
                                </h3>
                                {caseStudy.workflowDisclaimer && (
                                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                                        ℹ {caseStudy.workflowDisclaimer}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2">
                                    {caseStudy.workflow.map((step, idx) => (
                                        <div
                                            key={step.title}
                                            className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between relative group hover:border-neon-cyan/40 transition-all"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between gap-1 mb-1.5">
                                                    <span className="text-[10px] font-mono text-neon-cyan font-bold">
                                                        Step {String(idx + 1).padStart(2, '0')}
                                                    </span>
                                                    {step.verified ? (
                                                        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
                                                            Tested ✓
                                                        </span>
                                                    ) : (
                                                        <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/30">
                                                            Pending Pipeline
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className="text-xs font-bold text-white mb-1">{step.title}</h4>
                                                <p className="text-[11px] text-slate-400 leading-snug">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CASE STUDY SECTION 3: Technical Root Cause & Engineering Challenges */}
                        {caseStudy?.challenges && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <FaCogs className="text-neon-blue text-base" /> Technical Challenges &amp; Root Causes
                                </h3>
                                <div className="space-y-2.5">
                                    {caseStudy.challenges.map((c, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm">
                                            <h4 className="font-bold text-white mb-1 text-xs sm:text-sm flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                                                {c.title}
                                            </h4>
                                            <p className="text-slate-300 leading-relaxed">{c.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CASE STUDY SECTION 4: Implementation, Reasoning & Code Snippet */}
                        {caseStudy?.implementation && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <FaCode className="text-neon-purple text-base" /> Implementation &amp; Technical Decisions
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {caseStudy.implementation.reasoning}
                                </p>
                                {caseStudy.implementation.code && (
                                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60">
                                        <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                                            <span>{caseStudy.implementation.codeTitle || 'Technical Snippet'}</span>
                                            <span>{caseStudy.implementation.codeLang || 'sql'}</span>
                                        </div>
                                        <pre className="p-4 text-xs font-mono text-neon-cyan overflow-x-auto leading-relaxed">
                                            <code>{caseStudy.implementation.code}</code>
                                        </pre>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* CASE STUDY SECTION 5: Tests, Evidence & Current Status */}
                        {caseStudy?.statusEvaluation && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <LuShieldCheck className="text-emerald-400 text-base" /> Verification, Evidence &amp; Current Status
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                                        <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                                            <FaCheckCircle /> Verified &amp; Implemented Capabilities
                                        </h4>
                                        <ul className="space-y-1.5 text-xs text-slate-300">
                                            {caseStudy.statusEvaluation.verified.map((v, i) => (
                                                <li key={i} className="flex items-start gap-1.5">
                                                    <span className="text-emerald-400 mt-0.5">•</span>
                                                    <span>{v}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                                        <h4 className="text-xs font-mono uppercase text-amber-400 font-bold mb-2 flex items-center gap-1.5">
                                            <FaExclamationTriangle /> Unverified / Active Challenges
                                        </h4>
                                        <ul className="space-y-1.5 text-xs text-slate-300">
                                            {caseStudy.statusEvaluation.unverified.map((u, i) => (
                                                <li key={i} className="flex items-start gap-1.5">
                                                    <span className="text-amber-400 mt-0.5">•</span>
                                                    <span>{u}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* CASE STUDY SECTION 6: Key Learnings */}
                        {caseStudy?.learnings && (
                            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-transparent border border-white/10">
                                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                    <FaLightbulb className="text-yellow-400 text-base" /> What I Learned as an Engineer
                                </h4>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                    {caseStudy.learnings}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 flex-shrink-0 bg-dark/80">
                        <div className="text-xs font-mono text-slate-400">
                            Project ID: <span className="text-white">{project.id}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-white/30 text-xs font-semibold flex items-center gap-2 transition-all"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold text-xs hover:brightness-110 shadow-md shadow-neon-blue/20 flex items-center gap-2 transition-all"
                                >
                                    <FaExternalLinkAlt /> Open Live Demo
                                </a>
                            )}
                            <button
                                onClick={onClose}
                                className="px-4 py-2 rounded-xl border border-white/20 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
