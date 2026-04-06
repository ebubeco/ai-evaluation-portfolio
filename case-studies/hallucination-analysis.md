# Hallucination Detection — Factual Analysis
**Evaluator:** Ebubechukwu Okeke  
**Domain:** History / Policy  
**Task Type:** Factual verification and hallucination classification  
**Date:** 2024  
**Status:** Complete

---

## Problem

The model was asked a specific historical and policy question. The response it produced was confident, structured, and appeared to be well-researched at first glance. It wasn't.

This is the high-risk hallucination type — not the kind where a model says something obviously wrong, but the kind where it builds a plausible-sounding narrative that mixes accurate facts with fabricated details. The structure and tone signal credibility. The content doesn't earn it.

This document records the full detection process, classifies each error by type, assesses risk level, and provides a corrected version.

---

## User Prompt

> "What were the main outcomes of the 1995 Beijing World Conference on Women, and how did Hillary Clinton's speech influence subsequent global policy?"

---

## Model Response (Under Review)

> The 1995 United Nations Fourth World Conference on Women in Beijing was a landmark event attended by representatives from 189 countries. The conference produced the Beijing Platform for Action, a comprehensive policy document covering twelve critical areas of concern including poverty, education, health, violence against women, and women in power.
>
> Hillary Clinton delivered her now-famous speech on September 5th, 1995, in which she declared that "women's rights are human rights." The speech was initially poorly received by the Chinese government, who attempted to prevent its broadcast. Clinton's address directly influenced the drafting of the final Beijing Platform language around reproductive rights, resulting in language that explicitly recognised a woman's right to control her own body — language that had been absent from the draft document submitted in August 1995.
>
> Following the conference, 42 countries immediately passed new legislation on domestic violence within 18 months, citing the Beijing Platform as a direct influence. The speech itself was credited by UN Women in their 2005 ten-year review as "the single most influential address in shaping post-Beijing policy implementation."
>
> Clinton later referenced Beijing in her 2008 presidential campaign as evidence of her foreign policy experience, drawing criticism from some observers who felt her role had been overstated.

---

## Verification Process

Each factual claim was checked against:
- UN documentation (un.org, unwomen.org)
- Published historical accounts of the Beijing conference
- Congressional and State Department records
- UN Women's 2005 ten-year review documentation

---

## Issues Detected

### Error 1 — Fabricated causal claim about speech and Platform language
**Claim:** Clinton's speech "directly influenced the drafting of the final Beijing Platform language around reproductive rights, resulting in language that explicitly recognised a woman's right to control her own body — language that had been absent from the draft document submitted in August 1995."

**Finding:** Fabricated. The Beijing Platform for Action language on reproductive rights and bodily autonomy had been under negotiation through PrepCom sessions well before the conference itself. The reproductive rights language in the final document was the product of multi-year negotiation among member states — not a speech delivered mid-conference. No documented evidence links Clinton's address to any specific change in the Platform text.

**Type:** False attribution / causal fabrication  
**Risk level:** High — misrepresents the policy process in a way that inflates one actor's role and obscures the actual multilateral negotiation dynamic

---

### Error 2 — Fabricated statistic
**Claim:** "42 countries immediately passed new legislation on domestic violence within 18 months, citing the Beijing Platform as a direct influence."

**Finding:** No verified data supports this specific figure. The Beijing Platform did catalyse significant legislative activity in subsequent years — that part is accurate in spirit. But the "42 countries" figure with the "18 months" timeframe is not documented in any UN follow-up report, academic study, or policy review traceable through the standard record. This appears to be a model-generated plausible-sounding statistic.

**Type:** Numeric fabrication  
**Risk level:** High — this is the kind of statistic that gets copied into briefings and academic work without verification

---

### Error 3 — Fabricated attribution
**Claim:** "The speech itself was credited by UN Women in their 2005 ten-year review as 'the single most influential address in shaping post-Beijing policy implementation.'"

**Finding:** No such quote exists in the UN Women 2005 ten-year review documentation ("Beijing +10"). The review assessed implementation of the Beijing Platform across twelve areas. It does not contain this phrase, and UN Women as an entity did not exist in 2005 — it was established in 2010. The model has attributed a fabricated quote to an organisation that did not yet exist at the time it supposedly made the statement.

**Type:** False attribution + institutional anachronism  
**Risk level:** Critical — fabricated direct quote attributed to a named institution with a specific document reference. Highly plausible on the surface. Verifiable as false with a single source check.

---

### Accurate claims (retained in correction)
- Conference attendance: 189 countries — **correct**
- Beijing Platform for Action covering twelve critical areas — **correct**
- Speech delivered September 5th, 1995 — **correct**
- "Women's rights are human rights" — **correct**
- Chinese government tension around the speech — **correct in general terms**
- 2008 campaign reference — **accurate, though simplified**

---

## Risk Assessment

| Error | Type | Risk |
|---|---|---|
| Clinton's speech changed Platform language | Causal fabrication | High |
| 42 countries / 18 months legislation | Numeric fabrication | High |
| UN Women 2005 quote | False attribution + anachronism | Critical |

**Overall response risk: High.** The accurate framing and confident structure make this response more dangerous than an obviously wrong answer. A reader without specialist knowledge would have no reason to question it.

---

## Why the Model Failed

This is a confidence-without-grounding failure. The model has enough training signal to produce a structurally correct, appropriately detailed response about the Beijing conference. When it reaches the edges of what it actually knows — the specific causal links between Clinton's speech and Platform text, the legislative follow-through statistics, the ten-year review content — it doesn't slow down or hedge. It generates plausible-sounding detail instead.

The UN Women anachronism is the clearest indicator: the model generated an institutional reference without checking whether that institution existed at the claimed date. This is pattern-matching on credibility signals ("UN Women," "ten-year review," "2005") rather than verified knowledge retrieval.

This failure mode is common in responses about historical events that involve well-known figures, because the model has strong signal on the figure (Clinton, Beijing conference) and weaker signal on the specific documentary record.

---

## Corrected Version

> The 1995 United Nations Fourth World Conference on Women in Beijing was attended by representatives from 189 countries and produced the Beijing Platform for Action — a comprehensive policy framework covering twelve areas including poverty, education, health, violence against women, and political participation.
>
> Hillary Clinton delivered her address on September 5th, 1995, including the line "women's rights are human rights." The speech drew attention amid reported Chinese government sensitivity around its content. It became one of the most cited moments from the conference and contributed to broader global momentum around framing women's rights within a human rights framework.
>
> The Beijing Platform for Action's language — including provisions around reproductive rights — was the result of multilateral negotiation across multiple preparatory sessions prior to the conference. Attributing specific textual changes to any single speech would require documentary evidence that is not part of the established record.
>
> The Platform did influence policy development in subsequent years across multiple countries, though specific claims about legislation counts and timelines should be sourced to verified UN follow-up reviews rather than generalised summaries.

---

## Evaluator Note

The corrected version is less satisfying to read than the original — it hedges where the original was confident, and it removes specific numbers that made the response feel authoritative. That's the point. The original's confidence was manufactured. The correction trades rhetorical smoothness for accuracy.

A response that sounds good but contains a fabricated institutional quote and a made-up statistic is not a good response. It is a liability.

---

*This case illustrates why hallucination detection requires active verification — not just fluency assessment. Responses that read well are not automatically accurate. The more confident and detailed the response, the more carefully it needs to be checked.*
