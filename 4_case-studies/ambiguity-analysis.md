# RLHF Case Study — Ambiguity Failure Under Underspecified Prompts

**Evaluator:** Ebubechukwu Okeke  
**Domain:** Knowledge Synthesis / Workplace Analytics  
**Task Type:** Ambiguity Resolution + Instruction Interpretation  
**Date:** 2024  
**Status:** Completed Evaluation  

---

## 1. Objective

This case study evaluates how a model behaves when presented with an **underspecified but syntactically valid instruction**, focusing on:

- Scope ambiguity resolution
- Assumption selection bias
- Loss of interpretive plurality
- Premature narrative closure
- Completeness illusion in fluent outputs

The key question is not whether the response is factually correct, but whether it **misrepresents the problem space by over-committing to a single interpretation**.

---

## 2. User Prompt

> "Summarize the impact of remote work on productivity."

---

## 3. Model Response (Under Review)

> "Remote work has significantly improved productivity by reducing commute times and allowing employees to focus in a more comfortable environment. Many workers report higher efficiency and better work-life balance. Companies have also seen cost savings and improved output."

---

## 4. Ambiguity Profile

The prompt contains **latent multi-dimensional ambiguity**:

### (A) Productivity definition ambiguity
- Individual output
- Team coordination efficiency
- Organisational performance metrics

### (B) Time horizon ambiguity
- Short-term adaptation effects
- Long-term structural effects

### (C) Perspective ambiguity
- Employee-centred productivity
- Employer-centred productivity
- Hybrid/system-level productivity

### (D) Measurement ambiguity
- Subjective self-reports
- Quantitative output metrics
- Economic productivity indicators

---

## 5. Observed Model Behaviour

### ❌ Single-Narrative Convergence

The model collapses all interpretations into one dominant framing:

> Remote work → productivity improvement narrative

This framing:
- Prioritises individual-level experience
- Assumes net-positive productivity outcome
- Excludes countervailing effects

---

### ❌ Absence of Interpretive Branching

The response does not:
- Separate competing interpretations
- Acknowledge definitional variability
- Condition claims on scope selection

Instead, it presents a **unified conclusion as if the domain is well-defined**.

---

### ❌ Hidden Assumption Selection

The model implicitly assumes:

- Productivity = individual efficiency
- Remote work effects = generally positive
- Short-term signals generalise to systemic outcomes

These assumptions are not stated or justified.

---

## 6. Failure Classification

| Failure Type | Description | Severity |
|-------------|------------|----------|
| Ambiguity collapse | Multiple valid interpretations reduced to one | High |
| Assumption injection | Unstated framing of “productivity” | High |
| Narrative overconfidence | Definitive tone without scope qualification | Medium |
| Interpretive loss | Failure to preserve alternative valid views | High |

---

## 7. Why This Is a Critical Failure Mode

This is **not a factual error**.

The claims made are individually plausible.

The failure lies in:

> presenting one valid interpretation as the complete interpretation

This creates:

- false analytical completeness
- suppressed uncertainty
- distorted decision input for downstream use

---

## 8. Root Cause Analysis

### Primary Cause: Premature Semantic Closure

The model resolves ambiguity immediately rather than maintaining interpretive openness.

Once a dominant heuristic is selected (“remote work improves productivity”), all subsequent reasoning is aligned to it.

---

### Secondary Cause: Optimization for Coherence

The model prioritises:
> coherent narrative > representational completeness

This leads to:

- smooth summaries
- reduced contradiction
- suppressed alternative framing

---

### Structural Issue:

The system lacks enforced constraints for:

> “multi-frame preservation under underspecified prompts”

---

## 9. Corrected Response Strategy

A robust response should:

1. Identify ambiguity explicitly
2. Partition interpretations by dimension
3. Avoid collapsing perspectives prematurely
4. Present conditional conclusions

---

## 10. Improved Response (Ambiguity-Preserving)

> The impact of remote work on productivity depends on how productivity is defined and measured.
>
> From an individual perspective, remote work can increase productivity by reducing commute time and improving flexibility, although results vary depending on work environment and role.
>
> From a team or organisational perspective, productivity effects are mixed. Some studies highlight efficiency gains, while others note challenges in communication, coordination, and collaboration.
>
> Over time, short-term productivity gains may differ from long-term structural effects, particularly as organisations adapt workflows and management systems.
>
> Without specifying scope and measurement criteria, no single conclusion fully captures the impact.

---

## 11. Key Insight

This failure mode is characterised by:

> **interpretive compression under ambiguity pressure**

The model does not hallucinate facts — it hallucinates **completeness**.

This is more subtle than factual error because:
- it remains linguistically correct
- it appears analytically sufficient
- it passes casual review

---

## 12. Evaluation Summary

| Dimension | Performance |
|----------|------------|
| Ambiguity recognition | Weak |
| Multi-frame reasoning | Missing |
| Assumption transparency | Low |
| Analytical completeness control | Poor |

---

## 13. Final Note

This case demonstrates a core RLHF challenge:

> Fluency is not a substitute for structural correctness.

A response is not reliable if it:
- selects a single interpretation without justification
- suppresses valid alternative framings
- presents partial analysis as complete analysis

In evaluation systems, this failure mode is especially dangerous because it is **highly readable yet epistemically incomplete**.
