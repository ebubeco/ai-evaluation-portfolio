# 📑 0 — Overview & Methodology

This section establishes the foundational philosophy and the exact "Standard Operating Procedures" (SOPs) I use for AI Evaluation.

## 🧠 Evaluation Philosophy

In AI Evaluation, **fluency is a trap**. A model can be eloquent, confident, and polite while being completely wrong or failing a negative constraint. 

My approach prioritizes:
1. **Constraint Adherence:** Did the model follow the *negative* constraints (e.g., "Do not mention X")?
2. **Grounding:** Is every claim traceable to the provided context or verified facts?
3. **Reasoning Integrity:** If the model arrived at the right answer via a flawed logical step, it is marked as a **Reasoning Failure**.

---

## 🔄 The 8-Step Evaluation Loop

I evaluate every complex response through a reproducible 8-step loop:

1. **Anchor:** Identify the core requirement and hard constraints.
2. **Instruction Check:** Map the response against every explicit instruction.
3. **Reality Check:** Verify factual claims (Entailed vs. Compatible).
4. **Logic Check:** Audit the internal reasoning chain.
5. **Ambiguity Resolution:** How did the model handle underspecified parts of the prompt?
6. **Root Cause Analysis:** If it failed, was it a training data gap or a reasoning breakdown?
7. **The Call:** Final decisive judgment (Reliable / Usable / Unreliable).
8. **Write It:** Document the decision clearly with no "rubric theatre."

---

## 📂 Included Documents

- **[Evaluation Philosophy](./evaluation_philosophy.md):** A deep dive into my mindset as a rater.
- **[Decision Protocol](./decision_protocol.md):** How I make consistent calls in ambiguous edge cases.
- **[Portfolio Summary](./portfolio_summary.md):** High-level overview of my total evaluation volume and accuracy metrics.

---

## 🎯 Target Audience
These documents are designed for **AI Model Teams** and **Data Ops Managers** who need to understand the rigor behind the data I produce.
