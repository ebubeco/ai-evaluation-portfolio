# Edge Cases in Evaluation (Ambiguity & Borderline Scoring Guide)

This document defines how to evaluate responses that do not clearly fall into a single score band or exhibit mixed-quality behaviors.

Edge cases are the most important source of evaluator inconsistency. This guide standardizes judgment.

---

# 1. MIXED QUALITY RESPONSES

## 1.1 Partial Success with Critical Failure

A response may:
- correctly complete part of the task
- but violate a core constraint

### Rule:
> Any critical violation overrides partial correctness.

### Example patterns:
- correct answer + wrong format
- correct reasoning + prohibited content
- correct structure + missing required element

### Scoring principle:
- Prioritize failure severity over completion level

---

## 1.2 High Quality with Single Fatal Error

A response may be:
- logically strong
- well-structured
- mostly correct
but contains one core violation

### Rule:
> A single critical instruction violation caps score at 2–3 depending on severity.

---

# 2. AMBIGUOUS INSTRUCTIONS

## 2.1 Underspecified Task

If the prompt lacks clarity:
- multiple valid interpretations exist
- no explicit constraints define boundaries

### Rule:
> Evaluate based on the most reasonable interpretation consistent with intent.

Do NOT penalize for:
- choosing one valid interpretation over another
- reasonable assumptions

---

## 2.2 Conflicting Instructions

When instructions contradict each other:

### Priority order:
1. Explicit constraints (format, exclusions)
2. Core task requirement
3. Style guidance
4. Implicit expectations

### Rule:
> Always satisfy higher-priority constraint even if lower-level instruction is violated.

---

# 3. BORDERLINE SCORING ZONES

## 3.1 Score 3 (Critical Zone)

A response is score 3 when:
- core task is completed
- but important secondary constraints are missed

### Characteristics:
- usable but imperfect
- partially compliant
- noticeable gaps

---

## 3.2 Score 2 (Failure Zone)

A response is score 2 when:
- attempt is visible
- but core instruction adherence is broken

### Characteristics:
- major omissions
- structural failure
- incorrect interpretation of task

---

## 3.3 Score 4 (Near-Perfect Zone)

A response is score 4 when:
- all major requirements are met
- only minor deviations exist

### Acceptable deviations:
- slight verbosity issues
- minor formatting imperfections
- negligible omissions

---

# 4. PARTIAL CONSTRAINT VIOLATIONS

## 4.1 Soft Constraint Violations

Examples:
- tone mismatch
- minor formatting issues
- slight over/under length

### Rule:
> Do not heavily penalize unless it affects usability.

---

## 4.2 Hard Constraint Violations

Examples:
- forbidden content included
- missing required format element
- incorrect output structure

### Rule:
> Always treat as major or critical failure depending on severity.

---

# 5. INSTRUCTION PRIORITY CONFLICT RESOLUTION

When multiple instructions conflict:

### Resolution hierarchy:

1. Safety constraints (if applicable)
2. Explicit task constraints
3. Format requirements
4. Content requirements
5. Stylistic preferences

### Rule:
> Never violate a higher-level constraint to satisfy a lower-level one.

---

# 6. OVER-DELIVERY PENALTY RULE

Sometimes responses include:
- extra information not requested
- extended explanations beyond scope

### Rule:
- Minor over-delivery → no penalty
- Significant scope expansion → minor penalty
- Full deviation into new task → major penalty

---

# 7. UNDER-DELIVERY RULE

If response:
- partially completes task
- omits required components

### Rule:
> Missing required elements is always penalized more than minor overages.

---

# 8. EVALUATOR CONSISTENCY RULE

If uncertain between two scores:

### Decision rule:
> Choose the LOWER score unless evidence strongly supports higher score.

This prevents inflation bias.

---

# KEY PRINCIPLE

Edge cases must be resolved through:

> constraint hierarchy + severity weighting + minimal assumption bias

Not intuition or perceived quality alone.
