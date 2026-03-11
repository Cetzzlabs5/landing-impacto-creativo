import React from 'react';
import { motion } from 'motion/react';
import { Megaphone, PenTool, Lightbulb, BarChart3, TrendingUp, MonitorPlay } from 'lucide-react';

const services = [
  {
    title: "Manejo de Redes Sociales",
    description: "Estrategia integral, creación de contenido, optimización de alcance y campañas en Meta Ads.",
    icon: <MonitorPlay className="w-8 h-8 text-primary-light" />,
    gradient: "from-primary to-blue-500",
    featured: true
  },
  {
    title: "Estrategia Digital",
    description: "Análisis de tu negocio para diseñar la hoja de ruta exacta que multiplicará tus resultados.",
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    gradient: "from-accent to-pink-500"
  },
  {
    title: "Creación de Contenido",
    description: "Videos, gráficas y copys diseñados específicamente para retener la atención y convertir.",
    icon: <PenTool className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "Campañas Publicitarias",
    description: "Anuncios optimizados en Facebook e Instagram Ads para llevar tráfico cualificado a tu perfil o web.",
    icon: <Megaphone className="w-8 h-8 text-orange-400" />,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Branding para Redes",
    description: "Identidad visual coherente que transmita profesionalismo y conecte con tu cliente ideal.",
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Asesorías 1 a 1",
    description: "Para marcas que gestionan sus propias redes pero necesitan guía experta y claridad estratégica.",
    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
    gradient: "from-cyan-500 to-blue-500"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="servicios" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-light font-medium text-sm mb-4 border border-primary/20"
          >
            Nuestros Servicios
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Creatividad que <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500">convierte.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Soluciones integrales diseñadas para que tu marca destaque, conecte y venda en el entorno digital.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] border border-white/10 rounded-[2rem] overflow-hidden"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative group p-8 lg:p-10 flex flex-col h-full"
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              {service.featured && (
                <div className="absolute top-4 right-4 py-1 px-3 bg-white/10 text-[10px] font-bold rounded-full tracking-wider uppercase text-white shadow-sm border border-white/5">
                  Principal
                </div>
              )}

              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left inline-block">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 flex-grow font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
