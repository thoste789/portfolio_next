import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tim Hoste — Lead UI/UX Designer",
  description:
    "Lead UI/UX Designer crafting architectural interfaces for the next generation of digital products.",
  icons: {
    icon: [
      { url: "/fav/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/fav/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/fav/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/fav/favicon-196x196.png", sizes: "196x196", type: "image/png" },
    ],
    apple: [
      { url: "/fav/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/fav/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/fav/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/fav/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/fav/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/fav/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/fav/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/fav/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/fav/apple-touch-icon-167x167.png", sizes: "167x167" },
      { url: "/fav/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "android-chrome", url: "/fav/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/fav/android-chrome-512x512.png", sizes: "512x512" },
      { rel: "msapplication-square70x70logo", url: "/fav/mstile-70x70.png" },
      { rel: "msapplication-square144x144logo", url: "/fav/mstile-144x144.png" },
      { rel: "msapplication-square150x150logo", url: "/fav/mstile-150x150.png" },
      { rel: "msapplication-wide310x150logo", url: "/fav/mstile-310x150.png" },
      { rel: "msapplication-square310x310logo", url: "/fav/mstile-310x310.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
