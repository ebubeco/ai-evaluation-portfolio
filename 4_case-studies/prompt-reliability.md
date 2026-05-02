# RLHF Case Study — Prompt Reliability (Unified Stress Test Framework)

**Evaluator:** Ebubechukwu Okeke  
**Domain:** Instruction Following / Prompt Engineering / Evaluation Systems  
**Task Type:** Constraint Stress Testing + Prompt Perturbation + Failure Recovery  
**Date:** 2024  
**Status:** Consolidated Evaluation Artifact  

---

## 1. Objective

This unified case study combines two complementary reliability failure lenses:

1. **Constraint Conflict Stress Testing**
   - What happens when prompts contain *competing requirements that cannot all be satisfied*?

2. **Semantic Invariance Stress Testing**
   - What happens when prompts are *semantically identical but structurally varied*?

Together, they evaluate:

> how models fail under both **over-constrained tasks** and **rephrased but equivalent tasks**

This isolates two core RLHF weaknesses:
- silent information loss under constraint pressure  
- instability under representation change  

---

## 2. Core Test Scenarios

---

# PART A — Constraint Conflict Failure Mode

## A1. Original Underspecified Prompt

> "Write me a summary of the report."

### Model Output

> I'd be happy to help summarise the report. Could you please share the report you'd like me to summarise?

### Analysis

This is a valid refusal-by-clarification. However, in evaluation terms, it is **non-informative for reliability testing** because:
- no content is available
- no constraint interaction occurs
- no failure surface is triggered

---

## A2. Stress-Test Prompt (Constraint Conflict)

> "Summarise the following market research report in plain language for a non-technical executive audience. Keep it under 150 words and make sure to include all the key findings."
>
> [1,200-word report containing 7 distinct findings across 4 segments, including conflicting data in two sections]

---

### Model Output

- 148-word summary produced  
- Tone: correct (executive, simplified)  
- Structure: coherent and compressed  

---

## A3. Failure Analysis — Constraint Conflict Mode

### Observed Behaviour

The model:

- satisfies word limit constraint
- partially satisfies content constraint
- does NOT explicitly flag constraint impossibility
- silently compresses or omits findings

---

### Key Failure Pattern

> **Silent constraint resolution through information compression**

Instead of:
- rejecting task
- or flagging impossibility
- or explicitly prioritising constraints

The model:
> resolves tension invisibly by dropping information

---

### Failure Classification

| Failure Type | Description | Severity |
|-------------|------------|----------|
| Silent omission | Missing required findings not signalled | High |
| Constraint prioritisation bias | Word count dominates completeness | High |
| False completeness illusion | Output appears fully compliant | Critical |

---

### Core Insight

When constraints conflict:

> models optimise for *verifiable formatting constraints* over *semantic completeness*

This produces outputs that are:
- fluent  
- compliant-looking  
- structurally valid  
- but informationally incomplete  

---

### Improved Prompt Design Principle

To correct this failure:

- enforce explicit enumeration
- separate constraints into sequential steps
- require conflict reporting behavior

---

### Improved Output Strategy

A correct system should:
- list all 7 findings explicitly
- or declare inability to compress without loss
- or structure output in sections instead of forced compression

---

---

# PART B — Semantic Invariance Failure Mode

## B1. Base Task

> Explain the benefits of exercise for mental health.

---

## B2. Prompt Variants

- A: formal instruction  
- B: paraphrased version  
- C: compressed query  
- D: conversational framing  

---

## B3. Observed Behaviour

Across variants, outputs remain semantically similar but structurally unstable:

- consistent facts (endorphins, anxiety reduction, sleep improvement)
- inconsistent depth and structure
- tone shifts depending on prompt form

---

## B4. Stability Breakdown

| Prompt Type | Output Structure | Depth | Tone |
|------------|----------------|------|------|
| A | structured | high | formal |
| B | structured | high | formal |
| C | compressed | low | generic |
| D | conversational | medium | informal |

---

## B5. Failure Analysis — Semantic Invariance Mode

### Observed Behaviour

The model:

- treats longer prompts as requiring deeper reasoning
- treats shorter prompts as low-effort queries
- allows tone to influence explanation depth
- does not normalise intent before responding

---

### Key Failure Pattern

> **Representation-dependent reasoning depth scaling**

Instead of preserving a stable internal intent representation, the model:
- adapts reasoning depth to surface form
- overfits to linguistic structure
- weakens explanations under compression

---

### Failure Classification

| Failure Type | Description | Severity |
|-------------|------------|----------|
| Paraphrase sensitivity | Different outputs for same intent | High |
| Depth instability | Explanation quality varies | High |
| Tone leakage | Style affects reasoning depth | Medium |

---

### Core Insight

Even when semantic meaning is identical:

> output quality is not stable across prompt representations

This indicates:
- weak intent canonicalisation
- surface-form conditioning bias
- inconsistent reasoning scaling

---

---

# 3. Unified Failure Taxonomy

This case study reveals two orthogonal RLHF failure modes:

---

## (1) Constraint Conflict Failure

> The model silently sacrifices completeness to satisfy measurable constraints.

### Signature:
- word limit satisfied
- missing content undetected
- no explicit failure signalling

---

## (2) Semantic Instability Failure

> The model changes reasoning depth and structure across paraphrased prompts.

### Signature:
- same intent → different output depth
- tone influences reasoning completeness
- inconsistent abstraction level

---

---

## 4. Root Cause Synthesis

### Primary Systemic Cause

The model does not fully separate:

> semantic intent representation  
from  
> surface prompt structure

---

### Resulting Behaviour

It optimises locally for:
- fluency
- compliance
- structural validity

Rather than globally for:
- completeness
- invariance
- constraint reconciliation

---

## 5. Combined Failure Model

| Dimension | Constraint Failure | Invariance Failure |
|----------|------------------|--------------------|
| Trigger | conflicting constraints | paraphrase variation |
| Output risk | hidden omission | inconsistent reasoning |
| Visibility | low (hard to detect) | medium (comparative) |
| Severity | critical in summarisation | critical in robustness |

---

## 6. Correct System Behaviour Model

A robust RLHF-aligned system should:

### For constraint conflict:
- detect impossibility
- explicitly prioritise constraints
- or request relaxation

### For semantic invariance:
- canonicalise intent
- normalise prompt structure internally
- maintain stable reasoning depth across paraphrases

---

## 7. Final Insight

This unified evaluation demonstrates:

> Model failure is not primarily about correctness, but about **how it resolves ambiguity and constraint pressure internally**

Two dominant failure archetypes emerge:

1. **Invisible compression of information under constraint pressure**
2. **Instability of reasoning under representation variation**

Together, they define a core RLHF evaluation boundary:

> A model is not reliable if it is either *incomplete under pressure* or *inconsistent under paraphrase*

---

## 8. Evaluation Summary

| Capability | Performance |
|------------|------------|
| Constraint handling | Weak |
| Completeness preservation | Weak |
| Paraphrase invariance | Moderate–Weak |
| Reliability under stress | Inconsistent |

---

## 9. Final Note

This case study shows that prompt reliability is not a single property, but a **composite of constraint reasoning and semantic stability**.

A model can appear correct while failing both if:
- it silently drops information under compression
- and varies reasoning depth across equivalent inputs

This is why robustness testing must include both:
- constraint conflict scenarios  
- semantic invariance scenarios
