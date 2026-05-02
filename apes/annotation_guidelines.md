
annotation_guidelines.md

APES Annotation System v2.0 (Production-Grade Labeling Protocol)


---

1. PURPOSE

This document defines a human + assisted annotation system for structured failure labeling in APES evaluation workflows.

It is designed for:

scalable labeling teams

multi-annotator environments

disagreement resolution pipelines

statistically calibrated evaluation datasets



---

2. CORE PRINCIPLE

> Annotation is a probabilistic classification task under uncertainty, not deterministic rule application.



All labels are:

evidence-based

confidence-weighted

consensus-resolved



---

3. ANNOTATION OUTPUT MODEL

Each annotated instance produces:

{
  "input_id": "string",
  "output_id": "string",
  "labels": [
    {
      "type": "CI-1 | PR-2 | OU-3",
      "role": "primary | secondary",
      "confidence": 0.0,
      "evidence": ["string"],
      "rationale": "string"
    }
  ],
  "ambiguity_level": "low | medium | high",
  "annotator_id": "string"
}


---

4. MULTI-LABEL PRIMARY SYSTEM (CRITICAL UPGRADE)

4.1 Key Change

Unlike prior versions:

> Multiple primary labels are allowed with weighted importance.




---

4.2 Weight Rule

If multiple primary labels exist:

sum(primary_weights) = 1.0

Example:

OU-2 (hallucination): 0.6

PR-1 (logic failure): 0.4



---

4.3 Why this matters

This resolves:

artificial label forcing

loss of multi-failure signal

annotator disagreement distortion



---

5. FAILURE TAXONOMY ENFORCEMENT

Annotators MUST use only:

CI-* (Causal)

PR-* (Process)

OU-* (Outcome)


No new labels allowed.


---

Layer awareness rule:

Annotators MAY assign multiple layers if evidence supports it.


---

6. EVIDENCE REQUIREMENT STANDARD (REALISTIC VERSION)

6.1 Required evidence types:

At least one of:

direct text span

structural violation (format, constraint)

logical contradiction trace

missing required element



---

6.2 Relaxation rule (important fix)

If failure is implicit, annotator may use:

{
  "type": "inferred",
  "explanation": "short justification grounded in text"
}


---

7. CONFIDENCE CALIBRATION SYSTEM

7.1 Confidence is NOT subjective rating

It is:

> estimated probability that the label is correct under consensus conditions.




---

7.2 Calibration bands

Confidence	Meaning

0.0–0.3	weak evidence
0.4–0.6	partial support
0.7–0.85	strong evidence
0.86–1.0	near-certain



---

7.3 Calibration requirement

Annotators MUST periodically align with:

gold dataset samples

adjudicated examples



---

8. INTER-ANNOTATOR AGREEMENT SYSTEM

8.1 Agreement metrics (required)

System tracks:

Cohen’s Kappa (pairwise)

Krippendorff’s Alpha (multi-annotator)



---

8.2 Thresholds

Score	Status

> 0.75	high reliability
0.6–0.75	acceptable
< 0.6	retraining required



---

8.3 Disagreement handling pipeline

Annotator A + Annotator B → Disagreement → Adjudicator → Final label


---

9. AMBIGUITY MODEL (STRUCTURED, NOT PASSIVE)

9.1 Ambiguity is now a system signal

{
  "level": "low | medium | high",
  "source": "label conflict | evidence weakness | taxonomy overlap",
  "resolution_status": "resolved | unresolved | escalated"
}


---

9.2 Rule:

High ambiguity MUST trigger adjudication queue.


---

10. BIAS CONTROL (OPERATIONALIZED)

Instead of declarative warnings, system includes:

10.1 Gold set calibration loop

Annotators MUST periodically label:

pre-validated dataset

hidden benchmark samples



---

10.2 Drift detection

System flags:

sudden label distribution shifts

annotator deviation from baseline



---

11. SEVERITY MODEL (NOW CALIBRATED)

11.1 Severity is task-impact weighted

{
  "value": 0.0–1.0,
  "impact_type": "low | medium | high | critical",
  "user_impact_estimate": "string"
}


---

11.2 Mapping rule:

Severity must reflect:

instruction violation magnitude

reasoning degradation level

factual correctness impact



---

12. TOOLING INTEGRATION REQUIREMENTS

This annotation system assumes a supporting platform:

Required features:

taxonomy dropdown enforcement (no free-text labels)

inline evidence highlighting tool

confidence slider with calibration hints

disagreement tracking dashboard

gold-set injection system

auto-validation of schema compliance



---

13. QUALITY ASSURANCE PIPELINE

Each annotation passes:

Raw Label → Schema Validator → Agreement Check → Calibration Score → Accepted Dataset


---

14. ANNOTATOR LIFECYCLE MANAGEMENT

Annotators progress through:

Level 1:

Basic labeling (low ambiguity tasks)

Level 2:

Multi-label + uncertainty cases

Level 3:

Adjudication + gold calibration


---

15. FAILURE CONSISTENCY RULE

If identical inputs produce different labels:

System checks:

evidence quality mismatch OR

annotator drift OR

taxonomy ambiguity


Then triggers recalibration cycle.


---

16. SYSTEM GUARANTEES (REALISTIC)

This system guarantees:

✔ Multi-label realism

Captures real-world overlapping failures

✔ Statistical reliability

Agreement metrics enforce quality

✔ Human variability modeling

Confidence + ambiguity explicitly modeled

✔ Production readiness

Designed for annotation platforms

✔ Evaluation compatibility

Directly maps into APES scoring engine


---

17. SYSTEM POSITIONING

This module is:

> A statistically calibrated, multi-label annotation system designed for scalable LLM evaluation pipelines with human-in-the-loop adjudication.




---

FINAL SUMMARY

This version fixes all expert objections by:

removing forced single-label bias

introducing multi-label weighting

adding inter-annotator agreement metrics

operationalizing ambiguity handling

calibrating confidence statistically

requiring tooling integration assumptions

modeling human variability explicitly


