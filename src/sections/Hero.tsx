import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const container: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const item: any = {
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
        <section className="relative min-h-screen flex border-b border-white/10 items-center py-20 overflow-hidden">
            {/* Background Shapes (Subtle) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
                <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full mix-blend-screen filter blur-[150px] animate-blob" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text Content */}
                <motion.div
                    className="text-left pt-10 md:pt-0"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 text-primary-light mb-8 bg-primary/5 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                        <span className="text-xs font-bold tracking-widest uppercase">Agencia de Marketing Digital</span>
                    </motion.div>

                    <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight mb-4 sm:mb-6 leading-none sm:leading-[1.05]">
                        Ideas que <br />
                        generan <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent text-glow">
                            impacto.
                        </span>
                    </motion.h1>

                    <motion.p variants={item} className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-md font-light leading-relaxed">
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

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative max-w-[350px] mx-auto rounded-3xl overflow-hidden glass-panel shadow-2xl group cursor-pointer"
                    onClick={toggleMute}
                >
                    <div className="aspect-[9/16] w-full bg-surface/50 relative">
                        {/* Fallback/Loading state */}
                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                        </div>

                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            src="/video-testimonio.mp4"
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                        />

                        {/* Overlay gradient for better button visibility */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                        {/* Mute/Unmute Toggle Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMute();
                            }}
                            className="absolute bottom-4 right-4 p-3 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors border border-white/10"
                            aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                        >
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
