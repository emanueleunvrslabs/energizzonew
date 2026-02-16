Deno.serve(async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers });
  }

  const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

  if (!token || !chatId) {
    return new Response(JSON.stringify({ error: "Missing secrets" }), { status: 500, headers });
  }

  const { name, company, email, whatsapp } = await req.json();
  const text = "Nuova Richiesta Demo\nNome: " + name + "\nAzienda: " + company + "\nEmail: " + email + "\nWhatsApp: " + whatsapp;

  const r = await fetch("https://api.telegram.org/bot" + token + "/sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  const d = await r.json();
  if (!r.ok) {
    return new Response(JSON.stringify({ error: "telegram_error", d }), { status: 500, headers });
  }

  return new Response(JSON.stringify({ ok: true }), { headers });
});
