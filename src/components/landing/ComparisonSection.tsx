import { motion } from "framer-motion";

const rows = [
  { feature: "AI Customer Care (Chat/WhatsApp)", energizzo: "✅ Nativo", trilance: "❌", ibill: "⚠️ Basic", wattsdat: "❌" },
  { feature: "Telefono AI (Inbound + Outbound)", energizzo: "✅ Nativo", trilance: "❌", ibill: "❌", wattsdat: "❌" },
  { feature: "Onboarding OCR da Bolletta", energizzo: "✅ Nativo", trilance: "❌", ibill: "❌", wattsdat: "❌" },
  { feature: "Simulatore Risparmio AI", energizzo: "✅ Avanzato", trilance: "❌", ibill: "⚠️ Base", wattsdat: "❌" },
  { feature: "Predizione Churn", energizzo: "✅ AI", trilance: "❌", ibill: "❌", wattsdat: "❌" },
  { feature: "Predizione Morosità", energizzo: "✅ AI", trilance: "❌", ibill: "❌", wattsdat: "❌" },
  { feature: "Billing Automatizzato", energizzo: "✅ AI", trilance: "✅ AI base", ibill: "⚠️ Terzi", wattsdat: "✅" },
  { feature: "CRM Energia", energizzo: "✅ AI-driven", trilance: "✅", ibill: "✅", wattsdat: "✅" },
  { feature: "Compliance ARERA Auto", energizzo: "✅ AI", trilance: "⚠️ Manuale", ibill: "❌", wattsdat: "⚠️" },
  { feature: "Integrazione Cerved", energizzo: "✅ Nativo", trilance: "❌", ibill: "❌", wattsdat: "❌" },
  { feature: "Time-to-Value", energizzo: "< 1 settimana", trilance: "2-6 mesi", ibill: "2-4 settimane", wattsdat: "1-3 mesi" },
];

export const ComparisonSection = () => {
  return (
    <section id="compare" className="py-32 relative overflow-hidden">
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
            // Confronto
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Perché Energizzo è diverso
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I competitor sono nati prima dell'AI. Energizzo è nato con l'AI.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full border-collapse rounded-[20px] overflow-hidden border border-white/10">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-muted-foreground bg-white/[0.04] border-b border-white/10">
                  Funzionalità
                </th>
                <th className="text-center p-4 text-sm font-semibold text-primary bg-primary/[0.08] border-b-2 border-primary/30">
                  Energizzo
                </th>
                <th className="text-center p-4 text-sm font-semibold text-muted-foreground bg-white/[0.04] border-b border-white/10">
                  Trilance
                </th>
                <th className="text-center p-4 text-sm font-semibold text-muted-foreground bg-white/[0.04] border-b border-white/10">
                  iBill
                </th>
                <th className="text-center p-4 text-sm font-semibold text-muted-foreground bg-white/[0.04] border-b border-white/10">
                  Wattsdat
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="text-left p-4 text-sm font-medium text-foreground border-b border-white/[0.03]">
                    {row.feature}
                  </td>
                  <td className="text-center p-4 text-sm font-semibold text-primary bg-primary/[0.03] border-b border-white/[0.03]">
                    {row.energizzo}
                  </td>
                  <td className="text-center p-4 text-sm text-muted-foreground border-b border-white/[0.03]">
                    {row.trilance}
                  </td>
                  <td className="text-center p-4 text-sm text-muted-foreground border-b border-white/[0.03]">
                    {row.ibill}
                  </td>
                  <td className="text-center p-4 text-sm text-muted-foreground border-b border-white/[0.03]">
                    {row.wattsdat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
