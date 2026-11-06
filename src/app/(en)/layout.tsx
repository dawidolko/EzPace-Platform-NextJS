import type { Metadata } from 'next';
import '../globals.css';
import { fontVariables } from '../fonts';
import { CONTENT_SECURITY_POLICY } from '../csp';
import { TRESC } from '@/components/tresc';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const t = TRESC['en'];

const OG_ALT = 'EzPace: running plans counted back from race day';

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
    images: [{ url: 'https://ezpace.dawidolko.pl/og-image.png', width: 1200, height: 630, alt: OG_ALT }],
  },
  twitter: { card: 'summary_large_image', title: 'EzPace — running plans and a pace calculator', description: 'Running plans written for one goal and one calendar. Pace calculator, heart-rate zones and a weekly correction from your own data.', images: ['https://ezpace.dawidolko.pl/og-image.png'] },
  alternates: {
    canonical: 'https://ezpace.dawidolko.pl/',
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
      url: 'https://ezpace.dawidolko.pl/',
      description: 'Running plans written for one goal and one calendar. Pace calculator, heart-rate zones and a weekly correction from your own data.',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
    },
    {
      '@type': 'Service',
      name: 'Running coaching',
      url: 'https://ezpace.dawidolko.pl/',
      description: 'Running plans written for one goal and one calendar. Pace calculator, heart-rate zones and a weekly correction from your own data.',
      serviceType: 'Running coaching',
      areaServed: 'PL',
      provider: { '@type': 'Person', name: 'Dawid Olko', url: 'https://dawidolko.pl' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        <script src="/a11y/a11y-panel.js" data-accent="#cc0055" defer></script>
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
