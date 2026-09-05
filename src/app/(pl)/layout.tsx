import type { Metadata } from 'next';
import '../globals.css';
import { TRESC } from '@/components/tresc';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const t = TRESC['pl'];

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
  },
  twitter: { card: 'summary_large_image', title: 'EzPace — plany biegowe i kalkulator tempa', description: 'Plany biegowe pisane pod jeden cel i jeden kalendarz. Kalkulator tempa, strefy tetna i cotygodniowa korekta planu przez trenera.' },
  alternates: {
    canonical: 'https://ezpace.dawidolko.pl/pl/',
    // Obie wersje wskazuja na siebie nawzajem; angielska jest domyslna dla
    // odwiedzajacych spoza listy jezykow.
    languages: {
      en: 'https://ezpace.dawidolko.pl/',
      pl: 'https://ezpace.dawidolko.pl/pl/',
      'x-default': 'https://ezpace.dawidolko.pl/',
    },
  },
  robots: { index: true, follow: true },
};

const daneStrukturalne = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'EzPace',
  url: 'https://ezpace.dawidolko.pl/pl/',
  description: 'Plany biegowe pisane pod jeden cel i jeden kalendarz. Kalkulator tempa, strefy tetna i cotygodniowa korekta planu przez trenera.',
  areaServed: 'PL',
  inLanguage: 'pl',
  provider: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Public+Sans:wght@400;500;600;700&display=swap"
        />
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
