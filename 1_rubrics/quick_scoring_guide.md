# Quick Scoring Guide (Evaluator Speed Layer)

This guide is designed for rapid decision-making under time pressure.

It compresses all rubric logic into fast operational signals.

Use this when you cannot deeply analyze but must still maintain scoring accuracy.

---

# Core Mental Model

Every response is evaluated on 3 signals:

1. Instruction Compliance (Did it follow what was asked?)
2. Reasoning Quality (Is the thinking coherent and justified?)
3. Factual Grounding (Is it real, verifiable, or hallucinated?)

---

# FAST SCORING FLOW (DO THIS IN ORDER)

## Step 1: Check for Immediate Failure Signals

If ANY of these exist, immediately cap score ≤ 2:

- Fabricated people, companies, or events
- Fake citations or references
- Confident but unverifiable claims
- Clearly invented technical details
- Misleading precision (fake stats, fake dates, fake numbers)

👉 If multiple exist → score = 0–1

---

## Step 2: Check Instruction Compliance

Ask:

- Did it follow ALL explicit instructions?
- Did it ignore constraints or formatting rules?
- Did it add or remove required elements?

Scoring impact:

| Outcome | Effect |
|--------|--------|
| Fully followed | No penalty |
| Minor deviation | -1 level |
| Major violation | ≤ 2 max |
| Ignored key instruction | ≤ 1 |

---

## Step 3: Evaluate Reasoning Quality

Ask:

- Is the reasoning logically connected?
- Are conclusions justified by prior steps?
- Is there unnecessary or unsupported inference?

Scoring signals:

| Quality | Score Range |
|--------|------------|
| Strong, structured reasoning | 4–5 |
| Mostly logical with minor gaps | 3–4 |
| Weak reasoning or leaps | 2–3 |
| Illogical / broken reasoning | 0–2 |

---

## Step 4: Check Factual Grounding

Ask:

- Is information verifiable or supported by context?
- Are claims clearly grounded or speculative?

Rules:

- Fully grounded → eligible for 5
- Mostly grounded → 4
- Mixed or uncertain → 3
- Weakly grounded → 2
- Hallucinated → 0–1

---

# FINAL SCORE DECISION MATRIX

## Score 5
- Perfect instruction adherence
- Strong reasoning
- Fully grounded facts
- No hallucination risk

---

## Score 4
- Minor imperfections only
- No hallucinations
- Strong overall structure

---

## Score 3
- Noticeable reasoning or grounding gaps
- Some uncertainty or weak inference
- Still usable output

---

## Score 2
- Multiple issues:
  - instruction deviation OR
  - weak reasoning OR
  - factual uncertainty

---

## Score 1
- Major failure in at least one dimension
- Likely hallucination or instruction breakdown

---

## Score 0
- Completely invalid:
  - fabricated content
  - irrelevant response
  - no grounding or logic

---

# ULTRA-FAST HEURISTICS (USE WHEN TIME IS LIMITED)

- Fake entity detected → ≤ 2
- Multiple issues across dimensions → ≤ 2
- One major instruction failure → ≤ 1
- Fully clean and grounded → 5
- Mostly good but slightly imperfect → 4
- Unclear but not broken → 3

---

# EVALUATOR RULE OF THUMB

If you are unsure between two scores:

- Choose the LOWER score if hallucination risk exists
- Choose the HIGHER score only if grounding is clearly solid

---

# IMPORTANT DISTINCTION

- Instruction adherence ≠ factual accuracy
- Reasoning quality ≠ correctness
- Hallucination risk overrides all other signals

---

# FINAL PRINCIPLE

Speed does NOT reduce strictness.

You are optimizing:
> consistency under time pressure, not leniency
