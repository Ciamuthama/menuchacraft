import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/component/footer";
import Nav from "@/component/nav";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Menucha Craft | Christian Notebooks & Gifts in Kenya",
  description:
    "Explore beautiful Christian stationery, sermon notebooks, and gifts crafted to inspire faith and gratitude. Menucha Craft — made in Kenya for believers everywhere.",
  keywords: [
    "Christian notebooks",
    "faith journals",
    "Christian gifts Kenya",
    "Menucha",
    "inspirational stationery",
    "notebook",
    "note",
    "stationery",
    "gift",
    "journal",
    "men sermon notebook",
    "men journal",
    "sermon notebooks Kenya",
    "gratitude journal",
    "ladies sermon notebook",
    "bloom journal",
    "Christian shop Kenya",
    "faith gifts Kenya",
  ],
  authors: [{ name: "Menucha Craft" }],
  metadataBase: new URL("https://menucha.co.ke"),
  openGraph: {
    title: "Menucha Craft | Christian Notebooks & Gifts",
    description: "Christian stationery & gifts to uplift your faith journey.",
    url: "https://menucha.co.ke",
    siteName: "Menucha Craft",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Menucha Craft Preview",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menucha Craft",
    description: "Christian notebooks & gifts from Kenya",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="mYluChv6NCL1xYc8mpDfWjJvPJUb_3PvXVdGPE8lxKA"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Analytics />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
