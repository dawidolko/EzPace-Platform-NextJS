import type { Tresc } from './tresc';
import { KalkulatorTempa } from './KalkulatorTempa';
import { computePace, formatKm, formatTime } from './pace';

const HERO_DISTANCE_INDEX = 2;
const HERO_TARGET_SECONDS = 2 * 3600;

/*
 * One page for both languages: `/` and `/pl/` differ only in `t`, so a layout
 * change reaches both versions at once.
 */
export function StronaGlowna({ t }: { t: Tresc }) {
  const example = t.kalkulator.dystanse[HERO_DISTANCE_INDEX];
  const result = computePace(example.km, HERO_TARGET_SECONDS);

  /*
   * The hero prints the calculator's default case, reversed: the sheet starts at
   * the finish and counts back to the start line, as the plans do.
   */
  const countdown = result ? [{ km: 0, time: 0 }, ...result.splits].reverse() : [];

  return (
    <>
      <section className="start" aria-labelledby="start-h">
        <div className="sheet start__grid">
          <div className="start__copy">
            <p className="start__kicker">{t.hero.nadtytul}</p>
            <h1 id="start-h" className="start__title">
              {t.hero.tytul1} {t.hero.tytul2}
            </h1>
            <p className="start__lede">{t.hero.opis}</p>
            <a href="#plany" className="cell cell--hot start__go">{t.hero.cta1}</a>
          </div>

          <div className="start__side">
            <table className="countback">
              <caption>
                <span>
                  {t.kalkulator.podpis
                    .replace('{d}', example.nazwa)
                    .replace('{t}', result ? formatTime(result.pacePerKm) : '')}
                </span>
              </caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">{t.kalkulator.kilometr}</th>
                  <th scope="col">{t.kalkulator.czas}</th>
                </tr>
              </thead>
              <tbody>
                {countdown.map((p, i) => (
                  <tr key={p.km} style={{ '--i': i } as React.CSSProperties}>
                    <td>{formatKm(p.km)}</td>
                    <td>{formatTime(p.time, true)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a href="#kalkulator" className="cell cell--ink start__go">{t.hero.cta2}</a>
          </div>
        </div>
      </section>

      <section id="plany" aria-labelledby="plany-h" className="section section--flush">
        <div className="sheet section__head">
          <h2 id="plany-h" className="display">{t.plany.tytul}</h2>
          <p className="section__intro">{t.plany.opis}</p>
        </div>

        <ul className="ledger">
          {t.plany.lista.map((p) => {
            const [length, ...rest] = p.punkty;
            const [count, ...unit] = length.split(' ');
            return (
              <li key={p.nazwa} className={p.wyrozniony ? 'ledger__row ledger__row--hot' : 'ledger__row'}>
                <div className="sheet ledger__grid">
                  <div className="ledger__name">
                    <h3>{p.nazwa}</h3>
                    {p.wyrozniony && <p className="ledger__flag">{t.plany.wyrozniony}</p>}
                  </div>
                  <p className="ledger__weeks">
                    {count} <span>{unit.join(' ')}</span>
                  </p>
                  <div className="ledger__text">
                    <p>{p.opis}</p>
                    <ul>
                      {rest.map((punkt) => (
                        <li key={punkt}>{punkt}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="ledger__buy">
                    <p className="ledger__price">{p.cena}</p>
                    <a href="#kontakt" className={p.wyrozniony ? 'cell cell--paper' : 'cell cell--ink'}>
                      {t.plany.wybieram}{' '}
                      <span className="sr-only">{t.plany.wybieramSr.replace('{n}', p.nazwa)}</span>
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="kalkulator" aria-labelledby="kalk-h" className="pacer">
        <div className="sheet pacer__grid">
          <div className="pacer__head">
            <h2 id="kalk-h" className="display">{t.kalkulator.tytul}</h2>
            <p className="section__intro">{t.kalkulator.opis}</p>
          </div>
          <KalkulatorTempa t={t} />
        </div>
      </section>

      <section aria-labelledby="jak-h" className="section">
        <div className="sheet climb">
          <h2 id="jak-h" className="display climb__title">{t.jak.tytul}</h2>
          {/* The numbers carry information: these steps happen in this order. */}
          <ol className="climb__steps">
            {t.jak.kroki.map((k, i) => (
              <li key={k.tytul}>
                <p className="climb__number" aria-hidden="true">{i + 1}</p>
                <h3>{k.tytul}</h3>
                <p>{k.opis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="efekty" aria-labelledby="efekty-h" className="section section--ruled">
        <div className="sheet results">
          <div className="results__side">
            <h2 id="efekty-h" className="display">{t.efekty.tytul}</h2>
            <p className="section__intro">{t.efekty.opis}</p>
            <dl className="tally">
              {t.liczby.map((l) => (
                <div key={l.etykieta}>
                  <dt>{l.etykieta}</dt>
                  <dd className="tally__value">{l.wartosc}</dd>
                  <dd className="tally__note">{l.opis}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="results__list">
            {t.efekty.historie.map((h) => (
              <li key={h.imie}>
                <div className="results__who">
                  <p className="results__name">{h.imie}</p>
                  <p>{h.cel}</p>
                </div>
                <dl className="results__times">
                  <div>
                    <dt>{t.efekty.przed}</dt>
                    <dd>{h.przed}</dd>
                  </div>
                  <div className="results__after">
                    <dt>{t.efekty.po}</dt>
                    <dd>{h.po}</dd>
                  </div>
                </dl>
                <p className="results__quote"><q>{h.tekst}</q></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-h" className="section section--ruled">
        <div className="sheet answers">
          <h2 id="faq-h" className="display answers__title">{t.faq.tytul}</h2>
          <div className="answers__list">
            {t.faq.pytania.map((p) => (
              <details key={p.pytanie}>
                <summary>
                  {p.pytanie}
                  <span aria-hidden="true" className="answers__mark" />
                </summary>
                <p>{p.odpowiedz}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" aria-labelledby="kontakt-h" className="entry">
        <div className="sheet">
          <div className="bib">
            <h2 id="kontakt-h" className="bib__title">{t.kontakt.tytul}</h2>
            <div className="bib__body">
              <p>{t.kontakt.opis}</p>
              <a href="mailto:trener@ezpace.dawidolko.pl" className="cell cell--hot">{t.kontakt.cta}</a>
            </div>
            <p className="bib__note">{t.kontakt.nota}</p>
          </div>
        </div>
      </section>
    </>
  );
}
