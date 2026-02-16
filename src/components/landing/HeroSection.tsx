import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const timer = setInterval(() => {
            start += Math.ceil(value / 50);
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setDisplayValue(start);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{displayValue.toLocaleString('it-IT')}{suffix}</span>;
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24">
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary tracking-wide">
            Piattaforma AI-Native per il Mercato Energia
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight mb-7"
        >
          Il team che ti manca.
          <br />
          <span className="gradient-text">Senza assumere nessuno.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-[680px] mx-auto mb-12 leading-relaxed"
        >
          Energizzo fattura, risponde ai clienti, prevede i problemi, assicura la compliance e vende di più. Tutto con intelligenza artificiale, tutto in automatico.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap mb-20"
        >
          <motion.a
            href="#cta"
            className="btn-premium inline-flex items-center gap-2 text-base"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Richiedi una Demo
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-foreground liquid-glass transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Scopri le Funzionalità
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-16 flex-wrap"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold gradient-text tracking-tight">
              <AnimatedNumber value={741} />
            </div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-medium">
              Venditori Attivi in Italia
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold gradient-text tracking-tight">
              23,8%
            </div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-medium">
              Tasso di Switching 2024
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold gradient-text tracking-tight">
              -85%
            </div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-medium">
              Costi Operativi
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
