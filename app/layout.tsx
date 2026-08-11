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
  "AI Backend Engineer at Makebell Ltd. building document-automation and LLM systems. Final-year CSE student at the University of Dhaka with a background in Olympiad Mathematics.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md. Muhaiminul Islam Ninad | AI Backend Engineer",
  description,
  keywords: [
    "Muhaiminul Islam Ninad",
    "AI Backend Engineer",
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
    title: "Md. Muhaiminul Islam Ninad | AI Backend Engineer",
    description,
    images: [
      {
        url: "/profile.jpg",
        width: 1749,
        height: 1749,
        alt: "Md. Muhaiminul Islam Ninad",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Md. Muhaiminul Islam Ninad | AI Backend Engineer",
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
        {children}
      </body>
    </html>
  );
}
