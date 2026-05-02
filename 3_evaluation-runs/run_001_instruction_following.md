
# Run 001 — Instruction Following Evaluation

**Evaluator:** Ebubechukwu Okeke
**Date:** 2026-04-06
**Task Type:** Instruction Adherence Assessment
**Difficulty:** Mixed (Basic → Advanced)
**Mode:** Pairwise comparison + rubric scoring

---

## 1. Purpose

This run evaluates a model's ability to correctly interpret and
execute explicit instructions under varying constraint complexity.

Focus areas:
- Instruction parsing accuracy
- Constraint hierarchy handling
- Format compliance
- Omission vs over-generation control
- Multi-step instruction execution fidelity

---

## 2. Rubric Reference

**Primary:** `1_rubrics/instruction_adherence.md`
**Supporting:** `2_failure_patterns/common_failure_modes.md`

---

## 3. Task 001-A — Constraint Compliance (Email Generation)

### Prompt
Write a professional email declining a job offer.

Constraints:
1. Do not mention company name
2. Keep under 100 words
3. Include exactly one reason
4. Do not use "unfortunately"
5. End with a wish for success

---

### Response A
Thank you for the offer. After careful consideration, I have
chosen to pursue another opportunity more aligned with my
long-term goals. I appreciate your time and consideration
throughout the process. Wishing your team continued success.

---

### Response B
Dear [Company Name],

Unfortunately, I must decline. I have accepted another position
that better suits my current situation. Thank you for your time.

Best wishes for the company's success.

---

### Evaluation — Response A

| Constraint | Status | Notes |
|------------|--------|-------|
| No company name | ✅ Pass | Not mentioned |
| Under 100 words | ✅ Pass | 56 words |
| One reason only | ✅ Pass | Single consolidated reason |
| No "unfortunately" | ✅ Pass | Not present |
| Ends with success wish | ✅ Pass | Present |

**Failures identified:** None
**Score: 5/5**

---

### Evaluation — Response B

| Constraint | Status | Notes |
|------------|--------|-------|
| No company name | ❌ Fail | "[Company Name]" present in salutation |
| Under 100 words | ✅ Pass | 42 words |
| One reason only | ❌ Fail | Two reasons implied: declined position + accepted another |
| No "unfortunately" | ❌ Fail | Present in opening line |
| Ends with success wish | ✅ Pass | Present |

**Failures identified:**
- Exclusion violation (company name) — Critical
- Exclusion violation ("unfortunately") — Critical
- Multiple reasons — Moderate

**Score: 2/5**

---

### Comparison

| Criterion | Winner | Margin |
|-----------|--------|--------|
| Constraint compliance | A | High |
| Instruction adherence | A | High |

### Verdict
**Winner: Response A**
**Confidence:** High
**Decisive factor:** Response B violates two explicit exclusion
rules and includes multiple reasons where one was required.

**Justification:** Response A satisfies all five constraints
without exception. Response B opens with a prohibited salutation,
uses the explicitly banned word "unfortunately," and provides two
reasons for declining rather than the required one. These are
not stylistic differences — they are direct violations of
stated constraints.

---

## 4. Task 001-B — Structural Constraint (Technical Explanation)

### Prompt
Explain how HTTPS works.

Constraints:
1. Exactly 3 sections: Overview, How It Works, Why It Matters
2. Each section must be 2–3 sentences
3. No bullet points or lists
4. Do not mention TCP/IP or OSI model
5. Write for a non-technical audience

---

### Response A
**Overview**
HTTPS is a secure version of the standard web protocol used
to transfer data between your browser and a website. The "S"
stands for secure, meaning the connection is encrypted so
others cannot read what you send or receive.

**How It Works**
When you visit an HTTPS site, your browser and the website
agree on a secret code before any data is exchanged. This
handshake process ensures that only you and the website can
read the information passing between you.

**Why It Matters**
Without HTTPS, anyone on the same network could potentially
read your passwords, messages, or payment details. It is the
reason you can trust entering sensitive information on
websites that show a padlock icon in your browser.

---

### Response B
**Overview**
HTTPS uses SSL/TLS protocols layered over the transport
layer to encrypt communications between client and server.
It operates via asymmetric key exchange followed by symmetric
encryption. The handshake negotiates cipher suites across
the TCP connection.

**How It Works**
- Client sends ClientHello with supported cipher suites
- Server responds with certificate and ServerHello
- Session keys are derived using Diffie-Hellman exchange
- All subsequent data is encrypted symmetrically

**Why It Matters**
HTTPS prevents man-in-the-middle attacks and eavesdropping
on the OSI application layer. It is mandatory for PCI-DSS
compliance and protects data integrity across the network.

---

### Evaluation — Response A

| Constraint | Status | Notes |
|------------|--------|-------|
| Exactly 3 sections | ✅ Pass | Overview, How It Works, Why It Matters |
| 2–3 sentences per section | ✅ Pass | All three sections compliant |
| No bullet points | ✅ Pass | Prose throughout |
| No TCP/IP or OSI mention | ✅ Pass | Neither term present |
| Non-technical audience | ✅ Pass | Plain language used throughout |

**Failures identified:** None
**Score: 5/5**

---

### Evaluation — Response B

| Constraint | Status | Notes |
|------------|--------|-------|
| Exactly 3 sections | ✅ Pass | Correct sections present |
| 2–3 sentences per section | ❌ Fail | How It Works uses 4 bullet points, not sentences |
| No bullet points | ❌ Fail | Bullet list present in How It Works |
| No TCP/IP or OSI mention | ❌ Fail | Both terms explicitly mentioned |
| Non-technical audience | ❌ Fail | Technical jargon throughout |

**Failures identified:**
- Format violation (bullet points) — Critical
- Exclusion violation (TCP/IP, OSI) — Critical
- Audience constraint violation — Critical

**Score: 1/5**

---

### Comparison

| Criterion | Winner | Margin |
|-----------|--------|--------|
| Format compliance | A | High |
| Audience alignment | A | High |
| Constraint adherence | A | High |

### Verdict
**Winner: Response A**
**Confidence:** High
**Decisive factor:** Response B violates three critical
constraints simultaneously while Response A satisfies all five.

**Justification:** Response A demonstrates precise constraint
execution — correct structure, correct sentence counts, no
prohibited terms, and appropriate audience calibration throughout.
Response B ignores the format requirement entirely in the second
section, uses both explicitly prohibited technical terms, and
writes for a technical audience despite being instructed otherwise.
The failures are not marginal — they indicate the constraints
were not applied at all.

---

## 5. Task 001-C — Ambiguity Handling (LinkedIn Summary)

### Prompt
Summarize my professional background in 3 LinkedIn bullet points.

Constraints:
1. Exactly 3 bullet points
2. Each bullet under 20 words
3. Professional but conversational tone
4. No headers or titles

---

### Response A
• Experienced operations specialist with a track record of
  delivering high-quality work across remote workflows.
• Skilled in data validation, AI evaluation, and structured
  annotation tasks with consistent accuracy.
• Committed to clear communication and reliable execution
  in fast-moving, detail-oriented environments.

---

### Response B
**Professional Summary**

• 5+ years driving operational excellence across distributed
  teams with measurable performance improvements.
• Core competencies: data annotation, AI model evaluation,
  search quality rating, and remote workflow management.
• Recognised for consistently exceeding quality benchmarks
  and maintaining audit-ready documentation standards.

---

### Evaluation — Response A

| Constraint | Status | Notes |
|------------|--------|-------|
| Exactly 3 bullets | ✅ Pass | Three bullets present |
| Each under 20 words | ✅ Pass | 15, 16, 17 words respectively |
| Professional but conversational | ✅ Pass | Tone appropriate |
| No headers or titles | ✅ Pass | None present |

**Failures identified:** None
**Score: 5/5**

---

### Evaluation — Response B

| Constraint | Status | Notes |
|------------|--------|-------|
| Exactly 3 bullets | ✅ Pass | Three bullets present |
| Each under 20 words | ✅ Pass | All within limit |
| Professional but conversational | ✅ Pass | Tone appropriate |
| No headers or titles | ❌ Fail | "Professional Summary" header present |

**Failures identified:**
- Exclusion violation (header present) — Moderate

**Score: 4/5**

---

### Comparison

| Criterion | Winner | Margin |
|-----------|--------|--------|
| Constraint compliance | A | Low |
| Tone | Draw | — |
| Content quality | B | Low |

### Verdict
**Winner: Response A**
**Confidence:** Medium
**Decisive factor:** Response B includes a header explicitly
prohibited by the instructions.

**Justification:** Both responses are well-written and
professionally appropriate. Response B is arguably stronger
in content quality and specificity. However, it opens with
"Professional Summary" — a header the prompt explicitly
prohibited. Under strict constraint evaluation, this violation
determines the outcome. Response A satisfies all four
constraints without exception.

---

## 6. Task 001-D — Multi-Constraint Execution (Productivity Tips)

### Prompt
Write 5 productivity tips for developers.

Constraints:
1. Numbered 1–5
2. Each tip must start with an action verb
3. No tips about sleep or exercise
4. One sentence per tip
5. Tip 5 must be about code reviews

---

### Response A
1. Block dedicated time each morning for deep focus work
   before checking messages or notifications.
2. Use a task management system to prioritise work by
   impact rather than urgency.
3. Automate repetitive tasks using scripts or keyboard
   shortcuts to reduce context-switching overhead.
4. Set explicit time limits on meetings and replace
   low-value ones with written updates.
5. Schedule regular code reviews as a dedicated practice
   to catch issues early and share knowledge across the team.

---

### Response B
1. Start your day by reviewing your task list and
   identifying the three most important items.
2. Take regular breaks to maintain focus — even a short
   walk improves concentration significantly.
3. Use version control effectively to track changes and
   collaborate without conflicts.
4. Get enough sleep each night to ensure your brain is
   functioning at full capacity during work hours.
5. Pair program with colleagues when tackling complex
   features to improve code quality together.

---

### Evaluation — Response A

| Constraint | Status | Notes |
|------------|--------|-------|
| Numbered 1–5 | ✅ Pass | Correctly numbered |
| Action verb start | ✅ Pass | Block, Use, Automate, Set, Schedule |
| No sleep or exercise | ✅ Pass | Neither present |
| One sentence per tip | ✅ Pass | All single sentences |
| Tip 5 about code reviews | ✅ Pass | Explicitly about code reviews |

**Failures identified:** None
**Score: 5/5**

---

### Evaluation — Response B

| Constraint | Status | Notes |
|------------|--------|-------|
| Numbered 1–5 | ✅ Pass | Correctly numbered |
| Action verb start | ✅ Pass | Start, Take, Use, Get, Pair |
| No sleep or exercise | ❌ Fail | Tip 2 mentions walking, Tip 4 is about sleep |
| One sentence per tip | ❌ Fail | Tip 2 contains two clauses joined by em dash |
| Tip 5 about code reviews | ❌ Fail | Tip 5 is about pair programming, not code reviews |

**Failures identified:**
- Exclusion violation (sleep, exercise) — Critical
- Tip 5 content violation — Critical
- Sentence structure violation — Minor

**Score: 2/5**

---

### Comparison

| Criterion | Winner | Margin |
|-----------|--------|--------|
| Constraint compliance | A | High |
| Exclusion adherence | A | High |
| Required content (Tip 5) | A | High |

### Verdict
**Winner: Response A**
**Confidence:** High
**Decisive factor:** Response B fails three constraints
including the specific required content for Tip 5.

**Justification:** Response A executes all five constraints
precisely — correct numbering, action verb openers, no
prohibited topics, single sentences, and a compliant Tip 5.
Response B includes sleep and exercise content in two
separate tips, delivers Tip 5 on pair programming rather
than code reviews, and breaks the single-sentence rule.
These are not borderline failures — they are direct violations
of explicitly stated requirements.

---

## 7. Aggregate Results

| Task | Winner | Score A | Score B | Confidence |
|------|--------|---------|---------|------------|
| 001-A | A | 5/5 | 2/5 | High |
| 001-B | A | 5/5 | 1/5 | High |
| 001-C | A | 5/5 | 4/5 | Medium |
| 001-D | A | 5/5 | 2/5 | High |

---

## 8. Evaluator Notes

**Observed pattern:** The most common failure mode across all
four tasks was explicit exclusion violation — content or terms
the prompt specifically prohibited appearing in the response.
This pattern is consistent with instruction drift, where a
model prioritises fluency or completeness over strict constraint
compliance.

**Calibration insight:** Task 001-C demonstrates the importance
of separating content quality from constraint adherence. Response
B was arguably the better-written response but failed on a
structural constraint. At strict evaluation tier, constraint
adherence always takes priority over quality impression.

**Edge case flag:** Task 001-C is a borderline case worth
noting — a reviewer evaluating on quality alone would likely
prefer Response B. This run documents why that preference does
not determine the outcome under rubric-based evaluation.
