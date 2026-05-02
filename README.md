# Ebubechukwu Okeke — AI Evaluation & QA Portfolio

Welcome to my comprehensive AI Evaluation repository. This project showcases my methodology, analytical framework, and technical implementation for testing and ranking Large Language Model (LLM) outputs.

### 🚀 Quick Links
- **Live Interactive Portfolio:** [ebubeco-ai-eval.vercel.app](https://ebubeco-ai-eval.vercel.app)
- **LinkedIn:** [linkedin.com/in/ebubeco](https://www.linkedin.com/in/ebubeco)
- **Email:** charlesgigz7@gmail.com

---

## 🧭 Repository Navigation Guide

This repository is structured to provide both a **high-level interactive experience** and a **deep-dive into technical documentation**.

### 1. The Interactive Experience (`/portfolio`)
If you want to see how I build tools to compare AI models, head to the **[portfolio](./portfolio/)** directory.
- **Multi-Model Chat:** A live tool where you can query Gemini, Llama, and Mistral side-by-side.
- **Dynamic Knowledge Base:** A grid-based UI showing how different models handle complex evaluation queries.
- **Tech Stack:** Vanilla HTML/CSS/JS, Vite, and OpenRouter API.

### 2. The Evaluation Framework (`/0_overview` to `/4_case-studies`)
This is where my core methodology lives. It mirrors the documentation produced by professional AI Evaluation teams at labs like Anthropic, OpenAI, or Google DeepMind.

| Section | Description |
| :--- | :--- |
| **[0_Overview](./0_overview/)** | My core philosophy, the 8-step evaluation loop, and decision protocols. |
| **[1_Rubrics](./1_rubrics/)** | Standardized criteria for scoring Instruction Adherence, Reasoning, and Factuality. |
| **[2_Failure Patterns](./2_failure_patterns/)** | A taxonomy of 30+ recurring model failure modes I've identified. |
| **[3_Evaluation Runs](./3_evaluation-runs/)** | Real-world logs of Model A vs Model B comparison tasks with reasoning traces. |
| **[4_Case Studies](./4_case-studies/)** | Forensic analysis of specific high-stakes failures (Hallucinations, Bias, Ambiguity). |

---

## 🎯 My Evaluation Philosophy: "Reasoning First"

I treat every AI evaluation task as a **reasoning audit**. My goal isn't just to mark an answer "Correct" or "Incorrect," but to answer:
1. **Where** exactly did the logical chain break?
2. **Why** did the model prioritize one constraint over another?
3. **How** can this specific failure be used to improve the next fine-tuning run?

### Key Expertise:
- **RLHF Preference Ranking:** Expert at identifying the "better" response when both look superficially correct.
- **Hallucination Forensic:** Detecting "plausible lies" through entailed vs. compatible verification.
- **Adversarial Testing:** Finding edge cases where models fail to follow negative constraints or complex instructions.

---

## 🛠️ Performance & Deployment
The portfolio app is built for speed and reliability:
- **99+ Lighthouse Score:** Minimal dependencies, zero bloat.
- **Parallel Execution:** Backend queries 3 models simultaneously via `Promise.all` to minimize latency.
- **Vercel Native:** Integrated with Vercel Analytics and Speed Insights for production-grade monitoring.

---

## 📞 Let's Connect
I am currently open to **Contract, Freelance, or Full-Time roles** in AI Evaluation, QA, and RLHF Data Operations. 

Feel free to reach out via **[LinkedIn](https://www.linkedin.com/in/ebubeco)** or **[Email](mailto:charlesgigz7@gmail.com)**.
