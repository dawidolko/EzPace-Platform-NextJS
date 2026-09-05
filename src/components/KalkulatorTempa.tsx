'use client';

import { useMemo, useState } from 'react';

const DYSTANSE = [
  { nazwa: '5 km', km: 5 },
  { nazwa: '10 km', km: 10 },
  { nazwa: 'Półmaraton', km: 21.0975 },
  { nazwa: 'Maraton', km: 42.195 },
];

/** Sekundy na "m:ss" albo "h:mm:ss", zaleznie od dlugosci. */
function naCzas(sekundy: number, zGodzinami = false): string {
  const s = Math.max(0, Math.round(sekundy));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sek = s % 60;
  if (zGodzinami || h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(sek).padStart(2, '0')}`;
  }
  return `${m}:${String(sek).padStart(2, '0')}`;
}

export function KalkulatorTempa() {
  const [dystans, setDystans] = useState(DYSTANSE[2]);
  const [godziny, setGodziny] = useState('2');
  const [minuty, setMinuty] = useState('00');

  const wynik = useMemo(() => {
    const h = Number(godziny) || 0;
    const m = Number(minuty) || 0;
    const razem = h * 3600 + m * 60;
    if (razem <= 0) return null;

    const tempoNaKm = razem / dystans.km;

    /*
     * Miedzyczasy liczone na pelnych kilometrach plus koncowka dystansu.
     * Przy polmaratonie ostatni odcinek ma 0,0975 km i pomijanie go dawaloby
     * czas krotszy od zalozonego o kilkanascie sekund.
     */
    const punkty: { km: number; czas: number }[] = [];
    const krok = dystans.km > 15 ? 5 : 1;
    for (let km = krok; km < dystans.km; km += krok) {
      punkty.push({ km, czas: tempoNaKm * km });
    }
    punkty.push({ km: dystans.km, czas: razem });

    return { tempoNaKm, razem, punkty, predkosc: dystans.km / (razem / 3600) };
  }, [dystans, godziny, minuty]);

  const klasaPola =
    'mt-1.5 w-full rounded-md border border-mist-300 bg-paper px-3.5 py-2.5 ' +
    'text-ink-900 focus:border-pine-600';

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
      <form
        className="rounded-xl border border-mist-200 bg-mist-50 p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <fieldset>
          <legend className="font-display text-sm font-bold uppercase tracking-widest text-pine-600">
            Dystans
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {DYSTANSE.map((d) => (
              <label
                key={d.nazwa}
                className={`cursor-pointer rounded-md border px-3 py-2 text-center text-sm font-semibold transition ${
                  dystans.nazwa === d.nazwa
                    ? 'border-pine-600 bg-pine-600 text-white'
                    : 'border-mist-300 bg-paper text-ink-700 hover:border-pine-500'
                }`}
              >
                <input
                  type="radio"
                  name="dystans"
                  className="sr-only"
                  checked={dystans.nazwa === d.nazwa}
                  onChange={() => setDystans(d)}
                />
                {d.nazwa}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="font-display text-sm font-bold uppercase tracking-widest text-pine-600">
            Cel czasowy
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="godziny" className="text-sm font-medium text-ink-700">
                Godziny
              </label>
              <input
                id="godziny"
                type="number"
                min={0}
                max={12}
                inputMode="numeric"
                value={godziny}
                onChange={(e) => setGodziny(e.target.value)}
                className={`tabular ${klasaPola}`}
              />
            </div>
            <div>
              <label htmlFor="minuty" className="text-sm font-medium text-ink-700">
                Minuty
              </label>
              <input
                id="minuty"
                type="number"
                min={0}
                max={59}
                inputMode="numeric"
                value={minuty}
                onChange={(e) => setMinuty(e.target.value)}
                className={`tabular ${klasaPola}`}
              />
            </div>
          </div>
        </fieldset>

        <p className="mt-5 text-sm text-ink-500">
          Wynik przelicza się na bieżąco — nie ma przycisku do klikania.
        </p>
      </form>

      {/* Wynik ogloszany czytnikom ekranu przy kazdej zmianie danych. */}
      <div aria-live="polite">
        {wynik ? (
          <div className="rounded-xl border border-mist-200 p-6">
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 border-b border-mist-200 pb-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400">Tempo</p>
                <p className="tabular font-display text-4xl font-extrabold text-pine-600">
                  {naCzas(wynik.tempoNaKm)}
                  <span className="ml-1 text-lg font-semibold text-ink-500">/km</span>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400">Prędkość</p>
                <p className="tabular font-display text-4xl font-extrabold text-ink-900">
                  {wynik.predkosc.toFixed(1)}
                  <span className="ml-1 text-lg font-semibold text-ink-500">km/h</span>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400">Cel</p>
                <p className="tabular font-display text-4xl font-extrabold text-ink-900">
                  {naCzas(wynik.razem, true)}
                </p>
              </div>
            </div>

            <h3 className="mt-5 font-display text-sm font-bold uppercase tracking-widest text-pine-600">
              Międzyczasy
            </h3>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-80 border-collapse text-sm">
                <caption className="sr-only">
                  Międzyczasy dla dystansu {dystans.nazwa} przy tempie{' '}
                  {naCzas(wynik.tempoNaKm)} na kilometr
                </caption>
                <thead>
                  <tr className="border-b border-mist-200 text-left text-ink-500">
                    <th scope="col" className="py-2 font-semibold">Kilometr</th>
                    <th scope="col" className="py-2 font-semibold">Czas</th>
                  </tr>
                </thead>
                <tbody>
                  {wynik.punkty.map((p) => (
                    <tr key={p.km} className="border-b border-mist-100 last:border-0">
                      <td className="tabular py-2 text-ink-700">
                        {p.km % 1 === 0 ? p.km : p.km.toFixed(2)} km
                      </td>
                      <td className="tabular py-2 font-semibold text-ink-900">
                        {naCzas(p.czas, true)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-mist-300 p-6 text-ink-500">
            Podaj cel czasowy większy od zera, żeby zobaczyć tempo i międzyczasy.
          </p>
        )}
      </div>
    </div>
  );
}
