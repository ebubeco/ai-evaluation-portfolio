
model_provenance.md

APES Model Provenance Specification v2.0 (Production-Realistic)


---

1. PURPOSE

This document defines a practical provenance system for LLM evaluation pipelines under real-world constraints, including:

opaque model providers

partial metadata availability

stochastic inference behavior

infrastructure abstraction (API-based models)


It prioritizes:

> auditability, comparability, and best-effort reproducibility — not absolute determinism.




---

2. CORE PRINCIPLE (REAL-WORLD VERSION)

> Provenance is a best-effort reconstruction of generation conditions, not a complete system introspection.



This system explicitly distinguishes:

Observed metadata

Declared metadata

Inferred metadata



---

3. PROVENANCE ARCHITECTURE (3-LAYER MODEL)

LAYER 1: OBSERVED (guaranteed)
LAYER 2: DECLARED (API-provided)
LAYER 3: INFERRED (system-estimated)


---

4. MODEL IDENTIFIER (DECLARED LAYER)

{
  "model_name": "string",
  "provider": "string",
  "version": "string | null",
  "deployment_id": "string | null"
}

Constraint:

If provider is API-based (e.g., OpenAI, Anthropic):

version may be partially opaque or alias-based




---

5. OBSERVED RUNTIME METADATA (GUARANTEED)

These fields MUST be captured by the evaluation system.

{
  "timestamp": "ISO-8601",
  "prompt_text": "string",
  "response_text": "string",
  "input_tokens_estimate": "int | null",
  "output_tokens_estimate": "int | null"
}

Note:

Token counts may be approximate depending on provider limits.


---

6. DECODING PARAMETERS (DECLARED OR INFERRED)

{
  "temperature": "float | null",
  "top_p": "float | null",
  "top_k": "int | null",
  "max_tokens": "int | null",
  "seed": "int | null",
  "reproducibility_mode": "deterministic | stochastic | unknown"
}


---

Important Realism Rule:

If seed is missing → reproducibility is probabilistic only

If temperature > 0 → output variance is expected, not an anomaly



---

7. RUNTIME CONTEXT (PARTIALLY OBSERVABLE)

{
  "system_prompt_version": "string | unknown",
  "tool_access": ["string"],
  "retrieval_enabled": true | false | unknown,
  "context_window_estimate": "int | null"
}


---

Constraint:

System prompts are often not fully exposed in production APIs.


---

8. INFRASTRUCTURE CONTEXT (INFERRED LAYER)

{
  "latency_ms": "float | null",
  "endpoint_region": "string | null",
  "load_condition": "low | medium | high | unknown",
  "batching_detected": true | false | unknown
}


---

Rule:

Infrastructure metadata is always:

> inferred unless explicitly provided by provider




---

9. PROMPT TRACEABILITY (OBSERVED + SYSTEM-GENERATED)

{
  "prompt_id": "string",
  "prompt_version": "string",
  "prompt_hash": "string",
  "normalized_prompt_hash": "string | null"
}


---

Important Correction:

prompt_hash ≠ semantic equivalence guarantee

normalization reduces but does not eliminate divergence



---

10. FULL PROVENANCE OBJECT (REALISTIC CANONICAL FORM)

{
  "model_id": {},
  "observed": {},
  "decoding": {},
  "runtime_context": {},
  "infra": {},
  "prompt_trace": {},
  "reproducibility_assessment": {
    "level": "exact | partial | non_reproducible",
    "confidence": 0.0
  }
}


---

11. REPRODUCIBILITY MODEL (KEY FIX)

11.1 Levels

Level	Meaning

exact	fully reproducible (rare in API systems)
partial	same model family + settings, but variance expected
non_reproducible	missing critical parameters



---

11.2 Determination Rule

If (temperature unknown OR model_version unknown)
→ reproducibility = non_reproducible


---

12. LINEAGE TRACKING (SIMPLIFIED FOR REAL SYSTEMS)

{
  "parent_run_id": "string | null",
  "modification_type": "none | prompt_edit | model_change | decoding_change | unknown"
}


---

Constraint:

We avoid over-precise lineage assumptions in opaque API systems.


---

13. COMPARABILITY RULES (RELAXED FOR PRACTICAL USE)

Two outputs are comparable if:

Required:

same model family OR declared equivalent

same task type

same evaluation rubric version


Optional:

same decoding parameters (preferred but not required)



---

Key Fix vs v1:

We no longer require identical conditions.

We instead support:

> controlled variance benchmarking




---

14. FAILURE ANALYSIS INTEGRATION (APES ALIGNMENT)

Provenance links to failure taxonomy via probabilistic attribution:

Failure Type	Provenance Dependency

hallucination	model + prompt + decoding uncertainty
reasoning failure	model + runtime context
constraint failure	prompt + system constraints



---

Important Upgrade:

We now include:

{
  "attribution_confidence": 0.0
}


---

15. AUDITABILITY STANDARD (REALISTIC DEFINITION)

A dataset is audit-compliant if:

inputs and outputs are stored

model metadata is recorded at best available resolution

decoding settings are captured OR marked unknown

reproducibility level is explicitly declared



---

16. DESIGN GUARANTEES (REALISTIC VERSION)

This system guarantees:

✔ Operational compatibility

Works with API-based LLMs

✔ Partial reproducibility (honest)

No false determinism claims

✔ Metadata uncertainty modeling

No hidden assumptions about system internals

✔ Cross-provider usability

Supports OpenAI / Anthropic / open-source models

✔ Evaluation robustness

Designed for real-world drift conditions


---

17. SYSTEM POSITIONING

This module is now:

> A production-grade, uncertainty-aware provenance framework for evaluating black-box and semi-transparent LLM systems.




---

FINAL TAKE (WHY THIS VERSION IS STRONGER)

This version fixes expert criticisms by:

removing impossible observability assumptions

introducing inference uncertainty tiers

acknowledging API limitations explicitly

replacing determinism with reproducibility levels

separating observed vs inferred metadata cleanly

