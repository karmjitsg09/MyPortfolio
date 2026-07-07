import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaGraduationCap, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { BsRobot, BsStars, BsGraphUp, BsPeopleFill } from 'react-icons/bs';
import { HiLightningBolt, HiCode } from 'react-icons/hi';
import { MdWarning, MdSchool } from 'react-icons/md';
import { SiPython, SiScikitlearn } from 'react-icons/si';

/* ─── static particle data ─────────────────────────────── */
const pts = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    size: (i % 3) + 1.5,
    x: (i * 41 + 13) % 100,
    y: (i * 59 + 17) % 100,
    delay: (i * 0.28) % 4,
    dur: 5 + (i * 0.35) % 5,
    color: ['#00d4ff', '#b400ff', '#00ffea'][i % 3],
}));

function Particles() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" style={{ zIndex: 0 }}>
            {pts.map(p => (
                <motion.span key={p.id} className="absolute rounded-full"
                    style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, background: p.color, boxShadow: `0 0 6px ${p.color}`, opacity: 0 }}
                    animate={{ opacity: [0, 0.65, 0], y: [0, -28, -56] }}
                    transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
}

/* ─── floating icons ───────────────────────────────────── */
const floats = [
    { icon: FaBrain,      color: '#00d4ff', top: '10%', left: '2%',   delay: 0,   size: '1.5rem' },
    { icon: BsRobot,      color: '#b400ff', top: '22%', right: '2%',  delay: 0.7, size: '1.4rem' },
    { icon: BsGraphUp,    color: '#00ffea', top: '60%', left: '2%',   delay: 1.4, size: '1.3rem' },
    { icon: MdSchool,     color: '#ffd343', top: '70%', right: '2%',  delay: 2.0, size: '1.5rem' },
    { icon: HiLightningBolt, color: '#f26207', top: '42%', right:'2%', delay:1.1, size: '1.2rem' },
];

/* ─── data ─────────────────────────────────────────────── */
const mlModels = [
    { name: 'Logistic Regression', color: '#00d4ff', icon: HiCode },
    { name: 'Decision Trees',      color: '#00ffea', icon: BsGraphUp },
    { name: 'Random Forest',       color: '#b400ff', icon: BsRobot },
    { name: 'SVM',                 color: '#ffd343', icon: FaChartLine },
    { name: 'XGBoost',             color: '#f26207', icon: HiLightningBolt },
];

const objectives = [
    { label: 'Student retention',          icon: BsPeopleFill,  color: '#00d4ff' },
    { label: 'Academic success',           icon: FaGraduationCap, color: '#00ffea' },
    { label: 'Personalized intervention',  icon: FaBrain,       color: '#b400ff' },
    { label: 'Proactive education systems',icon: BsStars,       color: '#ffd343' },
];

const dataFeatures = [
    'Attendance tracking',
    'Academic performance',
    'Assignment submissions',
    'Engagement levels',
    'LMS activity logs',
];

const interventions = [
    'Academic support programs',
    'Counseling & mentoring',
    'Personalized guidance',
    'Early outreach campaigns',
];

const challenges = [
    { label: 'Data Privacy',           color: '#ff4d6d' },
    { label: 'Model Interpretability', color: '#ffd343' },
    { label: 'Ethical AI in Education',color: '#b400ff' },
];

/* ─── mini dashboard preview ───────────────────────────── */
const dashStats = [
    { label: 'At-Risk Students', value: '14%',  color: '#ff4d6d', bar: 14 },
    { label: 'Attendance Score', value: '73%',  color: '#00d4ff', bar: 73 },
    { label: 'Engagement Index', value: '61%',  color: '#00ffea', bar: 61 },
    { label: 'Model Accuracy',   value: '91%',  color: '#b400ff', bar: 91 },
];

function DashboardPreview() {
    return (
        <div className="rounded-xl p-5 mb-7" style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(0,212,255,0.15)' }}>
            <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">AI Prediction Dashboard</p>
                <span className="flex items-center gap-1.5 text-[10px] font-mono" style={{ color: '#00ffea' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    Live Analysis
                </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
                {dashStats.map(({ label, value, color, bar }) => (
                    <div key={label} className="rounded-lg p-3" style={{ background: `${color}0d`, border: `1px solid ${color}30` }}>
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] text-slate-400 font-mono">{label}</span>
                            <span className="text-xs font-bold font-mono" style={{ color }}>{value}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                            <motion.div className="h-1.5 rounded-full"
                                style={{ background: color }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${bar}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            {/* risk meter */}
            <div className="rounded-lg p-3" style={{ background: 'rgba(255,77,109,0.06)', border: '1px solid rgba(255,77,109,0.2)' }}>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-500">Student Risk Classification</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded font-mono" style={{ background: 'rgba(255,77,109,0.15)', color: '#ff4d6d', border: '1px solid rgba(255,77,109,0.4)' }}>HIGH RISK DETECTED</span>
                </div>
                <div className="flex gap-2">
                    {['Safe · 61%', 'Moderate · 25%', 'At-Risk · 14%'].map((s, i) => (
                        <span key={s} className="text-[9px] font-mono px-2 py-0.5 rounded"
                            style={{ background: ['rgba(34,197,94,0.1)', 'rgba(240,219,79,0.1)', 'rgba(255,77,109,0.1)'][i], color: ['#22c55e', '#f0db4f', '#ff4d6d'][i], border: `1px solid ${['rgba(34,197,94,0.3)', 'rgba(240,219,79,0.3)', 'rgba(255,77,109,0.3)'][i]}` }}>
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── main export ───────────────────────────────────────── */
export default function Research() {
    return (
        <section id="research" className="py-28 relative overflow-hidden grid-bg">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

            {/* ambient blobs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full opacity-8 blur-[80px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse,#00d4ff 0%,transparent 70%)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[180px] rounded-full opacity-8 blur-[60px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse,#b400ff 0%,transparent 70%)' }} />

            <div className="max-w-5xl mx-auto px-6">

                {/* section header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
                    className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
                        <span className="text-neon-cyan text-sm font-mono tracking-widest uppercase">Research</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
                    </div>
                    <h2 className="section-title gradient-text mb-4">Research &amp; Innovation</h2>
                    <p className="text-slate-400 text-base max-w-xl mx-auto">
                        AI-driven systems focused on{' '}
                        <span className="text-neon-cyan font-semibold">educational impact</span> and proactive learning support.
                    </p>
                </motion.div>

                {/* featured research card */}
                <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.85, ease: 'easeOut' }}
                    className="relative">

                    {/* animated border */}
                    <motion.div className="absolute -inset-[2px] rounded-3xl z-0"
                        style={{ background: 'linear-gradient(270deg,#00d4ff,#00ffea,#b400ff,#00d4ff)', backgroundSize: '400% 400%', opacity: 0.85 }}
                        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }} />

                    {/* glow halo */}
                    <div className="absolute -inset-6 rounded-[2.5rem] opacity-20 blur-2xl pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.5),rgba(0,255,234,0.3))' }} />

                    {/* card */}
                    <motion.div whileHover={{ y: -8, boxShadow: '0 40px 100px rgba(0,212,255,0.28), 0 0 70px rgba(0,255,234,0.18)' }}
                        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                        className="relative z-10 rounded-[calc(1.5rem+2px)]"
                        style={{ background: 'rgba(13,17,23,0.97)' }}>
                        <div className="rounded-[calc(1.5rem)] overflow-hidden relative" style={{ background: 'rgba(13,17,23,0.97)' }}>

                            {/* floating icons */}
                            {floats.map((fi, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.5, scale: 1 }}
                                    transition={{ delay: fi.delay, duration: 0.8 }}
                                    style={{ position: 'absolute', top: fi.top, left: fi.left, right: fi.right, zIndex: 0 }}>
                                    <motion.div animate={{ y: [0, -16, 0] }}
                                        transition={{ duration: 4 + fi.delay, repeat: Infinity, ease: 'easeInOut' }}
                                        className="p-2.5 rounded-xl"
                                        style={{ background: `${fi.color}18`, border: `1px solid ${fi.color}40`, boxShadow: `0 0 20px ${fi.color}40` }}>
                                        <fi.icon style={{ color: fi.color, fontSize: fi.size }} />
                                    </motion.div>
                                </motion.div>
                            ))}

                            <Particles />

                            {/* top stripe */}
                            <div className="h-1 w-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple" />

                            <div className="p-8 md:p-12 relative z-10">

                                {/* header */}
                                <div className="flex flex-wrap items-start justify-between gap-5 mb-8">
                                    <div className="flex items-center gap-5">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.25),rgba(0,255,234,0.2))', border: '1px solid rgba(0,212,255,0.45)', boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}>
                                            <FaBrain className="text-3xl" style={{ color: '#00d4ff' }} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono tracking-widest uppercase text-neon-cyan opacity-80 block mb-0.5">AI Research Project</span>
                                            <h3 className="text-lg md:text-2xl font-bold text-white leading-tight max-w-xl">
                                                AI-Based Early Warning System for At-Risk Students
                                            </h3>
                                            <p className="text-sm text-slate-400 mt-1 font-mono">Higher Education · Machine Learning</p>
                                        </div>
                                    </div>

                                    {/* SDG badge */}
                                    <motion.span
                                        animate={{ boxShadow: ['0 0 8px #00d4ff55', '0 0 22px #00d4ffaa', '0 0 8px #00d4ff55'] }}
                                        transition={{ duration: 2.2, repeat: Infinity }}
                                        className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full font-mono flex-shrink-0"
                                        style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.5)', color: '#00d4ff' }}>
                                        <MdSchool style={{ fontSize: '0.85rem' }} />
                                        SDG 4 – Quality Education
                                    </motion.span>
                                </div>

                                {/* description */}
                                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                    This project focuses on using{' '}
                                    <span className="text-neon-cyan font-semibold">Artificial Intelligence (AI)</span> and{' '}
                                    <span className="text-neon-blue font-semibold">Machine Learning (ML)</span> to identify
                                    students who may be at risk of poor academic performance or dropout at an early stage.
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                                    Traditional educational monitoring methods are often reactive. With the growth of digital
                                    learning platforms and LMS systems, institutions now have access to large amounts of student
                                    data. The proposed system analyzes this data using ML algorithms to predict whether a student
                                    is at risk — enabling proactive intervention before performance declines.
                                </p>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/25 to-transparent mb-7" />

                                {/* dashboard */}
                                <DashboardPreview />

                                {/* ML models */}
                                <div className="mb-7">
                                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">ML Models Used</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {mlModels.map(({ name, color, icon: Ic }) => (
                                            <motion.span key={name} whileHover={{ scale: 1.07, boxShadow: `0 0 18px ${color}60` }}
                                                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold cursor-default"
                                                style={{ background: `${color}14`, border: `1px solid ${color}45`, color }}>
                                                <Ic style={{ fontSize: '0.85rem' }} />
                                                {name}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* objectives + interventions */}
                                <div className="grid sm:grid-cols-2 gap-6 mb-7">
                                    <div>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">System Objectives</p>
                                        <ul className="space-y-2.5">
                                            {objectives.map(({ label, icon: Ic, color }) => (
                                                <li key={label} className="flex items-center gap-2.5 text-sm text-slate-300">
                                                    <Ic style={{ color, fontSize: '1rem', flexShrink: 0 }} />
                                                    {label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Data Sources</p>
                                        <ul className="space-y-1.5 mb-5">
                                            {dataFeatures.map(f => (
                                                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-neon-cyan" />{f}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Interventions</p>
                                        <ul className="space-y-1.5">
                                            {interventions.map(f => (
                                                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-neon-purple" />{f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* ethical challenges */}
                                <div className="rounded-2xl p-5 mb-7"
                                    style={{ background: 'rgba(255,77,109,0.06)', border: '1px solid rgba(255,77,109,0.2)' }}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <MdWarning className="text-lg" style={{ color: '#ff4d6d' }} />
                                        <p className="text-xs font-mono uppercase tracking-widest" style={{ color: '#ff4d6d' }}>
                                            Ethical &amp; Technical Challenges
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {challenges.map(({ label, color }) => (
                                            <span key={label} className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                                                style={{ background: `${color}12`, border: `1px solid ${color}40`, color }}>
                                                {label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* technologies used */}
                                <div className="flex flex-wrap gap-2.5 mb-8">
                                    {[
                                        { name: 'Python',       icon: SiPython,     color: '#ffd343' },
                                        { name: 'Scikit-learn', icon: SiScikitlearn,color: '#f09035' },
                                        { name: 'ML Pipelines', icon: BsGraphUp,    color: '#00d4ff' },
                                        { name: 'LMS Analytics',icon: MdSchool,     color: '#00ffea' },
                                        { name: 'AI Ethics',    icon: FaShieldAlt,  color: '#b400ff' },
                                    ].map(({ name, icon: Ic, color }) => (
                                        <span key={name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                                            style={{ background: `${color}14`, border: `1px solid ${color}40`, color }}>
                                            <Ic style={{ fontSize: '0.85rem' }} />{name}
                                        </span>
                                    ))}
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/25 to-transparent" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
