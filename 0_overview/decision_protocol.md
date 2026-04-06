# Decision Protocol

This document defines the step-by-step process I follow when evaluating AI model outputs. It is designed to ensure consistent, defensible decisions across all task types.

---

## Step 1 — Read the Full Prompt Before Reviewing Any Response

Before evaluating any output:

- Read the entire task prompt
- Identify all explicit instructions and constraints
- Note any formatting, length, or content requirements
- Flag any ambiguous instructions before proceeding

> A response cannot be evaluated accurately without first understanding exactly what was asked.

---

## Step 2 — Identify the Evaluation Criteria

Extract the following from the prompt:

- **Primary requirement** — the core task the response must complete
- **Secondary requirements** — additional constraints or conditions
- **Format requirements** — structure, length, tone, or style rules
- **Exclusion rules** — anything the response must not include

---

## Step 3 — Evaluate Each Response Independently

Before comparing responses:

- Score each response against the criteria identified in Step 2
- Do not allow the quality of one response to influence the evaluation of another
- Note specific failures and successes for each response separately

---

## Step 4 — Classify Any Failures

For each failure identified, classify it as:

| Failure Type | Definition |
|--------------|------------|
| Critical | Direct violation of a core instruction or factual error |
| Moderate | Partially meets requirements but with notable gaps |
| Minor | Small issues that do not significantly affect overall quality |

---

## Step 5 — Compare and Rank

When ranking multiple responses:

- The response with fewer critical failures ranks higher
- If critical failures are equal, the response with fewer moderate failures ranks higher
- Style, tone, and fluency are tiebreakers only — never primary criteria
- A well-written response with a critical failure ranks below a plain response with no critical failures

---

## Step 6 — Write the Justification

Every decision requires a written justification that states:

- Which response was selected
- What the winning response did correctly
- What the losing response failed to do
- Which specific instruction or criterion determined the outcome

Justifications must be:

- Specific — reference the exact failure or success
- Concise — 2–4 sentences maximum
- Reproducible — another evaluator following the same protocol should reach the same conclusion

---

## Step 7 — Consistency Check

Before submitting:

- Verify the decision is consistent with the evaluation criteria
- Confirm the justification references a specific instruction
- Check that no response was penalized for style when the failure was actually a content issue

---

## Tiebreaker Hierarchy

When two responses are equally strong on primary criteria:

1. Completeness — which response more fully addresses the prompt
2. Factual accuracy — which response contains fewer unverified claims
3. Instruction adherence — which response follows all constraints
4. Clarity — which response communicates more precisely
5. Fluency — style and readability, last resort only

---

This protocol is applied consistently across all evaluation runs in this portfolio.
