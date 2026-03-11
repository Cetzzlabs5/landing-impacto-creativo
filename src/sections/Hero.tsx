import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    // SVG Line Animation Variants
    const pathVariants: any = {
        hidden: { pathLength: 0, opacity: 0 },
        show: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
            }
        }
    };

    const dotVariants: any = {
        hidden: { opacity: 0, scale: 0 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 2.5,
                type: "spring",
                stiffness: 200,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3
            }
        }
    };

    const tooltipVariants: any = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: 2.7,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3.2
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Shapes (Subtle) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
                <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full mix-blend-screen filter blur-[150px] animate-blob" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text Content */}
                <motion.div
                    className="text-left"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 text-primary-light mb-8 bg-primary/5">
                        <span className="text-xs font-bold tracking-widest uppercase">Digital Marketing Agency</span>
                    </motion.div>

                    <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-6 leading-[1.05]">
                        Ideas que <br />
                        generan <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent text-glow">
                            impacto.
                        </span>
                    </motion.h1>

                    <motion.p variants={item} className="text-lg text-gray-400 mb-10 max-w-md font-light leading-relaxed">
                        Tu marca con una presencia real y un retorno de inversión optimizado. Transformamos audiencias en clientes leales.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="https://wa.me/543875709771"
                            target="_blank"
                            className="relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-base hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto text-center shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        >
                            Impulsa tu marca ahora
                        </a>

                        <a
                            href="#servicios"
                            className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto font-medium text-base text-center"
                        >
                            Nuestros Servicios
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column: Animated Graphic */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden lg:flex justify-end items-center relative h-[500px] w-full"
                >
                    {/* The SVG curve mimicking an upward growth chart */}
                    <div className="relative w-full h-full max-w-[500px]">
                        <svg viewBox="0 0 400 300" className="w-full h-full absolute inset-0 overflow-visible">
                            {/* Subtle grid lines for the chart background */}
                            <line x1="0" y1="250" x2="400" y2="250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                            <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                            <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                            {/* The Animated Line */}
                            <motion.path
                                d="M 20 250 Q 250 250, 360 40"
                                fill="transparent"
                                stroke="url(#lineGradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                variants={pathVariants}
                                initial="hidden"
                                animate="show"
                                style={{ filter: 'drop-shadow(0px 0px 8px rgba(37, 99, 235, 0.5))' }}
                            />

                            {/* Gradient Definition */}
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3B82F6" /> {/* Primary Light */}
                                    <stop offset="100%" stopColor="#D946EF" /> {/* Pink/Fuchsia Accent */}
                                </linearGradient>
                            </defs>

                            {/* End Dot */}
                            <motion.circle
                                cx="360"
                                cy="40"
                                r="6"
                                fill="#D946EF"
                                variants={dotVariants}
                                initial="hidden"
                                animate="show"
                                style={{ filter: 'drop-shadow(0px 0px 10px rgba(217, 70, 239, 0.8))' }}
                            />
                        </svg>

                        {/* Floating Tooltip at the end of the line */}
                        <motion.div
                            variants={tooltipVariants}
                            initial="hidden"
                            animate="show"
                            className="absolute top-[80px] right-[-20px] bg-surface border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-md z-20"
                        >
                            <div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mb-1">ROI Mensual</div>
                            <div className="text-2xl font-black text-primary-light">+240%</div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
