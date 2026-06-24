import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SideNavigation from "@/components/SideNavigation";
import PageTitleSync from "@/components/PageTitleSync";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: {
    default: "Swadeshi",
    template: "%s | Swadeshi",
  },
  icons: {
    icon: "/STC_Logo.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <PageTitleSync />
        <Navbar />
        {children}
        <SideNavigation />
        <Footer />
      </body>
    </html>
  );
}
