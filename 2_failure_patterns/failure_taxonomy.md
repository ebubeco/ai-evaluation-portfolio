# Failure Taxonomy (System-Level Classification of Model Errors)

This document defines a structured taxonomy for categorizing failure modes in model outputs.

It is used to:
- Standardize evaluator judgment
- Improve diagnostic consistency
- Enable downstream error analytics
- Separate symptom vs root-cause failures

---

# 1. CORE FAILURE CATEGORIES

All failures in model outputs fall into one or more of the following categories:

## 1.1 Instruction Failure (IF)

Failure to correctly follow explicit instructions in the prompt.

### Subtypes:
- IF-1: Task omission (core requirement not completed)
- IF-2: Constraint violation (format, length, style)
- IF-3: Requirement misunderstanding (misinterpreting instruction intent)
- IF-4: Partial execution (task started but not completed)

---

## 1.2 Factual Failure (FF)

Incorrect, misleading, or unverifiable information presented as true.

### Subtypes:
- FF-1: Direct factual error
- FF-2: Outdated information treated as current
- FF-3: Unsupported claims (no basis provided or implied authority)
- FF-4: Entity misidentification (wrong person, place, or concept)

---

## 1.3 Hallucination Failure (HF)

Generation of content that is not grounded in input context or known data.

### Subtypes:
- HF-1: Fabricated entities
- HF-2: Invented citations or sources
- HF-3: False specificity (overly precise but incorrect details)
- HF-4: Confabulated reasoning chains

---

## 1.4 Reasoning Failure (RF)

Logical breakdowns in multi-step thinking.

### Subtypes:
- RF-1: Invalid deduction
- RF-2: Internal contradiction
- RF-3: Broken causal chain
- RF-4: Misapplied rule or formula

---

## 1.5 Completeness Failure (CF)

Failure to fully satisfy task scope.

### Subtypes:
- CF-1: Missing required elements
- CF-2: Incomplete response structure
- CF-3: Skipped sub-questions
- CF-4: Truncated reasoning or output

---

## 1.6 Format Failure (FFM)

Violations of required output structure.

### Subtypes:
- FFM-1: Incorrect formatting (markdown, JSON, etc.)
- FFM-2: Missing required sections
- FFM-3: Extra forbidden sections
- FFM-4: Structural misalignment with specification

---

## 1.7 Relevance Failure (RFV)

Content does not align with task intent.

### Subtypes:
- RFV-1: Topic drift
- RFV-2: Over-expansion beyond scope
- RFV-3: Irrelevant additions
- RFV-4: Ignoring key user constraints

---

## 1.8 Safety / Policy Failure (SPF)

Violations of safety constraints or prohibited content generation.

### Subtypes:
- SPF-1: Disallowed content generation
- SPF-2: Sensitive data leakage
- SPF-3: Unsafe instruction provision
- SPF-4: Policy boundary evasion

---

# 2. MULTI-FAILURE INTERACTIONS

A single response may contain multiple failure types.

### Rule:
> Always identify ALL applicable failures, not just the dominant one.

Example:
- Instruction failure + hallucination + format violation

---

# 3. SEVERITY MAPPING

Each failure type is mapped to severity:

| Severity | Meaning |
|----------|--------|
| Critical | Breaks task validity entirely |
| Major | Strongly degrades correctness or usability |
| Minor | Does not significantly affect outcome |

---

## Default Severity Mapping

- Instruction Failure → Major to Critical
- Factual Failure → Major to Critical
- Hallucination → Critical
- Reasoning Failure → Major
- Completeness Failure → Major
- Format Failure → Minor to Major
- Relevance Failure → Minor to Major
- Safety Failure → Critical (always)

---

# 4. ROOT CAUSE VS SYMPTOM

## Root Cause:
The underlying reason the model failed.

Examples:
- misunderstanding instruction
- weak retrieval grounding
- reasoning breakdown

## Symptom:
The visible manifestation.

Examples:
- wrong answer
- missing section
- hallucinated detail

---

### Rule:
> Always separate root cause analysis from observed failure type.

---

# 5. FAILURE IDENTIFICATION RULE

When analyzing a response:

1. Identify observable errors
2. Map each error to taxonomy category
3. Assign severity per failure
4. Determine primary failure driver
5. Note secondary contributing failures

---

# 6. TAXONOMY CONSISTENCY RULE

If unsure between categories:

### Priority rule:
1. Instruction Failure first
2. Factual Failure second
3. Hallucination third
4. Other categories after

---

# CORE PRINCIPLE

> Failures must be classified precisely, not impressionistically.

This taxonomy exists to enforce diagnostic rigor, not subjective judgment.
