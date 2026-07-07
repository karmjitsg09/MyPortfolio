import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaTerminal, FaGitAlt, FaMedal } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';

const contributions = [
    { label: 'Linux-based dev environment',       icon: FaTerminal },
    { label: 'Terminal-based workflows',           icon: FaTerminal },
    { label: 'Git & GitHub collaboration',         icon: FaGitAlt },
    { label: 'Creating & managing Pull Requests',  icon: FaCodeBranch },
    { label: 'Open-source contribution standards', icon: FaGithub },
    { label: 'Collaborative development practices',icon: FaGithub },
];

// Particle data seeded at module load (stable across renders)
const certParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: (i % 3) + 1.5,
    x: (i * 37 + 11) % 100,
    y: (i * 53 + 7) % 100,
    delay: (i * 0.31) % 4,
    dur: 5 + (i * 0.4) % 5,
    color: ['#00d4ff', '#b400ff', '#00ffea', '#ffd343'][i % 4],
}));

function CertParticles() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" style={{ zIndex: 0 }}>
            {certParticles.map((p) => (
                <motion.span
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        width: p.size, height: p.size,
                        left: `${p.x}%`, top: `${p.y}%`,
                        background: p.color,
                        boxShadow: `0 0 6px ${p.color}`,
                        opacity: 0,
                    }}
                    animate={{ opacity: [0, 0.6, 0], y: [0, -28, -56] }}
                    transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
}

// GitHub-style contribution heatmap
function ContributionGrid() {
    const weeks = 26;
    const days = 7;
    const data = Array.from({ length: weeks }, (_, w) =>
        Array.from({ length: days }, (_, d) => (w * 7 + d * 3) % 5)
    );
    const colors = ['bg-white/5', 'bg-neon-blue/20', 'bg-neon-blue/40', 'bg-neon-blue/70', 'bg-neon-blue'];
    return (
        <div className="flex gap-1 overflow-x-auto pb-2">
            {data.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                    {week.map((level, di) => (
                        <motion.div
                            key={di}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: (wi * 7 + di) * 0.003 }}
                            className={`w-3 h-3 rounded-sm ${colors[level]} transition-colors hover:scale-125`}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function OpenSource() {
    return (
        <section id="opensource" className="py-28 relative overflow-hidden grid-bg">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

            {/* ambient blobs */}
            <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-10 blur-[70px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse,#00d4ff 0%,transparent 70%)' }} />

            <div className="max-w-5xl mx-auto px-6">

                {/* ── section title ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-purple" />
                        <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">Community</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-purple" />
                    </div>
                    <h2 className="section-title gradient-text mb-3">Open Source Achievement</h2>
                    <p className="text-slate-400 text-sm font-mono">
                        Kalvium × Mathesar Open Source Contribution Program
                    </p>
                </motion.div>

                {/* ── CERTIFICATE FEATURED CARD ── */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                    className="relative mb-12"
                >
                    {/* animated neon border */}
                    <motion.div
                        className="absolute -inset-[2px] rounded-3xl z-0"
                        style={{
                            background: 'linear-gradient(270deg,#b400ff,#00d4ff,#00ffea,#b400ff)',
                            backgroundSize: '400% 400%',
                            opacity: 0.85,
                        }}
                        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* glow halo */}
                    <div
                        className="absolute -inset-6 rounded-[2.5rem] opacity-20 blur-2xl pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg,rgba(180,0,255,0.5),rgba(0,212,255,0.4))' }}
                    />

                    {/* card */}
                    <motion.div
                        whileHover={{ y: -8, boxShadow: '0 36px 90px rgba(180,0,255,0.25), 0 0 60px rgba(0,212,255,0.2)' }}
                        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                        className="relative z-10 rounded-[calc(1.5rem+2px)]"
                        style={{ background: 'rgba(13,17,23,0.97)' }}
                    >
                        <div className="rounded-[calc(1.5rem)] overflow-hidden relative" style={{ background: 'rgba(13,17,23,0.97)' }}>
                            <CertParticles />

                            {/* top stripe */}
                            <div className="h-1 w-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan" />

                            <div className="p-8 md:p-10 relative z-10">

                                {/* header row */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: 'linear-gradient(135deg,rgba(180,0,255,0.25),rgba(0,212,255,0.2))',
                                                border: '1px solid rgba(180,0,255,0.45)',
                                                boxShadow: '0 0 28px rgba(180,0,255,0.3)',
                                            }}
                                        >
                                            <FaMedal className="text-2xl" style={{ color: '#ffd343' }} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono tracking-widest uppercase text-neon-purple opacity-80 block mb-0.5">
                                                Open Source Achievement
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                                Kalvium × Mathesar Program
                                            </h3>
                                            <p className="text-sm text-slate-400 mt-0.5 font-mono">
                                                Open Source Contribution Certificate
                                            </p>
                                        </div>
                                    </div>

                                    {/* certified badge */}
                                    <motion.span
                                        animate={{ boxShadow: ['0 0 8px #b400ff55', '0 0 22px #b400ffaa', '0 0 8px #b400ff55'] }}
                                        transition={{ duration: 2.2, repeat: Infinity }}
                                        className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full font-mono flex-shrink-0"
                                        style={{
                                            background: 'rgba(180,0,255,0.12)',
                                            border: '1px solid rgba(180,0,255,0.5)',
                                            color: '#b400ff',
                                        }}
                                    >
                                        <BsStars style={{ fontSize: '0.75rem', color: '#ffd343' }} />
                                        Certified Open Source Contributor
                                    </motion.span>
                                </div>

                                {/* CERTIFICATE IMAGE */}
                                <motion.div
                                    whileHover={{ scale: 1.015 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="relative rounded-2xl overflow-hidden mb-8"
                                    style={{
                                        boxShadow: '0 8px 40px rgba(180,0,255,0.2), 0 0 0 1px rgba(180,0,255,0.2)',
                                    }}
                                >
                                    {/* corner glow accents */}
                                    <div className="absolute top-0 left-0 w-16 h-16 rounded-br-full opacity-40 pointer-events-none"
                                        style={{ background: 'radial-gradient(circle at 0% 0%,rgba(180,0,255,0.6),transparent)' }} />
                                    <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-40 pointer-events-none"
                                        style={{ background: 'radial-gradient(circle at 100% 100%,rgba(0,212,255,0.6),transparent)' }} />

                                    <img
                                        src="/mathesar-certificate.jpeg"
                                        alt="Kalvium × Mathesar Open Source Contribution Program Certificate for Karmjit S G"
                                        className="w-full h-auto block"
                                        style={{ display: 'block' }}
                                    />
                                </motion.div>

                                {/* description */}
                                <p className="text-slate-300 text-sm leading-relaxed mb-7 text-center max-w-2xl mx-auto">
                                    Successfully participated in the 3-week{' '}
                                    <span className="text-neon-purple font-semibold">Kalvium × Mathesar Open Source Contribution Program</span>,
                                    exploring collaborative development workflows, GitHub contribution practices, and
                                    open-source engineering principles.
                                </p>

                                {/* contributions & github */}
                                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                                            Skills & Contributions
                                        </p>
                                        <ul className="space-y-2">
                                            {contributions.map((item) => (
                                                <li key={item.label} className="flex items-center gap-2.5 text-sm text-slate-300">
                                                    <HiCheckCircle className="text-neon-purple flex-shrink-0" />
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* ESoC chip */}
                                        <div className="rounded-xl p-4" style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.18)' }}>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                                                <h4 className="font-bold text-white text-sm">Open Source & ESoC Preparation</h4>
                                            </div>
                                            <p className="text-slate-400 text-xs leading-relaxed mb-3">
                                                Actively preparing for the European Summer of Code (ESoC). Building experience writing technical application answers and understanding contributor expectations.
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {['ESoC', 'Open Source', 'Community Dev', 'Linux', 'Git CLI'].map((tag) => (
                                                    <span key={tag} className="px-2.5 py-0.5 text-xs rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <motion.a
                                            href="https://github.com/karmjitsg09"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all"
                                            style={{
                                                background: 'rgba(180,0,255,0.12)',
                                                border: '1px solid rgba(180,0,255,0.35)',
                                                color: '#b400ff',
                                            }}
                                        >
                                            <FaGithub />
                                            View GitHub Profile
                                        </motion.a>
                                    </div>
                                </div>

                                {/* contribution heatmap */}
                                <div className="rounded-xl p-5" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(0,212,255,0.12)' }}>
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-bold text-white text-sm">Contribution Activity</h4>
                                        <span className="text-xs text-slate-500 font-mono">Last 6 months</span>
                                    </div>
                                    <ContributionGrid />
                                    <div className="flex items-center gap-2 mt-3 justify-end">
                                        <span className="text-xs text-slate-600">Less</span>
                                        {['bg-white/5', 'bg-neon-blue/20', 'bg-neon-blue/40', 'bg-neon-blue/70', 'bg-neon-blue'].map((c) => (
                                            <div key={c} className={`w-3 h-3 rounded-sm ${c}`} />
                                        ))}
                                        <span className="text-xs text-slate-600">More</span>
                                    </div>
                                </div>

                                {/* bottom rule */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-purple/25 to-transparent mt-8" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
