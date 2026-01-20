import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cart",
  description: "Review and manage your shopping cart. Update quantities, remove items, and proceed to checkout.",
  openGraph: {
    title: "Cart - Shop",
    description: "Review and manage your shopping cart. Update quantities, remove items, and proceed to checkout.",
    url: '/cart',
    images: [
      {
        url: '/images/og/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Shop Cart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cart - Shop",
    description: "Review and manage your shopping cart.",
    images: ['/images/og/opengraph.png'],
  },
}

export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}