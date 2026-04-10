import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sofía Martínez",
        role: "Dueña de Restaurante",
        image: "https://i.pravatar.cc/150?u=sofia",
        text: "Impacto Creativo transformó nuestras redes. Pasamos de estar estancados a triplicar nuestras reservas en solo 2 meses. El equipo es de otro nivel."
    },
    {
        name: "Carlos Ramírez",
        role: "Director de E-commerce",
        image: "https://i.pravatar.cc/150?u=carlos",
        text: "Su estrategia de contenido es brillante. No solo crecimos en seguidores, sino que realmente empezamos a vender a través de Instagram de forma consistente."
    },
    {
        name: "Andrea Vargas",
        role: "CEO de Clínica Estética",
        image: "https://i.pravatar.cc/150?u=andrea",
        text: "Profesionales, creativos y enfocados en resultados. Entendieron exactamente el tono visual y el impacto que nuestra marca necesitaba transmitir."
    }
];

const container: any = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

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

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-8 flex flex-col relative group shadow-xl"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-10 flex-grow">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 blur group-hover:opacity-100 transition-opacity" />
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
