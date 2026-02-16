import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            // Easing: decelerate
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            current = value * eased;
            if (step >= steps) {
              current = value;
              clearInterval(timer);
            }
            setDisplayValue(current);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const formatted = decimals > 0
    ? displayValue.toFixed(decimals).replace('.', ',')
    : Math.round(displayValue).toLocaleString('it-IT');

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full liquid-glass border-primary/30 mb-6 md:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-primary tracking-wide">
            Piattaforma AI-Native per il Mercato Energia
          </span>
        </motion.div>

        {/* Hero badge - liquid glass */}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tight mb-5 md:mb-7"
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
          className="text-base md:text-xl text-muted-foreground max-w-[680px] mx-auto mb-8 md:mb-12 leading-relaxed px-2"
        >
          Energizzo fattura, risponde ai clienti, prevede i problemi, assicura la compliance e vende di più. Tutto con intelligenza artificiale, tutto in automatico.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-3 md:gap-4 justify-center flex-wrap mb-12 md:mb-20"
        >
          <motion.a
            href="#cta"
            className="btn-premium inline-flex items-center gap-2 text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Richiedi una Demo
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base text-foreground liquid-glass transition-all duration-300"
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto"
        >
          {[
            { value: <AnimatedNumber value={741} />, label: "Venditori attivi in Italia nel 2024. Erano 806 nel 2022.", color: "text-primary" },
            { value: <AnimatedNumber value={23.8} decimals={1} suffix="%" />, label: "Tasso di switching 2024. 1 cliente su 4 ha cambiato fornitore.", color: "text-amber-400" },
            { value: <AnimatedNumber value={30.5} decimals={1} suffix="M" />, label: "Punti di prelievo domestici nel mercato italiano.", color: "text-emerald-400" },
            { value: <AnimatedNumber value={108.5} decimals={1} />, label: "€/MWh il PUN medio 2024. Francia: 58. Spagna: 63.", color: "text-blue-400" },
          ].map((stat, i) => (
            <div key={i} className="liquid-glass-card-sm p-4 md:p-8 text-center">
              <div className={`text-2xl md:text-4xl font-black tracking-tight mb-2 md:mb-3 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xs text-muted-foreground/50 mt-6 text-center"
        >
          Fonte: ARERA — Relazione Annuale 2025
        </motion.p>
      </div>
    </section>
  );
};
