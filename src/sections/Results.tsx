import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    name: "Parrillada El Bagual",
    instagram: "@parrilladaelbagual",
    url: "https://instagram.com/parrilladaelbagual",
    description: (
      <>
        Comenzamos con <strong>@parrilladaelbagual</strong> cuando tenían
        aproximadamente <span className="text-primary-light font-semibold">1,600 seguidores</span>. Hoy en día la cuenta tiene casi
        <span className="text-accent font-semibold"> 11,000 seguidores</span> y un notable buen algoritmo en el alcance de
        cada video.
      </>
    ),
    stats: {
      inicio: "1.6K",
      actual: "11K",
      crecimiento: "+587%"
    }
  }
  // {
  //   name: "Inmobiliaria Norte",
  //   instagram: "@inmobnorte",
  //   url: "https://instagram.com/",
  //   description: (
  //     <>
  //       Para <strong>@inmobnorte</strong>, el desafío era generar contactos calificados. Pasamos de <span className="text-primary-light font-semibold">0 consultas mensuales</span> a un promedio de
  //       <span className="text-accent font-semibold"> 45 leads mensuales</span> construyendo una comunidad sólida de inversores locales con pauta digital.
  //     </>
  //   ),
  //   stats: {
  //     inicio: "0",
  //     actual: "45/mes",
  //     crecimiento: "Leads"
  //   }
  // }
];

export default function Results() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const activeCase = caseStudies[currentIndex];

  return (
    <section id="resultados" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white"
            >
              Resultados
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full origin-left"
            />
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors glass-panel"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-gray-400 font-medium tracking-widest text-sm w-12 text-center">
              {currentIndex + 1} / {caseStudies.length}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors glass-panel"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left Column - Details */}
              <div className="relative pl-8 my-8 md:my-0">
                {/* Gradient Border Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-accent rounded-full" />

                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{activeCase.name}</h3>
                </div>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                  {activeCase.description}
                </p>
                <a
                  href={activeCase.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-white/10 text-background hover:scale-[1.02] transition-all font-bold rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  Ver Instagram
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </a>
              </div>

              {/* Right Column - Stats Grid matching the image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* INICIO */}
                <div className="glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-4 relative z-10">
                    Inicio
                  </div>
                  <div className="text-5xl font-black mb-2 tracking-tight text-white relative z-10">
                    {activeCase.stats.inicio}
                  </div>
                  <div className="h-[3px] w-8 bg-primary rounded-full mt-2 relative z-10" />
                </div>

                {/* ACTUAL */}
                <div className="glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-4 relative z-10">
                    Actual
                  </div>
                  <div className="text-5xl font-black mb-2 tracking-tight text-white relative z-10">
                    {activeCase.stats.actual}
                  </div>
                  <div className="h-[3px] w-8 bg-accent rounded-full mt-2 relative z-10" />
                </div>

                {/* CRECIMIENTO TOTAL */}
                <div className="glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-8 sm:col-span-2 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-4 relative z-10">
                    Crecimiento Total
                  </div>
                  <div className="text-6xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent relative z-10">
                    {activeCase.stats.crecimiento}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
