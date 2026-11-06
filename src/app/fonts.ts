import localFont from 'next/font/local';

/*
 * Both faces are self-hosted woff2 subsets of Basic Latin, Latin-1 and the Polish
 * letters, so one file serves both languages. Sofia Sans Extra Condensed is limited
 * to weights 500 to 900 and keeps its tabular numerals. The text face is Source
 * Serif 4 fixed at optical size 16 with weights 400 to 650, renamed as its licence
 * asks of modified versions. Only the display face is preloaded, because it sets
 * the hero title.
 */
const display = localFont({
  src: './fonts/SofiaSansExtraCondensed-subset.woff2',
  weight: '500 900',
  display: 'swap',
  variable: '--font-sofia',
  fallback: ['Arial Narrow', 'Arial', 'sans-serif'],
});

const body = localFont({
  src: './fonts/EzPaceText-subset.woff2',
  weight: '400 650',
  display: 'swap',
  variable: '--font-text',
  preload: false,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: 'Times New Roman',
});

export const fontVariables = `${display.variable} ${body.variable}`;
