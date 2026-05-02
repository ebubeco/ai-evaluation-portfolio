# 🔍 2 — Failure Patterns: Taxonomy of Model Errors

This directory is a specialized library of documented model failure modes. Identifying **how** models fail is the first step toward teaching them how to succeed.

## 🧬 Taxonomy of Failures

I categorize model errors into a structured taxonomy to help researchers identify systematic weaknesses in specific model architectures or training sets.

### 🚩 Key Failure Classes:
- **[Hallucination Patterns](./hallucination_patterns.md):** Forensic analysis of fabricated quotes, non-existent dates, and plausible but false citations.
- **[Ambiguity Traps](./ambiguity_traps.md):** How models behave when a prompt is underspecified. Do they ask for clarification or make silent (and often wrong) assumptions?
- **[Common Failure Modes](./common_failure_modes.md):** Recurring issues like "Verbosity Bias," "Instruction Drift," and "Format Breakdown."
- **[Edge Cases](./edge_cases.md):** Rare failures triggered by complex, layered constraints or adversarial prompts.

---

## 📖 Recommended Reading
If you are a developer looking to stress-test your own models, start with the **[Failure Taxonomy Guide](./failure_taxonomy_guide.md)**. It provides a blueprint for what to look for during a manual QA pass.

---

## 💡 The Goal
By documenting these patterns, I enable model teams to build better **Automated Evaluations (Auto-Evals)** and targeted **SFT (Supervised Fine-Tuning)** datasets to patch these specific holes.
