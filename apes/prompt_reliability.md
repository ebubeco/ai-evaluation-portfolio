
prompt_reliability.md

APES v3.3 — Empirical Prompt Reliability Evaluation System (Production Spec)


---

1. PURPOSE

This document defines a measurable and reproducible framework for estimating prompt reliability in LLM systems.

> Prompt reliability is treated as an empirically estimable probability derived from controlled sampling, annotation agreement, and failure-mode frequency.



This system is designed for:

RLHF pipelines

DPO dataset filtering

Prompt engineering validation

Safety robustness evaluation



---

2. CORE DEFINITION (OPERATIONALIZED)

Prompt reliability is defined as:

R(p) = P(valid ∧ aligned ∧ safe | p, M, decoding_policy, context_distribution)

Where:

valid = conforms to output schema / task constraints

aligned = satisfies human preference labels

safe = passes safety + injection filters



---

3. MEASUREMENT PRINCIPLE

Reliability is NOT inferred from theory.

It is estimated using:

> Monte Carlo sampling over model outputs + annotated evaluation signals




---

4. DATA COLLECTION PROTOCOL

4.1 Sampling Requirements

For each prompt p:

Run N ≥ 20 generations per model configuration

Fix:

temperature

top_p

system prompt version


Vary:

seed




---

4.2 Evaluation Set

Each output is scored across:

Dimension	Label Type

Task correctness	binary / graded
Instruction adherence	binary
Safety compliance	binary
Format validity	binary
Human preference	pairwise



---

5. RELIABILITY ESTIMATION MODEL

5.1 Empirical estimator

R(p) = (# successful outputs) / N

Where success = intersection of:

valid

aligned

safe



---

5.2 Confidence interval

CI = WilsonScoreInterval(successes, N, 95%)

This prevents overconfidence in small samples.


---

6. FAILURE MODE DECOMPOSITION (APES INTEGRATION)

Each failed output is categorized using APES taxonomy:

Failure Type	Definition

hallucination	unsupported factual generation
instruction conflict	constraint violation
formatting failure	schema invalid output
reasoning failure	logical inconsistency
safety failure	policy violation
injection vulnerability	external instruction override



---

6.1 Failure frequency vector

F(p) = [f1, f2, ..., fn]

Where fi = frequency of failure type i.


---

7. PROMPT STABILITY TESTING

7.1 Cross-seed stability

Measure variance across seeds:

S(p) = 1 - normalized_variance(output_quality_scores)


---

7.2 Cross-model stability

Evaluate across multiple model versions:

ΔR = |R(M1) - R(M2)|

High ΔR → fragile prompt design.


---

8. ANNOTATION PROTOCOL

8.1 Human evaluation

Each output is labeled by ≥3 annotators.

Labels:

preference (A/B)

correctness

safety

reasoning quality



---

8.2 Inter-annotator agreement

IAA = CohenKappa or KrippendorffAlpha

If IAA < threshold (e.g., 0.7):

→ dataset marked ambiguous
→ excluded or re-annotated


---

9. RELIABILITY SCORE (FINAL FORM)

Instead of a theoretical formula, we define:

R(p) = weighted_mean(success_rate, stability_score, safety_pass_rate)

With empirically tuned weights:

w₁ = correctness (primary RLHF signal)

w₂ = stability

w₃ = safety compliance



---

10. PROMPT FAILURE MODES (ENGINEERING VIEW)

10.1 Structural failures

missing output schema

conflicting constraints

underspecified task objective



---

10.2 Semantic failures

ambiguous instruction scope

unclear success criteria

multi-objective conflict without prioritization



---

10.3 Execution failures

high variance outputs

sensitivity to decoding parameters

brittle reasoning chains



---

10.4 Security failures

prompt injection success

instruction hierarchy override

indirect contextual manipulation



---

11. PROMPT HARDENING PIPELINE

If R(p) < threshold:

Step 1: Constraint normalization

enforce explicit task definition


Step 2: Output schema injection

force structured outputs (JSON / table / template)


Step 3: Ambiguity resolution pass

replace vague terms with measurable criteria


Step 4: Injection filtering

isolate untrusted instructions



---

12. RELIABILITY UNDER DISTRIBUTION SHIFT

We evaluate across:

model versions

system prompts

decoding policies

context lengths


R_shift = R(p | M1) - R(p | M2)


---

13. RELIABILITY IN RLHF / DPO PIPELINE

13.1 Data filtering

Only prompts with:

R(p) ≥ τ


are included in training datasets.


---

13.2 Sample weighting

training_weight = R(p) × annotation_confidence


---

13.3 Preference signal conditioning

Low reliability prompts are:

down-weighted

or excluded from pairwise ranking



---

14. SAFETY & INJECTION MODEL

We explicitly model:

direct prompt injection

indirect instruction injection

multi-turn contextual override


Metric:

IR = 1 - attack_success_rate


---

15. SYSTEM GUARANTEES (REALISTIC VERSION)

If properly implemented:

reproducible reliability estimates

calibrated uncertainty bounds

RLHF-compatible scoring signal

measurable prompt fragility detection

dataset-quality filtering for training pipelines



---

16. LIMITATIONS (IMPORTANT FOR PEER REVIEW)

Even this production version has known constraints:

1. Sampling cost

N-generation evaluation is expensive at scale


2. Annotation noise

human labels remain subjective


3. Model dependence

R(p) is conditional on model + decoding policy


4. Non-universality

reliability is task-specific, not absolute



---

17. FINAL POSITIONING

This system is:

> A statistically grounded, sampling-based framework for estimating prompt reliability as a conditional probability over correctness, safety, and alignment under controlled decoding regimes.



