# RAVENORTH concept asset migration

All production imagery is still temporary source material from the former MADRUSSIANS redesign. It remains in place only to preserve the Phase 04 composition while licensed, generated, or EO Labs-owned replacements are commissioned. No Pinterest imagery is permitted.

| Current filename | MADRUSSIANS source | Current RAVENORTH usage | Priority |
|---|---|---|---|
| `hero-01.jpeg` | Homepage / Tilda CDN | Hero; road environment | **P0** |
| `home-02.jpeg` | Homepage / Tilda CDN | Story; format; Final CTA | **P0** |
| `home-03.jpeg` | Homepage / Tilda CDN | Kola card; people environment | **P0** |
| `home-04.jpeg` | Homepage / Tilda CDN | Altai card; format | **P0** |
| `kamchatka-01.jpeg` | `/kamchatka` / Tilda CDN | Kamchatka card | **P0** |
| `kurils-01.jpeg` | `/north_kuriles` / Tilda CDN | North Kurils card; story; format | **P0** |
| `baikal-01.jpeg` | `/baikal` / Tilda CDN | Baikal card | **P0** |
| `dagestan-01.jpeg` | `/dagestan` / Tilda CDN | Dagestan card | **P0** |
| `kyrgyzstan-01.jpeg` | `/kyrgyzstan` / Tilda CDN | Tian Shan card | **P0** |
| `kurils-02.jpeg` | `/north_kuriles` / Tilda CDN | About; Field Log; format | **P0** |
| `kyrgyzstan-03.jpeg` | `/kyrgyzstan` / Tilda CDN | Mountains environment; Altai Field Log | **P0** |
| `kurils-03.jpeg` | `/north_kuriles` / Tilda CDN | Pacific environment | **P0** |
| `dagestan-03.jpeg` | `/dagestan` / Tilda CDN | Memory environment | **P0** |
| `kamchatka-03.jpeg` | `/kamchatka` / Tilda CDN | Caucasus card; Story; Field Log | **P1** |
| `kamchatka-02.jpeg` | `/kamchatka` / Tilda CDN | Story foreground; format | **P1** |
| `baikal-02.jpeg` | `/baikal` / Tilda CDN | Story foreground | **P1** |
| `baikal-03.jpeg` | `/baikal` / Tilda CDN | Field Log | **P2** |
| `chara-01.jpeg` | `/blog/chara` / Tilda CDN | Field Log | **P2** |
| `dagestan-02.jpeg` | `/dagestan` / Tilda CDN | Currently unused | **P2** |
| `kyrgyzstan-02.jpg` | `/kyrgyzstan` / Tilda CDN | Currently unused | **P2** |

## Replacement seam

Image paths are centralized in `src/content/index.ts` for expedition and Field Log media, and in the small scene registries at the top of `src/components/Site.tsx` for environmental, Story, Format, About, and Final CTA media. Replacement should preserve crop intent and section aspect ratios; filenames may move to `public/images/ravenorth/` one batch at a time.

Current temporary inventory: **20 files**. P0: **13**, P1: **3**, P2: **4**.
