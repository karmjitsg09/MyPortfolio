import { FaRobot, FaHeartbeat, FaBalanceScale, FaUserTie, FaBuilding } from 'react-icons/fa';
import { SiReplit, SiReact, SiPython, SiJavascript, SiFastapi } from 'react-icons/si';
import { LuTrophy } from 'react-icons/lu';

/* ─────────────────────────────────────────
   HACKATHONS DATA (5 Confirmed Entries)
───────────────────────────────────────── */
export const hackathons = [
    {
        id: 'vibeathon-2025',
        title: 'Vibeathon 2025',
        organizer: 'Replit × Polaris School of Technology',
        project: 'SmartSpend — Revenue Tracker',
        category: 'Full-Stack / Finance',
        filterCategory: 'FULL-STACK',
        description:
            'Developed SmartSpend, a practical finance/revenue tracking web application during the hackathon.',
        technologies: [
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'Replit', icon: SiReplit, color: '#f26207' },
            { label: 'Web Dev', icon: SiReact, color: '#61dafb' },
        ],
        github: 'https://github.com/karmjitsg09/smartspend-revenue-tracker',
        live: 'https://v0-spend-revenue-tracker.vercel.app/',
        icon: LuTrophy,
        iconColor: '#00d4ff',
        accent: 'from-neon-blue via-neon-purple to-neon-cyan',
        border: 'border-neon-blue/30',
        badgeColor: 'text-neon-blue border-neon-blue/40 bg-neon-blue/10',
    },
    {
        id: 'yenepoya-hackathon',
        title: 'Yenepoya University Bengaluru Hackathon',
        organizer: 'Yenepoya University Bengaluru',
        project: 'College Chatbot',
        category: 'AI / Chatbot / Web',
        filterCategory: 'AI / ML',
        description:
            'Participated in the Yenepoya University Bengaluru hackathon and developed a college chatbot project.',
        technologies: [
            { label: 'AI Chatbot', icon: FaRobot, color: '#00ffea' },
            { label: 'JavaScript', icon: SiJavascript, color: '#facc15' },
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
        icon: FaRobot,
        iconColor: '#00ffea',
        accent: 'from-neon-cyan via-neon-blue to-neon-purple',
        border: 'border-neon-cyan/30',
        badgeColor: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
    },
    {
        id: 'emerge-healthcare',
        title: 'AI for Healthcare Hackathon',
        organizer: 'National Science Day 2026',
        project: 'EmergeX',
        category: 'AI / Healthcare',
        filterCategory: 'HEALTHCARE',
        description:
            'Worked on EmergeX, an AI-oriented healthcare/triage project during the hackathon.',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'FastAPI', icon: SiFastapi, color: '#009688' },
            { label: 'Healthcare AI', icon: FaHeartbeat, color: '#f43f5e' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
        icon: FaHeartbeat,
        iconColor: '#f43f5e',
        accent: 'from-pink-500 via-rose-500 to-neon-purple',
        border: 'border-pink-500/30',
        badgeColor: 'text-pink-400 border-pink-500/40 bg-pink-500/10',
    },
    {
        id: 'ai-legal',
        title: 'AI Legal Hackathon — Online',
        organizer: 'Online AI Legal Hackathon',
        project: 'AI Legal',
        category: 'AI / LegalTech',
        filterCategory: 'LEGAL',
        description:
            'Participated in an online AI-focused legal hackathon and worked on an AI Legal project.',
        technologies: [
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
            { label: 'Legal AI', icon: FaBalanceScale, color: '#a78bfa' },
            { label: 'React', icon: SiReact, color: '#61dafb' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
        icon: FaBalanceScale,
        iconColor: '#a78bfa',
        accent: 'from-neon-purple via-indigo-500 to-neon-cyan',
        border: 'border-neon-purple/30',
        badgeColor: 'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
    },
    {
        id: 'odoo-nmit-2026',
        title: 'Odoo × NMIT Bangalore Hackathon 2026',
        organizer: 'Odoo × NMIT Bangalore',
        project: 'Dayflow HRMS',
        role: 'Team Lead',
        team: ['Henrita Gladys S.J.', 'Stacey Angel A.'],
        category: 'Full-Stack / HRMS / Productivity',
        filterCategory: 'PRODUCTIVITY',
        description:
            'Led the development of Dayflow HRMS, focusing on attendance and leave-management functionality for the hackathon.',
        technologies: [
            { label: 'Full-Stack', icon: SiReact, color: '#61dafb' },
            { label: 'HRMS Workflow', icon: FaBuilding, color: '#34d399' },
            { label: 'Python', icon: SiPython, color: '#38bdf8' },
        ],
        github: 'https://github.com/karmjitsg09',
        live: null,
        isFeaturedLead: true,
        icon: FaUserTie,
        iconColor: '#34d399',
        accent: 'from-emerald-400 via-neon-cyan to-neon-blue',
        border: 'border-emerald-500/40',
        badgeColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
    },
];

export const FILTER_TAGS = ['ALL', 'FULL-STACK', 'AI / ML', 'HEALTHCARE', 'LEGAL', 'PRODUCTIVITY'];
