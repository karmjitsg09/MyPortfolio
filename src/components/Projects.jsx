import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaBolt, FaShoppingBag, FaGamepad } from 'react-icons/fa';
import {
    SiReact, SiTypescript, SiVite, SiJavascript,
    SiHtml5, SiCss, SiPython,SiFastapi,
    SiGooglegemini,
    SiOpencv,
    SiFlask,
    SiTensorflow,
    SiMediapipe,
} from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi';
import { MdOutlineCamera, MdOutlineSportsKabaddi } from 'react-icons/md';
import { BsCalendarCheck, BsCurrencyDollar } from 'react-icons/bs';
import { LuDatabase } from "react-icons/lu";
/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const featuredProjects = [
    {
        id: 'lab',
        icon: '🧪',
        label: 'Web Application',
        labelColor: 'text-neon-purple',
        title: 'Lab Allotment System',
        description:
            'A smart web-based platform built to manage and allocate laboratory schedules for students and faculty. Administrators upload schedules and students instantly view their assigned labs and time slots.',
        features: [
            'Admin dashboard for schedule management',
            'File upload for lab schedule data',
            'Student timetable visibility',
            'Organized lab allocation display',
        ],
        tech: [
            { label: 'HTML5', icon: SiHtml5, color: '#f97316' },
            { label: 'CSS3', icon: SiCss, color: '#38bdf8' },
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
        ],
        border: 'border-neon-purple/40',
        glow: 'rgba(180,0,255,0.22)',
        accent: 'from-neon-purple via-neon-blue to-neon-cyan',
        previewBg: 'from-neon-purple/20 to-neon-blue/10',
        previewRows: [
            { icon: BsCalendarCheck, color: '#b400ff', label: 'Lab Schedule', value: 'Uploaded ✓' },
            { icon: BsCalendarCheck, color: '#00d4ff', label: 'Students', value: '142 assigned' },
            { icon: BsCalendarCheck, color: '#00ffea', label: 'Conflicts', value: '0 detected' },
        ],
        github: 'https://github.com/karmjitsg09/v0-lab-allotment-final',
        live: 'https://v0-laballotmentfinal-three.vercel.app/',
    },
    {
        id: 'asp',
        icon: '🛍️',
        label: 'E-Commerce Platform',
        labelColor: 'text-neon-blue',
        title: 'ASP Fashions – E-Commerce Website',
        description:
            'A fully functional e-commerce platform built to showcase and manage fashion products. Users browse products, view details and place orders; administrators manage listings and order data through a dedicated dashboard.',
        features: [
            'Product listing and browsing',
            'Order management system',
            'Admin dashboard',
            'Interactive product UI',
        ],
        tech: [
            { label: 'HTML5', icon: SiHtml5, color: '#f97316' },
            { label: 'CSS3', icon: SiCss, color: '#38bdf8' },
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'Web Dev', icon: FaShoppingBag, color: '#a78bfa' },
        ],
        border: 'border-neon-blue/40',
        glow: 'rgba(0,212,255,0.22)',
        accent: 'from-neon-blue via-neon-purple to-neon-cyan',
        previewBg: 'from-neon-blue/20 to-neon-purple/10',
        previewRows: [
            { icon: FaShoppingBag, color: '#00d4ff', label: 'Products', value: '48 listed' },
            { icon: BsCurrencyDollar, color: '#00ffea', label: 'Orders', value: '12 pending' },
            { icon: BsCalendarCheck, color: '#a78bfa', label: 'Admin', value: 'Dashboard ✓' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: 'https://v0-database-connection-error-mu.vercel.app/',
    },
    {
        id: 'smart spend',
        icon: '💰',
        label: 'Finance App',
        labelColor: 'text-neon-cyan',
        title: 'SmartSpend – Revenue Tracker',
        description:
            'A practical finance tracking application for managing daily household income and expenses. Focused on real-life usability — track spending patterns and maintain financial discipline with a clean, simple interface.',
        features: [
            'Daily expense & income tracking',
            'Spending pattern overview',
            'Clean and intuitive interface',
            'Real-life financial discipline tool',
        ],
        tech: [
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'App Logic', icon: FaBolt, color: '#a78bfa' },
            { label: 'Finance Data', icon: BsCurrencyDollar, color: '#00ffea' },
        ],
        border: 'border-neon-cyan/40',
        glow: 'rgba(0,255,234,0.22)',
        accent: 'from-neon-cyan via-neon-blue to-neon-purple',
        previewBg: 'from-neon-cyan/20 to-neon-blue/10',
        previewRows: [
            { icon: BsCurrencyDollar, color: '#00ffea', label: 'Income', value: '₹45,200' },
            { icon: BsCurrencyDollar, color: '#f97316', label: 'Expenses', value: '₹28,750' },
            { icon: BsCurrencyDollar, color: '#00d4ff', label: 'Savings', value: '₹16,450' },
        ],
        github: 'https://github.com/karmjitsg09/smartspend-revenue-tracker',
        live: 'https://v0-spend-revenue-tracker.vercel.app/',
    },
    {
        id: 'lab',
        icon: '⚡',
        label: 'Web Application',
        labelColor: 'text-neon-purple',
        title: 'DevMate AI – Developer Assistant',
        description:
            'This project is DevMate AI, a full-stack developer productivity app that uses AI to help with everyday coding tasks. The React frontend offers a dashboard for features like explaining errors, generating documentation, simplifying code, and converting UI designs into code, while the FastAPI backend connects to AI services to power those workflows.',
        features: [
            'Code explanation and simplification',
            'Documentation generation',
            'Code conversion from UI designs',
            'Code simplification and optimization',
            'Settings with API key management',
        ],
        tech: [
            { label: 'React.js', icon: SiReact, color: '#61dafb' },
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'FastAPI', icon: SiFastapi, color: '#009688' },
            { label: 'Google Gemini API', icon: SiGooglegemini, color: '#4796E3' },
        ],
        border: 'border-neon-purple/40',
        glow: 'rgba(180,0,255,0.22)',
        accent: 'from-neon-purple via-neon-blue to-neon-cyan',
        previewBg: 'from-neon-purple/20 to-neon-blue/10',
        previewRows: [
            { icon: BsCalendarCheck, color: '#b400ff', label: 'Code Accessibility', value: 'Easy :)' },
            { icon: BsCalendarCheck, color: '#00d4ff', label: 'Api Integration', value: 'Integrated ✓' },
            { icon: BsCalendarCheck, color: '#00ffea', label: 'Error Detected', value: '0 detected ' },
        ],
        github: '',
        live: '',
    },
    {
        id: 'syanptix',
        icon: '🤖',
        label: 'Web Model',
        labelColor: 'text-neon-purple',
        title: 'Synaptix – Holographic Gesture Interface',
        description:
            'This project is Synaptix, an experimental AI-powered gesture interface for touchless control of digital systems using real-time hand movement detection and canvas rendering.',
        features: [
            'AI-based real-time hand gesture recognition',
            'Touchless interaction using computer vision',
            'Low-latency gesture detection and response',
            'Intuitive control without physical input devices',
            'Futuristic holographic-style user interface',
        ],
        tech: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { label: 'Vite', icon: SiVite, color: '#a78bfa' },
            { label: 'Gemini API', icon: HiSparkles, color: '#00d4ff' },
            { label: 'CV', icon: MdOutlineCamera, color: '#00ffea' },
        ],
        border: 'border-neon-purple/40',
        glow: 'rgba(180,0,255,0.22)',
        accent: 'from-neon-purple via-neon-blue to-neon-cyan',
        previewBg: 'from-neon-purple/20 to-neon-blue/10',
        previewRows: [
            { icon: BsCalendarCheck, color: '#b400ff', label: 'Touchless Computer Control', value: 'Easy :)' },
            { icon: BsCalendarCheck, color: '#00d4ff', label: 'AI Gesture Recognition', value: '' },
            { icon: BsCalendarCheck, color: '#00ffea', label: 'Virtual Drawing & Writing', value: ' ' },
        ],
        github: '',
        live: '',
    },
    {
        id: 'posestrike',
        icon: '🥊',
        label: 'AI Motion Fighter',
        labelColor: 'text-neon-blue',
        title: 'Posestrike - Virtual Game',
        description:
            'PoseStrike is an AI-powered fighting game that transforms real-time body movements into interactive combat using computer vision and pose detection',
        features: [
            'Control the game using your body movements.',
            'Uses a webcam for real-time pose detection.',
            'Perform punches and kicks through natural gestures.',
            'Provides an interactive touchless gaming experience.',
        ],
        tech: [
            { label: 'Python', icon: SiPython, color: '#f97316' },
            { label: 'OpenCV', icon: SiOpencv, color: '#38bdf8' },
            { label: 'MediaPipe', icon: SiMediapipe, color: '#facc15' },
            { label: 'Game Logic', icon: FaGamepad, color: '#a78bfa' },
        ],
        border: 'border-neon-blue/40',
        glow: 'rgba(0,212,255,0.22)',
        accent: 'from-neon-blue via-neon-purple to-neon-cyan',
        previewBg: 'from-neon-blue/20 to-neon-purple/10',
        previewRows: [
            { icon: FaShoppingBag, color: '#00d4ff', label: 'Pose Detection', value: 'Active ✓' },
            { icon: BsCurrencyDollar, color: '#00ffea', label: 'Player', value: 'Tracked Live' },
            { icon: BsCalendarCheck, color: '#a78bfa', label: 'Combat', value: 'AI Powered' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: 'https://v0-database-connection-error-mu.vercel.app/',
    },
    {
        id: 'waste',
        icon: '♻️',
        label: 'AI • Computer Vision',
        labelColor: 'text-neon-green',
        title: 'AI Waste Management System',
        description:
            'An AI-powered smart waste segregation platform that uses Computer Vision and Deep Learning to classify waste into Green Bin and Red Bin categories. The system analyzes uploaded images using a custom-trained MobileNetV2 model and provides intelligent waste disposal recommendations.',
        features: [
            'AI-powered waste image classification',
            'Custom dataset trained using MobileNetV2',
            'Green Bin & Red Bin prediction',
            'Prediction confidence score generation',
            'Future-ready for YOLOv8 live object detection',
        ],
        tech: [
            { label: 'Python', icon: SiPython, color: '#3776AB' },
            { label: 'Flask', icon: SiFlask, color: '#FFFFFF' },
            { label: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
            { label: 'OpenCV', icon: MdOutlineCamera, color: '#00d4ff' },
            { label: 'SQLite', icon: LuDatabase, color: '#00ffea' },
            { label: 'MobileNetV2', icon: HiSparkles, color: '#8B5CF6' },
        ],
        border: 'border-neon-blue/40',
        glow: 'rgba(0,212,255,0.22)',
        accent: 'from-neon-blue via-neon-purple to-neon-cyan',
        previewBg: 'from-neon-blue/20 to-neon-purple/10',
        previewRows: [
            { icon: FaShoppingBag, color: '#00d4ff', label: 'Pose Detection', value: 'Active ✓' },
            { icon: BsCurrencyDollar, color: '#00ffea', label: 'Player', value: 'Tracked Live' },
            { icon: BsCalendarCheck, color: '#a78bfa', label: 'Combat', value: 'AI Powered' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: 'https://v0-database-connection-error-mu.vercel.app/',
    },
];

const otherProjects = [
    
];

/* ─────────────────────────────────────────
    SHARED BITS
───────────────────────────────────────── */
function TechBadge({ tech }) {
    return (
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10">
            <tech.icon style={{ color: tech.color }} className="text-sm flex-shrink-0" />
            {tech.label}
        </span>
    );
}

function Dot({ text }) {
    return (
        <li className="flex items-start gap-2 text-sm text-slate-400">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-blue flex-shrink-0" />
            {text}
        </li>
    );
}

/* ─────────────────────────────────────────
   FEATURED CARD
───────────────────────────────────────── */
function FeaturedCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className={`relative glass rounded-2xl border ${project.border} overflow-hidden`}
            style={{ boxShadow: `0 0 40px ${project.glow}` }}
        >
            {/* Tri-colour accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent}`} />

            <div className="grid md:grid-cols-2">
                {/* Left — content */}
                <div className="p-8 lg:p-10 flex flex-col">
                    <div className={`text-xs font-mono tracking-widest uppercase mb-2 ${project.labelColor}`}>
                        {project.label}
                    </div>
                    <div className="text-4xl mb-3">{project.icon}</div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-tight">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                    <ul className="space-y-2 mb-6">
                        {project.features.map((f) => <Dot key={f} text={f} />)}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-auto">
                        {project.tech.map((t) => <TechBadge key={t.label} tech={t} />)}
                    </div>

                    <div className="flex gap-3 mt-8">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all text-sm font-medium"
                        >
                            <FaGithub /> GitHub
                        </a>
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold text-sm hover:brightness-110 transition-all"
                            style={{ boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
                        >
                            <FaExternalLinkAlt className="text-xs" /> View Project
                        </a>
                    </div>
                </div>

                {/* Right — holographic data panel */}
                <div className={`relative flex items-center justify-center bg-gradient-to-br ${project.previewBg} p-8 min-h-[220px]`}>
                    <div
                        className="absolute inset-0 opacity-15"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0,212,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.4) 1px,transparent 1px)',
                            backgroundSize: '28px 28px',
                        }}
                    />
                    <div className="relative z-10 w-full max-w-xs space-y-3">
                        {project.previewRows.map((row) => (
                            <div key={row.label} className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <row.icon style={{ color: row.color }} className="text-base flex-shrink-0" />
                                    <span className="text-xs font-mono text-slate-400">{row.label}</span>
                                </div>
                                <span className="text-xs font-mono font-bold" style={{ color: row.color }}>{row.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   OTHER PROJECT CARD
───────────────────────────────────────── */
function OtherCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -8 }}
            className={`relative glass rounded-2xl border ${project.border} p-7 flex flex-col h-full transition-all duration-300 cursor-default`}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 30px ${project.glow}`; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        >
            <div className="text-3xl mb-3">{project.icon}</div>
            {project.subtitle && (
                <p className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-1">{project.subtitle}</p>
            )}
            <h3 className="text-lg font-black text-white mb-3">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => <TechBadge key={t.label} tech={t} />)}
            </div>

            <div className="flex gap-3">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all text-sm font-medium"
                >
                    <FaGithub /> GitHub
                </a>
                <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 transition-all text-sm font-medium"
                >
                    <FaExternalLinkAlt className="text-xs" /> View
                </a>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   SECTION
───────────────────────────────────────── */
export default function Projects() {
    return (
        <section id="projects" className="py-28 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-neon-purple/4 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-neon-blue/4 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">My Work</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
                    </div>
                    <h2 className="section-title gradient-text">Projects</h2>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
                        Real-world applications, AI experiments, and interactive system builds.
                    </p>
                </motion.div>

                {/* ── Featured ── */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-mono tracking-widest uppercase text-neon-blue">Featured Projects</span>
                        <div className="flex-1 h-px bg-neon-blue/20" />
                    </div>
                    <div className="flex flex-col gap-6">
                        {featuredProjects.map((p, i) => (
                            <FeaturedCard key={p.id} project={p} index={i} />
                        ))}
                    </div>
                </div>

                {/* ── Other ── */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">Other Projects</span>
                        <div className="flex-1 h-px bg-white/5" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {otherProjects.map((p, i) => (
                            <OtherCard key={p.id} project={p} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
