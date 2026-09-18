import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaBolt,
    FaShoppingBag,
    FaUsers,
    FaGraduationCap,
    FaRecycle,
    FaChartBar,
} from 'react-icons/fa';
import {
    SiReact,
    SiTypescript,
    SiVite,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiPython,
    SiFastapi,
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
    SiPandas,
    SiNumpy,
    SiJupyter,
    SiScikitlearn,
    SiThreedotjs,
} from 'react-icons/si';
import {
    MdOutlineCamera,
    MdOutlineScience,
    MdAccountBalanceWallet,
    MdLocationCity,
    MdOutlineAnalytics,
    MdOutlineSportsEsports,
} from 'react-icons/md';
import { BsCalendarCheck, BsCheckCircleFill, BsShieldCheck } from 'react-icons/bs';
import {
    LuLayers,
    LuSparkles,
    LuBrain,
    LuEye,
    LuActivity,
    LuTrendingUp,
    LuSearch,
    LuFilter,
} from 'react-icons/lu';
import TiltCard from './TiltCard';

/* ─────────────────────────────────────────
   1. FEATURED PROJECTS (9 Primary Apps)
───────────────────────────────────────── */
export const featuredProjects = [
    {
        id: 'lab-allotment',
        orderNumber: '01',
        icon: MdOutlineScience,
        category: 'FULL-STACK',
        categoryColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        title: 'Lab Allotment System',
        description:
            'Web application for managing lab allocations, batch configurations and timetable lookup.',
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
            bgGradient: 'from-neon-purple/15 via-black/40 to-neon-blue/10',
            features: [
                { label: 'Schedule Management', value: 'Active ✓', color: '#b400ff' },
                { label: 'Batch Configuration', value: 'Configured ✓', color: '#00d4ff' },
                { label: 'Timetable Lookup', value: 'Live ✓', color: '#00ffea' },
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
            'Personal finance tracker for managing income, expenses, categories and balance overview.',
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
            bgGradient: 'from-neon-blue/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Expense Tracking', value: 'Active ✓', color: '#00d4ff' },
                { label: 'Category Breakdown', value: 'Tracked ✓', color: '#00ffea' },
                { label: 'Balance Overview', value: 'Available ✓', color: '#38bdf8' },
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
            bgGradient: 'from-neon-purple/15 via-black/40 to-neon-cyan/10',
            features: [
                { label: 'Issue Reporting', value: 'Active ✓', color: '#00d4ff' },
                { label: 'Status Tracking', value: 'Tracked ✓', color: '#00ffea' },
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
            bgGradient: 'from-pink-500/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Product Catalog', value: 'Active ✓', color: '#f472b6' },
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
            'Team workspace for managing tasks, projects, collaboration and role-based administration.',
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
            bgGradient: 'from-emerald-500/15 via-black/40 to-neon-blue/10',
            features: [
                { label: 'Task Management', value: 'Active ✓', color: '#34d399' },
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
            bgGradient: 'from-neon-cyan/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Learning Modules', value: 'Active ✓', color: '#00ffea' },
                { label: 'Challenge Tracking', value: 'Tracked ✓', color: '#00d4ff' },
                { label: 'Progress Tracking', value: 'Milestones ✓', color: '#b400ff' },
                { label: 'Student Workspace', value: 'Available ✓', color: '#38bdf8' },
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
            'AI-powered developer productivity assistant for code, documentation and development workflows.',
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
            bgGradient: 'from-neon-purple/15 via-black/40 to-neon-blue/10',
            features: [
                { label: 'Code Assistance', value: 'Gemini 1.5 ✓', color: '#4796e3' },
                { label: 'API Integration', value: 'FastAPI ✓', color: '#009688' },
                { label: 'Documentation', value: 'Auto-Gen ✓', color: '#a78bfa' },
                { label: 'Developer Productivity', value: 'Active ✓', color: '#00ffea' },
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
            'Touchless interface',
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
            bgGradient: 'from-neon-cyan/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Gesture Recognition', value: 'Active ✓', color: '#00ffea' },
                { label: 'Real-Time Tracking', value: '60 FPS ✓', color: '#00d4ff' },
                { label: 'Computer Vision', value: 'Touchless UI ✓', color: '#3178c6' },
                { label: 'Interactive UI', value: 'Active ✓', color: '#b400ff' },
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
            bgGradient: 'from-neon-blue/15 via-black/40 to-neon-purple/10',
            features: [
                { label: 'Image Classification', value: 'Active ✓', color: '#38bdf8' },
                { label: 'Recyclable Detection', value: 'Verified ✓', color: '#00ffea' },
                { label: 'Deep Learning', value: 'TensorFlow ✓', color: '#ff6f00' },
                { label: 'Computer Vision', value: 'OpenCV ✓', color: '#00d4ff' },
            ],
        },
    },
];

/* Canonical projects alias */
export const projects = featuredProjects;

/* ─────────────────────────────────────────
   2. ADDITIONAL PROJECTS & EXPERIMENTS
───────────────────────────────────────── */
export const additionalProjects = [
    {
        id: 'posestrike',
        title: 'PoseStrike / Fighting Game Experiments',
        category: 'AI / Computer Vision / Game',
        filterCategory: 'Games & Interactive',
        description:
            'Motion-controlled 2D fighting game experiment using camera-based body tracking and interactive frontend animation.',
        icon: MdOutlineSportsEsports,
        iconColor: '#00d4ff',
        badgeColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'OpenCV', icon: SiOpencv, color: '#00ffea' },
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'HTML5 Canvas', icon: SiHtml5, color: '#f97316' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'hand-tracker',
        title: 'Motion-Controlled Hand Tracker',
        category: 'Computer Vision',
        filterCategory: 'Computer Vision',
        description:
            'Webcam-based computer vision system for detecting, landmarking, and tracking hand movement in real-time.',
        icon: MdOutlineCamera,
        iconColor: '#00ffea',
        badgeColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'OpenCV', icon: SiOpencv, color: '#00ffea' },
            { label: 'MediaPipe', icon: LuEye, color: '#38bdf8' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'gesture-drawing',
        title: 'Gesture-Based Drawing System',
        category: 'Computer Vision / Interactive UI',
        filterCategory: 'Computer Vision',
        description:
            'Interactive virtual drawing experiment controlled through real-time hand gestures and camera feed.',
        icon: LuSparkles,
        iconColor: '#b400ff',
        badgeColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'OpenCV', icon: SiOpencv, color: '#00ffea' },
            { label: 'NumPy', icon: SiNumpy, color: '#4d77cf' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'object-detection',
        title: 'AI Object Detection System',
        category: 'AI / Computer Vision',
        filterCategory: 'Computer Vision',
        description:
            'Computer vision pipeline for detecting and classifying objects from visual input streams.',
        icon: LuEye,
        iconColor: '#00d4ff',
        badgeColor: 'text-neon-blue border-neon-blue/40 bg-neon-blue/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'OpenCV', icon: SiOpencv, color: '#00ffea' },
            { label: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'emergex-healthcare',
        title: 'EmergeX Healthcare / Triage Project',
        category: 'AI / Healthcare',
        filterCategory: 'AI / ML',
        description:
            'Healthcare-focused AI project exploring technology-assisted triage and emergency assessment.',
        icon: LuActivity,
        iconColor: '#34d399',
        badgeColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'FastAPI', icon: SiFastapi, color: '#009688' },
            { label: 'Gemini API', icon: SiGooglegemini, color: '#4796e3' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'early-warning-system',
        title: 'AI-Based Early Warning System for At-Risk Students',
        category: 'AI / Machine Learning / Research',
        filterCategory: 'Research',
        description:
            'Machine learning research project exploring early identification of students who may need additional academic support based on academic and attendance indicators.',
        icon: LuBrain,
        iconColor: '#a78bfa',
        badgeColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Scikit-Learn', icon: SiScikitlearn, color: '#f89939' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'NumPy', icon: SiNumpy, color: '#4d77cf' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'ai-automation',
        title: 'AI Automation Experiments',
        category: 'AI / Automation',
        filterCategory: 'AI / ML',
        description:
            'Experimental AI and automation workflows exploring practical developer and productivity use cases.',
        icon: FaBolt,
        iconColor: '#facc15',
        badgeColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Node.js', icon: SiNodedotjs, color: '#22c55e' },
            { label: 'Gemini API', icon: SiGooglegemini, color: '#4796e3' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'interactive-portfolio',
        title: 'Interactive 3D Developer Portfolio',
        category: 'Web / 3D Experience',
        filterCategory: 'Full-Stack',
        description:
            'My interactive developer portfolio exploring 3D visuals, animation, and modern frontend development.',
        icon: LuSparkles,
        iconColor: '#00d4ff',
        badgeColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        technologies: [
            { label: 'React', icon: SiReact, color: '#61dafb' },
            { label: 'Three.js', icon: SiThreedotjs, color: '#ffffff' },
            { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
            { label: 'Framer Motion', icon: SiVite, color: '#a78bfa' },
        ],
        github: 'https://github.com/karmjitsg09/MyPortfolio',
        live: 'https://karmjit.me/',
    },
    {
        id: 'asp-fashions',
        title: 'ASP Fashions — Earlier E-Commerce Version',
        category: 'Full-Stack / E-Commerce',
        filterCategory: 'Full-Stack',
        description:
            'Earlier boutique e-commerce prototype that evolved into the Anushka Knits World catalog storefront.',
        icon: FaShoppingBag,
        iconColor: '#f472b6',
        badgeColor: 'text-pink-400 border-pink-500/40 bg-pink-500/10',
        technologies: [
            { label: 'HTML5', icon: SiHtml5, color: '#f97316' },
            { label: 'CSS3', icon: SiCss, color: '#38bdf8' },
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
        ],
        github: 'https://github.com/karmjitsg09/ANUSHKAA-KNITS-WORLD',
        live: null,
    },
    {
        id: 'job-analytics',
        title: 'Job Market Analytics',
        category: 'Data & Analytics',
        filterCategory: 'Data & Analytics',
        description:
            'Data analysis project exploring job market datasets, skill demand patterns, and compensation trends.',
        icon: MdOutlineAnalytics,
        iconColor: '#38bdf8',
        badgeColor: 'text-neon-blue border-neon-blue/40 bg-neon-blue/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'NumPy', icon: SiNumpy, color: '#4d77cf' },
            { label: 'Jupyter', icon: SiJupyter, color: '#f37626' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'snapdeal-analytics',
        title: 'Snapdeal E-Commerce Analytics',
        category: 'Data & Analytics',
        filterCategory: 'Data & Analytics',
        description:
            'Exploratory data analysis investigating e-commerce product catalog pricing, ratings, and category distributions.',
        icon: LuTrendingUp,
        iconColor: '#00ffea',
        badgeColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'Jupyter', icon: SiJupyter, color: '#f37626' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'playstore-analytics',
        title: 'Google Play Store Analytics',
        category: 'Data & Analytics',
        filterCategory: 'Data & Analytics',
        description:
            'Data analysis examining mobile application listings, category market share, review sentiments, and rating distributions.',
        icon: FaChartBar,
        iconColor: '#34d399',
        badgeColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'NumPy', icon: SiNumpy, color: '#4d77cf' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
    {
        id: 'crypto-analytics',
        title: 'Crypto Market Analytics',
        category: 'Data & Analytics',
        filterCategory: 'Data & Analytics',
        description:
            'Time-series data analysis and visualization exploring historical cryptocurrency market volatility and price volume patterns.',
        icon: LuActivity,
        iconColor: '#facc15',
        badgeColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Pandas', icon: SiPandas, color: '#150458' },
            { label: 'Jupyter', icon: SiJupyter, color: '#f37626' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
    },
];

export const allProjects = [...featuredProjects, ...additionalProjects];

/* ─────────────────────────────────────────
    TECH BADGE
───────────────────────────────────────── */
function TechBadge({ tech, compact = false }) {
    return (
        <span
            className={`flex items-center gap-1.5 rounded-xl font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-white/20 transition-colors ${
                compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
            }`}
        >
            <tech.icon style={{ color: tech.color }} className={compact ? 'text-xs flex-shrink-0' : 'text-sm flex-shrink-0'} />
            {tech.label}
        </span>
    );
}

/* ─────────────────────────────────────────
   REUSABLE LARGE SPLIT PROJECT CARD (Case Studies with subtle 3D tilt)
───────────────────────────────────────── */
function ProjectShowcaseCard({ project, index }) {
    const isEven = index % 2 === 0;
    const IconComponent = project.icon;
    const VisualIcon = project.visual.icon;

    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['3deg', '-3deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-3deg', '3deg']);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        cardRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
        cardRef.current.style.setProperty('--mouse-y', `${mouseY}px`);

        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                boxShadow: `0 12px 45px -10px ${project.glow}`,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            whileHover={{ y: -8, scale: 1.012 }}
            className={`group relative glass rounded-3xl border ${project.border} overflow-hidden transition-all duration-300`}
        >
            {/* Top Tri-colour Accent Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accent} z-20`} />

            {/* Dynamic Cursor-Following Radial Spotlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 212, 255, 0.12), transparent 80%)`,
                }}
            />

            {/* Split Grid: 50% Content / 50% Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* ── CONTENT PANEL ── */}
                <div
                    style={{ transform: 'translateZ(15px)' }}
                    className={`p-7 sm:p-9 lg:p-11 flex flex-col justify-between ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                    } order-1 z-20`}
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
                            <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-sm">
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

                        {/* Action Buttons with magnetic spring */}
                        <div className="flex flex-wrap items-center gap-3.5">
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all text-sm font-semibold cursor-pointer"
                            >
                                <FaGithub className="text-base" /> GitHub
                            </motion.a>

                            {project.live ? (
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold text-sm hover:brightness-110 shadow-lg shadow-neon-blue/20 transition-all duration-300 cursor-pointer"
                                >
                                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                                </motion.a>
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
                    <div className="relative z-10 w-full max-w-md space-y-6">
                        {/* Central Large Icon Hub */}
                        <div className="flex justify-center my-2">
                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                className="relative cursor-pointer"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl glass-strong border border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-xl group-hover:border-neon-cyan/50">
                                    <VisualIcon
                                        style={{ color: project.visual.iconColor }}
                                        className="text-4xl sm:text-5xl drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]"
                                    />
                                </div>
                                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-md flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                </span>
                            </motion.div>
                        </div>

                        {/* Feature Status Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {project.visual.features.map((item) => (
                                <div
                                    key={item.label}
                                    className="glass-strong rounded-xl p-3.5 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between bg-black/40 backdrop-blur-md hover:bg-black/60"
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
   COMPACT ADDITIONAL PROJECT CARD
───────────────────────────────────────── */
function AdditionalProjectCard({ project }) {
    const IconComponent = project.icon;

    return (
        <TiltCard
            maxTilt={4}
            lift={6}
            scale={1.02}
            glowColor="rgba(0, 255, 234, 0.12)"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="group relative glass rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-neon-cyan/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            style={{
                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.5)',
            }}
        >
            {/* Top Accent Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
                {/* Header: Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span
                        className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
                    >
                        {project.category}
                    </span>
                </div>

                {/* Project Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-neon-cyan/40 transition-colors">
                        <IconComponent style={{ color: project.iconColor }} className="text-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors leading-snug">
                        {project.title}
                    </h4>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.description}
                </p>
            </div>

            <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                    {project.technologies.map((t) => (
                        <TechBadge key={t.label} tech={t} compact />
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2.5 pt-1">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 text-xs font-semibold transition-all cursor-pointer"
                    >
                        <FaGithub className="text-sm" /> Code
                    </a>

                    {project.live ? (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold text-xs hover:brightness-110 shadow-sm transition-all cursor-pointer"
                        >
                            <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                        </a>
                    ) : null}
                </div>
            </div>
        </TiltCard>
    );
}

/* ─────────────────────────────────────────
   MAIN PROJECTS SECTION
───────────────────────────────────────── */
const FILTER_CATEGORIES = [
    'All',
    'Full-Stack',
    'AI / ML',
    'Computer Vision',
    'Data & Analytics',
    'Games & Interactive',
    'Research',
];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAdditionalProjects = useMemo(() => {
        return additionalProjects.filter((project) => {
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
        <section id="projects" className="py-28 relative overflow-hidden">
            {/* Background Glow Accents */}
            <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />
            <div className="absolute top-2/3 right-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* ══════════════════════════════════════════
                    1. FEATURED PROJECTS (Case Studies)
                ══════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">
                            Major Applications
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
                    </div>
                    <h2 className="section-title gradient-text">Featured Projects</h2>
                    <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        A collection of primary applications and systems I've built — from full-stack platforms to deployed AI solutions.
                    </p>
                    <p className="text-slate-500 mt-1 max-w-2xl mx-auto text-xs sm:text-sm">
                        Each case study highlights real problem-solving, architectural implementation, and end-to-end functionality.
                    </p>
                </motion.div>

                {/* Stack of 9 Featured Large Split Cards */}
                <div className="flex flex-col gap-10 sm:gap-14 mb-28">
                    {featuredProjects.map((project, index) => (
                        <ProjectShowcaseCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* ══════════════════════════════════════════
                    2. MORE PROJECTS & EXPERIMENTS
                ══════════════════════════════════════════ */}
                <div className="pt-16 border-t border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-10"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-purple" />
                            <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">
                                Technical Explorations
                            </span>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-purple" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            More Projects &amp; Experiments
                        </h3>
                        <p className="text-slate-300 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                            Additional applications, experiments, academic projects, and technical explorations I've built while learning and experimenting with different technologies.
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-2">
                            <span className="text-xs font-mono text-neon-cyan px-3.5 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 shadow-sm">
                                {additionalProjects.length} Additional Projects &amp; Experiments
                            </span>
                        </div>
                    </motion.div>

                    {/* Filter Pills & Search Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                        {/* Categories */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
                            {FILTER_CATEGORIES.map((cat) => {
                                const isSelected = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                                            isSelected
                                                ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold shadow-md shadow-neon-blue/20'
                                                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full md:w-72">
                            <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search projects..."
                                className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan/60 transition-colors"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs cursor-pointer"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Compact Cards Grid */}
                    {filteredAdditionalProjects.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <AnimatePresence>
                                {filteredAdditionalProjects.map((project) => (
                                    <AdditionalProjectCard key={project.id} project={project} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <div className="glass rounded-2xl p-12 text-center border border-white/10">
                            <LuSearch className="text-3xl text-slate-500 mx-auto mb-3" />
                            <p className="text-slate-300 font-medium">No projects match your current filter or search.</p>
                            <button
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setSearchQuery('');
                                }}
                                className="mt-3 text-xs font-mono text-neon-cyan hover:underline cursor-pointer"
                            >
                                Reset all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
