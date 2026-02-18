import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Cos'è Energizzo?",
    answer:
      "Energizzo è la piattaforma AI-native progettata per i reseller di energia elettrica e gas in Italia. Automatizza fatturazione, onboarding clienti, compliance ARERA, CRM e molto altro, permettendo di gestire migliaia di clienti senza aumentare il personale.",
  },
  {
    question: "Come funziona la fatturazione automatica per reseller energia?",
    answer:
      "Energizzo calcola automaticamente tutte le componenti ARERA (trasporto, oneri di sistema, accise, IVA), genera le bollette conformi alla normativa vigente e gestisce incassi SDD e scadenze. Zero intervento manuale necessario.",
  },
  {
    question: "Quanto costa un software gestionale per aziende energetiche?",
    answer:
      "Energizzo parte da €490/mese per il piano Starter (fino a 500 clienti) e €890/mese per il piano Growth (fino a 2.000 clienti). Il piano Enterprise è personalizzabile per volumi superiori. A differenza dei competitor, include AI, app white label e compliance automatica.",
  },
  {
    question: "Energizzo ha un'app per i clienti finali?",
    answer:
      "Sì, Energizzo offre un'app white label per iOS e Android completamente personalizzabile con il brand del reseller. I clienti finali possono consultare bollette, effettuare autoletture, firmare contratti con OTP e ricevere assistenza da un chatbot AI 24/7.",
  },
  {
    question: "Come funziona l'onboarding OCR in 60 secondi?",
    answer:
      "Il cliente fotografa la bolletta del vecchio fornitore. L'AI di Energizzo estrae automaticamente tutti i dati (anagrafica, POD/PDR, consumi), calcola una simulazione di risparmio con le nuove tariffe e prepara il contratto per la firma digitale OTP. Tutto in meno di 60 secondi.",
  },
  {
    question: "Energizzo è conforme alla normativa ARERA?",
    answer:
      "Assolutamente sì. Energizzo implementa automaticamente ogni nuova delibera ARERA. Template di bollette, schede sintetiche e reportistiche normative vengono aggiornati senza intervento manuale, azzerando il rischio di sanzioni.",
  },
  {
    question: "Come funziona il telefono AI di Energizzo?",
    answer:
      "Il telefono AI di Energizzo gestisce chiamate inbound 24/7 (autoletture, duplicati bolletta, stato pagamenti) e outbound (solleciti, retention, campagne commerciali). Riduce i costi del customer care fino al 70% mantenendo un servizio eccellente.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 relative" aria-label="Domande frequenti su Energizzo">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-4 block">
            // FAQ
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-3 md:mb-4 tracking-tight">
            Domande Frequenti
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Tutto quello che devi sapere su Energizzo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="liquid-glass-card-lg p-6 md:p-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-white/5 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:text-primary hover:no-underline py-5 gap-3">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pl-7">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};