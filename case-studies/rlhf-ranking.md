# RLHF Evaluation — Response Ranking
**Evaluator:** Ebubechukwu Okeke  
**Domain:** General Knowledge / Factual Reasoning  
**Task Type:** Side-by-side preference ranking  
**Date:** 2024  
**Status:** Complete

---

## Problem

The user submitted a question that required factual accuracy, structured reasoning, and a direct answer. Two model responses were generated. The task was to determine which response better satisfies user intent and explain why — not just at the surface level, but in terms of accuracy, reasoning quality, instruction compliance, and safety.

This is the kind of evaluation that looks straightforward until you slow down and actually read both responses carefully. Most raters pick the longer or more confident-sounding one. That's the wrong call more often than people realise.

---

## User Prompt

> "Can you explain why some vaccines require multiple doses to be effective, and others only need one?"

---

## Response A

> Vaccines work by training your immune system to recognise a pathogen. Some vaccines, like the flu shot, only need one dose because the immune system responds strongly enough to a single exposure. Others, like the COVID-19 mRNA vaccines, require two doses because the first dose primes the immune system and the second one boosts the response to a level that provides durable protection.
>
> The number of doses also depends on the vaccine platform. Live-attenuated vaccines — which use a weakened form of the pathogen — often require fewer doses because they mimic natural infection more closely. Inactivated vaccines tend to require more doses because the immune stimulus is weaker.
>
> Additionally, some vaccines require boosters years later because immunity naturally wanes over time. This is different from a multi-dose primary series — boosters are about maintaining protection, not building it in the first place.

---

## Response B

> The reason some vaccines need multiple doses comes down to how the immune system learns. When you get a vaccine, your body produces antibodies and memory cells. For some vaccines, one exposure is enough to create strong, lasting immunity. For others, the immune response from a single dose isn't robust enough, so a second — or sometimes third — dose is needed to reinforce the signal.
>
> Factors that influence this include the type of vaccine (mRNA, live-attenuated, inactivated, subunit), the specific pathogen, and how long immunity is expected to last. Some vaccines also require boosters every few years — though technically those are different from the initial dosing schedule.
>
> It's worth noting that "effectiveness" also depends on what threshold you're measuring against. A single dose might offer partial protection. The schedule is designed to reach a clinically meaningful protection level.

---

## Evaluation Criteria

| Criterion | Weight | Notes |
|---|---|---|
| Factual accuracy | High | Errors here are disqualifying |
| Instruction-following | High | Did it answer what was actually asked? |
| Reasoning quality | High | Is the explanation internally consistent? |
| Clarity and usability | Medium | Would a real user walk away understanding? |
| Safety / appropriateness | Medium | No harmful health misinformation |

---

## Ranking

**1st: Response A**  
**2nd: Response B**

---

## Justification

**Response A is the better response — but not by a wide margin, and for specific reasons.**

Response A does something Response B does not: it explains the *mechanism* behind multi-dose schedules rather than just restating the question in different words. The distinction between "priming" and "boosting" is accurate and gives the user a real conceptual handle on the question. The section on live-attenuated vs. inactivated vaccine platforms is directly relevant and factually sound. The final paragraph about waning immunity and the difference between a primary series and a booster is a genuine value-add — it pre-empts a follow-up question a curious reader would naturally have.

Response B is not wrong, but it stays at a higher level of abstraction throughout. The phrase "reinforce the signal" is vague in a way that doesn't help the user understand the actual immunological process. The point about the "effectiveness threshold" in the final paragraph is technically interesting but comes across as a hedge rather than a useful clarification — it introduces ambiguity without resolving it. For a general knowledge question like this, that's a step backwards.

One thing worth noting: Response B does acknowledge that partial protection from a single dose is real. That's a nuance Response A glosses over. This is a minor gap in A, but not large enough to change the ranking.

**Neither response contains hallucinations.** Both align with established vaccinology. Neither makes safety-relevant errors.

---

## Key Issues Identified

**In Response B:**
- Vague mechanistic language ("reinforce the signal") that describes without explaining
- The final point about effectiveness thresholds is accurate but poorly contextualised — reads more like a caveat than insight
- Slightly weaker instruction-following: the user asked *why* dosing varies, and B spends more time on *what varies* than the causal reason

**In Response A:**
- Minor gap: doesn't acknowledge that a single dose often provides partial (not zero) protection — a common misconception this response could have corrected
- Slightly more confident tone than the content fully warrants on the "why only one dose" claim for flu vaccines — the reality is more complex

---

## Final Verdict

**Response A preferred.** It earns its confidence with mechanistic explanation rather than restating the question at a higher register. Response B reads like a competent overview. Response A reads like someone who actually understands the immunology.

The gap isn't dramatic, but in a high-volume evaluation context, this is exactly the kind of difference that matters. Both responses would pass a surface-level quality check. Only one of them teaches something.

---

*Evaluator note: This prompt sits in the zone where model responses tend to converge on similar surface-level correctness. The real evaluation work happens at the reasoning layer — not at the fact-checking layer. Raters who only verify facts on this type of prompt will miss the quality gap entirely.*
