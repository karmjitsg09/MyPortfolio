import React, { Suspense, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import ParticleBackground from './ParticleBackground';

const roles = [
    'B.Tech Student',
    'Software Developer',
    'AI Enthusiast',
    'Open Source Contributor',
];

function AnimatedSphere() {
    const meshRef = useRef();
    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.3;
    });
    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 80, 80]} />
            <MeshDistortMaterial
                color="#00d4ff"
                distort={0.45}
                speed={2}
                roughness={0}
                metalness={0.8}
                emissive="#0044ff"
                emissiveIntensity={0.4}
            />
        </mesh>
    );
}

function AnimatedTorus({ radius = 2, tube = 0.06, color = '#b400ff', speed = 0.5 }) {
    const meshRef = useRef();
    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * speed;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });
    return (
        <mesh ref={meshRef}>
            <torusGeometry args={[radius, tube, 16, 120]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} roughness={0} metalness={1} />
        </mesh>
    );
}

function TypewriterText({ texts }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const current = texts[currentIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < current.length) {
                    setDisplayText(current.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(current.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((currentIndex + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 90);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex, texts]);

    return (
        <span>
            <span className="neon-text-cyan">{displayText}</span>
            <span className="cursor neon-text-blue">|</span>
        </span>
    );
}

function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Floating Profile Image ── */
function ProfileImage() {
    return (
        <motion.div
            className="relative flex-shrink-0"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.06 }}
        >
            {/* Outer glow ring */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: 'conic-gradient(from 0deg, #00d4ff, #b400ff, #00ffea, #00d4ff)',
                    padding: '3px',
                    borderRadius: '50%',
                    boxShadow: '0 0 30px rgba(0,212,255,0.5), 0 0 60px rgba(0,212,255,0.2), 0 0 100px rgba(180,0,255,0.15)',
                    animation: 'spin 6s linear infinite',
                }}
            />
            {/* Inner photo */}
            <div
                className="relative rounded-full overflow-hidden"
                style={{
                    width: 'clamp(80px, 10vw, 120px)',
                    height: 'clamp(80px, 10vw, 120px)',
                    background: 'conic-gradient(from 0deg, #00d4ff, #b400ff, #00ffea, #00d4ff)',
                    padding: '3px',
                    borderRadius: '50%',
                    boxShadow: '0 0 25px rgba(0,212,255,0.4), 0 0 50px rgba(0,212,255,0.15)',
                }}
            >
                <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                    <img
                        src="/profile.jpg"
                        alt="Karmjit SG"
                        className="w-full h-full rounded-full object-cover object-center"
                        onError={(e) => {
                            // Fallback: show gradient avatar if image missing
                            e.target.style.display = 'none';
                            e.target.parentNode.style.background = 'linear-gradient(135deg, #00d4ff, #b400ff)';
                            e.target.parentNode.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:900;color:#030712;border-radius:50%;">K</div>`;
                        }}
                    />
                </div>
            </div>

            {/* Online status dot */}
            <div
                className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-dark"
                style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }}
            >
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            </div>
        </motion.div>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
            <ParticleBackground />

            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #030712 80%)' }}
            />

            {/* Ambient glows */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12 grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left – Text Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Badge */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-neon-blue" />
                            <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">Developer Portfolio</span>
                        </div>

                        {/* ── Profile photo + Name on one line ── */}
                        <div className="flex items-center gap-5 mb-4">
                            <ProfileImage />
                            <div>
                                <h1 className="font-black leading-none" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>
                                    <span className="gradient-text">Karmjit</span>
                                    {' '}
                                    <span
                                        style={{
                                            background: 'linear-gradient(90deg, #b400ff, #00d4ff)',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        SG
                                    </span>
                                </h1>
                            </div>
                        </div>

                        {/* Typewriter role */}
                        <h2 className="text-xl sm:text-2xl font-medium text-slate-400 mb-3 h-9">
                            <TypewriterText texts={roles} />
                        </h2>

                        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mb-10">
                            Building intelligent software and experimenting with{' '}
                            <span className="neon-text-cyan font-medium">AI-powered systems</span>.
                            First-year B.Tech student passionate about open-source and automation.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                onClick={() => scrollTo('projects')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold rounded-xl transition-all duration-300"
                                style={{ boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
                            >
                                ⚡ View Projects
                            </motion.button>
                            <motion.a
                                href="/Resume%201st%20year.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 px-7 py-3.5 border border-neon-blue text-neon-blue font-bold rounded-xl hover:bg-neon-blue/10 transition-all duration-300"
                            >
                                ↓ Download Resume
                            </motion.a>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 mt-12 pt-8 border-t border-white/5">
                            {[
                                { value: '3+', label: 'Projects' },
                                { value: 'Mathesar', label: 'Open Source' },
                                { value: 'AI & Dev', label: 'Expertise' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl font-bold neon-text-blue">{stat.value}</div>
                                    <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right – 3D Canvas */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-[420px] sm:h-[500px] lg:h-[560px] relative"
                >
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} color="#00d4ff" intensity={2} />
                        <pointLight position={[-10, -10, -10]} color="#b400ff" intensity={1.5} />
                        <pointLight position={[0, 5, -5]} color="#00ffea" intensity={1} />
                        <Suspense fallback={null}>
                            <AnimatedSphere />
                            <AnimatedTorus radius={2} tube={0.06} color="#b400ff" speed={0.5} />
                            <AnimatedTorus radius={2.8} tube={0.04} color="#00ffea" speed={-0.3} />
                        </Suspense>
                        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
                    </Canvas>

                    {/* Holographic labels */}
                    <div className="absolute top-8 right-8 glass px-3 py-2 rounded-lg animate-float text-xs font-mono neon-text-blue">
                        &lt;dev /&gt;
                    </div>
                    <div className="absolute bottom-16 left-8 glass px-3 py-2 rounded-lg animate-float-reverse text-xs font-mono neon-text-purple">
                        AI.init()
                    </div>
                    <div className="absolute top-1/2 right-4 glass px-3 py-2 rounded-lg animate-float-slow text-xs font-mono neon-text-cyan">
                        git push
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-slate-600 font-mono">scroll down</span>
                <div className="w-5 h-8 border border-slate-700 rounded-full flex justify-center pt-1.5">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-neon-blue rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
