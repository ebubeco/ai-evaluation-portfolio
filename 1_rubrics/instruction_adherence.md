# Instruction Adherence Rubric

This rubric defines how responses are evaluated for instruction adherence in real annotation tasks.

Instruction adherence is the primary evaluation axis.  
If a response violates core instructions, it cannot be considered correct regardless of content quality.

---

## What This Rubric Measures

Instruction adherence evaluates whether a response:

- Executes the core task correctly
- Follows all explicit constraints
- Includes all required elements
- Avoids all prohibited content
- Maintains required structure and format

---

## Scoring Scale

| Score | Label | Meaning in Practice |
|------|------|----------------------|
| 5 | Full Adherence | No instruction violations of any kind |
| 4 | Strong Adherence | Minor non-critical deviation, core task fully correct |
| 3 | Partial Adherence | Core task completed but with notable instruction gaps |
| 2 | Weak Adherence | Major instruction violations; partially usable response |
| 1 | Non-Adherent | Fails core instruction or ignores task requirements |

---

## Decision Rules (How Scores Are Actually Assigned)

### Score 5 — Full Adherence
Assign ONLY if ALL conditions are met:

- Core task is fully completed
- All constraints are satisfied (format, length, style, tone)
- All required elements are present
- No prohibited content is included

> Even minor instruction drift disqualifies a 5.

---

### Score 4 — Strong Adherence
Assign if:

- Core task is fully completed
- All critical constraints are satisfied
- At most one minor deviation exists (non-impactful)

Examples of minor deviations:
- Slight formatting inconsistency
- Extra non-required detail
- Minor stylistic drift not affecting correctness

---

### Score 3 — Partial Adherence
Assign if:

- Core task is completed in a usable form
- BUT at least one secondary requirement is missing or violated

Common cases:
- Missing non-critical required element
- Partial constraint violation (e.g., slightly over length)
- Small scope deviation that does not break task validity

---

### Score 2 — Weak Adherence
Assign if:

- Core task is only partially completed OR
- Multiple instruction violations exist OR
- Output is significantly misaligned with prompt intent

Examples:
- Missing key required elements
- Major format violations
- Includes some prohibited or off-task content
- Response is only partially usable

---

### Score 1 — Non-Adherent
Assign if ANY of the following occur:

- Core task is not completed
- Response ignores major instructions
- Violates explicit exclusion rules
- Output is unrelated to the task

---

## Constraint Priority Hierarchy

When conflicts occur, apply this priority:

1. Explicit exclusions (highest severity)
2. Core task completion
3. Required elements
4. Format / structure rules
5. Style / tone guidelines

---

## Common Failure Patterns (Operational View)

| Failure Pattern | How It Appears in Real Tasks | Score Impact |
|----------------|------------------------------|-------------|
| Instruction drift | Response subtly shifts away from task goal | 2–3 |
| Partial completion | Task started but not fully executed | 2–3 |
| Missing requirement | Required element omitted | 3–4 depending severity |
| Format violation | Wrong structure or formatting | 3–4 |
| Exclusion violation | Explicit forbidden content included | 1–2 |
| Scope expansion | Adds unrequested content beyond task | 3–4 |

---

## Scoring Heuristics (Fast Decision Rules)

Use these to speed evaluation:

- If core task is wrong → **≤ 2**
- If exclusion violated → **≤ 2**
- If all constraints satisfied → **≥ 4**
- If anything required is missing → **≤ 3**
- If perfect compliance → **5 only**

---

## Example Applications

### Example 1
**Prompt:** Summarize in 3 sentences. No dates allowed.

**Response:** 3 sentences, no dates  
→ Score: 5

---

### Example 2
Same prompt

**Response:** 4 sentences, no dates  
→ Score: 4 (minor length violation)

---

### Example 3
Same prompt

**Response:** 3 sentences including dates  
→ Score: 2 (exclusion violation)

---

### Example 4
Same prompt

**Response:** long essay summary  
→ Score: 1 (core instruction failure)

---

## Key Principle

Instruction adherence is not about “mostly correct.”

It is about:

> Whether the response is usable under strict task constraints.

Any ambiguity resolves in favor of stricter evaluation.
