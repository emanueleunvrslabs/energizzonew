import { motion } from "framer-motion";
import {
  Smartphone,
  ScanLine,
  Brain,
  FileSignature,
  BarChart3,
  Receipt,
  Gauge,
  HeadphonesIcon,
  Zap,
  Timer,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Onboarding in 60 secondi",
    desc: "Il cliente carica una foto o PDF della bolletta del precedente fornitore. L'AI estrae tutti i dati in automatico.",
  },
  {
    icon: Brain,
    title: "Simulazione risparmio AI",
    desc: "L'intelligenza artificiale analizza i consumi e calcola una simulazione di risparmio con le tariffe del nuovo fornitore.",
  },
  {
    icon: ScanLine,
    title: "OCR e dati automatici",
    desc: "Dati anagrafici, POD/PDR, consumi e tutte le informazioni necessarie vengono estratti e compilati automaticamente.",
  },
  {
    icon: FileSignature,
    title: "Firma OTP integrata",
    desc: "Contratto firmato digitalmente con Firma Elettronica Semplice e verifica OTP, con pieno valore legale.",
  },
  {
    icon: BarChart3,
    title: "Visualizzazione consumi",
    desc: "I clienti finali consultano i propri consumi in tempo reale con grafici chiari e intuitivi.",
  },
  {
    icon: Receipt,
    title: "Bollette e pagamenti",
    desc: "Accesso a tutte le bollette, storico pagamenti e notifiche di scadenza direttamente dall'app.",
  },
  {
    icon: Gauge,
    title: "Autolettura e richieste",
    desc: "Autolettura contatore, richieste di aumento potenza, aggiunta contatori e volture — tutto dall'app.",
  },
  {
    icon: HeadphonesIcon,
    title: "Assistenza AI 24/7",
    desc: "Chatbot AI integrato che risponde alle domande dei clienti a qualsiasi ora, riducendo il carico sul customer care.",
  },
];

export const AppWhiteLabelSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border-primary/30 mb-6">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary tracking-wide">
              App iOS & Android White Label
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight mb-5">
            La tua app energia,
            <br />
            <span className="gradient-text">con il tuo brand.</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-[680px] mx-auto leading-relaxed text-balance">
            Offri ai tuoi clienti un'app personalizzata con il tuo logo e i tuoi colori. Onboarding smart con AI, firma digitale, gestione bollette e assistenza 24/7 — tutto incluso.
          </p>
        </div>

        {/* Main card */}
        <div className="liquid-glass-card-lg p-8 md:p-12 lg:p-16">
          {/* Hero feature */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14 mb-12 pb-12 border-b border-white/5">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary">Smart Onboarding</span>
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                Registra un cliente in 60 secondi
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-[520px]">
                Il cliente carica una foto o un PDF della bolletta del precedente fornitore. L'AI estrae automaticamente tutti i dati — anagrafici, POD/PDR, consumi — calcola una simulazione di risparmio con le tue tariffe e completa la registrazione. Il contratto viene firmato con OTP integrato.
              </p>
              <motion.a
                href="#demo"
                className="btn-premium inline-flex items-center gap-2 text-sm px-6 py-3 mt-6"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Richiedi Demo
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            <div className="lg:w-[340px] shrink-0 flex flex-col gap-3">
              {features.slice(0, 3).map((f, i) => (
                <div key={i} className="liquid-glass-card-sm p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-0.5">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.slice(3).map((f, i) => (
              <motion.div
                key={i}
                className="liquid-glass-card-sm p-5 flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
