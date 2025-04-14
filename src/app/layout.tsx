import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/component/footer";
import Nav from "@/component/nav";

export const metadata: Metadata = {
  title: "Menucha Craft | Christian Notebooks & Gifts in Kenya",
  description: "Explore beautiful Christian stationery, sermon notebooks, and gifts crafted to inspire faith and gratitude. Menucha Craft — made in Kenya for believers everywhere.",
  keywords: [
    "Christian notebooks", "faith journals", "Christian gifts Kenya", "Menucha",
    "inspirational stationery", "notebook", "note", "stationery", "gift", "journal",
    "men sermon notebook", "men journal", "sermon notebooks Kenya", "gratitude journal",
    "ladies sermon notebook", "bloom journal", "Christian shop Kenya", "faith gifts Kenya"
  ],
  authors: [{ name: "Menucha Craft" }],
  metadataBase: new URL("https://menucha.co.ke"),
  openGraph: {
    title: "Menucha Craft | Christian Notebooks & Gifts",
    description: "Christian stationery & gifts to uplift your faith journey.",
    url: "https://menucha.co.ke",
    siteName: "Menucha Craft",
    images: [{ url: "/preview.png", width: 1200, height: 630, alt: "Menucha Craft Preview" }],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menucha Craft",
    description: "Christian notebooks & gifts from Kenya",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

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
