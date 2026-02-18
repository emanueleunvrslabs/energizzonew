import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { X, Send } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface DemoFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoFormContent = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !company.trim() || !email.trim() || !whatsapp.trim()) {
      toast({ title: "Compila tutti i campi", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const BOT_TOKEN = "8504985644:AAFP0rdji6OkYINJC3JAEkYbzBTtHogc4z4";
      const CHAT_ID = "8318015596";
      const text = `🔔 Nuova Richiesta Demo\n\n👤 Nome: ${name}\n🏢 Azienda: ${company}\n📧 Email: ${email}\n📱 WhatsApp: ${whatsapp}`;
      
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.description || "Errore Telegram");
      
      // Send WhatsApp confirmation via WaSender (non-blocking)
      try {
        await supabase.functions.invoke('wasender', {
          body: { to: whatsapp, name },
        });
      } catch (waErr) {
        console.warn('WhatsApp confirmation failed (non-blocking):', waErr);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Telegram error:', err);
      const errorMsg = err instanceof Error ? err.message : "Errore sconosciuto";
      toast({ title: `Errore: ${errorMsg}`, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
          <Send className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Richiesta inviata!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          Il nostro team ti ricontatterà al più presto per fissare la demo.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground"
        >
          Chiudi
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-1">
      <div className="space-y-1.5">
        <Label htmlFor="demo-name" className="text-sm font-medium text-foreground">Nome e Cognome</Label>
        <Input
          id="demo-name"
          placeholder="Mario Rossi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-secondary/50 border-border"
          maxLength={100}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="demo-company" className="text-sm font-medium text-foreground">Ragione Sociale</Label>
        <Input
          id="demo-company"
          placeholder="Energia S.r.l."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="bg-secondary/50 border-border"
          maxLength={100}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="demo-email" className="text-sm font-medium text-foreground">Email</Label>
        <Input
          id="demo-email"
          type="email"
          placeholder="mario@energia.it"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-secondary/50 border-border"
          maxLength={255}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="demo-whatsapp" className="text-sm font-medium text-foreground">Numero WhatsApp</Label>
        <Input
          id="demo-whatsapp"
          type="tel"
          placeholder="+39 333 1234567"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="bg-secondary/50 border-border"
          maxLength={20}
        />
      </div>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        Verrai ricontattato dal nostro team entro 24 ore lavorative.
      </p>

      <motion.button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-primary to-accent text-primary-foreground disabled:opacity-50"
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
      >
        {loading ? "Invio in corso..." : "Invia Richiesta"}
      </motion.button>
    </form>
  );
};

export const DemoFormModal = ({ open, onOpenChange }: DemoFormModalProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="rounded-t-3xl bg-card border-border px-6 pb-8 pt-6 max-h-[90vh] overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-xl font-bold text-foreground text-center">Prenota una Demo</SheetTitle>
            <p className="text-sm text-muted-foreground text-center">30 minuti, nessun impegno.</p>
          </SheetHeader>
          <DemoFormContent onClose={() => onOpenChange(false)} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[440px] bg-card border-border p-8 rounded-2xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold text-foreground">Prenota una Demo</DialogTitle>
          <p className="text-sm text-muted-foreground">30 minuti, nessun impegno.</p>
        </DialogHeader>
        <DemoFormContent onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};
