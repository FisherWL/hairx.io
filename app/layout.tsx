import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hairx.io"),
  title: "HairX | A Better Salon Consultation",
  description:
    "HairX helps salon customers explore personalized hairstyle directions and share one clear consultation with their stylist.",
  applicationName: "HairX",
  authors: [{ name: "HairX LLC" }, { name: "Qiaochun Wei" }],
  creator: "Qiaochun Wei",
  publisher: "HairX LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "HairX",
    title: "HairX | A Better Salon Consultation",
    description: "A better consultation starts before the chair.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "HairX hairstyle consultation experience on a salon tablet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HairX | A Better Salon Consultation",
    description: "A better consultation starts before the chair.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#183d32",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
