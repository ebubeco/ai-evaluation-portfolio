# Prompt Reliability Testing — Edge Case Analysis
**Evaluator:** Ebubechukwu Okeke  
**Domain:** Task completion / Instruction-following  
**Task Type:** Prompt stress-testing and reliability improvement  
**Date:** 2024  
**Status:** Complete

---

## Objective

Test how a model handles prompts that are ambiguous, under-specified, or structurally flawed — then redesign the prompt to produce reliable, useful output. This case documents a full cycle: original prompt, model failure analysis, redesigned prompt, improved output, and the underlying insight about why the original failed.

This is not about finding a "magic phrase" that tricks the model into performing better. It's about understanding what information a model actually needs to complete a task correctly — and building that into the prompt design so the result is consistent, not lucky.

---

## Original Prompt

> "Write me a summary of the report."

---

## Model Output (Original Prompt)

> I'd be happy to help summarise the report. Could you please share the report you'd like me to summarise? Once I have the content, I can provide a clear and concise overview of its main points.

---

## First-Level Failure Analysis

The model responded correctly, technically speaking — it asked for the missing document. But this interaction reveals the first layer of the problem: the prompt is so underspecified that the model can't even attempt the task. There's no report, no context, no format requirement, no audience definition, no length guidance.

This would be a normal clarifying loop in a conversation. But in a task-completion evaluation context — where the goal is to test model reliability — a prompt like this produces nothing useful and teaches nothing useful. It tells us the model will ask for more information. We already knew that.

The real test is: what happens when you give a model *almost* enough information, but with the wrong structure or missing the key constraint? That's where instruction-following failures actually live.

---

## Redesigned Test: Ambiguous Constraint Prompt

The original prompt was too obviously broken. The more diagnostic test is to build a prompt that looks complete but contains a hidden tension. Here's the version that was used for the actual reliability test:

**Test Prompt:**

> "Summarise the following market research report in plain language for a non-technical executive audience. Keep it under 150 words and make sure to include all the key findings."
>
> [Report text: 1,200 words covering 7 distinct findings across 4 market segments, with conflicting data in two sections]

---

## Model Output (Test Prompt)

> **Market Research Summary**
>
> The research examined four key market segments over a 12-month period. Findings indicate strong growth in the enterprise segment (up 34% year-on-year), modest growth in SMB (up 12%), and contraction in the consumer segment (down 8%). The fourth segment — emerging markets — showed mixed results, with growth in Southeast Asia offset by decline in Latin America.
>
> Additional findings highlight that customer retention rates improved across enterprise clients while declining for consumer-facing products. Pricing sensitivity was identified as a primary factor in consumer churn. Two sections of the report present data with some inconsistency that may warrant further review.
>
> The overall market position remains strong in B2B segments. Consumer strategy may require revision.
>
> *[148 words]*

---

## Second-Level Failure Analysis

The model navigated the word count constraint (148 words — compliant). It adopted appropriate plain language. The executive framing is reasonable.

But this response has a structural failure that only appears when you check it against the original instruction: **"make sure to include all the key findings."**

The report contained 7 findings. The summary addresses 5, partially. Two findings are either absent or rolled into vague summary language ("additional findings highlight..."). The model resolved the impossible constraint — 7 substantial findings in under 150 words — by silently dropping content rather than flagging the tension.

This is the failure mode worth documenting. The model didn't refuse the task. It didn't flag the conflict. It produced a response that appears compliant — correct word count, correct tone, correct format — while quietly failing the core content requirement.

A human reviewer who didn't have the original report in front of them would pass this response. It reads as complete. It isn't.

---

## Failure Classification

**Type:** Silent constraint resolution — content omission  
**Trigger condition:** Conflicting constraints where full compliance is mathematically impossible (7 findings, 150 word cap)  
**Model behaviour:** Prioritised format constraint (word count) over content constraint (all findings) without disclosure  
**Risk level:** High in professional contexts — the output looks complete, signals are compliant, but information has been silently dropped

---

## Improved Prompt

> "Summarise the following market research report for a non-technical executive audience. Use plain language throughout.
>
> There are 7 key findings in this report. List each one in a short sentence. Then provide a 2–3 sentence overall conclusion.
>
> If any findings contain conflicting data, note that briefly rather than resolving it yourself."

---

## Output (Improved Prompt)

> **Market Research Summary**
>
> **Key Findings:**
> 1. Enterprise segment grew 34% year-on-year — the strongest performance across all segments.
> 2. SMB segment showed modest growth at 12%.
> 3. Consumer segment contracted by 8%, driven primarily by pricing sensitivity.
> 4. Southeast Asia (emerging markets) showed growth; Latin America showed decline — net result for the segment is mixed.
> 5. Customer retention improved in enterprise, declined in consumer.
> 6. Pricing is the primary driver of consumer churn, per respondent data.
> 7. Two data points in sections 3 and 5 present conflicting figures — source data may need reconciliation before strategic decisions are made on those metrics.
>
> **Conclusion:** B2B performance is strong and consistent. Consumer-facing strategy needs review, particularly on pricing. Before acting on the conflicting data points in sections 3 and 5, the underlying source data should be verified.

---

## Analysis — Why the Improved Prompt Works

Three changes drove the improvement:

**1. Explicit structure instruction replaced implied structure.**  
"List each one in a short sentence" removes the model's discretion about what to include. It can't silently compress or omit because the format itself requires enumeration.

**2. The count was made explicit.**  
"There are 7 key findings" gave the model a completeness check it could run against. The original prompt gave no such anchor — so the model had no way to know it was leaving findings out.

**3. The conflicting data was acknowledged and the model was told how to handle it.**  
"Note that briefly rather than resolving it yourself" is a critical instruction. Without it, the model either ignored the conflict or silently smoothed it over. Both are worse outcomes than surfacing it cleanly.

---

## What This Reveals About Model Behaviour

When a model receives competing constraints it can't simultaneously satisfy, its default behaviour is to **silently prioritise the more easily measurable constraint** (word count is countable; "all findings" is not self-evidently verifiable from the output alone) and produce a response that appears compliant.

This is not a bug in the conventional sense. It's a training artefact — models are rewarded for producing outputs that look correct, not necessarily for flagging internal conflicts in task instructions. The practical implication for prompt design is significant: if you want a model to surface a conflict rather than resolve it quietly, you have to explicitly give it permission and a method for doing so.

This is also why adversarial prompt testing is more valuable than standard-prompt testing for evaluating instruction-following quality. Standard prompts don't create the conditions where this failure can occur. Well-constructed ambiguous prompts do.

---

## Broader Insight

The failure documented here — silent constraint resolution leading to incomplete output — is one of the harder categories to catch in routine evaluation because the output is fluent, formatted correctly, and doesn't contain any obvious errors. It reads as a pass.

Catching it requires:
1. Having the source document available for content verification
2. Knowing to check against all stated requirements, not just format
3. Recognising that a model producing a word-count-compliant response has only satisfied the *easiest* of the stated constraints

In high-stakes use cases — executive briefings, legal summaries, medical report synthesis — this failure mode is not a minor quality issue. Information that should be there, isn't. And nothing in the output signals that.

---

*Prompt engineering is not about persuading a model to perform better. It's about removing the ambiguity that allows it to perform differently than intended. The model didn't fail the original task because it lacked capability. It failed because the task didn't give it the information it needed to succeed consistently.*
