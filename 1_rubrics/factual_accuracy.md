# Factual Accuracy Rubric

This rubric evaluates whether a response contains correct, verifiable, and non-misleading information.

Factual accuracy measures truthfulness of claims, not reasoning quality or instruction adherence.

A response can follow instructions perfectly and still fail this rubric if it contains incorrect or unverified information.

---

## What This Rubric Measures

Factual accuracy evaluates whether a response:

- States information that is correct and verifiable
- Avoids hallucinated or fabricated claims
- Does not misrepresent facts or data
- Distinguishes between fact, inference, and speculation
- Uses appropriate uncertainty when information is not confirmed

---

## Scoring Scale

| Score | Label | Meaning in Practice |
|------|------|----------------------|
| 5 | Fully Accurate | All claims are correct and properly qualified |
| 4 | Mostly Accurate | Minor non-critical inaccuracies or omissions |
| 3 | Mixed Accuracy | Some correct information but notable factual errors |
| 2 | Low Accuracy | Multiple factual errors or misleading claims |
| 1 | Inaccurate | Mostly incorrect or misleading information |
| 0 | Fully False | Entirely fabricated or hallucinated content |

---

## Decision Rules (Operational Scoring)

### Score 5 — Fully Accurate
Assign ONLY if ALL conditions are met:

- All factual claims are correct
- No hallucinated or fabricated information
- Any uncertainty is clearly stated
- No misleading simplifications of facts

> Even a single incorrect factual claim prevents a score of 5.

---

### Score 4 — Mostly Accurate
Assign if:

- Core factual content is correct
- Minor inaccuracies exist but do not affect overall meaning
- Small omissions or generalizations are present but acceptable

Examples:
- Slightly outdated but still valid information
- Minor numerical or detail-level imprecision
- Non-critical simplification of complex facts

---

### Score 3 — Mixed Accuracy
Assign if:

- Response contains both correct and incorrect factual elements
- Errors are noticeable but do not fully invalidate the response
- Some claims are unsupported or partially wrong

Typical cases:
- Partially correct explanations with key factual mistakes
- Mix of accurate and inaccurate statements
- Overgeneralization leading to partial misinformation

---

### Score 2 — Low Accuracy
Assign if:

- Multiple factual errors exist OR
- Key claims are incorrect OR
- Response contains misleading information

Typical patterns:
- Incorrect explanations of events or concepts
- Confident statements that are factually wrong
- Misinterpretation of known facts

---

### Score 1 — Inaccurate
Assign if:

- Most claims are incorrect
- Response is largely misleading or unreliable
- Factual grounding is weak or absent

---

### Score 0 — Fully False
Assign if:

- Entire response is fabricated
- No verifiable factual basis exists
- Content is hallucinated or invented

---

## Factual Error Taxonomy

| Error Type | Description | Severity Impact |
|------------|-------------|----------------|
| Hallucination | Entirely fabricated fact or event | 0–2 |
| Incorrect fact | Wrong statement about real-world information | 1–3 |
| Misleading claim | Technically plausible but false implication | 2–3 |
| Outdated information | Previously correct but no longer valid | 3–4 |
| Overgeneralization | True in some cases but incorrectly universalized | 2–3 |
| Misinterpretation | Incorrect explanation of known facts | 1–3 |
| Missing uncertainty | Stated as fact when should be uncertain | 3–4 |

---

## Scoring Heuristics (Fast Decision Rules)

Use these for rapid evaluation:

- If any major factual error exists → **≤ 2**
- If multiple factual errors exist → **≤ 2**
- If mostly correct but slightly imprecise → **3–4**
- If fully correct and precise → **5**
- If fabricated content detected → **0–1**

---

## Critical Distinction

Factual accuracy is independent of:

- reasoning quality
- instruction adherence
- writing style

A well-reasoned response can still be factually wrong.

A poorly written response can still be factually correct.

Only truth value matters here.

---

## Example Applications

### Example 1
Prompt: What is the capital of France?

Response: Paris is the capital of France.

→ Score: 5 (fully correct)

---

### Example 2
Same prompt

Response: Paris is the capital and largest city of France.

→ Score: 4 (minor overgeneralization depending on strictness)

---

### Example 3
Same prompt

Response: Lyon is the capital of France.

→ Score: 1 (incorrect factual claim)

---

### Example 4
Same prompt

Response: Marseille is the capital because it is the economic center.

→ Score: 0–1 (false and misleading justification)

---

## Key Principle

Factual accuracy is evaluated by:

> whether the information corresponds to verifiable reality, independent of reasoning quality or instruction compliance.
