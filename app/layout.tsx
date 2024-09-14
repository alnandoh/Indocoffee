import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import StructuredData from "./_components/StructuredData";

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
  keywords:
    "Indonesian coffee, NusaBean, premium coffee, coffee beans, arabica coffee, robusta coffee",
  openGraph: {
    title: "NusaBean - Indonesian Coffee Experience",
    description: "Discover the essence of Indonesian coffee with NusaBean.",
    url: "https://indocoffee.id",
    siteName: "NusaBean",
    images: [
      {
        url: "https://indocoffee.id/Owner Photo.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "NusaBean - Indonesian Coffee Experience",
    description:
      "Discover the rich flavors of Indonesian coffee with NusaBean.",
    images: ["https://indocoffee.id/Owner Photo.webp"],
  },
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
          <Analytics />
        </Suspense>
        <StructuredData />
        <SpeedInsights />
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
