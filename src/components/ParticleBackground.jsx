import React, { useEffect, useRef } from 'react';

/**
 * Centralized Particle Configuration
 * Easy to tune density, speed, sizes, and interactive behavior
 */
const PARTICLE_CONFIG = {
    desktopCount: 180,
    tabletCount: 110,
    mobileCount: 55,
    maxSpeed: 0.75,
    minSpeed: 0.15,
    connectionDistance: 110,
    connectionMaxOpacity: 0.09,
    mouseRadius: 140,
    mouseRepelForce: 0.04, // Smooth subtle deflection
    specialParticleRatio: 0.06, // ~6% are pulsing energy particles
};

// Cyberpunk color palette for particles
const PALETTE = [
    { r: 0, g: 212, b: 255 },   // Neon Cyan / Blue
    { r: 180, g: 0, b: 255 },   // Neon Violet / Purple
    { r: 0, g: 255, b: 234 },   // Electric Cyan
    { r: 255, g: 255, b: 255 }, // Digital White
    { r: 236, g: 72, b: 153 },  // Magenta Accent
];

export default function ParticleBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let particles = [];
        let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
        let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

        // Check prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Determine particle count based on screen width
        const getParticleCount = (w) => {
            if (prefersReducedMotion) return 40;
            if (w < 640) return PARTICLE_CONFIG.mobileCount;
            if (w < 1024) return PARTICLE_CONFIG.tabletCount;
            return PARTICLE_CONFIG.desktopCount;
        };

        // Track mouse position within hero
        const mouse = {
            x: -9999,
            y: -9999,
            isActive: false,
        };

        const handleMouseMove = (e) => {
            if (prefersReducedMotion || width < 768) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.isActive = true;
        };

        const handleMouseLeave = () => {
            mouse.isActive = false;
            mouse.x = -9999;
            mouse.y = -9999;
        };

        const heroElement = canvas.closest('#hero') || canvas.parentElement;
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove, { passive: true });
            heroElement.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        }

        // Particle Class
        class Particle {
            constructor(w, h, isSpecial = false) {
                this.reset(w, h, isSpecial);
                // Distribute initial positions randomly across the full viewport
                this.x = Math.random() * w;
                this.y = Math.random() * h;
            }

            reset(w, h, isSpecial = false) {
                this.isSpecial = isSpecial;
                this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];

                // 3 Depth Layers: 0: background (slow, small), 1: midground, 2: foreground
                this.layer = isSpecial ? 2 : Math.random() < 0.5 ? 0 : Math.random() < 0.8 ? 1 : 2;

                if (this.layer === 0) {
                    this.baseRadius = Math.random() * 0.9 + 0.6;
                    this.baseAlpha = Math.random() * 0.25 + 0.15;
                    this.speedMult = 0.45;
                } else if (this.layer === 1) {
                    this.baseRadius = Math.random() * 1.4 + 1.1;
                    this.baseAlpha = Math.random() * 0.35 + 0.25;
                    this.speedMult = 0.8;
                } else {
                    this.baseRadius = Math.random() * 2.2 + 1.8;
                    this.baseAlpha = Math.random() * 0.45 + 0.4;
                    this.speedMult = 1.1;
                }

                this.radius = this.baseRadius;
                this.alpha = this.baseAlpha;

                // Independent velocity with 2D free drift
                const angle = Math.random() * Math.PI * 2;
                const speed = (Math.random() * (PARTICLE_CONFIG.maxSpeed - PARTICLE_CONFIG.minSpeed) + PARTICLE_CONFIG.minSpeed) * this.speedMult;
                this.vx = Math.cos(angle) * (prefersReducedMotion ? 0.08 : speed);
                this.vy = Math.sin(angle) * (prefersReducedMotion ? 0.08 : speed);

                // Organic wandering / noise drift attributes
                this.wanderAngle = Math.random() * Math.PI * 2;
                this.wanderSpeed = 0.015 + Math.random() * 0.02;

                // Shapes: 80% circle, 12% rounded digital node, 8% diamond star
                const shapeRoll = Math.random();
                this.shape = shapeRoll < 0.8 ? 'circle' : shapeRoll < 0.92 ? 'square' : 'diamond';

                // Pulsing energy behavior for special particles
                this.pulsePhase = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.03 + Math.random() * 0.03;
            }

            update(w, h) {
                // Organic smooth wander (slowly shifting trajectory)
                if (!prefersReducedMotion) {
                    this.wanderAngle += (Math.random() - 0.5) * this.wanderSpeed;
                    this.vx += Math.cos(this.wanderAngle) * 0.012;
                    this.vy += Math.sin(this.wanderAngle) * 0.012;

                    // Cap maximum velocity
                    const maxV = PARTICLE_CONFIG.maxSpeed * this.speedMult * 1.4;
                    const curSpeed = Math.hypot(this.vx, this.vy);
                    if (curSpeed > maxV) {
                        this.vx = (this.vx / curSpeed) * maxV;
                        this.vy = (this.vy / curSpeed) * maxV;
                    }
                }

                // Mouse interaction: subtle gentle deflection
                if (mouse.isActive && !prefersReducedMotion) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < PARTICLE_CONFIG.mouseRadius && dist > 1) {
                        const force = (1 - dist / PARTICLE_CONFIG.mouseRadius) * PARTICLE_CONFIG.mouseRepelForce;
                        this.vx += (dx / dist) * force;
                        this.vy += (dy / dist) * force;
                    }
                }

                // Apply position
                this.x += this.vx;
                this.y += this.vy;

                // Screen boundary wrapping without teleport glitches
                const pad = 15;
                if (this.x < -pad) this.x = w + pad;
                if (this.x > w + pad) this.x = -pad;
                if (this.y < -pad) this.y = h + pad;
                if (this.y > h + pad) this.y = -pad;

                // Energy pulse for special particles
                if (this.isSpecial) {
                    this.pulsePhase += this.pulseSpeed;
                    const pulse = (Math.sin(this.pulsePhase) + 1) / 2; // 0 to 1
                    this.alpha = this.baseAlpha + pulse * 0.35;
                    this.radius = this.baseRadius + pulse * 1.2;
                }
            }

            draw(context) {
                const { r, g, b } = this.color;
                context.save();

                // Subtle radial glow for foreground or special particles
                if ((this.layer === 2 || this.isSpecial) && this.radius > 1.4) {
                    const glowRadius = this.radius * 3.2;
                    const glowGradient = context.createRadialGradient(
                        this.x, this.y, 0,
                        this.x, this.y, glowRadius
                    );
                    glowGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.7})`);
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
                    const size = this.radius * 1.6;
                    context.fillRect(this.x - size / 2, this.y - size / 2, size, size);
                } else if (this.shape === 'diamond') {
                    const size = this.radius * 1.8;
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

        // Initialize particle array
        const initParticles = () => {
            const count = getParticleCount(width);
            const specialCount = Math.floor(count * PARTICLE_CONFIG.specialParticleRatio);
            particles = [];

            for (let i = 0; i < count; i++) {
                const isSpecial = i < specialCount;
                particles.push(new Particle(width, height, isSpecial));
            }
        };

        initParticles();

        // Resize handler with debounce
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (!canvas) return;
                width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
                height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
                initParticles();
            }, 100);
        };

        window.addEventListener('resize', handleResize, { passive: true });

        // Animation Loop
        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Connect nearby midground and foreground particles with subtle lines
            if (!prefersReducedMotion && width >= 640) {
                const maxDist = PARTICLE_CONFIG.connectionDistance;
                for (let i = 0; i < particles.length; i++) {
                    const p1 = particles[i];
                    if (p1.layer === 0) continue; // Skip distant particles for cleaner look & speed

                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        if (p2.layer === 0) continue;

                        const dx = p1.x - p2.x;
                        const dy = p1.y - p2.y;
                        const dist = Math.hypot(dx, dy);

                        if (dist < maxDist) {
                            const lineAlpha = (1 - dist / maxDist) * PARTICLE_CONFIG.connectionMaxOpacity;
                            ctx.strokeStyle = `rgba(0, 212, 255, ${lineAlpha})`;
                            ctx.lineWidth = 0.65;
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Update & draw each particle
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update(width, height);
                p.draw(ctx);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove);
                heroElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.92 }}
            aria-hidden="true"
        />
    );
}
