# 📁 Portfolio Source Code & App Logic

This directory contains the full source code for the interactive AI Evaluation Portfolio website. It is designed to demonstrate technical proficiency in frontend development, API integration, and user experience design within the AI niche.

### 🔗 Live Site: [ebubeco-ai-eval.vercel.app](https://ebubeco-ai-eval.vercel.app)

---

## 🛠️ Technical Architecture

This is a modern, high-performance web application built with a focus on speed and analytical clarity.

- **Frontend:** Vanilla HTML5, CSS3, and ES6+ JavaScript. No heavy frameworks (React/Vue) were used to ensure sub-second load times and a 100/100 performance score.
- **Bundler:** [Vite](https://vitejs.dev/) for optimized asset delivery and a robust development environment.
- **Backend:** Node.js Serverless Functions (`/api/chat.js`) deployed on Vercel.
- **AI Integration:** [OpenRouter API](https://openrouter.ai/) used to fetch responses from Gemini 2.0, Llama 3.1, and Mistral Nemo in parallel.

---

## 📂 Directory Structure

```text
portfolio/
├── api/
│   └── chat.js          # Serverless logic for multi-model parallel API calls
├── public/
│   ├── main.js          # Core UI logic: Chatbot, Theme Engine, KB Rendering
│   ├── shared.css       # Design System: Glassmorphism, Dark Mode, Grids
│   ├── portfolio.json   # Structured data for the Knowledge Base
│   └── ...              # Images and assets
├── index.html           # Main Entry: Multi-model interface
├── system.html          # Documentation: 8-Step Evaluation Loop
├── artifacts.html       # Gallery: Case studies & Annotation samples
├── cv.html              # Printable standalone Resume
├── vercel.json          # Deployment, Routing, and Security Headers
└── vite.config.ts       # Build configuration and Dev Server Mock API
```

---

## 🚀 Deployment Guide (Recruiter/Dev Friendly)

If you wish to fork and deploy this yourself:

1. **Root Directory:** Ensure Vercel is configured to use the `portfolio/` folder as the Root Directory.
2. **Environment Variables:**
   - `OPENROUTER_API_KEY`: Your API key from openrouter.ai.
3. **Local Setup:**
   ```bash
   cd portfolio
   npm install
   npm run dev
   ```

---

## 🤖 Featured AI Models
In the chatbot and Knowledge Base, I compare:
1. **Gemini 2.0 Flash:** Evaluated for its high speed and multimodal grounding.
2. **Llama 3.1 8B:** Evaluated for its robust instruction following.
3. **Mistral Nemo:** Evaluated for its concise, highly logical outputs.

---

## 🎨 Design Philosophy
The UI uses a **"Laboratory Aesthetic"**—dark mode by default, glassmorphic panels, and monospaced typography—to reflect the scientific nature of AI Evaluation and QA.
