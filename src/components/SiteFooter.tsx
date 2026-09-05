import type { Tresc } from './tresc';

export function SiteFooter({ t }: { t: Tresc }) {
  const rok = new Date().getFullYear();

  return (
    <footer className="border-t border-mist-200 bg-mist-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight text-ink-900">EzPace</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-500">{t.stopka.opis}</p>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-pine-600">
            {t.stopka.serwis}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-500">
            <li><a className="hover:text-pine-600" href="#plany">{t.nav.plany}</a></li>
            <li><a className="hover:text-pine-600" href="#kalkulator">{t.nav.kalkulator}</a></li>
            <li><a className="hover:text-pine-600" href="#efekty">{t.nav.efekty}</a></li>
            <li><a className="hover:text-pine-600" href="#faq">{t.nav.faq}</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-pine-600">
            {t.stopka.kontakt}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-500">
            <li>
              <a className="hover:text-pine-600" href="mailto:trener@ezpace.dawidolko.pl">
                trener@ezpace.dawidolko.pl
              </a>
            </li>
            <li>{t.stopka.odpowiedz}</li>
            <li>{t.stopka.miasto}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mist-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {rok} {t.stopka.prawa}</p>
          <p>
            {t.stopka.autor}{' '}
            <a className="text-ink-500 hover:text-pine-600" href="https://dawidolko.pl">
              dawidolko.pl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
