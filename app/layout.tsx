import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/contexts/cart-context";

const nunitoSans = Nunito_Sans({ variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shop",
    template: "%s | Shop"
  },
  description: "Premium products and essentials for your lifestyle. Quality items handpicked for style and functionality.",
  keywords: ["shop", "products", "essentials", "premium", "lifestyle", "shopping"],
  authors: [{ name: "spacing_whale" }],
  creator: "spacing_whale",
  publisher: "spacing_whale",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shop.rohitsinghrawat.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Shop",
    description: "Premium products and essentials for your lifestyle. Quality items handpicked for style and functionality.",
    url: '/',
    siteName: 'Shop',
    images: [
      {
        url: '/images/og/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Shop - Premium Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shop",
    description: "Premium products and essentials for your lifestyle.",
    images: ['/images/og/opengraph.png'],
    creator: '@spacing_whale',
  },
  icons: {
    icon: [
      { url: "/icon1.png", type: "image/png" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Shop",
    statusBarStyle: "default",
    startupImage: [
      {
        url: "/apple-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={nunitoSans.className}>
      <head>
        <meta name="apple-mobile-web-app-title" content="shop" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <CartProvider>
            <Header />
            <main className="min-h-screen py-10 flex flex-col">{children}</main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
