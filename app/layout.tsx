import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { aiAndMl, engineering, languages, profile, siteUrl } from "./constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Google cuts descriptions off around 155 characters and social previews
// around 125, so each gets a version that fits.
const description =
  "AI Engineer at Makebell Ltd. building LLM agents and document automation for AI legal drafting. Final-year CSE student at the University of Dhaka.";
const socialDescription =
  "AI Engineer at Makebell Ltd. building LLM agents for AI legal drafting. Final-year CSE student, University of Dhaka.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md. Muhaiminul Islam Ninad | AI Engineer",
  description,
  keywords: [
    "Muhaiminul Islam Ninad",
    "AI Engineer",
    "Full Stack Developer",
    "University of Dhaka",
    "React",
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
    description: socialDescription,
    // og:image comes from app/opengraph-image.tsx and stays the fallback:
    // platforms that don't play og:video (LinkedIn, X, Slack, WhatsApp)
    // ignore it and show the image card instead.
    // public/og-video.mp4 is a 10s muted, seamless loop of tiles turning in
    // waves in the site's colours, H.264 in MP4 since that is what players
    // that do support it expect.
    videos: [
      {
        // Absolute: Next leaves video URLs as written, and scrapers
        // cannot resolve a relative one.
        url: `${siteUrl}/og-video.mp4`,
        secureUrl: `${siteUrl}/og-video.mp4`,
        type: "video/mp4",
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Muhaiminul Islam Ninad | AI Engineer",
    description: socialDescription,
  },
};

// Structured data naming who this page is about, for search engines and agents.
// ProfilePage is the type Google documents for a page about one person.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    alternateName: profile.alternateNames,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    email: `mailto:${profile.email}`,
    jobTitle: profile.jobTitle,
    description: profile.summary,
    worksFor: { "@type": "Organization", name: profile.employer },
    affiliation: { "@type": "CollegeOrUniversity", name: "University of Dhaka" },
    alumniOf: { "@type": "EducationalOrganization", name: "Notre Dame College" },
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: [...languages, ...aiAndMl, ...engineering],
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
        <script
          type="application/ld+json"
          // Escape "<" so no string in the data can close the script tag early.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
