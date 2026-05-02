# 📏 1 — Rubrics: The Scoring Framework

This directory defines the objective criteria used to turn subjective model behavior into actionable, high-quality data signals. 

## ⚖️ Why Rubrics Matter
In RLHF (Reinforcement Learning from Human Feedback), the quality of the model depends entirely on the **consistency of the rater**. These rubrics ensure that my scoring is repeatable, defensible, and free from personal bias.

---

## 📋 Core Rubric Dimensions

I evaluate models across four primary axes:

### 1. [Instruction Adherence](./instruction_adherence.md)
- **Primary Signal:** Did the model do exactly what it was told?
- **Key Metric:** Hard constraint satisfaction vs. "Soft" preference alignment.

### 2. [Reasoning Quality](./reasoning_quality.md)
- **Primary Signal:** Is the step-by-step logic sound?
- **Key Metric:** Absence of logical leaps, circular reasoning, or premise errors.

### 3. [Factual Accuracy](./factual_accuracy.md)
- **Primary Signal:** Is the information true?
- **Key Metric:** Alignment with ground-truth data or high-confidence external sources.

### 4. [Hallucination Detection](./hallucination_detection.md)
- **Primary Signal:** Did the model invent information?
- **Key Metric:** Categorization of "Fabricated Entities," "False Citations," or "Numerical Distortion."

---

## ⚡ [Quick Scoring Guide](./quick_scoring_guide.md)
For high-volume annotation tasks, I use this simplified decision tree to maintain speed without sacrificing the 99%+ accuracy standard.

---

## 🛠️ Application
These rubrics are directly applied to the **[Evaluation Runs](../3_evaluation-runs/)** and serve as the backbone for my side-by-side (SxS) ranking decisions.
