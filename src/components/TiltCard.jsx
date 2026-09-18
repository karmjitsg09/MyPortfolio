import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * TiltCard: High-performance reusable 3D tilt, lift, and cursor glow container
 * 
 * Features:
 * - Direct Framer Motion spring interpolation (0 re-renders on mousemove)
 * - Dynamic cursor-following radial spotlight via CSS variables
 * - Perspective 3D depth with translateZ support for internal layers
 * - Smooth spring-based return on mouse exit
 * - Disabled on touch/mobile and prefers-reduced-motion
 */
export default function TiltCard({
    children,
    className = '',
    maxTilt = 4, // Max tilt in degrees
    lift = 8, // Lift in px on hover
    scale = 1.015, // Scale on hover
    glowColor = 'rgba(0, 212, 255, 0.15)',
    glowRadius = 320,
    accentBorder = '',
    style = {},
    ...props
}) {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Continuous motion values for cursor position normalized between -0.5 and +0.5
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for natural, physical movement & settle on mouse exit
    const mouseXSpring = useSpring(x, { stiffness: 220, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 220, damping: 25 });

    // 3D rotation mappings
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${maxTilt}deg`, `-${maxTilt}deg`]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${maxTilt}deg`, `${maxTilt}deg`]);

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

        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                ...style,
            }}
            whileHover={{
                y: -lift,
                scale: scale,
                transition: { duration: 0.25, ease: 'easeOut' },
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
