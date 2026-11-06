'use client';

import { useEffect, useState } from 'react';
import type { Tresc } from './tresc';

export function SiteHeader({ t }: { t: Tresc }) {
  const [otwarte, setOtwarte] = useState(false);

  /*
   * Escape closes the phone menu, so a keyboard user can back out without
   * travelling to the toggle button.
   */
  useEffect(() => {
    if (!otwarte) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOtwarte(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [otwarte]);

  const linki = [
    { href: '#plany', label: t.nav.plany },
    { href: '#kalkulator', label: t.nav.kalkulator },
    { href: '#efekty', label: t.nav.efekty },
    { href: '#faq', label: t.nav.faq },
  ];

  /*
   * A plain link to the other route: it works without JavaScript and each
   * language is indexed on its own.
   */
  const jezyk = (
    <a
      href={t.jezyk.drugiHref}
      hrefLang={t.jezyk.drugiLang}
      lang={t.jezyk.drugiLang}
      aria-label={`${t.jezyk.drugi}: ${t.jezyk.etykieta}`}
      className="masthead__cell"
    >
      {t.jezyk.drugi}
    </a>
  );

  return (
    <header className="masthead">
      <div className="masthead__row">
        <a href={t.sciezka} className="wordmark">
          EzPace
        </a>

        <nav aria-label={t.menu.etykieta} className="masthead__nav">
          <ul>
            {linki.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="masthead__cell">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="masthead__push">{jezyk}</li>
            <li>
              <a href="#kontakt" className="masthead__cell masthead__cta">
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </nav>

        <div className="masthead__compact">
          {jezyk}
          <button
            type="button"
            className="masthead__cell"
            aria-expanded={otwarte}
            aria-controls="menu-mobilne"
            onClick={() => setOtwarte((v) => !v)}
          >
            {otwarte ? t.menu.zamknij : t.menu.otworz}
          </button>
        </div>
      </div>

      {otwarte && (
        <nav id="menu-mobilne" aria-label={t.menu.etykietaMobil} className="drawer">
          <ul>
            {[...linki, { href: '#kontakt', label: t.nav.cta }].map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOtwarte(false)}>
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
