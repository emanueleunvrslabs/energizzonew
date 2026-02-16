import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Users, FileSignature, Database, Receipt,
  List, ShoppingCart, AlertCircle, CreditCard,
  Bell, FileText, MapPin, Bot,
  BarChart3, LayoutDashboard, Shield, UserPlus,
  type LucideIcon
} from "lucide-react";

interface Module {
  icon: LucideIcon;
  title: string;
  tag: string;
  desc: string;
}

const modules: Module[] = [
  {
    icon: Users, tag: "CRM", title: "Gestione Anagrafiche Complete",
    desc: "Clienti attivi e inattivi, agenti, collaboratori, distributori luce/gas. Gestione POD e PDR con storico consumi e geolocalizzazione su mappa."
  },
  {
    icon: FileSignature, tag: "Legal", title: "Firma Contratti con OTP",
    desc: "Esecuzione contratti sicura e istantanea con verifica tramite OTP. Firme legalmente valide con password monouso via WhatsApp e email."
  },
  {
    icon: Database, tag: "Data", title: "Arricchimento Dati Automatico",
    desc: "Validazione e arricchimento dati aziendali in tempo reale. Verifica società, scoring creditizio e validazione codice IBAN del cliente."
  },
  {
    icon: Receipt, tag: "Billing", title: "Fatturazione Luce e Gas",
    desc: "Generazione massiva fatture, calcolo automatico consumi, oneri di sistema, accise e imposte. Generazione PDF, XML Fattura Elettronica e invio automatico."
  },
  {
    icon: List, tag: "Pricing", title: "Listini e Indici di Mercato",
    desc: "Gestione listini personalizzati, import automatico PUN e PSV, costi dispacciamento. Calcolo margini e versioning listini."
  },
  {
    icon: ShoppingCart, tag: "Trading", title: "Dispacciamento e Acquisti",
    desc: "Gestione automatizzata dispacciamento di energia elettrica e gas indicizzati a PUN e PSV."
  },
  {
    icon: AlertCircle, tag: "Credit", title: "Gestione Insoluti e Recupero",
    desc: "Tracking insoluti, solleciti automatici, gestione morosità. Import file con riconciliazione automatica."
  },
  {
    icon: CreditCard, tag: "Payments", title: "SDD e Incassi",
    desc: "Generazione file SEPA SDD e CBI, gestione mandati, riconciliazione incassi. Note di credito e gestione rimborsi automatizzati."
  },
  {
    icon: Bell, tag: "Tariffe", title: "Oneri di Sistema e Accise",
    desc: "Gestione componenti tariffarie ARERA (TD, ASOS, GS, RE), aggiornamenti automatici, calcolo accise gas per scaglioni e usi."
  },
  {
    icon: FileText, tag: "Ops", title: "Attivazioni e Switch",
    desc: "Workflow completo per nuove attivazioni, switch fornitori, volture e subentri. Tracking stato pratica e comunicazioni distributore."
  },
  {
    icon: MapPin, tag: "Supply", title: "Gestione POD e PDR",
    desc: "Gestione completa punti di fornitura luce (POD) e gas (PDR). Caricamento RCU, storico consumi, analisi AI e geolocalizzazione."
  },
  {
    icon: Bot, tag: "AI", title: "MAX POWER — Agente AI Orchestratore",
    desc: "AI proprietaria integrata nel core della piattaforma, non una semplice connessione API esterna. Modelli addestrati specificamente per il settore energia: analisi dati in linguaggio naturale, automazione decisionale e generazione report intelligenti."
  },
  {
    icon: BarChart3, tag: "OCR", title: "Preventivatore OCR",
    desc: "Upload bolletta concorrente, estrazione dati con OCR. Calcolo preventivo comparativo e analisi risparmio potenziale."
  },
  {
    icon: LayoutDashboard, tag: "Analytics", title: "Dashboard e Reporting",
    desc: "KPI principali, grafici vendite, andamento fatturato. Dashboard personalizzate per collaboratori con task e performance."
  },
  {
    icon: Shield, tag: "Compliance", title: "Compliance Fiscale e Doganale",
    desc: "Rendicontazione accise luce/gas, generazione file per Dogane e ARERA. Gestione Canone RAI e bonus sociali."
  },
  {
    icon: UserPlus, tag: "Sales", title: "Provvigioni Agenti (ENASARCO)",
    desc: "Calcolo automatico provvigioni, piani personalizzati, tracking obiettivi. Workflow richieste prelievo e storico pagamenti."
  },
];

export const PlatformSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = modules[activeIndex];

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
            Oltre 100 pagine e 150+ endpoint API. Una suite enterprise che copre
            l'intero ciclo di vita del cliente.
          </p>
        </motion.div>

        {/* Two-panel layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-0 liquid-glass-card overflow-hidden"
        >
          {/* Left — module list */}
          <div className="lg:w-[420px] shrink-0 border-r border-white/[0.08] max-h-[520px] overflow-y-auto scrollbar-thin">
            {modules.map((mod, i) => {
              const isActive = activeIndex === i;
              const Icon = mod.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-200 border-b border-white/[0.05] relative group ${
                    isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  {/* Active bar */}
                  {isActive && (
                    <motion.div
                      layoutId="platformBar"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-r-full"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    isActive ? "bg-primary/20" : "bg-white/[0.06] group-hover:bg-white/[0.1]"
                  }`}>
                    <Icon className={`w-4 h-4 transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    }`} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className={`text-sm font-semibold block truncate transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}>
                      {mod.title}
                    </span>
                  </div>

                  <span className={`font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full shrink-0 transition-colors duration-200 ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "bg-white/[0.06] text-muted-foreground"
                  }`}>
                    {mod.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div className="flex-1 p-8 lg:p-12 flex items-center justify-center min-h-[320px] lg:min-h-[520px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="max-w-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-white/[0.1] flex items-center justify-center mb-6">
                  <active.icon className="w-7 h-7 text-primary" />
                </div>

                <span className="font-mono text-xs tracking-[0.15em] uppercase text-primary mb-2 block">
                  {active.tag}
                </span>

                <h3 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-4 tracking-tight">
                  {active.title}
                </h3>

                <p className="text-base text-muted-foreground leading-relaxed">
                  {active.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
                  Modulo {activeIndex + 1} di {modules.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-bold">16 moduli</span> · Seleziona dalla lista per esplorare
          </p>
        </motion.div>
      </div>
    </section>
  );
};
