import { motion } from 'motion/react';

export default function FloatingCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: 1, // Appear slightly after initial load
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="fixed bottom-6 right-6 z-[100]"
    >
      <a
        href="https://wa.me/543875709771"
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 z-10"
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white relative z-10"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
        
        {/* Ping animation effect behind the button */}
        <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-40 -z-10" style={{ animationDuration: '3s' }}></span>
      </a>

      {/* Optional tooltip on hover (desktop only) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[calc(100%+16px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        <div className="glass-panel px-4 py-2 rounded-xl text-sm font-medium text-white whitespace-nowrap shadow-xl border border-white/10">
          ¿Hablamos?
          {/* Tooltip triangle indicator */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-surface/80 backdrop-blur-md border-r border-t border-white/10 rotate-45" />
        </div>
      </div>
    </motion.div>
  );
}
