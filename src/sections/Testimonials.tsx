import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Testimonials() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-background pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
                Lo que dicen de nosotros
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg mb-12"
            >
                El impacto real contado por las marcas que ya trabajan con nuestro equipo.
            </motion.p>
            
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
