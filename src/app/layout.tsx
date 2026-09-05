import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const opis =
  'Plany biegowe pisane pod jeden cel i jeden kalendarz. Kalkulator tempa, ' +
  'strefy tetna i cotygodniowa korekta planu przez trenera.';

export const metadata: Metadata = {
  metadataBase: new URL('https://ezpace.dawidolko.pl'),
  title: {
    default: 'EzPace — plany biegowe i kalkulator tempa',
    template: '%s — EzPace',
  },
  description: opis,
  keywords: [
    'plan biegowy',
    'trening biegowy',
    'kalkulator tempa',
    'przygotowanie do maratonu',
    'strefy tetna',
    'trener biegania',
  ],
  authors: [{ name: 'Dawid Olko', url: 'https://dawidolko.pl' }],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://ezpace.dawidolko.pl',
    siteName: 'EzPace',
    title: 'EzPace — plany biegowe i kalkulator tempa',
    description: opis,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EzPace — plany biegowe i kalkulator tempa',
    description: opis,
  },
  alternates: { canonical: 'https://ezpace.dawidolko.pl' },
  robots: { index: true, follow: true },
};

const daneStrukturalne = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'EzPace',
  url: 'https://ezpace.dawidolko.pl',
  description: opis,
  areaServed: 'PL',
  priceRange: '149–690 PLN',
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
          Przejdź do treści głównej
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
