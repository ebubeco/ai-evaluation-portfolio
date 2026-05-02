# Portfolio — Source Code

This folder contains the complete source code for the interactive portfolio website at **[ebubeco-ai-eval.vercel.app](https://ebubeco-ai-eval.vercel.app)**.

> **Note for Vercel deployment:** When importing this repository on Vercel, set the **Root Directory** to `portfolio` so Vercel builds from this folder.

---

## 📂 File Structure

```text
portfolio/
├── api/
│   └── chat.js             # Vercel Serverless Function — calls OpenRouter API in parallel
├── public/
│   ├── main.js             # Chat widget, theme toggle, scroll reveal, cursor effects
│   ├── shared.css          # Full design system (dark/light tokens, layout, components)
│   ├── favicon.svg         # Site favicon
│   ├── opengraph.jpg       # Social sharing image
│   ├── micro1-vetted.png   # Verification badge asset
│   └── portfolio.json      # Structured portfolio data
├── src/                    # Legacy Replit scaffold (unused, safe to ignore)
├── index.html              # Homepage with multi-model AI Knowledge Base
├── system.html             # The 8-Step Evaluation Loop documentation
├── artifacts.html          # Case studies & annotation samples gallery
├── cv.html                 # Standalone print-ready resume
├── vercel.json             # Vercel routing, headers, and function config
├── vite.config.ts          # Vite build config + local dev mock for /api/chat
└── package.json            # Minimal deps: vite + @types/node only
```

---

## 💻 Local Development

**Requirements:** [Node.js](https://nodejs.org/) (v18+)

```bash
# 1. Clone and navigate into the portfolio subfolder
git clone https://github.com/ebubeco/ai-evaluation-portfolio.git
cd ai-evaluation-portfolio/portfolio

# 2. Install dependencies
npm install

# 3. Add your OpenRouter API key
echo "OPENROUTER_API_KEY=sk-or-v1-..." > .env

# 4. Start the dev server (runs on http://localhost:5000)
npm run dev
```

The `vite.config.ts` dev server includes a built-in mock for `/api/chat` so the multi-model chat widget works locally without consuming API credits.

---

## 🚀 Deployment on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import this repo.
2. In the **Root Directory** field, enter: `portfolio`
3. Under **Environment Variables**, add:
   | Key | Value |
   |-----|-------|
   | `OPENROUTER_API_KEY` | `sk-or-v1-...` |
4. Click **Deploy**. Vercel will automatically detect Vite and run `npm run build`.

The `vercel.json` handles all routing — HTML pages, the `/api/chat` serverless function, and security headers are all pre-configured.

---

## 🤖 AI Models Used

The chat widget queries three models in parallel via [OpenRouter](https://openrouter.ai):

| Model | Provider | Strengths |
|-------|----------|-----------|
| `google/gemini-2.0-flash-exp:free` | Google | Speed, factual accuracy |
| `meta-llama/llama-3.1-8b-instruct:free` | Meta | Reasoning, instruction following |
| `mistralai/mistral-nemo:free` | Mistral | Nuanced, concise answers |

Responses are fetched with `Promise.all` for true parallelism, then displayed side-by-side in a 3-column grid.
