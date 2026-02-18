
# Ottimizzazione SEO e AI Discoverability per Energizzo

## Obiettivo
Massimizzare la visibilita di Energizzo sui motori di ricerca tradizionali (Google, Bing) e nelle risposte degli AI come ChatGPT, Perplexity, Gemini.

## Strategia

### 1. Schema.org / JSON-LD Strutturato (index.html)
Aggiungere markup strutturato per aiutare Google e le AI a comprendere cosa fa Energizzo:
- **Organization**: nome, logo, descrizione, contatti
- **SoftwareApplication**: tipo di prodotto, categoria, pricing
- **FAQPage**: domande frequenti sul prodotto (molto utile per AI e featured snippets)
- **WebSite** con SearchAction

### 2. Meta Tag Avanzati (index.html)
- Aggiungere meta `robots` con direttive ottimali
- Canonical URL
- Lingua e geo-targeting Italia (`hreflang`, `geo.region`)
- Meta keywords piu specifiche e long-tail

### 3. Sitemap.xml e robots.txt migliorato
- Creare `public/sitemap.xml` con URL e priorita
- Aggiornare `robots.txt` con riferimento alla sitemap e direttive per i crawler AI (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot)

### 4. Contenuto Semantico HTML (Componenti React)
- Aggiungere tag `<article>`, `<section>` con `aria-label` semantici
- Usare `<h1>`, `<h2>`, `<h3>` in ordine gerarchico corretto
- Aggiungere `alt` text descrittivi dove mancano
- Aggiungere un componente **FAQ** visibile in pagina con domande chiave (aiuta sia Google snippets che AI)

### 5. Componente FAQ Section (nuovo)
Creare una sezione FAQ prima del footer con domande strategiche tipo:
- "Cos'e Energizzo?"
- "Come funziona la fatturazione automatica per reseller energia?"
- "Quanto costa un software gestionale per aziende energetiche?"
- "Energizzo ha un'app per i clienti finali?"
- "Come funziona l'onboarding OCR in 60 secondi?"

Queste domande sono quelle che gli utenti fanno a ChatGPT/Google e aiutano il sito ad apparire come fonte autorevole.

### 6. llms.txt (AI Discoverability)
Creare `public/llms.txt` - un file emergente che i modelli AI leggono per capire il sito (simile a robots.txt ma per LLM).

---

## Dettaglio Tecnico

### File da modificare/creare:

| File | Azione |
|------|--------|
| `index.html` | Aggiungere JSON-LD, canonical, hreflang, meta avanzati |
| `public/robots.txt` | Aggiornare con sitemap e direttive AI bot |
| `public/sitemap.xml` | Nuovo - mappa del sito |
| `public/llms.txt` | Nuovo - descrizione per AI crawler |
| `src/components/landing/FAQSection.tsx` | Nuovo - sezione FAQ con schema markup |
| `src/pages/Index.tsx` | Aggiungere FAQSection prima del Footer |
| `src/components/landing/HeroSection.tsx` | Migliorare semantica HTML |
| `src/components/landing/FeaturesSection.tsx` | Aggiungere aria-label e semantica |
| `src/components/landing/Footer.tsx` | Aggiungere link utili per SEO interno |

### JSON-LD previsto (in index.html):
- `Organization` con nome "Energizzo by UNVRS Labs", descrizione, URL
- `SoftwareApplication` con categoria "BusinessApplication", sistema operativo "Web, iOS, Android"
- `FAQPage` con le domande della FAQ section
- `WebSite` con nome e URL

### llms.txt previsto:
Descrizione strutturata di Energizzo, funzionalita principali, pricing, target audience - tutto in formato leggibile dai modelli AI.

### FAQ Section:
- 6-8 domande con risposte concise
- Accordion UI (gia disponibile con Radix)
- Schema FAQPage integrato via `<script type="application/ld+json">`
