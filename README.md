# AI Evaluation Portfolio

**Ebubechukwu Okeke** — AI Evaluation Specialist  
Lagos, Nigeria · <charlesgigz7@gmail.com> · [@ebubeco](https://x.com/ebubeco)

---

## What this is

This repository contains documented evaluation work across four core areas: RLHF Response Ranking, Hallucination Detection, Prompt Reliability Testing, and Ambiguous Instruction Failure. It also documents how AI model outputs are evaluated, stress-tested, and improved.

Each case study is written as internal reviewer documentation, not a project showcase. The format mirrors what evaluation teams at AI labs actually produce: a problem statement, a method, a finding, and a justified conclusion.

This work focuses on identifying failure modes, hallucination, weak reasoning, ambiguity, and misalignment with user intent, and analysing them with structured, decision-driven reasoning, as well as identifying where model outputs fail, why they fail, and what needs to change for them to improve.

The emphasis is on reasoning, not just correctness, how models behave under uncertainty, and how those behaviours impact real-world usefulness. A response can be fluent, structured, and still wrong in ways that matter. These case studies surface those failures and document them precisely.

---

## Case Studies

### [RLHF Response Ranking & Evaluation](./rlhf-evaluation.md)

Side-by-side evaluation of two model responses to a general knowledge question. Documents the ranking decision, justification, and the reasoning-layer gap that makes one response meaningfully better than the other, even though both pass surface-level quality checks.

### [Hallucination Detection & Analysis](./hallucination-analysis.md)

Full forensic analysis of a model response that appeared credible but contained three distinct hallucination types, including a fabricated quote attributed to an institution that didn't exist at the time it supposedly made the statement. Includes risk classification, verification process, and corrected output.

### [Prompt Reliability Testing](./prompt-reliability.md)

Documents a model's silent failure mode under conflicting constraints, where it produces a formatted, word-count-compliant response while quietly omitting required content. Includes the redesigned prompt, the improved output, and the underlying insight about why models resolve conflicts this way.

### [Ambiguous Instruction Failure & Analysis](./ambiguity-analysis.md)

How models misinterpret underspecified prompts and default to narrow assumptions.

---

## Evaluation Approach

I treat every evaluation task as a reasoning audit. The questions I'm answering are not just "is this response correct?" but:

- **Where** in the reasoning chain did this fail?
- **Why** did the model produce this output under these conditions?
- **What** would a model team need to know to fix this?

Surface-level quality checks catch obvious errors. The failures that actually matter, plausible hallucinations, silent constraint resolution, intent-vs-compliance gaps, only surface when you look at the reasoning layer.

---

## Background

- 1,200+ RLHF and data annotation tasks completed
- 50,000+ structured data points validated, 99%+ accuracy
- Verified by Micro1.ai across Search Quality Rating, AI Data Annotation, and Content Quality Evaluation
- Active on Outlier, Scale AI, Mercor, OneForma, Upwork
- B.Tech Computer Science — Federal University of Technology Owerri (FUTO), 2020–2025

---

## Contact

**Email:** <charlesgigz7@gmail.com>  
**X:** [@ebubeco](https://x.com/ebubeco)  
**Portfolio:** [https://ebubeco-ai-eval.vercel.app]
