import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/component/footer";
import Nav from "@/component/nav";

export const metadata: Metadata = {
  title: "Menucha craft",
  description: "Christian stationery & gifts",
  openGraph: {
    title: "Menucha craft",
    description: "Christian stationery & gifts",
    url: "https://menuchacraft.vercel.app",
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
    icon: "/preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
