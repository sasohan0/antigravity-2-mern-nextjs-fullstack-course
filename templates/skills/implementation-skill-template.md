---
name: implementation-skill-template
description: Use this skill when safe implementation of one scoped task. Do not use it for unrelated tasks or broad full-project rewrites.
---

# Implementation Skill Template

## Goal
Guide Antigravity to complete this task with clear scope, safety constraints, reviewable output and verification.

## When to use
- When the project needs safe implementation of one scoped task.
- When the user provides relevant docs or files.

## Required inputs
- Project brief or relevant docs
- Files to inspect
- Expected output
- Constraints

## Workflow
1. Read only the required inputs.
2. Identify missing context.
3. Create a plan before editing.
4. List files that may change.
5. Execute only the approved scope.
6. Verify the result.
7. Summarize changes, risks and next steps.

## Constraints
- Do not expose secrets.
- Do not modify unrelated files.
- Do not install packages without approval.
- Do not remove tests, validation or security to make work pass.
- Do not claim success without evidence.

## Output format
1. Summary
2. Files reviewed
3. Plan
4. Risks
5. Changes or recommendations
6. Verification steps
7. Final verdict

## Example prompt
Use this skill to review `[file list]` for `safe implementation of one scoped task`. Do not edit code until the review is complete.
