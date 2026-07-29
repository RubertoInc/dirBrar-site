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
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DiR. BRAR — Damen R. Brar, Writer / Director",
    template: "%s — DiR. BRAR",
  },
  description:
    "Damen R. Brar is a Punjabi-Italian writer and director based in Tkaronto / Toronto. Bold, character-driven stories about desire, identity, and self-acceptance.",
  openGraph: {
    title: "DiR. BRAR — Damen R. Brar, Writer / Director",
    description:
      "Bold, character-driven stories. Selected narrative and music video work.",
    images: ["/hero.jpg"],
    type: "website",
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
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <CustomImagePointer option="Bic4Colour-pointer" />
      </body>
    </html>
  );
}
