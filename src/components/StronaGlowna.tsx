import type { Tresc } from './tresc';
import { KalkulatorTempa } from './KalkulatorTempa';

/*
 * Jedna strona obslugujaca oba jezyki — trasy `/` i `/pl` roznia sie wylacznie
 * obiektem `t`, wiec zmiana ukladu dotyczy od razu obu wersji.
 */
export function StronaGlowna({ t }: { t: Tresc }) {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="trail border-b border-mist-200 bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-pine-600">
            {t.hero.nadtytul}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            {t.hero.tytul1}
            <span className="text-pine-600"> {t.hero.tytul2}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">{t.hero.opis}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#plany" className="rounded-md bg-pine-600 px-6 py-3 font-bold text-white transition hover:bg-pine-500">
              {t.hero.cta1}
            </a>
            <a href="#kalkulator" className="rounded-md border border-mist-300 bg-paper px-6 py-3 font-bold text-ink-900 transition hover:border-pine-500 hover:text-pine-600">
              {t.hero.cta2}
            </a>
          </div>

          <dl className="mt-14 grid gap-6 border-t border-mist-200 pt-8 sm:grid-cols-4">
            {t.liczby.map((l) => (
              <div key={l.etykieta}>
                <dt className="text-xs uppercase tracking-wider text-ink-400">{l.etykieta}</dt>
                <dd className="tabular mt-1 font-display text-3xl font-extrabold text-ink-900">{l.wartosc}</dd>
                <p className="mt-1 text-sm text-ink-500">{l.opis}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- Plany ---------------- */}
      <section id="plany" aria-labelledby="plany-h" className="border-b border-mist-200 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="plany-h" className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {t.plany.tytul}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-500">{t.plany.opis}</p>

          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {t.plany.lista.map((p) => (
              <li
                key={p.nazwa}
                className={`flex flex-col rounded-xl border p-6 ${
                  p.wyrozniony ? 'border-pine-600 bg-pine-100/40 ring-1 ring-pine-600/20' : 'border-mist-200'
                }`}
              >
                {p.wyrozniony && (
                  <span className="mb-3 w-fit rounded bg-pine-600 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                    {t.plany.wyrozniony}
                  </span>
                )}
                <h3 className="font-display text-2xl font-extrabold text-ink-900">{p.nazwa}</h3>
                <p className="tabular mt-2 font-display text-3xl font-extrabold text-pine-600">{p.cena}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.opis}</p>

                <ul className="mt-5 flex-1 space-y-2 text-sm text-ink-700">
                  {p.punkty.map((punkt) => (
                    <li key={punkt} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-clay-500" />
                      <span>{punkt}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`mt-6 rounded-md px-4 py-2.5 text-center font-bold transition ${
                    p.wyrozniony
                      ? 'bg-pine-600 text-white hover:bg-pine-500'
                      : 'border border-mist-300 text-ink-900 hover:border-pine-500 hover:text-pine-600'
                  }`}
                >
                  {t.plany.wybieram}{' '}
                  <span className="sr-only">{t.plany.wybieramSr.replace('{n}', p.nazwa)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Kalkulator ---------------- */}
      <section id="kalkulator" aria-labelledby="kalk-h" className="border-b border-mist-200 bg-mist-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="kalk-h" className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {t.kalkulator.tytul}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-500">{t.kalkulator.opis}</p>

          <div className="mt-10">
            <KalkulatorTempa t={t} />
          </div>
        </div>
      </section>

      {/* ---------------- Jak dziala ---------------- */}
      <section aria-labelledby="jak-h" className="border-b border-mist-200 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="jak-h" className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {t.jak.tytul}
          </h2>

          {/* Numeracja niesie informacje: to kolejnosc, nie ozdoba. */}
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {t.jak.kroki.map((k, i) => (
              <li key={k.tytul} className="rounded-xl border border-mist-200 p-6">
                <p className="tabular font-display text-5xl font-extrabold text-pine-100">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-xl font-extrabold text-ink-900">{k.tytul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{k.opis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Efekty ---------------- */}
      <section id="efekty" aria-labelledby="efekty-h" className="border-b border-mist-200 bg-mist-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="efekty-h" className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {t.efekty.tytul}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-500">{t.efekty.opis}</p>

          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {t.efekty.historie.map((h) => (
              <li key={h.imie} className="flex flex-col rounded-xl border border-mist-200 bg-paper p-6">
                <p className="font-display text-lg font-extrabold text-ink-900">{h.imie}</p>
                <p className="text-sm text-ink-500">{h.cel}</p>

                <dl className="mt-4 flex items-end gap-6 border-y border-mist-200 py-4">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-ink-400">{t.efekty.przed}</dt>
                    <dd className="tabular font-display text-xl font-bold text-ink-500">{h.przed}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-ink-400">{t.efekty.po}</dt>
                    <dd className="tabular font-display text-2xl font-extrabold text-pine-600">{h.po}</dd>
                  </div>
                </dl>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">&bdquo;{h.tekst}&rdquo;</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" aria-labelledby="faq-h" className="border-b border-mist-200 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="faq-h" className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {t.faq.tytul}
          </h2>

          <div className="mt-8 divide-y divide-mist-200 border-y border-mist-200">
            {t.faq.pytania.map((p) => (
              <details key={p.pytanie} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900">
                  {p.pytanie}
                  <span aria-hidden="true" className="shrink-0 text-2xl leading-none text-pine-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-500">{p.odpowiedz}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Kontakt ---------------- */}
      <section id="kontakt" aria-labelledby="kontakt-h" className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="kontakt-h" className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {t.kontakt.tytul}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-500">{t.kontakt.opis}</p>
          <a
            href="mailto:trener@ezpace.dawidolko.pl"
            className="mt-8 inline-block rounded-md bg-pine-600 px-8 py-3.5 font-bold text-white transition hover:bg-pine-500"
          >
            {t.kontakt.cta}
          </a>
          <p className="mt-4 text-sm text-ink-400">{t.kontakt.nota}</p>
        </div>
      </section>
    </>
  );
}
