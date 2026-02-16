import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!TELEGRAM_BOT_TOKEN) {
      return new Response(JSON.stringify({ error: "TELEGRAM_BOT_TOKEN not set" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!TELEGRAM_CHAT_ID) {
      return new Response(JSON.stringify({ error: "TELEGRAM_CHAT_ID not set" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, company, email, whatsapp } = await req.json();

    const text = [
      "Nuova Richiesta Demo",
      "",
      "Nome: " + name,
      "Azienda: " + company,
      "Email: " + email,
      "WhatsApp: " + whatsapp,
    ].join("\n");

    const res = await fetch(
      "https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Telegram error:", JSON.stringify(data));
      return new Response(JSON.stringify({ error: "Telegram failed", details: data }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
