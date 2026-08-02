---
name: Yuenian Zhou Academic Homepage
description: An old-book academic folio with archival zine plates and restrained cobalt annotations.
colors:
  ink: "#24211d"
  muted-ink: "#6b655b"
  cobalt: "#173d99"
  cobalt-deep: "#102b68"
  cobalt-muted: "#586887"
  cobalt-wash: "#d9e1f4"
  canvas: "#e2dbce"
  paper: "#f3ede1"
  paper-deep: "#e8dfd1"
  border: "#b8afa0"
  rule: "#4b463d"
typography:
  display:
    fontFamily: '"IM Fell English", "Iowan Old Style", Baskerville, Georgia, serif'
    fontSize: "clamp(3.1rem, 5.6vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.018em"
  headline:
    fontFamily: '"IM Fell English", "Iowan Old Style", Baskerville, Georgia, serif'
    fontSize: "clamp(1.85rem, 2.8vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "normal"
  body:
    fontFamily: '"EB Garamond", "Iowan Old Style", Baskerville, Georgia, serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  label:
    fontFamily: '"IM Fell English SC", "Iowan Old Style", Baskerville, Georgia, serif'
    fontSize: "0.65rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.065em"
rounded:
  square: "0"
  focus: "3px"
spacing:
  page-gutter: "clamp(20px, 4vw, 32px)"
  section: "clamp(48px, 7vw, 76px)"
  editorial-gap: "clamp(48px, 8vw, 104px)"
components:
  nav-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "4px 0 5px"
  nav-link-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.cobalt-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "4px 0 5px"
  skip-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "8px 12px"
---

# Design System: Yuenian Zhou Academic Homepage

## Overview

**Creative North Star: "The Scholar's Field Folio"**

The homepage should feel like a carefully handled page from an old mathematical field notebook: scholarly, quiet, tactile, and precise. Its visual authority comes from classical book typography, aged-paper surfaces, hairline rules, archival labels, and real image plates rather than modern interface decoration.

The page combines old-book printing with a restrained Japanese/Korean zine sensibility. Large areas of calm paper allow the text and small cobalt annotations to carry weight. The result should feel designed and personal without becoming theatrical, nostalgic pastiche, or a generic portfolio template.

**Key Characteristics:**

- Classical serif hierarchy with generous reading measure and deliberate line breaks.
- Warm paper and warm-black ink; never clinical white or pure digital black.
- Cobalt appears as a rare registration mark, active state, or image-plane accent.
- Flat editorial composition using rules, columns, folios, and captions instead of cards.
- Archival image plates remain fully visible and materially integrated with the paper.
- Motion is quiet, brief, and subordinate to reading.

## Colors

The palette is an aged-paper neutral system animated by one cool cobalt annotation color.

### Primary

- **Registration Cobalt** (`#173d99`): sparse labels, list marks, active navigation, folio details, and the single saturated plane inside key images.
- **Deep Cobalt Ink** (`#102b68`): stronger interactive emphasis and hover color.
- **Faded Cobalt Note** (`#586887`): subdued marginalia and secondary blue marks.
- **Cobalt Wash** (`#d9e1f4`): text selection and rare pale emphasis.

### Neutral

- **Warm Printer's Ink** (`#24211d`): primary text and headings.
- **Aged Annotation Ink** (`#6b655b`): captions, metadata, and secondary prose.
- **Bookcloth Canvas** (`#e2dbce`): outer page surface and header.
- **Ivory Leaf** (`#f3ede1`): paper surfaces and the accessible skip link.
- **Deep Paper Fold** (`#e8dfd1`): reserved tonal paper layer.
- **Pencil Border** (`#b8afa0`): quiet internal separators.
- **Printer's Rule** (`#4b463d`): primary section and page divisions.

**The Cobalt Annotation Rule.** Cobalt is an annotation, not a fill color. Keep it rare enough that every occurrence reads as intentional.

**The Warm Ink Rule.** Use warm ink and paper neutrals; avoid pure black, pure white, gray SaaS surfaces, gradients, and multicolor decoration.

## Typography

**Display Font:** IM Fell English (with Iowan Old Style, Baskerville, Georgia fallbacks)  
**Body Font:** EB Garamond (with Iowan Old Style, Baskerville, Georgia fallbacks)  
**Label Font:** IM Fell English SC (with old-style serif fallbacks)

**Character:** IM Fell English supplies irregular old-print authority for names and headings. EB Garamond keeps long mathematical and biographical prose refined, readable, and less theatrical. Small-cap labels behave like archival catalogue notes, never like a technical monospace costume.

### Hierarchy

- **Display** (400, `clamp(3.1rem, 5.6vw, 4.8rem)`, 0.95): homepage thesis heading only; may use italic on one restrained word.
- **Headline** (400, `clamp(1.85rem, 2.8vw, 2.2rem)`, 1.12): section and page headings.
- **Title** (400, `clamp(1.95rem, 2.8vw, 2.35rem)`, 1.08): the site name in the running header.
- **Body** (400, `18px`, 1.72): reading text with a target measure of 57–68 characters.
- **Label** (400, `0.65rem`, 0.065em tracking): folios, plate captions, navigation, and archival indices.

**The Printed Hierarchy Rule.** Create emphasis with face, scale, italic, and placement. Do not use modern sans-serif display type, heavy geometric weights, or oversized headings above 6rem.

## Layout

The page uses a centered `1120px` folio with fluid gutters. The first viewport is a two-column editorial spread: profile copy at roughly 1.25fr and one narrow archival plate at 290–360px. Subsequent content uses asymmetric columns, visible rules, and a readable prose measure rather than equal cards.

Spacing follows a book-like rhythm: related text stays close, while distinct sections receive `48–76px` of separation. The research section pairs a narrow title column with a bordered prose column. Marginalia pairs a compact running heading with two unequal image plates.

At `760px`, spreads collapse to one column and nonessential marginal labels disappear. At `520px`, contact facts and image plates stack, retaining full image aspect ratios and enough horizontal room for the complete email address. At `1260px`, the outer folio marker may appear in the margin.

## Elevation & Depth

The system is deliberately flat. It uses no box shadows and no translucent cards. Depth comes from warm tonal differences, paper grain, multiply-blended scans, irregular clipped plate edges, and the physical rhythm of printer's rules.

**The Flat Folio Rule.** A new block earns separation through spacing, a hairline rule, or a change in column structure—not a rounded container or shadow.

## Shapes

Corners remain square (`0`) throughout. Image plates may use a barely irregular polygon clip to suggest trimmed paper, with rotations held below one degree. Cobalt registration marks are small squares or diamonds. Focus outlines may use a small `3px` radius for clarity without changing the page's square form language.

**The Complete Plate Rule.** Display archival images at their natural aspect ratio. Never crop mathematical diagrams, music, labels, or generated plate compositions merely to force equal heights.

## Components

### Navigation

Navigation uses small-cap serif text on the page surface. Default links are muted ink; hover and current states deepen to cobalt. The current page has a thin cobalt underline and a small registration bar. Mobile navigation moves below a quiet horizontal rule.

### Editorial Labels & Folios

Labels use IM Fell English SC, compact tracking, cobalt ink, and a short one-pixel continuation rule. Folio numbers and plate metadata remain factual and sparse; they should not become decorative badges.

### Sections

Sections are transparent and square. A single printer's rule, generous top padding, and asymmetric typography establish hierarchy. Avoid replacing them with equal cards.

### Research Index

Each research theme occupies its own ruled line. A four-pixel cobalt diamond marks the entry; mathematical `ℓ` and italic `p` use math-capable serif fallbacks. Preserve the ordering “ℓ-adic and p-adic” and keep ℓ-independence on its own line.

### Archival Plates

Plates use their complete aspect ratio, multiply blending, slightly softened print contrast, subtle irregular clipping, and compact catalogue captions. One saturated cobalt element may remain fully visible; do not grayscale it away.

### Contact Facts

Email and office are readable body-size facts under small archival labels. They wrap safely on narrow screens and remain visually subordinate only to the profile prose, not miniature footnotes.

### Skip Link

The keyboard skip link is hidden above the viewport until focused. It uses ivory paper, warm ink, a one-pixel printer's rule, and no rounded UI treatment.

## Do's and Don'ts

### Do:

- **Do** preserve the old-book, academic archive, and minimal-zine identity when refining the site.
- **Do** let typography, whitespace, rules, and real plate imagery carry the composition.
- **Do** keep research topics on separate readable lines, including ℓ-independence and p-adic Hodge theory.
- **Do** use one authored entrance sequence, quiet scroll reveals, transform/opacity animation, and reduced-motion support.
- **Do** check desktop and narrow mobile layouts with the real biography, email, mathematics, and images.

### Don't:

- **Don't** introduce SaaS cards, pills, glassmorphism, purple gradients, generic sans-serif type, or ornamental icon tiles.
- **Don't** crop archival images to equal heights or hide their meaningful text and diagrams.
- **Don't** turn cobalt into a broad background color or add competing accent hues.
- **Don't** scatter bouncing, elastic, looping, or attention-seeking motion across the page.
- **Don't** rewrite factual biography, research, teaching, or event information merely for visual balance.
