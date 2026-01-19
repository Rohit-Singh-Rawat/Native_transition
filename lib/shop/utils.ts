import type { Product } from "./types"
import { products } from "./products"

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getSimilarProducts(
  currentProductSlug: string,
  count: number = 3
): Product[] {
  const currentProduct = getProductBySlug(currentProductSlug)
  if (!currentProduct) return []

  return products
    .filter((product) => product.slug !== currentProductSlug)
    .slice(0, count)
}

export function getPreviousProduct(currentProductSlug: string): Product | null {
  const currentIndex = products.findIndex((p) => p.slug === currentProductSlug)
  if (currentIndex <= 0) return null
  return products[currentIndex - 1] ?? null
}

export function getNextProduct(currentProductSlug: string): Product | null {
  const currentIndex = products.findIndex((p) => p.slug === currentProductSlug)
  if (currentIndex < 0 || currentIndex >= products.length - 1) return null
  return products[currentIndex + 1] ?? null
}
