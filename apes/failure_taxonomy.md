
failure-taxonomy.md

APES Failure Ontology v2.0 (Causal–Process–Outcome Model)


---

1. PURPOSE

This taxonomy defines a strict, hierarchical, and causally structured ontology of model failures for use in evaluation systems.

It is designed to ensure:

Orthogonality (minimal overlap)

Causal traceability

Annotation consistency

Direct mapping to scoring rubrics (APES Schema)



---

2. DESIGN PRINCIPLES

2.1 Causal Separation Principle

All failures are classified into:

CAUSE failures → why the model failed

PROCESS failures → how the model failed

OUTCOME failures → what the model produced incorrectly



---

2.2 Single-Primary Attribution Rule

Each failure instance MUST have:

exactly one primary class

optional secondary tags (non-scoring)



---

2.3 Grounding Principle

All factual judgments are defined relative to:

> A specified ground truth source (external KB, prompt context, or retrieval system)




---

2.4 Observability Constraint

Only observable outputs or derivable traces are valid for annotation.


---

3. TOP-LEVEL ONTOLOGY

FAILURE
 ├── CAUSAL_FAILURE
 ├── PROCESS_FAILURE
 └── OUTCOME_FAILURE


---

4. CAUSAL FAILURE LAYER (WHY IT FAILED)

These are upstream drivers of incorrect behavior.


---

4.1 Instruction Misinterpretation (CI-1)

Definition:

Model incorrectly parses, prioritizes, or follows task instructions.

Operational signal:

ignored constraints

misread task objective

incorrect task framing


Excludes:

inability to execute reasoning (PROCESS)



---

4.2 Contextual Misalignment (CI-2)

Definition:

Model fails to correctly integrate relevant context into task execution.

Signal:

missing context dependencies

irrelevant context usage

partial context collapse



---

4.3 Goal Drift (CI-3)

Definition:

Model shifts objective away from original task intent.

Signal:

introduces unrelated goals

self-directed expansion of task scope



---

5. PROCESS FAILURE LAYER (HOW IT FAILED)

These represent internal reasoning or transformation breakdowns.


---

5.1 Logical Inconsistency (PR-1)

Definition:

Violation of formal or informal logical coherence.

Signal:

contradiction within response

invalid inference steps

non sequitur transitions



---

5.2 Reasoning Collapse (PR-2)

Definition:

Failure to maintain structured multi-step reasoning.

Signal:

skipped steps

incomplete derivation chains

broken causal reasoning



---

5.3 Planning Failure (PR-3)

Definition:

Inability to construct or follow a valid solution strategy.

Signal:

disorganized response structure

missing intermediate steps

inefficient or invalid decomposition



---

5.4 Attention Fragmentation (PR-4)

Definition:

Failure in maintaining relevant focus across input constraints.

Signal:

topic drift mid-response

inconsistent entity tracking



---

6. OUTCOME FAILURE LAYER (WHAT WAS PRODUCED)

These are directly observable output-level errors.


---

6.1 Factual Error (OU-1)

Definition:

Statement contradicts verified ground truth.

Grounding Rule:

Must be validated against:

external knowledge base OR

prompt-provided truth context



---

6.2 Hallucination (OU-2)

Definition:

Generation of information with no grounding in:

prompt context

external knowledge

retrieval system


Key distinction:

> Hallucination is ungrounded generation, not merely incorrect information.




---

6.3 Constraint Violation (OU-3)

Definition:

Failure to satisfy explicit task constraints.

Examples:

format violations

length violations

missing required sections



---

6.4 Instruction Non-Compliance (OU-4)

Definition:

Direct contradiction or omission of explicit instructions.


---

6.5 Incomplete Output (OU-5)

Definition:

Partial fulfillment of required task output.

Signal:

missing required components

truncated reasoning or answer



---

7. CROSS-LAYER RELATIONSHIPS (CRITICAL ADDITION)

Failures are not independent; causal propagation is defined as:

CAUSAL → PROCESS → OUTCOME


---

Example propagation chain:

CI-1 (misinterpret instruction) → PR-3 (bad planning) → OU-3 (constraint violation)



---

8. FAILURE COMPATIBILITY RULES

8.1 Primary Assignment Rule

Each failure instance MUST have:

{
  "primary_type": "one of CAUSAL | PROCESS | OUTCOME",
  "primary_code": "CI-1 | PR-2 | OU-1"
}


---

8.2 Secondary Tags Rule (Non-scoring)

Secondary tags allowed but:

must NOT affect scoring

must NOT override primary classification



---

8.3 No Multi-Primary Rule

A single failure cannot belong to multiple primary categories.


---

9. FORMAL DISTINCTION MATRIX

Category	Definition Basis	Observability

CAUSAL	Why failure occurred	Indirect inference
PROCESS	Internal reasoning breakdown	Partial trace inference
OUTCOME	Final output error	Direct observation



---

10. ANNOTATION GUIDELINES

10.1 Deterministic Labeling Priority

If ambiguity exists:

1. Prefer OUTCOME classification


2. Then PROCESS


3. Then CAUSAL (least observable)




---

10.2 Evidence Requirement Rule

Every annotation MUST include:

text span evidence OR

structured inference justification



---

10.3 Confidence Scoring

{
  "confidence": 0.0 - 1.0,
  "evidence_strength": 0.0 - 1.0
}


---

11. DESIGN GUARANTEES (WHAT THIS FIXES)

This version resolves expert critiques:

✔ Eliminates overlap ambiguity

→ strict CAUSAL/PROCESS/OUTCOME separation

✔ Introduces causal modeling

→ not just labels, but dependency structure

✔ Improves annotation consistency

→ deterministic selection rules

✔ Enables evaluation automation

→ directly mappable to APES schema

✔ Removes flat taxonomy problem

→ full hierarchical ontology


---

12. SYSTEM POSITIONING

This taxonomy is now:

> A causally structured, annotation-consistent failure ontology designed for automated LLM evaluation pipelines.


