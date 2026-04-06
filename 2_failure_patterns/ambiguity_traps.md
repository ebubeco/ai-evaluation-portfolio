# Ambiguity Traps (Systematic Sources of Misleading Evaluation and Model Error)

This document defines recurring ambiguity structures that cause incorrect evaluation outcomes, inconsistent scoring, or model misinterpretation.

Ambiguity traps are NOT errors by themselves — they are conditions that lead to errors if not handled correctly.

---

# 1. DEFINITION

An ambiguity trap occurs when:
- the instruction is underspecified, OR
- multiple valid interpretations exist, OR
- constraints conflict, OR
- evaluation criteria are not clearly separable

> Core issue: the system cannot determine a single ground-truth interpretation without assumptions.

---

# 2. TYPES OF AMBIGUITY TRAPS

## 2.1 Instructional Under-specification (AT-1)

The prompt does not fully define required outputs.

### Example:
- “Summarize this”
- No length, format, or focus specified

### Risk:
Evaluators impose subjective expectations.

---

## 2.2 Multi-Intent Confusion (AT-2)

A single prompt contains multiple implicit tasks.

### Example:
- “Explain X and compare it with Y and give examples”

### Risk:
Partial completion is mis-scored as failure.

---

## 2.3 Constraint Conflict (AT-3)

Two or more constraints contradict each other.

### Example:
- “Be extremely detailed” + “Keep it under 50 words”

### Risk:
Evaluator incorrectly penalizes unavoidable trade-offs.

---

## 2.4 Hidden Preference Injection (AT-4)

Implicit stylistic or structural expectations not stated.

### Example:
- Expecting bullet points when not requested
- Expecting academic tone without instruction

### Risk:
Subjective bias in scoring.

---

## 2.5 Open Interpretation Space (AT-5)

Multiple valid approaches exist with no canonical answer.

### Example:
- Creative writing tasks
- Strategy suggestions
- Design problems

### Risk:
False “incorrectness” labeling.

---

## 2.6 Granularity Mismatch (AT-6)

Mismatch between expected detail level and model output.

### Example:
- User expects deep analysis
- Model gives summary (or vice versa)

### Risk:
Misjudging completeness.

---

## 2.7 Implicit Context Dependency (AT-7)

Missing background assumed by evaluator or model.

### Example:
- references to prior conversation not included in prompt

### Risk:
False hallucination detection or incorrect penalization.

---

# 3. AMBIGUITY RESOLUTION STRATEGY

When ambiguity is detected:

## Step 1: Classify type
Identify which AT category applies.

## Step 2: Check if interpretation is reasonable
Accept any interpretation that:
- is consistent with prompt
- satisfies at least one plausible reading

## Step 3: Avoid over-penalization
Do NOT penalize:
- reasonable assumptions
- alternate valid interpretations

## Step 4: Only penalize when:
- explicit constraints are ignored
- or interpretation is logically inconsistent with prompt

---

# 4. EVALUATOR FAILURE MODES

## 4.1 Assumption Lock-in
Evaluator commits to one interpretation too early.

## 4.2 Hidden Expectation Bias
Evaluator applies unstated criteria.

## 4.3 Overfitting to Preferred Format
Rejecting valid outputs due to format preference.

## 4.4 False Under-completeness
Marking response incomplete when ambiguity allows flexibility.

---

# 5. DISAMBIGUATION PRINCIPLE

> If multiple valid interpretations exist, correctness is defined as:
> “Satisfies at least one reasonable interpretation of the prompt.”

---

# 6. HIGH-RISK AREAS FOR AMBIGUITY

- summarization tasks
- creative generation
- open-ended reasoning
- multi-step instructions
- evaluation rubric tasks
- comparative analysis

---

# 7. REPORTING FORMAT

When ambiguity affects evaluation:

- Type: AT-X
- Severity: Low / Medium / High impact on scoring validity
- Description of competing interpretations
- Chosen interpretation and justification

---

# CORE PRINCIPLE

> Ambiguity is not failure — mismanaging ambiguity is.
