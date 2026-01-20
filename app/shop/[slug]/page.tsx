import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductBySlug, getSimilarProducts, getPreviousProduct, getNextProduct } from "@/lib/shop/utils"
import { ProductBreadcrumb } from "@/components/shop/product-breadcrumb"
import { ProductImage, ProductHeader, ProductInfo, ProductActions } from "@/components/shop/product-details"
import { ProductNavigation } from "@/components/shop/product-navigation"
import { ViewTransition } from "react"

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params

  if (!slug) {
    return {
      title: "Product Not Found",
    }
  }

  const product = getProductBySlug(slug)
  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} - ${product.company}`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${product.company} | Shop`,
      description: product.description,
      url: `/shop/${slug}`,
      images: [
        {
          url: product.imageSrc,
          width: 800,
          height: 800,
          alt: product.imageAlt,
        },
        {
          url: '/images/og/opengraph.png',
          width: 1200,
          height: 630,
          alt: 'Shop',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - ${product.company} | Shop`,
      description: product.description,
      images: [product.imageSrc, '/images/og/opengraph.png'],
    },
  }
}

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  if (!slug) {
    notFound()
  }

  const product = getProductBySlug(slug)
  if (!product) {
    notFound()
  }

  const previousProduct = getPreviousProduct(slug)
  const nextProduct = getNextProduct(slug)
  const similarProducts = getSimilarProducts(slug, 3)

  return (
    <ViewTransition enter={{default: "none", backwards: "enter-left", forwards: "enter-right"}} exit={{default: "none", backwards: "exit-left", forwards: "exit-right"}}>
    <main className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <ViewTransition name="shop-breadcrumb" >
        <ProductBreadcrumb /></ViewTransition>
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          <ViewTransition name={`product-card-${product.id}`} > 
          <ProductImage 
            product={product} 
            previousProduct={previousProduct}
            nextProduct={nextProduct}
          /> </ViewTransition>

          <div className="flex flex-col gap-6 flex-1">
            <ProductHeader product={product} />
            <ProductInfo product={product} />
            <ProductActions productId={product.id} />
           
          </div>
        </div>
        <ViewTransition update={'none'} >
        <ProductNavigation similarProducts={similarProducts} />
        </ViewTransition>
      </div>
    </main> </ViewTransition>
  )
}
