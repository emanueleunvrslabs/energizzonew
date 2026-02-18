Deno.serve(async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers });
  }

  const apiKey = Deno.env.get("WASENDER_API_KEY");
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Missing WASENDER_API_KEY" }), { status: 500, headers });
  }

  const { to, name } = await req.json();

  const text = `Ciao ${name}! 👋\n\nGrazie per aver richiesto una demo di Energizzo.\n\nIl nostro team ti contatterà entro 24 ore lavorative per fissare un appuntamento.\n\nA presto!\n— Team Energizzo`;

  const r = await fetch("https://www.wasenderapi.com/api/send-message", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to, text }),
  });

  const d = await r.json();
  if (!r.ok) {
    console.error("WaSender error:", d);
    return new Response(JSON.stringify({ error: "wasender_error", details: d }), { status: 500, headers });
  }

  return new Response(JSON.stringify({ ok: true }), { headers });
});
