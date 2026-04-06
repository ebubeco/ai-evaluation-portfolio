# Hallucination Detection Rubric

This rubric evaluates whether a response contains hallucinations — information that is fabricated, ungrounded, or not supported by reliable sources or the prompt context.

A hallucination is not just an incorrect fact.  
It is a *confidently presented claim that lacks valid grounding*.

---

## What This Rubric Measures

Hallucination detection evaluates whether a response:

- Introduces information not supported by the prompt or known facts
- Fabricates entities, events, sources, or citations
- Presents speculation as fact without qualification
- Misattributes statements or creates false associations
- Confidently asserts unverifiable claims as true

---

## Scoring Scale

| Score | Label | Meaning in Practice |
|------|------|----------------------|
| 5 | No Hallucination | Fully grounded, no fabricated or unsupported claims |
| 4 | Minor Risk | Slight ambiguity or weakly supported inference |
| 3 | Possible Hallucination | Some claims lack clear grounding or verification |
| 2 | Likely Hallucination | Multiple unsupported or dubious claims |
| 1 | Strong Hallucination | Major fabricated or false content present |
| 0 | Severe Hallucination | Fully fabricated response or entirely invented content |

---

## Decision Rules (Operational Scoring)

### Score 5 — No Hallucination
Assign ONLY if ALL conditions are met:

- All claims are grounded in either:
  - the prompt context, or
  - widely verifiable real-world facts
- No fabricated entities, data, or references
- No unsupported assertions presented as fact
- Any inference is clearly marked or logically justified

> If anything is uncertain but stated as fact → not a 5

---

### Score 4 — Minor Risk
Assign if:

- Response is mostly grounded
- Contains minor ambiguity or lightly inferred content
- No clear fabrication, but some claims are not explicitly verifiable

Examples:
- Reasonable inference presented without explicit qualification
- Generalized statements that are plausible but not verifiable in context

---

### Score 3 — Possible Hallucination
Assign if:

- At least one claim lacks clear grounding
- Some statements may be speculative but not clearly marked
- Information cannot be confidently verified from context

Typical cases:
- Unclear source of a claim
- Overconfident phrasing of uncertain information
- Weakly supported assertions

---

### Score 2 — Likely Hallucination
Assign if:

- Multiple unsupported claims exist
- Information appears fabricated or invented
- Response contains questionable entities, facts, or references

Typical patterns:
- Confident but unverifiable statements
- Fabricated details mixed with real information
- Misleading specificity (fake precision)

---

### Score 1 — Strong Hallucination
Assign if:

- Major parts of the response are fabricated
- Key entities, facts, or events are false
- Response is not reliably grounded in truth

---

### Score 0 — Severe Hallucination
Assign if:

- Entire response is fabricated or invented
- No verifiable grounding exists
- Content is fully hallucinated or nonsensical

---

## Hallucination Failure Taxonomy

| Type | Description | Severity Impact |
|------|-------------|----------------|
| Fabricated entity | Non-existent person, company, or event | 0–2 |
| Fake citation/source | Invented reference or attribution | 0–2 |
| Unverifiable claim | Asserted as fact without grounding | 2–3 |
| Misleading precision | Fake specificity (numbers, dates, stats) | 1–3 |
| False association | Incorrect linkage between real entities | 1–3 |
| Unsupported inference | Speculation presented as fact | 3–4 |
| Context drift | Claims not supported by prompt context | 2–3 |

---

## Detection Heuristics (Fast Rules)

Use these for rapid scoring:

- If any fabricated entity exists → **≤ 2**
- If multiple unsupported claims exist → **≤ 2**
- If claims are plausible but unverified → **3–4**
- If fully grounded and verifiable → **5 only**
- If response is
