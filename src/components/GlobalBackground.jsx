import React, { useEffect, useRef } from 'react';

/**
 * Centralized Global Particle Configuration
 * Smooth, lightweight, GPU-efficient full-viewport floating universe
 */
const GLOBAL_PARTICLE_CONFIG = {
    desktopCount: 170,
    tabletCount: 110,
    mobileCount: 55,
    maxSpeed: 0.6,
    minSpeed: 0.12,
    connectionDistance: 105,
    connectionMaxOpacity: 0.08,
    mouseRadius: 150,
    mouseRepelForce: 0.035,
    specialParticleRatio: 0.06,
};

const PALETTE = [
    { r: 0, g: 212, b: 255 },   // Neon Cyan / Blue
    { r: 180, g: 0, b: 255 },   // Neon Violet / Purple
    { r: 0, g: 255, b: 234 },   // Electric Cyan
    { r: 255, g: 255, b: 255 }, // Digital White
    { r: 236, g: 72, b: 153 },  // Magenta Accent
];

export default function GlobalBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let particles = [];
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const getParticleCount = (w) => {
            if (prefersReducedMotion) return 35;
            if (w < 640) return GLOBAL_PARTICLE_CONFIG.mobileCount;
            if (w < 1024) return GLOBAL_PARTICLE_CONFIG.tabletCount;
            return GLOBAL_PARTICLE_CONFIG.desktopCount;
        };

        const mouse = {
            x: -9999,
            y: -9999,
            isActive: false,
        };

        const handleMouseMove = (e) => {
            if (prefersReducedMotion || width < 768) return;
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.isActive = true;
        };

        const handleMouseLeave = () => {
            mouse.isActive = false;
            mouse.x = -9999;
            mouse.y = -9999;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.body.addEventListener('mouseleave', handleMouseLeave, { passive: true });

        class Particle {
            constructor(w, h, isSpecial = false) {
                this.reset(w, h, isSpecial);
                this.x = Math.random() * w;
                this.y = Math.random() * h;
            }

            reset(w, h, isSpecial = false) {
                this.isSpecial = isSpecial;
                this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];

                // 3 Depth Layers: 0: background (slow, small), 1: midground, 2: foreground
                this.layer = isSpecial ? 2 : Math.random() < 0.52 ? 0 : Math.random() < 0.82 ? 1 : 2;

                if (this.layer === 0) {
                    this.baseRadius = Math.random() * 0.8 + 0.5;
                    this.baseAlpha = Math.random() * 0.22 + 0.12;
                    this.speedMult = 0.45;
                } else if (this.layer === 1) {
                    this.baseRadius = Math.random() * 1.3 + 1.0;
                    this.baseAlpha = Math.random() * 0.32 + 0.22;
                    this.speedMult = 0.75;
                } else {
                    this.baseRadius = Math.random() * 2.0 + 1.6;
                    this.baseAlpha = Math.random() * 0.42 + 0.35;
                    this.speedMult = 1.05;
                }

                this.radius = this.baseRadius;
                this.alpha = this.baseAlpha;

                // Independent 2D vector drift
                const angle = Math.random() * Math.PI * 2;
                const speed = (Math.random() * (GLOBAL_PARTICLE_CONFIG.maxSpeed - GLOBAL_PARTICLE_CONFIG.minSpeed) + GLOBAL_PARTICLE_CONFIG.minSpeed) * this.speedMult;
                this.vx = Math.cos(angle) * (prefersReducedMotion ? 0.05 : speed);
                this.vy = Math.sin(angle) * (prefersReducedMotion ? 0.05 : speed);

                this.wanderAngle = Math.random() * Math.PI * 2;
                this.wanderSpeed = 0.012 + Math.random() * 0.018;

                const shapeRoll = Math.random();
                this.shape = shapeRoll < 0.82 ? 'circle' : shapeRoll < 0.93 ? 'square' : 'diamond';

                this.pulsePhase = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.025 + Math.random() * 0.025;
            }

            update(w, h) {
                if (!prefersReducedMotion) {
                    this.wanderAngle += (Math.random() - 0.5) * this.wanderSpeed;
                    this.vx += Math.cos(this.wanderAngle) * 0.01;
                    this.vy += Math.sin(this.wanderAngle) * 0.01;

                    const maxV = GLOBAL_PARTICLE_CONFIG.maxSpeed * this.speedMult * 1.35;
                    const curSpeed = Math.hypot(this.vx, this.vy);
                    if (curSpeed > maxV) {
                        this.vx = (this.vx / curSpeed) * maxV;
                        this.vy = (this.vy / curSpeed) * maxV;
                    }
                }

                // Smooth mouse repulsion
                if (mouse.isActive && !prefersReducedMotion) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < GLOBAL_PARTICLE_CONFIG.mouseRadius && dist > 1) {
                        const force = (1 - dist / GLOBAL_PARTICLE_CONFIG.mouseRadius) * GLOBAL_PARTICLE_CONFIG.mouseRepelForce;
                        this.vx += (dx / dist) * force;
                        this.vy += (dy / dist) * force;
                    }
                }

                this.x += this.vx;
                this.y += this.vy;

                // Seamless fixed-screen edge wrapping
                const pad = 15;
                if (this.x < -pad) this.x = w + pad;
                if (this.x > w + pad) this.x = -pad;
                if (this.y < -pad) this.y = h + pad;
                if (this.y > h + pad) this.y = -pad;

                // Pulsing energy nodes
                if (this.isSpecial) {
                    this.pulsePhase += this.pulseSpeed;
                    const pulse = (Math.sin(this.pulsePhase) + 1) / 2;
                    this.alpha = this.baseAlpha + pulse * 0.32;
                    this.radius = this.baseRadius + pulse * 1.1;
                }
            }

            draw(context) {
                const { r, g, b } = this.color;
                context.save();

                if ((this.layer === 2 || this.isSpecial) && this.radius > 1.3) {
                    const glowRadius = this.radius * 3.0;
                    const glowGradient = context.createRadialGradient(
                        this.x, this.y, 0,
                        this.x, this.y, glowRadius
                    );
                    glowGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.65})`);
                    glowGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                    context.fillStyle = glowGradient;
                    context.beginPath();
                    context.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
                    context.fill();
                }

                context.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;

                if (this.shape === 'circle') {
                    context.beginPath();
                    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    context.fill();
                } else if (this.shape === 'square') {
                    const size = this.radius * 1.5;
                    context.fillRect(this.x - size / 2, this.y - size / 2, size, size);
                } else if (this.shape === 'diamond') {
                    const size = this.radius * 1.7;
                    context.beginPath();
                    context.moveTo(this.x, this.y - size);
                    context.lineTo(this.x + size, this.y);
                    context.lineTo(this.x, this.y + size);
                    context.lineTo(this.x - size, this.y);
                    context.closePath();
                    context.fill();
                }

                context.restore();
            }
        }

        const initParticles = () => {
            const count = getParticleCount(width);
            const specialCount = Math.floor(count * GLOBAL_PARTICLE_CONFIG.specialParticleRatio);
            particles = [];

            for (let i = 0; i < count; i++) {
                const isSpecial = i < specialCount;
                particles.push(new Particle(width, height, isSpecial));
            }
        };

        initParticles();

        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (!canvas) return;
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                initParticles();
            }, 100);
        };

        window.addEventListener('resize', handleResize, { passive: true });

        // Tab visibility throttling
        let isTabActive = true;
        const handleVisibilityChange = () => {
            isTabActive = !document.hidden;
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        const render = () => {
            if (isTabActive) {
                ctx.clearRect(0, 0, width, height);

                // Draw subtle network lines on tablet/desktop
                if (!prefersReducedMotion && width >= 640) {
                    const maxDist = GLOBAL_PARTICLE_CONFIG.connectionDistance;
                    for (let i = 0; i < particles.length; i++) {
                        const p1 = particles[i];
                        if (p1.layer === 0) continue;

                        for (let j = i + 1; j < particles.length; j++) {
                            const p2 = particles[j];
                            if (p2.layer === 0) continue;

                            const dx = p1.x - p2.x;
                            const dy = p1.y - p2.y;
                            const dist = Math.hypot(dx, dy);

                            if (dist < maxDist) {
                                const lineAlpha = (1 - dist / maxDist) * GLOBAL_PARTICLE_CONFIG.connectionMaxOpacity;
                                ctx.strokeStyle = `rgba(0, 212, 255, ${lineAlpha})`;
                                ctx.lineWidth = 0.55;
                                ctx.beginPath();
                                ctx.moveTo(p1.x, p1.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.stroke();
                            }
                        }
                    }
                }

                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    p.update(width, height);
                    p.draw(ctx);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            {/* Global Futuristic Ambient Atmosphere Layer */}
            <div className="absolute inset-0 bg-[#030712]" />
            
            {/* Ambient Moving Radial Glows */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-neon-blue/8 blur-[120px] pointer-events-none animate-pulse duration-1000" />
            <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-neon-purple/7 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/4 w-[650px] h-[650px] rounded-full bg-neon-cyan/6 blur-[140px] pointer-events-none" />

            {/* Subtle Futuristic Tech Grid */}
            <div 
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #00d4ff 1px, transparent 1px), linear-gradient(to bottom, #00d4ff 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                }}
            />

            {/* Single Global Canvas Particle Renderer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ opacity: 0.95 }}
            />
        </div>
    );
}
