import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review and manage your shopping cart. Update quantities, remove items, and proceed to checkout.",
  openGraph: {
    title: "Shopping Cart - rsrCrafts",
    description: "Review and manage your shopping cart. Update quantities, remove items, and proceed to checkout.",
    url: '/cart',
    images: [
      {
        url: '/images/og/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'rsrCrafts Shopping Cart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shopping Cart - rsrCrafts",
    description: "Review and manage your shopping cart.",
    images: ['/images/og/opengraph.png'],
  },
}