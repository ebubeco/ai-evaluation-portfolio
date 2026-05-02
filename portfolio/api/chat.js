const SYSTEM_PROMPT = `You are a portfolio assistant for Ebubechukwu Okeke, an AI Evaluation & QA Specialist. Your role is to help visitors understand his work, skills, and expertise.
Keep responses specific, professional, and evidence-based. 
Facts:
- Ebube Okeke: AI Evaluation & QA Specialist.
- Expertise: RLHF, hallucination detection, adversarial testing.
- Education: B.Tech Computer Science, FUTO.
- Contact: charlesgigz7@gmail.com`;

// A larger pool of free models to increase chances of finding an available endpoint
const FREE_MODELS = [
  "google/gemini-2.0-flash-exp:free",
  "meta-llama/llama-3.1-8b-instruct:free",
  "mistralai/mistral-nemo:free",
  "microsoft/phi-3-mini-128k-instruct:free",
  "qwen/qwen-2-7b-instruct:free",
  "openchat/openchat-7b:free"
];

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: "Message required" });

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return res.status(200).json({ reply: "API Key missing in Vercel settings." });

  // TRY MODELS ONE BY ONE UNTIL ONE WORKS (Fastest for Free Tier)
  for (const modelId of FREE_MODELS) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://ebubeco-ai-eval.vercel.app",
          "X-Title": "Ebube Portfolio"
        },
        body: JSON.stringify({
          model: modelId,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message.trim() }
          ],
          max_tokens: 500,
        })
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.choices?.[0]?.message?.content;
        if (text) {
          return res.status(200).json({ reply: text, type: "ebubeco-multi-model" });
        }
      }
    } catch (err) {
      console.error(`Failed ${modelId}:`, err);
    }
  }

  return res.status(200).json({ 
    reply: "All free model endpoints are currently overloaded on OpenRouter. Please try again in a few minutes or contact Ebube at charlesgigz7@gmail.com.",
    type: "ebubeco-multi-model"
  });
}
