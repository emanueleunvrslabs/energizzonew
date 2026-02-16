import { motion } from "framer-motion";
import { ArrowRight, Scale, Bot, Bell } from "lucide-react";

export const DeliberoSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="liquid-glass-card-lg p-8 md:p-14 lg:p-20">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
            {/* Left — Text */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border-primary/30 mb-6"
              >
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-xs md:text-sm font-medium text-primary tracking-wide">
                  Delibero by Energizzo
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight mb-5"
              >
                Le delibere ARERA,
                <br />
                <span className="gradient-text">analizzate dall'AI.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground max-w-[540px] leading-relaxed mb-8 text-balance"
              >
                Monitoriamo le delibere ARERA e le analizziamo con intelligenza artificiale. Riassunti, punti salienti e aggiornamenti tariffari per operatori energia, in pochi secondi.
              </motion.p>

              <motion.a
                href="https://delibero.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="btn-premium inline-flex items-center gap-2 text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Esplora Delibero
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Right — Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-[360px] xl:w-[400px] shrink-0 flex flex-col gap-4"
            >
              {[
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
              ].map((item, i) => (
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
