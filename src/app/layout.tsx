'use client';

// import type { Metadata } from "next";

import QueryProviders from '@/shared/providers/query-providers';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';

import localFont from 'next/font/local';
import { useEffect } from 'react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// export const metadata: Metadata = {
//   title: "Interval training",
//   description: "let's work out",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <html lang='en'>
      <Global styles={globalStyles} />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProviders>{children}</QueryProviders>
      </body>
    </html>
  );
}
