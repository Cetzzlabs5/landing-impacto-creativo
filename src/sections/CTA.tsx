import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Clock, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function CTA() {
  return (
    <section id="contacto" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
            Contacto
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-10 md:mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 h-full"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/543875709771"
              target="_blank"
              rel="noreferrer"
              className="glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-6 flex flex-1 items-center gap-6 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-surface group-hover:bg-white/5 transition-colors">
                <Phone className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">WhatsApp</p>
                <p className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">+54 387 570 9771</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:giulianave81@gmail.com"
              className="glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-6 flex flex-1 items-center gap-6 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-surface group-hover:bg-white/5 transition-colors">
                <Mail className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Email</p>
                <p className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">giulianave81@gmail.com</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/impactocreativo.ar"
              target="_blank"
              rel="noreferrer"
              className="glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-6 flex flex-1 items-center gap-6 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-surface group-hover:bg-white/5 transition-colors">
                <Instagram className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Instagram</p>
                <p className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">@impactocreativo.ar</p>
              </div>
            </a>

            {/* Horarios */}
            <div className="glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-6 flex-1 relative overflow-hidden group shadow-xl">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gray-400" />
                <h3 className="text-xs text-gray-400 uppercase tracking-widest font-medium">Horarios</h3>
              </div>
              <p className="text-white font-bold mb-1">Lun - Vie: 9:00 - 21:00</p>
              <p className="text-sm text-gray-400">Sáb: Eventos agendados</p>
            </div>
          </motion.div>

          {/* Right Column: WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <CTAForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── Services list ─── */
export const SERVICES = [
  'Manejo de redes sociales',
  'Estrategia digital',
  'Creación de contenido',
  'Campañas publicitarias',
  'Diseño y desarrollo web',
  'Asesoría 1 a 1',
  'Otros',
];

/* ─── Form component ─── */
function CTAForm() {
  const [selectedService, setSelectedService] = useState('');
  const selectRef = useRef<HTMLSelectElement>(null);

  // Listen for the custom event dispatched by the Services section
  useEffect(() => {
    function onSelectService(e: Event) {
      const value = (e as CustomEvent<string>).detail;
      if (SERVICES.includes(value)) {
        setSelectedService(value);
        // Small delay so the scroll finishes before we focus
        setTimeout(() => selectRef.current?.focus(), 400);
      }
    }
    window.addEventListener('selectService', onSelectService);
    return () => window.removeEventListener('selectService', onSelectService);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const nombre = data.get('nombre') as string;
    const apellido = data.get('apellido') as string;
    const negocio = data.get('negocio') as string;
    const servicio = data.get('servicio') as string;
    const descripcion = data.get('descripcion') as string;

    const mensaje =
      `¡Hola! Me contacto desde la web de Impacto Creativo.\n\n` +
      `Nombre: ${nombre} ${apellido}\n` +
      `Negocio: ${negocio}\n` +
      `Servicio de interés: ${servicio}\n` +
      `Descripción:\n${descripcion}`;

    const url = `https://wa.me/543875709771?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank', 'noreferrer');
  }

  const inputBase =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 ' +
    'focus:outline-none focus:border-primary/60 focus:bg-white/[0.08] transition-all duration-200 text-sm';

  return (
    <div className="glass-panel border border-white/10 hover:border-primary/30 transition-colors duration-500 rounded-3xl p-8 md:p-10 h-full relative overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-1 tracking-tight">¿Listo para comenzar?</h3>
        <p className="text-gray-400 text-sm mb-7 font-light leading-relaxed">
          Completá el formulario y te respondemos por WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Nombre + Apellido */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-nombre" className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                Nombre
              </label>
              <input
                id="cta-nombre"
                name="nombre"
                type="text"
                required
                placeholder="Tu nombre"
                className={inputBase}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-apellido" className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                Apellido
              </label>
              <input
                id="cta-apellido"
                name="apellido"
                type="text"
                required
                placeholder="Tu apellido"
                className={inputBase}
              />
            </div>
          </div>

          {/* Negocio */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cta-negocio" className="text-xs text-gray-400 uppercase tracking-widest font-medium">
              Nombre del negocio
            </label>
            <input
              id="cta-negocio"
              name="negocio"
              type="text"
              required
              placeholder="Nombre de tu negocio"
              className={inputBase}
            />
          </div>

          {/* Servicio */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cta-servicio" className="text-xs text-gray-400 uppercase tracking-widest font-medium">
              Servicio de interés
            </label>
            <select
              ref={selectRef}
              id="cta-servicio"
              name="servicio"
              required
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className={`${inputBase} appearance-none cursor-pointer`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
              }}
            >
              <option value="" disabled className="bg-zinc-900 text-gray-500">
                Seleccioná un servicio…
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s} className="bg-zinc-900 text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cta-descripcion" className="text-xs text-gray-400 uppercase tracking-widest font-medium">
              Descripción de tu idea o problema
            </label>
            <textarea
              id="cta-descripcion"
              name="descripcion"
              required
              rows={4}
              placeholder="Contanos brevemente qué necesitás o qué estás buscando lograr…"
              className={`${inputBase} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-background rounded-full font-bold text-base hover:scale-[1.03] active:scale-100 transition-transform duration-300 w-full shadow-[0_0_24px_rgba(255,255,255,0.12)] cursor-pointer"
          >
            <span>Enviar por WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </button>

        </form>
      </div>
    </div>
  );
}
