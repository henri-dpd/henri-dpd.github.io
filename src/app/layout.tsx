import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henri Daniel Peña | Ingeniería de Software & Ciberseguridad",
  description:
    "Portafolio profesional de Henri Daniel Peña – Lic. en Ciencia de la Computación, Ingeniero de Software Full Stack y Especialista en Ciberseguridad.",
  keywords: [
    "Ingeniería de Software",
    "Ciberseguridad",
    "AWS",
    "Serverless",
    "Full Stack",
    "Next.js",
  ],
  metadataBase: new URL("https://henri-dpd.github.io"),
  openGraph: {
    type: "website",
    url: "https://henri-dpd.github.io",
    title: "Henri Peña | Ingeniería de Software & Ciberseguridad",
    description:
      "Full Stack Engineer y Especialista en Ciberseguridad. Sistemas resilientes, Cloud-Native y seguridad por diseño.",
    images: [{ url: "/icons/icon-1024.png", width: 1024, height: 1024, alt: "Henri Peña" }],
    siteName: "Henri Peña",
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: "Henri Peña | Ingeniería de Software & Ciberseguridad",
    description:
      "Full Stack Engineer y Especialista en Ciberseguridad. Sistemas resilientes, Cloud-Native y seguridad por diseño.",
    images: ["/icons/icon-1024.png"],
  },
  icons: {
    icon: [
      { url: "/icons/icon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/icon-256.png", sizes: "256x256", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className="bg-[#0b0f19] text-white antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
