import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { Open_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import { routing } from '@/i18n/routing';

import "@/styles/globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "5RV Photography",
  description: "Portfolio site of 5RV Photography, along with short information about the artist.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html>
      <body className={openSans.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
