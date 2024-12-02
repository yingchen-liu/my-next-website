import type { Metadata } from "next";
import "./globals.css";
import HeaderMenu from "./components/Common/HeaderMenu";

export const metadata: Metadata = {
  title: "Yingchen Liu | Senior Full-Stack Engineer",
  description:
    "Versatile Senior Software Engineer with over 8 years of hands-on experience, specialising in full-stack web, mobile, and cloud technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VZ85PQC5NS"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VZ85PQC5NS');
          `}
        </script>
      </head>
      <body className={`bg-gray-800 text-blue-100 font-light antialiased`}>
        <div className="container mx-auto max-w-5xl px-5 md:px-10">
          <HeaderMenu activeItem="home" />

          {children}
        </div>
      </body>
    </html>
  );
}
