import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from './fonts';
import { CONTENT_SECURITY_POLICY } from './csp';

export const metadata: Metadata = {
  title: 'Page not found — EzPace',
  description: 'This address does not exist on EzPace. Go back to the home page or open the Polish version of the site.',
  robots: { index: false, follow: true },
  referrer: 'strict-origin-when-cross-origin',
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        <script src="/a11y/a11y-panel.js" data-accent="#cc0055" defer></script>
      </head>
      <body>
        <main id="main-content" className="lost">
          <div className="bib">
            <p className="bib__number">404</p>
            <h1 className="bib__title">Page not found</h1>
            <div className="bib__body">
              <p>The address may be mistyped, or the page may have moved.</p>
              <div className="lost__links">
                <a href="/" className="cell cell--hot">Back to the home page</a>
                <a href="/pl/" lang="pl" hrefLang="pl" className="cell cell--ink">Strona główna po polsku</a>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
