# Common Failure Modes (AI Evaluation)

This document defines recurring failure patterns observed in AI model outputs.

These patterns are used to quickly diagnose issues during evaluation runs and improve scoring consistency across tasks.

---

# Core Purpose

Failure modes help evaluators:

- Identify structured patterns of model errors
- Avoid treating isolated mistakes as random noise
- Recognize systematic weaknesses in responses
- Improve speed and consistency in scoring decisions

---

# PRIMARY FAILURE CATEGORIES

All model failures fall into four main categories:

1. Instruction Failures
2. Reasoning Failures
3. Factual Failures
4. Hallucination Failures

Each category contains recurring patterns below.

---

# 1. INSTRUCTION FAILURE MODES

## 1.1 Instruction Drift
Response gradually shifts away from the original task objective.

- Starts correctly but diverges in scope
- Introduces unrelated content
- Weak alignment with prompt intent

---

## 1.2 Partial Completion
Core task is started but not fully completed.

- Missing required sections
- Incomplete outputs
- Unfinished structured tasks

---

## 1.3 Constraint Violation
Explicit rules are broken.

- Format not followed
- Length exceeded or under-delivered
- Tone/style ignored

---

## 1.4 Exclusion Violation
Explicitly forbidden content is included.

- Disallowed topics
- Prohibited outputs
- Safety or policy violations

---

# 2. REASONING FAILURE MODES

## 2.1 Logical Gap
A required reasoning step is missing.

- Conclusion jumps without support
- Missing intermediate logic
- Inference chain incomplete

---

## 2.2 Unsupported Assertion
Claims are made without justification.

- Statements not backed by evidence
- No explanation or reasoning provided

---

## 2.3 Circular Reasoning
Conclusion is used as its own support.

- Self-referential logic loop
- No independent grounding

---

## 2.4 Contradiction
Internal inconsistency exists.

- Conflicting statements
- Mutually exclusive claims

---

## 2.5 Conclusion Drift
Final answer does not follow from reasoning.

- Premises do not support conclusion
- Sudden unexplained shift at end

---

# 3. FACTUAL FAILURE MODES

## 3.1 Incorrect Fact
A verifiable statement is wrong.

- Wrong dates, entities, definitions

---

## 3.2 Overgeneralization
A conditionally true fact is incorrectly universalized.

- True in some cases, applied broadly

---

## 3.3 Misinterpretation
Correct data is misunderstood or misrepresented.

- Wrong explanation of known facts

---

## 3.4 Outdated Information
Previously correct but no longer valid.

- Historical correctness, current invalidity

---

## 3.5 Misleading Precision
False specificity added.

- Fake numbers, fake dates, fake certainty

---

# 4. HALLUCINATION FAILURE MODES

## 4.1 Fabricated Entity
Non-existent people, companies, or events.

- Entirely invented references

---

## 4.2 Fake Citation
Invented sources or references.

- Unverifiable or non-existent citations

---

## 4.3 Unverifiable Claim
Asserted as fact without grounding.

- No evidence in prompt or real-world basis

---

## 4.4 False Association
Incorrect linkage between real entities.

- Misattributed relationships or events

---

## 4.5 Context Drift Hallucination
Claims not supported by provided context.

- Introduced external unsupported information

---

# CROSS-CUTTING FAILURE SIGNALS

These appear across multiple categories:

## A. Overconfidence
Strong assertion without adequate support

## B. Ambiguity Masking
Unclear statements used to hide uncertainty

## C. Scope Expansion
Adding information beyond what was asked

---

# EVALUATION USAGE RULES

When identifying failures:

- Always classify by primary category first
- Then assign severity based on rubric impact
- Multiple failures in one response should be tracked separately
- Hallucination failures override other categories in severity

---

# KEY PRINCIPLE

Most model failures are not random.

They are:

> repeatable, predictable patterns that can be consistently identified and scored
