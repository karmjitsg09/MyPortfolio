import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [enabled, setEnabled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const cursorX = useSpring(0, { damping: 25, stiffness: 350 });
    const cursorY = useSpring(0, { damping: 25, stiffness: 350 });

    const ringX = useSpring(0, { damping: 20, stiffness: 200 });
    const ringY = useSpring(0, { damping: 20, stiffness: 200 });

    useEffect(() => {
        // Check if device has mouse pointer and user doesn't prefer reduced motion
        const mediaQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
        if (!mediaQuery.matches) return;

        setEnabled(true);

        const handleMouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            ringX.set(e.clientX);
            ringY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('button') ||
                target.closest('a') ||
                target.closest('.cursor-pointer') ||
                target.closest('.card-hover')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, ringX, ringY]);

    if (!enabled) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Small glowing central dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_#00ffea]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Soft trailing aura ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border border-neon-blue/50 pointer-events-none transition-colors duration-200"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovered ? 48 : isClicking ? 20 : 28,
                    height: isHovered ? 48 : isClicking ? 20 : 28,
                    backgroundColor: isHovered ? 'rgba(0, 212, 255, 0.08)' : 'rgba(0, 212, 255, 0.02)',
                    borderColor: isHovered ? 'rgba(0, 255, 234, 0.8)' : 'rgba(0, 212, 255, 0.4)',
                    boxShadow: isHovered ? '0 0 16px rgba(0, 212, 255, 0.3)' : '0 0 6px rgba(0, 212, 255, 0.1)',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            />
        </div>
    );
}
