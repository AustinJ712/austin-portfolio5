import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import Sidebar from './components/sidebar';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://austinsuhr.com'),
  title: {
    default: 'Austin Suhr',
    template: '%s | Austin Suhr',
  },
  description: 'Product engineer, writer, and creator.',
  openGraph: {
    title: 'Austin Suhr',
    description: 'Product Engineer, writer, and creator.',
    url: 'https://austinsuhr.com',
    siteName: 'Austin Suhr',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Austin Suhr',
    card: 'summary_large_image',
  },
  verification: {
    google: 'bwM8WZoXVRkR54W9jGEzZFuCa-j1Ocm69uyaQ7GyR2U',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        'antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'
      )}
    >
      <body>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}


