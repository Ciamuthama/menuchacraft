
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/component/footer";
import Nav from "@/component/nav";

export const metadata: Metadata = {
  title: "Manucha craft",
  description: "Manucha craft",
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
        
      </head>
      <body
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
