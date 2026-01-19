"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { getProductBySlug, getSimilarProducts, getPreviousProduct, getNextProduct } from "@/lib/shop/utils"
import { ProductCard } from "@/components/shop/product-card"

export default function ProductPage() {
  const params = useParams()
  const { addToCart } = useCart()

  const slug = typeof params.slug === "string" ? params.slug : null

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

  const handleAddToCart = () => {
    addToCart(product.id)
  }

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
          >
            <span aria-hidden="true">←</span>
            <span>Shop</span>
          </Link>
        </nav>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              className="object-cover"
              priority
              style={{
                viewTransitionName: `product-image-${product.id}`,
              }}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {product.company}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight">
                {product.name}
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base text-muted-foreground">
                {product.description}
              </p>

              <dl className="grid gap-3 border-t border-border pt-4">
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-muted-foreground">
                    Price
                  </dt>
                  <dd className="text-base font-semibold tabular-nums">
                    ${product.price.toFixed(2)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-muted-foreground">
                    Company
                  </dt>
                  <dd className="text-sm">{product.company}</dd>
                </div>
              </dl>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <nav
            aria-label="Product navigation with similar products"
            className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-4 lg:w-auto">
              {previousProduct ? (
                <Link
                  href={`/shop/${previousProduct.slug}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span aria-hidden="true">←</span>
                  <span>Previous</span>
                </Link>
              ) : (
                <div className="w-20" />
              )}
            </div>

            {similarProducts.length > 0 && (
              <section aria-label="Similar products" className="flex-1">
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                  {similarProducts.slice(0, 3).map((similarProduct) => (
                    <ProductCard
                      key={similarProduct.id}
                      product={similarProduct}
                      href={`/shop/${similarProduct.slug}`}
                    />
                  ))}
                </div>
              </section>
            )}

            <div className="flex items-center gap-4 lg:w-auto lg:justify-end">
              {nextProduct ? (
                <Link
                  href={`/shop/${nextProduct.slug}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>Next</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <div className="w-20" />
              )}
            </div>
          </nav>
        </div>
      </div>
    </main>
  )
}
