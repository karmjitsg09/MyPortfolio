import React, { Suspense, useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import ParticleBackground from './ParticleBackground';
import { featuredProjects, projects } from './Projects';
import { hackathons } from './Hackathons';

const roles = [
    'Full-Stack Developer',
    'AI/ML Student',
    'Product Builder',
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
                    setTimeout(() => setIsDeleting(true), 1600);
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
        }, isDeleting ? 45 : 85);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex, texts]);

    return (
        <span className="inline-flex items-center">
            <span className="neon-text-cyan">{displayText}</span>
            <span className="cursor neon-text-blue ml-0.5">|</span>
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
            animate={{ y: [0, -12, 0] }}
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

class CanvasErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 flex items-center justify-center animate-pulse">
                        <span className="text-neon-cyan font-mono text-xs">&lt;full-stack /&gt;</span>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default function Hero() {
    // Parallax mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    const heroParallaxX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
    const heroParallaxY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        mouseX.set((e.clientX / innerWidth) - 0.5);
        mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    return (
        <section
            id="hero"
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center overflow-hidden grid-bg"
        >
            <ParticleBackground />

            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #030712 80%)' }}
            />

            {/* Ambient glows */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-neon-blue/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left – Text Content with Entrance Sequence */}
                <motion.div
                    style={{ x: heroParallaxX, y: heroParallaxY }}
                    className="relative z-10"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-blue" />
                        <span className="text-neon-blue text-xs sm:text-sm font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 shadow-sm">
                            2nd-Year B.Tech CSE (AI &amp; ML) · Full-Stack Developer
                        </span>
                    </motion.div>

                    {/* ── Profile photo + Name on one line ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="flex items-center gap-5 mb-4"
                    >
                        <ProfileImage />
                        <div>
                            <h1
                                className="font-black leading-none tracking-tight"
                                style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
                            >
                                <span className="gradient-text">Karmjit</span>{' '}
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
                            <p className="text-sm sm:text-base text-neon-blue font-mono font-medium mt-1">
                                Full-Stack Developer &amp; AI/ML Student
                            </p>
                        </div>
                    </motion.div>

                    {/* Typewriter role */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl sm:text-2xl font-medium text-slate-300 mb-3 h-9"
                    >
                        <TypewriterText texts={roles} />
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
                    >
                        I build <span className="text-white font-semibold">full-stack web applications</span>,{' '}
                        <span className="neon-text-cyan font-medium">AI-powered products</span>, and practical digital experiences using modern web technologies.
                    </motion.p>

                    {/* Hero CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap gap-3 sm:gap-4 mb-8"
                    >
                        <motion.button
                            onClick={() => scrollTo('projects')}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-neon-blue to-neon-purple text-dark font-bold rounded-xl transition-all duration-300 cursor-pointer shadow-lg shadow-neon-blue/25 hover:shadow-neon-blue/50"
                        >
                            ⚡ View Projects
                        </motion.button>
                        <motion.a
                            href="https://github.com/karmjitsg09"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-6 py-3.5 border border-white/20 bg-white/5 text-white font-bold rounded-xl hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all duration-300"
                        >
                            GitHub
                        </motion.a>
                        <motion.button
                            onClick={() => scrollTo('contact')}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-6 py-3.5 border border-neon-blue/60 text-neon-blue font-bold rounded-xl hover:bg-neon-blue/15 hover:border-neon-blue transition-all duration-300 cursor-pointer"
                        >
                            Contact Me
                        </motion.button>
                        <motion.a
                            href="/Resume%201st%20year.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-6 py-3.5 border border-neon-purple/60 text-neon-purple font-bold rounded-xl hover:bg-neon-purple/15 hover:border-neon-purple transition-all duration-300"
                        >
                            Resume ↗
                        </motion.a>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.75 }}
                        className="flex flex-wrap gap-6 sm:gap-10 pt-6 border-t border-white/10"
                    >
                        {[
                            { value: featuredProjects.length, label: 'Featured Full-Stack & AI Projects' },
                            { value: hackathons.length, label: 'Hackathons Participated' },
                            { value: 'Replit × Polaris', label: 'Vibeathon 2025' },
                            { value: 'Kalvium', label: 'Yenepoya CSE (AI/ML)' },
                        ].map((stat) => (
                            <div key={stat.label} className="group">
                                <div className="text-xl sm:text-2xl font-bold neon-text-blue group-hover:text-neon-cyan transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right – 3D Canvas with Parallax Reaction */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-[420px] sm:h-[500px] lg:h-[560px] relative"
                >
                    <CanvasErrorBoundary>
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
                    </CanvasErrorBoundary>

                    {/* Holographic interactive labels */}
                    <motion.div
                        whileHover={{ scale: 1.15, y: -4 }}
                        className="absolute top-8 right-8 glass px-3.5 py-2 rounded-xl animate-float text-xs font-mono neon-text-blue border border-neon-blue/30 shadow-lg cursor-pointer"
                    >
                        &lt;full-stack /&gt;
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.15, y: -4 }}
                        className="absolute bottom-16 left-8 glass px-3.5 py-2 rounded-xl animate-float-reverse text-xs font-mono neon-text-purple border border-neon-purple/30 shadow-lg cursor-pointer"
                    >
                        AI.predict()
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.15, y: -4 }}
                        className="absolute top-1/2 right-4 glass px-3.5 py-2 rounded-xl animate-float-slow text-xs font-mono neon-text-cyan border border-neon-cyan/30 shadow-lg cursor-pointer"
                    >
                        git push origin main
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => scrollTo('about')}
            >
                <span className="text-[11px] text-slate-500 font-mono tracking-wider">SCROLL</span>
                <div className="w-5 h-8 border border-slate-700 rounded-full flex justify-center pt-1.5">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-neon-cyan rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
