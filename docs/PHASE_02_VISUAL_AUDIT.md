# PHASE 02 — visual audit (before implementation)

Audit date: 2026-08-24. Viewports inspected: 1440×900, 1920×1080, 390×844. Current homepage DOM has no broken loaded images and no body overflow (`scrollWidth <= innerWidth`; scrollbar excluded). Forest Joy was reviewed as the directing reference; its live Webflow endpoint was intermittently unavailable during automated capture, so comparison combines the accessible reference structure, previously documented measurements and direct visual inspection attempts.

## Summary

| Area | Status | Main finding |
|---|---|---|
| Global language | NEEDS WORK | Palette, rules and scale point in the right direction, but imagery is generic and the page lacks the reference’s depth and slow visual rhythm. |
| Real media | CRITICAL | All prominent scenes use stock placeholders rather than MADRUSSIANS expedition photography. |
| Motion | CRITICAL | No directed hero/story/archive ScrollTrigger scenes. Interaction is limited to CSS hover. |
| Desktop hierarchy | NEEDS WORK | Hero is strong; subsequent sections flatten into conventional rails and two-column layouts. |
| Mobile authorship | NEEDS WORK | Responsive structure works, but cinematic scenes are mostly compressed desktop compositions. |

## Header

- Composition: **GOOD** — transparent layer, fine rule, restrained links.
- Scale / typography: **GOOD** — micro navigation is appropriately quiet.
- Hierarchy / whitespace: **GOOD**.
- Motion: **NEEDS WORK** — no entrance behavior or scroll-state refinement.
- Forest Joy language: **GOOD**.

## Hero

- Composition: **GOOD** — full viewport, large title, side index and bottom information rail.
- Scale: **GOOD** at 1440 and 1920; title is the primary graphic object.
- Typography: **NEEDS WORK** — system fallback lacks the distinctive editorial character; outline treatment is effective but line geometry needs more precision.
- Whitespace / hierarchy: **GOOD**.
- Photograph scale: **GOOD**; crop: **NEEDS WORK** because the current image has no expedition subject and is not MADRUSSIANS media.
- Layering: **GOOD** but static.
- Motion: **CRITICAL** — no image settle, parallax, or timed text reveal.
- Forest Joy language: **NEEDS WORK** — geometry is close, atmosphere is not.

## Intro facts

- Composition: **GOOD** — horizontal editorial columns rather than rounded cards.
- Typography / baseline: **NEEDS WORK** — numbers and headings need clearer shared rhythm.
- Whitespace: **GOOD**.
- Motion: **NEEDS WORK** — no restrained stagger/reveal.
- Forest Joy language: **GOOD**.

## Expeditions

- Composition: **NEEDS WORK** — horizontal rail reads as a catalogue; four-card desktop stage is not held as one composition.
- Scale / photo impact: **NEEDS WORK** — cards are tall, but narrow and equal, reducing hierarchy.
- Content hierarchy: **NEEDS WORK** — too much date/price content is visible by default.
- Imagery: **CRITICAL** — stock placeholders; destination mapping is visually inaccurate.
- Interaction: **NEEDS WORK** — image scale exists, but active/sibling weight and disclosure behavior do not.
- Reveal motion: **CRITICAL** — no crop-mask or staggered entrance.
- Forest Joy language: **NEEDS WORK**.

## Cinematic story

- Composition: **CRITICAL** — only three fragments; scene height is 1050px rather than a 180–260vh journey.
- Typography: **GOOD** in scale, **NEEDS WORK** in staged line hierarchy.
- Whitespace / density: **NEEDS WORK** — the collage does not evolve across scroll.
- Photograph scale / crops: **CRITICAL** — too few fragments and generic media.
- Layering: **NEEDS WORK** — some z-depth exists, but nothing crosses layers over time.
- Motion: **CRITICAL** — no pin/sticky stage or differentiated parallax.
- Forest Joy language: **CRITICAL** — this is the largest fidelity gap.

## Format

- Composition: **NEEDS WORK** — split layout is clear but lacks a real image stage.
- Typography: **GOOD** in heading scale.
- Interaction: **CRITICAL** — hover only reveals copy; it does not crossfade relevant photography.
- Visual density / hierarchy: **NEEDS WORK**.
- Forest Joy language: **NEEDS WORK**.

## Archive

- Composition: **GOOD** as a natural horizontal editorial sequence.
- Photo scale / crop: **GOOD** structurally; imagery: **CRITICAL** because it is placeholder media.
- Typography / metadata: **GOOD**.
- Motion: **NEEDS WORK** — no desktop scroll-directed sequence; native rail alone feels unfinished.
- Accessibility: **GOOD** — no scroll trap and mobile swipe remains possible.
- Forest Joy language: **NEEDS WORK**.

## About

- Composition: **CRITICAL** — conventional heading plus copy plus image.
- Scale / hierarchy: **NEEDS WORK** — “61 / с 2021” is not used as the central visual fact.
- Photograph: **CRITICAL** — no real team/expedition moment.
- Whitespace: **GOOD**, but under-directed.
- Forest Joy language: **CRITICAL**.

## Reviews

- Composition: **NEEDS WORK** — large quotation helps, but selector treatment still reads as a slider.
- Typography: **GOOD**.
- Content: **GOOD** — concise fragments preserve the source meaning.
- Motion: **NEEDS WORK** — abrupt state swap, no typographic transition.
- Forest Joy language: **NEEDS WORK**.

## Final CTA

- Composition: **NEEDS WORK** — strong cyan field and oversized type, but it is a form section rather than a cinematic final scene.
- Photograph / layering: **CRITICAL** — no real background image.
- CTA hierarchy: **GOOD**.
- Mobile: **GOOD** structurally.
- Forest Joy language: **NEEDS WORK**.

## Footer

- Composition / hierarchy: **GOOD**.
- Typography: **GOOD**.
- Visual density: **GOOD**.

## Phase 02 priorities

1. Replace every visible placeholder with mapped official MADRUSSIANS media.
2. Direct one strong real hero scene and add a restrained opening/parallax timeline.
3. Recompose Expeditions as a four-card desktop stage with active/sibling interaction and masked reveal.
4. Build a 220vh story with a sticky stage, 5–8 real fragments and safe GSAP cleanup.
5. Add a real image stage to Format and rebuild About around `61 / С 2021`.
6. Convert the final CTA into an image-led closing scene.
7. Preserve natural mobile rails and replace desktop pinning with a vertical mobile story.
