# Run 001 — Instruction Following Evaluation

**Evaluator:** AI Evaluation Portfolio  
**Date:** 2026-04-06  
**Task Type:** Instruction Adherence Assessment  
**Difficulty Tier:** Mixed (Basic → Complex)  
**Evaluation Mode:** Pairwise comparison + rubric scoring

---

## 1. Purpose

This run evaluates a model’s ability to correctly interpret and execute explicit instructions under varying constraint complexity.

Focus areas:
- Instruction parsing accuracy
- Constraint hierarchy handling
- Format compliance
- Omission vs over-generation control
- Multi-step instruction execution fidelity

---

## 2. Evaluation Rubric (Reference)

Referenced externally: `1_rubrics/instruction_adherence.md`

### Scoring Scale

| Score | Label | Definition |
|------|------|-----------|
| 5 | Full Adherence | All constraints satisfied |
| 4 | Minor Deviation | 1 non-critical violation |
| 3 | Partial Adherence | Multiple minor or 1 moderate violation |
| 2 | Significant Failure | Critical constraint violated |
| 1 | Non-Adherent | Core instruction ignored |

### Constraint Severity Levels
- Critical: format, exclusions, required structure
- Moderate: tone, ordering, length constraints
- Minor: stylistic preferences

---

## 3. Evaluation Design

Each task includes:
- Prompt with explicit constraints
- Two candidate responses (A vs B)
- Constraint audit table
- Score justification
- Winner selection

---

## 4. Task 001-A — Constraint Compliance (Email Generation)

### Prompt
Write a professional email declining a job offer.

Constraints:
1. Do not mention company name
2. Keep under 100 words
3. Include exactly one reason
4. Do not use “unfortunately”
5. End with a wish for success

---

### Response A
Thank you for the offer. After careful consideration, I have chosen to pursue another opportunity more aligned with my long-term goals. I appreciate your time and consideration throughout the process. Wishing your team continued success.

---

### Response B
Dear [Company Name],

Unfortunately, I must decline. I have accepted another position that better suits my current situation. Thank you for your time.

Best wishes for the company’s success.

---

### Evaluation — Response A

| Constraint | Status | Notes |
|------------|--------|------|
| No company name | ✓ Pass | Not mentioned |
| Under 100 words | ✓ Pass | 56 words |
| One reason only | ✓ Pass | Single consolidated reason |
| No “unfortunately” | ✓ Pass | Not present |
| Ends with success wish | ✓ Pass | Present |

**Score: 5/5**

---

### Evaluation — Response B

| Constraint | Status | Notes |
|------------|--------|------|
| No company name | ✗ Fail | “[Company Name]” present |
| Under 100 words | ✓ Pass |
| One reason only | ✗ Fail | Two distinct reasons implied |
| No “unfortunately” | ✗ Fail | Present |
| Ends with success wish | ✓ Pass |

**Score: 2/5**

---

### Verdict
Winner: Response A (high confidence)

---

## 5. Task 001-B — Structural Constraint (Technical Explanation)

### Prompt
Explain HTTPS.

Constraints:
- Exactly 3 sections: Overview, How It Works, Why It Matters
- Each section 2–3 sentences
- No lists
- No TCP/IP or OSI mention
- Non-technical audience

---

### Response A
(Compliant structured explanation)

Score: 5/5

---

### Response B
(Contains lists, jargon, forbidden terms)

Score: 1/5

---

### Verdict
Winner: Response A

---

## 6. Task 001-C — Ambiguity Handling

### Prompt
Summarize in 3 LinkedIn bullet points.

Constraints:
- 3 bullets only
- <20 words each
- Professional but conversational

---

### Response A
Strictly compliant summary

Score: 5/5

### Response B
Adds CTA + header + emoji

Score: 4/5

---

### Verdict
Winner: Response A (moderate preference)

---

## 7. Task 001-D — Multi-Constraint Execution

### Prompt
5 productivity tips for developers.

Constraints:
- numbered 1–5
- action verbs
- no sleep/exercise
- one sentence each
- last must be code reviews

---

### Response A
Fully compliant

Score: 5/5

### Response B
Includes exercise + misinterpreted code review

Score: 2/5

---

### Verdict
Winner: Response A

---

## 8. Aggregate Results

| Task | Winner | Score A | Score B | Confidence |
|------|--------|--------|--------|------------|
| 001-A | A | 5 | 2 | High |
| 001-B | A | 5 | 1 | High |
| 001-C | A | 5 | 4 | Medium |
| 001-D | A | 5 | 2 | High |

---

## 9. Evaluator Notes

### Observed Pattern
Most failures in weaker responses stem from:
- explicit constraint violations
- format drift
- over-generation beyond scope

### Calibration Insight
Strict constraint adherence correlates strongly with overall instruction fidelity.

---

## 10. Core Principle

Instruction following is evaluated as:

> Constraint satisfaction under deterministic interpretation rules.Model B better adheres to instruction requiring simplicity. Model A introduces unnecessary technical terminology.

---

### Balanced Annotator
**Decision:** Model B  
**Rationale:**  
Both are accurate, but Model B provides clearer and more accessible explanation with minimal complexity.

---

### Pragmatic Annotator
**Decision:** Model B  
**Rationale:**  
Model B is easier to understand for a general user and delivers the intended explanation more effectively.

---

## Final Aggregated Decision
**Winner:** Model B  
**Vote Split:** 3–0  

**Resolution Logic:**  
Full agreement across annotators. Model B best satisfies simplicity requirement while maintaining accuracy.
