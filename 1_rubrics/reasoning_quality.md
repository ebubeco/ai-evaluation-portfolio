# Reasoning Quality Rubric

This rubric defines how responses are evaluated for reasoning quality in annotation tasks.

Reasoning quality measures the structure, validity, and justification of thinking — not whether the final answer is correct.

A response may arrive at a correct conclusion through weak reasoning. In such cases, reasoning quality is still low.

---

## What This Rubric Measures

Reasoning quality evaluates whether a response:

- Follows a clear logical progression from premise to conclusion
- Justifies claims with evidence, explanation, or valid inference
- Maintains internal consistency across steps
- Handles ambiguity or uncertainty appropriately
- Avoids unsupported leaps, contradictions, or circular logic

---

## Scoring Scale

| Score | Label | Meaning in Practice |
|------|------|----------------------|
| 5 | Excellent Reasoning | Fully structured, fully justified, no logical gaps |
| 4 | Strong Reasoning | Clear logic with minor, non-impactful gaps |
| 3 | Adequate Reasoning | Understandable reasoning with noticeable weaknesses |
| 2 | Weak Reasoning | Major logical gaps or unsupported claims |
| 1 | Poor Reasoning | Disorganized or largely unjustified reasoning |
| 0 | No Reasoning | No logical structure or coherence |

---

## Decision Rules (Operational Scoring)

### Score 5 — Excellent Reasoning
Assign ONLY if ALL conditions are met:

- Logical progression is explicit and complete
- Every major claim is justified or properly inferred
- No unsupported leaps or missing reasoning steps
- No contradictions or internal inconsistencies
- Conclusion follows necessarily from reasoning

> If any step is implied but not justified, score cannot be 5.

---

### Score 4 — Strong Reasoning
Assign if:

- Reasoning is logically sound and mostly complete
- All major claims are supported
- Conclusion follows correctly
- At most one minor gap exists that does not affect validity

Minor gaps include:
- Slightly underexplained step
- Minor assumption not explicitly stated
- Small omitted intermediate reasoning step

---

### Score 3 — Adequate Reasoning
Assign if:

- Core reasoning is present and understandable
- BUT at least one notable weakness exists

Typical cases:
- A key step is asserted without explanation
- Reasoning is incomplete but still leads to correct conclusion
- Some relevant complexity is ignored or not addressed
- Argument works in simple cases but is not fully robust

---

### Score 2 — Weak Reasoning
Assign if:

- Multiple reasoning flaws exist OR
- Logical structure is unstable OR
- Key claims are not supported

Typical patterns:
- Conclusion appears before reasoning
- Evidence does not logically support claims
- Missing key steps in argument chain
- Reasoning breaks under simple scrutiny or counterexample

---

### Score 1 — Poor Reasoning
Assign if:

- Reasoning is largely incoherent or disorganized
- Most claims are unsupported or contradictory
- Logical flow is absent or severely broken
- Conclusion is weakly connected or unjustified

---

### Score 0 — No Reasoning
Assign if:

- No attempt at logical structure
- Pure assertion without justification
- Random or incoherent output
- No discernible reasoning path exists

---

## Reasoning Failure Taxonomy

| Failure Type | Description | Typical Impact |
|--------------|-------------|----------------|
| Unsupported assertion | Claims made without justification | 2–3 |
| Logical gap | Missing intermediate reasoning step | 3–4 |
| Circular reasoning | Conclusion used as its own support | 1–2 |
| False premise | Argument built on incorrect assumption | 2–3 |
| Contradiction | Internal inconsistency in claims | 1–2 |
| Ignored complexity | Failure to address relevant nuance | 3 |
| Conclusion drift | Final answer not supported by reasoning | 2–3 |
| Overconfidence | Strong claims without sufficient support | 3–4 |

---

## Scoring Heuristics (Fast Evaluation Rules)

Use these for rapid decisions:

- If no reasoning structure exists → **0–1**
- If conclusion is unsupported → **≤ 2**
- If multiple major gaps exist → **≤ 2**
- If reasoning exists but incomplete → **3**
- If reasoning is solid with minor gaps → **4**
- If fully structured and fully justified → **5 only**

---

## Critical Distinction

Correctness is NOT reasoning quality.

- A correct answer with weak justification → low score  
- A wrong answer with strong reasoning → can still score high  

Evaluation focuses on the reasoning path, not the final result.

---

## Example Applications

### Example 1
Prompt: Explain why the sky is blue.

Response: Full explanation of Rayleigh scattering, wavelength behavior, and perceptual dominance of blue light.

→ Score: 5 (complete, structured, fully justified)

---

### Example 2
Same prompt

Response: Explains scattering but does not fully connect wavelength distribution to perceived dominance.

→ Score: 4 (sound reasoning with minor gap)

---

### Example 3
Same prompt

Response: “Because of light scattering in the atmosphere.”

→ Score: 2 (unsupported simplification)

---

### Example 4
Same prompt

Response: “Because it reflects the ocean.”

→ Score: 1 (false premise, invalid reasoning)

---

## Key Principle

Reasoning quality is evaluated by:

> the strength, structure, and justification of the thinking process — not the correctness of the answer alone.
