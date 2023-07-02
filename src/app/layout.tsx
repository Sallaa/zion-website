import "./globals.css";
import { Source_Sans_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const sourceSans = Source_Sans_Pro({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "ZION",
  description: "ZION Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={sourceSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
