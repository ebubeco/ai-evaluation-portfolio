
# Hallucination Patterns (Advanced Detection Guide)

This document defines advanced hallucination patterns observed in
AI model outputs.

It extends basic hallucination detection by focusing on subtle,
structured, and high-risk failure modes that are often missed in
surface-level evaluation.

---

## Core Definition

A hallucination occurs when a model:

> Produces information that is not grounded in the prompt, verified
> knowledge, or logical inference, while presenting it as fact.

Hallucinations can be:
- Obvious (fully fabricated entities)
- Subtle (misleading precision or weak grounding)
- Structural (systematic reasoning-based fabrication)

---

## 1. ENTITY HALLUCINATIONS

### 1.1 Fully Fabricated Entities
Non-existent people, organizations, or events.

- Invented names
- Fake institutions
- Non-existent historical events

**Detection signal:**
- No external verification possible
- Name "sounds plausible" but is untraceable

---

### 1.2 Entity Mutation
Real entity exists but is altered incorrectly.

- Wrong role assignment
- Incorrect titles or positions
- Misattributed achievements

Example pattern:
> Real person + incorrect context attached

---

### 1.3 Hybrid Entities
Mix of real and fake attributes.

- Real entity combined with fabricated details
- Partially correct but misleading identity

---

## 2. FACTUAL FABRICATION PATTERNS

### 2.1 False Specificity (Precision Illusion)
Highly detailed information that is not verifiable.

- Exact dates with no source
- Precise statistics without grounding
- Over-detailed explanations of uncertain facts

**Key risk:**
> Precision is used to simulate credibility

---

### 2.2 Invented Causality
False explanation of cause-effect relationships.

- Incorrect reasoning for known outcomes
- Plausible but unsupported causal chains

Example pattern:
> "X happened because of Y" with no evidence for Y

---

### 2.3 Fake Historical Narratives
Coherent but fabricated sequences of events.

- Smooth storytelling masking incorrect facts
- Chronologically plausible but false

---

## 3. CITATION AND SOURCE HALLUCINATIONS

### 3.1 Fake Citations
Invented references or sources.

- Non-existent papers
- Fabricated studies
- Made-up URLs or reports

---

### 3.2 Misleading Attribution
Real source exists but is misrepresented.

- Incorrect author
- Wrong publication context
- Distorted findings

---

## 4. REASONING-DRIVEN HALLUCINATIONS

### 4.1 Logical Fabrication
Model "fills gaps" in reasoning with invented facts.

- Assumptions presented as facts
- Missing steps replaced with invented information

---

### 4.2 Over-Inference
Excessive extrapolation beyond given data.

- Weak premise → strong conclusion
- Unsupported generalization

---

### 4.3 Confidence Masking
Uncertain information presented with high certainty.

- No hedging language
- Assertive tone without grounding

---

## 5. CONTEXTUAL HALLUCINATIONS

### 5.1 Prompt Drift Fabrication
Model introduces external information not in prompt.

- Adds unrelated facts
- Expands scope incorrectly
- Introduces external assumptions

---

### 5.2 Context Substitution
Replaces missing information with invented content.

- "Fills in gaps" incorrectly
- Assumes missing data instead of stating uncertainty

---

## 6. SUBTLE HALLUCINATION SIGNALS

These are the hardest to detect.

### 6.1 Plausibility Trap
Information sounds correct and is well-structured, but cannot
be verified.

**Key signal:**
> The response feels authoritative but has no traceable source.

Detection rule:
- If a claim is specific, confident, and unverifiable → treat
  as hallucination risk regardless of how plausible it sounds

---

### 6.2 Fluency Masking
Well-written, grammatically correct responses that contain
fabricated content.

**Key signal:**
> Quality of writing is used as a proxy for accuracy — this is
> always a false inference.

Detection rule:
- Evaluate grounding independently of writing quality
- Fluency never increases hallucination score

---

### 6.3 Partial Truth Embedding
Fabricated claims embedded within accurate information.

**Key signal:**
> Correct context surrounds an incorrect or invented claim,
> making it harder to isolate.

Detection rule:
- Evaluate each claim independently
- Do not allow surrounding accuracy to absorb a false claim

---

### 6.4 Confidence Gradient Manipulation
Response shifts from hedged to assertive tone as specificity
increases — without additional grounding.

**Key signal:**
> The more specific the claim, the more confident the tone —
> but specificity without evidence is a hallucination marker,
> not a credibility signal.

---

## 7. DETECTION PRIORITY HIERARCHY

When scanning for hallucinations, apply in this order:

1. **Entity check** — Are all named entities real and correctly
   described?
2. **Citation check** — Are all sources, studies, and reports
   verifiable?
3. **Specificity check** — Are precise figures, dates, and
   statistics grounded?
4. **Causality check** — Are cause-effect claims supported?
5. **Confidence check** — Is certainty level appropriate to
   the evidence available?

---

## 8. EVALUATOR FAILURE MODES

These are patterns where evaluators miss hallucinations:

### 8.1 Plausibility Bias
Accepting a claim because it sounds reasonable without
verifying grounding.

### 8.2 Fluency Bias
Treating well-written responses as more likely to be accurate.

### 8.3 Complexity Deference
Assuming detailed technical responses are correct because
they are hard to verify quickly.

### 8.4 Partial Verification Error
Verifying part of a response and assuming the rest is
also accurate.

---

## 9. CORE PRINCIPLE

> A hallucination is not identified by what is wrong.
> It is identified by what is ungrounded.

The question is never only "is this true?"

The question is:

> "What is this claim grounded in, and is that grounding
> sufficient to support the level of confidence expressed?"
