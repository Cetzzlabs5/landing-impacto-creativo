import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Clock, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            Contacto
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* WhatsApp */}
            <a href="https://wa.me/543875709771" target="_blank" rel="noreferrer" className="glass-panel rounded-2xl p-6 flex items-center gap-6 group hover:border-white/30 transition-all">
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-surface group-hover:bg-white/5 transition-colors">
                <Phone className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">WhatsApp</p>
                <p className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">+54 387 570 9771</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:giulianave81@gmail.com" className="glass-panel rounded-2xl p-6 flex items-center gap-6 group hover:border-white/30 transition-all">
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-surface group-hover:bg-white/5 transition-colors">
                <Mail className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Email</p>
                <p className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">giulianave81@gmail.com</p>
              </div>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/impactocreativo.ar" target="_blank" rel="noreferrer" className="glass-panel rounded-2xl p-6 flex items-center gap-6 group hover:border-white/30 transition-all">
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-surface group-hover:bg-white/5 transition-colors">
                <Instagram className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Instagram</p>
                <p className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">@impactocreativo.ar</p>
              </div>
            </a>

            {/* Bottom Row inside left column: Horarios */}
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:border-white/30 transition-all mt-4">
              {/* Gradient left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gray-400" />
                <h3 className="text-xs text-gray-400 uppercase tracking-widest font-medium">Horarios</h3>
              </div>
              <p className="text-white font-bold mb-1">Lun - Vie: 9:00 - 21:00</p>
              <p className="text-sm text-gray-400">Sáb: Eventos agendados</p>
            </div>
          </motion.div>

          {/* Right Column: CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="glass-panel border-white/20 rounded-[2rem] p-8 md:p-14 h-full flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  ¿Listo para comenzar?
                </h3>
                <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 font-light leading-relaxed">
                  Hablemos de tu proyecto y cómo podemos ayudarte a generar impacto real en tus redes sociales.
                </p>

                <a
                  href="https://wa.me/543875709771"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-background rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <span>Enviar mensaje</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
