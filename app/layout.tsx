import type { Metadata } from "next";
import { Anton, Archivo, Permanent_Marker, Space_Mono } from "next/font/google";
import "./globals.css";
import { CustomImagePointer } from "./custom-image-pointer";
import { SiteFooter } from "./site-footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL to the real domain so OG images resolve absolutely.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ruberto.net";
const canonicalUrl = siteUrl.replace(/\/$/, "");
const description =
  "Damen Brar is a Punjabi-Italian writer and director based in Toronto, creating bold, character-driven narrative, music video, and commercial work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Damen Brar — Writer & Director | DiR. BRAR",
    template: "%s | Damen Brar",
  },
  description,
  applicationName: "Damen Brar",
  authors: [{ name: "Damen R. Brar", url: canonicalUrl }],
  creator: "Damen R. Brar",
  keywords: [
    "Damen Brar",
    "Damen R. Brar",
    "DiR. BRAR",
    "Toronto director",
    "Canadian film director",
    "writer director",
    "music video director",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Damen Brar — Writer & Director | DiR. BRAR",
    description,
    url: "/",
    siteName: "Damen Brar | DiR. BRAR",
    images: [
      {
        url: "/hero.jpg",
        alt: "Damen Brar directing on set",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damen Brar — Writer & Director | DiR. BRAR",
    description,
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/dirBrar-ProfilePic-2.jpg",
    shortcut: "/dirBrar-ProfilePic-2.jpg",
    apple: "/dirBrar-ProfilePic-2.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${anton.variable} ${permanentMarker.variable} ${spaceMono.variable} h-full`}
    >
      <body className="flex min-h-screen flex-col bg-ink text-bone">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${canonicalUrl}/#website`,
                  url: canonicalUrl,
                  name: "Damen Brar",
                  alternateName: "DiR. BRAR",
                  description,
                  inLanguage: "en-CA",
                  publisher: { "@id": `${canonicalUrl}/#damen-brar` },
                },
                {
                  "@type": "Person",
                  "@id": `${canonicalUrl}/#damen-brar`,
                  name: "Damen R. Brar",
                  alternateName: ["Damen Brar", "DiR. BRAR", "Dir Brar"],
                  url: canonicalUrl,
                  image: `${canonicalUrl}/dirBrar-ProfilePic-2.jpg`,
                  jobTitle: "Writer and Director",
                  description,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Toronto",
                    addressRegion: "Ontario",
                    addressCountry: "CA",
                  },
                  sameAs: [
                    "https://www.instagram.com/damenrb/",
                    "https://ca.linkedin.com/in/drubertob",
                  ],
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <CustomImagePointer option="Bic4Colour-pointer" />
      </body>
    </html>
  );
}
