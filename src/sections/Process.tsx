import { motion } from 'motion/react';
import { Phone, ClipboardList, Lightbulb, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Reunión',
    description: 'Conocemos tu negocio, objetivos y público objetivo.',
    number: '01',
    color: '#3B82F6',
  },
  {
    icon: ClipboardList,
    title: 'Análisis',
    description: 'Hacemos un análisis profundo de tus necesidades.',
    number: '02',
    color: '#D946EF', 
  },
  {
    icon: Lightbulb,
    title: 'Estrategia',
    description: 'Diseñamos un plan personalizado de contenido.',
    number: '03',
    color: '#3B82F6',
  },
  {
    icon: Rocket,
    title: 'Ejecución',
    description: 'Ponemos en marcha y generamos resultados.',
    number: '04',
    color: '#D946EF',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
            Proceso
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-10 md:mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Number badge */}
              <div
                className="absolute -top-6 -left-2 md:-left-6 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl md:text-2xl text-white rounded-2xl z-10 shadow-lg"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>

              {/* Card */}
              <div className="relative h-full glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-8 overflow-hidden shadow-xl">
                {/* Subtle background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500"
                  style={{ backgroundColor: step.color }}
                />

                <step.icon
                  className="w-12 h-12 mb-6 text-white transition-all duration-300 relative z-10"
                  style={{
                    filter: `drop-shadow(0 0 0px ${step.color})`,
                  }}
                  onMouseEnter={(e: React.MouseEvent<SVGSVGElement>) => {
                    e.currentTarget.style.filter = `drop-shadow(0 0 10px ${step.color})`;
                    e.currentTarget.style.color = step.color;
                  }}
                  onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) => {
                    e.currentTarget.style.filter = `drop-shadow(0 0 0px ${step.color})`;
                    e.currentTarget.style.color = 'white';
                  }}
                />
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  {step.description}
                </p>

                {/* Accent line */}
                <div
                  className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Plans info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-panel border border-white/10 rounded-2xl px-8 py-6 hover:border-white/30 transition-all duration-300 mx-auto">
            <p className="text-gray-300 text-lg mb-4">
              Ofrecemos <span className="text-primary-light font-bold">planes mensuales</span>,
              <span className="text-accent font-bold"> servicios individuales</span> y
              <span className="text-white font-bold"> paquetes personalizados</span>
            </p>
            <div className="flex gap-2 justify-center">
              <div className="w-12 h-1 bg-primary-light rounded-full" />
              <div className="w-12 h-1 bg-accent rounded-full" />
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
