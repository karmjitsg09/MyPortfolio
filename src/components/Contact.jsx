import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const contacts = [
    { icon: FaPhone, label: 'Phone', value: '+91 9894519018', href: 'tel:+919894519018', color: 'blue' },
    { icon: FaEnvelope, label: 'Email', value: 'sgjitbros@gmail.com', href: 'mailto:sgjitbros@gmail.com', color: 'purple' },
    { icon: FaGithub, label: 'GitHub', value: 'karmjitsg09', href: 'https://github.com/karmjitsg09', color: 'cyan' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'karmjit-sg', href: 'https://www.linkedin.com/in/karmjit-sg-61a09b385', color: 'blue' },
];

const colorMap = {
    blue: { bg: 'bg-neon-blue/10', border: 'border-neon-blue/30', icon: 'text-neon-blue', hover: 'hover:border-neon-blue hover:shadow-neon-blue' },
    purple: { bg: 'bg-neon-purple/10', border: 'border-neon-purple/30', icon: 'text-neon-purple', hover: 'hover:border-neon-purple hover:shadow-neon-purple' },
    cyan: { bg: 'bg-neon-cyan/10', border: 'border-neon-cyan/30', icon: 'text-neon-cyan', hover: 'hover:border-neon-cyan hover:shadow-neon-cyan' },
};

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real deployment, integrate with EmailJS or similar
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/3 blur-3xl pointer-events-none" />

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
                    <h2 className="section-title gradient-text">Contact Me</h2>
                    <p className="text-slate-400 mt-4 max-w-md mx-auto">
                        Have a project idea, want to collaborate, or just say hi? Send me a message!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left – Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Let's connect</h3>
                        <div className="space-y-4">
                            {contacts.map((contact, i) => {
                                const c = colorMap[contact.color];
                                return (
                                    <motion.a
                                        key={contact.label}
                                        href={contact.href}
                                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        whileHover={{ x: 6 }}
                                        className={`flex items-center gap-4 p-4 rounded-xl ${c.bg} border ${c.border} ${c.hover} transition-all duration-300 group`}
                                    >
                                        <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                                            <contact.icon className={`text-lg ${c.icon}`} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-slate-500 mb-0.5">{contact.label}</p>
                                            <p className="text-sm font-medium text-slate-200">{contact.value}</p>
                                        </div>
                                        <HiExternalLink className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 flex items-center gap-3 p-4 glass rounded-xl border border-green-500/20"
                        >
                            <div className="relative flex-shrink-0">
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Available for collaboration</p>
                                <p className="text-xs text-slate-500">Open to internships, projects, and open-source</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right – Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-neon-blue/15 space-y-5">
                            <div>
                                <label className="block text-sm text-slate-400 mb-2 font-medium">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-slate-400 mb-2 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-slate-400 mb-2 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Hey Karmjit, I'd love to collaborate on..."
                                    rows={5}
                                    required
                                    className="resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold text-sm hover:shadow-neon-blue-lg transition-all duration-300"
                            >
                                {sent ? (
                                    <>✦ Message Sent!</>
                                ) : (
                                    <><FaPaperPlane /> Send Message</>
                                )}
                            </motion.button>

                            {sent && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center text-sm text-green-400"
                                >
                                    Thanks! I'll get back to you soon.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
