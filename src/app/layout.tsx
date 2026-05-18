import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
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
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable}`}
    >
      {/* Inline script: set theme class before first paint to prevent flash */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.classList.toggle('dark',t==='dark');}else{document.documentElement.classList.toggle('dark',!window.matchMedia('(prefers-color-scheme: light)').matches);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-space text-fore antialiased min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
