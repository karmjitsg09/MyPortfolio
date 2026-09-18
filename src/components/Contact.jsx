import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaPaperPlane, FaTerminal } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { LuSparkles, LuCheck, LuCopy } from 'react-icons/lu';
import TiltCard from './TiltCard';

const contacts = [
    { icon: FaPhone, label: 'Phone', value: '+91 9894519018', href: 'tel:+919894519018', color: 'blue' },
    { icon: FaEnvelope, label: 'Email', value: 'sgjitbros@gmail.com', href: 'mailto:sgjitbros@gmail.com', color: 'purple' },
    { icon: FaGithub, label: 'GitHub', value: 'karmjitsg09', href: 'https://github.com/karmjitsg09', color: 'cyan' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'karmjit-sg', href: 'https://www.linkedin.com/in/karmjit-sg-61a09b385', color: 'blue' },
];

const colorMap = {
    blue: { bg: 'bg-neon-blue/10', border: 'border-neon-blue/30', icon: 'text-neon-blue', hover: 'hover:border-neon-blue hover:shadow-neon-blue/25' },
    purple: { bg: 'bg-neon-purple/10', border: 'border-neon-purple/30', icon: 'text-neon-purple', hover: 'hover:border-neon-purple hover:shadow-neon-purple/25' },
    cyan: { bg: 'bg-neon-cyan/10', border: 'border-neon-cyan/30', icon: 'text-neon-cyan', hover: 'hover:border-neon-cyan hover:shadow-neon-cyan/25' },
};

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
        window.location.href = `mailto:sgjitbros@gmail.com?subject=${subject}&body=${body}`;
        setSent(true);
        setTimeout(() => setSent(false), 5000);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('sgjitbros@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 3000);
    };

    return (
        <section id="contact" className="py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">Get In Touch</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
                    </div>
                    <h2 className="section-title gradient-text">Contact &amp; Connect</h2>
                    <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm sm:text-base">
                        Have a project idea, want to collaborate, or explore hiring opportunities? Send a message!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left – Developer Terminal Interface & Contact Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        {/* Terminal UI Card */}
                        <TiltCard
                            maxTilt={3}
                            lift={6}
                            scale={1.01}
                            glowColor="rgba(0, 212, 255, 0.12)"
                            className="glass-strong rounded-3xl p-6 border border-white/15 shadow-2xl relative"
                        >
                            {/* Window Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                                    <FaTerminal className="text-neon-cyan" /> karmjit@developer: ~/contact
                                </span>
                                <div className="w-12" />
                            </div>

                            {/* Terminal Content */}
                            <div className="space-y-3 font-mono text-xs sm:text-sm">
                                <div>
                                    <span className="text-neon-purple font-bold">$</span> <span className="text-slate-300">whoami</span>
                                    <p className="text-neon-cyan font-semibold mt-0.5 pl-3">Karmjit SG</p>
                                </div>
                                <div>
                                    <span className="text-neon-purple font-bold">$</span> <span className="text-slate-300">cat current_role.txt</span>
                                    <p className="text-slate-200 mt-0.5 pl-3">Full-Stack Developer &amp; 2nd-Year B.Tech CSE (AI/ML) Student</p>
                                </div>
                                <div>
                                    <span className="text-neon-purple font-bold">$</span> <span className="text-slate-300">echo $STATUS</span>
                                    <p className="text-emerald-400 font-bold mt-0.5 pl-3 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                                        OPEN TO INTERNSHIPS &amp; FULL-STACK OPPORTUNITIES
                                    </p>
                                </div>
                                <div>
                                    <span className="text-neon-purple font-bold">$</span> <span className="text-slate-300">cat primary_contact.json</span>
                                    <pre className="text-slate-400 text-xs bg-black/40 p-3 rounded-xl mt-1 border border-white/5 overflow-x-auto">
{`{
  "email": "sgjitbros@gmail.com",
  "phone": "+91 9894519018",
  "github": "https://github.com/karmjitsg09",
  "linkedin": "https://www.linkedin.com/in/karmjit-sg-61a09b385"
}`}
                                    </pre>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Direct Contact Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {contacts.map((contact, i) => {
                                const c = colorMap[contact.color];
                                return (
                                    <motion.a
                                        key={contact.label}
                                        href={contact.href}
                                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3, scale: 1.02 }}
                                        className={`flex items-center gap-3.5 p-3.5 rounded-2xl ${c.bg} border ${c.border} ${c.hover} transition-all duration-300 group`}
                                    >
                                        <div className={`w-9 h-9 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                                            <contact.icon className={`text-base ${c.icon}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[10px] font-mono text-slate-400 mb-0.5">{contact.label}</p>
                                            <p className="text-xs font-semibold text-slate-200 truncate">{contact.value}</p>
                                        </div>
                                        <HiExternalLink className="text-slate-500 group-hover:text-neon-cyan transition-colors text-sm" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right – Interactive Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-neon-blue/20 space-y-5 shadow-2xl relative">
                            <div className="flex items-center justify-between pb-3 border-b border-white/5">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <LuSparkles className="text-neon-cyan" /> Send a Direct Message
                                </h3>
                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    className="text-xs font-mono text-slate-400 hover:text-neon-cyan transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-0"
                                >
                                    {copiedEmail ? <LuCheck className="text-emerald-400" /> : <LuCopy />}
                                    {copiedEmail ? 'Copied!' : 'Copy Email'}
                                </button>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    required
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    required
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Hi Karmjit, I'd like to talk about a full-stack developer opportunity..."
                                    required
                                    className="w-full"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold text-sm tracking-wide shadow-lg shadow-neon-blue/25 hover:shadow-neon-blue/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <FaPaperPlane className="text-xs" />
                                {sent ? 'Opening Mail Client...' : 'Send Message'}
                            </motion.button>

                            {sent && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-xs font-mono text-emerald-400 mt-2"
                                >
                                    ✓ Pre-filled email in your client. Send it to reach me directly!
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
