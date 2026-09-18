import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * TiltCard: High-Performance Physical Directional Lift & Magnetic Micro-Shake Container
 * 
 * CORE BEHAVIOR:
 * 1. Normalized Cursor Coordinates (-0.5 to +0.5) drive directional displacement (translateX, translateY)
 *    - TOP-LEFT: Shifts UP + LEFT (translateX: -6px, translateY: -10px)
 *    - TOP-RIGHT: Shifts UP + RIGHT (translateX: +6px, translateY: -10px)
 *    - CENTER: Lifts vertically (translateY: -8px)
 *    - BOTTOM-LEFT / BOTTOM-RIGHT: Shifts diagonally with slight downward offset
 * 2. 3D Tilt: rotateX / rotateY proportional to cursor vector (capped at maxTilt ~3°-5°)
 * 3. Magnetic Micro-Shake: Layered subtle high-frequency physical vibration (±0.4px to ±0.6px)
 *    active only when the cursor is over the panel.
 * 4. Spring-based physics: Zero re-renders on mousemove, smooth return & settle on mouse exit.
 * 5. Touch / Reduced-Motion Safe: Disables shake and tilt on mobile or when prefers-reduced-motion is active.
 */
export default function TiltCard({
    children,
    className = '',
    maxTilt = 4, // Max tilt in degrees (3°-5°)
    maxShiftX = 6, // Max directional X displacement in px
    maxShiftY = 8, // Max directional Y displacement in px
    lift = 8, // Base hover lift in px
    scale = 1.018, // Scale on hover
    shake = true, // Enable magnetic micro-shake
    glowColor = 'rgba(0, 212, 255, 0.15)',
    glowRadius = 340,
    accentBorder = '',
    style = {},
    ...props
}) {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Continuous normalized cursor position (-0.5 to +0.5)
    const normX = useMotionValue(0);
    const normY = useMotionValue(0);

    // Micro-shake motion values layered on top
    const shakeX = useMotionValue(0);
    const shakeY = useMotionValue(0);

    // Damped physical springs for natural directional responsiveness
    const springX = useSpring(normX, { stiffness: 240, damping: 22 });
    const springY = useSpring(normY, { stiffness: 240, damping: 22 });

    // 3D rotation mappings (tilts towards the cursor)
    const rotateX = useTransform(springY, [-0.5, 0.5], [`${maxTilt}deg`, `-${maxTilt}deg`]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [`-${maxTilt}deg`, `${maxTilt}deg`]);

    // Directional displacement mappings:
    // Left cursor (normX = -0.5) -> translateX = -maxShiftX
    // Right cursor (normX = +0.5) -> translateX = +maxShiftX
    const dirX = useTransform(springX, [-0.5, 0.5], [-maxShiftX, maxShiftX]);
    // Top cursor (normY = -0.5) -> translateY = -lift - maxShiftY (highest lift)
    // Bottom cursor (normY = +0.5) -> translateY = -lift + maxShiftY
    const dirY = useTransform(springY, [-0.5, 0.5], [-lift - maxShiftY * 0.4, -lift + maxShiftY * 0.5]);

    // Combined transforms with micro-shake layered on top
    const combinedX = useTransform([dirX, shakeX], ([dx, sx]) => (isHovered ? dx + sx : 0));
    const combinedY = useTransform([dirY, shakeY], ([dy, sy]) => (isHovered ? dy + sy : 0));

    // High-frequency, ultra-subtle physical magnetic micro-shake loop
    useEffect(() => {
        if (!shake || !isHovered) {
            shakeX.set(0);
            shakeY.set(0);
            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion || window.innerWidth < 768) return;

        let frameId;
        let t = 0;

        const loopShake = () => {
            t += 0.35;
            // Combined dual-sine waves for organic, non-monotonous physical jitter (amplitude ±0.45px)
            const sx = (Math.sin(t * 2.7) * 0.35 + Math.cos(t * 4.1) * 0.25);
            const sy = (Math.cos(t * 2.3) * 0.35 + Math.sin(t * 3.7) * 0.25);

            shakeX.set(sx);
            shakeY.set(sy);

            frameId = requestAnimationFrame(loopShake);
        };

        frameId = requestAnimationFrame(loopShake);
        return () => {
            cancelAnimationFrame(frameId);
            shakeX.set(0);
            shakeY.set(0);
        };
    }, [isHovered, shake, shakeX, shakeY]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Set CSS variables for internal radial cursor spotlight
        cardRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
        cardRef.current.style.setProperty('--mouse-y', `${mouseY}px`);

        // Continuous normalized position (-0.5 to +0.5)
        normX.set(mouseX / width - 0.5);
        normY.set(mouseY / height - 0.5);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        normX.set(0);
        normY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                x: combinedX,
                y: combinedY,
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                ...style,
            }}
            whileHover={{
                scale: scale,
                transition: { duration: 0.22, ease: 'easeOut' },
            }}
            whileTap={{
                scale: 0.985,
                transition: { duration: 0.1 },
            }}
            className={`relative group overflow-hidden ${className}`}
            {...props}
        >
            {/* Dynamic Cursor-Following Radial Spotlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit] z-10"
                style={{
                    background: `radial-gradient(${glowRadius}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 80%)`,
                }}
            />

            {/* Optional Top Moving Glow Bar */}
            {accentBorder && (
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${accentBorder} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`} />
            )}

            {children}
        </motion.div>
    );
}
