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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "PODGALLERY | Original Artworks",
    template: "%s | PODGALLERY",
  },
  description:
    "Discover original artworks and meaningful pieces from PODGALLERY, a curated gallery in Lagos, Nigeria.",
  applicationName: "PODGALLERY",
  keywords: ["original artwork", "Nigerian art", "Lagos gallery", "contemporary art"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "PODGALLERY",
    title: "PODGALLERY | Original Artworks",
    description:
      "Discover original artworks and meaningful pieces from PODGALLERY, a curated gallery in Lagos, Nigeria.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PODGALLERY | Original Artworks",
    description:
      "Discover original artworks and meaningful pieces from PODGALLERY.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
