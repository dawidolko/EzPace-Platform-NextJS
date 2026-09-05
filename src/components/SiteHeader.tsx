'use client';

import { useEffect, useState } from 'react';
import type { Tresc } from './tresc';

export function SiteHeader({ t }: { t: Tresc }) {
  const [otwarte, setOtwarte] = useState(false);

  /*
   * Escape zamyka menu na telefonie. Bez tego jedynym wyjsciem jest trafienie
   * w przycisk — a osoba poruszajaca sie klawiatura nie ma jak sie wycofac.
   */
  useEffect(() => {
    if (!otwarte) return;
    const naKlawisz = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOtwarte(false);
    };
    document.addEventListener('keydown', naKlawisz);
    return () => document.removeEventListener('keydown', naKlawisz);
  }, [otwarte]);

  const linki = [
    { href: '#plany', label: t.nav.plany },
    { href: '#kalkulator', label: t.nav.kalkulator },
    { href: '#efekty', label: t.nav.efekty },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-mist-200 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href={t.sciezka} className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-md bg-pine-600 font-display text-xl font-bold text-white"
          >
            EZ
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-ink-900">EzPace</span>
        </a>

        <nav aria-label={t.menu.etykieta} className="hidden md:block">
          <ul className="flex items-center gap-7">
            {linki.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold text-ink-500 transition hover:text-pine-600">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                className="rounded-md bg-pine-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-pine-500"
              >
                {t.nav.cta}
              </a>
            </li>
            <li>
              {/* Przelacznik jezyka jest zwyklym linkiem do drugiej trasy —
                  dziala bez JavaScriptu i jest indeksowany osobno. */}
              <a
                href={t.jezyk.drugiHref}
                hrefLang={t.jezyk.drugiLang}
                lang={t.jezyk.drugiLang}
                aria-label={t.jezyk.etykieta}
                className="rounded-md border border-mist-300 px-3 py-1.5 text-sm font-bold text-ink-700 transition hover:border-pine-500 hover:text-pine-600"
              >
                {t.jezyk.drugi}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={t.jezyk.drugiHref}
            hrefLang={t.jezyk.drugiLang}
            lang={t.jezyk.drugiLang}
            aria-label={t.jezyk.etykieta}
            className="rounded-md border border-mist-300 px-3 py-2 text-sm font-bold text-ink-700"
          >
            {t.jezyk.drugi}
          </a>
          <button
            type="button"
            className="rounded-md border border-mist-300 px-3 py-2 text-sm font-semibold text-ink-700"
            aria-expanded={otwarte}
            aria-controls="menu-mobilne"
            onClick={() => setOtwarte((v) => !v)}
          >
            {otwarte ? t.menu.zamknij : t.menu.otworz}
          </button>
        </div>
      </div>

      {otwarte && (
        <nav id="menu-mobilne" aria-label={t.menu.etykietaMobil} className="border-t border-mist-200 bg-mist-50 md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {[...linki, { href: '#kontakt', label: t.nav.cta }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOtwarte(false)}
                  className="block border-b border-mist-200 py-3 font-semibold text-ink-900 last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
