import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sofía Martínez",
        role: "Dueña de Restaurante",
        image: "https://i.pravatar.cc/150?u=sofia",
        rating: 5,
        text: "Impacto Creativo transformó nuestras redes. Pasamos de estar estancados a triplicar nuestras reservas en solo 2 meses. El equipo es de otro nivel."
    },
    {
        name: "Carlos Ramírez",
        role: "Director de E-commerce",
        image: "https://i.pravatar.cc/150?u=carlos",
        rating: 5,
        text: "Su estrategia de contenido es brillante. No solo crecimos en seguidores, sino que realmente empezamos a vender a través de Instagram de forma consistente."
    },
    {
        name: "Andrea Vargas",
        role: "CEO de Clínica Estética",
        image: "https://i.pravatar.cc/150?u=andrea",
        rating: 4,
        text: "Profesionales, creativos y enfocados en resultados. Entendieron exactamente el tono visual y el impacto que nuestra marca necesitaba transmitir."
    },
    {
        name: "Julieta Gónzalez",
        role: "Fundadora de Tienda Online",
        image: "https://i.pravatar.cc/150?u=julieta",
        rating: 5,
        text: "El diseño publicitario que armaron fue espectacular. Gracias a sus campañas duplicamos nuestras consultas y ventas web en semanas."
    },
    {
        name: "Marcos Del Puerto",
        role: "Gerente de Inmobiliaria",
        image: "https://i.pravatar.cc/150?u=marcos",
        rating: 4,
        text: "Un equipo súper comprometido e innovador. Nos adaptamos rápidamente a la estrategia y ahora generamos prospectos de mucha mayor calidad."
    }
];

export default function Testimonials() {
    return (
        <section id="testimonios" className="py-20 lg:py-28 relative overflow-hidden border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
                        Lo que dicen <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">nuestros clientes</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-10 md:mb-16 mx-auto" />
                </motion.div>

            <div className="relative flex overflow-hidden py-4 group">
                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    className="flex gap-6 md:gap-8 shrink-0 min-w-full pl-6 md:pl-8"
                >
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={`first-${idx}`}
                            className="w-[300px] sm:w-[350px] lg:w-[420px] shrink-0 glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-8 flex flex-col relative shadow-xl"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-accent text-accent' : 'fill-transparent text-gray-700'}`} />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-10 flex-grow whitespace-normal">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover relative z-10 border border-white/10"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-primary-light text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    className="flex gap-6 md:gap-8 shrink-0 min-w-full pl-6 md:pl-8"
                >
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={`second-${idx}`}
                            className="w-[300px] sm:w-[350px] lg:w-[420px] shrink-0 glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-8 flex flex-col relative shadow-xl"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-accent text-accent' : 'fill-transparent text-gray-700'}`} />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-10 flex-grow whitespace-normal">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover relative z-10 border border-white/10"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-primary-light text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            </div>
        </section>
    );
}
