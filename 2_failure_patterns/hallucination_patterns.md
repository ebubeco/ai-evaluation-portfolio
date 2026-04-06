# Hallucination Patterns (Advanced Detection Guide)

This document defines advanced hallucination patterns observed in AI model outputs.

It extends basic hallucination detection by focusing on subtle, structured, and high-risk failure modes that are often missed in surface-level evaluation.

---

# Core Definition

A hallucination occurs when a model:

> Produces information that is not grounded in the prompt, verified knowledge, or logical inference, while presenting it as fact.

Hallucinations can be:
- obvious (fully fabricated entities)
- subtle (misleading precision or weak grounding)
- structural (systematic reasoning-based fabrication)

---

# 1. ENTITY HALLUCINATIONS

## 1.1 Fully Fabricated Entities
Non-existent people, organizations, or events.

- Invented names
- Fake institutions
- Non-existent historical events

**Detection signal:**
- No external verification possible
- Name “sounds plausible” but is untraceable

---

## 1.2 Entity Mutation
Real entity exists but is altered incorrectly.

- Wrong role assignment
- Incorrect titles or positions
- Misattributed achievements

Example pattern:
> Real person + incorrect context attached

---

## 1.3 Hybrid Entities
Mix of real and fake attributes.

- Real entity combined with fabricated details
- Partially correct but misleading identity

---

# 2. FACTUAL FABRICATION PATTERNS

## 2.1 False Specificity (Precision Illusion)
Highly detailed information that is not verifiable.

- Exact dates with no source
- Precise statistics without grounding
- Over-detailed explanations of uncertain facts

**Key risk:**
> Precision is used to simulate credibility

---

## 2.2 Invented Causality
False explanation of cause-effect relationships.

- Incorrect reasoning for known outcomes
- Plausible but unsupported causal chains

Example pattern:
> “X happened because of Y” with no evidence for Y

---

## 2.3 Fake Historical Narratives
Coherent but fabricated sequences of events.

- Smooth storytelling masking incorrect facts
- Chronologically plausible but false

---

# 3. CITATION AND SOURCE HALLUCINATIONS

## 3.1 Fake Citations
Invented references or sources.

- Non-existent papers
- Fabricated studies
- Made-up URLs or reports

---

## 3.2 Misleading Attribution
Real source exists but is misrepresented.

- Incorrect author
- Wrong publication context
- Distorted findings

---

# 4. REASONING-DRIVEN HALLUCINATIONS

## 4.1 Logical Fabrication
Model “fills gaps” in reasoning with invented facts.

- Assumptions presented as facts
- Missing steps replaced with invented information

---

## 4.2 Over-Inference
Excessive extrapolation beyond given data.

- Weak premise → strong conclusion
- Unsupported generalization

---

## 4.3 Confidence Masking
Uncertain information presented with high certainty.

- No hedging language
- Assertive tone without grounding

---

# 5. CONTEXTUAL HALLUCINATIONS

## 5.1 Prompt Drift Fabrication
Model introduces external information not in prompt.

- Adds unrelated facts
- Expands scope incorrectly
- Introduces external assumptions

---

## 5.2 Context Substitution
Replaces missing information with invented content.

- “Fills in gaps” incorrectly
- Assumes missing data instead of stating uncertainty

---

# 6. SUBTLE HALLUCINATION SIGNALS

These are the hardest to detect.

## 6.1 Plausibility Trap
Information sounds correct
