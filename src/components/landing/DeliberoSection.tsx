import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Scale, Bot, Bell, Zap, TrendingDown, Activity, ChevronLeft, ChevronRight, Calculator, BarChart3, Settings2, FileSignature, ShieldCheck, Users, Code, CheckCircle2 } from "lucide-react";

const slides = [
  {
    badge: { icon: Scale, label: "Delibero by Energizzo" },
    title: (
      <>
        Le delibere ARERA,
        <br />
        <span className="gradient-text">analizzate dall'AI.</span>
      </>
    ),
    description:
      "Monitoriamo le delibere ARERA e le analizziamo con intelligenza artificiale. Riassunti, punti salienti e aggiornamenti tariffari per operatori energia, in pochi secondi.",
    cta: { label: "Esplora Delibero", href: "https://delibero.energizzo.it" },
    features: [
      {
        icon: Bot,
        title: "Analisi AI",
        desc: "Ogni delibera viene analizzata e riassunta automaticamente dall'intelligenza artificiale.",
      },
      {
        icon: Scale,
        title: "ARERA Compliant",
        desc: "Monitoraggio costante delle delibere per energia elettrica, gas e aggiornamenti tariffari.",
      },
      {
        icon: Bell,
        title: "Notifiche in tempo reale",
        desc: "I clienti Energizzo ricevono aggiornamenti automatici su nuove delibere e variazioni tariffarie.",
      },
    ],
  },
  {
    badge: { icon: Zap, label: "Dispacciamento by Energizzo" },
    title: (
      <>
        Il dispacciamento,
        <br />
        <span className="gradient-text">intelligente.</span>
      </>
    ),
    description:
      "Ottimizza i costi di dispacciamento riducendo gli oneri in bolletta legati a sbilanciamenti, uplift e corrispettivi di sistema — voci spesso trascurate che incidono sul costo finale dell'energia.",
    cta: { label: "Scopri di più", href: "https://dispacciamento.energizzo.it" },
    features: [
      {
        icon: TrendingDown,
        title: "-18% costi medi",
        desc: "Riduzione media dei costi di dispacciamento grazie all'ottimizzazione automatica degli sbilanciamenti.",
      },
      {
        icon: Activity,
        title: "Monitoraggio real-time",
        desc: "Uplift e corrispettivi di sistema monitorati in tempo reale per decisioni tempestive.",
      },
      {
        icon: Scale,
        title: "ARERA Compliant",
        desc: "Analisi conforme alle normative ARERA per energia elettrica e gestione del dispacciamento.",
      },
    ],
  },
  {
    badge: { icon: BarChart3, label: "Pricing Engine by Energizzo" },
    title: (
      <>
        Il mercato energia,
        <br />
        <span className="gradient-text">sotto controllo.</span>
      </>
    ),
    description:
      "Pricing Engine ti offre report mensili completi su prezzi all'ingrosso, indici PUN, PSV, TTF, componenti ARERA, futures e oneri di sistema — tutto in un unico strumento per costruire offerte competitive.",
    cta: { label: "Scopri Pricing Engine", href: "https://pricingengine.energizzo.it" },
    features: [
      {
        icon: BarChart3,
        title: "PUN, PSV, TTF aggiornati",
        desc: "Andamento mensile dei principali indici di mercato luce e gas con variazioni congiunturali e tendenziali.",
      },
      {
        icon: Calculator,
        title: "Componenti ARERA integrate",
        desc: "Oneri di sistema, trasporto, dispacciamento e tutte le voci tariffarie aggiornate per costruire offerte precise.",
      },
      {
        icon: Settings2,
        title: "Futures e previsioni",
        desc: "Previsioni trimestrali sui prezzi energetici per anticipare i trend e ottimizzare la strategia commerciale.",
      },
    ],
  },
  {
    badge: { icon: FileSignature, label: "OTP by Energizzo" },
    title: (
      <>
        Firma elettronica,
        <br />
        <span className="gradient-text">senza abbonamento.</span>
      </>
    ),
    description:
      "Fai firmare contratti energia e gas con Firma Elettronica Semplice (FES) e verifica OTP. Paghi solo a consumo, senza abbonamenti né vincoli — con utenti illimitati e API gratuite per integrare il tuo gestionale.",
    cta: { label: "Scopri OTP", href: "https://otp.energizzo.it" },
    features: [
      {
        icon: ShieldCheck,
        title: "FES con valore legale",
        desc: "Firma Elettronica Semplice con verifica OTP via SMS, perfetta per contratti luce e gas con pieno valore legale.",
      },
      {
        icon: Users,
        title: "Utenti illimitati",
        desc: "Nessun costo per utenze aggiuntive. Credito centralizzato e condiviso tra tutti gli operatori della tua azienda.",
      },
      {
        icon: Code,
        title: "API gratuite",
        desc: "Integra la firma elettronica nel tuo gestionale tramite API REST gratuite, senza costi aggiuntivi.",
      },
    ],
  },
];

export const DeliberoSection = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="liquid-glass-card-lg p-8 md:p-14 lg:p-20 relative">
          {/* Navigation dots + arrows */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => goTo(current - 1)}
              className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Slide precedente"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Vai alla slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(current + 1)}
              className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Slide successiva"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16"
            >
              {/* Left — Text */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border-primary/30 mb-6">
                  <slide.badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs md:text-sm font-medium text-primary tracking-wide">
                    {slide.badge.label}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight mb-5">
                  {slide.title}
                </h2>

                <p className="text-base md:text-lg text-muted-foreground max-w-[540px] leading-relaxed mb-8 text-balance">
                  {slide.description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <motion.a
                    href={slide.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium inline-flex items-center gap-2 text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {slide.cta.label}
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 mt-4">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-primary">
                    Incluso nativamente nel software Energizzo
                  </span>
                </div>
              </div>

              {/* Right — Feature pills */}
              <div className="lg:w-[360px] xl:w-[400px] shrink-0 flex flex-col gap-4">
                {slide.features.map((item, i) => (
                  <div
                    key={i}
                    className="liquid-glass-card-sm p-5 md:p-6 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
