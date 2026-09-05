export function SiteFooter() {
  const rok = new Date().getFullYear();

  return (
    <footer className="border-t border-mist-200 bg-mist-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight text-ink-900">EzPace</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-500">
            Plany biegowe pisane pod jeden cel i jeden kalendarz. Bez gotowych
            szablonów z internetu.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-pine-600">
            Serwis
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-500">
            <li><a className="hover:text-pine-600" href="#plany">Plany</a></li>
            <li><a className="hover:text-pine-600" href="#kalkulator">Kalkulator tempa</a></li>
            <li><a className="hover:text-pine-600" href="#efekty">Efekty</a></li>
            <li><a className="hover:text-pine-600" href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-pine-600">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-500">
            <li>
              <a className="hover:text-pine-600" href="mailto:trener@ezpace.dawidolko.pl">
                trener@ezpace.dawidolko.pl
              </a>
            </li>
            <li>Odpowiedź w jeden dzień roboczy</li>
            <li>Rzeszów, Polska — konsultacje online</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mist-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {rok} EzPace. Projekt portfolio — serwis demonstracyjny.</p>
          <p>
            Autor:{' '}
            <a className="text-ink-500 hover:text-pine-600" href="https://dawidolko.pl">
              dawidolko.pl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
