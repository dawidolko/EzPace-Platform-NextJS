# EzPace

Running coaching: training plans built backwards from a race date, a pace
calculator and progress stories — a portfolio project built as a static
Next.js site.

**Live:** [ezpace.dawidolko.pl](https://ezpace.dawidolko.pl)

## What it is

A product site for a running coach. Three plans, a working pace calculator,
the coaching process and results. The premise is that a plan is derived from
the race date rather than appended to it, and every section supports that.

## The calculator is real

`src/components/KalkulatorTempa.tsx` computes pace, speed and split times from
a distance and a target time. Splits land on whole kilometres plus the leftover
distance — dropping the final 0.0975 km of a half marathon would report a
finish time about fifteen seconds early, which is exactly the kind of error a
runner notices on the course.

Verified against independent arithmetic: a 2:00 half marathon gives 5:41/km at
10.5 km/h; a 4:30 marathon gives 6:24/km at 9.4 km/h.

## Stack

| Layer     | Choice                                      |
| :-------- | :------------------------------------------ |
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| Language  | TypeScript, strict                          |
| Styling   | Tailwind CSS 4 with a token layer            |
| Hosting   | GitHub Pages                                 |

No backend. The contact section links to mail rather than faking a form
submission.

## Design

Morning on the trail: a light, cool ground, deep pine as the lead colour and
warm clay only for small accents — deliberately the inverse of its sibling
project EzScout, which is nocturnal and amber.

## Accessibility

One `<h1>`, no skipped heading levels, a skip link, landmarks, visible focus
rings, calculator results announced through `aria-live`, the splits table with
a caption and `scope`, and `prefers-reduced-motion` honoured.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run verify     # typecheck + production build
npm run serve      # serve the exported site from out/
```
