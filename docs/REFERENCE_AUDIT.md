# Reference audit — Forest Joy → MADRUSSIANS

## Архитектура Forest Joy

Fullscreen photographic hero with a transparent navigation layer; an oversized display headline; a narrow utility/section navigation; a three-column fact intro; a large “popular tours” card sequence; cinematic editorial statement surrounded by media; explanatory list; travel/archive sequence; story/about; testimonials; final conversion block and restrained footer.

The key rhythm is alternation: image-heavy viewport → quiet factual band → dense card rail → oversized typographic pause → structured list → image rail. Containers are nearly full-width (roughly 92–94vw), while reading copy stays narrow. Typography deliberately jumps between micro uppercase labels and viewport-scale headings. Photography is vertical and strongly cropped; fine rules organize the page.

## Что переносится

- Fullscreen, image-led hero and layered side navigation.
- Extreme contrast between uppercase microcopy and oversized display type.
- Four/five vertical tour cards with bottom-aligned metadata.
- Asymmetric image mosaic around a central editorial statement.
- Thin rules, indices, cold accent color and graphite field.
- Long/short section alternation and horizontal gallery rhythm.
- Restrained image scale and copy-shift hovers.

## Что изменено

- Russian expedition content, routes and actual conversion architecture.
- Better mobile composition: natural card rail and gallery rather than pinned scroll.
- Semantic sections, keyboard focus, reduced-motion behavior and nonfunctional demo-form disclosure.
- Content lives in typed data files, ready for a later CMS.

## Mapping

| Forest Joy | MADRUSSIANS |
|---|---|
| Destination hero | “Не туры. Экспедиции.” |
| Three attributes | Mini-groups / remote routes / 61 expeditions |
| Popular Tours | 2026–27 real expedition calendar |
| Discover the world | “Туда, где кончаются дороги” |
| Tour benefits | Jeep / yacht / special transport / photographer format |
| Gallery | Real trip archive structure |
| Brand story | Expedition project description |

## Animation patterns

Image scale on hover (700ms); metadata shift (350ms); section reveal targets (future GSAP enhancement); optional scroll-linked mosaic depth; natural horizontal snap; all transform/transition behavior removed under `prefers-reduced-motion`.

## Assets needed

Hero Kamchatka landscape; five route covers; volcano / jeep / yacht / ocean mosaic; five archive images; team image. Temporary editorial placeholders are used until official photo licensing and local optimization are cleared.

## Desktop / mobile

Desktop uses side navigation, multi-column facts, 28vw cards and 42vw archive frames. Mobile removes side navigation, uses a full-screen menu, 84vw snap cards, 82vw archive frames, stacked fact/about/contact layouts, and intentionally revised hero line breaks.
