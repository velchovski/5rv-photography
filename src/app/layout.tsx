import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
