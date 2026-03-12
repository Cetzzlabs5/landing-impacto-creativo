import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="agencia" className="py-24 relative overflow-hidden bg-background text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: Title and Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Nosotros</h2>
            {/* Gradient Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-8 sm:mb-10 rounded-full"></div>

            <div className="space-y-6 sm:space-y-8 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              {/* Paragraph 1 with left border */}
              <div className="relative pl-6 border-l-2 border-primary">
                <p>
                  Impacto Creativo nació con la idea de ayudar a negocios y marcas a tener una <span className="text-primary-light font-semibold">presencia real en redes sociales</span>, una presencia que también genere <span className="text-accent font-semibold">retorno de inversión</span>.
                </p>
              </div>

              <p>
                Como creadora de contenido y estudiante de Comercialización, fui entendiendo cómo funcionan el contenido, el alcance y las estrategias digitales. Eso también me permitió formar alianzas y construir un buen equipo de trabajo.
              </p>

              <p>
                Al mismo tiempo veía muchas marcas con gran potencial que estaban perdiendo oportunidades por no saber cómo manejar sus redes. Así fue como nació Impacto Creativo.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Cards & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 justify-center lg:pt-12"
          >

            {/* Filosofía Card */}
            <div className="glass-panel border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold tracking-widest uppercase text-white">FILOSOFÍA</h3>
                </div>
                <ul className="space-y-4 text-gray-300 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-light mt-1">•</span>
                    Estrategias personalizadas
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-light mt-1">•</span>
                    Resultados medibles
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-light mt-1">•</span>
                    Creatividad con propósito
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-light mt-1">•</span>
                    Retorno de inversión real
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-4 px-4 border-l-4 border-white/10">
              <p className="text-2xl md:text-3xl italic text-gray-200 font-light">
                <span className="text-primary">"</span>Creatividad que genera impacto<span className="text-accent">"</span>
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
