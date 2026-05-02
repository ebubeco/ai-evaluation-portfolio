# Failure Taxonomy Guide (How to Apply the Failure System in Practice)

This document operationalizes the failure taxonomy into a step-by-step evaluation workflow.

It is not theoretical — it is a **decision procedure for evaluators**.

---

# 1. PURPOSE OF THIS GUIDE

Evaluators often:
- misclassify failures
- under-detect hallucinations
- over-focus on surface issues (format, tone)
- miss root causes

This guide standardizes **how to think during evaluation**.

---

# 2. CORE EVALUATION FLOW (MANDATORY)

Every response must be analyzed in this order:

## Step 1 — Identify Task Intent
Determine:
- What is the user explicitly asking for?
- What outputs are required?
- What constraints are present?

> If intent is misread, all downstream evaluation is invalid.

---

## Step 2 — Check Instruction Compliance First

Ask:
- Did the model do exactly what was asked?

If NO → immediately mark:
- Instruction Failure (primary category)

Then continue analysis, but do NOT ignore this.

---

## Step 3 — Check Factual Validity

Evaluate:
- Are claims verifiable?
- Are entities correct?
- Are dates, names, or numbers accurate?

If uncertain:
- mark as potential factual risk
- do not assume correctness

---

## Step 4 — Detect Hallucinations

Look for:
- invented details
- overly specific unsupported claims
- fake citations or references
- fabricated reasoning chains

> Hallucination = content not grounded in prompt or known reality

---

## Step 5 — Evaluate Reasoning Integrity

Check:
- logical consistency
- step-by-step validity
- causal correctness

Common failure signals:
- contradictions
- invalid deductions
- skipped logical steps

---

## Step 6 — Check Completeness

Ask:
- Are all required elements present?
- Are sub-questions answered?

Missing elements → completeness failure

---

## Step 7 — Check Format & Structure

Validate:
- required format compliance
- section presence
- structural constraints

---

## Step 8 — Check Relevance

Identify:
- off-topic expansion
- unnecessary elaboration
- ignored constraints

---

# 3. FAILURE PRIORITY RULE

When multiple failures exist:

### Priority order:
1. Instruction Failure
2. Hallucination Failure
3. Factual Failure
4. Reasoning Failure
5. Completeness Failure
6. Relevance Failure
7. Format Failure

> Higher-priority failures determine final score cap.

---

# 4. COMMON EVALUATION ERRORS

## 4.1 “Aesthetic Bias”
Mistaking well-written output for correct output.

### Fix:
- Always separate fluency from correctness

---

## 4.2 “Surface Matching Error”
Assuming compliance because response “looks right”.

### Fix:
- Verify each constraint explicitly

---

## 4.3 “Over-Generous Scoring”
Ignoring small violations in otherwise good responses.

### Fix:
- Apply taxonomy strictly

---

## 4.4 “Hallucination Blind Spot”
Missing fabricated specificity.

### Fix:
- Challenge all precise unsupported claims

---

# 5. FAILURE DETECTION SIGNALS

## Strong hallucination signals:
- exact numbers without source
- highly specific claims with no grounding
- confident tone + unverifiable detail

## Instruction failure signals:
- missing required format
- missing required sections
- wrong output type entirely

## Reasoning failure signals:
- logical jumps
- contradictions
- invalid conclusions

---

# 6. AMBIGUITY HANDLING RULE

If the prompt is unclear:

### Do NOT penalize:
- reasonable interpretation choice
- assumption-based completion

### DO penalize:
- ignoring explicit constraints
- failing to attempt reasonable interpretation

---

# 7. MULTI-FAILURE REPORTING FORMAT

When documenting failures:

Always include:

- Primary failure type
- Secondary failures (if any)
- Severity per failure
- Brief justification

Example:

- Primary: Instruction Failure (Critical)
- Secondary: Hallucination (Major)
- Note: fabricated entity + missing required format

---

# 8. GOLD STANDARD EVALUATION BEHAVIOR

A correct evaluator:
- starts from instructions
- validates facts independently
- detects hallucinations aggressively
- avoids aesthetic bias
- prioritizes structure over impression

---

# CORE PRINCIPLE

> Evaluation is a constraint-checking process, not a reading comprehension exercise.
