# Ambiguous Instruction Failure: Misinterpretation Under Underspecified Prompts

## Problem

A user provides an instruction that is technically valid but underspecified:

"Summarize the impact of remote work on productivity."

The task appears straightforward. However, the prompt leaves key variables undefined:

- scope (individual vs organisational productivity)
- timeframe (short-term vs long-term effects)
- perspective (employee vs employer)

The objective is to evaluate how the model interprets and resolves this ambiguity.

---

## Model Response

"Remote work has significantly improved productivity by reducing commute times and allowing employees to focus in a more comfortable environment. Many workers report higher efficiency and better work-life balance. Companies have also seen cost savings and improved output."

---

## Issue Identification

The response is coherent, fluent, and factually plausible.

However, it makes several implicit assumptions:

- treats productivity as universally improved
- focuses primarily on individual experience
- ignores conflicting evidence (e.g., collaboration challenges, burnout, coordination costs)

No clarification is attempted, and no uncertainty is acknowledged.

---

## Failure Type

**Ambiguity resolution through assumption**

The model resolves underspecification by selecting a single dominant narrative rather than exploring the range of valid interpretations.

---

## Why This Matters

This is not a hallucination. The claims are broadly defensible.

The failure lies in **premature narrowing of scope**.

The prompt allows for multiple valid framings:

- short-term vs long-term productivity
- individual vs team performance
- subjective vs measurable output

The model selects one without signalling that alternatives exist.

This creates a misleading sense of completeness.

---

## Improved Response

"A complete answer depends on how productivity is defined. Remote work can improve individual productivity by reducing commute time and increasing flexibility. However, it may also reduce team productivity due to communication delays and coordination challenges.

Short-term gains are commonly reported, but long-term effects vary depending on role, management structure, and company culture."

---

## Final Analysis

This failure occurs when the model interprets ambiguity as permission to simplify rather than a signal to qualify.

The output is not incorrect, it is incomplete in a way that is difficult to detect without careful reading.

The model defaults to a single coherent narrative instead of mapping the range of valid interpretations. Without explicit instruction to handle ambiguity, this behaviour is consistent and predictable.

For evaluation, this type of failure is critical because it passes basic quality checks while still misrepresenting the problem space.
