import { Archivo, Public_Sans } from 'next/font/google';

/*
 * Fetched at build time and served from the site itself. Only the latin subset
 * is preloaded; latin-ext stays declared, so Polish glyphs load on demand.
 */
const display = Archivo({ subsets: ['latin'], display: 'swap', variable: '--font-archivo' });
const body = Public_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-public-sans' });

export const fontVariables = `${display.variable} ${body.variable}`;
