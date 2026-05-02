#!/usr/bin/env python3
"""
Portfolio data generator and validator for Ebubechukwu Okeke's AI Evaluation portfolio.

Usage:
  python generate_data.py          # Validate and display report
  python generate_data.py --export # Export enriched portfolio.json
  python generate_data.py --stats  # Show statistics only
"""

import json
import sys
import os
from datetime import datetime

PORTFOLIO_JSON_PATH = os.path.join(os.path.dirname(__file__), "public", "portfolio.json")

REQUIRED_PERSONAL_FIELDS = ["name", "email", "linkedin", "github", "title"]
REQUIRED_CASE_FIELDS = ["id", "year", "type", "name", "problem", "method", "outcome", "decision"]


def load_portfolio():
    """Load and parse portfolio.json."""
    if not os.path.exists(PORTFOLIO_JSON_PATH):
        print(f"ERROR: portfolio.json not found at {PORTFOLIO_JSON_PATH}")
        sys.exit(1)
    with open(PORTFOLIO_JSON_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def validate_personal(data):
    """Validate personal info fields."""
    errors = []
    personal = data.get("personal", {})
    for field in REQUIRED_PERSONAL_FIELDS:
        if not personal.get(field):
            errors.append(f"  Missing personal.{field}")
    return errors


def validate_case_studies(data):
    """Validate each case study has required fields."""
    errors = []
    cases = data.get("caseStudies", [])
    if not cases:
        errors.append("  No case studies found")
        return errors
    for case in cases:
        cid = case.get("id", "UNKNOWN")
        for field in REQUIRED_CASE_FIELDS:
            if not case.get(field):
                errors.append(f"  {cid}: missing field '{field}'")
        if len(case.get("problem", "")) < 50:
            errors.append(f"  {cid}: problem description too short (<50 chars)")
        if len(case.get("outcome", "")) < 50:
            errors.append(f"  {cid}: outcome description too short (<50 chars)")
    return errors


def validate_credentials(data):
    """Validate credentials section."""
    errors = []
    creds = data.get("credentials", [])
    if len(creds) < 3:
        errors.append("  Fewer than 3 credentials — check completeness")
    for cred in creds:
        if not cred.get("org"):
            errors.append(f"  Credential missing 'org' field: {cred}")
    return errors


def compute_stats(data):
    """Compute statistics from portfolio data."""
    stats = {}
    cases = data.get("caseStudies", [])
    metrics = data.get("metrics", [])
    creds = data.get("credentials", [])

    stats["total_cases"] = len(cases)
    stats["case_years"] = sorted(set(c.get("year", 0) for c in cases))
    stats["case_types"] = list(set(c.get("type", "Unknown") for c in cases))
    stats["total_metrics"] = len(metrics)
    stats["total_credentials"] = len(creds)
    stats["active_credentials"] = sum(1 for c in creds if c.get("status") == "a")
    stats["verified_credentials"] = sum(1 for c in creds if c.get("status") == "v")

    # Extract numeric values from metrics
    for m in metrics:
        label = m.get("label", "")
        val = m.get("value", "0")
        if "Task" in label:
            stats["tasks_raw"] = val
        elif "Accuracy" in label:
            stats["accuracy_raw"] = val
        elif "Data Point" in label:
            stats["datapoints_raw"] = val
        elif "Failure Pattern" in label:
            stats["failure_patterns_raw"] = val
        elif "Audit" in label:
            stats["audit_escalations"] = 0

    return stats


def generate_report(data, stats, errors):
    """Generate a formatted validation report."""
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    p = data.get("personal", {})

    report = [
        "",
        "=" * 60,
        "  PORTFOLIO DATA VALIDATION REPORT",
        f"  Generated: {now}",
        "=" * 60,
        "",
        f"  Portfolio: {p.get('displayName', p.get('name', 'Unknown'))}",
        f"  Title:     {p.get('title', 'Unknown')}",
        f"  Version:   {data.get('meta', {}).get('version', 'N/A')}",
        "",
        "─" * 60,
        "  KEY METRICS",
        "─" * 60,
        f"  Case Studies:          {stats['total_cases']}",
        f"  Years Active:          {stats['case_years'][0]}–{stats['case_years'][-1]}",
        f"  Evaluation Tasks:      {stats.get('tasks_raw', 'N/A')}",
        f"  Accuracy Rate:         {stats.get('accuracy_raw', 'N/A')}",
        f"  Data Points:           {stats.get('datapoints_raw', 'N/A')}",
        f"  Failure Patterns:      {stats.get('failure_patterns_raw', 'N/A')}",
        f"  Audit Escalations:     {stats.get('audit_escalations', 'N/A')}",
        f"  Total Credentials:     {stats['total_credentials']}",
        f"  Active Contracts:      {stats['active_credentials']}",
        f"  Platform Verified:     {stats['verified_credentials']}",
        "",
        "─" * 60,
        "  CASE STUDIES",
        "─" * 60,
    ]

    for case in data.get("caseStudies", []):
        report.append(f"  [{case['id']}] {case['name']}")
        report.append(f"         Type: {case['type']} | Year: {case['year']}")
        problem_preview = case.get("problem", "")[:70] + "..."
        report.append(f"         Problem: {problem_preview}")
        report.append("")

    report += [
        "─" * 60,
        "  SKILL CATEGORIES",
        "─" * 60,
    ]
    for stype in stats["case_types"]:
        report.append(f"  · {stype}")

    report += [
        "",
        "─" * 60,
        "  CONTACT & LINKS",
        "─" * 60,
        f"  Email:    {p.get('email', 'N/A')}",
        f"  LinkedIn: {p.get('linkedin', 'N/A')}",
        f"  GitHub:   {p.get('github', 'N/A')}",
        f"  Site:     {p.get('site', 'N/A')}",
        "",
    ]

    if errors:
        report += [
            "─" * 60,
            "  VALIDATION ERRORS",
            "─" * 60,
        ]
        report += errors
        report.append("")

    status = "PASS" if not errors else f"FAIL ({len(errors)} error(s))"
    report += [
        "=" * 60,
        f"  VALIDATION STATUS: {status}",
        "=" * 60,
        "",
    ]

    return "\n".join(report)


def export_enriched(data):
    """Add generated timestamp and export enriched JSON."""
    enriched = dict(data)
    enriched["meta"]["lastValidated"] = datetime.now().isoformat()
    enriched["meta"]["caseCount"] = len(data.get("caseStudies", []))
    enriched["meta"]["credentialCount"] = len(data.get("credentials", []))
    with open(PORTFOLIO_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(enriched, f, indent=2, ensure_ascii=False)
    print(f"Exported enriched portfolio.json to {PORTFOLIO_JSON_PATH}")


def main():
    args = sys.argv[1:]
    data = load_portfolio()

    errors = []
    errors += validate_personal(data)
    errors += validate_case_studies(data)
    errors += validate_credentials(data)

    stats = compute_stats(data)

    if "--stats" in args:
        print(json.dumps(stats, indent=2))
        return

    report = generate_report(data, stats, errors)
    print(report)

    if "--export" in args:
        export_enriched(data)

    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
