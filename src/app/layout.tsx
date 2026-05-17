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
