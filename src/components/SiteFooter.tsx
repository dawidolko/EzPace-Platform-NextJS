import type { Tresc } from './tresc';

export function SiteFooter({ t }: { t: Tresc }) {
  const rok = new Date().getFullYear();

  return (
    <footer className="colophon">
      <div className="sheet colophon__grid">
        <div className="colophon__brand">
          <p className="colophon__mark">EzPace</p>
          <p>{t.stopka.opis}</p>
        </div>

        <div className="colophon__col">
          <h2>{t.stopka.serwis}</h2>
          <ul>
            <li><a href="#plany">{t.nav.plany}</a></li>
            <li><a href="#kalkulator">{t.nav.kalkulator}</a></li>
            <li><a href="#efekty">{t.nav.efekty}</a></li>
            <li><a href="#faq">{t.nav.faq}</a></li>
          </ul>
        </div>

        <div className="colophon__col">
          <h2>{t.stopka.kontakt}</h2>
          <ul>
            <li><a href="mailto:trener@ezpace.dawidolko.pl">trener@ezpace.dawidolko.pl</a></li>
            <li>{t.stopka.odpowiedz}</li>
            <li>{t.stopka.miasto}</li>
          </ul>
        </div>

        <div className="colophon__legal">
          <p>© {rok} {t.stopka.prawa}</p>
          <p>
            {t.stopka.autor} <a href="https://dawidolko.pl">dawidolko.pl</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
