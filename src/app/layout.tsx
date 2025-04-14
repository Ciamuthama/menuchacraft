import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/component/footer";
import Nav from "@/component/nav";

export const metadata: Metadata = {
  title: "Menucha craft",
  description: "Christian stationery & gifts",
  keywords: ['Christian notebooks', 'faith journals', 'Christian gifts Kenya', 'Menucha', 'inspirational stationery','notebook', 'note','stationery', 'gift', 'journal'],
  authors: [{ name: "Menucha craft" }],
  metadataBase: new URL('https://menucha.co.ke'),
  openGraph: {
    title: "Menucha craft",
    description: "Christian stationery & gifts",
    url: "https://menucha.co.ke",
    siteName: "Menucha craft",
    images: [{ url: "/preview.png", width: 1200, height: 630 }],
    locale:"en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menucha craft",
    description: "Christian stationery & gifts",
    images: "/preview.png",
  },
  icons: {
    icon: "/favicon.ico",
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
      <meta name="google-site-verification" content="mYluChv6NCL1xYc8mpDfWjJvPJUb_3PvXVdGPE8lxKA" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
