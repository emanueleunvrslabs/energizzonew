import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Users, FileSignature, Database, Receipt,
  List, ShoppingCart, AlertCircle, CreditCard,
  Bell, FileText, MapPin, Bot,
  BarChart3, LayoutDashboard, Shield, UserPlus
} from "lucide-react";

const modules = [
  {
    icon: Users, title: "Gestione Anagrafiche Complete",
    desc: "Clienti attivi e inattivi, agenti, collaboratori, distributori luce/gas. Gestione POD e PDR con storico consumi e geolocalizzazione su mappa."
  },
  {
    icon: FileSignature, title: "Firma Contratti con OTP",
    desc: "Esecuzione contratti sicura e istantanea con verifica tramite OTP. Firme legalmente valide con password monouso via WhatsApp e email."
  },
  {
    icon: Database, title: "Arricchimento Dati Automatico",
    desc: "Validazione e arricchimento dati aziendali in tempo reale. Verifica società, scoring creditizio e validazione codice IBAN del cliente."
  },
  {
    icon: Receipt, title: "Fatturazione Luce e Gas",
    desc: "Generazione massiva fatture, calcolo automatico consumi, oneri di sistema, accise e imposte. Generazione PDF, XML Fattura Elettronica e invio automatico."
  },
  {
    icon: List, title: "Listini e Indici di Mercato",
    desc: "Gestione listini personalizzati, import automatico PUN e PSV, costi dispacciamento. Calcolo margini e versioning listini."
  },
  {
    icon: ShoppingCart, title: "Dispacciamento e Acquisti",
    desc: "Gestione automatizzata dispacciamento di energia elettrica e gas indicizzati a PUN e PSV."
  },
  {
    icon: AlertCircle, title: "Gestione Insoluti e Recupero",
    desc: "Tracking insoluti, solleciti automatici, gestione morosità. Import file con riconciliazione automatica."
  },
  {
    icon: CreditCard, title: "SDD e Incassi",
    desc: "Generazione file SEPA SDD e CBI, gestione mandati, riconciliazione incassi. Note di credito e gestione rimborsi automatizzati."
  },
  {
    icon: Bell, title: "Oneri di Sistema e Accise",
    desc: "Gestione componenti tariffarie ARERA (TD, ASOS, GS, RE), aggiornamenti automatici, calcolo accise gas per scaglioni e usi."
  },
  {
    icon: FileText, title: "Attivazioni e Switch",
    desc: "Workflow completo per nuove attivazioni, switch fornitori, volture e subentri. Tracking stato pratica e comunicazioni distributore."
  },
  {
    icon: MapPin, title: "Gestione POD e PDR",
    desc: "Gestione completa punti di fornitura luce (POD) e gas (PDR). Caricamento RCU, storico consumi, analisi AI e geolocalizzazione."
  },
  {
    icon: Bot, title: "GAIA — Assistente AI",
    desc: "Assistente virtuale conversazionale. Analisi dati in linguaggio naturale, generazione report automatici e risposte a query complesse."
  },
  {
    icon: BarChart3, title: "Preventivatore OCR",
    desc: "Upload bolletta concorrente, estrazione dati con OCR. Calcolo preventivo comparativo e analisi risparmio potenziale."
  },
  {
    icon: LayoutDashboard, title: "Dashboard e Reporting",
    desc: "KPI principali, grafici vendite, andamento fatturato. Dashboard personalizzate per collaboratori con task e performance."
  },
  {
    icon: Shield, title: "Compliance Fiscale e Doganale",
    desc: "Rendicontazione accise luce/gas, generazione file per Dogane e ARERA. Gestione Canone RAI e bonus sociali."
  },
  {
    icon: UserPlus, title: "Provvigioni Agenti (ENASARCO)",
    desc: "Calcolo automatico provvigioni, piani personalizzati, tracking obiettivi. Workflow richieste prelievo e storico pagamenti."
  },
];

export const PlatformSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="platform" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-4 block">
            // Piattaforma
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Un ERP/CRM completo per{" "}
            <span className="gradient-text">fornitori di energia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oltre 100 pagine e 150+ endpoint API. Una suite enterprise che copre l'intero ciclo di vita del cliente, dalla lead generation alla fatturazione, al recupero crediti.
          </p>
        </motion.div>

        {/* Interactive module grid — 4 columns on desktop */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px liquid-glass-card overflow-hidden">
          {modules.map((mod, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className="relative text-left p-6 transition-all duration-300 group border border-white/[0.06] focus:outline-none"
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.04) 100%)'
                    : 'transparent',
                }}
                whileHover={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.06) 0%, transparent 100%)',
                }}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  isActive ? 'bg-primary/20' : 'bg-white/[0.06] group-hover:bg-white/[0.1]'
                }`}>
                  <mod.icon className={`w-5 h-5 transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                  }`} />
                </div>

                {/* Title */}
                <h3 className={`text-sm font-bold mb-1 transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-foreground'
                }`}>
                  {mod.title}
                </h3>

                {/* Description — expands on click */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-muted-foreground leading-relaxed overflow-hidden"
                    >
                      {mod.desc}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="platformActive"
                    className="absolute bottom-0 left-6 right-6 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-bold">16 moduli</span> · Clicca su ciascuno per i dettagli
          </p>
        </motion.div>
      </div>
    </section>
  );
};
