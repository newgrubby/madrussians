# RAVENORTH — Final production audit

Audit started 2026-08-25 against `main` and the existing production deployment.

| ID | Page/Section | Breakpoint | Problem | Severity | Fix | Status |
| -- | ------------ | ---------- | ------- | -------- | --- | ------ |
| FQ-001 | Hero | 360–390 | Long RU/EN display line clipped at the right viewport edge. | P0 | Apply a narrow-screen Hero type token without changing desktop scale. | Verified |
| FQ-002 | Expeditions | 360–430 | Section heading clipped before the final letters. | P0 | Add scoped narrow-screen display size and line-height. | Verified |
| FQ-003 | Story | 360–430 | Long middle line exceeded the viewport; annotation competed with primary text. | P0 | Use mobile Story scale and remove redundant decorative annotation at this breakpoint. | Verified |
| FQ-004 | Visual QA | Full page | Scrub scenes captured at incidental transforms, producing false clipping reports. | P1 | Use reduced-motion for static full-page audit; retain live checkpoint suite separately. | Fixed |
| FQ-005 | Destination select | Desktop/mobile | Menu opened downward from a low form field and could be clipped by the CTA boundary. | P1 | Open the bounded list upward and assert both horizontal and vertical viewport bounds. | Verified |
| FQ-006 | Visual QA | Full page | Lazy section images were absent from captures taken without a prior scroll pass. | P2 | Preload section media through a deterministic scroll pass before capture. | Fixed |

## Acceptance totals

- P0 open: 0
- P1 open: 0
- Critical P2 open: 0

All 35 files in `qa/final/approved` were opened and reviewed after the final repair pass. No factual GPS or coordinate annotations are present in the production-visible source; the RAVENORTH destination codes remain intentionally as internal graphic identifiers.
