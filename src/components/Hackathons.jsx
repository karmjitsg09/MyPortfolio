import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript, SiReplit,
} from 'react-icons/si';
import { HiLightningBolt, HiExternalLink, HiCode } from 'react-icons/hi';
import { BsRobot, BsStars, BsTrophyFill, BsHeartPulse, BsShieldPlus, BsCpuFill } from 'react-icons/bs';
import { MdLocationOn, MdScience } from 'react-icons/md';
import { FaQuoteLeft, FaBrain, FaXRay } from 'react-icons/fa';
import { TbUrgent } from 'react-icons/tb';

/* ─── floating holographic icons inside card ───────────── */
const floatingIcons = [
    { icon: HiCode,          color: '#00d4ff', top: '10%',  left: '2.5%',  delay: 0,   size: '1.6rem' },
    { icon: BsRobot,         color: '#b400ff', top: '18%',  right: '2.5%', delay: 0.7, size: '1.4rem' },
    { icon: BsStars,         color: '#00ffea', top: '65%',  left: '2%',    delay: 1.5, size: '1.3rem' },
    { icon: HiLightningBolt, color: '#ffd343', top: '72%',  right: '2%',   delay: 2.2, size: '1.5rem' },
    { icon: SiReplit,        color: '#f26207', top: '42%',  right: '2%',   delay: 1.1, size: '1.2rem' },
];

function FloatingIcon({ icon: Icon, color, top, left, right, delay, size }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay, duration: 0.8 }}
            style={{ position: 'absolute', top, left, right, zIndex: 0 }}
        >
            <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
                className="p-2.5 rounded-xl"
                style={{
                    background: `${color}18`,
                    border: `1px solid ${color}40`,
                    boxShadow: `0 0 20px ${color}40`,
                }}
            >
                <Icon style={{ color, fontSize: size }} />
            </motion.div>
        </motion.div>
    );
}

/* ─── subtle floating particle ─────────────────────────── */
const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    dur: 5 + Math.random() * 5,
    color: ['#00d4ff', '#b400ff', '#00ffea'][i % 3],
}));

function Particles() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" style={{ zIndex: 0 }}>
            {particles.map((p) => (
                <motion.span
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        background: p.color,
                        boxShadow: `0 0 6px ${p.color}`,
                        opacity: 0,
                    }}
                    animate={{ opacity: [0, 0.7, 0], y: [0, -30, -60] }}
                    transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
}

/* ─── animated border gradient ────────────────────────── */
const borderAnim = {
    animate: { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] },
    transition: { duration: 4, repeat: Infinity, ease: 'linear' },
};

/* ─── data ─────────────────────────────────────────────── */
const vibeEvents = [
    'Collaborative coding',
    'Project building',
    'Innovation challenges',
    'Networking with developers',
    'Practical software problem solving',
];

const vibeSkills = [
    'Rapid application development',
    'UI/UX design thinking',
    'Real-world problem solving',
    'Team collaboration',
    'Public project presentation',
];

const vibeTechs = [
    { name: 'Replit',      icon: SiReplit,      color: '#f26207' },
    { name: 'JavaScript',  icon: SiJavascript,  color: '#f0db4f' },
    { name: 'Web Dev',     icon: HiCode,        color: '#00d4ff' },
    { name: 'UI Design',   icon: BsStars,       color: '#b400ff' },
];

const projectFeatures = [
    'Revenue analytics dashboard',
    'Transaction history',
    'Monthly insights',
    'Secure PIN-based access',
    'Integration-ready architecture',
];

/* ─── EmergeX data ─────────────────────────────────────── */
const emergeFloatingIcons = [
    { icon: FaBrain,       color: '#00d4ff', top: '10%',  left: '2%',    delay: 0,   size: '1.5rem' },
    { icon: BsHeartPulse, color: '#ff4d6d', top: '20%',  right: '2.5%', delay: 0.6, size: '1.4rem' },
    { icon: FaXRay,        color: '#00ffea', top: '60%',  left: '2%',    delay: 1.4, size: '1.3rem' },
    { icon: BsShieldPlus, color: '#b400ff', top: '70%',  right: '2%',   delay: 2.0, size: '1.5rem' },
    { icon: BsCpuFill,    color: '#ffd343', top: '42%',  right: '2%',   delay: 1.0, size: '1.2rem' },
];

const emergeTechs = [
    { name: 'HTML',              icon: HiCode,        color: '#f06529' },
    { name: 'CSS',               icon: BsStars,       color: '#264de4' },
    { name: 'JavaScript',        icon: SiJavascript,  color: '#f0db4f' },
    { name: 'AI Workflow',       icon: FaBrain,       color: '#00d4ff' },
    { name: 'Healthcare UI/UX',  icon: BsHeartPulse,  color: '#ff4d6d' },
];

const emergeMedical = [
    'Chest X-ray analysis',
    'Pneumonia detection',
    'Emergency triage support',
    'Workflow optimization',
    'PACS integration concepts',
    'Clinical decision assistance',
];

const emergeFeatures = [
    'AI-powered pneumonia screening',
    'Emergency severity classification',
    'Confidence score visualization',
    'X-ray upload system',
    'Real-time triage dashboard',
    'Case filtering & prioritization',
];

const severityLevels = [
    { label: 'Normal',   color: '#22c55e', desc: 'No abnormality detected' },
    { label: 'Moderate', color: '#f0db4f', desc: 'Review recommended' },
    { label: 'High',     color: '#f97316', desc: 'Priority review required' },
    { label: 'Urgent',   color: '#ff4d6d', desc: 'Immediate attention needed' },
];

/* ─── EmergeX card component ───────────────────────────── */
function EmergeXCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative mt-10"
        >
            {/* animated cyan-blue border */}
            <motion.div
                className="absolute -inset-[2px] rounded-3xl z-0"
                style={{
                    background: 'linear-gradient(270deg,#00d4ff,#00ffea,#b400ff,#00d4ff)',
                    backgroundSize: '400% 400%',
                    opacity: 0.85,
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            />

            {/* glow halo */}
            <div
                className="absolute -inset-6 rounded-[2.5rem] opacity-25 blur-2xl pointer-events-none z-0"
                style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.5),rgba(0,255,234,0.3))' }}
            />

            {/* card surface */}
            <motion.div
                whileHover={{ y: -8, boxShadow: '0 40px 100px rgba(0,212,255,0.3), 0 0 70px rgba(0,255,234,0.18)' }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                className="relative z-10 rounded-[calc(1.5rem+2px)]"
                style={{ background: 'rgba(13,17,23,0.97)' }}
            >
                <div className="rounded-[calc(1.5rem)] overflow-hidden relative" style={{ background: 'rgba(13,17,23,0.97)' }}>

                    {/* floating icons */}
                    {emergeFloatingIcons.map((fi, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 0.5, scale: 1 }}
                            transition={{ delay: fi.delay, duration: 0.8 }}
                            style={{ position: 'absolute', top: fi.top, left: fi.left, right: fi.right, zIndex: 0 }}
                        >
                            <motion.div
                                animate={{ y: [0, -16, 0] }}
                                transition={{ duration: 4 + fi.delay, repeat: Infinity, ease: 'easeInOut' }}
                                className="p-2.5 rounded-xl"
                                style={{ background: `${fi.color}18`, border: `1px solid ${fi.color}40`, boxShadow: `0 0 20px ${fi.color}40` }}
                            >
                                <fi.icon style={{ color: fi.color, fontSize: fi.size }} />
                            </motion.div>
                        </motion.div>
                    ))}

                    {/* particles — cyan/teal theme */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" style={{ zIndex: 0 }}>
                        {Array.from({ length: 16 }, (_, i) => ({
                            id: i, size: Math.random() * 3 + 1,
                            x: Math.random() * 100, y: Math.random() * 100,
                            delay: Math.random() * 4, dur: 5 + Math.random() * 5,
                            color: ['#00d4ff', '#00ffea', '#ff4d6d'][i % 3],
                        })).map((p) => (
                            <motion.span key={p.id} className="absolute rounded-full"
                                style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, background: p.color, boxShadow: `0 0 6px ${p.color}`, opacity: 0 }}
                                animate={{ opacity: [0, 0.7, 0], y: [0, -30, -60] }}
                                transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        ))}
                    </div>

                    {/* top stripe — cyan theme */}
                    <div className="h-1 w-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple" />

                    <div className="p-8 md:p-12 relative z-10">

                        {/* header row */}
                        <div className="flex flex-wrap items-start justify-between gap-5 mb-8">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: 'linear-gradient(135deg,rgba(0,212,255,0.25),rgba(0,255,234,0.2))',
                                        border: '1px solid rgba(0,212,255,0.45)',
                                        boxShadow: '0 0 30px rgba(0,212,255,0.35)',
                                    }}
                                >
                                    <MdScience className="text-3xl" style={{ color: '#00ffea' }} />
                                </div>
                                <div>
                                    <span className="text-xs font-mono tracking-widest uppercase text-neon-cyan opacity-80 block mb-0.5">
                                        National Science Day 2026
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        AI for Healthcare Hackathon
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-1 font-mono">
                                        Yenepoya University, Mangalore · 8-Hour Challenge
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-3">
                                {/* AI Healthcare Innovation badge */}
                                <motion.span
                                    animate={{ boxShadow: ['0 0 8px #00d4ff55', '0 0 24px #00d4ffaa', '0 0 8px #00d4ff55'] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full font-mono"
                                    style={{
                                        background: 'rgba(0,212,255,0.1)',
                                        border: '1px solid rgba(0,212,255,0.5)',
                                        color: '#00d4ff',
                                    }}
                                >
                                    <FaBrain style={{ fontSize: '0.75rem' }} />
                                    AI Healthcare Innovation
                                </motion.span>
                                <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                                    <MdLocationOn className="text-neon-cyan text-sm" />
                                    Mangalore, India
                                </span>
                            </div>
                        </div>

                        {/* description */}
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">
                            Participated in the{' '}
                            <span className="text-neon-cyan font-semibold">National Science Day 2026 Hackathon</span>{' '}
                            focused on AI-driven healthcare innovation. The event challenged teams to develop impactful
                            real-world healthcare solutions under intense time constraints.
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-7">
                            Worked on an AI-assisted emergency screening platform for chest X-ray abnormality detection
                            designed to support rapid triage workflows in hospitals and emergency departments.
                        </p>

                        {/* divider */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/25 to-transparent mb-7" />

                        {/* project showcase */}
                        <div className="rounded-2xl p-6 mb-7" style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.22)' }}>
                            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">Project Built</p>
                            <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold text-lg mb-1.5">EmergeX Detector</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        An AI-powered clinical decision support system built to assist hospitals in analyzing
                                        chest radiographs quickly and efficiently — evaluating pneumonia probability and
                                        classifying emergency severity to support rapid triage workflows.
                                    </p>
                                </div>
                            </div>

                            {/* futuristic dashboard preview */}
                            <div className="rounded-xl p-4 mb-5" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0,212,255,0.15)' }}>
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Emergency Triage Dashboard — EmergeX</p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                                    {severityLevels.map(({ label, color, desc }) => (
                                        <div key={label} className="rounded-lg p-3 text-center"
                                            style={{ background: `${color}10`, border: `1px solid ${color}40` }}>
                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                <TbUrgent style={{ color, fontSize: '0.85rem' }} />
                                                <span className="text-xs font-bold font-mono" style={{ color }}>{label}</span>
                                            </div>
                                            <p className="text-[10px] text-slate-500 leading-tight">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                                {/* mock confidence bar */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                                        <span>AI Confidence Score</span>
                                        <span className="text-neon-cyan">87%</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                        <motion.div
                                            className="h-2 rounded-full"
                                            style={{ background: 'linear-gradient(90deg,#00d4ff,#00ffea)' }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '87%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-[10px] font-mono text-slate-500">Classification:</span>
                                        <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded" style={{ background: 'rgba(249,115,22,0.15)', color: '#f97316', border: '1px solid rgba(249,115,22,0.4)' }}>HIGH PRIORITY</span>
                                    </div>
                                </div>
                            </div>

                            {/* features grid */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {emergeFeatures.map((f) => (
                                    <li key={f} className="flex items-center gap-1.5 text-xs text-slate-300">
                                        <span className="w-1 h-1 rounded-full flex-shrink-0 bg-neon-cyan" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* quotes */}
                        <div className="space-y-3 mb-7">
                            {[
                                { text: '"This system is designed as a triage-support tool, not a replacement for radiologists."', color: '#00d4ff' },
                                { text: '"Reducing reporting delay can significantly improve emergency patient outcomes."', color: '#00ffea' },
                            ].map(({ text, color }) => (
                                <div key={text} className="rounded-2xl p-5 relative overflow-hidden"
                                    style={{ background: `${color}06`, border: `1px solid ${color}22` }}>
                                    <div className="absolute top-3 left-4 opacity-12">
                                        <FaQuoteLeft className="text-4xl" style={{ color }} />
                                    </div>
                                    <p className="text-sm md:text-base font-semibold italic text-center relative z-10"
                                        style={{ color, textShadow: `0 0 20px ${color}55` }}>
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* skills & techs */}
                        <div className="grid md:grid-cols-2 gap-7">
                            <div>
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Medical &amp; Technical Concepts</p>
                                <ul className="space-y-2">
                                    {emergeMedical.map((s) => (
                                        <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-neon-cyan" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Technologies</p>
                                <div className="flex flex-wrap gap-2.5">
                                    {emergeTechs.map(({ name, icon: TIcon, color }) => (
                                        <span key={name}
                                            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold"
                                            style={{ background: `${color}14`, border: `1px solid ${color}40`, color }}
                                        >
                                            <TIcon style={{ fontSize: '0.9rem' }} />
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* bottom rule */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/25 to-transparent mt-8" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─── main section ─────────────────────────────────────── */
export default function Hackathons() {
    return (
        <section id="hackathons" className="py-32 relative overflow-hidden grid-bg">
            {/* top separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

            {/* ambient glow blobs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse,#b400ff 0%,transparent 70%)' }} />
            <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[200px] rounded-full opacity-8 blur-[60px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse,#00d4ff 0%,transparent 70%)' }} />

            <div className="max-w-5xl mx-auto px-6">

                {/* ── section header ── */}
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
                            Competitions
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-purple" />
                    </div>
                    <h2 className="section-title gradient-text mb-4">
                        Hackathons &amp; Competitions
                    </h2>
                    <p className="text-slate-400 text-base max-w-lg mx-auto">
                        Building, learning, and competing through{' '}
                        <span className="text-neon-cyan font-semibold">innovation.</span>
                    </p>
                </motion.div>

                {/* ── featured card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                    className="relative"
                >
                    {/* animated neon border ring */}
                    <motion.div
                        className="absolute -inset-[2px] rounded-3xl z-0"
                        style={{
                            background: 'linear-gradient(270deg,#00d4ff,#b400ff,#00ffea,#00d4ff)',
                            backgroundSize: '400% 400%',
                            opacity: 0.9,
                        }}
                        animate={borderAnim.animate}
                        transition={borderAnim.transition}
                    />

                    {/* glow halo behind card */}
                    <div
                        className="absolute -inset-6 rounded-[2.5rem] opacity-30 blur-2xl pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.4),rgba(180,0,255,0.4))' }}
                    />

                    {/* card surface */}
                    <motion.div
                        whileHover={{ y: -8, boxShadow: '0 40px 100px rgba(0,212,255,0.28), 0 0 70px rgba(180,0,255,0.22)' }}
                        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                        className="relative z-10 rounded-[calc(1.5rem+2px)]"
                        style={{ background: 'rgba(13,17,23,0.97)' }}
                    >
                        <div
                            className="rounded-[calc(1.5rem)] overflow-hidden relative"
                            style={{ background: 'rgba(13,17,23,0.97)' }}
                        >
                            {/* floating icons */}
                            {floatingIcons.map((fi, i) => (
                                <FloatingIcon key={i} {...fi} />
                            ))}

                            {/* particles */}
                            <Particles />

                            {/* top gradient stripe */}
                            <div className="h-1 w-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan" />

                            <div className="p-8 md:p-12 relative z-10">

                                {/* header row */}
                                <div className="flex flex-wrap items-start justify-between gap-5 mb-8">
                                    <div className="flex items-center gap-5">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: 'linear-gradient(135deg,rgba(0,212,255,0.25),rgba(180,0,255,0.25))',
                                                border: '1px solid rgba(0,212,255,0.45)',
                                                boxShadow: '0 0 30px rgba(0,212,255,0.35)',
                                            }}
                                        >
                                            <BsTrophyFill className="text-3xl" style={{ color: '#ffd343' }} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono tracking-widest uppercase text-neon-blue opacity-80 block mb-0.5">
                                                Featured Hackathon
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                                Vibeathon 2025
                                            </h3>
                                            <p className="text-sm text-slate-400 mt-1 font-mono">
                                                Replit × Polaris School of Technology
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end gap-3">
                                        {/* completed badge */}
                                        <motion.span
                                            animate={{ boxShadow: ['0 0 8px #00ffea55', '0 0 24px #00ffeaaa', '0 0 8px #00ffea55'] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full font-mono"
                                            style={{
                                                background: 'rgba(0,255,234,0.1)',
                                                border: '1px solid rgba(0,255,234,0.5)',
                                                color: '#00ffea',
                                            }}
                                        >
                                            <BsTrophyFill style={{ fontSize: '0.75rem', color: '#ffd343' }} />
                                            Hackathon Completed
                                        </motion.span>
                                        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                                            <MdLocationOn className="text-neon-purple text-sm" />
                                            Bengaluru, India
                                        </span>
                                    </div>
                                </div>

                                {/* description */}
                                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                    Participated in{' '}
                                    <span className="text-neon-blue font-semibold">Vibeathon 2025</span>{' '}
                                    hosted by Replit and Polaris School of Technology. The event focused on
                                    innovation, collaborative problem solving, rapid development, and real-world
                                    project building.
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                                    As a first-semester B.Tech student from Yenepoya University Bangalore, this
                                    hackathon provided exposure to real developer environments, teamwork, rapid
                                    prototyping, and modern software workflows.
                                </p>

                                {/* event highlights */}
                                <div className="mb-7">
                                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                                        Event Highlights
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                        {vibeEvents.map((e) => (
                                            <li key={e} className="flex items-center gap-2 text-sm text-slate-300">
                                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-neon-blue" />
                                                {e}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* divider */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-blue/25 to-transparent mb-7" />

                                {/* quote */}
                                <div
                                    className="rounded-2xl p-6 mb-7 relative overflow-hidden"
                                    style={{
                                        background: 'rgba(0,212,255,0.05)',
                                        border: '1px solid rgba(0,212,255,0.2)',
                                    }}
                                >
                                    <div className="absolute top-3 left-4 opacity-15">
                                        <FaQuoteLeft className="text-5xl text-neon-blue" />
                                    </div>
                                    <p
                                        className="text-lg md:text-xl font-semibold italic text-center relative z-10"
                                        style={{ color: '#00d4ff', textShadow: '0 0 22px rgba(0,212,255,0.55)' }}
                                    >
                                        "If we don't try, we'll never know what's right."
                                    </p>
                                    <p className="text-xs text-slate-500 text-center mt-2.5 font-mono">
                                        — Jayant Mugdhra · Inspirational Session, Vibeathon 2025
                                    </p>
                                </div>

                                {/* project showcase */}
                                <div
                                    className="rounded-2xl p-6 mb-7"
                                    style={{
                                        background: 'rgba(180,0,255,0.07)',
                                        border: '1px solid rgba(180,0,255,0.25)',
                                    }}
                                >
                                    <p className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-4">
                                        Project Built at Vibeathon
                                    </p>
                                    <div className="flex items-start justify-between gap-4 flex-wrap">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white font-bold text-base mb-1.5">
                                                SmartSpend – Revenue Tracker App
                                            </h4>
                                            <p className="text-slate-400 text-xs leading-relaxed mb-3">
                                                A finance-tracking web application built using Replit that helps users
                                                manage income, track transactions, and analyze revenue trends using a
                                                clean dashboard interface.
                                            </p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                                {projectFeatures.map((f) => (
                                                    <li key={f} className="flex items-center gap-1.5 text-xs text-slate-300">
                                                        <span className="w-1 h-1 rounded-full flex-shrink-0 bg-neon-purple" />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <a
                                            href="https://v0-spend-revenue-tracker.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold flex-shrink-0 transition-all duration-300 hover:scale-105"
                                            style={{
                                                background: 'rgba(180,0,255,0.15)',
                                                border: '1px solid rgba(180,0,255,0.5)',
                                                color: '#b400ff',
                                                boxShadow: '0 0 16px rgba(180,0,255,0.2)',
                                            }}
                                        >
                                            <HiExternalLink className="text-sm" />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>

                                {/* skills & techs */}
                                <div className="grid md:grid-cols-2 gap-7">
                                    <div>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                                            Skills Gained
                                        </p>
                                        <ul className="space-y-2">
                                            {vibeSkills.map((s) => (
                                                <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-neon-purple" />
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                                            Technologies
                                        </p>
                                        <div className="flex flex-wrap gap-2.5">
                                            {vibeTechs.map(({ name, icon: TIcon, color }) => (
                                                <span
                                                    key={name}
                                                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold"
                                                    style={{
                                                        background: `${color}14`,
                                                        border: `1px solid ${color}40`,
                                                        color,
                                                    }}
                                                >
                                                    <TIcon style={{ fontSize: '0.9rem' }} />
                                                    {name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* bottom rule */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-purple/25 to-transparent mt-8" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── EmergeX healthcare hackathon ── */}
                <EmergeXCard />

            </div>
        </section>
    );
}
