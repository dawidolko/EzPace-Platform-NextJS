import type { Metadata } from 'next';
import '../globals.css';
import { fontVariables } from '../fonts';
import { CONTENT_SECURITY_POLICY } from '../csp';
import { TRESC } from '@/components/tresc';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const t = TRESC['pl'];

const OG_ALT = 'EzPace: plany biegowe liczone wstecz od dnia startu';

export const metadata: Metadata = {
  metadataBase: new URL('https://ezpace.dawidolko.pl'),
  title: { default: 'EzPace — plany biegowe i kalkulator tempa', template: '%s — EzPace' },
  description: 'Plany biegowe pisane pod jeden cel i jeden kalendarz. Kalkulator tempa, strefy tetna i cotygodniowa korekta planu przez trenera.',
  keywords: ['plan biegowy', 'trening biegowy', 'kalkulator tempa', 'przygotowanie do maratonu', 'strefy tetna'],
  authors: [{ name: 'Dawid Olko', url: 'https://dawidolko.pl' }],
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    alternateLocale: 'en_GB',
    url: 'https://ezpace.dawidolko.pl/pl/',
    siteName: 'EzPace',
    title: 'EzPace — plany biegowe i kalkulator tempa',
    description: 'Plany biegowe pisane pod jeden cel i jeden kalendarz. Kalkulator tempa, strefy tetna i cotygodniowa korekta planu przez trenera.',
    images: [{ url: 'https://ezpace.dawidolko.pl/og-image.png', width: 1200, height: 630, alt: OG_ALT }],
  },
  twitter: { card: 'summary_large_image', title: 'EzPace — plany biegowe i kalkulator tempa', description: 'Plany biegowe pisane pod jeden cel i jeden kalendarz. Kalkulator tempa, strefy tetna i cotygodniowa korekta planu przez trenera.', images: ['https://ezpace.dawidolko.pl/og-image.png'] },
  alternates: {
    canonical: 'https://ezpace.dawidolko.pl/pl/',
    languages: {
      en: 'https://ezpace.dawidolko.pl/',
      pl: 'https://ezpace.dawidolko.pl/pl/',
      'x-default': 'https://ezpace.dawidolko.pl/',
    },
  },
  robots: { index: true, follow: true },
  referrer: 'strict-origin-when-cross-origin',
};

const daneStrukturalne = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'EzPace',
      url: 'https://ezpace.dawidolko.pl/pl/',
      description: 'Plany biegowe pisane pod jeden cel i jeden kalendarz. Kalkulator tempa, strefy tetna i cotygodniowa korekta planu przez trenera.',
      inLanguage: 'pl',
      author: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
    },
    {
      '@type': 'Service',
      name: 'Trening biegowy',
      url: 'https://ezpace.dawidolko.pl/pl/',
      description: 'Plany biegowe pisane pod jeden cel i jeden kalendarz. Kalkulator tempa, strefy tetna i cotygodniowa korekta planu przez trenera.',
      serviceType: 'Trening biegowy',
      areaServed: 'PL',
      provider: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={fontVariables}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        <script src="/a11y/a11y-panel.js" data-accent="#1d4ed8" defer></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(daneStrukturalne) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          {t.skipLink}
        </a>
        <SiteHeader t={t} />
        <main id="main-content">{children}</main>
        <SiteFooter t={t} />
      </body>
    </html>
  );
}
