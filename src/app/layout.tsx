import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Avyu.ai | Deploy Enterprise AI Faster",
    template: "%s | Avyu.ai",
  },
  description:
    "Avyu helps organizations accelerate AI adoption through a library of business-ready Enterprise AI Accelerators customized and deployed for your workflows.",
  metadataBase: new URL("https://avyu.ai"),
  openGraph: {
    title: "Avyu.ai | Deploy Enterprise AI Faster",
    description:
      "Deploy business-ready Enterprise AI Accelerators customized for your workflows and environment.",
    url: "https://avyu.ai",
    siteName: "Avyu.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avyu.ai | Deploy Enterprise AI Faster",
    description:
      "Deploy business-ready Enterprise AI Accelerators customized for your workflows and environment.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand/20 selection:text-foreground">
          <Navbar />
          <main className="flex-1 pt-16 flex flex-col">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
