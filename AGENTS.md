# Repository Guidelines

This repo is a **methodology**, not an application.

## What belongs here

- Invariants, loops, patterns, case studies, prompts, templates
- Red-probe templates that use **real failure text**
- Cursor rules that make the next session inherit the same judgment

## What does not belong here

- Secrets, live `*.env`, installer binaries
- Step-by-step instructions for operating a third-party signup or bypass
- Drive-by rewrites of Clavue / duokai source (change those repos there)

## How to add a case study

1. Battlefield (one sentence) + surface symptom + the wrong diagnosis
2. Evidence (timing, logs, HTTP codes — no secrets)
3. Judgment (which loop / pattern)
4. Action taken
5. Where it was written down so the next chat cannot forget

## How to add a pattern

One page. Title is a law, not a feature name. Include: when it applies, the anti-pattern, and a link to a case study.

## Voice

Affirmative, concrete, short. Lead with what is true. Do not open with "It's not X".
