import type { Metadata } from 'next';
import '../globals.css';
import { TRESC } from '@/components/tresc';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const t = TRESC['en'];

export const metadata: Metadata = {
  metadataBase: new URL('https://ezpace.dawidolko.pl'),
  title: { default: 'EzPace — running plans and a pace calculator', template: '%s — EzPace' },
  description: 'Running plans written for one goal and one calendar. Pace calculator, heart-rate zones and a weekly correction from your own data.',
  keywords: ['running plan', 'running coach', 'pace calculator', 'marathon training', 'heart rate zones'],
  authors: [{ name: 'Dawid Olko', url: 'https://dawidolko.pl' }],
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: 'pl_PL',
    url: 'https://ezpace.dawidolko.pl/',
    siteName: 'EzPace',
    title: 'EzPace — running plans and a pace calculator',
    description: 'Running plans written for one goal and one calendar. Pace calculator, heart-rate zones and a weekly correction from your own data.',
  },
  twitter: { card: 'summary_large_image', title: 'EzPace — running plans and a pace calculator', description: 'Running plans written for one goal and one calendar. Pace calculator, heart-rate zones and a weekly correction from your own data.' },
  alternates: {
    canonical: 'https://ezpace.dawidolko.pl/',
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
  url: 'https://ezpace.dawidolko.pl/',
  description: 'Running plans written for one goal and one calendar. Pace calculator, heart-rate zones and a weekly correction from your own data.',
  areaServed: 'PL',
  inLanguage: 'en',
  provider: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
