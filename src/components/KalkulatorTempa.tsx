'use client';

import { useMemo, useState } from 'react';
import { computePace, formatKm, formatTime } from './pace';
import type { Tresc } from './tresc';

export function KalkulatorTempa({ t }: { t: Tresc }) {
  const DISTANCES = t.kalkulator.dystanse;
  const [dystans, setDystans] = useState(DISTANCES[2]);
  const [godziny, setGodziny] = useState('2');
  const [minuty, setMinuty] = useState('00');

  const wynik = useMemo(() => {
    const h = Number(godziny) || 0;
    const m = Number(minuty) || 0;
    return computePace(dystans.km, h * 3600 + m * 60);
  }, [dystans, godziny, minuty]);

  return (
    <div className="pacer__body">
      <form className="pacer__form" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend className="pacer__legend">{t.kalkulator.dystans}</legend>
          <div className="segments">
            {DISTANCES.map((d) => (
              <label key={d.nazwa} className="segment">
                <input
                  type="radio"
                  name="dystans"
                  className="sr-only"
                  checked={dystans.nazwa === d.nazwa}
                  onChange={() => setDystans(d)}
                />
                <span>{d.nazwa}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="pacer__legend">{t.kalkulator.cel}</legend>
          <div className="dial">
            <div>
              <label htmlFor="godziny">{t.kalkulator.godziny}</label>
              <input
                id="godziny"
                type="number"
                min={0}
                max={12}
                inputMode="numeric"
                value={godziny}
                onChange={(e) => setGodziny(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="minuty">{t.kalkulator.minuty}</label>
              <input
                id="minuty"
                type="number"
                min={0}
                max={59}
                inputMode="numeric"
                value={minuty}
                onChange={(e) => setMinuty(e.target.value)}
              />
            </div>
          </div>
        </fieldset>

        <p className="pacer__note">{t.kalkulator.naZywo}</p>
      </form>

      {/* Announced to screen readers on every change of the inputs. */}
      <div aria-live="polite" className="pacer__output">
        {wynik ? (
          <>
            <div className="readout">
              <div className="readout__lead">
                <p className="readout__label">{t.kalkulator.tempo}</p>
                <p className="readout__value">
                  {formatTime(wynik.pacePerKm)}
                  <span>/km</span>
                </p>
              </div>
              <div>
                <p className="readout__label">{t.kalkulator.predkosc}</p>
                <p className="readout__value">
                  {wynik.speed.toFixed(1)}
                  <span>km/h</span>
                </p>
              </div>
              <div>
                <p className="readout__label">{t.kalkulator.celWynik}</p>
                <p className="readout__value">{formatTime(wynik.total, true)}</p>
              </div>
            </div>

            <h3 className="pacer__legend">{t.kalkulator.miedzyczasy}</h3>
            <div className="splits-scroll">
              <table className="splits">
                <caption className="sr-only">
                  {t.kalkulator.podpis
                    .replace('{d}', dystans.nazwa)
                    .replace('{t}', formatTime(wynik.pacePerKm))}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">{t.kalkulator.kilometr}</th>
                    <th scope="col">{t.kalkulator.czas}</th>
                  </tr>
                </thead>
                <tbody>
                  {wynik.splits.map((p) => (
                    <tr key={p.km}>
                      <td>{formatKm(p.km)}</td>
                      <td>{formatTime(p.time, true)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="pacer__empty">{t.kalkulator.pusto}</p>
        )}
      </div>
    </div>
  );
}
