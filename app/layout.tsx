import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ninadgns.vercel.app";
const description =
  "AI Engineer at Makebell Ltd. building document-automation and LLM systems. Final-year CSE student at the University of Dhaka with a background in Olympiad Mathematics.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md. Muhaiminul Islam Ninad | AI Engineer",
  description,
  keywords: [
    "Muhaiminul Islam Ninad",
    "AI Engineer",
    "Full Stack Developer",
    "University of Dhaka",
    "Next.js",
    "Python",
    "Olympiad Mathematics",
  ],
  authors: [{ name: "Md. Muhaiminul Islam Ninad", url: siteUrl }],
  creator: "Md. Muhaiminul Islam Ninad",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Md. Muhaiminul Islam Ninad",
    title: "Md. Muhaiminul Islam Ninad | AI Engineer",
    description,
    images: [
      {
        url: "/profile.jpg",
        width: 1033,
        height: 1033,
        alt: "Md. Muhaiminul Islam Ninad",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Md. Muhaiminul Islam Ninad | AI Engineer",
    description,
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Scroll-reveal ships the markup at opacity:0 and lets JS fade it in.
            Without JS that leaves the page blank below the hero, so reveal it. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
