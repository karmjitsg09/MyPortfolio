import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
    const [init, setInit] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        try {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
            }).catch(() => {
                setHasError(true);
            });
        } catch {
            setHasError(true);
        }
    }, []);

    if (hasError || !init) return null;

    try {
        return (
            <Particles
                id="tsparticles"
                className="absolute inset-0 z-0 pointer-events-none"
                options={{
                    background: { color: { value: 'transparent' } },
                    fpsLimit: 60,
                    particles: {
                        color: { value: ['#00d4ff', '#b400ff', '#00ffea'] },
                        links: {
                            color: '#00d4ff',
                            distance: 140,
                            enable: true,
                            opacity: 0.08,
                            width: 1,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: { default: 'bounce' },
                            random: true,
                            speed: 0.6,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 900 },
                            value: 60,
                        },
                        opacity: {
                            value: { min: 0.1, max: 0.4 },
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 0.1,
                            },
                        },
                        shape: { type: 'circle' },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        );
    } catch {
        return null;
    }
}
