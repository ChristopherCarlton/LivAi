import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LivAI",
  description: "LivAi provides a suite of cloud-based artificial intelligence (AI)-driven software solutions focused on providing improved analysis and deep insights towards diagnosis, prognosis, prediction to drug response, and treatment monitoring in oncology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#14347b" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EWKEYT49XV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EWKEYT49XV');
            `,
          }}
        />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}