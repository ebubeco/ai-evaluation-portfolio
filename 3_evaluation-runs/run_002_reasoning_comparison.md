# Run 002 — Reasoning Quality Evaluation

**Evaluator:** Ebubechukwu Okeke  
**Date:** 2026-04-06  
**Task Type:** Reasoning Quality Assessment  
**Difficulty:** Mixed (Intermediate → Advanced)  
**Mode:** Pairwise comparison + weighted scoring  

---

## 1. Purpose

This run evaluates how well models construct, justify, and apply reasoning across different problem types.

Focus areas:
- Logical correctness and structure  
- Proper use of problem constraints  
- Detection and avoidance of reasoning errors  
- Alignment between reasoning and final answer  
- Handling of partial validity  

---

## 2. Rubric Reference

**Primary:** `1_rubrics/reasoning_quality.md`  
**Supporting:** `2_failure_patterns/common_failure_modes.md`  

---

## 3. Scoring Framework

Each response is evaluated across five dimensions:

| Dimension | Weight |
|----------|--------|
| Reasoning Quality | 0.35 |
| Conclusion Accuracy | 0.25 |
| Constraint Usage | 0.15 |
| Clarity | 0.15 |
| Error Detection / Handling | 0.10 |

**Key Rule:**  
Reasoning Quality is the primary signal.  
A correct answer with flawed reasoning is scored lower than a well-reasoned but slightly imperfect answer.

---

## 4. Task 002-A — Quantitative Reasoning

### Prompt  
A store marks up items by 40% and then applies a 25% discount.  
Is the final price higher or lower than the original price, and by how much?

---

### Response A  
Final price is higher by 5%.  
Example: $100 → $140 → $105.

---

### Response B  
40% minus 25% equals 15%, so the final price is 15% higher.

---

### Evaluation

#### Response A
- Uses correct multiplicative reasoning (1.4 × 0.75 = 1.05)  
- Applies concrete example for validation  
- No logical gaps  

**Score: 0.95**

---

#### Response B
- Applies incorrect additive model (40 − 25)  
- Fails to account for compounding  
- Produces incorrect conclusion  

**Failure Type:** Invalid arithmetic model  

**Score: 0.25**

---

### Verdict  
**Winner: Response A**  
**Confidence:** High  

**Why:** Correct model selection and validation vs fundamental reasoning error.

---

## 5. Task 002-B — Causal Reasoning

### Prompt  
A company introduces remote work. Productivity rises the next month.  
Did remote work cause the increase?

---

### Response A  
Not necessarily. This assumes causation from timing alone. Other factors like hiring, tools, or seasonality could explain the increase.

---

### Response B  
Yes. Remote work improves productivity, and the timing supports it.

---

### Evaluation

#### Response A
- Correctly identifies correlation ≠ causation  
- Provides alternative explanations  
- Maintains appropriate uncertainty  

**Score: 0.92**

---

#### Response B
- Commits post hoc fallacy  
- Uses vague justification (“well known”)  
- No alternative hypotheses  

**Failure Type:** Causal fallacy (post hoc)  

**Score: 0.30**

---

### Verdict  
**Winner: Response A**  
**Confidence:** High  

**Why:** Proper causal reasoning vs unsupported assumption.

---

## 6. Task 002-C — Statistical Reasoning

### Prompt  
A drug works for 70% of patients. A doctor tells a patient:  
“You have a 70% chance of recovery.” Is this valid?

---

### Response A  
Not exactly. That number reflects group outcomes. Individual results depend on personal factors.

---

### Response B  
Yes. That’s the best estimate available.

---

### Evaluation

#### Response A
- Distinguishes population vs individual probability  
- Identifies heterogeneity  
- Provides correct interpretation  

**Score: 0.93**

---

#### Response B
- Recognizes base rate but misapplies it  
- Ignores conditional variation  
- Overgeneralizes probability  

**Failure Type:** Population-to-individual inference error  

**Score: 0.45**

---

### Verdict  
**Winner: Response A**  
**Confidence:** High  

**Why:** Correct statistical interpretation vs oversimplification.

---

## 7. Task 002-D — Diagnostic Reasoning

### Prompt  
A laptop is slow for two weeks. No new software installed. Restart didn’t fix it.  
What are likely causes and next steps?

---

### Response A  
Possible causes include background processes, storage limits, or overheating.  
Check system usage, disk health, and temperature logs.

---

### Response B  
Likely a virus. Run antivirus and reset the system if needed.

---

### Evaluation

#### Response A
- Uses constraints to narrow causes  
- Provides structured diagnostic steps  
- Avoids premature conclusions  

**Score: 0.94**

---

#### Response B
- Ignores key constraints  
- Jumps to single cause  
- Escalates too quickly (reset)  

**Failure Type:** Constraint omission + premature conclusion  

**Score: 0.40**

---

### Verdict  
**Winner: Response A**  
**Confidence:** High  

**Why:** Structured diagnosis vs generic guesswork.

---

## 8. Aggregate Results

| Task | Winner | A Score | B Score |
|------|--------|--------|--------|
| 002-A | A | 0.95 | 0.25 |
| 002-B | A | 0.92 | 0.30 |
| 002-C | A | 0.93 | 0.45 |
| 002-D | A | 0.94 | 0.40 |

---

## 9. Key Insights

### 1. Model B Failure Pattern
Consistent issues across tasks:
- Uses intuitive but incorrect shortcuts  
- Ignores constraints  
- Overgeneralizes without justification  
- Defaults to confident but weak reasoning  

---

### 2. Model A Strength Pattern
- Applies correct reasoning models  
- Uses constraints effectively  
- Maintains logical consistency  
- Handles uncertainty appropriately  

---

### 3. Evaluation Insight

> The most common reasoning failure is not lack of knowledge —  
> it is the use of the wrong reasoning model.

Examples:
- Additive vs multiplicative thinking  
- Correlation vs causation  
- Population vs individual inference  

---

## 10. Final Takeaway

Strong reasoning is defined by:

- Correct model selection  
- Logical consistency  
- Constraint awareness  
- Alignment between reasoning and conclusion  

A response that **sounds right but reasons incorrectly** is more dangerous than one that is uncertain but logically sound.

---

*This run demonstrates how reasoning quality — not just correctness — determines evaluation outcomes in real-world AI assessment.*
