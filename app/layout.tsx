// app/layout.tsx
import "@/styles/styles.scss";
import type { Metadata } from "next";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";
import Script from "next/script";

// Global metadata
export const metadata: Metadata = {
  title: "Darkhorse Advisor",
  description: "Financial advising services.",
  keywords:
    "invest, portfolio, advisor, services, alan, flores, financial, consultant, business planning, investment, insurance, retirement, education, estate planning, tax, cash flow",
  authors: [{ name: "Web Developer: Kenneth Kieu" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TZRBTHL4P9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TZRBTHL4P9', { 'debug_mode': false });
          `}
        </Script>
      </body>
    </html>
  );
}