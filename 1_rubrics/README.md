# 1 — Rubrics (RLHF Evaluation Scoring Framework)

This directory defines the structured scoring rubrics used in RLHF-style evaluation across all runs in this repository.

It provides standardized criteria for assessing model outputs across reasoning, factuality, instruction adherence, and hallucination risk.

The goal is to ensure **consistent, interpretable, and repeatable scoring decisions** across all evaluation runs in `3_evaluation_runs/`.

---

# 📌 Purpose of This Directory

The purpose of `1_rubrics/` is to:

- define scoring dimensions used in evaluation
- standardize evaluator judgment criteria
- reduce subjectivity in RLHF assessments
- ensure consistency across multiple runs and models
- support transparent reasoning behind scores

---

# 🧠 Core Design Principle

> A rubric is not just a scorecard—it is a structured decision framework.

Each rubric ensures that:

- scoring is explainable
- evaluation is repeatable
- criteria are explicitly defined
- ambiguity in judgment is minimized

---

# 📊 Relationship to Evaluation System

This directory directly supports:

- `3_evaluation_runs/` (primary usage)
- `Run 000` standard evaluation template
- failure classification in `2_failure_patterns/`

In practice:

> Rubrics define HOW models are scored; failure patterns define WHY they fail.

---

# 🧾 Directory Contents

## 1. instruction_adherence.md

Defines how well a model follows given instructions.

### Evaluates:
- compliance with explicit instructions
- handling of multi-step constraints
- format adherence
- constraint prioritization
- completeness of execution

### Key Question:
> Did the model do exactly what was asked?

---

## 2. reasoning_quality.md

Defines the quality of logical and analytical reasoning.

### Evaluates:
- logical consistency
- step-by-step reasoning clarity
- depth of explanation
- coherence of thought process
- absence of reasoning gaps

### Key Question:
> Does the reasoning logically justify the answer?

---

## 3. factual_accuracy.md

Defines correctness of information provided by the model.

### Evaluates:
- truthfulness of claims
- correctness of facts
- alignment with known information
- avoidance of misinformation
- verification reliability

### Key Question:
> Is the output factually correct and reliable?

---

## 4. hallucination_detection.md

Defines the model’s tendency to generate unsupported or fabricated content.

### Evaluates:
- invented facts or entities
- fake citations or references
- overconfident speculation
- ungrounded assertions
- misleading extrapolations

### Key Question:
> Did the model invent or assume unsupported information?

---

## 5. quick_scoring_guide.md

Provides a simplified scoring reference for fast evaluation.

### Purpose:
- speed up annotation workflows
- provide quick decision heuristics
- reduce evaluator cognitive load

### Includes:
- simplified scoring scales
- shortcut interpretation rules
- rapid decision patterns
- baseline evaluation heuristics

---

# 🧠 Scoring Philosophy

All rubrics follow these principles:

## 1. Explicit Criteria Definition
Every score must map to clearly defined observable behavior.

---

## 2. Repeatability
Two evaluators should reach the same score under the same conditions.

---

## 3. Separation of Dimensions
Each rubric evaluates a single axis of performance.

---

## 4. Explainability
Scores must always be justifiable in human-readable terms.

---

# 📊 Integration with Evaluation Runs

In `3_evaluation_runs/`, rubrics are used to:

1. Score Model A and Model B outputs  
2. Compare performance across dimensions  
3. Identify failure patterns  
4. Support final evaluation decisions  

---

# 🎯 Intended Use

This rubric system supports:

- RLHF annotation pipelines
- model benchmarking
- structured comparison studies
- evaluation consistency enforcement
- failure analysis grounding

---

# 🚀 System Role

This module acts as the **scoring backbone of the RLHF Evaluation Suite**.

It ensures:

> every evaluation decision is structured, consistent, and explainable across all runs and models
