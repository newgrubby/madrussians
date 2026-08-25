# Phase 06 — Identity audit

Baseline audited on 2026-08-25 at RU/EN 1440×900 and RU/EN 390×844 before Phase 06 implementation.

## Current typography

No webfonts are currently loaded by the application. Named families rely on local availability and generic fallback.

| Current family | Declared weights | Current usage | Finding |
|---|---:|---|---|
| `Unbounded, sans-serif` | 400; occasional inherited 500/700 | Hero, major headings, Story, card titles, large number, Field Log indices, mobile menu, wordmark | Correct display direction, but not sourced and applied through repeated declarations rather than tokens. |
| `Georgia, serif` | 400 | Italic lines inside large headings; legacy review rules | Generic editorial contrast; needs replacement by legally sourced Prata and tighter scope. |
| `Manrope, Arial, sans-serif` | 400/500/600 | Body, navigation, labels, metadata, form, select | Manrope is not sourced and therefore usually falls back to Arial. Replace with Onest. |
| `Arial, sans-serif` | fallback | Display and UI fallback | Functional fallback only. |

## Weight and scale usage

- Hero and scene headings use display weight 400 with very tight negative tracking (`-.07em` to `-.08em`).
- Card titles use display 400; card destination labels sometimes use UI 600.
- Principles and format controls mix inherited 500/700 with local declarations.
- UI scale is mostly `.52rem`–`.85rem`; body copy ranges `.82rem`–`1.2rem`.
- Large scene sizes are repeated as independent `clamp()` declarations rather than named design tokens.

## Identity findings

1. Phase 04 composition is strong, but typography depends on unavailable local fonts.
2. Section numerals and card indices are too small to function as a recognizable graphic code.
3. Expedition cards communicate destination names but have no recurring internal identifier system.
4. Field Log reads as a photo rail rather than an art-book index.
5. Scene transitions depend almost entirely on photography; no shared route/topography motif connects them.
6. Serif italics are frequent enough to feel generic because they are not tied to one intentional editorial moment.

## Constraints for Phase 06

- Keep the existing section architecture, media, graphite/cyan palette, GSAP scenes, card interaction, and responsive structure.
- Source only Unbounded, Prata, and Onest through `next/font/google`, with `display: swap` and minimum useful weights.
- Consolidate sizing into font and type tokens before local refinements.
- Treat route line, contours, oversized codes, and glyphs as decorative and hide them from assistive technology.
- Limit oversized destination glyphs to selected Expeditions/Field Log appearances.
