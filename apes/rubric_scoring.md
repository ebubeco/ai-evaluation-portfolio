rubric_scoring.md (Revised — Measurement-Calibrated Evaluation Model)

1. PURPOSE

This document defines a measurement model for LLM output quality that maps structured failure signals (from failure_taxonomy.md) into a bounded, partially latent-aware scoring system.

It is designed for:

reproducible evaluation

taxonomy-grounded scoring

RLHF preference alignment

scalable automation in evaluation engines



---

2. CORE DESIGN PRINCIPLES (UPDATED)

2.1 Non-Orthogonality Acknowledgement (Critical Improvement)

Unlike earlier formulations, rubrics are not assumed independent.

Instead:

> “Rubrics are conditionally dependent projections of a shared latent quality space.”



This explicitly addresses construct validity concerns.


---

2.2 Dual-Layer Scoring Model

The system operates on two layers:

(A) Observed Failure Space (OFS)

Derived from taxonomy:

explicit errors

annotated failure labels

severity scores


(B) Latent Quality Space (LQS)

Estimated constructs:

instruction fidelity

reasoning coherence

factual grounding

hallucination risk



---

3. RUBRIC VECTOR MODEL (REFORMULATED)

Instead of assuming independence, we define:

Q = f(OFS, W, C)

Where:

Q = final quality vector

OFS = observed failure signals

W = learned/assumed weights

C = coupling matrix (dependency structure)



---

3.1 Core Rubrics (Latent-Derived)

We retain four rubrics but redefine them:

IA — Instruction Adherence (conditional)

IA = P(correct execution | constraints, prompt intent)

Depends on:

constraint violations

instruction failures

prompt ambiguity



---

RQ — Reasoning Quality (structural coherence)

RQ = coherence(graph_of_thought) - contradiction_density

Key improvement:

reasoning is treated as a graph structure, not linear logic



---

FA — Factual Accuracy (grounding fidelity)

FA = grounded_claim_ratio × evidence_support_strength

Important correction:

hallucination is NOT a separate axis here

it is embedded as low grounding probability



---

HS — Hallucination Risk (diagnostic signal, not score axis)

Instead of a parallel score:

HS = P(unverified_claim | no grounding evidence)

⚠️ Critical change:

HS is now diagnostic, not a scoring dimension

solves double-counting problem



---

4. KEY FIX: NO DOUBLE COUNTING ARCHITECTURE

Old problem:

Hallucination affected:

FA

HS

penalties


New solution:

> “Each failure contributes to exactly one primary latent construct, with secondary propagation handled via coupling matrix.”




---

Coupling Matrix (NEW)

C =
[ IA↔RQ: 0.2
  RQ↔FA: 0.6
  FA↔HS: 0.8
  IA↔FA: 0.3 ]

Meaning:

hallucination affects FA strongly

reasoning affects factuality moderately

instruction affects reasoning weakly


This replaces ad-hoc multipliers.


---

5. NORMALIZED SCORING FUNCTION

Final score is no longer linear sum.

5.1 Non-linear aggregation:

Score = σ( Σ Wi·Qi + Σ Cij·Qi·Qj )

Where:

σ = sigmoid normalization

Cij = coupling effects

Qi = rubric values



---

Why this matters:

This fixes expert critique that:

> “Linear aggregation cannot capture catastrophic interactions.”



Now:

interactions are explicit

catastrophic coupling is mathematically representable



---

6. FAILURE INTEGRATION MODEL (REFINED)

Failures no longer directly subtract from score.

Instead:

Step 1: Map failure → latent construct

Failure Type	Primary Mapping

Instruction Failure	IA
Reasoning Failure	RQ
Factual Failure	FA
Hallucination	FA (via grounding loss)
Constraint Failure	IA
Safety Failure	global override penalty



---

Step 2: Convert severity → degradation function

impact = 1 - exp(-k × severity)

This avoids:

linear over-penalization

score collapse from single errors



---

7. CALIBRATION LAYER (NEW — CRITICAL UPGRADE)

To address expert critique:

7.1 Gold Set Normalization

Scores are calibrated using:

human-labeled benchmark set

inter-annotator agreement

distribution alignment



---

7.2 Scaling Function

Q_final = (Q_model - μ_human) / σ_human

Then remapped to [0,1].


---

8. OBSERVABILITY CORRECTION (IMPORTANT FIX)

We explicitly acknowledge:

> “Evaluation is of observable text behavior, not latent reasoning correctness.”



To mitigate bias:

reasoning inferred via structured proxies (coherence, contradiction density)

factuality inferred via grounding signals

hallucination inferred probabilistically



---

9. FINAL OUTPUT FORMAT (ENGINE READY)

{
  "IA": 0.84,
  "RQ": 0.79,
  "FA": 0.73,
  "HS_risk": 0.21,
  "score": 0.81,
  "confidence_interval": [0.77, 0.85],
  "failure_attribution": {
    "instruction": 0.12,
    "reasoning": 0.09,
    "factual": 0.18
  }
}


---

10. DESIGN IMPROVEMENTS SUMMARY (WHAT WAS FIXED)

✔ Construct validity

→ introduced latent variable model

✔ Double counting

→ removed HS as scoring axis, replaced with diagnostic signal

✔ Linear aggregation weakness

→ replaced with interaction-aware function

✔ Arbitrary weights

→ replaced with coupling matrix + calibration layer

✔ Hallucination overemphasis

→ folded into FA grounding model

✔ Missing calibration

→ added human-aligned normalization layer


---

11. FINAL POSITIONING

> “This rubric system is not a scoring heuristic — it is a constrained probabilistic measurement model over structured failure signals.”


