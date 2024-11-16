import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderMenu from "./components/Common/HeaderMenu";

export const metadata: Metadata = {
  title: 'Yingchen Liu | Senior Full-Stack Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-800 text-blue-100 antialiased`}
      >
        <div className="container mx-auto max-w-5xl px-5 md:px-10">
          <HeaderMenu activeItem="home" />

          {children}
        </div>
      </body>
    </html>
  );
}
