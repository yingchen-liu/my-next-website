import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import HeaderMenu from "./components/Common/HeaderMenu";
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/seo/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Yingchen Liu",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1f2937",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <Script
          id="google-analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VZ85PQC5NS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VZ85PQC5NS');
          `}
        </Script>
      </head>
      <body className={`bg-gray-800 text-blue-100 font-light antialiased`}>
        <div className="container mx-auto max-w-5xl px-6 sm:px-8 md:px-10">
          <HeaderMenu />

          {children}
        </div>
      </body>
    </html>
  );
}
