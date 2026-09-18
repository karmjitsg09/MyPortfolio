import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBolt, FaShoppingBag, FaRobot, FaUsers, FaGraduationCap, FaRecycle } from 'react-icons/fa';
import {
    SiReact, SiTypescript, SiVite, SiJavascript,
    SiHtml5, SiCss, SiPython, SiFastapi,
    SiGooglegemini,
    SiOpencv,
    SiFlask,
    SiTensorflow,
    SiSupabase,
    SiNodedotjs,
    SiExpress,
    SiFirebase,
    SiNextdotjs,
    SiTailwindcss,
} from 'react-icons/si';
import { MdOutlineCamera, MdOutlineScience, MdAccountBalanceWallet, MdLocationCity } from 'react-icons/md';
import { BsCalendarCheck, BsCheckCircleFill, BsShieldCheck } from 'react-icons/bs';
import { LuDatabase, LuCpu, LuLayers, LuSparkles } from 'react-icons/lu';

/* ─────────────────────────────────────────
   PROJECT DATA (All 9 Projects)
───────────────────────────────────────── */
export const projects = [
    {
        id: 'lab-allotment',
        orderNumber: '01',
        icon: MdOutlineScience,
        category: 'FULL-STACK',
        categoryColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        title: 'Lab Allotment System',
        description:
            'Web application for managing lab allocations, batch configurations, and timetable lookup.',
        features: [
            'Lab schedule management',
            'Batch configuration',
            'Timetable lookup',
            'Student-facing interface',
        ],
        technologies: [
            { label: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
        ],
        github: 'https://github.com/karmjitsg09/v0-lab-allotment-final',
        live: 'https://v0-laballotmentfinal-three.vercel.app/',
        border: 'border-neon-purple/30',
        glow: 'rgba(180,0,255,0.25)',
        accent: 'from-neon-purple via-neon-blue to-neon-cyan',
        visual: {
            icon: BsCalendarCheck,
            iconColor: '#b400ff',
            badge: 'Academic Scheduling Engine',
            badgeColor: 'text-neon-purple border-neon-purple/30 bg-neon-purple/10',
            bgGradient: 'from-neon-purple/15 via-black/40 to-neon-blue/10',
            features: [
                { label: 'Schedule Management', value: 'Active ✓', color: '#b400ff' },
                { label: 'Batch Configuration', value: 'Configured ✓', color: '#00d4ff' },
                { label: 'Timetable Lookup', value: 'Real-Time ✓', color: '#00ffea' },
                { label: 'Student Access', value: 'Verified ✓', color: '#38bdf8' },
            ],
        },
    },
    {
        id: 'smart-spend',
        orderNumber: '02',
        icon: MdAccountBalanceWallet,
        category: 'FULL-STACK',
        categoryColor: 'text-neon-blue border-neon-blue/40 bg-neon-blue/10',
        title: 'SmartSpend – Revenue Tracker',
        description:
            'Personal finance tracker for managing income, expenses, categories, and balance overview.',
        features: [
            'Income and expense tracking',
            'Category breakdown',
            'Balance overview',
            'Responsive interface',
        ],
        technologies: [
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'HTML5', icon: SiHtml5, color: '#f97316' },
            { label: 'CSS3', icon: SiCss, color: '#38bdf8' },
            { label: 'Vercel', icon: SiVite, color: '#ffffff' },
        ],
        github: 'https://github.com/karmjitsg09/smartspend-revenue-tracker',
        live: 'https://v0-spend-revenue-tracker.vercel.app/',
        border: 'border-neon-blue/30',
        glow: 'rgba(0,212,255,0.25)',
        accent: 'from-neon-blue via-neon-purple to-neon-cyan',
        visual: {
            icon: MdAccountBalanceWallet,
            iconColor: '#00d4ff',
            badge: 'Personal Finance Hub',
            badgeColor: 'text-neon-blue border-neon-blue/30 bg-neon-blue/10',
            bgGradient: 'from-neon-blue/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Expense Tracking', value: 'Categorized ✓', color: '#00d4ff' },
                { label: 'Category Breakdown', value: 'Organized ✓', color: '#00ffea' },
                { label: 'Balance Overview', value: 'Real-Time ✓', color: '#38bdf8' },
                { label: 'Responsive UI', value: 'Optimized ✓', color: '#a78bfa' },
            ],
        },
    },
    {
        id: 'civic-bridge',
        orderNumber: '03',
        icon: MdLocationCity,
        category: 'HACKATHON / FULL-STACK',
        categoryColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        title: 'CivicBridge',
        description:
            'Civic technology platform for reporting and managing community issues, developed as a collaborative hackathon project.',
        features: [
            'Community issue reporting',
            'Report tracking',
            'Backend API integration',
            'Firestore persistence',
            'Collaborative development',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Vite', icon: SiVite, color: '#a78bfa' },
            { label: 'Node.js', icon: SiNodedotjs, color: '#22c55e' },
            { label: 'Express', icon: SiExpress, color: '#e2e8f0' },
            { label: 'Firestore', icon: SiFirebase, color: '#ffca28' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-purple/30',
        glow: 'rgba(180,0,255,0.25)',
        accent: 'from-neon-purple via-neon-blue to-neon-cyan',
        visual: {
            icon: MdLocationCity,
            iconColor: '#a78bfa',
            badge: 'Community Issue Triage',
            badgeColor: 'text-neon-purple border-neon-purple/30 bg-neon-purple/10',
            bgGradient: 'from-neon-purple/15 via-black/40 to-neon-cyan/10',
            features: [
                { label: 'Issue Reporting', value: 'Enabled ✓', color: '#00d4ff' },
                { label: 'Status Tracking', value: 'Triage Flow ✓', color: '#00ffea' },
                { label: 'Community Reports', value: 'Synced ✓', color: '#ffca28' },
                { label: 'Team Collaboration', value: 'Integrated ✓', color: '#a78bfa' },
            ],
        },
    },
    {
        id: 'anushka-knits',
        orderNumber: '04',
        icon: FaShoppingBag,
        category: 'FULL-STACK / E-COMMERCE',
        categoryColor: 'text-pink-400 border-pink-500/40 bg-pink-500/10',
        title: 'Anushka Knits World',
        description:
            'Boutique knitwear catalog and customer inquiry/cart storefront.',
        features: [
            'Product catalog',
            'Customer inquiry/cart flow',
            'Responsive storefront',
            'Product presentation',
        ],
        technologies: [
            { label: 'HTML5', icon: SiHtml5, color: '#f97316' },
            { label: 'CSS3', icon: SiCss, color: '#38bdf8' },
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'Catalog UI', icon: FaShoppingBag, color: '#f472b6' },
        ],
        github: 'https://github.com/karmjitsg09/ANUSHKAA-KNITS-WORLD',
        live: null,
        border: 'border-pink-500/30',
        glow: 'rgba(244,114,182,0.25)',
        accent: 'from-pink-500 via-neon-purple to-neon-blue',
        visual: {
            icon: FaShoppingBag,
            iconColor: '#f472b6',
            badge: 'Boutique E-Commerce Store',
            badgeColor: 'text-pink-400 border-pink-500/30 bg-pink-500/10',
            bgGradient: 'from-pink-500/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Product Catalog', value: 'Handcrafted ✓', color: '#f472b6' },
                { label: 'Customer Inquiry', value: 'Active Flow ✓', color: '#00ffea' },
                { label: 'Cart Flow', value: 'Interactive ✓', color: '#a78bfa' },
                { label: 'Responsive Storefront', value: 'Optimized ✓', color: '#38bdf8' },
            ],
        },
    },
    {
        id: 'team-sync',
        orderNumber: '05',
        icon: FaUsers,
        category: 'FULL-STACK / PRODUCTIVITY',
        categoryColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        title: 'TeamSync',
        description:
            'Team workspace for managing tasks, projects, collaboration, and role-based administration.',
        features: [
            'Task management',
            'Project organization',
            'Role-based administration',
            'Team workspace',
            'Work tracking',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Node.js', icon: SiNodedotjs, color: '#22c55e' },
            { label: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
            { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: 'https://teamsync-fawn.vercel.app/admin/dashboard',
        border: 'border-emerald-500/30',
        glow: 'rgba(52,211,153,0.25)',
        accent: 'from-emerald-400 via-neon-cyan to-neon-blue',
        visual: {
            icon: FaUsers,
            iconColor: '#34d399',
            badge: 'Workforce Administration Hub',
            badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
            bgGradient: 'from-emerald-500/15 via-black/40 to-neon-blue/10',
            features: [
                { label: 'Task Management', value: 'Lifecycle ✓', color: '#34d399' },
                { label: 'Project Tracking', value: 'Real-Time ✓', color: '#00d4ff' },
                { label: 'Role-Based Access', value: 'Admin Panel ✓', color: '#00ffea' },
                { label: 'Team Collaboration', value: 'Connected ✓', color: '#61dafb' },
            ],
        },
    },
    {
        id: 'kalvi-learn',
        orderNumber: '06',
        icon: FaGraduationCap,
        category: 'WEB APP / LEARNING PLATFORM',
        categoryColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        title: 'KalviLearn',
        description:
            'Learning and development platform built around my Kalvium development journey.',
        features: [
            'Learning modules',
            'Challenge/task tracking',
            'Progress management',
            'Student workspace',
            'Dashboard experience',
        ],
        technologies: [
            { label: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
            { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: 'https://kalvilearn.vercel.app/dashboard',
        border: 'border-neon-cyan/30',
        glow: 'rgba(0,255,234,0.25)',
        accent: 'from-neon-cyan via-neon-blue to-neon-purple',
        visual: {
            icon: FaGraduationCap,
            iconColor: '#00ffea',
            badge: 'Kalvium Engineering Dashboard',
            badgeColor: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
            bgGradient: 'from-neon-cyan/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Learning Modules', value: 'Curriculum ✓', color: '#00ffea' },
                { label: 'Challenge Tracking', value: 'Active Tasks ✓', color: '#00d4ff' },
                { label: 'Progress Tracking', value: 'Milestones ✓', color: '#b400ff' },
                { label: 'Student Workspace', value: 'Live Platform ✓', color: '#38bdf8' },
            ],
        },
    },
    {
        id: 'devmate',
        orderNumber: '07',
        icon: FaBolt,
        category: 'AI / DEVELOPER TOOL',
        categoryColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        title: 'DevMate AI – Developer Assistant',
        description:
            'AI-powered developer productivity assistant for code, documentation, and development workflows.',
        features: [
            'Code explanation and simplification',
            'Documentation generation',
            'UI-to-code conversion',
            'Developer productivity workflows',
            'AI API integration',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'FastAPI', icon: SiFastapi, color: '#009688' },
            { label: 'Gemini API', icon: SiGooglegemini, color: '#4796e3' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-purple/30',
        glow: 'rgba(180,0,255,0.25)',
        accent: 'from-neon-purple via-neon-blue to-neon-cyan',
        visual: {
            icon: FaBolt,
            iconColor: '#a78bfa',
            badge: 'AI Developer Assistant Engine',
            badgeColor: 'text-neon-purple border-neon-purple/30 bg-neon-purple/10',
            bgGradient: 'from-neon-purple/15 via-black/40 to-neon-blue/10',
            features: [
                { label: 'Code Assistance', value: 'Gemini 1.5 ✓', color: '#4796e3' },
                { label: 'API Integration', value: 'FastAPI ✓', color: '#009688' },
                { label: 'Documentation', value: 'Auto-Gen ✓', color: '#a78bfa' },
                { label: 'Developer Productivity', value: 'Optimized ✓', color: '#00ffea' },
            ],
        },
    },
    {
        id: 'synaptix',
        orderNumber: '08',
        icon: MdOutlineCamera,
        category: 'AI / COMPUTER VISION',
        categoryColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        title: 'SynaptiX – Holographic Gesture UI',
        description:
            'Experimental touchless interface using computer vision and hand movement tracking for interactive control.',
        features: [
            'Hand gesture tracking',
            'Real-time interaction',
            'Computer vision integration',
            'Experimental touchless interface',
        ],
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { label: 'Vite', icon: SiVite, color: '#a78bfa' },
            { label: 'Computer Vision', icon: MdOutlineCamera, color: '#00d4ff' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-cyan/30',
        glow: 'rgba(0,255,234,0.25)',
        accent: 'from-neon-cyan via-neon-blue to-neon-purple',
        visual: {
            icon: MdOutlineCamera,
            iconColor: '#00ffea',
            badge: 'Holographic Vision Engine',
            badgeColor: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
            bgGradient: 'from-neon-cyan/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Gesture Recognition', value: 'Hand Landmarker ✓', color: '#00ffea' },
                { label: 'Real-Time Tracking', value: '60 FPS Canvas ✓', color: '#00d4ff' },
                { label: 'Computer Vision', value: 'Touchless UI ✓', color: '#3178c6' },
                { label: 'Interactive UI', value: 'Holographic ✓', color: '#b400ff' },
            ],
        },
    },
    {
        id: 'ai-waste',
        orderNumber: '09',
        icon: FaRecycle,
        category: 'AI / ML',
        categoryColor: 'text-neon-blue border-neon-blue/40 bg-neon-blue/10',
        title: 'AI Waste Management System',
        description:
            'AI-powered waste classification system for distinguishing recyclable and non-recyclable materials.',
        features: [
            'Image classification',
            'Recyclable/non-recyclable detection',
            'Deep learning model',
            'Computer vision processing',
            'Classification interface',
        ],
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
            { label: 'Flask', icon: SiFlask, color: '#ffffff' },
            { label: 'OpenCV', icon: SiOpencv, color: '#00ffea' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
        border: 'border-neon-blue/30',
        glow: 'rgba(0,212,255,0.25)',
        accent: 'from-neon-blue via-neon-purple to-neon-cyan',
        visual: {
            icon: FaRecycle,
            iconColor: '#38bdf8',
            badge: 'Deep Learning Vision Classifier',
            badgeColor: 'text-neon-blue border-neon-blue/30 bg-neon-blue/10',
            bgGradient: 'from-neon-blue/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Image Classification', value: 'CNN Model ✓', color: '#38bdf8' },
                { label: 'Recyclable Detection', value: 'High Confidence ✓', color: '#00ffea' },
                { label: 'Deep Learning', value: 'TensorFlow ✓', color: '#ff6f00' },
                { label: 'Computer Vision', value: 'OpenCV Pipeline ✓', color: '#00d4ff' },
            ],
        },
    },
];

/* ─────────────────────────────────────────
    TECH BADGE
───────────────────────────────────────── */
function TechBadge({ tech }) {
    return (
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <tech.icon style={{ color: tech.color }} className="text-sm flex-shrink-0" />
            {tech.label}
        </span>
    );
}

/* ─────────────────────────────────────────
   REUSABLE LARGE SPLIT PROJECT CARD
───────────────────────────────────────── */
function ProjectShowcaseCard({ project, index }) {
    const isEven = index % 2 === 0;
    const IconComponent = project.icon;
    const VisualIcon = project.visual.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            whileHover={{ y: -4 }}
            className={`relative glass rounded-3xl border ${project.border} overflow-hidden transition-all duration-500`}
            style={{
                boxShadow: `0 10px 40px -10px ${project.glow}`,
            }}
        >
            {/* Top Tri-colour Accent Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accent} z-20`} />

            {/* Split Grid: 50% Content / 50% Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* ── CONTENT PANEL ── */}
                <div
                    className={`p-7 sm:p-9 lg:p-11 flex flex-col justify-between ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                    } order-1`}
                >
                    <div>
                        {/* Header: Category + Order Number */}
                        <div className="flex items-center justify-between gap-3 mb-4">
                            <span
                                className={`text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full border ${project.categoryColor}`}
                            >
                                {project.category}
                            </span>
                            <span className="text-xs font-mono text-slate-500 font-bold">
                                {project.orderNumber} / 09
                            </span>
                        </div>

                        {/* Project Icon + Title */}
                        <div className="flex items-center gap-3.5 mb-3">
                            <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                <IconComponent className="text-2xl text-white" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                                {project.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                            {project.description}
                        </p>

                        {/* Feature Bullets */}
                        <div className="mb-7">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                                <LuLayers className="text-neon-cyan" /> Key Implemented Features:
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {project.features.map((feat) => (
                                    <li
                                        key={feat}
                                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                                    >
                                        <BsCheckCircleFill className="text-neon-cyan text-xs mt-1 flex-shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-white/5">
                            {project.technologies.map((t) => (
                                <TechBadge key={t.label} tech={t} />
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3.5">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all text-sm font-semibold"
                            >
                                <FaGithub className="text-base" /> GitHub
                            </a>

                            {project.live ? (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold text-sm hover:brightness-110 shadow-lg shadow-neon-blue/20 transition-all duration-300"
                                >
                                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* ── RIGHT VISUAL PANEL ── */}
                <div
                    className={`relative flex flex-col justify-center items-center p-8 sm:p-10 lg:p-12 bg-gradient-to-br ${project.visual.bgGradient} ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                    } order-2 min-h-[320px] lg:min-h-[500px] border-t lg:border-t-0 ${
                        isEven ? 'lg:border-l' : 'lg:border-r'
                    } border-white/10 overflow-hidden`}
                >
                    {/* Subtle Holographic Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
                            backgroundSize: '32px 32px',
                        }}
                    />

                    {/* Ambient Glow Orbs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-neon-cyan/10 blur-3xl pointer-events-none" />

                    {/* Central Interactive Feature Showcase */}
                    <div className="relative z-10 w-full max-w-md space-y-4">
                        {/* Top System Pill */}
                        <div className="flex items-center justify-center gap-2">
                            <span
                                className={`text-[11px] font-mono tracking-wider px-3.5 py-1 rounded-full border shadow-sm backdrop-blur-md ${project.visual.badgeColor}`}
                            >
                                <LuSparkles className="inline-block mr-1.5 text-xs" />
                                {project.visual.badge}
                            </span>
                        </div>

                        {/* Central Large Icon Hub */}
                        <div className="flex justify-center my-2">
                            <div className="relative">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl glass-strong border border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-xl">
                                    <VisualIcon
                                        style={{ color: project.visual.iconColor }}
                                        className="text-4xl sm:text-5xl drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]"
                                    />
                                </div>
                                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-md flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                </span>
                            </div>
                        </div>

                        {/* Feature Status Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {project.visual.features.map((item) => (
                                <div
                                    key={item.label}
                                    className="glass-strong rounded-xl p-3.5 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between bg-black/40 backdrop-blur-md"
                                >
                                    <span className="text-xs font-mono text-slate-400 truncate mb-1">
                                        {item.label}
                                    </span>
                                    <span
                                        className="text-xs font-mono font-bold flex items-center gap-1.5"
                                        style={{ color: item.color }}
                                    >
                                        <BsShieldCheck className="text-xs flex-shrink-0" />
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   MAIN PROJECTS SECTION
───────────────────────────────────────── */
export default function Projects() {
    return (
        <section id="projects" className="py-28 relative overflow-hidden">
            {/* Background Glow Accents */}
            <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">My Work</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
                    </div>
                    <h2 className="section-title gradient-text">Featured Projects</h2>
                    <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        A collection of projects I've built — from full-stack web applications to AI experiments.
                    </p>
                    <p className="text-slate-500 mt-1 max-w-2xl mx-auto text-xs sm:text-sm">
                        Each project represents a real problem, a practical solution, and a step forward in my development journey.
                    </p>
                </motion.div>

                {/* Single Vertical Stack of Large Split Cards */}
                <div className="flex flex-col gap-10 sm:gap-14">
                    {projects.map((project, index) => (
                        <ProjectShowcaseCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
