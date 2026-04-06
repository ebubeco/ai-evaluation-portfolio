# Evaluation Run 004 — Multi-Constraint Instruction Failure (Constraint Priority Test)

## Prompt
> “Summarize the causes of inflation in Nigeria in exactly 4 bullet points. Each bullet must be under 12 words. Do not include explanations, only direct causes.”

---

## Model A Response
- Rising fuel prices increased transportation and production costs across sectors  
- Government borrowing expanded money supply, driving inflationary pressure nationwide  
- Currency depreciation made imports more expensive for consumers and businesses  
- Supply chain disruptions reduced availability of essential goods in markets  

---

## Model B Response
- Inflation in Nigeria is caused by multiple economic factors including fuel price increases which raise transportation costs significantly  
- Government fiscal deficits contribute by increasing money supply in the economy  
- Exchange rate depreciation leads to higher import costs affecting goods prices  
- Structural supply chain inefficiencies reduce availability of essential commodities and push prices upward  

---

## Evaluation Rubric
- Instruction Adherence (format, word limit, structure)  
- Constraint Compliance (strict enforcement)  
- Economic Accuracy  
- Information Density  

---

## Decision
Winner: Model A

---

## Reasoning Trace
- Model A satisfies the required structure: exactly four bullet points  
- Each bullet remains within the word limit and presents direct causes without elaboration  
- Model B violates multiple constraints:
  - exceeds word limits
  - introduces explanatory phrasing
  - fails compression requirement  
- Under constraint-priority evaluation, structural compliance outweighs semantic richness  
- Model B is more detailed, but this does not compensate for instruction violations  

---

## Failure Classification

### Model A
- Type: None  
- Notes: Fully compliant with all explicit constraints  

### Model B
- Type: I3 — Multi-Constraint Violation  
- Notes:  
  Violates word limit and “no explanation” constraint across multiple bullets  

---

## Model Metadata
- Model A: (name + version)  
- Model B: (name + version)  
- Date: April 2026  
- Environment: ChatGPT / API / Claude / etc.  

---

## Annotator Evaluations

### Strict Annotator
Decision: Model A  
Rationale:  
Model A fully satisfies all constraints. Model B fails multiple hard requirements and is disqualified under strict evaluation.

---

### Balanced Annotator
Decision: Model A  
Rationale:  
Model B provides more detailed economic context, but constraint violations outweigh semantic advantages.

---

### Pragmatic Annotator
Decision: Model B  
Rationale:  
Model B offers clearer and more informative causes of inflation. Despite constraint violations, it may better serve user understanding.

---

## Final Aggregated Decision
Winner: Model A  
Vote Split: 2–1  

Resolution Logic:  
Majority prioritizes strict instruction adherence.  
Disagreement reflects a trade-off between constraint compliance and informational usefulness.
