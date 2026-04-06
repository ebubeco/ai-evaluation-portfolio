# Evaluation Philosophy

My evaluation approach is grounded in consistency, instruction fidelity, and explicit reasoning. The goal is to produce reliable judgments that align with real-world annotation standards.

## 1. Instructions Define Correctness
The task prompt is the primary source of truth.  
A response that fails to follow instructions is incorrect, even if the content is otherwise accurate.

## 2. Completeness Is Required
Partial answers are treated as lower quality.  
Missing required elements, skipped constraints, or incomplete reasoning reduce the overall evaluation score.

## 3. Fluency Does Not Equal Accuracy
Well-written responses can still contain factual or logical errors.  
Evaluation prioritizes correctness and adherence over tone or readability.

## 4. Errors Must Be Explicitly Identified
Every evaluation decision must clearly state:
- what the instruction required
- what the response did
- where it succeeded or failed

This reduces ambiguity and ensures consistency across tasks.

## 5. Consistency Over Intuition
Decisions are made using defined criteria, not subjective preference.  
The same standards are applied across all evaluations to maintain reliability.

## 6. Prefer Fewer Critical Errors Over Minor Strengths
When comparing responses, the one with fewer significant failures is preferred over one with better style but critical issues.

---

This approach ensures that evaluations remain structured, defensible, and aligned with real annotation workflows used in RLHF and model evaluation pipelines.
