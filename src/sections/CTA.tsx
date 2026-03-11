import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel border border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
            
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                    Tu marca <br className="md:hidden"/> puede <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-accent to-pink-500">crecer en redes.</span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                    Deja de perder oportunidades de venta usando plantillas y estrategias genéricas. Construyamos juntos el impacto que mereces.
                </p>

                <a 
                    href="https://wa.me/543875709771"
                    target="_blank"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-background rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto"
                >
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    <span>Hablemos por WhatsApp</span>
                </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
