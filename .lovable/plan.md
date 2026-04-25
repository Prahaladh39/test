# Mobile Layout Optimization

## The actual problem (visible on 390px width)

The homepage currently shows a horizontal scrollbar on mobile and the hero `<h1>` ("Your business has more growth in it than it's showing.") is clipped on both sides. Root cause: the `LogoMarquee` is wrapped in a flex column with `items-center` and no width — its inner `w-max` track expands the column wider than the viewport, breaking the whole page width.

A few smaller mobile issues stack on top:
- Hero `text-4xl` (2.25rem) is too large for 390px after padding.
- Hero CTA buttons stay side-by-side `auto`-width and look mismatched when stacked.
- Hero padding/scroll cue overlap the marquee on short viewports.
- Some section paddings (`py-24`) are heavy on mobile.

## What will change

### 1. Fix the horizontal overflow (root cause)
**File:** `src/routes/index.tsx` — the trusted-partners block

- Add `w-full` to the marquee's parent `motion.div`.
- Wrap `<LogoMarquee />` in a `w-full overflow-hidden` container so the inner `w-max` track is properly clipped to viewport width.

This single change removes the horizontal scrollbar and uncrops the hero heading.

### 2. Tighten hero for mobile
**File:** `src/routes/index.tsx`

- Hero container: `px-6` → `px-5 sm:px-6`, add `w-full`, adjust top/bottom padding so the scroll cue doesn't sit on the marquee (`pt-28 pb-24 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32`).
- Hero `<h1>`: `text-4xl` → `text-[2rem] sm:text-5xl lg:text-7xl`, `leading-[1.1]` → `leading-[1.12]`, add `break-words` as a safety net.
- Subtitle: smaller starting size on mobile (`text-base sm:text-lg lg:text-xl`) and tighter top margin (`mt-6 sm:mt-8`).
- CTA group: stack full-width on mobile, side-by-side from `sm`. Constrain max-width so the stacked buttons read as a clean column (`max-w-sm` on mobile, none from `sm`). Both `<a>`/`<Link>` and `<Button>` get `w-full sm:w-auto`.
- Trusted Partners pill: smaller padding/text on mobile (`px-3.5 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm`) so it doesn't dominate the hero on small screens.

### 3. Section padding tune-up (light pass, only if it improves rhythm)
- No changes needed to other sections after a quick review — the existing `py-24 lg:py-32` and grid stacks already collapse to single-column on mobile and look clean.
- The radial process (`RadialProcess`) already has a dedicated mobile stacked list, so no changes there.

## Out of scope
- Redesigning sections, changing copy, or touching the desktop layout.
- Anything beyond the homepage. Other routes already use the same responsive primitives and can be revisited if the user reports an issue.

## Technical notes
- All edits use Tailwind responsive prefixes (`sm:`, `lg:`) — no custom CSS needed.
- No new dependencies, no design-token changes.
- After edits I'll re-screenshot at 390×844 to confirm: no horizontal scroll, headline fits, buttons stack cleanly, marquee scrolls within viewport.
