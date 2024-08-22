import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

const AnalyticsTracker = dynamic(
  () => import("@/components/AnalyticsTracker"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "NusaBean",
  description: "Discover the Essence of Indonesian Coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        <ProgressBar />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <CTA />
      </body>
    </html>
  );
}
