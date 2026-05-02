# 2 — Failure Patterns (RLHF Evaluation Taxonomy)

This directory contains a structured taxonomy of model failure modes used in RLHF-style evaluation.

It defines, categorizes, and explains common and edge-case failures observed in model outputs across reasoning, instruction following, factual accuracy, and ambiguity handling.

The goal is to provide a **human-readable failure classification system** that supports consistent evaluation across all runs in `3_evaluation_runs/`.

---

# 📌 Purpose of This Directory

The purpose of `2_failure_patterns/` is to:

- standardize failure classification across evaluations
- improve interpretability of model weaknesses
- support consistent RLHF annotation decisions
- reduce ambiguity in evaluator judgment
- provide a reusable taxonomy for scoring and analysis

---

# 🧠 Core Design Principle

> Failures are not random—they are structured, repeatable, and classifiable.

This directory treats model failures as:

- predictable patterns
- observable behaviors
- categorizable outcomes
- evaluable signals in reasoning traces

---

# 📊 Relationship to Evaluation Runs

This module directly supports:

- `3_evaluation_runs/`
- Run 000 (standard evaluation schema)
- Rubric scoring consistency
- reasoning trace interpretation

In practice:

> Every evaluation failure should map back to at least one taxonomy category in this directory.

---

# 🧾 Directory Contents

## 1. failure_taxonomy.md

Defines the **core classification system** of model failures.

Includes:
- primary failure categories
- structured definitions
- hierarchical breakdown of failure types
- mapping guidance for evaluators

---

## 2. failure_taxonomy_guide.md

A practical guide for applying the taxonomy in evaluations.

Includes:
- how to classify failures during annotation
- decision rules for ambiguous cases
- examples of correct vs incorrect classification
- evaluator consistency guidelines

---

## 3. hallucination_patterns.md

Focuses on **fabricated or ungrounded model outputs**.

Covers:
- false factual claims
- invented references or entities
- pseudo-citations
- confident misinformation
- hallucinated reasoning chains

---

## 4. ambiguity_traps.md

Covers failures caused by **unclear interpretation or instruction ambiguity**.

Includes:
- misinterpreted prompts
- under-specified instructions
- conflicting constraints
- partial compliance due to ambiguity

---

## 5. common_failure_modes.md

Defines **frequent and recurring failure patterns** observed across models.

Examples include:
- shallow reasoning
- overgeneralization
- instruction drift
- partial task completion
- verbosity masking errors

---

## 6. edge_cases.md

Covers **rare, complex, or non-standard failure scenarios**.

Includes:
- adversarial prompt behavior
- multi-layer constraint conflicts
- hybrid failure modes
- cascading reasoning breakdowns
- unexpected model behavior under stress conditions

---

# 🧠 Evaluation Philosophy

This taxonomy is built on the following principles:

## 1. Classification over intuition
Failures must be labeled, not vaguely described.

---

## 2. Consistency across evaluators
Different evaluators should arrive at the same failure category given the same output.

---

## 3. Traceable reasoning
Every failure label should be explainable in plain language.

---

## 4. Hierarchical structure
Failures are organized from:
- general → specific
- common → rare
- simple → complex

---

# 🎯 Intended Use

This directory is used to support:

- RLHF annotation workflows
- model comparison evaluation
- structured failure analysis
- hallucination detection
- instruction adherence auditing
- benchmark consistency enforcement

---

# 📌 Integration with Evaluation Runs

During evaluation in `3_evaluation_runs/`, evaluators should:

1. Identify model behavior issues  
2. Map them to this taxonomy  
3. Justify classification briefly  
4. Use categories consistently across runs  

---

# 🚀 System Role

This module acts as the **diagnostic layer of the RLHF Evaluation Suite**.

It enables:

> precise, repeatable identification of model failure behavior in a human-readable evaluation framework
